import GenericPageLayout from "@/components/pages/GenericPageLayout";
import OrderTable from "@/components/table/OrderTable";

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = page || "1";

  return (
    <div className="flex">
      <GenericPageLayout apiUrl="orders" resourcePath="orders/page" currentPage={currentPage} renderTable={(data) => <OrderTable paginatedData={data} />} />
    </div>
  );
}