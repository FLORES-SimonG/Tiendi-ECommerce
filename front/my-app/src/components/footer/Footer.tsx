// import React from 'react';

function Footer() {
  return (
    <footer className="py-4 text-white bg-gray-900">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <p className="m-4 duration-300 cursor-pointer hover:text-customColorPrimary " >© 2024 Tiendi. Todos los derechos reservados.</p>
          <p className="m-4 duration-300 cursor-pointer hover:text-customColorPrimary">
            Diseñado por <a href="https://example.com" className="text-white hover:underline">FLORES, Simón G.</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
