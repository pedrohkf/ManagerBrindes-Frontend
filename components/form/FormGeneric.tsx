import { Button, GetProp, message, Upload, UploadFile, UploadProps } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

interface FieldProp {
    name: string;
    type: string;
}

interface FormType {
    fields: FieldProp[];
    onSubmit: (data: FormData) => Promise<void>;
}

export default function FormGeneric({ fields, onSubmit }: FormType) {
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList);
    };

    const onPreview = async (file: UploadFile) => {
        let src = file.url as string;
        if (!src) {
            src = await new Promise((resolve) => {
                const reader = new FileReader();
                reader.readAsDataURL(file.originFileObj as FileType);
                reader.onload = () => resolve(reader.result as string);
            });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
    };

    const internalHandleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        if (fileList && fileList[0]?.originFileObj) {
            formData.append('file', fileList[0].originFileObj);
        }

        await onSubmit(formData);
    };

    return (
        <form onSubmit={internalHandleSubmit}>
            {fields.map((field) => (
                <div key={field.name} style={{ marginBottom: 16 }}>
                    <label style={{ display: 'block', marginBottom: 8 }}>
                        {field.name.toUpperCase()}
                    </label>
                    {field.type === 'file' ? (
                        <Upload
                            maxCount={1}
                            listType="picture-card"
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                        >
                            {fileList.length < 1 && (
                                <div>
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            )}
                        </Upload>
                    ) : (
                        <Input
                            name={field.name}
                            type={field.type}
                            placeholder={`Digite o ${field.name}`}
                        />
                    )}
                </div>
            ))}

            <Button type="primary" htmlType="submit" block loading={loading}>
                Salvar Dados
            </Button>
        </form>
    );
}
