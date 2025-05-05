function App() {
  return (
    <div className="min-h-screen bg-white text-center font-sans">

      {/* Hero principal */}
      <section className="flex flex-col items-center justify-center px-8 pt-16 pb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-dorado uppercase tracking-wide mb-4">
          7 Lecciones para los Líderes de Hoy
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          Liderazgo con propósito, basado en la Biblia. Un mini eBook para transformar tu forma de liderar.
        </p>
        <img
          src="/portada.png"
          alt="Portada del eBook"
          className="w-64 md:w-80 mb-6 shadow-lg"
        />
        <a
          href="#final"
          className="bg-dorado text-verdeOscuro font-semibold px-6 py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
        >
          Obtener el eBook por solo $3.50 USD
        </a>
      </section>

      {/* Sección de Beneficios */}
      <section className="bg-white py-12 px-4 max-w-3xl mx-auto text-left">
        <h2 className="text-2xl md:text-3xl font-semibold text-verdeOscuro mb-10 text-center">
          ¿Por qué este eBook es para ti?
        </h2>

        <div className="space-y-8">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#b91c1c] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-verdeOscuro leading-snug">
                Aplicación inmediata
              </h3>
              <p className="text-base text-black mt-1">
                Cada lección es breve, clara y diseñada para ayudarte a tomar mejores decisiones desde hoy.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#b91c1c] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-verdeOscuro leading-snug">
                Inspiración con sentido espiritual
              </h3>
              <p className="text-base text-black mt-1">
                El eBook está basado en enseñanzas bíblicas reales, sin dogmas ni discursos. Solo liderazgo con propósito.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[#b91c1c] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <h3 className="text-lg md:text-xl font-semibold text-verdeOscuro leading-snug">
                Una guía práctica, no un sermón
              </h3>
              <p className="text-base text-black mt-1">
                Historias reales, principios poderosos y reflexiones útiles para líderes de empresas, familias o comunidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Frases Inspiradoras */}
      <section className="bg-verdeOscuro text-white py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-12 text-center">
          <div>
            <p className="text-xl md:text-2xl italic leading-relaxed">
              “El liderazgo que transforma nace del corazón que sirve, no del ego que manda.”
            </p>
            <p className="text-sm mt-3 text-gray-300">— Inspirado en Mateo 20:26</p>
          </div>
          <div>
            <p className="text-xl md:text-2xl italic leading-relaxed">
              “La sabiduría del líder no está en sus logros, sino en su capacidad de escuchar y guiar con fe.”
            </p>
            <p className="text-sm mt-3 text-gray-300">— Inspirado en Proverbios 3:5-6</p>
          </div>
        </div>
      </section>

      {/* Sección Final: Mockup limpio + CTA */}
      <section id="final" className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">

          {/* Texto y botón dorado */}
          <div className="text-center md:text-left max-w-md">
            <h2 className="text-2xl md:text-3xl font-semibold text-verdeOscuro mb-4">
              ¡Empieza hoy tu camino hacia un liderazgo con propósito!
            </h2>
            <p className="text-gray-700 mb-6">
              <strong>Estás a un clic de comenzar una nueva etapa como líder.</strong><br />
              Este mini eBook contiene 7 lecciones inspiradas en la Biblia y aplicables a tu día a día como líder. Cada lección tiene un valor simbólico de $1 USD, pero <strong>por lanzamiento lo recibirás completo por solo $3.50 USD</strong>.<br />
              Además, al comprarlo quedarás suscrito gratuitamente para recibir reflexiones mensuales sobre liderazgo espiritual.
            </p>

            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
              className="flex flex-col items-center gap-2"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="9FYUYKAHWY2R4" />
              <input type="hidden" name="currency_code" value="USD" />
              <input type="hidden" name="return" value="https://www.77lecciones.com/gracias" />

              <input
                type="submit"
                value="Comprar ahora por $3.50 USD"
                className="bg-dorado text-verdeOscuro font-semibold px-6 py-4 rounded-2xl shadow-md text-lg hover:scale-105 transition-transform cursor-pointer"
              />

              <img
                src="/logos-pago.png"
                alt="Métodos de pago"
                className="h-12 md:h-14 w-auto max-w-sm"
              />
            </form>
          </div>

          {/* Mockup limpio */}
          <div className="w-64 md:w-80">
            <img
              src="/mockup.png"
              alt="Mockup del eBook"
              className="w-full"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;