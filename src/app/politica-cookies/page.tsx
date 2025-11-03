export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Política de Cookies</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">¿Qué son las cookies?</h2>
            <p>
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o smartphone) cuando visitas un sitio web. Las cookies permiten que el sitio web recuerde tus acciones y preferencias (como inicio de sesión, idioma, tamaño de fuente y otras preferencias de visualización) durante un período de tiempo, para que no tengas que volver a configurarlas cada vez que regreses al sitio o navegues de una página a otra.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">¿Cómo utilizamos las cookies?</h2>
            <p>
              En <strong>garcialabs.es</strong>, utilizamos cookies con las siguientes finalidades:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Cookies técnicas:</strong> Son esenciales para el correcto funcionamiento del sitio web y permiten la navegación y el uso de las diferentes opciones o servicios que ofrece</li>
              <li><strong>Cookies de análisis:</strong> Nos permiten cuantificar el número de usuarios y realizar análisis estadísticos de cómo los usuarios utilizan nuestro sitio web, con el fin de mejorar nuestra oferta</li>
              <li><strong>Cookies de personalización:</strong> Permiten recordar información para que puedas acceder al servicio con determinadas características que pueden diferenciar tu experiencia de la de otros usuarios</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Tipos de cookies que utilizamos</h2>

            <div className="mt-6 space-y-6">
              <div className="bg-garciablue-50 dark:bg-garciablue-950/30 rounded-xl p-6 border border-garciablue-200 dark:border-garciablue-800">
                <h3 className="text-foreground font-semibold text-lg mb-3">Cookies Técnicas (Necesarias)</h3>
                <p className="text-sm mb-2">
                  Estas cookies son estrictamente necesarias para el funcionamiento del sitio web y no se pueden desactivar en nuestros sistemas.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>Duración:</strong> Sesión / Persistente</li>
                  <li><strong>Finalidad:</strong> Navegación y uso básico del sitio web</li>
                  <li><strong>Gestión:</strong> Propia</li>
                </ul>
              </div>

              <div className="bg-garciablue-50 dark:bg-garciablue-950/30 rounded-xl p-6 border border-garciablue-200 dark:border-garciablue-800">
                <h3 className="text-foreground font-semibold text-lg mb-3">Cookies Analíticas</h3>
                <p className="text-sm mb-2">
                  Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y las menos populares, y a ver cómo se mueven los visitantes por el sitio.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>Duración:</strong> 2 años</li>
                  <li><strong>Finalidad:</strong> Análisis estadístico del uso del sitio web</li>
                  <li><strong>Gestión:</strong> Terceros (Google Analytics, si aplica)</li>
                </ul>
              </div>

              <div className="bg-garciablue-50 dark:bg-garciablue-950/30 rounded-xl p-6 border border-garciablue-200 dark:border-garciablue-800">
                <h3 className="text-foreground font-semibold text-lg mb-3">Cookies de Personalización</h3>
                <p className="text-sm mb-2">
                  Estas cookies permiten al sitio web recordar las elecciones que haces (como tu nombre de usuario, idioma o la región en la que te encuentras) y proporcionan características mejoradas y más personales.
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                  <li><strong>Duración:</strong> 1 año</li>
                  <li><strong>Finalidad:</strong> Personalizar la experiencia del usuario</li>
                  <li><strong>Gestión:</strong> Propia</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Cookies de terceros</h2>
            <p>
              En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. Este sitio web puede utilizar las siguientes cookies de terceros:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
              <li>
                <strong>Google Analytics:</strong> Una de las herramientas de análisis más utilizadas y fiables en la web que nos ayuda a entender cómo utilizas el sitio y cómo podemos mejorar tu experiencia. Estas cookies pueden rastrear información como el tiempo que pasas en el sitio y las páginas que visitas para que podamos seguir produciendo contenido atractivo.
              </li>
            </ul>
            <p className="mt-4">
              Para más información sobre las cookies de Google Analytics, consulta la página oficial de{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-garciablue-400 hover:text-garciablue-300 underline"
              >
                Política de Privacidad de Google
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">¿Cómo puedo gestionar las cookies?</h2>
            <p>
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en tu dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen. Sin embargo, si haces esto, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites un sitio, y algunos servicios y funcionalidades pueden no funcionar correctamente.
            </p>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-foreground mb-3">Configuración por navegador:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-foreground mb-2">Google Chrome</h4>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-garciablue-400 hover:text-garciablue-300 underline"
                  >
                    Configurar cookies en Chrome
                  </a>
                </div>

                <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-foreground mb-2">Mozilla Firefox</h4>
                  <a
                    href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-garciablue-400 hover:text-garciablue-300 underline"
                  >
                    Configurar cookies en Firefox
                  </a>
                </div>

                <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-foreground mb-2">Safari (macOS)</h4>
                  <a
                    href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-garciablue-400 hover:text-garciablue-300 underline"
                  >
                    Configurar cookies en Safari
                  </a>
                </div>

                <div className="bg-gray-900/80 rounded-lg p-4 border border-gray-800">
                  <h4 className="font-semibold text-foreground mb-2">Microsoft Edge</h4>
                  <a
                    href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-garciablue-400 hover:text-garciablue-300 underline"
                  >
                    Configurar cookies en Edge
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Aceptación de cookies</h2>
            <p>
              Al navegar y continuar en nuestro sitio web, estarás consintiendo el uso de las cookies antes enunciadas, y en las condiciones contenidas en la presente Política de Cookies.
            </p>
            <p>
              Si tienes dudas sobre esta política de cookies, puedes contactar con RUBÉN GARCÍA SILVARREY en <a href="mailto:contacto@garcialabs.es" className="text-garciablue-400 hover:text-garciablue-300">contacto@garcialabs.es</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Actualización de la Política de Cookies</h2>
            <p>
              RUBÉN GARCÍA SILVARREY puede modificar esta Política de Cookies en función de exigencias legislativas, reglamentarias, o con la finalidad de adaptar dicha política a las instrucciones dictadas por la Agencia Española de Protección de Datos.
            </p>
            <p>
              Cuando se produzcan cambios significativos en esta Política de Cookies, se comunicará a los usuarios mediante un aviso informativo en el sitio web.
            </p>
          </section>

          <section>
            <p className="text-sm italic mt-8">
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
