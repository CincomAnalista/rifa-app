import {PersonIcon} from '@radix-ui/react-icons'
import { CustomersProps } from '../data';

interface Props {
  data: CustomersProps[];
}

export function CustomersTicket({ data }: Props) {
  const filter = data.filter((customer) => customer.Boletas > 0);

  return <Card data={filter} />;
}

function Card({ data }: { data: CustomersProps[] }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700 md:max-w-lg lg:max-w-xl">
        <div className="flex items-center justify-between mb-4">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Clientes
          </h5>
          <span className="text-sm font-medium text-gray-900"> Boletas</span>
        </div>
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700">
            {data.map((customer, index) => (
              <li key={index} className="py-3 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {/* <img
                      className="w-8 h-8 rounded-full"
                      src="/docs/images/people/profile-picture-1.jpg"
                      alt="Neil image"
                    /> */}
                    <PersonIcon className='w-8 h-8 rounded-full text-black'/>
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {customer.Cliente}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {customer.Vendedor}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    {customer.Boletas}
                  </div>
                </div>
              </li>
            ))}
            <li className="py-3 sm:py-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Total Boletas
                </span>
                <span className="text-base font-semibold text-gray-900 dark:text-white">
                  {data.reduce((acc, customer) => acc + customer.Boletas, 0)}
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}