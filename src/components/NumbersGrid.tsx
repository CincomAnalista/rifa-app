import { CustomersProps } from '../data';

export function Grid({ data }: { data: CustomersProps[] }) {
  const numbers = Array.from({ length: 100 }, (_, i) => i);
  const numbers_used = data.flatMap((item) => item.Numeros);

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(2rem,1fr))] gap-0 text-black md:grid-cols-12">
      {numbers.map((number) => {
        const formattedNumber = `#${number.toString().padStart(2, '0')}`;
        return (
          <div
            key={number}
            className={`flex items-center justify-center aspect-square border border-gray-200
              ${numbers_used.includes(formattedNumber) ? 'bg-[#de020a]/45' : 'bg-[#08862e]/45'}
              sm:min-w-[2rem] sm:min-h-[2rem] md:min-w-[1.5rem] md:min-h-[1.5rem] lg:min-w-[1rem] lg:min-h-[1rem]
              `}>
            {formattedNumber}
          </div>
        );
      })}
    </div>
  );
}