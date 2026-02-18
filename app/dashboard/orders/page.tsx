import Pages from "@/components/pages/Pages";
import { TableColumnsType } from "antd";

interface OrderData {
  uuid: string;
  reference: string;
}

const columns: TableColumnsType<OrderData> = [
  { title: 'Ref', dataIndex: 'reference' },
  { title: 'Preço Total', dataIndex: 'totalPrice' },
  { title: 'Preço Total BV', dataIndex: 'totalPriceBV' },
  { title: 'Rentabilidade', dataIndex: 'profitability' },
  { title: 'Custo', dataIndex: 'spent' },
  { title: 'Ref', dataIndex: 'reference' },
  { title: 'Status', dataIndex: 'status' }
];


export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = page || "1";

  return <Pages response="orders" currentPage={currentPage} columns={columns} />;
}