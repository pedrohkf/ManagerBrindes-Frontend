import GenericPageLayout from "@/components/pages/GenericPageLayout";
import ProductTable from "@/components/table/ProductTable";

export const clientsFields = [
    { name: 'name', label: 'Nome', type: 'text', placeholder: 'Nome do cliente' },
    { name: 'email', label: 'Email', type: 'text', placeholder: 'Email do cliente' },
    { name: 'cpf', label: 'CPF', type: 'text', placeholder: 'CPF do cliente' },

];

export default async function Page({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page } = await searchParams;
  const currentPage = page || "1";

  return (
    <div className="flex">
      <GenericPageLayout apiUrl="clients" title="client" fields={clientsFields} resourcePath="clients/page" currentPage={currentPage} renderTable={(data) => <ProductTable paginatedData={data} />} />
    </div>
  );
}