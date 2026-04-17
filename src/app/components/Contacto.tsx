"use client";

import { Mail, Phone, Link, ExternalLink } from "lucide-react";


export default function Contacto() {
  return (
    <section id="contacto" className="w-full py-20 flex flex-col gap-10">

      <h2 className="text-3xl md:text-4xl font-bold">Contacto</h2>

      {/* CUADRO PRINCIPAL */}
      <div className="w-full p-8 rounded-xl border border-foreground/20 bg-background/50 shadow-lg flex flex-col gap-8">

        {/* FILA 1: EMAIL + TELÉFONO */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* EMAIL */}
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6 text-blue-400" />
            <a
              href="mailto:marcosjv1644@gmail.com"
              className="text-lg opacity-80 hover:opacity-100 transition"
            >
              marcosjv1644@gmail.com
            </a>
          </div>

          {/* TELÉFONO */}
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6 text-blue-400" />
            <a
              href="tel:+34622694229"
              className="text-lg opacity-80 hover:opacity-100 transition"
            >
              +34 622 69 42 29
            </a>
          </div>

        </div>

        <hr className="border-foreground/20" />

        {/* FILA 2: REDES SOCIALES */}
        <div className="flex flex-col md:flex-row justify-between gap-6">

          {/* LINKEDIN */}
        <div className="flex items-center gap-3">
        <ExternalLink className="w-6 h-6 text-blue-400" />
        <a
            href="https://www.linkedin.com/in/marcos-jiménez-vicho-037862348/"
            target="_blank"
            className="text-lg opacity-80 hover:opacity-100 transition"
        >
            https://www.linkedin.com/in/marcos-jiménez-vicho
        </a>
        </div>


          {/* GITHUB */}
          <div className="flex items-center gap-3">
            <Link className="w-6 h-6 text-blue-400" />
            <a
                href="https://github.com/Vichotte"
                target="_blank"
                className="text-lg opacity-80 hover:opacity-100 transition"
            >
                https://github.com/Vichotte
            </a>
            </div>
        </div>

      </div>

    </section>
  );
}
