export default function AvisoLegalPage() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-foreground mb-8">Aviso Legal</h1>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Ley de los Servicios de la Sociedad de la Información (LSSI)</h2>

            <p>
              RUBÉN GARCÍA SILVARREY, responsable del sitio web, en adelante RESPONSABLE, pone a
              disposición de los usuarios el presente documento, con el que pretende dar cumplimiento a las
              obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
              Información y de Comercio Electrónico (LSSICE), BOE N.º 166, así como informar a todos los usuarios
              del sitio web respecto a cuáles son las condiciones de uso.
            </p>

            <p>
              Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la
              observancia y cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra
              disposición legal que fuera de aplicación.
            </p>

            <p>
              RUBÉN GARCÍA SILVARREY se reserva el derecho de modificar cualquier tipo de información que
              pudiera aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los
              usuarios dichas obligaciones, entendiéndose como suficiente la publicación en el sitio web de RUBÉN
              GARCÍA SILVARREY.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datos Identificativos</h2>
            <ul className="list-none space-y-2">
              <li><strong>Nombre de dominio:</strong> garcialabs.es</li>
              <li><strong>Nombre comercial:</strong> GARCIA LABS</li>
              <li><strong>Denominación social:</strong> RUBÉN GARCÍA SILVARREY</li>
              <li><strong>NIF:</strong> 34287984K</li>
              <li><strong>Domicilio social:</strong> ROBRA 7, 27154 OUTEIRO DE REI (LUGO)</li>
              <li><strong>Teléfono:</strong> 629167110</li>
              <li><strong>E-mail:</strong> contacto@garcialabs.es</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Derechos de Propiedad Intelectual e Industrial</h2>
            <p>
              El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y
              demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son
              propiedad del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de
              los autores. Todos los contenidos del sitio web se encuentran debidamente protegidos por la normativa
              de propiedad intelectual e industrial, así como inscritos en los registros públicos correspondientes.
            </p>

            <p>
              Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso,
              explotación, distribución y comercialización, requiere en todo caso la autorización escrita previa por
              parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un incumplimiento
              grave de los derechos de propiedad intelectual o industrial del autor.
            </p>

            <p>
              Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de
              propiedad intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede
              hacerlo a través del correo electrónico <a href="mailto:contacto@garcialabs.es" className="text-garciablue-400 hover:text-garciablue-300">contacto@garcialabs.es</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Exención de Responsabilidades</h2>
            <p>
              El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada
              en su sitio web siempre que no tenga conocimiento efectivo de que esta información haya sido
              manipulada o introducida por un tercero ajeno al mismo o, si lo tiene, haya actuado con diligencia para
              retirar los datos o hacer imposible el acceso a ellos.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Uso de Cookies</h3>
            <p>
              Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía
              al ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son
              consideradas imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies
              utilizadas tienen, en todo caso, carácter temporal, con la única finalidad de hacer más eficaz la
              navegación, y desaparecen al terminar la sesión del usuario.
            </p>

            <p>
              El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies
              y para impedir su instalación en su equipo. Por favor, consulte las instrucciones de su navegador para
              ampliar esta información.
            </p>

            <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Direcciones IP</h3>
            <p>
              Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de
              dominio utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un
              ordenador cuando este se conecta a Internet. Toda esta información se registra en un fichero de
              actividad del servidor que permite el posterior procesamiento de los datos con el fin de obtener
              mediciones únicamente estadísticas que permitan conocer el número de impresiones de páginas, el
              número de visitas realizadas a los servidores web, el orden de visitas, el punto de acceso, etc.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Ley Aplicable y Jurisdicción</h2>
            <p>
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de
              las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten
              expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o
              relacionados con su uso los Juzgados y Tribunales del domicilio del USUARIO o el lugar del
              cumplimiento de la obligación.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
