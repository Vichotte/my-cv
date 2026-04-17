"use client";

import Image from "next/image";

export default function Inicio() {

  const handleDownloadCV = () => {
    const files = [
      "/cv/CV - Marcos Jimenez Vicho EN Version.pdf",
      "/cv/CV - Marcos Jimenez Vicho ES Version.pdf",
    ];

    files.forEach((file) => {
      const link = document.createElement("a");
      link.href = file;

      // SOLUCIÓN: asegurar que siempre sea string
      link.download = file.split("/").pop() || "";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };

  return (
    <section
      id="inicio"
      className="w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 py-20"
    >
      {/* Texto */}
      <div className="flex flex-col gap-4 max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold">
          Marcos Jiménez Vicho
        </h1>

        <h2 className="text-2xl md:text-3xl font-medium opacity-80">
          IT Support Assistant & Backend Developer
        </h2>

        <div className="flex gap-4 mt-4">
          {/* BOTÓN DESCARGAR CV */}
          <button
            onClick={handleDownloadCV}
            className="px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:opacity-80 transition"
          >
            Descargar CV
          </button>

          <button className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium hover:opacity-80 transition">
            Contáctame
          </button>
        </div>
      </div>

      {/* Imagen */}
      <div className="w-full md:w-auto flex justify-center">
        <Image
          src="/img/my-photo.jpg"
          alt="Foto de perfil"
          width={350}
          height={350}
          className="rounded-xl object-cover shadow-lg"
        />
      </div>
    </section>
  );
}
