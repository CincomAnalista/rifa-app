import { Table, TableCell, TableCellActive, TableCellIcon, TableRow } from './common';
import { CustomersProps } from '../data';

interface Props {
  data: CustomersProps[];
}

export function CustomersTicket({ data }: Props) {
  const filter = data.filter((customer) => customer.Boletas > 0);
  const headers = ['Cliente', 'Boletas', 'Numero', 'Estado'];
  return (
    <Table header={headers}>
      {filter.map((customer) => (
        <TableRow key={customer.Cliente}>
          <TableCellIcon>{customer.Cliente}</TableCellIcon>
          <TableCell>{customer.Boletas}</TableCell>
          <TableCell>{customer.Numeros}</TableCell>
          <TableCellActive name='Activo' />
        </TableRow>
      ))}
    </Table>
  );
}
