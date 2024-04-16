'use client';
import BurgerMenu from '@/components/BurgerMenu';
import Header from './../components/Header/Header';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from './../components/Navbar/Navbar';

// interface ErrorProps {
//     error:Error;
//     reset: ()=>void;
// }


export default function Error() {
    return (
        <main>
            <Header />
          
            <div className="container flex flex-col  items-center  bg-gradient-to-r from-customColorPrimary via-customColorPrimary to-gray-300 rounded-e-full  ">
            <div className="flex flex-col items-center gap-6 max-w-md text-center">
                <h2 className="font-extrabold text-7xl text-gray-200  ">
                    ERROR
                </h2>
                <Image className='rounded-3xl' src="https://images.pexels.com/photos/3283451/pexels-photo-3283451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Error" width={300} height={300} />
                <p className="text-2xl md:text-3xl text-white">Intente de nuevo</p>
                <Link  href="/home" className="px-8 py-4 m-4 text-xl font-semibold rounded bg-customColorTertiary text-gray-50 hover:shadow transition-colors">Volver al Home</Link>
            </div>
        </div>
        {/* <button onClick={reset}>Intenta de nuevo</button> */}
        </main>
    );
    }
