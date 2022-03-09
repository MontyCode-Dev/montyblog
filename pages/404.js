import Link from 'next/link';
import { MdOutlineNearbyError } from 'react-icons/md';

// pages/404.js
export default function Custom404() {
  return (
    <div className="text-center py-60 lg:py-36">
        <h1 className="text-7xl md:text-9xl font-bold text-indigo-700 py-2">404</h1>
        <h2 className="md:text-4xl text-2xl lg:text-5xl font-bold text-gray-800 py-2">Pagina no encontrada</h2>
        <p className="text-md text-gray-600 py-2 px-12 lg:px-96">Lo sentimos! No pudimos encontrar lo que estabas buscando. Por favor verifica la dirección url e intenta nuevamente.</p>
        <div className="text-md text-indigo-700 flex justify-center cursor-pointer">
            <Link href='/'><a className="hover:underline">Inicio</a></Link>
            <div>
                <MdOutlineNearbyError className='w-6 h-6' />
            </div>
        </div>
    </div>
  );
}
