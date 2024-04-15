'use client';
import BurgerMenu from '@/components/BurgerMenu';
import Header from './../components/Header/Header';

interface ErrorProps {
    error:Error;
    reset: ()=>void;
}


export default function Error({reset}:ErrorProps) {
    return (
        <main>
            <Header/>
            <BurgerMenu/>
        <h1>:c</h1>
        <p>AL PARECER OCURRIÓ UN ERROR, PERO NO TE SIENTAS MAL AMIGO, VUELVE A INTENTAR</p>
        <button onClick={reset}>Intenta de nuevo</button>
        </main>
    );
    }
