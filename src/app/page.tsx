import { columns } from "./_components/columns";
import { getListMutation } from "./_components/data";
import { DataTable } from "./_components/data-table";

export default function HomePage() {
  return (
    <div className="max-w-full">
      <DataTable
        columns={columns}
        data={getListMutation.data}
        pinnedColumns={{
          right: ["type", "amount", "created_at"],
        }}
      />
    </div>
  );
}
