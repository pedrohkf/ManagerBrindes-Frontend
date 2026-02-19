import { Button, GetProp, message, Upload, UploadFile, UploadProps } from "antd";
import Input from "antd/es/input/Input";
import { useState } from "react";
import { submitData } from "@/actions/post";

type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export default function FormProduct() {
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const onChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        setFileList(newFileList.slice(-1));
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);

        const dataToSend = new FormData();

        const nameInput = e.currentTarget.elements.namedItem('name') as HTMLInputElement;
        if (nameInput) {
            dataToSend.append('name', nameInput.value);
        }

        if (fileList.length > 0 && fileList[0].originFileObj) {
            dataToSend.append('file', fileList[0].originFileObj as File);
        }
        dataToSend.forEach((value, key) => console.log(`${key}:`, value));

        try {
            await submitData('products', dataToSend);
            message.success("Produto salvo!");
        } catch (error: any) {
            message.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', marginBottom: 8 }}>
                    Nome
                </label>
                <Input
                    name="name"
                    placeholder="Digite o nome do produto"
                    onChange={(e) => console.log(e.target.value)} />
                <Upload
                    maxCount={1}
                    listType="picture-card"
                    fileList={fileList}
                    onChange={onChange}
                    onPreview={onPreview}
                    beforeUpload={() => false}
                >
                    {fileList.length < 1 && (
                        <div>
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    )}
                </Upload>

            </div>

            <Button
                type="primary"
                htmlType="submit"
                block
                loading={loading}
                disabled={fileList.length === 0}
            >
                Salvar Dados
            </Button>
        </form>
    );
}
