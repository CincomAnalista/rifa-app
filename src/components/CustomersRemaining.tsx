import { CustomersProps } from '../data';
import { Table, TableCell, TableCellIcon, TableRow } from './common';

interface Props {
  data: CustomersProps[];
}

export function CustomersRemaining({ data }: Props) {
  const closeCustomers = data
    .filter(
      (customer) =>
        customer.Falta_para_boleta > 0 && customer.Falta_para_boleta <= 4000000 // Adjust range as needed
    )
    .sort((a, b) => a.Falta_para_boleta - b.Falta_para_boleta) // Sort from least to most
    // .slice(0, 10); // Limit to 10 results

  const uniqueVendedores = Array.from(
    new Set(closeCustomers.map((customer) => customer.Vendedor))
  );

  const headers = ['Cliente', 'Vendedor', 'Falta para boleta'];

  return (
    <Table header={headers} filter filterOptions={uniqueVendedores}>
      {closeCustomers.map((customer, index) => (
        <TableRow key={customer.Cliente}>
          <TableCellIcon index={index} >{customer.Cliente}</TableCellIcon>
          <TableCell>{customer.Vendedor}</TableCell>
          <TableCell>$ {customer.Falta_para_boleta.toLocaleString()}</TableCell>
        </TableRow>
      ))}
    </Table>
  );
}
