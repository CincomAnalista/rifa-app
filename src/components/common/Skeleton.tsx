import { Skeleton } from '../ui/skeleton';

export function SkeletonTabs() {
  return (
    <div className="flex flex-col max-w-7xl mx-auto w-full items-center justify-center sm:my-28 md:my-36 lg:my-40">
      <div className="w-full h-[30rem] md:h-[60rem] relative overflow-x-auto mb-2 rounded-2xl p-6 text-base sm:p-8 sm:text-lg md:p-10 md:text-xl lg:text-2xl xl:text-4xl font-bold text-white bg-gradient-to-br from-green-600 to-green-800">
        <Skeleton className="h-10 mb-10" />
        <Skeleton className="h-6 mb-4" />
        <Skeleton className="h-6 mb-4" />
        <Skeleton className="h-6 mb-4" />
        <Skeleton className="h-6 mb-4" />
      </div>
    </div>
  );
}
