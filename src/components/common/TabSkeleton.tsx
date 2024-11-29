import { Skeleton } from '../ui';

export function TabSkeleton() {
  return (
    <div className="flex flex-col w-full p-4 justify-center space-y-5">
      <div className="flex flex-col md:flex-row justify-between items-center w-full space-y-2 md:space-y-0">
        <h1 className="text-xl font-semibold text-gray-700">Iniciando el servidor....</h1>
      </div>
      <div className="flex flex-wrap gap-4 md:gap-6 justify-start">
        <Skeleton className="h-10 w-24 sm:w-36 rounded-full"/>
        <Skeleton className="h-10 w-24 sm:w-36 rounded-full" />
        <Skeleton className="h-10 w-24 sm:w-36 rounded-full" />
      </div>

      <div className="space-y-2 w-full flex flex-col justify-center items-center">
        <Skeleton className="h-[150px] sm:h-[250px] w-full sm:w-[720px] md:w-[1300px] md:h-[900px] rounded-lg" />
      </div>
    </div>
  );
}
