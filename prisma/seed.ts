import { PrismaClient } from "../generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import "dotenv/config";

const adapter = new PrismaBetterSqlite3({
  url: process.env.DATABASE_URL!
});

const prisma = new PrismaClient({
  adapter,
});
async function main() {

  await prisma.question.create({
  data: {
    text: "Vas a hacer un examen. ¿Cómo te preparas?",
    options: {
      create: [
        {
          text: "Estudio mucho.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        },
        {
          text: "El último día.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        },
        {
          text: "Paso, prefiero jugar.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Tienes capacidad de concentración?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 },
              { personality: "Dócil", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Le pones al mal tiempo buena cara?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 },
              { personality: "Audaz", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 },
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Imagina que tienes un cubo. Si tuvieras que llevar agua, ¿cómo lo llenarías?",
    options: {
      create: [
        {
          text: "Hasta arriba.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        },
        {
          text: "Por la mitad.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        },
        {
          text: "Un poco.",
          scores: {
            create: [
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

  await prisma.question.create({
  data: {
    text: "Si te dan elegir entre dos regalos, ¿por cuál te decides?",
    options: {
      create: [
        {
          text: "La caja grande.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 },
              { personality: "Osada", points: 1 }
            ]
          }
        },
        {
          text: "La caja pequeña.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 },
              { personality: "Serena", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Si se te cae un huevo podrido en la habitación, ¿qué haces?",
    options: {
      create: [
        {
          text: "¡Abro la ventana!",
          scores: {
            create: [
              { personality: "Dócil", points: 2 },
              { personality: "Activa", points: 1 }
            ]
          }
        },
        {
          text: "Respirar hondo.",
          scores: {
            create: [
              { personality: "Osada", points: 2 },
              { personality: "Plácida", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Un amigo te da algo que se te había olvidado. ¿Cómo se lo agradeces?",
    options: {
      create: [
        {
          text: "Dándole las gracias.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 }
            ]
          }
        },
        {
          text: "Con una bromilla.",
          scores: {
            create: [
              { personality: "Osada", points: 1 },
              { personality: "Huraña", points: 1 }
            ]
          }
        },
        {
          text: "Lo normal, sin exagerar.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Vas por la calle y ves una cartera en el suelo.",
    options: {
      create: [
        {
          text: "¡La llevo a la policía!",
          scores: {
            create: [
              { personality: "Dócil", points: 2 }
            ]
          }
        },
        {
          text: "Uf, qué difícil...",
          scores: {
            create: [
              { personality: "Osada", points: 2 }
            ]
          }
        },
        {
          text: "Si no me ve nadie...",
          scores: {
            create: [
              { personality: "Agitada", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

 await prisma.question.create({
  data: {
    text: "Vas a hacer puenting por primera vez. Como te da miedo, pruebas lanzando primero un muñeco... ¡y se parte la cuerda! ¿Te atreves a saltar de todas formas?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Audaz", points: 3 },
              { personality: "Agitada", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 },
              { personality: "Miedosa", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Nos invaden los extraterrestres! ¿Qué hacemos?",
    options: {
      create: [
        {
          text: "¡Luchar!",
          scores: {
            create: [
              // Esta respuesta continúa en la siguiente pregunta
            ]
          }
        },
        {
          text: "Huir.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "Pasar de ellos.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Te enfrentas a los extraterrestres... Pero te ganan... Y uno te dice: 'ERES IMPRESIONANTE. ¡QUÉ FUERZA! ÚNETE A NOSOTROS, ¡CONQUISTEMOS EL MUNDO!' ¿Qué haces?",
    options: {
      create: [
        {
          text: "Unirme a ellos.",
          scores: {
            create: [
              { personality: "Grosera", points: 1 },
              { personality: "Plácida", points: 1 }
            ]
          }
        },
        {
          text: "Negarme.",
          scores: {
            create: [
              { personality: "Audaz", points: 4 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Alguien pega un grito al otro lado de una puerta! ¿Qué haces?",
    options: {
      create: [
        {
          text: "Abrirla de golpe.",
          scores: {
            create: [
              { personality: "Fuerte", points: 1 },
              { personality: "Audaz", points: 2 }
            ]
          }
        },
        {
          text: "¡Gritar yo también!",
          scores: {
            create: [
              { personality: "Osada", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

  await prisma.question.create({
  data: {
    text: "Un tipo raro está molestando a una chica en una calle llena de gente. ¿Qué haces?",
    options: {
      create: [
        {
          text: "Ayudarla sin dudarlo.",
          scores: {
            create: [
              { personality: "Audaz", points: 3 }
            ]
          }
        },
        {
          text: "Ayudarla, pero con miedo.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 },
              { personality: "Audaz", points: 2 }
            ]
          }
        },
        {
          text: "Llamar a la policía.",
          scores: {
            create: [
              { personality: "Dócil", points: 1 },
              { personality: "Miedosa", points: 1 },
              { personality: "Plácida", points: 1 }
            ]
          }
        },
        {
          text: "Nada, de puro miedo.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Eres una persona alegre?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Osada", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 1 },
              { personality: "Rara", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta armar jaleo cuando sales con tus amigos o amigas?",
    options: {
      create: [
        {
          text: "Claro.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Huraña", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Miedosa", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Comienzan tus vacaciones de verano! ¿A dónde te gusta ir?",
    options: {
      create: [
        {
          text: "¡A la playa!",
          scores: {
            create: [
              { personality: "Alegre", points: 2 }
            ]
          }
        },
        {
          text: "A un balneario.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        },
        {
          text: "Me da igual.",
          scores: {
            create: [
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

  await prisma.question.create({
  data: {
    text: "Un extranjero empieza a hablarte. Resulta que no entiendes nada de lo que dice. ¿Qué le dices?",
    options: {
      create: [
        {
          text: "¡Ja, ja! ¡Qué gracioso!",
          scores: {
            create: [
              { personality: "Alegre", points: 3 }
            ]
          }
        },
        {
          text: "Esto... ¿Cómo dice?",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        },
        {
          text: "Ejem, tengo que irme.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gustan los chistes malos?",
    options: {
      create: [
        {
          text: "¡Me encantan!",
          scores: {
            create: [
              { personality: "Agitada", points: 1 },
              { personality: "Osada", points: 3 }
            ]
          }
        },
        {
          text: "Un poco.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 }
            ]
          }
        },
        {
          text: "Nada.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Sueles reírte mucho?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Dócil", points: 1 },
              { personality: "Osada", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Dicen de ti que eres infantil?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 1 },
              { personality: "Osada", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Te gusta imaginarte cosas para entretenerte?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Osada", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Has puesto una trampa a alguien alguna vez?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 },
              { personality: "Huraña", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gustan las bromas?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Dócil", points: 1 },
              { personality: "Plácida", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Hay muchas cosas que te gustaría hacer?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Fuerte", points: 1 },
              { personality: "Agitada", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 1 },
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }

  
});

await prisma.question.create({
  data: {
    text: "Un broncas se está metiendo con un amigo. ¿Qué haces?",
    options: {
      create: [
        {
          text: "Me enfrento a él.",
          scores: {
            create: [
              { personality: "Audaz", points: 3 }
            ]
          }
        },
        {
          text: "Le amenazo, desde lejos.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "Me lanzo a por él.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Alguien te tiende la mano desde dentro del retrete! ¿Qué haces?",
    options: {
      create: [
        {
          text: "Gritar y huir.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "Cerrar la tapa.",
          scores: {
            create: [
              { personality: "Fuerte", points: 1 },
              { personality: "Serena", points: 2 }
            ]
          }
        },
        {
          text: "Darle la mía.",
          scores: {
            create: [
              { personality: "Audaz", points: 2 },
              { personality: "Agitada", points: 1 },
              { personality: "Osada", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Con la mano derecha te coges un dedo de la mano izquierda. ¿Qué dedo coges?",
    options: {
      create: [
        {
          text: "El pulgar.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "El índice.",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        },
        {
          text: "El corazón.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 }
            ]
          }
        },
        {
          text: "El anular.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        },
        {
          text: "El meñique.",
          scores: {
            create: [
              { personality: "Huraña", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡De repente, te encierran bajo llave en una habitación oscura! ¿Qué haces?",
    options: {
      create: [
        {
          text: "Patear la puerta.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "Pedir socorro.",
          scores: {
            create: [
              { personality: "Huraña", points: 2 }
            ]
          }
        },
        {
          text: "Limpiar la habitación.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 },
              { personality: "Rara", points: 1 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Entrarías en una casa encantada?",
    options: {
      create: [
        {
          text: "¡Sin problema!",
          scores: {
            create: [
              { personality: "Audaz", points: 3 }
            ]
          }
        },
        {
          text: "Mmm... no.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "Con alguien de confianza.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Recibes un regalo! No sabes lo que es. ¿Qué haces?",
    options: {
      create: [
        {
          text: "¡Abrirlo ya!",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        },
        {
          text: "Abrirlo más tarde.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        },
        {
          text: "Hago que otro lo abra.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Has ganado la lotería! ¿Qué haces con el dinero?",
    options: {
      create: [
        {
          text: "Gastarlo.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Activa", points: 1 }
            ]
          }
        },
        {
          text: "Ahorrarlo.",
          scores: {
            create: [
              { personality: "Fuerte", points: 1 },
              { personality: "Serena", points: 1 }
            ]
          }
        },
        {
          text: "Dárselo a los pobres.",
          scores: {
            create: [
              { personality: "Audaz", points: 2 },
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¡Te encuentras con el cofre de un tesoro! ¿Qué haces?",
    options: {
      create: [
        {
          text: "¡Abrirlo!",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        },
        {
          text: "¿Y si es una trampa?",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "Seguro que está vacío...",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Un amigo no acude a una cita contigo a la hora prevista. ¿Qué haces?",
    options: {
      create: [
        {
          text: "Enfadarme.",
          scores: {
            create: [
              { personality: "Dócil", points: 1 },
              { personality: "Activa", points: 2 }
            ]
          }
        },
        {
          text: "Seguir esperando.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        },
        {
          text: "¡Cabrearme y largarme!",
          scores: {
            create: [
              { personality: "Activa", points: 3 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Estás frente al presidente o presidenta de tu país. ¿Cómo le hablas?",
    options: {
      create: [
        {
          text: "Sin nervios.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        },
        {
          text: "Con nervios.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 }
            ]
          }
        },
        {
          text: "¡QUÉ MÁS DA!",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te dicen que pienses antes de hablar?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Agitada", points: 1 },
              { personality: "Grosera", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te ves guay? (No mientas, ¿vale?)",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Eres capaz de dar las gracias de corazón cuando hace falta?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 },
              { personality: "Serena", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 },
              { personality: "Rara", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te ves a veces como una persona aburrida y demasiado prudente?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Serena", points: 2 },
              { personality: "Huraña", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Tu sueño es vivir en paz y tranquilidad sin muchos sobresaltos?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta luchar?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Agitada", points: 1 },
              { personality: "Miedosa", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Serena", points: 2 },
              { personality: "Huraña", points: 1 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Bostezas con frecuencia?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Serena", points: 2 },
              { personality: "Plácida", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Fuerte", points: 1 },
              { personality: "Activa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Sueles llegar tarde a clase o cuando quedas?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Grosera", points: 1 },
              { personality: "Plácida", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 },
              { personality: "Activa", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Tienes la sensación de que últimamente te tomas las cosas con más calma?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Agitada", points: 1 },
              { personality: "Activa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "Hoy hace un día de playa buenísimo. ¿Cómo te sientes?",
    options: {
      create: [
        {
          text: "¡De maravilla!",
          scores: {
            create: [
              { personality: "Alegre", points: 2 }
            ]
          }
        },
        {
          text: "Qué sueño...",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        },
        {
          text: "¡Quiero irme a casa!",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Te duermes sin darte cuenta?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Serena", points: 1 },
              { personality: "Plácida", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te sientes solo o sola cuando no hay nadie contigo?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Miedosa", points: 1 },
              { personality: "Huraña", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te molesta que todos salgan de clase antes que tú?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Miedosa", points: 1 },
              { personality: "Huraña", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Audaz", points: 3 },
              { personality: "Plácida", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Cómo te gusta dormirte?",
    options: {
      create: [
        {
          text: "Con la luz encendida.",
          scores: {
            create: [
              { personality: "Miedosa", points: 1 },
              { personality: "Huraña", points: 2 }
            ]
          }
        },
        {
          text: "Con la luz apagada.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Te gusta que te digan lo que tienes que hacer?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 },
              { personality: "Plácida", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 },
              { personality: "Activa", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te cuesta decidirte?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 },
              { personality: "Rara", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Fuerte", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta que todo esté ordenado?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Serena", points: 2 },
              { personality: "Plácida", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 },
              { personality: "Osada", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta que te feliciten?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Huraña", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Te gusta hacer regalos?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Dócil", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta que te hagan regalos?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta cantar?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Osada", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Huraña", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta bailar?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Activa", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Serena", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Te gusta correr?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Activa", points: 2 },
              { personality: "Agitada", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta dormir?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Plácida", points: 2 },
              { personality: "Serena", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Activa", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta comer?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Osada", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Rara", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta leer?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Serena", points: 2 },
              { personality: "Dócil", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Agitada", points: 2 }
            ]
          }
        }
      ]
    }
  }
});
await prisma.question.create({
  data: {
    text: "¿Te gusta ayudar a los demás?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Dócil", points: 2 },
              { personality: "Alegre", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Grosera", points: 2 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta estar con mucha gente?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Osada", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Huraña", points: 2 },
              { personality: "Serena", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta estar solo?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Huraña", points: 2 },
              { personality: "Rara", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Alegre", points: 2 },
              { personality: "Activa", points: 1 }
            ]
          }
        }
      ]
    }
  }
});

await prisma.question.create({
  data: {
    text: "¿Te gusta hablar con desconocidos?",
    options: {
      create: [
        {
          text: "Sí.",
          scores: {
            create: [
              { personality: "Osada", points: 2 },
              { personality: "Alegre", points: 1 }
            ]
          }
        },
        {
          text: "No.",
          scores: {
            create: [
              { personality: "Miedosa", points: 2 },
              { personality: "Serena", points: 1 }
            ]
          }
        }
      ]
    }
  }
});


}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
