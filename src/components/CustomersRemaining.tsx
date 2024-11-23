import { CustomersProps } from '../data'

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
    .slice(0, 10);

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 md:max-w-lg lg:max-w-xl">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Clientes
          </h5>
          <span className="text-sm font-medium text-gray-900">
            {' '}
            Falta para boleta
          </span>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700">
            {closeCustomers.map((customer, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {customer.Cliente}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {customer.Vendedor}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $ {customer.Falta_para_boleta.toLocaleString('es-ES')}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
