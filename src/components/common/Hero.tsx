import { BackgroundLines } from "../ui";

export function Hero() {
  return (
    <BackgroundLines className="h-screen">
      <section className="h-screen bg-[url(/hero.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute h-screen inset-0 bg-black/45"></div>

        <div className="relative z-10 max-w-screen-xl mx-auto px-4 py-20 h-full flex items-center justify-center">
        <div className="max-w-xl sm:text-center shadow-lg bg-[#000000a1]/10">
            <h1 className="text-2xl font-extrabold text-[#de020a] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-shadow">
              ¡Ganador de la rifa!
              <strong className="block font-extrabold text-[#08862e] text-shadow">
                {' '}
                MUNDIAL DE PINTURAS LCD SAS
              </strong>
            </h1>

          </div>
          {/* <div className="max-w-xl sm:text-left">
            <h1 className="text-2xl font-extrabold text-[#de020a] sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-shadow">
              ¡Gánate una espectacular
              <strong className="block font-extrabold text-[#08862e] text-shadow">
                {' '}
                Patineta Eléctrica!
              </strong>
            </h1>

            <p className="mt-4 max-w-lg text-white font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-shadow">
              Participa en nuestra rifa y podrás ganar una increíble patineta
              eléctrica. ¡Por cada $4,000,000 en compras, recibes una boleta!
            </p>
          </div> */}
        </div>
      </section>
    </BackgroundLines>
  );
}
