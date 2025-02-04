import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 max-w-screen-xl mx-auto flex justify-between items-center p-4 lg:flex-row ">
    <div className="">
        <img src="3m.webp" alt="Logo 3m" className="h-10 sm:h-12 md:h-14 lg:h-16" />
    </div>

    <div className="flex gap-4">
        <Link to="" className="text-white text-xl hover:text-[#ff0100]">Home</Link>
        <Link to="/add-numbers" className="text-white text-xl hover:text-[#ff0100]">Numeros</Link>
    </div>

    <div className="">
        <img src="cincom.webp" alt="Logo Cincom" className="h-10 sm:h-12 md:h-14 lg:h-16" />
    </div>
</div>
  );
}
