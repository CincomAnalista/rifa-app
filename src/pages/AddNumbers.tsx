import { Table, TableCell, TableRow } from '../components';
import Swal from 'sweetalert2';

interface AddNumbersProps {
  Cliente: string;
  Numeros: Array<string>;
}

export function AddNumbers() {
  const data: AddNumbersProps[] = [
    {
      Cliente: 'Cliente 1',
      Numeros: ['123456', '123457', '123458']
    }
  ];

  console.log(data);

  const handleClick = () => {
    Swal.fire({
      title: '¡Números agregados!',
      text: 'Los números de boletas han sido agregados correctamente',
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };

  return (
    <>
      <section className="h-24 bg-[url(/hero.jpg)] bg-cover bg-center bg-no-repeat"></section>

      <div className="container mx-auto p-10">
        <h1 className="text-2xl font-bold mb-4">Agregar Números de Boletas</h1>
        {/* Aquí puedes agregar el formulario o la lógica para agregar números */}

        <button
          onClick={handleClick}
          className="bg-[#ff0100] text-white px-4 py-2 rounded-md">
          Agregar Números
        </button>
        <Table header={['Cliente', 'Vendedor', 'Falta para boleta']}>
          <TableRow>
            <TableCell>Cliente 1</TableCell>
            <TableCell>Vendedor 1</TableCell>
            <TableCell>$ 1,000,000</TableCell>
          </TableRow>
        </Table>
      </div>
    </>
  );
}
