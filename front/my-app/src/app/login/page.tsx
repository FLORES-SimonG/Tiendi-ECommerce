// 'use client';
import Footer from "@/components/footer/Footer";
import Header from "@/components/Header/Header";
import Navbar from "@/components/Navbar/Navbar";


export default function Login() {
    return (
        <div>
      <Header/>
      <Navbar/>
        <h1 className="text-sm text-red-500">Login</h1>
        <Footer/>
        </div>
    );
    }