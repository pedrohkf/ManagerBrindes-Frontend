import Get from "../common/Get";
import Sidebar from "../menu/sidebar";

interface GenericPageProps<T> {
  resourcePath: string;
  currentPage: string;
  renderTable: (paginatedData: any) => React.ReactNode; 
}

export default function GenericPageLayout<T>({ 
  resourcePath, 
  currentPage, 
  renderTable 
}: GenericPageProps<T>) {
  return (
    <div className="flex">
      <Sidebar />
      <div>
        <Get<T> page={`${resourcePath}/${currentPage}`}>
          {(paginatedData) => renderTable(paginatedData)}
        </Get>
      </div>
    </div>
  );
}
