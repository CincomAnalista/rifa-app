export function Hero() {
  return (
    <section className="h-screen bg-[url(/hero.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="absolute h-screen inset-0 bg-gray-900/45"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-2xl font-extrabold text-red-600 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
            ¡Gánate una espectacular
            <strong className="block font-extrabold text-green-600">
              {' '}
              Patineta Eléctrica!
            </strong>
          </h1>

          <p className="mt-4 max-w-lg text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            Participa en nuestra rifa y podrás ganar una increíble patineta
            eléctrica. ¡Por cada $4,000,000 en compras, recibes una boleta!
          </p>
        </div>
      </div>
    </section>
  );
}