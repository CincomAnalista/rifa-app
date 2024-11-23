
export function  Div ({ children, tittle }: { children: React.ReactNode; tittle: string }) {
    return (
      <div className="w-full h-[30rem] md:h-[60rem] relative  overflow-x-auto mb-2 rounded-2xl p-6 text-base sm:p-8 sm:text-lg md:p-10 md:text-xl lg:text-2xl xl:text-4xl font-bold text-white bg-gradient-to-br from-[#08862e] to-[#de020a]">
        <h1 className="mb-10">{tittle}</h1>
        {children}
      </div>
    );
  };