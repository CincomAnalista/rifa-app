import { Table, TableCell, TableCellActive, TableCellIcon, TableRow } from './common';
import { CustomersProps } from '../data';

interface Props {
  data: CustomersProps[];
}

export function CustomersTicket({ data }: Props) {
  const filter = data.filter((customer) => customer.Boletas > 0);
  const headers = ['Cliente', 'Vendedor', 'Boletas', 'Numero', 'Estado'];
  return (
    <Table header={headers} >
      {filter.map((customer) => (
        <TableRow key={customer.Cliente}>
          <TableCellIcon>{customer.Cliente}</TableCellIcon>
          <TableCell>{customer.Vendedor.split(' ')[0].toUpperCase()}</TableCell>
          <TableCell>{customer.Boletas}</TableCell>
            <TableCell>{customer.Numeros.join(', ')}</TableCell>
          <TableCellActive name='Activo' />
        </TableRow>
      ))}
    </Table>
  );
}
