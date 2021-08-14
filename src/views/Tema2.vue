<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Irregularidades
    .row.mb-5
      .col-lg-7
        p.mb-3  La compensación y asistencia del viajero en caso de denegación de embarque, de cancelación o retraso de los vuelos es una retribución que se da al pasajero por incumplimiento en las obligaciones del contrato de transporte, según las condiciones pactadas en el momento de la compra del servicio.
        p Las empresas aéreas tienen establecidas unas políticas internas para dar solución a estas situaciones irregulares que se presentan en los vuelos diarios. Estas directrices están contempladas en el documento emitido por la OACI en la sexta reunión Montreal 18-22 de marzo de 2013 (Criterios y directrices en materia de servicio al cliente y calidad total en los servicios aéreos y aeroportuarios) en los Artículos 11-13.
      .col-lg-5
        figure
          img(src='@/assets/curso/t2-i1.png', alt='imagen decorativa')

    .row.mb-5
      .col-lg-2
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-im1.svg', alt='imagen decorativa')
      .col-lg-10
        .bloque-texto-d.color-secundario.p-4(data-aos="fade-left")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            .wrapText
              p.mb-3  En el lapso enero noviembre de 2016, las aerolíneas colombianas han desembolsado 50.068 millones de pesos para compensar a los pasajeros que han sufrido alguna afectación por deficiencias en el cumplimiento del contrato de transporte.<br><br>
              p.mb-3  Teniendo en cuenta que en este periodo (enero – noviembre) se movilizaron 32 millones 519 mil pasajeros, en el mes de noviembre, las aerolíneas compensaron por $8.836 millones.<br><br>
              p.mb-3  El 73% de las compensaciones ocurrieron por cambio de horario y/o cancelación de vuelos, el 18% porque el pasajero no pudo acceder a una silla del vuelo para el cual había adquirido su tiquete y el 9% por deficiencias en el manejo del equipaje.<br><br>
              p Las compensaciones están representadas en órdenes de servicios que posteriormente puede redimir el pasajero en la misma aerolínea, 43% bonos y millas, 41% pago a terceros, para cumplir con el contrato de transporte (hospedaje, endoso, traslados) el 6% reintegros y el 10% pagos por movilización y/o compensación por demora en la entrega del equipaje.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - Según información de la Aeronáutica Civil       
    .row.mb-5
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="https://www.aerocivil.gov.co/prensa/noticias/Pages/compensaciones-por-deficiencias-en-la-prestacion-del-servicio-de-transporte-aereo.aspx" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Para conocer detalladamente sobre este tema, consulte el siguiente artículo: Compensaciones por deficiencias en la prestación del servicio de transporte aéreo.




    Separador
    br
    br  
    #t_2_1.titulo-segundo
      h2 2.1  Política de compensación del viajero
    .row.mb-5(data-aos="fade-up")
      .col-lg-7
        p.mb-3  Los usuarios del transporte aéreo tienen derecho a recibir compensaciones por parte de las aerolíneas en los casos de cancelaciones, interrupciones o demoras en los vuelos en los que no se haya realizado el reembolso correspondiente. Para garantizar la compensación a los pasajeros, la autoridad aeronáutica establece normas y procedimientos en el que se reconocen al menos cuatro causales: retraso, interrupción del transporte, cancelación y sobreventa.
        p.mb-3.text-bold  Los pasajeros tendrán derecho a las siguientes compensaciones:
      .col-lg-5
        figure(data-aos="flip-left")
          img(src='@/assets/curso/t2-i2.png', alt='usuario en el counter del aeropuerto hablando con asesora')   
   
    .neg-margin.tarjeta.yellowCard.p-4.mb-5.r-0
      SlyderA
        .row.justify-content-center.p-5
          .col-md-6.mb-4.mb-md-0
            .h4 Por retraso
            p.mb-3  Un refrigerio y una llamada telefónica que no exceda de tres minutos; al lugar de elección del pasajero cuando el retraso sea mayor de 1 hora y 15 minutos a 3 horas. Entre 3 a 5 horas se le ofrecerá desayuno, almuerzo o comida según la hora y lo mismo del punto anterior.
            p.mb-3  Más de 5 horas se ofrecerá además de lo anterior una compensación al pasajero con el 30% del valor del trayecto y se brindará hospedaje en los casos en que sea necesario pernoctar, gastos de traslado o el reembolso a elección del pasajero, esto en el caso que el retraso sea superior a lo indicado.
            p.mb-3  Si la demora supera las 10 p.m. La aerolínea proporciona además del hospedaje, los gastos de traslado entre el aeropuerto y el lugar de hospedaje, a menos que el pasajero decida esperar voluntariamente en el aeropuerto 

          .col-md-4
            figure
              img(src='@/assets/curso/t2-i3.png', alt='usuario sentado esperando su vuelo')


        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Por Interrupción del transporte
            p Si el pasajero no opta por la devolución de la parte proporcional del precio correspondiente al tramo no cubierto, se le compensará la demora sufrida hasta la reanudación del viaje, conforme a lo indicado en el manejo de demoras.
          .col-md-4
            figure
              img(src='@/assets/curso/t2-i4.png', alt='imagen decorativa')
        
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Por cancelación del vuelo
            p Cuando el vuelo sea cancelado por causas imputables a la aerolínea, esta deberá cubrir los gastos de hospedaje en los casos que sea necesario pernoctar y de traslado si es que, teniendo la reserva confirmada y habiéndose presentado oportunamente en el aeropuerto, no se le hubiese reintegrado el valor neto del boleto ni se le hubiera conseguido vuelo sustitutivo para el mismo día.
          .col-md-4
            figure
              img(src='@/assets/curso/t2-i5.png', alt='imagen decorativa')
    
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Por sobreventa
            ul.lista-ul
              li 
                i.fas.fa-plane
                | Cuando se sobrevenda el cupo, la aerolínea deberá proporcionarle el viaje a su destino final en el siguiente vuelo que cuente con espacio disponible, en la misma fecha y ruta. En caso de no disponer de vuelo, la aerolínea deberá hacer las gestiones necesarias para su embarque en otra aerolínea a la mayor brevedad posible.
              li 
                i.fas.fa-plane
                | Cuando no se medie un acuerdo directo entre el pasajero y la aerolínea para ceder el cupo, la empresa deberá otorgarle el 30% del valor del trayecto afectado.  
          .col-md-4
            figure
              img(src='@/assets/curso/t2-i6.png', alt='imagen decorativa')    
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            .h4 Anticipación del vuelo
            p Hace referencia a las ocasiones en que las compañías aéreas anticipan el vuelo en más de una hora sin avisar al pasajero, o cuando habiéndole avisado, el viajero no pueda llegar para la nueva hora asignada por la aerolínea, en este caso  el viajero tiene derecho a que se le maneje su tiquete en el siguiente vuelo de la misma ruta disponible o en el que le resulte conveniente, dado el caso que la aerolínea no cuente con más vuelos disponibles en esa ruta, deberá hacer el manejo internamente, para lograr que el pasajero llegue a su destino final con otra aerolínea si es del caso, sin que esto implique que el pasajero deba asumir ningún costo adicional. Si ninguna de las opciones anteriores son alternativas posibles para el pasajero, la aerolínea deberá reembolsar el dinero pagado por el tiquete sin ningún tipo de penalización.  
          .col-md-4
            figure
              img(src='@/assets/curso/t2-i7.png', alt='imagen decorativa')

    .row.mb-5
      .col-lg-7
        a.anexo.mb-4.mb-lg-0(href="http://www.comunidadandina.org/StaticFiles/201166182550folleto_viajeros.pdf" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p <b>Enlace web.</b> Para mayor información sobre compensaciones diríjase al siguiente documento: Derechos y deberes de los pasajeros.

    p.mb-5  En caso de que la irregularidad afecte el equipaje que se facturó o se envió por bodega, es importante tener en cuenta que:
    
    .row.justify-content-center.mb-5
      .col-lg-5
        figure(data-aos="fade-left")
          img(src='@/assets/curso/t2-i8.png', alt='imagen decorativa')
      .col-lg-5
        ul.lista-ul
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | La aerolínea debe asumir el pago de los gastos mínimos por concepto de elementos de primera necesidad, es decir, utensilios de aseo.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Si la demora del equipaje supera 24 horas, la aerolínea debe proveer el valor suficiente para obtener prendas de vestir básicas.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Es importante tener en cuenta adicionalmente que no es recomendable llevar en su equipaje facturado elementos de valor, ya que en caso de inconvenientes con el equipaje la línea aérea no se hará responsable.
    
    Separador
    br
    br
    
    #t_2_2.titulo-segundo
      h2 2.2  Criterios de aplicación
    p.mb-5 Son las regulaciones aeronáuticas que apropia cada país para hacer cumplir dentro y fuera de sus fronteras los derechos y deberes para el servicio de transporte aéreo.
    .row
      .col-lg-7
        .cajon-b.color-primario.p-3.mb-5(data-aos="fade-left")
          p.mb-3  Los usuarios del transporte aéreo deben tener en cuenta las normativas aeronáuticas que contemplan disposiciones relativas a sus derechos, estas son, el código de Comercio en el artículo 1773 establece que la segunda parte del libro quinto es quien regula toda actividad de la aeronáutica civil, inspeccionada y vigilada por el gobierno, donde estipula las principales obligaciones de las aerolíneas y los derechos de los pasajeros de la relación contractual del transporte. Los RAC (Reglamentos Aeronáuticos de Colombia) según artículo 1782 del código de Comercio establece que la Aerocivil es la autoridad gubernamental encargada de expedir los RAC, con facultad para sancionar a las aerolíneas o intermediarios por incumplimiento según Ley 105 de 1993 y reiterada en decreto 260 de 2004.
          p.mb-3  En el artículo 1874 del Decreto 410 de 1971 (Código de Comercio) hacen referencia a la distinción entre conceptos de transporte interno de pasajeros, que es cuando el punto de partida y destino están ubicados dentro del territorio nacional. Y transporte de pasajeros internacional son todos los demás casos.

      .col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/t2-i9.png', alt='imagen decorativa')

    p.mb-5  Atendiendo lo que nos indica la Universidad del Rosario en su revista frente a este tema, tenemos:
    .row.justify-content-center.mb-5.tipo4
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5(data-aos="flip-up") 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h3.mb-0 Ahora bien, el Convenio de Montreal, ratificado por Colombia mediante la Ley 29 de 1992, precisa el concepto de transporte aéreo internacional.
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Para el Convenio, el transporte se considera internacional si: (i) sus puntos de partida y de destino están situados en el territorio de dos Estados parte, o por lo menos en un Estado parte si en el recorrido hay por lo menos dos Estados; (ii) su punto de partida y su punto de destino están situados en el territorio de dos Estados distintos, por lo menos uno de ellos siendo un Estado parte; y (iii) el punto de partida y de destino están ubicados en el territorio de un solo Estado parte pero el trayecto incluye una escala en el territorio de otro Estado.
                span.text-bold (Convenio de Montreal, 1999)

    .row.justify-content-center.mb-5
      .col-lg-2
        figure(data-aos="flip-right") 
          img(src='@/assets/curso/t2-ic1.svg', alt='icono decorativo')
      .col-lg-8
        p <b>El RAC3, titulado Actividades Aéreas Civiles, contempla los derechos y deberes de los usuarios,</b> las medidas que se deben adoptar en caso de incumplimientos, las compensaciones a las que tienen derecho los pasajeros de transporte aéreo en caso de demoras, las cancelaciones, las sobreventas, los reembolsos y el procedimiento para los mismos, las exigencias relacionadas con los sistemas de atención al usuario y las instancias de reclamación para hacer efectivo todo lo anterior, entre muchas otras disposiciones relevantes para los pasajeros.


    .row.justify-content-center.mb-5
      .col-lg-10
        .cajon.color-secundario.p-4(data-aos="flip-up") 
          .row
            .col-lg-2
              figure
                img(src='@/assets/curso/t2-ic2.svg', alt='icono decorativo')
            .col-lg-10
              p Para ampliar la información a la normativa y los convenios en el que el Estado colombiano ha participado para la regulación del transporte aéreo a pasajeros se puede remitir al siguiente enlace de la Revista realizada por la Universidad del Rosario de Colombia. 

              a.anexo.mb-4.mb-lg-0(href="https://revistas.urosario.edu.co/xml/733/73360074012/html/index.html" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-link.svg")
                .anexo__texto
                  p <b>Enlace web.</b> Para mayor información sobre compensaciones diríjase al siguiente documento: Derechos y deberes de los pasajeros.

    p.mb-5 Es importante tener en cuenta que para que el proceso de viaje se dé sin ningún contratiempo debemos cumplir con la siguiente información:
    .row.justify-content-center.mb-5
      .col-lg-10
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Aerolíneas de Bajo Costo")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic3.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p  Es importante revisar sus políticas diferentes a las full carrier, al comprar con este tipo de compañías se aceptan las condiciones de las tarifas ofrecidas por ellos.
          
          .row(numero="2" titulo="Tarifas Promocionales")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic4.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p Se debe tener en cuenta que este tipo de tarifas no son Reembolsables, en algunos casos permite cambios con cobros adicionales.

          .row(numero="3" titulo="Tiempos de presentación en aeropuerto")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic5.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              ul.lista-ul
                li 
                  i.fas.fa-plane
                  | 3 horas antes para vuelos Internacionales en temporada baja.
                li 
                  i.fas.fa-plane
                  | 4 horas antes para vuelos Internacionales en temporada alta.
                li 
                  i.fas.fa-plane
                  | 2 horas antes para vuelos Nacionales en temporada baja.
                li 
                  i.fas.fa-plane
                  | 3 horas antes para vuelos Nacionales en temporada alta.
                  

          .row(numero="4" titulo="Salas de abordaje")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic6.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p En el momento de registro o de Check–In el pasajero recibirá su pase de abordar o pasabordo, en este, el pasajero encontrará información para presentarse en la sala de embarque, es importante que el pasajero se presente a la hora indicada en la sala asignada al vuelo.

          .row(numero="5" titulo="Equipaje")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic7.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p En caso de que sea necesario registrar equipaje de bodega el pasajero debe validar el peso y dimensiones permitidas dentro de su franquicia, también debe validar los elementos permitidos para llevar en el avión, es importante validar con antelación con la aerolínea si requiere de algún servicio especial, al igual que es responsabilidad del pasajero revisar su equipaje al momento de recibirlo en las bandas de equipaje. También es importante recalcar que los elementos de valor no deben ir en el equipaje de bodega ya que la aerolínea no está obligada a responder en caso de algún inconveniente.

          .row(numero="6" titulo="Irregularidades")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic7-1.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p En caso de que el vuelo presente irregularidades el pasajero debe revisar información como, disponibilidad de vuelos, penalidades, trámites y condiciones, tarifas, esto dependiente del tipo de irregularidad presentada en la operación.


          .row(numero="7" titulo="Cambios de vuelo")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic8.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p Cualquier cambio aplicado a un vuelo, la agencia de viajes emisora del tiquete o la aerolínea misma debe avisar a su pasajero lo más pronto posible a más tardar 24 horas antes a la salida de dicho vuelo.

          .row(numero="8" titulo="Viajero frecuente")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic9.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p Es obligación de la aerolínea dar cumplimiento de los planes de viajero frecuente, acumulaciones, redenciones, promociones, etc.


          .row(numero="9" titulo="Seguridad de vuelo")
            .col-md-1
              figure
                img(src='@/assets/curso/t2-ic10.svg', alt='icono decorativo')
            .col-md-10.mb-4.mb-md-0
              p.mb-3  Es importante tener en cuenta que los pasajeros deben cumplir con una serie de recomendaciones para poder llevar a cabo el proceso de viaje sin novedades, entre ellas:
              ul.lista-ul
                li 
                  i.fas.fa-plane
                  | Es obligación de los viajeros tener el cinturón ajustado en la cabina del avión en los momentos que la tripulación así lo indique.
                li 
                  i.fas.fa-plane
                  | No puede el pasajero hacer uso de aparatos electrónicos a bordo de la aeronave.
                li 
                  i.fas.fa-plane
                  | Está prohibido sustraer de las aeronaves elementos de seguridad o elementos de emergencia, ni tampoco elementos de las instalaciones aeroportuarias.
                li 
                  i.fas.fa-plane
                  | Manipular el sistema de seguridad y detección de incendios instalados en las aeronaves.
                li 
                  i.fas.fa-plane
                  | Está prohibido fumar en las aeronaves durante el vuelo.
                li 
                  i.fas.fa-plane
                  | No se debe tomar actitud o hacer comentarios que puedan generar pánico en medio del vuelo.
                li 
                  i.fas.fa-plane
                  | Está prohibido agredir física o verbalmente al personal de la aerolínea o algún otro pasajero.
                li 
                  i.fas.fa-plane
                  | Está prohibido llevar a bordo de la aeronave elementos que puedan atentar contra la seguridad del vuelo (armas, elementos cortopunzantes, elementos contundentes).
                li 
                  i.fas.fa-plane
                  | No es permitido generar situaciones o gestos obscenos durante el vuelo.
                li 
                  i.fas.fa-plane
                  | Ingresar o permanecer en la aeronave en estado de intoxicación por alcohol o bajo el efecto de sustancias alucinógenas.
                li 
                  i.fas.fa-plane
                  | Cualquier acto que atente contra la seguridad del vuelo, la seguridad de los tripulantes y los demás pasajeros.




</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
