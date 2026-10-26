# Primera auditoría legislativa — Memorizador OS10

Corte: **26 de octubre de 2026**. Base: `main` en `dce0b95739913deafbb062e1b5dd11f45ef22b5a`.

Se examinaron las **103 preguntas de las 20 categorías**. Las clasificaciones siguientes describen el texto original, no las respuestas ya corregidas. Se cambiaron 86 preguntas y se conservaron 17 sin cambiar pregunta ni respuesta. Las 16 clasificadas como correctas conservan su respuesta. Se añadieron fundamentos consultables a 70 preguntas. Las definiciones doctrinales y convenciones operativas no se presentan como citas textuales de leyes.

| Clasificación del original | Cantidad |
| --- | ---: |
| Desactualizada o jurídicamente incorrecta | 43 |
| Vigente y correcta | 16 |
| Vigente, pero necesita precisiones | 36 |
| Ambigua o carente de fundamento verificable | 8 |

## Fuentes y control de vigencia

Se consultaron 15 textos consolidados oficiales en LeyChile. La interfaz pública inicialmente devolvió errores; se obtuvieron los textos mediante los servicios de consulta y exportación oficiales de BCN. El [manifiesto](fuentes/manifest.json) registra URL oficial, fecha, versión, SHA-256 de la respuesta consultada y ubicación de los extractos. Los extractos conservan los preceptos utilizados para facilitar la revisión; omiten notas marginales de modificaciones y no sustituyen al documento oficial con sus notas. Las notas interpretativas consultadas sobre los arts. 46 de la ley y 92 del reglamento se consignan más abajo.

- **Ley 21.659:** versión del **28-05-2026 al 31-10-2026**. Entrada general en vigor: 28-11-2025. La versión con vigencia diferida desde **01-11-2026 se excluyó**.
- **Decreto 209:** versión de **17-09-2026**. Se incorporan sus mínimos reglamentarios, no se inventan duraciones de mallas particulares.
- Código Penal: versión desde 20-08-2026; Código Procesal Penal: desde 16-10-2026.
- Código del Trabajo: versión del 23-07-2026 al 14-03-2027; Ley 20.084: versión desde 13-01-2026. Los campos de BCN con término 2222 corresponden a su representación de vigencia diferida, no a una fecha de caducidad enseñada en el banco.
- Se contrastaron además Constitución, Código Civil, Código Orgánico de Tribunales, leyes 18.700, 19.968, 20.477, 16.744, Ley de Control de Armas en su texto refundido y DL 321. No se utilizó el texto original no refundido de 1972 como Ley de Control de Armas actual.

La Constitución consultada, art. 101, incluye **Gendarmería** entre las Fuerzas de Orden y Seguridad Pública; se conserva esa formulación vigente al corte, sin sustituirla por una versión anterior.

## Disposiciones prioritarias

| Disposición | Resultado aplicado |
| --- | --- |
| Ley 21.659 art. 46 | Mayoría de edad, aptitudes físicas y psíquicas, **haber cursado** educación media o equivalente, capacitación y demás requisitos e impedimentos; extranjeros con residencia definitiva. No se mantiene la exclusión general de extranjeros ni la exigencia de carecer de deudas comerciales. |
| Ley art. 49 | Definición de guardia y deber del empleador de contratar seguro; el monto se determina en el reglamento. |
| Ley art. 50 | Autorización de guardia por 4 años en el régimen permanente, credencial personal e intransferible y obligación de portarla. Se distingue de la transición administrativa. |
| Ley art. 53 | Elementos defensivos autorizados; prohibición de armas de fuego y demás elementos señalados, sin excepción genérica por trabajar en una empresa. |
| Ley art. 60 | Examen ante Carabineros; certificación por la Subsecretaría. Vigilantes: 2 años; guardias y demás sujetos indicados: 4 años. Cambiar empleador no obliga a repetir el curso dentro de ese plazo. |
| Decreto art. 27 | Vigilantes: formación **mínima de 100 horas pedagógicas**; perfeccionamiento **mínimo de 40 cada 2 años**. Se repite formación si no se rinde perfeccionamiento a tiempo. |
| Decreto art. 88 | Guardias: seguro mínimo **132 UF**, o **250 UF** en entidades obligadas a sistema de vigilancia privada. No 75 UTM. El artículo establece condiciones de cobertura. |
| Decreto art. 89 | Guardias: formación **mínima de 90 horas pedagógicas**; perfeccionamiento o especialización **mínimos de 36 cada 4 años**. La especialización reemplaza perfeccionamiento en los casos regulados. Se repite formación si no se actualiza en plazo. |
| Decreto art. 90 | Uniforme reglamentado negro, chaleco rojo de alta visibilidad y chaquetón rojo; reglas especiales y modificaciones autorizables. No uniforme libre. |
| Decreto art. 92 | Directiva: lugar, personal/equipamiento, entorno, medidas/supervisión y comunicaciones. Régimen general ante Subsecretaría con informe fiscalizador; vigencia de 3 años, salvo actividad temporal. La copia debe permanecer en la instalación. |
| Decreto art. 107 | La Subsecretaría determina los programas por resolución, a propuesta fiscalizadora, con contenidos mínimos. No se transforma un mínimo reglamentario en una duración universal exacta. |

Complementos: seguro de vigilantes mínimo 250 UF (Decreto art. 42); uniforme gris perla azulado (art. 33). La nota oficial del art. 46 recoge la Resolución 2517 exenta, publicada el 20-12-2025, sobre equivalencia de estudios para fines laborales. La nota del art. 92 recoge la Resolución 3493 exenta, publicada el 17-09-2026, sobre acreditación de medios humanos y formación de empresas especializadas al presentar directiva. No se añaden requisitos deducidos fuera de esas notas.

## Transición: no confundir régimen permanente con tramitación efectiva

Los arts. segundo y tercero transitorios de la ley, en el texto al corte, contienen modificaciones de 2026:

- Primer estudio de las entidades expresamente enumeradas: 18 meses desde la entrada en vigor; plazo especial de pronunciamiento de 90 días hábiles en esos casos.
- Otras entidades antes obligadas conservan esa calidad hasta un máximo de 2 años mientras se resuelve su determinación; la normativa anterior subsiste solo en el alcance dispuesto para estas entidades.
- Autorizaciones anteriores vigentes al inicio: hasta su vencimiento conforme al régimen de origen. El personal indicado en el art. tercero conserva su última autorización una vez vencida por el máximo de 18 meses desde la entrada en vigor, con la excepción allí prevista para vencimientos posteriores.
- Las nuevas autorizaciones siguen siendo emitidas por las Prefecturas mientras no funcione la plataforma. La ley fija su puesta en marcha en un máximo de un año desde la entrada en vigor. El banco **no afirma que la plataforma ya esté funcionando**.

El reglamento también prevé tramitación presencial mientras se implementa la plataforma. No se enseña que todas las autorizaciones o instrumentos anteriores hayan caducado automáticamente al entrar la nueva ley.

## Protección del progreso y ejercicios

Los IDs literales de preguntas y categorías no dependen del orden. `src/legacy-ids.js` congela la correspondencia de los 103 índices anteriores. No debe regenerarse desde el orden futuro. La migración crea `os10-srs-v2` con versión 2, agendas y registros no mapeados; **no escribe ni elimina `os10-srs`**. Conserva `ease`, `interval`, `reps` y `due` exactamente. Las correcciones editoriales no se califican como un nuevo repaso.

Datos corruptos, formatos desconocidos, bloqueo de almacenamiento o cuota agotada no se sobrescriben: hay aviso y sesión en memoria. Si existe v2 válido, prevalece sobre la copia antigua. Al calificar se conserva el progreso de otras preguntas escrito por otra pestaña. Un cambio de rama hacia la aplicación antigua volvería a leer su copia anterior: no hay sincronización inversa automática de nuevos repasos a los IDs de índices.

Los fundamentos se abren en un desplegable dentro de la tarjeta y no cambian el paso ni califican. Los cuatro pasos se conservan. El examen retiene su pregunta y modalidad mientras se responde, y reinicia sus controles al avanzar; antes podía recalcular la selección por cambios del padre. No se cambió la fórmula SRS.

## Verificación y límites

- `npm test`: **19 pruebas** de migración, recuperación, identidad, SRS, ejercicios y consistencia del banco/auditoría/fuentes.
- `npm run test:browser`: **6 pruebas en Chromium** sobre migración real, recarga, cuatro pasos y fuentes, tres modalidades, selección por categoría y datos corruptos.
- `npm run lint` y `npm run build`: comprobaciones requeridas; resultados finales registrados en la PR.

Pendientes de aplicación concreta: comprobar si la plataforma está operativa al tramitar una solicitud, qué resolución de malla exige el curso específico y si una autorización individual se beneficia de la transición. Estos hechos administrativos no se presumen a partir del texto legal. La auditoría no certifica proveedores ni habilitaciones individuales. Las materias técnicas conservadas son enseñanza operativa general, no una certificación de protocolos propios de una instalación.

## Registro íntegro por pregunta

También disponible en [JSON](auditoria-2026-10-26.json). Cada registro contiene el original, el texto actual, la clasificación del original, el motivo, el ID anterior y el estable y las fuentes. La ausencia de fuente jurídica significa explicación conceptual u operativa; no se inventa un artículo para justificarla.

### Conceptos básicos

#### 0-0 → `seguridad-definicion`

**Original:** ¿Qué es Seguridad?

> Es la sensación de estar cubiertos de todo riesgo o amenaza.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La seguridad no garantiza ausencia total de riesgos; confunde percepción con condición de protección.

**Actual:** ¿Qué es Seguridad?

Es la condición de protección de personas y bienes frente a riesgos y amenazas; no supone riesgo cero.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 0-1 → `seguridad-funcion`

**Original:** ¿Cuál es su función?

> Proteger personas y bienes.

**Clasificación:** Vigente y correcta. Finalidad general adecuada; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 0-2 → `seguridad-objetivo`

**Original:** ¿Cuál es el objetivo?

> Que las actividades se desarrollen en forma normal.

**Clasificación:** Vigente y correcta. Objetivo operativo general; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 0-3 → `seguridad-tipos`

**Original:** ¿Qué tipos de seguridad existen?

> Seguridad Nacional, Seguridad Pública y Seguridad Privada.

**Clasificación:** Vigente, pero necesita precisiones. Es una clasificación pedagógica, no una enumeración legal exhaustiva.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 0-4 → `seguridad-organismos`

**Original:** ¿Quiénes la ejercen?

> Seguridad Nacional: FF.AA. (Ministerio de Defensa — Ejército, Armada y Fuerza Aérea). Seguridad Pública: FF.OO. (Carabineros y Policía de Investigaciones). Seguridad Privada: 7 agentes y 5 tipos de empresas de seguridad privada.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Omite el régimen de actividades autorizadas y los organismos del art. 101 constitucional vigente.

**Actual:** ¿Quiénes la ejercen?

Defensa nacional: Ejército, Armada y Fuerza Aérea. Las Fuerzas de Orden y Seguridad Pública comprenden Carabineros, Investigaciones y Gendarmería, según el art. 101 vigente. La seguridad privada la ejercen personas naturales y jurídicas autorizadas; no son policías.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), art. 101; [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 1 a 3. Revisión: 26-10-2026.

#### 0-5 → `seguridad-complementaria`

**Original:** ¿Cómo es la Seguridad Privada respecto a la Seguridad Pública?

> Complementaria.

**Clasificación:** Vigente y correcta. Carácter complementario confirmado por los arts. 1 y 4 de la Ley 21.659.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 1 y 4. Revisión: 26-10-2026.

#### 0-6 → `riesgo-definicion`

**Original:** ¿Qué es riesgo?

> Es la contingencia y daños que provienen de diferentes fuentes denominadas vulnerabilidades. También se define como la amenaza o proximidad de un daño.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Confunde amenaza, vulnerabilidad y riesgo.

**Actual:** ¿Qué es riesgo?

Es la posibilidad de que una amenaza cause daño, considerando su probabilidad y consecuencias. La vulnerabilidad facilita que el daño ocurra.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Marco Legal y Normativa

#### 1-0 → `seguridad-leyes`

**Original:** ¿Qué disposiciones legales regulan la seguridad privada en Chile?

> Decreto Ley 3.607: Ley de Vigilantes Privados. Ley N.º 19.303: Determina entidades obligadas a contar con sistema de seguridad.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Se presenta el régimen anterior como marco general; omite la Ley 21.659 y su transición.

**Actual:** ¿Qué disposiciones legales regulan la seguridad privada en Chile?

La Ley 21.659 es el marco general, vigente desde el 28 de noviembre de 2025. El DL 3.607 y la Ley 19.303 no son el marco general actual, aunque subsisten reglas limitadas para entidades y autorizaciones en transición.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 115 y arts. primero a tercero transitorios. Revisión: 26-10-2026.

#### 1-1 → `seguridad-reglamentos`

**Original:** ¿Qué disposiciones legales reglamentan estas leyes?

> D.S. 1.773 y D.S. 93 reglamentan el D.L. 3.607. D.S. 1.772 reglamenta la Ley 19.303.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Se citan reglamentos del régimen anterior como si fueran el marco general, sin las limitaciones transitorias.

**Actual:** ¿Qué disposiciones legales reglamentan estas leyes?

El Decreto 209 regula la seguridad privada de la Ley 21.659. Los reglamentos del régimen anterior solo conservan aplicación cuando una disposición transitoria lo permite; no deben enseñarse como el régimen general vigente.

**Fundamento:** [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), art. 1 y art. primero transitorio; [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. segundo y tercero transitorios. Revisión: 26-10-2026.

#### 1-2 → `seguridad-fiscalizacion`

**Original:** ¿Quién es la Autoridad Fiscalizadora de la Seguridad Privada?

> La Prefectura de Carabineros de Chile del sector, a través del Departamento OS-10.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Confunde autoridad rectora/autorizadora con órgano fiscalizador y unidad policial.

**Actual:** ¿Quién es la Autoridad Fiscalizadora de la Seguridad Privada?

Carabineros de Chile fiscaliza bajo la dirección de la Subsecretaría de Prevención del Delito, órgano rector. En recintos sometidos a control militar, marítimo o aeronáutico, fiscaliza la autoridad institucional correspondiente.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 1, 81 a 83 y 86. Revisión: 26-10-2026.

#### 1-3 → `seguridad-idoneidad`

**Original:** ¿Qué idoneidad deben cumplir los agentes y empresas de seguridad?

> Idoneidad Cívica, Moral, de Salud y Profesional.

**Clasificación:** Ambigua o carente de fundamento verificable. Las cuatro idoneidades no sustituyen los requisitos generales y específicos por actividad de los arts. 34 y 46.

**Actual:** ¿Qué idoneidad deben cumplir los agentes y empresas de seguridad?

Las personas deben cumplir los requisitos generales del art. 46 y los específicos de su función. Las empresas requieren autorización y los requisitos del art. 34. No basta una lista genérica de cuatro idoneidades.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 34 y 46. Revisión: 26-10-2026.

#### 1-4 → `ley-definicion`

**Original:** ¿Qué es Ley?

> Es un documento o disposición que manda, prohíbe o permite hacer algo.

**Clasificación:** Vigente, pero necesita precisiones. No reproduce con precisión la definición del Código Civil, art. 1.

**Actual:** ¿Qué es Ley?

Es una declaración de la voluntad soberana que, manifestada en la forma prescrita por la Constitución, manda, prohíbe o permite.

**Fundamento:** [Código Civil (DFL 1 de 2000)](https://www.bcn.cl/leychile/navegar?idNorma=172986&idVersion=2026-10-26), art. 1 del Código Civil. Revisión: 26-10-2026.

#### 1-5 → `ley-clasificacion`

**Original:** ¿Cómo se clasifican las leyes?

> Imperativa: Ordena hacer algo, por ejemplo, pagar impuestos. Prohibitiva: Prohíbe hacer algo, por ejemplo, matar. Permisiva: Permite hacer algo, por ejemplo, defensa propia.

**Clasificación:** Vigente, pero necesita precisiones. Clasificación doctrinal útil; la defensa no es una autorización ilimitada.

**Actual:** ¿Cómo se clasifican las leyes?

Imperativas: ordenan; prohibitivas: prohíben; permisivas: permiten una conducta en las condiciones que fija la ley.

**Fundamento:** [Código Civil (DFL 1 de 2000)](https://www.bcn.cl/leychile/navegar?idNorma=172986&idVersion=2026-10-26), art. 1 del Código Civil. Revisión: 26-10-2026.

#### 1-6 → `penal-definicion`

**Original:** ¿Qué es derecho penal?

> Conjunto de preceptos jurídicos referentes al delito, el delincuente y la pena.

**Clasificación:** Vigente y correcta. Definición doctrinal introductoria adecuada.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 1-7 → `normas-jerarquia`

**Original:** ¿Cuáles son las normas más importantes dentro del Estado?

> La Constitución, las sentencias y las costumbres.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Omite leyes y reglamentos, y equipara sentencias y costumbre con normas generales.

**Actual:** ¿Cuáles son las normas más importantes dentro del Estado?

La Constitución es la norma suprema; leyes y reglamentos deben respetarla. Las sentencias resuelven casos particulares y la costumbre constituye derecho solo cuando la ley se remite a ella.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), arts. 6 y 7; [Código Civil (DFL 1 de 2000)](https://www.bcn.cl/leychile/navegar?idNorma=172986&idVersion=2026-10-26), arts. 2 y 3 del Código Civil. Revisión: 26-10-2026.

#### 1-8 → `contrato-trabajo`

**Original:** ¿Cómo debe ser un contrato de trabajo?

> Por escrito y en dos ejemplares, dentro del plazo de 15 días de incorporar al trabajador. Debe ser consensual y contener: dependencia y subordinación, naturaleza del trabajo, remuneración, horario, lugar de trabajo y plazo (fijo, indefinido o por término de obra).

**Clasificación:** Desactualizada o jurídicamente incorrecta. Omite el plazo reducido y simplifica el contenido mínimo legal.

**Actual:** ¿Cómo debe ser un contrato de trabajo?

Es consensual, pero debe escriturarse y firmarse en dos ejemplares: dentro de 15 días desde la incorporación, o 5 días en contratos por obra, trabajo o servicio determinado o de duración inferior a 30 días. Debe indicar lugar y fecha, partes, servicios y lugar de prestación, remuneración, jornada, plazo y demás pactos. El registro electrónico ante la Dirección del Trabajo tiene un plazo distinto: 15 días desde la celebración.

**Fundamento:** [Código del Trabajo](https://www.bcn.cl/leychile/navegar?idNorma=207436&idVersion=2026-10-26), arts. 7, 9, 9 bis y 10. Revisión: 26-10-2026.

#### 1-9 → `civil-definicion`

**Original:** ¿Qué estudia el derecho civil?

> Estudia los actos y contratos entre personas y empresas, y su regulación cuando no existe acuerdo en actos contraídos con valor legal.

**Clasificación:** Vigente, pero necesita precisiones. El derecho civil no actúa solo si falta acuerdo.

**Actual:** ¿Qué estudia el derecho civil?

Regula, entre otras materias, personas, bienes, obligaciones, contratos y sucesión por causa de muerte.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 1-10 → `administrativo-definicion`

**Original:** ¿Qué estudia el derecho administrativo?

> Las relaciones entre el Estado y las personas. Ejemplo: relación entre Intendentes, Gobernador y Alcalde.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Usa autoridades territoriales obsoletas y una definición demasiado amplia.

**Actual:** ¿Qué estudia el derecho administrativo?

Estudia la organización y actividad de la Administración del Estado y sus relaciones jurídicas con las personas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 1-11 → `constitucional-definicion`

**Original:** ¿Qué estudia el derecho Constitucional?

> Norma el ordenamiento fundamental de la Constitución.

**Clasificación:** Vigente, pero necesita precisiones. Confunde la disciplina con su norma principal.

**Actual:** ¿Qué estudia el derecho Constitucional?

Estudia la organización del Estado, el ejercicio del poder y los derechos y garantías constitucionales.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 1-12 → `justicia-militar`

**Original:** ¿Qué estudia el derecho de la Justicia Militar?

> Los delitos cometidos por militares en el cumplimiento de sus funciones, y los delitos de civiles contra Carabineros en servicio.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Atribuye genéricamente civiles a jurisdicción militar.

**Actual:** ¿Qué conoce la justicia militar y qué personas quedan excluidas?

Conoce las materias que la ley somete a tribunales militares. Los civiles y menores de edad, como imputados o víctimas, no están sujetos a su competencia; intervienen los tribunales ordinarios con competencia penal.

**Fundamento:** [Ley 20.477, competencia de tribunales militares](https://www.bcn.cl/leychile/navegar?idNorma=1021613&idVersion=2026-10-26), arts. 1 y 2. Revisión: 26-10-2026.

#### 1-13 → `tipos-normas`

**Original:** Diferencias entre Ley, D.F.L., D.L., D.S. y D.E.

> Ley: Dispuestas por el Parlamento. D.F.L. (Decreto con Fuerza de Ley): Requeridos por el Parlamento al Presidente. D.L. (Decreto Ley): Dictados por un gobierno de facto; son materias de ley. D.S. (Decreto Supremo): Materias administrativas (reglamentos). D.E. (Decreto Exento): Trámites emitidos por el Ejecutivo.

**Clasificación:** Desactualizada o jurídicamente incorrecta. El DFL deriva de delegación legislativa; decreto exento no significa trámite ni distinta jerarquía por sí solo.

**Actual:** Diferencias entre Ley, D.F.L., D.L., D.S. y D.E.

Ley: aprobada por el Congreso y promulgada por el Presidente. DFL: dictado por el Presidente mediante delegación legislativa, dentro de sus límites. DL: norma con rango legal dictada históricamente por gobiernos de facto. DS: acto del Presidente firmado por el ministro competente. Exento: exceptuado de toma de razón conforme a las reglas aplicables; no significa exento de control.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), arts. 35, 64 y 99. Revisión: 26-10-2026.

### Constitución y Poderes del Estado

#### 2-0 → `estado-seguridad`

**Original:** ¿Cuál es el deber del Estado según la Constitución con respecto a la Seguridad?

> Proteger la Nación y su población.

**Clasificación:** Vigente, pero necesita precisiones. Debe incluir la formulación constitucional del deber de seguridad.

**Actual:** ¿Cuál es el deber del Estado según la Constitución con respecto a la Seguridad?

Es deber del Estado resguardar la seguridad nacional y dar protección a la población y a la familia.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), art. 1. Revisión: 26-10-2026.

#### 2-1 → `poderes-estado`

**Original:** ¿Cuáles son los tres poderes del Estado?

> Ejecutivo, Legislativo y Judicial.

**Clasificación:** Vigente y correcta. Clasificación constitucional básica; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), arts. 24, 46 y 76. Revisión: 26-10-2026.

#### 2-2 → `poderes-independencia`

**Original:** ¿Cuál de los tres poderes es el más importante?

> Ninguno. Los tres son independientes y autónomos.

**Clasificación:** Vigente, pero necesita precisiones. No hay una jerarquía de importancia; existen funciones, controles y colaboración.

**Actual:** ¿Cuál de los tres poderes es el más importante?

No hay uno superior a los otros: tienen funciones diferenciadas y relaciones de control y colaboración establecidas por la Constitución.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), arts. 6, 7, 24, 46 y 76. Revisión: 26-10-2026.

#### 2-3 → `poderes-funciones`

**Original:** ¿Qué función cumple cada uno?

> Ejecutivo: Administra el Estado (Presidente con ministros y asesores). Legislativo: Confecciona y crea leyes (Parlamento: 120 Diputados y 36 Senadores). Judicial: Administra justicia (Jueces; cabeza es la Corte Suprema).

**Clasificación:** Desactualizada o jurídicamente incorrecta. 120 diputados y 36 senadores son cifras desactualizadas.

**Actual:** ¿Qué función cumple cada uno?

Ejecutivo: gobierno y administración del Estado. Legislativo: formación de las leyes y otras atribuciones constitucionales; el Congreso cuenta con 155 diputados y 50 senadores. Judicial: conocer las causas, resolverlas y hacer ejecutar lo juzgado.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), arts. 24, 46 y 76; [Ley 18.700, texto refundido por DFL 2 de 2017](https://www.bcn.cl/leychile/navegar?idNorma=1108229&idVersion=2026-10-26), arts. 188 a 190. Revisión: 26-10-2026.

#### 2-4 → `amparo-proteccion`

**Original:** ¿Cuándo se aplica el recurso de Amparo y el de Protección?

> Amparo: Ante una detención ilegal. Protección: Ante amenazas a los derechos constitucionales.

**Clasificación:** Vigente, pero necesita precisiones. Amparo y protección abarcan más supuestos y la protección no cubre indiscriminadamente todos los derechos.

**Actual:** ¿Cuándo se aplica el recurso de Amparo y el de Protección?

Amparo: frente a privaciones, perturbaciones o amenazas ilegales a la libertad personal y seguridad individual. Protección: frente a actos u omisiones arbitrarios o ilegales que afecten los derechos enumerados en el art. 20; en materia ambiental rige la regla especial de ese artículo.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), arts. 20 y 21. Revisión: 26-10-2026.

### Guardias y Vigilantes

#### 3-0 → `seguridad-agentes-empresas`

**Original:** ¿Cuáles son los 7 agentes y los 5 tipos de empresas de seguridad privada?

> 7 agentes: Asesor, Capacitador, Jefe de Seguridad, Técnico en Seguridad, Supervisor, Vigilantes Privados y Guardias de Seguridad. 5 empresas: Asesorías, Capacitación, Recursos Humanos, Técnicas (expendedoras de elementos de seguridad como alarmas) y Transporte de Valores.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La lista cerrada no refleja las actividades descritas en los arts. 1 a 3 del régimen vigente.

**Actual:** ¿Qué actividades de seguridad privada regula la Ley 21.659?

La Ley 21.659 regula actividades de vigilancia y protección, custodia y transporte de valores y objetos peligrosos, seguridad electrónica, asesoría, capacitación y custodia de carga sobredimensionada. Las ejercen personas y empresas autorizadas; la ley no se resume en siete agentes y cinco empresas.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 1 a 3 y 33. Revisión: 26-10-2026.

#### 3-1 → `guardia-requisitos`

**Original:** ¿Cuáles son los requisitos para ser Guardia de Seguridad?

> Chileno, 18 años, 8.º básico, sin antecedentes penales ni comerciales, salud compatible, y curso y examen aprobado en OS-10.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Nacionalidad, escolaridad, antecedentes y capacitación necesitan cotejo íntegro; no basta cambiar un requisito.

**Actual:** ¿Cuáles son los requisitos para ser Guardia de Seguridad?

Ser mayor de edad; tener salud física y psíquica compatible; haber cursado educación media o equivalente; no tener condenas, acusaciones, sanciones ni incompatibilidades de las señaladas en el art. 46; aprobar la capacitación; comunicarse en castellano y cumplir las obligaciones militares cuando procedan. Los extranjeros deben tener residencia definitiva. Se requiere autorización y acreditar cada requisito en la forma legal; no se exige genéricamente nacionalidad chilena ni ausencia de deudas comerciales. Rigen además las reglas transitorias para autorizaciones anteriores.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 46, 47 y 50; art. tercero transitorio; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), arts. 82, 83 y 91. Revisión: 26-10-2026.

#### 3-2 → `guardia-vigilante-diferencias`

**Original:** ¿Cuáles son las diferencias entre Guardias de Seguridad y Vigilantes Privados?

> Edad: Guardia 18 años; Vigilante 21 años. Situación militar: Guardia al día; Vigilante cumplida. Arma de fuego: Guardia no porta; Vigilante sí porta. Curso: Guardia 90 hrs; Vigilante 120 hrs. Seguro de vida: Guardia 75 UTM; Vigilante 250 UF. Uniforme: Guardia libre; Vigilante azulado. Salud: Guardia física; Vigilante física y mental.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Mezcla requisitos antiguos y simplificaciones; las horas mínimas, seguros, uniformes y certificaciones deben distinguirse según el régimen vigente.

**Actual:** ¿Cuáles son las diferencias entre Guardias de Seguridad y Vigilantes Privados?

Ambos cumplen el art. 46. Guardia: no puede portar armas de fuego; formación mínima de 90 horas pedagógicas, perfeccionamiento o especialización mínimos de 36 horas cada 4 años; certificación por 4 años. Vigilante: requisitos especiales del art. 25 y porte de armas solo en jornada y recinto autorizado, salvo exención; formación mínima de 100 horas y perfeccionamiento mínimo de 40 cada 2 años; certificación por 2 años. Seguro mínimo: guardia 132 UF, o 250 UF en entidades obligadas a vigilancia privada; vigilante 250 UF. Ambos usan uniforme reglamentado: guardia negro con prendas rojas de alta visibilidad; vigilante gris perla azulado. Se aplican las reglas transitorias a autorizaciones anteriores.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 25, 26, 46, 49, 50, 53 y 60; art. tercero transitorio; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), arts. 27, 33, 42, 88, 89, 90 y 107. Revisión: 26-10-2026.

#### 3-3 → `seguridad-autorizacion`

**Original:** ¿Quién autoriza y acredita a las empresas y agentes de seguridad privada?

> La Autoridad Fiscalizadora, es decir, la Prefectura de Carabineros del sector.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No distingue autorización administrativa de fiscalización policial.

**Actual:** ¿Quién autoriza y acredita a las empresas y agentes de seguridad privada?

En el régimen permanente, la Subsecretaría de Prevención del Delito otorga las autorizaciones. Transitoriamente, las nuevas autorizaciones continúan siendo emitidas por las Prefecturas de Carabineros mientras no funcione la plataforma legal. Las autorizaciones anteriores conservan vigencia según el art. tercero transitorio.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 28, 34 y 50; art. tercero transitorio. Revisión: 26-10-2026.

#### 3-4 → `credenciales`

**Original:** ¿Cuáles son los tipos de credenciales?

> Guardias de Seguridad: Color blanco. Vigilantes Privados: Amarillo, verde o azul, según función.

**Clasificación:** Ambigua o carente de fundamento verificable. Los colores por sí solos no describen la habilitación ni las características de los arts. 35 y 91 del reglamento.

**Actual:** ¿Qué acredita la credencial de un guardia o vigilante privado?

Son licencias personales e intransferibles que identifican la habilitación para ejercer. Guardias y vigilantes deben portar su credencial durante sus funciones. No se distinguen solo por colores; rigen las características reglamentarias y el régimen transitorio de autorizaciones anteriores.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 28 y 50; art. tercero transitorio; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), arts. 35 y 91. Revisión: 26-10-2026.

#### 3-5 → `instalacion-informacion`

**Original:** ¿Qué información mínima de la instalación debe tener un guardia?

> Dimensión del área y recinto. Cantidad de personas que trabajan en él. Ejecutivos y trabajadores de la empresa. Teléfonos de emergencia. Patentes de los vehículos que ingresan habitualmente. Ubicación permanente del supervisor.

**Clasificación:** Vigente, pero necesita precisiones. Incluye datos personales y ubicación permanente sin delimitar necesidad ni plan del recinto.

**Actual:** ¿Qué información mínima de la instalación debe tener un guardia?

Conocer accesos, zonas de riesgo, rutas de evacuación, contactos de emergencia y procedimientos de su puesto, según el plan y la directiva aplicables. Acceder solo a los datos necesarios para su función.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 48; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), art. 92. Revisión: 26-10-2026.

#### 3-6 → `guardia-uniforme-equipamiento`

**Original:** ¿Quién autoriza el uniforme y armamento especial de un Guardia?

> La Prefectura de Carabineros del sector.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La expresión armamento especial puede sugerir autorización de armas de fuego para guardias.

**Actual:** ¿Quién regula el uniforme y autoriza los elementos defensivos de un guardia?

El Decreto 209 regula el uniforme; la Subsecretaría de Prevención del Delito puede autorizar modificaciones o exenciones en los casos previstos. Los elementos defensivos requieren su autorización, previo informe fiscalizador. El empleador los proporciona; ningún guardia puede portar armas de fuego ni los elementos prohibidos por el art. 53.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 52 y 53; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), arts. 90 y 93. Revisión: 26-10-2026.

### Detenciones y Procedimientos

#### 4-0 → `privacion-libertad`

**Original:** ¿En qué caso se puede privar de libertad a una persona?

> Orden de Tribunales. Orden de una Autoridad o Policía. Delito Flagrante.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No toda autoridad o policía puede ordenar una detención fuera de los casos legales.

**Actual:** ¿En qué caso se puede privar de libertad a una persona?

Solo en los casos y formas establecidos por la Constitución y las leyes. La regla es una orden de autoridad facultada por ley; en flagrancia se permite la detención para entrega inmediata. Un guardia no tiene facultades policiales generales.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), art. 19 N.º 7; [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), arts. 125, 129 y 130. Revisión: 26-10-2026.

#### 4-1 → `detencion-particulares`

**Original:** ¿En qué caso un particular o guardia está facultado para detener?

> En caso de sorprender a alguien en delito flagrante.

**Clasificación:** Vigente, pero necesita precisiones. Falta obligación de entrega inmediata y límites del particular.

**Actual:** ¿En qué caso un particular o guardia está facultado para detener?

Cualquier persona puede detener a quien sorprenda en delito flagrante y debe entregarlo inmediatamente a la policía, al Ministerio Público o a la autoridad judicial más próxima. No basta una sospecha; no habilita a castigar, interrogar ni ejercer controles policiales.

**Fundamento:** [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), arts. 129 y 130; [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 48 N.º 2. Revisión: 26-10-2026.

#### 4-2 → `entrega-detenido`

**Original:** ¿Cómo se compone una guía de entrega de detenido?

> Antecedentes del detenido. Antecedentes de la detención. Determinación del delito. Estado físico en que se entrega al detenido a Carabineros. Firma de quien lo recibe. Todo en duplicado: uno para Carabineros y otro para el guardia que detuvo y entregó.

**Clasificación:** Ambigua o carente de fundamento verificable. El duplicado y contenido se presentan como una exigencia legal universal sin fuente.

**Actual:** ¿Qué conviene registrar al entregar a una persona detenida por flagrancia?

Como registro operativo, anotar hechos observados, hora y lugar, circunstancias de la detención y entrega, receptor y estado aparente de la persona, según el protocolo. No es una formalidad universal de duplicados del Código Procesal Penal y nunca debe retrasar la entrega inmediata.

**Fundamento:** [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), art. 129. Revisión: 26-10-2026.

#### 4-3 → `hurto-supermercado`

**Original:** En un supermercado, ¿podrá el guardia detener a una persona que consume un alimento o esconde una especie antes de pasar por las cajas?

> No. El delito no se ha consumado hasta cruzar las cajas.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La línea de cajas no es un criterio jurídico absoluto; omite tentativa y hurto-falta frustrado.

**Actual:** En un supermercado, ¿podrá el guardia detener a una persona que consume un alimento o esconde una especie antes de pasar por las cajas?

La línea de cajas no es un criterio legal absoluto. Debe existir un delito flagrante en un grado de ejecución punible; consumir u ocultar una especie no autoriza por sí solo a detener. Hay que evaluar los hechos, el ánimo de apropiación y las reglas aplicables, incluido el hurto-falta frustrado. La entrega a la autoridad debe ser inmediata.

**Fundamento:** [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), arts. 129 y 130; [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 7, 9, 432 y 494 bis. Revisión: 26-10-2026.

### Delitos y tipos

#### 5-0 → `delito-definicion`

**Original:** ¿Qué es delito?

> Es toda acción u omisión voluntaria penada por la ley (dolo, con intención).

**Clasificación:** Vigente, pero necesita precisiones. El paréntesis convierte una definición legal en una explicación incompleta del dolo.

**Actual:** ¿Qué es delito?

Es toda acción u omisión voluntaria penada por la ley.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 1. Revisión: 26-10-2026.

#### 5-1 → `cuasidelito-definicion`

**Original:** ¿Qué es cuasidelito?

> Es toda acción u omisión involuntaria penada por la ley (sin intención, culpa).

**Clasificación:** Desactualizada o jurídicamente incorrecta. Sin intención no equivale a acto involuntario; la culpa solo se sanciona en los casos previstos.

**Actual:** ¿Qué es cuasidelito?

Conducta realizada con culpa, como imprudencia o negligencia, sin dolo, sancionada solo en los casos expresamente previstos por la ley. No significa que la acción sea involuntaria.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 2, 10 N.º 13, 490 y 492. Revisión: 26-10-2026.

#### 5-2 → `delito-etapas`

**Original:** ¿Cuáles son los tipos de delito?

> Delito frustrado, delito consumado y tentativa de delito.

**Clasificación:** Vigente, pero necesita precisiones. Son grados de ejecución, no clases generales de delito.

**Actual:** ¿Cuáles son los grados de ejecución del delito?

Consumado, frustrado y tentativa. Son grados de ejecución: los crímenes y simples delitos admiten estas formas punibles. Las faltas se castigan consumadas, salvo excepciones legales, como el hurto-falta frustrado.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 7, 9 y 494 bis. Revisión: 26-10-2026.

#### 5-3 → `delito-gravedad`

**Original:** ¿Cómo se clasifican los delitos atendida su gravedad?

> Crímenes, simples delitos y faltas.

**Clasificación:** Vigente y correcta. Clasificación legal por gravedad confirmada en el art. 3 CP.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 3. Revisión: 26-10-2026.

#### 5-4 → `robo-hurto-elementos`

**Original:** ¿Cuáles son los elementos comunes del robo y el hurto?

> Apropiación indebida de un bien mueble, sin conocimiento del dueño, y con fin de lucro.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No exige desconocimiento del dueño; apropiación indebida es además otro delito.

**Actual:** ¿Cuáles son los elementos comunes del robo y el hurto?

Apropiación de una cosa mueble ajena, sin la voluntad de su dueño y con ánimo de lucrarse.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 432. Revisión: 26-10-2026.

#### 5-5 → `robo-hurto-diferencia`

**Original:** ¿Cuál es la diferencia entre robo y hurto?

> Robo: Con violencia, intimidación o fuerza en las cosas. Hurto: No hay violencia, intimidación ni fuerza.

**Clasificación:** Vigente, pero necesita precisiones. La fuerza en las cosas debe ser la que la ley tipifica, no cualquier fuerza.

**Actual:** ¿Cuál es la diferencia entre robo y hurto?

Robo: apropiación con violencia o intimidación en las personas, o fuerza en las cosas en los supuestos legales. Hurto: apropiación sin esos elementos.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 432, 436 y 440. Revisión: 26-10-2026.

#### 5-6 → `robo-calificado`

**Original:** ¿Cuál es la diferencia entre robo calificado y robo simple?

> El robo calificado además da muerte, lesiona, arremete o viola a la víctima.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La enumeración es imprecisa y no reproduce los supuestos de robo calificado.

**Actual:** ¿Cuál es la diferencia entre robo calificado y robo simple?

El art. 433 agrava el robo con violencia o intimidación cuando, con motivo u ocasión de él, hay homicidio, violación, las lesiones allí especificadas o retención de víctimas bajo rescate o por más tiempo del necesario. No toda agresión o lesión lo convierte en robo calificado.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 433 y 436. Revisión: 26-10-2026.

#### 5-7 → `hurto-calificado`

**Original:** ¿Cuál es la diferencia entre hurto simple y hurto calificado?

> Hurto calificado: Se efectúa con abuso de confianza (trabajadores). Hurto simple: No hay compromiso laboral ni familiar.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No toda relación laboral o familiar determina hurto calificado.

**Actual:** ¿Cuál es la diferencia entre hurto simple y hurto calificado?

El art. 447 permite aumentar la pena del hurto en casos específicos de abuso de confianza, como ciertos hurtos de dependientes, trabajadores, hospedadores o transportistas. No basta cualquier vínculo laboral o familiar.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 446 y 447. Revisión: 26-10-2026.

#### 5-8 → `hurto-modalidades`

**Original:** ¿Cuál es la diferencia entre hurto de uso, hurto hallazgo y hurto falta?

> Hurto de uso: Usar algo sin autorización y devolverlo. Hurto hallazgo: Encontrar algo y no devolverlo. Hurto falta: Apropiación indebida hasta ½ UTM.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Presenta el hurto de uso como delito autónomo y el hallazgo sin requisitos.

**Actual:** ¿Cuál es la diferencia entre hurto de uso, hurto hallazgo y hurto falta?

El llamado hurto de uso no es un delito autónomo de ese nombre: debe analizarse si concurren los requisitos de apropiación y ánimo de lucro. El hurto de hallazgo comprende no entregar al dueño o a la autoridad una especie al parecer perdida de valor superior a una UTM, cuando consta quién es el dueño, y los supuestos especiales de calamidad del art. 448. El hurto-falta corresponde a cosas cuyo valor no excede de media UTM y también se sanciona frustrado.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 432, 448 y 494 bis. Revisión: 26-10-2026.

#### 5-9 → `estafa`

**Original:** ¿Qué es estafa?

> Apropiarse de un bien mueble o inmueble mediante engaño.

**Clasificación:** Vigente, pero necesita precisiones. No basta cualquier engaño ni se exige siempre apropiación material.

**Actual:** ¿Qué es estafa?

Obtener provecho patrimonial para sí o un tercero mediante un engaño que provoca error y lleva a una disposición patrimonial perjudicial para la víctima o un tercero.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 467. Revisión: 26-10-2026.

#### 5-10 → `lesiones`

**Original:** ¿Qué es delito de lesiones?

> Daño a la integridad física o psíquica de una persona.

**Clasificación:** Vigente, pero necesita precisiones. La descripción general no sustituye los tipos y grados legales.

**Actual:** ¿Qué es delito de lesiones?

Daño a la salud o integridad corporal de otra persona, en las modalidades y condiciones sancionadas por la ley. La gravedad y las circunstancias determinan el tipo y la pena.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 395 a 399. Revisión: 26-10-2026.

#### 5-11 → `homicidio`

**Original:** ¿Qué es delito de homicidio?

> Muerte ilegal de una persona causada por otra.

**Clasificación:** Vigente, pero necesita precisiones. Muerte ilegal es circular; distinguir tipos y eximentes.

**Actual:** ¿Qué es delito de homicidio?

Matar a otra persona en las condiciones sancionadas por la ley, sin perjuicio de los tipos especiales y las eximentes que correspondan.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 10, 390 y 391. Revisión: 26-10-2026.

#### 5-12 → `secuestro`

**Original:** ¿Qué es secuestro?

> Es el traslado o retención de una o más personas sin su consentimiento.

**Clasificación:** Desactualizada o jurídicamente incorrecta. El traslado no es requisito ni siempre suficiente.

**Actual:** ¿Qué es secuestro?

Encerrar o detener a otra persona sin derecho, privándola de libertad. No requiere trasladarla.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 141. Revisión: 26-10-2026.

#### 5-13 → `escalamiento`

**Original:** ¿Qué es escalamiento?

> Es ingresar por una vía no destinada al efecto.

**Clasificación:** Vigente, pero necesita precisiones. La definición es incompleta para el tipo penal.

**Actual:** ¿Qué es escalamiento?

En el robo con fuerza del art. 440 N.º 1, entrar por una vía no destinada al efecto, por forado, rompimiento de pared o techos, o fractura de puertas o ventanas.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 440 N.º 1. Revisión: 26-10-2026.

#### 5-14 → `calumnia`

**Original:** ¿Qué es calumnia?

> Imputar a una persona un delito que es falso.

**Clasificación:** Vigente, pero necesita precisiones. Faltan delito determinado y actualmente perseguible de oficio.

**Actual:** ¿Qué es calumnia?

Imputación de un delito determinado, pero falso y que pueda actualmente perseguirse de oficio.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 412. Revisión: 26-10-2026.

#### 5-15 → `injuria`

**Original:** ¿Qué es injuria?

> Ofensa que atenta contra la dignidad, decoro u honor y que causa daño.

**Clasificación:** Vigente, pero necesita precisiones. No exige probar un daño adicional en los términos formulados.

**Actual:** ¿Qué es injuria?

Toda expresión proferida o acción ejecutada en deshonra, descrédito o menosprecio de otra persona.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 416. Revisión: 26-10-2026.

### Legítima Defensa

#### 6-0 → `defensa-definicion`

**Original:** ¿Qué es legítima defensa?

> Es la reacción necesaria de una persona ante una agresión ilegítima.

**Clasificación:** Vigente, pero necesita precisiones. Debe vincularse a bienes o persona y a requisitos legales de la eximente.

**Actual:** ¿Qué es legítima defensa?

Defensa de la persona o sus derechos frente a una agresión ilegítima, cumpliendo los requisitos legales de la eximente.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 10 N.os 4, 5 y 6. Revisión: 26-10-2026.

#### 6-1 → `defensa-requisitos`

**Original:** ¿Qué elementos deben existir para aplicar la legítima defensa?

> Agresión ilegítima. Actual (real, en curso o inminente). No provocada por el defensor. No exista policía disponible. El medio empleado (arma) debe ser racional o proporcional.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La ausencia de policía no es requisito; racionalidad no significa igualdad mecánica de armas.

**Actual:** ¿Qué elementos deben existir para aplicar la legítima defensa?

En defensa propia: agresión ilegítima, necesidad racional del medio empleado para impedirla o repelerla y falta de provocación suficiente de quien se defiende. No se exige ausencia de policía ni igualdad mecánica de armas; no autoriza una represalia posterior.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 10 N.º 4. Revisión: 26-10-2026.

#### 6-2 → `defensa-privilegiada`

**Original:** ¿Qué es legítima defensa privilegiada o empresarial?

> Es la defensa al interior de la propiedad o empresa durante la noche, o cuando se rechaza un escalamiento.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No existe permiso genérico empresarial ni basta actuar de noche.

**Actual:** ¿Qué es la legítima defensa privilegiada?

Es una presunción legal de los requisitos de defensa en los casos del art. 10 N.º 6: rechazo de escalamiento en casa, departamento u oficina habitados o sus dependencias; de noche, también en local comercial o industrial; o impedir ciertos delitos expresamente enumerados. No es una autorización general para defender empresas ni la presunción especial aplicable a funcionarios policiales.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 10 N.º 6. Revisión: 26-10-2026.

#### 6-3 → `defensa-clasificacion`

**Original:** ¿Cómo se clasifica la legítima defensa?

> Defensa propia, defensa de parientes y defensa de extraños.

**Clasificación:** Vigente y correcta. Clasificación legal básica adecuada; cada modalidad tiene requisitos particulares.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 10 N.os 4, 5 y 6. Revisión: 26-10-2026.

### Sitio del Suceso y Evacuación

#### 7-0 → `sitio-definicion`

**Original:** ¿Qué es el sitio del suceso?

> Es el lugar donde se ha cometido un delito o ha ocurrido una emergencia.

**Clasificación:** Vigente, pero necesita precisiones. Debe distinguir sitio del suceso investigativo de zona de emergencia.

**Actual:** ¿Qué es el sitio del suceso?

Es el lugar relacionado con un hecho investigado donde pueden existir evidencias. Una zona de emergencia puede coincidir con él, pero no toda emergencia constituye delito.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 7-1 → `sitio-proteccion`

**Original:** ¿Cómo se clasifica el sitio del suceso y qué se debe hacer?

> Sitio abierto: Aislar. Sitio cerrado: Clausurar. Sitio mixto: Aislar y clausurar.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Clausurar es una potestad que no se entrega genéricamente al guardia y puede bloquear evacuación.

**Actual:** ¿Cómo se clasifica el sitio del suceso y qué se debe hacer?

Resguardar el lugar, restringir accesos según el protocolo y avisar a la policía; no alterar evidencias ni impedir auxilio o evacuación. El guardia no decreta una clausura.

**Fundamento:** [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), art. 83 letra c); [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 48 N.º 2. Revisión: 26-10-2026.

#### 7-2 → `evacuacion`

**Original:** ¿Qué es una evacuación?

> Es el traslado de personas en forma ordenada hacia un mismo lugar denominado zona de seguridad.

**Clasificación:** Vigente y correcta. Descripción técnica introductoria adecuada.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Rondas y Retrato Hablado

#### 8-0 → `retrato-definicion`

**Original:** ¿Qué es retrato hablado?

> Es la descripción que se hace de una persona efectuada por otros, ya sea mediante fijación descriptiva o cualquier forma útil.

**Clasificación:** Vigente y correcta. Descripción de personas por testigos; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 8-1 → `retrato-caracteristicas`

**Original:** ¿Cómo se dividen las características del retrato hablado?

> Generales: Sexo, raza, edad, estatura, peso, contextura. Específicas: Cara, pelo, ojos, boca, nariz, peculiaridades. Variables: Vestimenta, especies y formas.

**Clasificación:** Vigente, pero necesita precisiones. Describir rasgos observables y evitar inferencias de raza como certeza.

**Actual:** ¿Cómo se dividen las características del retrato hablado?

Describir rasgos observables: estatura y edad aproximadas, contextura, rostro, cabello, ojos, señas particulares, vestimenta y objetos. Distinguir observaciones de estimaciones.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 8-2 → `rondas-movilidad`

**Original:** ¿Cómo se caracterizan las rondas?

> Por su movilidad.

**Clasificación:** Ambigua o carente de fundamento verificable. Movilidad no es una caracterización suficiente.

**Actual:** ¿Cómo se caracterizan las rondas?

Son recorridos de vigilancia para observar riesgos y anomalías, verificar puntos de control e informar según el plan de seguridad.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 8-3 → `rondas-clasificacion`

**Original:** ¿Cómo se clasifican las rondas?

> Ronda móvil, ronda fija y ronda mixta.

**Clasificación:** Vigente, pero necesita precisiones. Es una clasificación operacional, no legal.

**Actual:** ¿Cómo se clasifican las rondas?

Como clasificación operativa, pueden organizarse con recorridos fijos, variables o mixtos, según el plan del recinto; no es un catálogo legal cerrado.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 8-4 → `rondas-fijas-moviles`

**Original:** ¿Cuál es la diferencia entre ronda fija y ronda móvil?

> La ronda fija tiene hora y trayecto fijos. La ronda móvil se realiza a cualquier hora y en cualquier trayecto.

**Clasificación:** Vigente, pero necesita precisiones. Los recorridos deben ajustarse al plan y no implicar desplazamientos arbitrarios.

**Actual:** ¿Cuál es la diferencia entre ronda fija y ronda móvil?

En la fija se preestablecen horario y trayecto. En la variable se modifican según el plan y los riesgos; no implica recorrer cualquier lugar sin autorización.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Responsabilidad Penal

#### 9-0 → `eximentes`

**Original:** Indique tres eximentes de responsabilidad.

> Loco o demente, menor de 14 años y legítima defensa.

**Clasificación:** Vigente, pero necesita precisiones. Usa lenguaje anticuado y omite requisitos de la eximente por alteración mental.

**Actual:** Indique tres eximentes de responsabilidad.

Ejemplos: privación total de razón en los supuestos del art. 10 N.º 1; minoría de 14 años; y legítima defensa cuando concurren sus requisitos. Los adolescentes de 14 a menos de 18 años tienen el régimen especial de la Ley 20.084.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 10 N.os 1, 2, 4, 5 y 6; [Ley 20.084 de Responsabilidad Penal Adolescente](https://www.bcn.cl/leychile/navegar?idNorma=244803&idVersion=2026-10-26), art. 3. Revisión: 26-10-2026.

#### 9-1 → `agravantes`

**Original:** Indique tres agravantes.

> Tener antecedentes penales, actuar con alevosía y ensañamiento, y hacerlo por recompensa.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Antecedentes penales no es agravante genérica.

**Actual:** Indique tres agravantes.

Ejemplos: alevosía en delitos contra las personas; precio, recompensa o promesa; y aumentar deliberadamente el mal causando otros males innecesarios para ejecutar el delito. Tener antecedentes no es por sí solo una agravante: la reincidencia tiene requisitos legales.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 12 N.os 1, 2, 4, 15 y 16. Revisión: 26-10-2026.

#### 9-2 → `atenuantes`

**Original:** Indique tres atenuantes.

> No tener antecedentes penales, buena conducta anterior e impedir ulteriores consecuencias.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Ausencia de antecedentes y buena conducta se cuentan dos veces como si fueran distintas atenuantes.

**Actual:** Indique tres atenuantes.

Ejemplos: irreprochable conducta anterior; procurar con celo reparar el mal o impedir sus ulteriores consecuencias perniciosas; y colaborar sustancialmente al esclarecimiento de los hechos, sin constituir cooperación eficaz conforme a la ley.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 11 N.os 6, 7 y 9. Revisión: 26-10-2026.

#### 9-3 → `participacion-delito`

**Original:** ¿Cuáles son las personas responsables de delito?

> Autor, cómplice y encubridor.

**Clasificación:** Vigente y correcta. Categorías de participación del art. 14 CP; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 14 a 17. Revisión: 26-10-2026.

#### 9-4 → `menores-catorce`

**Original:** ¿Qué medidas se aplican actualmente a delitos cometidos por menores de 14 años?

> Por no tener discernimiento, se aplican medidas preventivas como tratamientos psicológicos o rehabilitación en Centros de Asistencia Juvenil.

**Clasificación:** Desactualizada o jurídicamente incorrecta. El criterio actual no es discernimiento ni existe sanción penal automática en centros.

**Actual:** ¿Qué medidas se aplican actualmente a delitos cometidos por menores de 14 años?

Están exentos de responsabilidad penal. Pueden adoptarse medidas de protección de derechos cuando procedan, no penas ni internación penal automática por falta de discernimiento. La Ley 20.084 regula la responsabilidad adolescente desde los 14 y antes de los 18 años al inicio de ejecución, con sus reglas especiales.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 10 N.º 2; [Ley 20.084 de Responsabilidad Penal Adolescente](https://www.bcn.cl/leychile/navegar?idNorma=244803&idVersion=2026-10-26), art. 3; [Ley 19.968, tribunales de familia](https://www.bcn.cl/leychile/navegar?idNorma=229557&idVersion=2026-10-26), art. 8 N.º 7 y arts. 68 y siguientes. Revisión: 26-10-2026.

### Instalaciones y Barreras

#### 10-0 → `instalacion-partes`

**Original:** ¿En cuántas partes se divide una instalación?

> En dos: área y recinto.

**Clasificación:** Ambigua o carente de fundamento verificable. No es una división universal impuesta por ley.

**Actual:** ¿En cuántas partes se divide una instalación?

Como convención de este temario, se distinguen área y recinto. No es una división legal universal de toda instalación.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 10-1 → `instalacion-area-recinto`

**Original:** Describa cada una.

> Recinto: Lugar debidamente demarcado y cerrado. Área: Zona que está fuera del recinto y dentro de la instalación; contiene al recinto.

**Clasificación:** Ambigua o carente de fundamento verificable. Convención didáctica local; no toda instalación presenta esa disposición física.

**Actual:** Describa cada una.

En esta convención, recinto es el espacio demarcado o cerrado y área es la zona de la instalación que lo rodea. Los límites reales se determinan en el plan de seguridad.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 10-2 → `instalacion-proteccion`

**Original:** ¿Con qué se protege una instalación?

> Con las barreras de seguridad.

**Clasificación:** Vigente y correcta. Respuesta técnica general adecuada.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 10-3 → `barreras-tipos`

**Original:** ¿Cuántos tipos de barrera conoce?

> Humanas: Guardias, Vigilantes, Nocheros, Porteros, Rondines. Artificiales: Murallas, alambradas, ventanas, vallas, resaltos. Naturales: Riachuelos, cerros, bosques, canales. Animales: Perros, gansos, queltehues. Electrónicas y de Energía: Iluminación, portones eléctricos, barreras vehiculares y peatonales.

**Clasificación:** Vigente, pero necesita precisiones. No es un catálogo cerrado ni toda medida constituye una barrera; uso de animales requiere condiciones.

**Actual:** ¿Cuántos tipos de barrera conoce?

Ejemplos de medidas de protección: personal de seguridad; barreras físicas artificiales o naturales; detección y alarmas; control de accesos e iluminación. Su combinación depende de los riesgos y del plan; no es una lista legal cerrada.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 10-4 → `guardia-proteccion`

**Original:** ¿Qué debe proteger el Guardia de Seguridad en una instalación?

> Personas y bienes (vidas y bienes). Siendo la más importante la vida del guardia mismo.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La vida del guardia no establece una jerarquía legal sobre otras vidas.

**Actual:** ¿Qué debe proteger el Guardia de Seguridad en una instalación?

Proteger a las personas y los bienes, priorizando la vida e integridad de todas las personas y actuando dentro de sus atribuciones y condiciones de seguridad.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 1 y 4. Revisión: 26-10-2026.

### Artefactos Explosivos

#### 11-0 → `explosivos-tipos`

**Original:** ¿Cuántos tipos de artefactos explosivos existen en cuanto a forma, momento de explosar y resultado?

> En cuanto a forma (3): Auto-bomba, carta-bomba, paquete-bomba. En cuanto al momento de explosar (4): De tiempo, control remoto, de presión, de alivio de presión. En cuanto a resultado (3): Incendiarias, demoledoras, de ruido.

**Clasificación:** Ambigua o carente de fundamento verificable. Los números no constituyen una clasificación exhaustiva universal de artefactos.

**Actual:** ¿Cuántos tipos de artefactos explosivos existen en cuanto a forma, momento de explosar y resultado?

Son ejemplos, no un catálogo exhaustivo: vehículos, cartas o paquetes sospechosos. El guardia no debe intentar identificar, manipular ni desactivar sus mecanismos.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 11-1 → `explosivos-procedimiento`

**Original:** ¿Cuál es el procedimiento ante artefactos explosivos?

> Fijar el lugar, aislarlo y demarcarlo. No mover nada. No tocar nada. Llamar a Carabineros y seguir sus instrucciones. Evacuar la zona. Cortar los servicios de emergencia (gas, electricidad).

**Clasificación:** Desactualizada o jurídicamente incorrecta. Ordena cortar servicios sin condición de seguridad y puede inducir manipulación peligrosa.

**Actual:** ¿Cuál es el procedimiento ante artefactos explosivos?

No tocar ni mover el objeto. Alejarse, impedir el acceso desde un lugar seguro y avisar a Carabineros. Evacuar según el plan y seguir instrucciones especializadas; no manipular instalaciones próximas al objeto.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Documentación Operativa

#### 12-0 → `directiva-definicion`

**Original:** ¿Qué es una Directiva de Funcionamiento?

> Documento oficial que tiene por objeto señalar el funcionamiento íntegro de los Guardias de Seguridad.

**Clasificación:** Vigente, pero necesita precisiones. Definición demasiado genérica; debe cotejarse alcance y contenido del nuevo reglamento.

**Actual:** ¿Qué es una Directiva de Funcionamiento?

Instrumento que especifica los servicios de los guardias, dónde se prestan, quiénes los realizan y sus medidas de seguridad. Debe mantenerse una copia en la instalación para la fiscalización.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 51; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), art. 92. Revisión: 26-10-2026.

#### 12-1 → `directiva-contenido`

**Original:** ¿Quiénes confeccionan la Directiva y cómo se compone?

> La confeccionan todas las empresas que cuentan con Guardias de Seguridad. La revisa Carabineros (Prefectura correspondiente), quien la aprueba, modifica o rechaza; una vez corregida, la firma el Jefe de la Oficina OS-10. Se compone de: Antecedentes de la Empresa, Misión, Turnos, Uniformes, Elementos de apoyo a la función del guardia, Seguro de vida, Contrato de trabajo de los Guardias.

**Clasificación:** Desactualizada o jurídicamente incorrecta. La autoridad, el contenido y el procedimiento difieren del régimen permanente del art. 92 del Decreto 209.

**Actual:** ¿Quién presenta la directiva y qué debe contener?

La presenta la persona natural o jurídica para la cual trabajan los guardias. Incluye lugar, personal y elementos de protección, análisis del entorno, medidas y responsable de supervisión, y comunicaciones con la autoridad. En el régimen general se presenta ante la Subsecretaría con al menos 15 días hábiles de anticipación al inicio; dura 3 años, salvo servicios temporales, cuya vigencia corresponde a la actividad.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 51; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), art. 92. Revisión: 26-10-2026.

#### 12-2 → `estudio-seguridad`

**Original:** ¿Qué es un Estudio de Seguridad?

> Documento oficial que señala el funcionamiento íntegro de los Vigilantes Privados, e incluye además las vulnerabilidades y debilidades de la empresa y las conclusiones para abordar soluciones.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No se limita al funcionamiento de vigilantes.

**Actual:** ¿Qué es un Estudio de Seguridad?

Instrumento de la entidad obligada que identifica riesgos y vulnerabilidades y propone medidas para prevenirlos y neutralizarlos. No se limita a describir vigilantes privados; incluye las medidas y antecedentes exigidos según la entidad.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 13 a 17; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), art. 15. Revisión: 26-10-2026.

#### 12-3 → `documentos-aprobacion`

**Original:** ¿Quién aprueba, rechaza o modifica las Directivas y el Estudio de Seguridad?

> La Autoridad Fiscalizadora (Prefectura de Carabineros correspondiente).

**Clasificación:** Desactualizada o jurídicamente incorrecta. Confunde competencias y tratamiento de dos instrumentos distintos.

**Actual:** ¿Quién aprueba, rechaza o modifica las Directivas y el Estudio de Seguridad?

En el régimen de la Ley 21.659, la Subsecretaría de Prevención del Delito resuelve, previo informe técnico fiscalizador. Las directivas y estudios tienen procedimientos distintos. Para entidades que siguen en transición se conservan las reglas anteriores solo en el alcance del art. segundo transitorio.

**Fundamento:** [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), arts. 15 y 51; art. segundo transitorio; [Decreto 209, Reglamento de Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1213672&idVersion=2026-10-26), arts. 16 y 92. Revisión: 26-10-2026.

### Armas y Control

#### 13-0 → `armas-fiscalizacion`

**Original:** ¿Quién fiscaliza la Ley de Control de Armas (N.º 17.798)?

> Carabineros de Chile, a través de las Prefecturas.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Omite DGMN y otras autoridades fiscalizadoras.

**Actual:** ¿Quién fiscaliza la Ley de Control de Armas (N.º 17.798)?

La Dirección General de Movilización Nacional, dependiente del Ministerio de Defensa, tiene la supervigilancia y control. Actúa con autoridades militares y de Carabineros y los organismos técnicos previstos en la ley; no se limita a prefecturas policiales.

**Fundamento:** [Ley 17.798, texto refundido por Decreto 400](https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26), arts. 1 y 4. Revisión: 26-10-2026.

#### 13-1 → `armas-porte`

**Original:** ¿Cuál es el delito de porte ilegal de armas?

> Es portar un arma en la vía pública sin autorización.

**Clasificación:** Vigente, pero necesita precisiones. El tipo no queda limitado a la vía pública y depende del arma y autorización.

**Actual:** ¿Cuándo es ilícito el porte de armas?

Portar armas sin autorización puede configurar los delitos de los arts. 9 o 14, según el arma y el caso. No todo porte irregular es delito: el art. 11 contempla una infracción administrativa para determinados portadores o trasladadores con permiso de posesión o tenencia, fuera de los lugares autorizados y sin el permiso correspondiente.

**Fundamento:** [Ley 17.798, texto refundido por Decreto 400](https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26), arts. 6, 9, 11 y 14. Revisión: 26-10-2026.

#### 13-2 → `armas-tenencia`

**Original:** ¿Cuál es el delito de tenencia ilegal de armas?

> Es tener un arma no inscrita.

**Clasificación:** Vigente, pero necesita precisiones. No abarca armas prohibidas ni otras hipótesis legales.

**Actual:** ¿Cuál es el delito de tenencia ilegal de armas?

Poseer o tener armas sujetas a control sin las autorizaciones o inscripción exigidas, o armas prohibidas, según los tipos legales. No se reduce a tener cualquier arma no inscrita.

**Fundamento:** [Ley 17.798, texto refundido por Decreto 400](https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26), arts. 2 a 5, 9 y 13. Revisión: 26-10-2026.

#### 13-3 → `arma-definicion`

**Original:** ¿Qué se entiende por arma?

> Toda máquina, instrumento, utensilio, objeto o parte del cuerpo tomada con la intención de matar, herir o golpear.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Mezcla uso coloquial con definición penal e incluye partes del cuerpo como regla legal.

**Actual:** ¿Qué entiende por arma el art. 132 del Código Penal?

En el contexto del art. 132 del Código Penal: máquina, instrumento, utensilio u objeto cortante, punzante o contundente tomado para matar, herir o golpear, aunque no se use. No incluye genéricamente partes del cuerpo ni sustituye la clasificación de la Ley de Control de Armas.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), art. 132; [Ley 17.798, texto refundido por Decreto 400](https://www.bcn.cl/leychile/navegar?idNorma=13031&idVersion=2026-10-26), arts. 2 y 3. Revisión: 26-10-2026.

### Fuego e Incendios

#### 14-0 → `fuego-triangulo`

**Original:** ¿Cuál es el triángulo que provoca el fuego?

> Temperatura, oxígeno y combustible.

**Clasificación:** Vigente y correcta. Triángulo del fuego: calor, comburente y combustible; respuesta introductoria adecuada.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 14-1 → `incendio-prevencion`

**Original:** ¿Cómo se minimiza el riesgo de un incendio?

> Con el control periódico de extintores en lugares dispuestos, grifos en buen estado y la revisión de elementos que podrían ser foco de fuego.

**Clasificación:** Vigente y correcta. Medidas preventivas generales correctas; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 14-2 → `extintor-manometro`

**Original:** ¿Cuál es el estado normal de la aguja de los extintores?

> Debe indicar el color verde (NORMAL).

**Clasificación:** Vigente, pero necesita precisiones. No todos los extintores tienen manómetro; el verde no prueba por sí solo el estado completo.

**Actual:** ¿Cuál es el estado normal de la aguja de los extintores?

En extintores con manómetro, la aguja debe estar en la zona operativa indicada por el fabricante, generalmente verde. Revisar además sello, daños y mantención; los de CO₂ normalmente no usan manómetro.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 14-3 → `incendio-extincion`

**Original:** ¿Cuáles son los métodos de extinción de incendio?

> Sofocación, aislamiento, enfriamiento, dispersión e inhibición en cadena.

**Clasificación:** Vigente, pero necesita precisiones. Aislamiento/dispersión necesitan contexto; presentar métodos vinculados a factores del fuego.

**Actual:** ¿Cuáles son los métodos de extinción de incendio?

Enfriar para reducir el calor, sofocar para limitar el oxígeno, retirar o aislar el combustible e inhibir la reacción en cadena. Elegir el agente adecuado al fuego y actuar solo con capacitación y una vía segura de salida.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Asaltos y Riesgos

#### 15-0 → `asalto-factores`

**Original:** ¿Qué factores debe enfrentar un guardia ante un asalto?

> Factor sorpresa, cantidad de delincuentes y armamento.

**Clasificación:** Vigente y correcta. Factores de riesgo relevantes sin pretensión de enumeración exhaustiva.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 15-1 → `danos-laborales`

**Original:** ¿Cómo se consideran los daños físicos y psíquicos sufridos por un guardia en cumplimiento de sus funciones?

> Como actos del servicio, y pueden derivar en enfermedades profesionales.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Acto del servicio no es la calificación general del seguro laboral.

**Actual:** ¿Cómo se consideran los daños físicos y psíquicos sufridos por un guardia en cumplimiento de sus funciones?

Las lesiones a causa o con ocasión del trabajo que produzcan incapacidad o muerte pueden constituir accidente del trabajo. La enfermedad profesional debe ser causada directamente por el trabajo y producir incapacidad o muerte. No se califican automáticamente como enfermedades profesionales por ocurrir durante un asalto.

**Fundamento:** [Ley 16.744 sobre accidentes del trabajo y enfermedades profesionales](https://www.bcn.cl/leychile/navegar?idNorma=28650&idVersion=2026-10-26), arts. 5 y 7. Revisión: 26-10-2026.

### Comunicaciones y Alarmas

#### 16-0 → `radios-autorizacion`

**Original:** ¿Quién autoriza el uso de las radiocomunicaciones?

> La Subsecretaría de Telecomunicaciones (SUBTEL).

**Clasificación:** Vigente, pero necesita precisiones. No toda comunicación requiere idéntica autorización; hay bandas y equipos con regímenes específicos.

**Actual:** ¿Quién autoriza el uso de las radiocomunicaciones?

SUBTEL regula y autoriza los servicios de radiocomunicaciones según su régimen. No todos los equipos o bandas tienen la misma exigencia; deben respetarse las condiciones técnicas aplicables.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 16-1 → `radios-bandas`

**Original:** ¿Cómo se clasifican las radios de comunicaciones?

> HF, UHF y VHF.

**Clasificación:** Vigente, pero necesita precisiones. Son bandas de frecuencia, no todas las clases de radio.

**Actual:** ¿Cómo se clasifican las radios de comunicaciones?

HF, VHF y UHF son bandas de frecuencia usadas en radiocomunicaciones, no una clasificación exhaustiva de todos los equipos.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 16-2 → `radio-antena`

**Original:** ¿Cuál es la finalidad de una antena en un transceptor portátil?

> Propagar la señal de radiofrecuencia.

**Clasificación:** Vigente, pero necesita precisiones. La antena permite recibir además de transmitir.

**Actual:** ¿Cuál es la finalidad de una antena en un transceptor portátil?

Permite transmitir y recibir ondas de radiofrecuencia.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 16-3 → `alarma-contacto`

**Original:** ¿Qué sistema de alarma utilizan las puertas y ventanas?

> El contacto magnético.

**Clasificación:** Vigente, pero necesita precisiones. Contacto magnético es un sensor común, no el único sistema posible.

**Actual:** ¿Qué sistema de alarma utilizan las puertas y ventanas?

El contacto magnético es un sensor habitual de apertura de puertas y ventanas; puede complementarse con otros sensores según el diseño del sistema.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Tribunales y Justicia

#### 17-0 → `tribunales-competencias`

**Original:** ¿Cuál es la competencia de los tribunales?

> Juzgado del Crimen: Delitos de las personas; condena hasta cárcel. Juzgado Civil: Contratos privados, letras, pagarés y similares. Juzgado de Letras: Funciona en provincia, tanto en lo penal como en lo civil. Juzgado del Trabajo: Regula derechos de trabajadores y su relación con empleadores. Juzgado de Menores: Visitas, alimentos, tuición. Juzgado Militar: Ilícitos de militares activos (Ejército, Armada, FACh, Carabineros) y de civiles contra estos en servicio. Juzgado de Familia: Derechos de las parejas una vez obtenido el divorcio.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Usa órganos y atribuciones de sistemas antiguos y confunde justicia militar, familia y penal.

**Actual:** ¿Cuál es la competencia de los tribunales?

En materia penal actúan jueces de garantía y tribunales de juicio oral; el Ministerio Público dirige la investigación. Los tribunales civiles, laborales y de familia conocen sus materias legales; familia incluye alimentos, cuidado personal, relación directa y regular y protección de derechos, no solo divorcio. Hay juzgados de competencia común. Los civiles y menores no están sujetos a tribunales militares.

**Fundamento:** [Código Orgánico de Tribunales](https://www.bcn.cl/leychile/navegar?idNorma=25563&idVersion=2026-10-26), arts. 14, 18 y 45; [Código del Trabajo](https://www.bcn.cl/leychile/navegar?idNorma=207436&idVersion=2026-10-26), art. 420; [Ley 19.968, tribunales de familia](https://www.bcn.cl/leychile/navegar?idNorma=229557&idVersion=2026-10-26), art. 8; [Ley 20.477, competencia de tribunales militares](https://www.bcn.cl/leychile/navegar?idNorma=1021613&idVersion=2026-10-26), art. 1; [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), art. 83. Revisión: 26-10-2026.

#### 17-1 → `libertad-provisional`

**Original:** ¿Qué es la libertad provisional?

> Libertad que se otorga a un detenido que está en proceso, pero aún no ha sido condenado.

**Clasificación:** Desactualizada o jurídicamente incorrecta. Libertad provisional es terminología del sistema procesal anterior, no regla general actual.

**Actual:** ¿Cómo se entiende hoy la antigua expresión libertad provisional?

Es una expresión del sistema procesal penal antiguo. En el proceso actual se distingue la libertad del imputado de las medidas cautelares, incluida la prisión preventiva, que requiere los presupuestos legales y resolución judicial. Estar imputado no implica quedar preso.

**Fundamento:** [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), arts. 4, 122, 139 y 140. Revisión: 26-10-2026.

#### 17-2 → `libertad-condicional`

**Original:** ¿Qué es la libertad condicional?

> Es la que se otorga a un condenado, según los antecedentes que ha resuelto el Juez.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No es libertad otorgada genéricamente por el juez por antecedentes.

**Actual:** ¿Qué es la libertad condicional?

Es un modo de cumplir en libertad una pena privativa de libertad, sujeto a los requisitos y controles legales. No extingue ni modifica la duración de la pena. La regla de postulación se resuelve por la Comisión de Libertad Condicional; el presidio perpetuo calificado tiene intervención especial de la Corte Suprema.

**Fundamento:** [Decreto Ley 321 de 1925, libertad condicional](https://www.bcn.cl/leychile/navegar?idNorma=5979&idVersion=2026-10-26), arts. 1, 2 y 4; [Código Orgánico de Tribunales](https://www.bcn.cl/leychile/navegar?idNorma=25563&idVersion=2026-10-26), art. 96 N.º 7. Revisión: 26-10-2026.

#### 17-3 → `penas-cuasidelitos`

**Original:** ¿Cuál es la diferencia de las condenas entre un delito y un cuasidelito?

> Las del cuasidelito siempre serán menores, aunque siempre habrá una condena, por pequeña que sea.

**Clasificación:** Desactualizada o jurídicamente incorrecta. No siempre existe condena ni la afirmación universal sobre penas es correcta.

**Actual:** ¿Cuál es la diferencia de las condenas entre un delito y un cuasidelito?

No hay condena automática: deben probarse los requisitos de la infracción. La pena depende del tipo penal y las circunstancias; la culpa solo se sanciona en los casos expresamente previstos por la ley.

**Fundamento:** [Código Penal](https://www.bcn.cl/leychile/navegar?idNorma=1984&idVersion=2026-10-26), arts. 2, 4, 10 N.º 13, 490 y 492; [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), art. 4. Revisión: 26-10-2026.

### Conducta del Guardia

#### 18-0 → `guardia-trato`

**Original:** ¿Cuándo y con quién debe observar actitudes correctas el guardia?

> Siempre, con todas las personas que se encuentren en la instalación.

**Clasificación:** Vigente y correcta. Regla de trato respetuoso apropiada; conservar.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

#### 18-1 → `guardia-revisiones`

**Original:** ¿Qué revisiones periódicas debe hacer un guardia?

> Revisión de conexiones del tendido eléctrico, extintores y sistemas de alarma (conectados o desconectados, según corresponda).

**Clasificación:** Vigente, pero necesita precisiones. Revisar no debe autorizar intervenciones eléctricas de personal no calificado.

**Actual:** ¿Qué revisiones periódicas debe hacer un guardia?

Comprobar visualmente, según el protocolo, el estado de extintores y alarmas e informar anomalías. No intervenir conexiones eléctricas ni equipos para los que no esté capacitado o autorizado.

**Fundamento:** revisión conceptual u operativa; no se atribuye a una disposición jurídica específica.

### Carabineros

#### 19-0 → `carabineros-mision`

**Original:** ¿Cuál es la misión de Carabineros?

> Garantizar el orden y la seguridad pública y dar eficacia al derecho.

**Clasificación:** Vigente y correcta. Misión constitucional básica confirmada en el art. 101 vigente.

**Resultado:** pregunta y respuesta conservadas.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), art. 101. Revisión: 26-10-2026.

#### 19-1 → `carabineros-roles`

**Original:** ¿Cuáles son los roles de Carabineros?

> Preventivo, educativo, de control, de seguridad pública y de soberanía.

**Clasificación:** Ambigua o carente de fundamento verificable. Lista institucional incompleta sin fuente y no equivalente a atribuciones legales.

**Actual:** ¿Qué funciones de Carabineros son relevantes para la seguridad privada?

Garantizar el orden y la seguridad pública, dar eficacia al derecho, cumplir las actuaciones policiales legales y fiscalizar la seguridad privada dentro de su competencia. Las etiquetas institucionales de roles no amplían las facultades de un guardia.

**Fundamento:** [Constitución Política de la República](https://www.bcn.cl/leychile/navegar?idNorma=242302&idVersion=2026-10-26), art. 101; [Código Procesal Penal](https://www.bcn.cl/leychile/navegar?idNorma=176595&idVersion=2026-10-26), art. 83; [Ley 21.659 sobre Seguridad Privada](https://www.bcn.cl/leychile/navegar?idNorma=1202067&idVersion=2026-10-26), art. 86. Revisión: 26-10-2026.
