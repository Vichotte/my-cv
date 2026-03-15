"use client";

export default function Experiencia() {
  return (
    <section className="w-full py-20 flex flex-col gap-8">

      <h2 className="text-3xl md:text-4xl font-bold">Experiencia</h2>

      <div className="flex flex-col gap-6">

        <div className="p-6 rounded-xl border border-foreground/20 bg-background/50">
          <h3 className="text-xl font-semibold">IT Support Assistant</h3>
          <p className="opacity-80">2023 - Actualidad</p>
          <p className="mt-2 opacity-80">
            Resolución de incidencias, mantenimiento de sistemas, soporte a usuarios
            y optimización de procesos internos.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-foreground/20 bg-background/50">
          <h3 className="text-xl font-semibold">Backend Developer</h3>
          <p className="opacity-80">2021 - 2023</p>
          <p className="mt-2 opacity-80">
            Desarrollo de APIs, integración de servicios, automatización y creación
            de herramientas internas para mejorar la productividad.
          </p>
        </div>

      </div>

    </section>
  );
}
