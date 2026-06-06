import { ProjectType, CyclePhase, ProjectElement, RealProjectExample, Reflection } from './types';

export const CLASSIFICATION_DATA: ProjectType[] = [
  {
    id: 'naturaleza',
    name: 'Por Naturaleza del Problema',
    concept: 'Se define según el tipo de necesidad o situación a la cual se busca dar respuesta o resolución directo en el entorno humano.',
    characteristics: [
      'Proyectos de Acción Social: Enfocados en resolver privaciones críticas en comunidades, bienestar común.',
      'Proyectos de Investigación: Orientados a la generación de nuevo conocimiento científico o conceptual.',
      'Proyectos Tecnológicos: Dirigidos al diseño, desarrollo e implementación de bienes, sistemas o servicios basados en la ingeniería aplicando la ciencia aplicada.'
    ],
    difference: 'Se diferencia por el núcleo de su entregable: el social busca un cambio humano/cultural, el de investigación produce teoría empírica y el tecnológico produce una solución de diseño técnico o software funcional.',
    relationToInformatica: 'Crucial en Informática: El desarrollo de software a la medida, automatizaciones, redes o sistemas ERP surgen como proyectos tecnológicos que buscan solucionar fallas de procesamiento de datos o infraestructura.',
    iconName: 'Cpu'
  },
  {
    id: 'alcance',
    name: 'Por Alcance (Magnitud)',
    concept: 'Clasificados según la escala espacial, poblacional y el volumen de recursos movilizados.',
    characteristics: [
      'Microproyectos: Ejecuciones sumamente puntuales a nivel microsocial o local (un laboratorio, una calle).',
      'Mediano Alcance: Proyectos sectoriales que abarcan un área geográfica más amplia (un municipio completo o universidad).',
      'Megaproyectos: Esfuerzos de envergadura nacional o continental que transforman sectores económicos y sociales enteros.'
    ],
    difference: 'Se diferencian en la complejidad de gestión, el presupuesto requerido y la estructura de gobernanza institucional obligatoria.',
    relationToInformatica: 'En informática, un microproyecto puede ser la migración de la base de datos de un departamento; uno de mediano alcance, un megaproyecto, la infraestructura nacional del Backbone de Fibra Óptica.',
    iconName: 'Maximize2'
  },
  {
    id: 'responsables',
    name: 'Por Número de Responsables',
    concept: 'Definidos según la constitución organizativa de las personas que asumen la autoría y ejecución de los objetivos del proyecto.',
    characteristics: [
      'Proyectos Individuales: Liderados, investigados y ejecutados por un único especialista o estudiante.',
      'Proyectos Grupales o Colectivos: Requieren de equipos multidisciplinarios, donde las tareas se distribuyen bajo metodologías de colaboración coordinadas.'
    ],
    difference: 'Se diferencia en que el individual depende netamente de la disciplina y habilidad del autor, mientras que el grupal exige organización, comunicación asertiva, gobernabilidad y delegación de roles.',
    relationToInformatica: 'En el desarrollo de software moderno se trabaja casi exclusivamente en proyectos grupales utilizando frameworks ágiles (Scrum/Kanban) con asignación de roles (Product Owner, Scrum Master, Developers).',
    iconName: 'Users'
  },
  {
    id: 'beneficio',
    name: 'Por Beneficio Económico',
    concept: 'Se define de acuerdo a la intencionalidad financiera del proyecto y el destino de su producto final.',
    characteristics: [
      'Sin fines de lucro (sociales): El retorno de inversión es netamente de beneficio social, mejora de calidad de vida o bienestar social.',
      'Económicos / Productivos: Buscan la rentabilidad comercial, retorno de capital (ROI) financiero y generación de ganancias monetarias.'
    ],
    difference: 'El proyecto social mide su éxito mediante indicadores de impacto comunitario, y el económico lo mide estrictamente mediante balances contables y variables de mercado.',
    relationToInformatica: 'Un proyecto informático sin fines de lucro es la implementación de Canaima GNU/Linux en escuelas públicas para eliminar dependencias de licencias propietarias; uno económico es el desarrollo de un SaaS de pasarela de pago para un banco privado.',
    iconName: 'CircleDollarSign'
  },
  {
    id: 'sector_financiacion',
    name: 'Por Financiación y Sector',
    concept: 'Determinado por la procedencia del capital económico o recursos invertidos en la fase de gestación y ejecución.',
    characteristics: [
      'Públicos: Financiados por el Estado, alcaldías o ministerios con cargo al presupuesto nacional.',
      'Privados: Financiados por fondos de empresas, corporaciones o inversores de capital de riesgo corporativo.',
      'Mixtos o Subvencionados: Cofinanciación entre entidades de gobierno y cámaras privadas o comunidades auto-organizadas.'
    ],
    difference: 'Se diferencian por los sistemas de auditoría, las restricciones legales de contratación y el perfil de los stakeholders clave.',
    relationToInformatica: 'El apoyo gubernamental es vital en los Proyectos Sociotecnológicos (PST), los cuales son financiados públicamente para capacitar comunidades y descentralizar el poder tecnológico.',
    iconName: 'Building2'
  }
];

export const LIFE_CYCLE_DATA: CyclePhase[] = [
  {
    id: 'diagnostico',
    name: '1. Diagnóstico Participativo',
    shortDesc: 'Identificación y caracterización del problema real dentro de la comunidad.',
    description: 'Es el punto de partida científico-metodológico. Consiste en la inserción activa del equipo de estudiantes e ingenieros en el contexto comunitario o institucional para recopilar datos cualitativos y cuantitativos que permitan visibilizar el problema central.',
    keyActivities: [
      'Aplicación de entrevistas estructuradas y encuestas de necesidades tecnológicas.',
      'Construcción de la Matriz FODA con participación de los líderes comunitarios.',
      'Elaboración del árbol de problemas y árbol de objetivos.'
    ],
    outcomes: [
      'Jerarquización de necesidades documentada.',
      'Problema central seleccionado (por ejemplo, obsolescencia del hardware, carencia de sistemas de información o falta de alfabetización digital).',
      'Establecimiento de la línea base del proyecto.'
    ],
    elementRelation: 'Se conecta íntimamente con el ALCANCE y la gestión de STAKEHOLDERS, delimitando qué población será la beneficiaria primaria.'
  },
  {
    id: 'planificacion',
    name: '2. Planificación Estratégica',
    shortDesc: 'Organización sistemática y formulación del plan de acción.',
    description: 'Fase donde se define formalmente la arquitectura de la solución, los recursos que se requerirán y la ruta exacta que se utilizará para lograr la transformación. Bajo la metodología del Enfoque del Marco Lógico (EML), se consolida la Matriz de Marco Lógico.',
    keyActivities: [
      'Establecimiento del cronograma detallado de actividades (Diagramas de Gantt).',
      'Modelado de arquitectura del software, flujos de base de datos y esquemas de red.',
      'Elaboración de presupuestos financieros detallados, asignándole costos a cada recurso.'
    ],
    outcomes: [
      'Plan de Proyecto aprobado por los coordinadores de la UNETI y la comunidad.',
      'Matriz de Marco Lógico completa (Fin, Propósito, Componentes, Actividades con sus supuestos e indicadores).',
      'Asignación formal de responsabilidades individuales.'
    ],
    elementRelation: 'Involucra de forma directa al TIEMPO, COSTE y ORGANIZACIÓN, determinando las restricciones que guiarán la ejecución.'
  },
  {
    id: 'ejecucion',
    name: '3. Ejecución y Desarrollo',
    shortDesc: 'Puesta en marcha, codificación, instalación y despliegue real.',
    description: 'Es la materialización técnica. El equipo de informática traduce la planificación en componentes físicos y lógicos funcionales en la comunidad, aplicando metodologías de ingeniería y estándares de desarrollo.',
    keyActivities: [
      'Desarrollo de módulos de software backend y frontend (codificación, testing e integración continua).',
      'Mantenimiento correctivo y preventivo de los equipos de computación del laboratorio comunitario.',
      'Sesiones presenciales de formación técnica a los habitantes, administradores u operadores comunitarios.'
    ],
    outcomes: [
      'Instalación física de redes de datos o laboratorios operativos de software libre.',
      'Sistemas de gestión desplegados localmente sobre tecnologías web modernas.',
      'Usuarios capacitados con herramientas de administración de red y bases de datos.'
    ],
    elementRelation: 'Alinea la ASIGNACIÓN DE TAREAS, la COMUNICACIÓN constante del equipo y la materialización de los RESULTADOS inmediatos.'
  },
  {
    id: 'evaluacion',
    name: '4. Evaluación y Sistematización',
    shortDesc: 'Proceso de retroalimentación, auditoría técnica e impacto.',
    description: 'Fase técnica rigurosa orientada a auditar el desempeño de la solución frente a la línea base del Diagnóstico. Permite deducir lecciones aprendidas, formular correctivos finales y medir la sostenibilidad de la tecnología entregada a la comunidad.',
    keyActivities: [
      'Auditorías de calidad de código, pruebas de estres y seguridad para software entregado.',
      'Aplicación de encuestas post-despliegue para medir el nivel de impacto en el flujo escolar o vecinal.',
      'Sistematización de la experiencia en un informe integrador de Proyecto Sociotecnológico I.'
    ],
    outcomes: [
      'Medición de indicadores de impacto y cumplimiento de metas del Marco Lógico.',
      'Acta formal de entrega y transferencia sociotecnológica a la comunidad receptora.',
      'Documento de lecciones aprendidas para futuras cohortes del PNF.'
    ],
    elementRelation: 'Cierra el ciclo validando si el ALCANCE original fue satisfecho dentro de los límites del TIEMPO y los COSTES presupuestados.'
  }
];

export const PROJECT_ELEMENTS_DATA: ProjectElement[] = [
  {
    id: 'tiempo',
    name: 'Restricción de Tiempo',
    definition: 'El periodo de duración total asignado al proyecto, acotado por hitos obligatorios del trayecto académico (generalmente un año académico dividido en tres trimestres).',
    roleInPST: 'Evita la parálisis por análisis. Se gestiona rígidamente mediante diagramas de Gantt para asegurar que las revisiones de trayecto presenten entregables reales en las fechas académicas establecidas.',
    iconName: 'Clock'
  },
  {
    id: 'coste',
    name: 'Gestión del Coste',
    definition: 'La cuantificación valorada en dinero o recursos físicos de los insumos virtuales, software, transporte, viáticos, equipos de computación o herramientas especializadas necesarias.',
    roleInPST: 'En los proyectos aplicados a comunidades, los costos se minimizan optimizando el uso de Software Libre (Canaima, Ubuntu, Debian, PostgreSQL, Node), eliminando costos por licenciamientos.',
    iconName: 'PiggyBank'
  },
  {
    id: 'alcance',
    name: 'Definición de Alcance',
    definition: 'Es el límite de lo que el proyecto resolverá y lo que deliberadamente queda fuera de su ejecución operacional. Especifica los resultados tangibles que se generarán.',
    roleInPST: 'Previene el desborde del alcance. Por ejemplo, en un proyecto de soporte vecinal, delimita si el equipo solo reparará computadoras existentes o si asume la responsabilidad de proveer nuevo cableado estructurado.',
    iconName: 'Focus'
  },
  {
    id: 'organizacion',
    name: 'Organización e Hitos',
    definition: 'La planificación sistemática que entrelaza actividades secuenciales interdependientes, asignando fechas, hitos de control de calidad y responsables específicos.',
    roleInPST: 'Garantiza la viabilidad operativa estructurando el camino crítico del proyecto, garantizando que no se inicien fases de codificación en vacío sin un diagnóstico previo firmado.',
    iconName: 'ListChecks'
  },
  {
    id: 'asignacion',
    name: 'Reparto de Tareas',
    definition: 'Distribución balanceada de funciones dentro del colectivo de estudiantes, basándose en los perfiles técnicos de cada miembro.',
    roleInPST: 'Distribuye eficientemente responsabilidades para optimizar habilidades, como designarle el diseño de base de datos y la arquitectura del backend a perfiles experimentados.',
    iconName: 'UserCheck'
  },
  {
    id: 'comunicacion',
    name: 'Plan de Comunicación',
    definition: 'El canal estructurado y la periodicidad del intercambio de datos entre los estudiantes, los líderes vecinales y el tutor académico Leonardo Malavé.',
    roleInPST: 'Establece reuniones periódicas para disipar malentendidos o cuellos de botellas, informándole con transparencia a la comunidad de los avances del software.',
    iconName: 'MessageSquareText'
  },
  {
    id: 'stakeholders',
    name: 'Participantes (Stakeholders)',
    definition: 'El conjunto de personas, consejos comunales, entes estatales u operadoras comunitarias que son directamente impactadas por las actividades o resultados del proyecto.',
    roleInPST: 'Requiere una gestión política-técnica constante, asegurando que el Consejo Comunal entienda la tecnología que tomará en sus manos para su autogestión.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'resultados',
    name: 'Medición de Resultados',
    definition: 'El conjunto de productos de ingeniería finales evaluados mediante indicadores clave empíricos que confirman la resolución de la problemática original.',
    roleInPST: 'Permite aprobar académicamente la materia. No se evalúan ideas o intenciones, sino sistemas de información funcionando y laboratorios activados.',
    iconName: 'Award'
  }
];

export const REAL_WORLD_EXAMPLES: RealProjectExample[] = [
  {
    id: 'ex-01',
    title: 'Proyecto Canaima GNU/Linux: Metadistribución Soberana para el Sector Público y Educativo',
    description: 'Migración y adaptación de sistemas de software libre soberano a nivel nacional bajo el Decreto Presidencial N.º 3.390, impulsando la independencia tecnológica de Venezuela.',
    community: 'Ministerio del Poder Popular para la Educación y entes gubernamentales venezolanos',
    problem: 'Vulnerabilidad y dependencia presupuestaria nacional crítica frente al uso de licencias de software propietario norteamericano privativo, junto con la necesidad de proveer un sistema seguro para los laboratorios escolares y computadoras portátiles Canaimitas.',
    solution: 'Desarrollo nacional colaborativo de la metadistribución Canaima GNU/Linux (basada en Debian), configurando paquetes locales, controladores, herramientas de ofimática y aplicaciones interactivas didácticas escolares.',
    techStack: ['Debian Linux', 'Python', 'Shell Scripting', 'GNOME Desktop', 'Repositorios Locales CNTI'],
    impact: 'Distribución en más de 6 millones de computadoras portátiles escolares ("Canaimitas") y migración del 80% de la infraestructura del Poder Público Nacional.',
    creationDate: 'Iniciado en 2008 (Vigente, versión Canaima 8.0)',
    webUrl: 'https://canaima.softwarelibre.gob.ve/',
    webConsultation: 'Consultable en el Portal Oficial de Canaima GNU/Linux y repositorios del CNTI.'
  },
  {
    id: 'ex-02',
    title: 'KAVAC: Sistema Integrado de Gestión de Recursos (ERP) para Entes del Estado',
    description: 'Plataforma administrativa soberana (SIGER/ERP) modular para la unificación presupuestaria, nómina, contabilidad y almacén en la administración pública.',
    community: 'Ministerio del Poder Popular para la Ciencia y Tecnología (Mincyt) y entes adscritos',
    problem: 'Elevados costos por licenciamiento de software comercial propietario (como SAP) para la gestión contable y falta de adaptabilidad del software extranjero a las leyes y regulaciones fiscales venezolanas (ONAPRE, SENIAT).',
    solution: 'Codiseño y desarrollo modular de KAVAC empleando el framework de código abierto Odoo y Python, integrando módulos de presupuesto público venezolano, órdenes de compra y facturación nacional.',
    techStack: ['Python', 'Odoo ERP Framework', 'PostgreSQL', 'Docker', 'Ubuntu Server'],
    impact: 'Implementación y despliegue exitoso en entes clave como el CNTI, SUSCERTE y CENDITEL, eliminando costos por licencias y centralizando las deudas presupuestarias operacionales.',
    creationDate: 'Iniciado en 2013 (Mantenido activamente por el CNTI)',
    webUrl: 'https://mincyt.gob.ve/mas-de-12-instituciones-utilizan-el-sistema-de-gestion-kavac/',
    webConsultation: 'Consultable en el comunicado del Ministerio del Poder Popular para Ciencia y Tecnología (Mincyt) sobre el uso de Kavac en entes del Estado.'
  },
  {
    id: 'ex-03',
    title: 'SISCOM: Sistema de Censo Socioeconómico y Gestión de Consejos Comunales (CENDITEL)',
    description: 'Despliegue y desarrollo de un sistema web local para la administración, registro censal familiar y distribución de subsidios sociales en comunas.',
    community: 'Consejos Comunales y Comunas auto-organizadas en el estado Mérida y la región andina',
    problem: 'Pérdida de datos por censos socioeconómicos recolectados a mano en papel, demoras de semanas en la asignación de ayudas sociales y carencia de análisis estadísticos para el autogobierno comunitario.',
    solution: 'Desarrollo de la plataforma web SISCOM que centraliza la carga censal de las familias venezolanas (salud, educación, vivienda), permitiendo la sincronización por lotes y generación de censos vecinales digitales.',
    techStack: ['PHP', 'Laravel Framework', 'PostgreSQL', 'Apache Server', 'Canaima GNU/Linux'],
    impact: 'Automatización del registro de más de 1,200 familias en Mérida, agilizando el despacho del gas comunal, distribución de alimentos CLAP e informes socioeconómicos.',
    creationDate: 'Iniciado en 2015 (Desarrollado y soportado por la Fundación CENDITEL)',
    webUrl: 'https://www.cenditel.gob.ve/',
    webConsultation: 'Consultable en el portal de software libre de la Fundación CENDITEL y repositorios institucionales.'
  }
];



export const INDIVIDUAL_REFLECTIONS: Reflection[] = [
  {
    activityId: 'infografia',
    title: 'Reflexión Individual: Infografía sobre Clasificación de Proyectos',
    content: 'La elaboración de la infografía permite decantar cómo la clasificación teórica no es meramente restrictiva, sino una brújula operativa de tremenda utilidad en el desarrollo de software. Desde mi perspectiva como desarrollador independiente especializado en arquitectura de sistemas, entender que un proyecto es de naturaleza "tecnológica" obliga a aplicar el rigor analítico e ingeniería para mitigar el caos. Al igual que en la práctica clínica donde los protocolos de terapia cardiorrespiratoria aseguran la supervivencia mediante la minuciosidad de un algoritmo de cuidado, el saber catalogar un proyecto según su alcance o beneficio financiero modula la selección del stack tecnológico. En Ingeniería en Informática, un proyecto social sin fines de lucro nos desafía a erradicar dependencias tecnológicas y defender la soberanía mediante el software libre, forzando al ingeniero a diseñar soluciones que no dependan de licenciamientos prohibitivos.',
    weightingNotice: 'Ponderación de Reflexión Individual: Actividad 1 - Infografía (Cumple con Rúbrica de Análisis Crítico).'
  },
  {
    activityId: 'mapa_mixto',
    title: 'Reflexión Individual: Mapa Mixto de Ciclo de Vida y Elementos',
    content: 'Integrar los componentes rígidos del ciclo de vida de un proyecto (Diagnóstico, Planificación, Ejecución, Evaluación) con las dimensiones de control (Tiempo, Coste, Alcance) revela que el software bien hecho es el resultado directo de la disciplina organizativa. Mi experiencia en el desarrollo de videojuegos de alto rendimiento mediante Unreal Engine y C++ me ha demostrado que iniciar la fase de ejecución (codificación) sin una fase de Diagnóstico y de Planificación sólidas condena al proyecto al fracaso de rendimiento (lag, memory leaks) y al desborde de alcance.',
    weightingNotice: 'Ponderación de Reflexión Individual: Actividad 2 - Mapa Mixto y Ciclo de Vida.'
  },
  {
    activityId: 'investigacion',
    title: 'Reflexión Individual: Investigación de Casos de Proyectos',
    content: 'La investigación de los casos reales venezolanos (Canaima GNU/Linux, KAVAC ERP y SISCOM de CENDITEL) me ha permitido constatar cómo la informática y el desarrollo de software son pilares fundamentales para alcanzar la soberanía tecnológica del país. Analizar de cerca estos proyectos demuestra que la arquitectura de software no es solo una abstracción matemática o comercial, sino un acto de diseño sociotécnico trascendental. La metadistribución Canaima GNU/Linux evidencia la defensa del conocimiento libre frente a la dependencia corporativa, mientras que KAVAC ERP ilustra la capacidad técnica nacional para unificar y transparentar los flujos administrativos del Estado mediante Python y PostgreSQL. Asimismo, SISCOM de CENDITEL materializa la transferencia tecnológica directa, otorgando a los Consejos Comunales la autonomía informática necesaria para sus censos familiares. Para mí, como desarrollador de sistemas, esta compilación reafirma que el fin supremo de la ingeniería en informática en la UNETI es democratizar la tecnología, proveyendo soluciones de código abierto rápidas, seguras, documentadas y adaptadas con absoluto rigor técnico a las realidades y necesidades de nuestras comunidades.',
    weightingNotice: 'Ponderación de Reflexión Individual: Actividad 3 - Casos de Estudio en Informática.'
  },
  {
    activityId: 'ensayo',
    title: 'Reflexión Individual: Ensayo del Impacto Sociotecnológico',
    content: 'Este ensayo cataliza una convicción interna profunda: la informática no puede divorciarse de su repercusión política, económica y social en la Venezuela contemporánea. Un programador no es solo un creador de líneas de código abstractas, sino un científico práctico que, mediante herramientas de código abierto, puede perpetuar desigualdades o destruir asimetrías de poder. Analizar la importancia e impacto de los proyectos socio-tecnológicos a la luz de la Ley de Infogobierno y los lineamientos del PNF demuestra que nuestra formación en bases de datos relacionales, redes y arquitectura de sistemas adquiere su verdadero valor cuando se vierte sobre un Consejo Comunal o una institución escolar pública. Para mí, fusionar la precisión crítica y el triaje del área clínica médica cardiorrespiratoria con la flexibilidad y el diseño de la informática me da una óptica única: la tecnología debe estructurarse con absoluto rigor metodológico para sostener la vida colectiva, optimizar la autogestión social y construir una soberanía digital comunitaria sólida y sostenible.',
    weightingNotice: 'Ponderación de Reflexión Individual: Actividad 4 - Ensayo de Impacto Social de la Ingeniería.'
  }
];
