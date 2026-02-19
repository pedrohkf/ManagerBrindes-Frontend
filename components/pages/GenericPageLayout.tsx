import Get from "../common/Get";
import Sidebar from "../menu/sidebar";
import ModalButton from "../modal/ModalButton";

interface GenericPageProps<T> {
  title: string;
  apiUrl: string;
  fields: T[]
  resourcePath: string;
  currentPage: string;
  renderTable: (paginatedData: any) => React.ReactNode; 
}

export default function GenericPageLayout<T>({ 
  title,
  apiUrl,
  fields,
  resourcePath, 
  currentPage, 
  renderTable 
}: GenericPageProps<T>) {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <ModalButton page={apiUrl} title={title} fields={fields}  />
        <Get<T> page={`${resourcePath}/${currentPage}`}>
          {(paginatedData) => renderTable(paginatedData)}
        </Get>
      </div>
    </div>
  );
}
