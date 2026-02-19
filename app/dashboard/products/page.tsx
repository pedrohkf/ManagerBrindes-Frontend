import GenericPageLayout from "@/components/pages/GenericPageLayout";
import ProductTable from "@/components/table/ProductTable";

export const productFields = [
    { name: 'name', label: 'Nome do Produto', type: 'text', placeholder: 'Ex: Teclado Mecânico' },
    { name: 'img', label: 'Carregue uma imagem', type: 'file', min: 0 },
];

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = page || "1";

  return (
    <div className="flex">
      <GenericPageLayout apiUrl="products" title="Produto" fields={productFields} resourcePath="products/page" currentPage={currentPage} renderTable={(data) => <ProductTable paginatedData={data}  />} />
    </div>
  );
}