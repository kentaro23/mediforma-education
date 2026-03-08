import type { TableColumn } from "@/lib/types";

type TableProps<T extends Record<string, string | number>> = {
  columns: TableColumn<T>[];
  data: T[];
};

export function Table<T extends Record<string, string | number>>({
  columns,
  data
}: TableProps<T>) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-neutralGray-100 bg-white shadow-soft">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-neutralGray-50 text-navy-900">
          <tr>
            {columns.map((column) => (
              <th key={String(column.key)} className="px-4 py-3 font-semibold">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t border-neutralGray-100">
              {columns.map((column) => (
                <td key={String(column.key)} className="px-4 py-3 text-neutralGray-600">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
