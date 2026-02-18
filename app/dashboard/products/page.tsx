import GenericPageLayout from "@/components/pages/GenericPageLayout";
import ProductTable from "@/components/table/OrderProduct";

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = page || "1";

  return (
    <div className="flex">
      <GenericPageLayout resourcePath="products/page" currentPage={currentPage} renderTable={(data) => <ProductTable paginatedData={data} />} />
    </div>
  );
}