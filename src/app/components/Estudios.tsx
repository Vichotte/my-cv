"use client";

export default function Estudios() {
  return (
    <section id="estudios" className="w-full py-20 flex flex-col gap-10">

      <h2 className="text-3xl md:text-4xl font-bold">Estudios</h2>

      <div className="w-full p-8 rounded-xl border border-foreground/20 bg-background/50 shadow-lg">

        <div className="flex flex-col md:flex-row gap-8">

          {/* COLUMNA IZQUIERDA */}
          <div className="md:w-1/3 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">I.E.S. Gaspar Melchor de Jovellanos</h3>
            <a
            href="https://www.educa2.madrid.org/web/centro.ies.jovellanos.fuenlabrada"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-70 break-all text-blue-400 hover:underline"
            >
            Web: https://www.educa2.madrid.org/web/centro.ies.jovellanos.fuenlabrada
            </a>
          </div>

          {/* LÍNEA DIVISORIA */}
          <div className="hidden md:block w-px bg-foreground/20"></div>

          {/* COLUMNA DERECHA */}
          <div className="md:w-2/3 flex flex-col gap-4">

            <div>
              <h3 className="text-xl font-semibold">
                CICLO FORMATIVO DE GRADO SUPERIOR, DESARROLLO DE APLICACIONES MULTIPLATAFORMA (D.A.M)
              </h3>
              <p className="opacity-80">09/2023 – 06/2025</p>
              <p className="mt-2 opacity-80 leading-relaxed">
                Formación avanzada y especifica en el mundo del desarrollo de software, bases de datos, programación,
                aplicaciones desktop como móviles y metodologías modernas.
              </p>
            </div>

            <hr className="border-foreground/20" />

            <div>
              <h3 className="text-xl font-semibold">
                CICLO FORMATIVO DE GRADO MEDIO, SISTEMAS MICROINFORMÁTICO Y REDES (S.M.R)
              </h3>
              <p className="opacity-80">09/2021 – 06/2023</p>
              <p className="mt-2 opacity-80 leading-relaxed">
                Formación en montaje, mantenimiento y soporte de equipos informáticos, redes, sistemas operativos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
