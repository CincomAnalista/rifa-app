import { Table, TableCell, TableCellActive, TableCellIcon, TableRow } from './common';
import { CustomersProps } from '../data';

interface Props {
  data: CustomersProps[];
}

export function CustomersTicket({ data }: Props) {
  const filter = data.filter((customer) => customer.Boletas > 0);
  const total = filter.reduce((acc, customer) => acc + customer.Boletas, 0);
  const headers = ['Cliente', 'Vendedor', 'Boletas', 'Numero', 'Estado'];
  return (
    <Table header={headers}
    footer={
         <tr>
          <td colSpan={2} className="text-right text-sm p-2">Total:</td>
          <td className="p-2 text-sm font-bold">{total}</td>
          <td colSpan={2}></td>
        </tr>
    }
    >
      {filter.map((customer, index) => (
        <TableRow key={customer.Cliente}>
          <TableCellIcon index={index}>{customer.Cliente}</TableCellIcon>
          <TableCell>{customer.Vendedor.split(' ')[0].toUpperCase()}</TableCell>
          <TableCell>{customer.Boletas}</TableCell>
            <TableCell>{customer.Numeros.join(', ')}</TableCell>
          <TableCellActive name='Activo' />
        </TableRow>
      ))}
    </Table>
  );
}
