import { PersonIcon } from '@radix-ui/react-icons';
import { Children, useState } from 'react';

interface TableFilterProps {
  filterValue: string;
  onFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
}

interface TableProps {
  header: string[];
  children: React.ReactNode;
  filter?: boolean;
  filterOptions?: string[];
}

export function Table({
  header,
  children,
  filter = false,
  filterOptions = []
}: TableProps) {
  const [filterValue, setFilterValue] = useState('');

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterValue(event.target.value);
  };

  const filteredChildren = Children.toArray(children).filter((child: any) =>
    child.props.children.some((cell: any) =>
      cell.props.children
        .toString()
        .toLowerCase()
        .includes(filterValue.toLowerCase())
    )
  );

  return (
    <div className="flex flex-col justify-center text-black">
      <div className="flex justify-end gap-6 p-2">
        {filter && (
          <TableFilter
            key={filterValue}
            filterValue={filterValue}
            onFilterChange={handleFilterChange}
            options={filterOptions}
          />
        )}
      </div>
      <div className="p-4  overflow-scroll px-0">
        <table className="w-full min-w-max text-center table-auto ">
          <thead>
            <tr>
              {header.map((item, index) => (
                <th
                  key={index}
                  className={`text-center border-y border-blue-gray-100 bg-blue-gray-50/50 p-4`}>
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    {item}
                  </p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{filteredChildren}</tbody>
        </table>
      </div>
    </div>
  );
}

export function TableRow({ children }: { children: React.ReactNode }) {
  return <tr>{children}</tr>;
}

export function TableCell({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td className={`p-2 border-b border-blue-gray-50 ${className}`}>
      <p className="block antialiased font-sans text-sm  leading-normal text-blue-gray-900 font-normal">
        {children}
      </p>
    </td>
  );
}

export function TableCellIcon({ children, index }: { children: React.ReactNode, index: number }) {
  return (
    <td className="p-4 border-b border-blue-gray-50">
      <div className="flex items-center gap-3">
        <PersonIcon className="inline-block relative object-center w-12 h-12 rounded-lg border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
        <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
          {index +1 }. {children}
        </p>
      </div>
    </td>
  );
}

export function TableCellActive({ name }: { name: string }) {
  return (
    <td className="p-4 border-b border-blue-gray-50">
      <div className="w-max">
        <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-green-500/20 text-green-900 py-1 px-2 text-xs rounded-md">
          <span className="">{name}</span>
        </div>
      </div>
    </td>
  );
}

function TableFilter({
  filterValue,
  onFilterChange,
  options
}: TableFilterProps) {
  return (
    <div className="flex items-center justify-end space-x-3 w-full">
      <select
        value={filterValue}
        onChange={onFilterChange}
        aria-placeholder="Filtrar por vendedor"
        className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-300"
      >
        <option value="">Seleccionar vendedor</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
