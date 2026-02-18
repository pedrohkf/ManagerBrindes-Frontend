import { TableColumnsType } from "antd";
import Get from "../common/Get";
import SideBar from "../menu/sidebar";
import TableGeneric from "../table/Table";

interface PagesProps<T> {
  currentPage: string;
  response: string;
  columns: TableColumnsType<T>;
}

function Pages<T extends Object>({ response, currentPage, columns } : PagesProps<T>) {
  return (
    <div className="flex">
      <SideBar />
      <Get<T> resource={response} page={`page/${currentPage}`}>
        {(paginatedData) => (
          <TableGeneric<T>
            data={paginatedData.data}
            columns={columns}
            totalRecords={paginatedData.total}
            currentPage={paginatedData.currentPage}
            totalPages={paginatedData.totalPages}
          />)}
      </Get>
    </div>
  )
}

export default Pages
