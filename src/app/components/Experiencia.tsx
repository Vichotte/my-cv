"use client";

import { useLanguage } from "@/context/LanguageContext";


export default function Experiencia() {
  const { lang } = useLanguage();
  return (
    <section id="experiencia" className="w-full py-20 flex flex-col gap-8">

      <h2 className="text-3xl md:text-4xl font-bold">
        {lang === "es" ? "Experiencia" : "Experience"}
        </h2>

      <div className="flex flex-col gap-6">

        <div className="p-6 rounded-xl border border-foreground/20 bg-background/50">
          <h3 className="text-xl font-semibold">
            {lang === "es" ? "Soporte TI & Desarrollador Backend - Kalacibi Solutions S.L." : "IT Support Assistant & Backend Developer – Kalacibi Solutions S.L."}
          </h3>

          <p className="opacity-80">06/2025 – Actual</p>
          <p className="opacity-80">
            {lang === "es" ? "Alcobendas / San Sebastián de los Reyes (Madrid), España" : "Alcobendas / San Sebastián de los Reyes (Madrid), Spain"}
          </p>

          <ul className="mt-4 flex flex-col gap-2 opacity-80 list-disc pl-5">
            {lang === "es" ? (
          <>
            <li>Desarrollo de infrastructura interna para el desarrollo de paginas web</li>
            <li>Mantenimiento y soporte de equipos con Windows y macOS.</li>
            <li>Configuración y gestión de cuentas de Microsoft.</li>
            <li>Desarrollo de scripts y automatización de tareas para optimizar procesos.</li>
            <li>Realización de auditorías y seguimiento de logs para control y diagnóstico de sistemas.</li>
            <li>Gestión y comunicación con proveedores tecnológicos.</li>
            </>
        ) : (
          <>
          <li>Development of internal infrastructure for website development</li>
          <li>Maintenance and support of Windows and macOS systems.</li>
          <li>Configuration and management of Microsoft accounts.</li>
          <li>Development of scripts and automation of tasks to optimize processes.</li>
          <li>Performance of audits and log monitoring for system control and diagnostics.</li>
          <li>Management and communication with technology providers.</li>
            </>
            )}
          </ul>
        </div>

      </div>

    </section>
  );
}
