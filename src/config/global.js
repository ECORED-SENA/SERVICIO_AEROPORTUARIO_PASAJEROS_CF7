export default {
  global: {
    componenteFormativo: 'Manejo de irregularidades en la operación aérea',
    descripcionCurso:
      'Los conocimientos y procedimientos a seguir a las situaciones operacionales presentadas en un aeropuerto es importante, por demoras, cancelaciones, vuelos sobrevendidos y diversidad de casos, en el momento de la atención a una persona que realiza un viaje y que por motivos ajenos e inesperados, se requiere un manejo eficiente y siguiendo todos los protocolos y normativas con cada eventualidad.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Irregularidades',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Responsabilidades',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Manejo de irregularidades del viajero',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Compensaciones al viajero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Política de compensación del viajero',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Criterios de aplicación',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aeronáutica civil. (s.f.). <i>Compensaciones por deficiencias en la prestación del servicio de transporte aéreo.</i>',
      link:
        'https://www.aerocivil.gov.co/prensa/noticias/Pages/compensaciones-por-deficiencias-en-la-prestacion-del-servicio-de-transporte-aereo.aspx',
    },
    {
      referencia:
        'Comunidad Andina. (s.f.). <i>Deberes y derechos de los pasajeros.</i>',
      link:
        'http://www.comunidadandina.org/StaticFiles/201166182550folleto_viajeros.pdf',
    },
    {
      referencia:
        'Uribe D. (2019). La protección de los pasajeros de transporte aéreo en Colombia.',
      link:
        'https://revistas.urosario.edu.co/xml/733/73360074012/html/index.html',
    },
    {
      referencia:
        'Uribe, D. (2019). La protección de los pasajeros de transporte aéreo en Colombia. Revista Socio-Jurídicos, 21(2), 293-330. Doi:',
      link:
        'https://doi.org/10.12804/revistas.urosario.edu.co/sociojuridicos/a.7474 ',
    },
  ],
  glosario: [
    {
      termino: 'Cancelación',
      significado:
        'La no realización de un vuelo programado en el que había reservada al menos una plaza.',
    },
    {
      termino: 'Circunstancias imprevistas',
      significado:
        'Son causas ajenas al normal desenvolvimiento de la actividad del transportista que impiden que el vuelo se lleve a cabo o que retrasen su iniciación tales como causas meteorológicas que impiden la operación del vuelo, fallas técnicas no correspondientes al mantenimiento programado o rutinario de la aeronave o causadas por pasajeros o terceros en el momento del vuelo, fallas de los equipos de soporte en tierra, entre otros.',
    },
    {
      termino: 'Cumplimiento',
      significado:
        'Estadísticas mensuales de vuelos programados, cancelados, demorados y cumplidos, indicando las causas de las cancelaciones y demoras (Comerciales, técnicas, operacionales e incontrolables) Este formato lo deben enviar las empresas regulares de pasajeros (nacionales y extranjeras) dentro de los 10 primeros días calendario del mes siguiente al cual corresponde la información.',
    },
    {
      termino: 'Denegación de embarque',
      significado:
        'La negativa a transportar pasajeros en un vuelo pese a haberse presentado al embarque con reserva confirmada y en las condiciones establecidas en el contrato de transporte, salvo que haya motivos razonables para denegar su embarque, tales como razones de salud o de seguridad o la presentación de documentos de viaje inadecuados, o la presentación tardía del pasajero al chequeo.',
    },
    {
      termino: 'Reserva',
      significado:
        'Acción aceptada o registrada por medio físico o electrónico por  el cual se le garantiza al usuario un espacio en un vuelo.',
    },
    {
      termino: 'Sobreventa (overbooking)',
      significado:
        'Práctica que se presenta cuando, en un vuelo regular, el número de pasajeros con billete expedido con reserva confirmada que se presentan para embarcar dentro del tiempo límite señalado sobrepasa el número de plazas de las que dispone el avión.',
    },
  ],
  complementario: [
    {
      texto:
        'Concepto: Unidad Administrativa Especial de Aeronáutica Civil. (s.f.). RAC 13 Régimen Sancionatorio.',
      tipo: 'PDF',
      descarga: '/downloads/RAC_13_Regimen_Sancionatorio.pdf',
    },
    {
      texto:
        'Compensaciones al viajero: Aeronáutica Civil. (s.f.). Compensaciones por deficiencias en la prestación del servicio de transporte aéreo.',
      tipo: 'Página web',
      link:
        'https://www.aerocivil.gov.co/prensa/noticias/Pages/compensaciones-por-deficiencias-en-la-prestacion-del-servicio-de-transporte-aereo.aspx',
    },
    {
      texto:
        'Política de compensación del viajero: Comunidad Andina. (s.f.). Deberes y derechos de los pasajeros.',
      tipo: 'Documento web',
      link:
        'http://www.comunidadandina.org/StaticFiles/201166182550folleto_viajeros.pdf',
    },
    {
      texto:
        'Criterios de aplicación: Uribe, D. (2019). La protección de los pasajeros de transporte aéreo en Colombia. Revista Socio-Jurídicos, 21(2), 293-330.',
      tipo: 'Revista web',
      link:
        'https://doi.org/10.12804/revistas.urosario.edu.co/sociojuridicos/a.7474',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Claudia Ávila Ramírez',
        cargo: 'Experta temática',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos – Regional Bogotá',
      },
      {
        nombre: 'Lida Guanumen Riaño',
        cargo: 'Experta temática de apoyo',
        centro:
          'Centro Nacional de Hotelería Turismo y Alimentos – Regional Bogotá.',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora y Evaluadora Instruccional',
        centro: 'Regional Distrito Capital – Centro de Gestión Industrial.',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte font-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
