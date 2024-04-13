'use client';

import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/index.jsx";
import Link from "next/link.js";





const BurgerMenu = ()=>{
    const context = useContext(ShoppingCartContext);
    
    const actionMenuBurger = ()=>{
        if(context.isBurgerMenuOpen){
            context.closeBurgerMenu();
        }else{
            context.openBurgerMenu();
        }}
    
 




    return(
        <div>

        <div onClick={actionMenuBurger} className="md:hidden lg:hidden flex flex-col items-center justify-center bg-customColorPrimary w-16 h-16 rounded-full fixed bottom-4 right-4 z-10 ">
            <div className="w-8 h-1 bg-white rounded-full mb-1"></div>
            <div className="w-8 h-1 bg-white rounded-full mb-1"></div>
            <div className="w-8 h-1 bg-white rounded-full mb-1"></div>
        </div>
        <aside className={`${context.isBurgerMenuOpen? 'flex':'hidden'} md:hidden lg:hidden flex-col fixed right-0 bg-gradient-to-b from-customColorPrimary from-10%  via-white via-50% to-customColorPrimary to-100% z-10  border-black border h-fit rounded-lg`}>
            <div className="flex justify-between items-center p-4  ">
                <h2 className="text-2xl font-bold text-white">Menu</h2>
                <div onClick={actionMenuBurger} className="text-white text-3xl transition-colors  font-bold cursor-pointer hover:text-customColorTertiary">X</div>
            </div>
            <hr className="border-white"/>
            <div className="flex flex-col items-center p-6">
                
                <Link href="/home" className="text-xl font-bold text-black m-2">Home</Link>
                <Link href="/aboutus" className="text-xl font-bold text-black m-2">Nosotros</Link>
                <Link href="/login" className="text-xl font-bold text-black m-2">Ingresa</Link>
                <Link href="/register" className="text-xl font-bold text-black m-2">Registrate</Link>
                <Link href="/store" className="text-xl font-bold text-black m-2">Productos</Link>
            </div>
        </aside>

        </div>
    );
}

export default BurgerMenu;