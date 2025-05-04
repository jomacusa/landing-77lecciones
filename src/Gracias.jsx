function Gracias() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-verdeOscuro px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">¡Gracias por tu compra!</h1>
      <p className="text-lg max-w-xl mb-6">
        Has dado un paso importante hacia un liderazgo con propósito. Pronto recibirás tu eBook en el correo asociado al pago.
      </p>
      <a
        href="/"
        className="bg-dorado text-verdeOscuro font-semibold px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
      >
        Volver al inicio
      </a>
    </div>
  );
}

export default Gracias;