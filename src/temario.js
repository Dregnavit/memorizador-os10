// IDs permanentes: no derivarlos de la posición ni cambiarlos por ediciones de texto.
// Corte legislativo: 2026-10-26; fuentes oficiales y auditoría en docs/.
export const TEMARIO = [
  {
    "categoria": "Conceptos básicos",
    "preguntas": [
      {
        "q": "¿Qué es Seguridad?",
        "a": "Es la condición de protección de personas y bienes frente a riesgos y amenazas; no supone riesgo cero.",
        "id": "seguridad-definicion"
      },
      {
        "q": "¿Cuál es su función?",
        "a": "Proteger personas y bienes.",
        "id": "seguridad-funcion"
      },
      {
        "q": "¿Cuál es el objetivo?",
        "a": "Que las actividades se desarrollen en forma normal.",
        "id": "seguridad-objetivo"
      },
      {
        "q": "¿Qué tipos de seguridad existen?",
        "a": "Seguridad Nacional, Seguridad Pública y Seguridad Privada.",
        "id": "seguridad-tipos"
      },
      {
        "q": "¿Quiénes la ejercen?",
        "a": "Defensa nacional: Ejército, Armada y Fuerza Aérea. Las Fuerzas de Orden y Seguridad Pública comprenden Carabineros, Investigaciones y Gendarmería, según el art. 101 vigente. La seguridad privada la ejercen personas naturales y jurídicas autorizadas; no son policías.",
        "id": "seguridad-organismos",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "art. 101"
          },
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 1 a 3"
          }
        ]
      },
      {
        "q": "¿Cómo es la Seguridad Privada respecto a la Seguridad Pública?",
        "a": "Complementaria.",
        "id": "seguridad-complementaria",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 1 y 4"
          }
        ]
      },
      {
        "q": "¿Qué es riesgo?",
        "a": "Es la posibilidad de que una amenaza cause daño, considerando su probabilidad y consecuencias. La vulnerabilidad facilita que el daño ocurra.",
        "id": "riesgo-definicion"
      }
    ],
    "id": "conceptos"
  },
  {
    "categoria": "Marco Legal y Normativa",
    "preguntas": [
      {
        "q": "¿Qué disposiciones legales regulan la seguridad privada en Chile?",
        "a": "La Ley 21.659 es el marco general, vigente desde el 28 de noviembre de 2025. El DL 3.607 y la Ley 19.303 no son el marco general actual, aunque subsisten reglas limitadas para entidades y autorizaciones en transición.",
        "id": "seguridad-leyes",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 115 y arts. primero a tercero transitorios"
          }
        ]
      },
      {
        "q": "¿Qué disposiciones legales reglamentan estas leyes?",
        "a": "El Decreto 209 regula la seguridad privada de la Ley 21.659. Los reglamentos del régimen anterior solo conservan aplicación cuando una disposición transitoria lo permite; no deben enseñarse como el régimen general vigente.",
        "id": "seguridad-reglamentos",
        "fuentes": [
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "art. 1 y art. primero transitorio"
          },
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. segundo y tercero transitorios"
          }
        ]
      },
      {
        "q": "¿Quién es la Autoridad Fiscalizadora de la Seguridad Privada?",
        "a": "Carabineros de Chile fiscaliza bajo la dirección de la Subsecretaría de Prevención del Delito, órgano rector. En recintos sometidos a control militar, marítimo o aeronáutico, fiscaliza la autoridad institucional correspondiente.",
        "id": "seguridad-fiscalizacion",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 1, 81 a 83 y 86"
          }
        ]
      },
      {
        "q": "¿Qué idoneidad deben cumplir los agentes y empresas de seguridad?",
        "a": "Las personas deben cumplir los requisitos generales del art. 46 y los específicos de su función. Las empresas requieren autorización y los requisitos del art. 34. No basta una lista genérica de cuatro idoneidades.",
        "id": "seguridad-idoneidad",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 34 y 46"
          }
        ]
      },
      {
        "q": "¿Qué es Ley?",
        "a": "Es una declaración de la voluntad soberana que, manifestada en la forma prescrita por la Constitución, manda, prohíbe o permite.",
        "id": "ley-definicion",
        "fuentes": [
          {
            "fuente": "Código Civil (DFL 1 de 2000)",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=172986&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2025-08-28",
            "versionHasta": null,
            "articulo": "art. 1 del Código Civil"
          }
        ]
      },
      {
        "q": "¿Cómo se clasifican las leyes?",
        "a": "Imperativas: ordenan; prohibitivas: prohíben; permisivas: permiten una conducta en las condiciones que fija la ley.",
        "id": "ley-clasificacion",
        "fuentes": [
          {
            "fuente": "Código Civil (DFL 1 de 2000)",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=172986&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2025-08-28",
            "versionHasta": null,
            "articulo": "art. 1 del Código Civil"
          }
        ]
      },
      {
        "q": "¿Qué es derecho penal?",
        "a": "Conjunto de preceptos jurídicos referentes al delito, el delincuente y la pena.",
        "id": "penal-definicion"
      },
      {
        "q": "¿Cuáles son las normas más importantes dentro del Estado?",
        "a": "La Constitución es la norma suprema; leyes y reglamentos deben respetarla. Las sentencias resuelven casos particulares y la costumbre constituye derecho solo cuando la ley se remite a ella.",
        "id": "normas-jerarquia",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "arts. 6 y 7"
          },
          {
            "fuente": "Código Civil (DFL 1 de 2000)",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=172986&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2025-08-28",
            "versionHasta": null,
            "articulo": "arts. 2 y 3 del Código Civil"
          }
        ]
      },
      {
        "q": "¿Cómo debe ser un contrato de trabajo?",
        "a": "Es consensual, pero debe escriturarse y firmarse en dos ejemplares: dentro de 15 días desde la incorporación, o 5 días en contratos por obra, trabajo o servicio determinado o de duración inferior a 30 días. Debe indicar lugar y fecha, partes, servicios y lugar de prestación, remuneración, jornada, plazo y demás pactos. El registro electrónico ante la Dirección del Trabajo tiene un plazo distinto: 15 días desde la celebración.",
        "id": "contrato-trabajo",
        "fuentes": [
          {
            "fuente": "Código del Trabajo",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=207436&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-23",
            "versionHasta": "2027-03-14",
            "articulo": "arts. 7, 9, 9 bis y 10"
          }
        ]
      },
      {
        "q": "¿Qué estudia el derecho civil?",
        "a": "Regula, entre otras materias, personas, bienes, obligaciones, contratos y sucesión por causa de muerte.",
        "id": "civil-definicion"
      },
      {
        "q": "¿Qué estudia el derecho administrativo?",
        "a": "Estudia la organización y actividad de la Administración del Estado y sus relaciones jurídicas con las personas.",
        "id": "administrativo-definicion"
      },
      {
        "q": "¿Qué estudia el derecho Constitucional?",
        "a": "Estudia la organización del Estado, el ejercicio del poder y los derechos y garantías constitucionales.",
        "id": "constitucional-definicion"
      },
      {
        "q": "¿Qué conoce la justicia militar y qué personas quedan excluidas?",
        "a": "Conoce las materias que la ley somete a tribunales militares. Los civiles y menores de edad, como imputados o víctimas, no están sujetos a su competencia; intervienen los tribunales ordinarios con competencia penal.",
        "id": "justicia-militar",
        "fuentes": [
          {
            "fuente": "Ley 20.477, competencia de tribunales militares",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1021613&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2016-11-22",
            "versionHasta": null,
            "articulo": "arts. 1 y 2"
          }
        ]
      },
      {
        "q": "Diferencias entre Ley, D.F.L., D.L., D.S. y D.E.",
        "a": "Ley: aprobada por el Congreso y promulgada por el Presidente. DFL: dictado por el Presidente mediante delegación legislativa, dentro de sus límites. DL: norma con rango legal dictada históricamente por gobiernos de facto. DS: acto del Presidente firmado por el ministro competente. Exento: exceptuado de toma de razón conforme a las reglas aplicables; no significa exento de control.",
        "id": "tipos-normas",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "arts. 35, 64 y 99"
          }
        ]
      }
    ],
    "id": "marco-legal"
  },
  {
    "categoria": "Constitución y Poderes del Estado",
    "preguntas": [
      {
        "q": "¿Cuál es el deber del Estado según la Constitución con respecto a la Seguridad?",
        "a": "Es deber del Estado resguardar la seguridad nacional y dar protección a la población y a la familia.",
        "id": "estado-seguridad",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "art. 1"
          }
        ]
      },
      {
        "q": "¿Cuáles son los tres poderes del Estado?",
        "a": "Ejecutivo, Legislativo y Judicial.",
        "id": "poderes-estado",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "arts. 24, 46 y 76"
          }
        ]
      },
      {
        "q": "¿Cuál de los tres poderes es el más importante?",
        "a": "No hay uno superior a los otros: tienen funciones diferenciadas y relaciones de control y colaboración establecidas por la Constitución.",
        "id": "poderes-independencia",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "arts. 6, 7, 24, 46 y 76"
          }
        ]
      },
      {
        "q": "¿Qué función cumple cada uno?",
        "a": "Ejecutivo: gobierno y administración del Estado. Legislativo: formación de las leyes y otras atribuciones constitucionales; el Congreso cuenta con 155 diputados y 50 senadores. Judicial: conocer las causas, resolverlas y hacer ejecutar lo juzgado.",
        "id": "poderes-funciones",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "arts. 24, 46 y 76"
          },
          {
            "fuente": "Ley 18.700, texto refundido por DFL 2 de 2017",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1108229&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2025-10-23",
            "versionHasta": null,
            "articulo": "arts. 188 a 190"
          }
        ]
      },
      {
        "q": "¿Cuándo se aplica el recurso de Amparo y el de Protección?",
        "a": "Amparo: frente a privaciones, perturbaciones o amenazas ilegales a la libertad personal y seguridad individual. Protección: frente a actos u omisiones arbitrarios o ilegales que afecten los derechos enumerados en el art. 20; en materia ambiental rige la regla especial de ese artículo.",
        "id": "amparo-proteccion",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "arts. 20 y 21"
          }
        ]
      }
    ],
    "id": "constitucion"
  },
  {
    "categoria": "Guardias y Vigilantes",
    "preguntas": [
      {
        "q": "¿Qué actividades de seguridad privada regula la Ley 21.659?",
        "a": "La Ley 21.659 regula actividades de vigilancia y protección, custodia y transporte de valores y objetos peligrosos, seguridad electrónica, asesoría, capacitación y custodia de carga sobredimensionada. Las ejercen personas y empresas autorizadas; la ley no se resume en siete agentes y cinco empresas.",
        "id": "seguridad-agentes-empresas",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 1 a 3 y 33"
          }
        ]
      },
      {
        "q": "¿Cuáles son los requisitos para ser Guardia de Seguridad?",
        "a": "Ser mayor de edad; tener salud física y psíquica compatible; haber cursado educación media o equivalente; no tener condenas, acusaciones, sanciones ni incompatibilidades de las señaladas en el art. 46; aprobar la capacitación; comunicarse en castellano y cumplir las obligaciones militares cuando procedan. Los extranjeros deben tener residencia definitiva. Se requiere autorización y acreditar cada requisito en la forma legal; no se exige genéricamente nacionalidad chilena ni ausencia de deudas comerciales. Rigen además las reglas transitorias para autorizaciones anteriores.",
        "id": "guardia-requisitos",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 46, 47 y 50; art. tercero transitorio"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "arts. 82, 83 y 91"
          }
        ]
      },
      {
        "q": "¿Cuáles son las diferencias entre Guardias de Seguridad y Vigilantes Privados?",
        "a": "Ambos cumplen el art. 46. Guardia: no puede portar armas de fuego; formación mínima de 90 horas pedagógicas, perfeccionamiento o especialización mínimos de 36 horas cada 4 años; certificación por 4 años. Vigilante: requisitos especiales del art. 25 y porte de armas solo en jornada y recinto autorizado, salvo exención; formación mínima de 100 horas y perfeccionamiento mínimo de 40 cada 2 años; certificación por 2 años. Seguro mínimo: guardia 132 UF, o 250 UF en entidades obligadas a vigilancia privada; vigilante 250 UF. Ambos usan uniforme reglamentado: guardia negro con prendas rojas de alta visibilidad; vigilante gris perla azulado. Se aplican las reglas transitorias a autorizaciones anteriores.",
        "id": "guardia-vigilante-diferencias",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 25, 26, 46, 49, 50, 53 y 60; art. tercero transitorio"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "arts. 27, 33, 42, 88, 89, 90 y 107"
          }
        ]
      },
      {
        "q": "¿Quién autoriza y acredita a las empresas y agentes de seguridad privada?",
        "a": "En el régimen permanente, la Subsecretaría de Prevención del Delito otorga las autorizaciones. Transitoriamente, las nuevas autorizaciones continúan siendo emitidas por las Prefecturas de Carabineros mientras no funcione la plataforma legal. Las autorizaciones anteriores conservan vigencia según el art. tercero transitorio.",
        "id": "seguridad-autorizacion",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 28, 34 y 50; art. tercero transitorio"
          }
        ]
      },
      {
        "q": "¿Qué acredita la credencial de un guardia o vigilante privado?",
        "a": "Son licencias personales e intransferibles que identifican la habilitación para ejercer. Guardias y vigilantes deben portar su credencial durante sus funciones. No se distinguen solo por colores; rigen las características reglamentarias y el régimen transitorio de autorizaciones anteriores.",
        "id": "credenciales",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 28 y 50; art. tercero transitorio"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "arts. 35 y 91"
          }
        ]
      },
      {
        "q": "¿Qué información mínima de la instalación debe tener un guardia?",
        "a": "Conocer accesos, zonas de riesgo, rutas de evacuación, contactos de emergencia y procedimientos de su puesto, según el plan y la directiva aplicables. Acceder solo a los datos necesarios para su función.",
        "id": "instalacion-informacion",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 48"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "art. 92"
          }
        ]
      },
      {
        "q": "¿Quién regula el uniforme y autoriza los elementos defensivos de un guardia?",
        "a": "El Decreto 209 regula el uniforme; la Subsecretaría de Prevención del Delito puede autorizar modificaciones o exenciones en los casos previstos. Los elementos defensivos requieren su autorización, previo informe fiscalizador. El empleador los proporciona; ningún guardia puede portar armas de fuego ni los elementos prohibidos por el art. 53.",
        "id": "guardia-uniforme-equipamiento",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 52 y 53"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "arts. 90 y 93"
          }
        ]
      }
    ],
    "id": "guardias-vigilantes"
  },
  {
    "categoria": "Detenciones y Procedimientos",
    "preguntas": [
      {
        "q": "¿En qué caso se puede privar de libertad a una persona?",
        "a": "Solo en los casos y formas establecidos por la Constitución y las leyes. La regla es una orden de autoridad facultada por ley; en flagrancia se permite la detención para entrega inmediata. Un guardia no tiene facultades policiales generales.",
        "id": "privacion-libertad",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "art. 19 N.º 7"
          },
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "arts. 125, 129 y 130"
          }
        ]
      },
      {
        "q": "¿En qué caso un particular o guardia está facultado para detener?",
        "a": "Cualquier persona puede detener a quien sorprenda en delito flagrante y debe entregarlo inmediatamente a la policía, al Ministerio Público o a la autoridad judicial más próxima. No basta una sospecha; no habilita a castigar, interrogar ni ejercer controles policiales.",
        "id": "detencion-particulares",
        "fuentes": [
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "arts. 129 y 130"
          },
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 48 N.º 2"
          }
        ]
      },
      {
        "q": "¿Qué conviene registrar al entregar a una persona detenida por flagrancia?",
        "a": "Como registro operativo, anotar hechos observados, hora y lugar, circunstancias de la detención y entrega, receptor y estado aparente de la persona, según el protocolo. No es una formalidad universal de duplicados del Código Procesal Penal y nunca debe retrasar la entrega inmediata.",
        "id": "entrega-detenido",
        "fuentes": [
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "art. 129"
          }
        ]
      },
      {
        "q": "En un supermercado, ¿podrá el guardia detener a una persona que consume un alimento o esconde una especie antes de pasar por las cajas?",
        "a": "La línea de cajas no es un criterio legal absoluto. Debe existir un delito flagrante en un grado de ejecución punible; consumir u ocultar una especie no autoriza por sí solo a detener. Hay que evaluar los hechos, el ánimo de apropiación y las reglas aplicables, incluido el hurto-falta frustrado. La entrega a la autoridad debe ser inmediata.",
        "id": "hurto-supermercado",
        "fuentes": [
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "arts. 129 y 130"
          },
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 7, 9, 432 y 494 bis"
          }
        ]
      }
    ],
    "id": "detenciones"
  },
  {
    "categoria": "Delitos y tipos",
    "preguntas": [
      {
        "q": "¿Qué es delito?",
        "a": "Es toda acción u omisión voluntaria penada por la ley.",
        "id": "delito-definicion",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 1"
          }
        ]
      },
      {
        "q": "¿Qué es cuasidelito?",
        "a": "Conducta realizada con culpa, como imprudencia o negligencia, sin dolo, sancionada solo en los casos expresamente previstos por la ley. No significa que la acción sea involuntaria.",
        "id": "cuasidelito-definicion",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 2, 10 N.º 13, 490 y 492"
          }
        ]
      },
      {
        "q": "¿Cuáles son los grados de ejecución del delito?",
        "a": "Consumado, frustrado y tentativa. Son grados de ejecución: los crímenes y simples delitos admiten estas formas punibles. Las faltas se castigan consumadas, salvo excepciones legales, como el hurto-falta frustrado.",
        "id": "delito-etapas",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 7, 9 y 494 bis"
          }
        ]
      },
      {
        "q": "¿Cómo se clasifican los delitos atendida su gravedad?",
        "a": "Crímenes, simples delitos y faltas.",
        "id": "delito-gravedad",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 3"
          }
        ]
      },
      {
        "q": "¿Cuáles son los elementos comunes del robo y el hurto?",
        "a": "Apropiación de una cosa mueble ajena, sin la voluntad de su dueño y con ánimo de lucrarse.",
        "id": "robo-hurto-elementos",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 432"
          }
        ]
      },
      {
        "q": "¿Cuál es la diferencia entre robo y hurto?",
        "a": "Robo: apropiación con violencia o intimidación en las personas, o fuerza en las cosas en los supuestos legales. Hurto: apropiación sin esos elementos.",
        "id": "robo-hurto-diferencia",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 432, 436 y 440"
          }
        ]
      },
      {
        "q": "¿Cuál es la diferencia entre robo calificado y robo simple?",
        "a": "El art. 433 agrava el robo con violencia o intimidación cuando, con motivo u ocasión de él, hay homicidio, violación, las lesiones allí especificadas o retención de víctimas bajo rescate o por más tiempo del necesario. No toda agresión o lesión lo convierte en robo calificado.",
        "id": "robo-calificado",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 433 y 436"
          }
        ]
      },
      {
        "q": "¿Cuál es la diferencia entre hurto simple y hurto calificado?",
        "a": "El art. 447 permite aumentar la pena del hurto en casos específicos de abuso de confianza, como ciertos hurtos de dependientes, trabajadores, hospedadores o transportistas. No basta cualquier vínculo laboral o familiar.",
        "id": "hurto-calificado",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 446 y 447"
          }
        ]
      },
      {
        "q": "¿Cuál es la diferencia entre hurto de uso, hurto hallazgo y hurto falta?",
        "a": "El llamado hurto de uso no es un delito autónomo de ese nombre: debe analizarse si concurren los requisitos de apropiación y ánimo de lucro. El hurto de hallazgo comprende no entregar al dueño o a la autoridad una especie al parecer perdida de valor superior a una UTM, cuando consta quién es el dueño, y los supuestos especiales de calamidad del art. 448. El hurto-falta corresponde a cosas cuyo valor no excede de media UTM y también se sanciona frustrado.",
        "id": "hurto-modalidades",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 432, 448 y 494 bis"
          }
        ]
      },
      {
        "q": "¿Qué es estafa?",
        "a": "Obtener provecho patrimonial para sí o un tercero mediante un engaño que provoca error y lleva a una disposición patrimonial perjudicial para la víctima o un tercero.",
        "id": "estafa",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 467"
          }
        ]
      },
      {
        "q": "¿Qué es delito de lesiones?",
        "a": "Daño a la salud o integridad corporal de otra persona, en las modalidades y condiciones sancionadas por la ley. La gravedad y las circunstancias determinan el tipo y la pena.",
        "id": "lesiones",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 395 a 399"
          }
        ]
      },
      {
        "q": "¿Qué es delito de homicidio?",
        "a": "Matar a otra persona en las condiciones sancionadas por la ley, sin perjuicio de los tipos especiales y las eximentes que correspondan.",
        "id": "homicidio",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 10, 390 y 391"
          }
        ]
      },
      {
        "q": "¿Qué es secuestro?",
        "a": "Encerrar o detener a otra persona sin derecho, privándola de libertad. No requiere trasladarla.",
        "id": "secuestro",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 141"
          }
        ]
      },
      {
        "q": "¿Qué es escalamiento?",
        "a": "En el robo con fuerza del art. 440 N.º 1, entrar por una vía no destinada al efecto, por forado, rompimiento de pared o techos, o fractura de puertas o ventanas.",
        "id": "escalamiento",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 440 N.º 1"
          }
        ]
      },
      {
        "q": "¿Qué es calumnia?",
        "a": "Imputación de un delito determinado, pero falso y que pueda actualmente perseguirse de oficio.",
        "id": "calumnia",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 412"
          }
        ]
      },
      {
        "q": "¿Qué es injuria?",
        "a": "Toda expresión proferida o acción ejecutada en deshonra, descrédito o menosprecio de otra persona.",
        "id": "injuria",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 416"
          }
        ]
      }
    ],
    "id": "delitos"
  },
  {
    "categoria": "Legítima Defensa",
    "preguntas": [
      {
        "q": "¿Qué es legítima defensa?",
        "a": "Defensa de la persona o sus derechos frente a una agresión ilegítima, cumpliendo los requisitos legales de la eximente.",
        "id": "defensa-definicion",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 10 N.os 4, 5 y 6"
          }
        ]
      },
      {
        "q": "¿Qué elementos deben existir para aplicar la legítima defensa?",
        "a": "En defensa propia: agresión ilegítima, necesidad racional del medio empleado para impedirla o repelerla y falta de provocación suficiente de quien se defiende. No se exige ausencia de policía ni igualdad mecánica de armas; no autoriza una represalia posterior.",
        "id": "defensa-requisitos",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 10 N.º 4"
          }
        ]
      },
      {
        "q": "¿Qué es la legítima defensa privilegiada?",
        "a": "Es una presunción legal de los requisitos de defensa en los casos del art. 10 N.º 6: rechazo de escalamiento en casa, departamento u oficina habitados o sus dependencias; de noche, también en local comercial o industrial; o impedir ciertos delitos expresamente enumerados. No es una autorización general para defender empresas ni la presunción especial aplicable a funcionarios policiales.",
        "id": "defensa-privilegiada",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 10 N.º 6"
          }
        ]
      },
      {
        "q": "¿Cómo se clasifica la legítima defensa?",
        "a": "Defensa propia, defensa de parientes y defensa de extraños.",
        "id": "defensa-clasificacion",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 10 N.os 4, 5 y 6"
          }
        ]
      }
    ],
    "id": "legitima-defensa"
  },
  {
    "categoria": "Sitio del Suceso y Evacuación",
    "preguntas": [
      {
        "q": "¿Qué es el sitio del suceso?",
        "a": "Es el lugar relacionado con un hecho investigado donde pueden existir evidencias. Una zona de emergencia puede coincidir con él, pero no toda emergencia constituye delito.",
        "id": "sitio-definicion"
      },
      {
        "q": "¿Cómo se clasifica el sitio del suceso y qué se debe hacer?",
        "a": "Resguardar el lugar, restringir accesos según el protocolo y avisar a la policía; no alterar evidencias ni impedir auxilio o evacuación. El guardia no decreta una clausura.",
        "id": "sitio-proteccion",
        "fuentes": [
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "art. 83 letra c)"
          },
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 48 N.º 2"
          }
        ]
      },
      {
        "q": "¿Qué es una evacuación?",
        "a": "Es el traslado de personas en forma ordenada hacia un mismo lugar denominado zona de seguridad.",
        "id": "evacuacion"
      }
    ],
    "id": "sitio-evacuacion"
  },
  {
    "categoria": "Rondas y Retrato Hablado",
    "preguntas": [
      {
        "q": "¿Qué es retrato hablado?",
        "a": "Es la descripción que se hace de una persona efectuada por otros, ya sea mediante fijación descriptiva o cualquier forma útil.",
        "id": "retrato-definicion"
      },
      {
        "q": "¿Cómo se dividen las características del retrato hablado?",
        "a": "Describir rasgos observables: estatura y edad aproximadas, contextura, rostro, cabello, ojos, señas particulares, vestimenta y objetos. Distinguir observaciones de estimaciones.",
        "id": "retrato-caracteristicas"
      },
      {
        "q": "¿Cómo se caracterizan las rondas?",
        "a": "Son recorridos de vigilancia para observar riesgos y anomalías, verificar puntos de control e informar según el plan de seguridad.",
        "id": "rondas-movilidad"
      },
      {
        "q": "¿Cómo se clasifican las rondas?",
        "a": "Como clasificación operativa, pueden organizarse con recorridos fijos, variables o mixtos, según el plan del recinto; no es un catálogo legal cerrado.",
        "id": "rondas-clasificacion"
      },
      {
        "q": "¿Cuál es la diferencia entre ronda fija y ronda móvil?",
        "a": "En la fija se preestablecen horario y trayecto. En la variable se modifican según el plan y los riesgos; no implica recorrer cualquier lugar sin autorización.",
        "id": "rondas-fijas-moviles"
      }
    ],
    "id": "rondas"
  },
  {
    "categoria": "Responsabilidad Penal",
    "preguntas": [
      {
        "q": "Indique tres eximentes de responsabilidad.",
        "a": "Ejemplos: privación total de razón en los supuestos del art. 10 N.º 1; minoría de 14 años; y legítima defensa cuando concurren sus requisitos. Los adolescentes de 14 a menos de 18 años tienen el régimen especial de la Ley 20.084.",
        "id": "eximentes",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 10 N.os 1, 2, 4, 5 y 6"
          },
          {
            "fuente": "Ley 20.084 de Responsabilidad Penal Adolescente",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=244803&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-01-13",
            "versionHasta": "2222-02-01",
            "articulo": "art. 3"
          }
        ]
      },
      {
        "q": "Indique tres agravantes.",
        "a": "Ejemplos: alevosía en delitos contra las personas; precio, recompensa o promesa; y aumentar deliberadamente el mal causando otros males innecesarios para ejecutar el delito. Tener antecedentes no es por sí solo una agravante: la reincidencia tiene requisitos legales.",
        "id": "agravantes",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 12 N.os 1, 2, 4, 15 y 16"
          }
        ]
      },
      {
        "q": "Indique tres atenuantes.",
        "a": "Ejemplos: irreprochable conducta anterior; procurar con celo reparar el mal o impedir sus ulteriores consecuencias perniciosas; y colaborar sustancialmente al esclarecimiento de los hechos, sin constituir cooperación eficaz conforme a la ley.",
        "id": "atenuantes",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 11 N.os 6, 7 y 9"
          }
        ]
      },
      {
        "q": "¿Cuáles son las personas responsables de delito?",
        "a": "Autor, cómplice y encubridor.",
        "id": "participacion-delito",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 14 a 17"
          }
        ]
      },
      {
        "q": "¿Qué medidas se aplican actualmente a delitos cometidos por menores de 14 años?",
        "a": "Están exentos de responsabilidad penal. Pueden adoptarse medidas de protección de derechos cuando procedan, no penas ni internación penal automática por falta de discernimiento. La Ley 20.084 regula la responsabilidad adolescente desde los 14 y antes de los 18 años al inicio de ejecución, con sus reglas especiales.",
        "id": "menores-catorce",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 10 N.º 2"
          },
          {
            "fuente": "Ley 20.084 de Responsabilidad Penal Adolescente",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=244803&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-01-13",
            "versionHasta": "2222-02-01",
            "articulo": "art. 3"
          },
          {
            "fuente": "Ley 19.968, tribunales de familia",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=229557&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-22",
            "versionHasta": "2027-05-31",
            "articulo": "art. 8 N.º 7 y arts. 68 y siguientes"
          }
        ]
      }
    ],
    "id": "responsabilidad"
  },
  {
    "categoria": "Instalaciones y Barreras",
    "preguntas": [
      {
        "q": "¿En cuántas partes se divide una instalación?",
        "a": "Como convención de este temario, se distinguen área y recinto. No es una división legal universal de toda instalación.",
        "id": "instalacion-partes"
      },
      {
        "q": "Describa cada una.",
        "a": "En esta convención, recinto es el espacio demarcado o cerrado y área es la zona de la instalación que lo rodea. Los límites reales se determinan en el plan de seguridad.",
        "id": "instalacion-area-recinto"
      },
      {
        "q": "¿Con qué se protege una instalación?",
        "a": "Con las barreras de seguridad.",
        "id": "instalacion-proteccion"
      },
      {
        "q": "¿Cuántos tipos de barrera conoce?",
        "a": "Ejemplos de medidas de protección: personal de seguridad; barreras físicas artificiales o naturales; detección y alarmas; control de accesos e iluminación. Su combinación depende de los riesgos y del plan; no es una lista legal cerrada.",
        "id": "barreras-tipos"
      },
      {
        "q": "¿Qué debe proteger el Guardia de Seguridad en una instalación?",
        "a": "Proteger a las personas y los bienes, priorizando la vida e integridad de todas las personas y actuando dentro de sus atribuciones y condiciones de seguridad.",
        "id": "guardia-proteccion",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 1 y 4"
          }
        ]
      }
    ],
    "id": "instalaciones"
  },
  {
    "categoria": "Artefactos Explosivos",
    "preguntas": [
      {
        "q": "¿Cuántos tipos de artefactos explosivos existen en cuanto a forma, momento de explosar y resultado?",
        "a": "Son ejemplos, no un catálogo exhaustivo: vehículos, cartas o paquetes sospechosos. El guardia no debe intentar identificar, manipular ni desactivar sus mecanismos.",
        "id": "explosivos-tipos"
      },
      {
        "q": "¿Cuál es el procedimiento ante artefactos explosivos?",
        "a": "No tocar ni mover el objeto. Alejarse, impedir el acceso desde un lugar seguro y avisar a Carabineros. Evacuar según el plan y seguir instrucciones especializadas; no manipular instalaciones próximas al objeto.",
        "id": "explosivos-procedimiento"
      }
    ],
    "id": "explosivos"
  },
  {
    "categoria": "Documentación Operativa",
    "preguntas": [
      {
        "q": "¿Qué es una Directiva de Funcionamiento?",
        "a": "Instrumento que especifica los servicios de los guardias, dónde se prestan, quiénes los realizan y sus medidas de seguridad. Debe mantenerse una copia en la instalación para la fiscalización.",
        "id": "directiva-definicion",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 51"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "art. 92"
          }
        ]
      },
      {
        "q": "¿Quién presenta la directiva y qué debe contener?",
        "a": "La presenta la persona natural o jurídica para la cual trabajan los guardias. Incluye lugar, personal y elementos de protección, análisis del entorno, medidas y responsable de supervisión, y comunicaciones con la autoridad. En el régimen general se presenta ante la Subsecretaría con al menos 15 días hábiles de anticipación al inicio; dura 3 años, salvo servicios temporales, cuya vigencia corresponde a la actividad.",
        "id": "directiva-contenido",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 51"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "art. 92"
          }
        ]
      },
      {
        "q": "¿Qué es un Estudio de Seguridad?",
        "a": "Instrumento de la entidad obligada que identifica riesgos y vulnerabilidades y propone medidas para prevenirlos y neutralizarlos. No se limita a describir vigilantes privados; incluye las medidas y antecedentes exigidos según la entidad.",
        "id": "estudio-seguridad",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 13 a 17"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "art. 15"
          }
        ]
      },
      {
        "q": "¿Quién aprueba, rechaza o modifica las Directivas y el Estudio de Seguridad?",
        "a": "En el régimen de la Ley 21.659, la Subsecretaría de Prevención del Delito resuelve, previo informe técnico fiscalizador. Las directivas y estudios tienen procedimientos distintos. Para entidades que siguen en transición se conservan las reglas anteriores solo en el alcance del art. segundo transitorio.",
        "id": "documentos-aprobacion",
        "fuentes": [
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "arts. 15 y 51; art. segundo transitorio"
          },
          {
            "fuente": "Decreto 209, Reglamento de Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-09-17",
            "versionHasta": null,
            "articulo": "arts. 16 y 92"
          }
        ]
      }
    ],
    "id": "documentacion"
  },
  {
    "categoria": "Armas y Control",
    "preguntas": [
      {
        "q": "¿Quién fiscaliza la Ley de Control de Armas (N.º 17.798)?",
        "a": "La Dirección General de Movilización Nacional, dependiente del Ministerio de Defensa, tiene la supervigilancia y control. Actúa con autoridades militares y de Carabineros y los organismos técnicos previstos en la ley; no se limita a prefecturas policiales.",
        "id": "armas-fiscalizacion",
        "fuentes": [
          {
            "fuente": "Ley 17.798, texto refundido por Decreto 400",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-22",
            "versionHasta": null,
            "articulo": "arts. 1 y 4"
          }
        ]
      },
      {
        "q": "¿Cuándo es ilícito el porte de armas?",
        "a": "Portar armas sin autorización puede configurar los delitos de los arts. 9 o 14, según el arma y el caso. No todo porte irregular es delito: el art. 11 contempla una infracción administrativa para determinados portadores o trasladadores con permiso de posesión o tenencia, fuera de los lugares autorizados y sin el permiso correspondiente.",
        "id": "armas-porte",
        "fuentes": [
          {
            "fuente": "Ley 17.798, texto refundido por Decreto 400",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-22",
            "versionHasta": null,
            "articulo": "arts. 6, 9, 11 y 14"
          }
        ]
      },
      {
        "q": "¿Cuál es el delito de tenencia ilegal de armas?",
        "a": "Poseer o tener armas sujetas a control sin las autorizaciones o inscripción exigidas, o armas prohibidas, según los tipos legales. No se reduce a tener cualquier arma no inscrita.",
        "id": "armas-tenencia",
        "fuentes": [
          {
            "fuente": "Ley 17.798, texto refundido por Decreto 400",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-22",
            "versionHasta": null,
            "articulo": "arts. 2 a 5, 9 y 13"
          }
        ]
      },
      {
        "q": "¿Qué entiende por arma el art. 132 del Código Penal?",
        "a": "En el contexto del art. 132 del Código Penal: máquina, instrumento, utensilio u objeto cortante, punzante o contundente tomado para matar, herir o golpear, aunque no se use. No incluye genéricamente partes del cuerpo ni sustituye la clasificación de la Ley de Control de Armas.",
        "id": "arma-definicion",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "art. 132"
          },
          {
            "fuente": "Ley 17.798, texto refundido por Decreto 400",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-22",
            "versionHasta": null,
            "articulo": "arts. 2 y 3"
          }
        ]
      }
    ],
    "id": "armas"
  },
  {
    "categoria": "Fuego e Incendios",
    "preguntas": [
      {
        "q": "¿Cuál es el triángulo que provoca el fuego?",
        "a": "Temperatura, oxígeno y combustible.",
        "id": "fuego-triangulo"
      },
      {
        "q": "¿Cómo se minimiza el riesgo de un incendio?",
        "a": "Con el control periódico de extintores en lugares dispuestos, grifos en buen estado y la revisión de elementos que podrían ser foco de fuego.",
        "id": "incendio-prevencion"
      },
      {
        "q": "¿Cuál es el estado normal de la aguja de los extintores?",
        "a": "En extintores con manómetro, la aguja debe estar en la zona operativa indicada por el fabricante, generalmente verde. Revisar además sello, daños y mantención; los de CO₂ normalmente no usan manómetro.",
        "id": "extintor-manometro"
      },
      {
        "q": "¿Cuáles son los métodos de extinción de incendio?",
        "a": "Enfriar para reducir el calor, sofocar para limitar el oxígeno, retirar o aislar el combustible e inhibir la reacción en cadena. Elegir el agente adecuado al fuego y actuar solo con capacitación y una vía segura de salida.",
        "id": "incendio-extincion"
      }
    ],
    "id": "incendios"
  },
  {
    "categoria": "Asaltos y Riesgos",
    "preguntas": [
      {
        "q": "¿Qué factores debe enfrentar un guardia ante un asalto?",
        "a": "Factor sorpresa, cantidad de delincuentes y armamento.",
        "id": "asalto-factores"
      },
      {
        "q": "¿Cómo se consideran los daños físicos y psíquicos sufridos por un guardia en cumplimiento de sus funciones?",
        "a": "Las lesiones a causa o con ocasión del trabajo que produzcan incapacidad o muerte pueden constituir accidente del trabajo. La enfermedad profesional debe ser causada directamente por el trabajo y producir incapacidad o muerte. No se califican automáticamente como enfermedades profesionales por ocurrir durante un asalto.",
        "id": "danos-laborales",
        "fuentes": [
          {
            "fuente": "Ley 16.744 sobre accidentes del trabajo y enfermedades profesionales",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=28650&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2022-03-10",
            "versionHasta": null,
            "articulo": "arts. 5 y 7"
          }
        ]
      }
    ],
    "id": "asaltos"
  },
  {
    "categoria": "Comunicaciones y Alarmas",
    "preguntas": [
      {
        "q": "¿Quién autoriza el uso de las radiocomunicaciones?",
        "a": "SUBTEL regula y autoriza los servicios de radiocomunicaciones según su régimen. No todos los equipos o bandas tienen la misma exigencia; deben respetarse las condiciones técnicas aplicables.",
        "id": "radios-autorizacion"
      },
      {
        "q": "¿Cómo se clasifican las radios de comunicaciones?",
        "a": "HF, VHF y UHF son bandas de frecuencia usadas en radiocomunicaciones, no una clasificación exhaustiva de todos los equipos.",
        "id": "radios-bandas"
      },
      {
        "q": "¿Cuál es la finalidad de una antena en un transceptor portátil?",
        "a": "Permite transmitir y recibir ondas de radiofrecuencia.",
        "id": "radio-antena"
      },
      {
        "q": "¿Qué sistema de alarma utilizan las puertas y ventanas?",
        "a": "El contacto magnético es un sensor habitual de apertura de puertas y ventanas; puede complementarse con otros sensores según el diseño del sistema.",
        "id": "alarma-contacto"
      }
    ],
    "id": "comunicaciones"
  },
  {
    "categoria": "Tribunales y Justicia",
    "preguntas": [
      {
        "q": "¿Cuál es la competencia de los tribunales?",
        "a": "En materia penal actúan jueces de garantía y tribunales de juicio oral; el Ministerio Público dirige la investigación. Los tribunales civiles, laborales y de familia conocen sus materias legales; familia incluye alimentos, cuidado personal, relación directa y regular y protección de derechos, no solo divorcio. Hay juzgados de competencia común. Los civiles y menores no están sujetos a tribunales militares.",
        "id": "tribunales-competencias",
        "fuentes": [
          {
            "fuente": "Código Orgánico de Tribunales",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=25563&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-02",
            "versionHasta": "2222-02-01",
            "articulo": "arts. 14, 18 y 45"
          },
          {
            "fuente": "Código del Trabajo",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=207436&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-23",
            "versionHasta": "2027-03-14",
            "articulo": "art. 420"
          },
          {
            "fuente": "Ley 19.968, tribunales de familia",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=229557&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-07-22",
            "versionHasta": "2027-05-31",
            "articulo": "art. 8"
          },
          {
            "fuente": "Ley 20.477, competencia de tribunales militares",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1021613&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2016-11-22",
            "versionHasta": null,
            "articulo": "art. 1"
          },
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "art. 83"
          }
        ]
      },
      {
        "q": "¿Cómo se entiende hoy la antigua expresión libertad provisional?",
        "a": "Es una expresión del sistema procesal penal antiguo. En el proceso actual se distingue la libertad del imputado de las medidas cautelares, incluida la prisión preventiva, que requiere los presupuestos legales y resolución judicial. Estar imputado no implica quedar preso.",
        "id": "libertad-provisional",
        "fuentes": [
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "arts. 4, 122, 139 y 140"
          }
        ]
      },
      {
        "q": "¿Qué es la libertad condicional?",
        "a": "Es un modo de cumplir en libertad una pena privativa de libertad, sujeto a los requisitos y controles legales. No extingue ni modifica la duración de la pena. La regla de postulación se resuelve por la Comisión de Libertad Condicional; el presidio perpetuo calificado tiene intervención especial de la Corte Suprema.",
        "id": "libertad-condicional",
        "fuentes": [
          {
            "fuente": "Decreto Ley 321 de 1925, libertad condicional",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=5979&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2025-02-12",
            "versionHasta": null,
            "articulo": "arts. 1, 2 y 4"
          },
          {
            "fuente": "Código Orgánico de Tribunales",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=25563&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-02",
            "versionHasta": "2222-02-01",
            "articulo": "art. 96 N.º 7"
          }
        ]
      },
      {
        "q": "¿Cuál es la diferencia de las condenas entre un delito y un cuasidelito?",
        "a": "No hay condena automática: deben probarse los requisitos de la infracción. La pena depende del tipo penal y las circunstancias; la culpa solo se sanciona en los casos expresamente previstos por la ley.",
        "id": "penas-cuasidelitos",
        "fuentes": [
          {
            "fuente": "Código Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-08-20",
            "versionHasta": null,
            "articulo": "arts. 2, 4, 10 N.º 13, 490 y 492"
          },
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "art. 4"
          }
        ]
      }
    ],
    "id": "tribunales"
  },
  {
    "categoria": "Conducta del Guardia",
    "preguntas": [
      {
        "q": "¿Cuándo y con quién debe observar actitudes correctas el guardia?",
        "a": "Siempre, con todas las personas que se encuentren en la instalación.",
        "id": "guardia-trato"
      },
      {
        "q": "¿Qué revisiones periódicas debe hacer un guardia?",
        "a": "Comprobar visualmente, según el protocolo, el estado de extintores y alarmas e informar anomalías. No intervenir conexiones eléctricas ni equipos para los que no esté capacitado o autorizado.",
        "id": "guardia-revisiones"
      }
    ],
    "id": "conducta"
  },
  {
    "categoria": "Carabineros",
    "preguntas": [
      {
        "q": "¿Cuál es la misión de Carabineros?",
        "a": "Garantizar el orden y la seguridad pública y dar eficacia al derecho.",
        "id": "carabineros-mision",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "art. 101"
          }
        ]
      },
      {
        "q": "¿Qué funciones de Carabineros son relevantes para la seguridad privada?",
        "a": "Garantizar el orden y la seguridad pública, dar eficacia al derecho, cumplir las actuaciones policiales legales y fiscalizar la seguridad privada dentro de su competencia. Las etiquetas institucionales de roles no amplían las facultades de un guardia.",
        "id": "carabineros-roles",
        "fuentes": [
          {
            "fuente": "Constitución Política de la República",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-04-16",
            "versionHasta": null,
            "articulo": "art. 101"
          },
          {
            "fuente": "Código Procesal Penal",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-10-16",
            "versionHasta": null,
            "articulo": "art. 83"
          },
          {
            "fuente": "Ley 21.659 sobre Seguridad Privada",
            "url": "https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26",
            "fechaRevision": "2026-10-26",
            "versionDesde": "2026-05-28",
            "versionHasta": "2026-10-31",
            "articulo": "art. 86"
          }
        ]
      }
    ],
    "id": "carabineros"
  }
];
