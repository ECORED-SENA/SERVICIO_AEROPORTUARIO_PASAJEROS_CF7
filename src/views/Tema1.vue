<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Irregularidades
    .row.mb-5
      .col-lg-7
        p.mb-3 Se presentan diferentes irregularidades en el día a día de las operaciones aéreas de vuelos en los aeropuertos, estas dan lugar a unos procedimientos establecidos por la entidad regulatoria de cada país. En Colombia el ente regulador es <b>La Unidad Administrativa Especial de Aeronáutica Civil o (Aerocivil)</b> es el organismo estatal encargado del control y regulación de la Aviación civil de Colombia para hacer valer los derechos y deberes de los usuarios cuando se presentan irregularidades en la prestación del servicio de transporte aéreo.
        p La operación aérea está expuesta a <b>múltiples factores que hacen que se presenten situaciones irregulares que ameriten compensar al pasajero</b> por afectar sus planes de viaje; sin embargo, cabe resaltar que no todas las situaciones ameritan su compensación, por lo cual es relevante diferenciar en qué ocasiones da lugar a esta o no.
      .col-lg-5
        figure.mb-5
          img(src='@/assets/curso/t1-i1.jpg', alt='Mujer haciendo check-in en el aeropuerto')
    .row.mb-5.justify-content-center(data-aos="flip-up")
      .col-lg-10
        .cajon.color-secundario.p-4
          p <b>Es importante tener en cuenta los derechos y deberes de los pasajeros</b> para que así no se le vulneren; pero también es indispensable entender que el pasajero juega un rol relevante en el proceso de viaje y por consiguiente tiene consigo deberes que se deben cumplir de igual manera para garantizar la seguridad de la operación aérea.

    
    #t_1_1.titulo-segundo
      h2 1.1  Concepto
    .row.justify-content-center.mb-5
      .col-lg-10 
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El contrato de transporte aéreo de pasajeros es un acuerdo entre el transportista que se obliga a trasladar por vía aérea a una o varias personas que se denominan pasajeros a un destino, por un valor estipulado, en este se establece las condiciones, regulaciones y tarifas que aplica cada transportista y este por su parte adquiere una obligación en todo momento de las etapas de atención hasta culminar su viaje, siendo esta la razón que si se incumple se debe informar de inmediato al pasajero la situación y las medidas a seguir para el tipo de irregularidad.

    h3.titulo-tercero Tipos de irregularidad
    p.mb-5  Existen varios tipos de irregularidades, donde en algunas situaciones la aerolínea no tiene responsabilidad de compensar al pasajero, dentro de esas situaciones las más comunes son las que se presentan a continuación:
    //- cards
    .row.mb-5
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/c1.jpg", alt="imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.text-center
                span.h4.mb-3 Por motivos meteorológicos o atmosféricos <br>
                | Son situaciones de climas muy agrestes como tormentas, neblina, huracanes, granizo, lluvia, nieve y hielo en la pista, para la navegabilidad de las aeronaves estas son situaciones de fuerza mayor que ocasionan demoras, se pueden dar cancelaciones o interrupciones de vuelo. 

      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/c2.jpg", alt="imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.text-center
                span.h4.mb-3 Por motivos de orden público <br>
                | Se presentan manifestaciones, casos de inestabilidad política, actos terroristas.

      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/c3.jpg", alt="imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.text-center
                span.h4.mb-3 Por motivos aeroportuarios <br>
                | Huelga por parte de personal de aeropuerto o tripulación de vuelos.
      .col-lg-3
        .nav-holder.align-items-center
          img(src="@/assets/curso/c4.jpg", alt="imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.text-center
                span.h4.mb-3 Por situaciones de desastres naturales <br>
                | Terremotos, temblores, tsunamis, erupción volcánica, inundaciones, etc.      

    p.mb-5  Situaciones donde la aerolínea debe compensar a los usuarios por motivos de irregularidades internas:
    
    .row.mb-5.justify-content-center(data-aos="fade-up")
      .col-lg-3
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/t1-i7.jpg', alt='Mujer sentada sobre una maleta esperando en sala de aeropuerto')
      .col-lg-7
        ul.lista-ul
          li 
            i.fas.fa-plane
            | Las eventualidades que se presentan con las líneas aéreas por motivos internos pueden ser por equipos o mano de obra.
          li 
            i.fas.fa-plane
            | Mantenimiento de aeronaves o falta de ellas.
          li 
            i.fas.fa-plane
            | Falta de personal para la atención al pasajero como son: pilotos, copilotos, tripulación auxiliar de cabina, personal de mantenimiento, no disponible por tiempo de horas de vuelo vencidas, no llegada de personal a operación, insuficiencia de personal, etc.
          li 
            i.fas.fa-plane
            | Cancelación de reserva por parte de la línea aérea sin previo aviso.
          li 
            i.fas.fa-plane
            | Cambio de itinerario de los vuelos, adelantar o atrasar horario sin enviar información con anticipación al pasajero.
          li 
            i.fas.fa-plane
            | Sobreventa en el vuelo reservado.
          li 
            i.fas.fa-plane
            | Cancelación de vuelos.
          li 
            i.fas.fa-plane
            | Atraso de vuelos.

    p.mb-5  A continuación, podremos revisar según la normativa aeronáutica vigente cuándo es responsabilidad de la empresa dar solución y compensar a los viajeros:
    .row.justify-content-center.mb-5
      .col-lg-10
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t1-i8.svg', alt='infografia')

          .tarjeta.yellowCard.p-3(x="25%" y="20%")
            p.text-center Faculta como autoridad para expedir Reglamentos Aeronáuticos a la Unidad Administrativa Especial de la Aeronáutica Civil.

          .tarjeta.yellowCard.p-3(x="57%" y="20%")
            p.text-center Para garantizar la efectividad de los derechos de las personas naturales y jurídicas ante las autoridades y obtener un buen servicio.         

          .tarjeta.yellowCard.p-3(x="89%" y="25%")
            p.text-center Armonizar los reglamentos aeronáuticos de Colombia RAC, con los Reglamentos Aeronáuticos de Latinoamérica, sistema LAR.   
          
          .tarjeta.yellowCard.p-3(x="9%" y="74%")
            p.text-center La República de Colombia aprueba convenio sobre aviación civil Internacional (OACI). 
          .tarjeta.yellowCard.p-3(x="41%" y="78%")
            p.text-center Le corresponde sancionar administrativamente a los particulares relacionados con el sector por la violación a los reglamentos aeronáuticos.
          .tarjeta.yellowCard.p-3(x="73%" y="78%")
            p.text-center Al usuario y la calidad de los servicios, se encarga de dirigir, organizar, coordinar y regular técnicamente el transporte aéreo.           
    
    .row.justify-content-center.mb-5
      .col-lg-10
        .tarjeta.color-primario.p-4.mb-5(data-aos="flip-up")
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/t1-icx.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 RAC 13 - Régimen Sancionatorio
                  p.text-small Con el fin de ampliar información sobre normativa, es importante que descargue el siguiente documento.  
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/RAC_13_ Regimen_Sancionatorio.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    
   
    #t_1_2.titulo-segundo
      h2 1.2  Responsabilidades
    .row.justify-content-center.mb-5(data-aos="fade-up")
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p.mb-3 En el transporte aéreo es importante tener en cuenta cuáles son puntualmente las responsabilidades u obligaciones que tiene una compañía aérea para la atención de pasajeros.
                p Aquí algunas de ellas:

    .row.justify-content-center.mb-5
      .col-lg-3
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/t1-i11.svg', alt='imagen decorativa')
      .col-lg-7
        ul.lista-ul
          li(data-aos="fade-up")
            i.fas.fa-plane
            | Condiciones y límites de la responsabilidad del transportista en los casos de los pasajeros con lesiones personales o fallecidos.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Condiciones y límites en la responsabilidad del transportista por la pérdida, daño o retraso de los bienes y equipajes, lo cual incluye bienes frágiles o perecederos.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Reclamos, restricciones, incluyendo límites de tiempo por el que los pasajeros deban presentar reclamos o deban interponer acciones en contra del transportista.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Normas sobre reconfirmaciones o reservaciones, tiempos de presentación en el aeropuerto, el uso, duración y validez de los servicios de transporte aéreo y el derecho del transportista de negar la transportación.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Normas sobre reconfirmación o reservaciones, tiempos de presentación en el aeropuerto.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Derechos del transportista y límites en la responsabilidad del transportista en el caso de demoras o el incumplimiento de ejecución de un servicio, el cual incluye cambios en los itinerarios, sustitución de transportistas o aeronaves alternas y reasignación de rutas. Y cuando sea requerido por la ley aplicable la obligación del transportista de notificar a los pasajeros sobre la identidad del transportista operador o la aeronave sustituta.
          li(data-aos="fade-up") 
            i.fas.fa-plane
            | Derechos del transportista de denegar la transportación a los pasajeros que incumplan con las leyes aplicables o quienes incumplan con la presentación de todos los documentos de viaje necesarios.
          
      
    Separador
    br
    br

    #t_1_3.titulo-segundo
      h2 1.3 Manejo de irregularidades del viajero
    p.mb-5(data-aos="fade-up")  Se debe dar un tratamiento personalizado con dignidad y respeto al pasajero por parte del transportador o la compañía aérea y todos los funcionarios de la empresa aérea en todo momento hasta culminar su viaje.
    p.mb-5(data-aos="fade-up")  Es por lo que se establece ciertas características en el manejo de irregularidades como son:
    .row.justify-content-center.mb-5
      .col-lg-3
        figure.mb-5(data-aos="fade-left")
          img(src='@/assets/curso/t1-i12.svg', alt='imagen decorativa')
      .col-lg-7
        ul.lista-ul(data-aos="fade-right")
          li 
            i.fas.fa-plane
            | Informar sobre cambios, demoras, cancelaciones o desvíos de la ruta acordada en la reserva, por el medio más rápido posible dentro de las 24 horas de antelación al vuelo. Si el pasajero ya se encuentra en el aeropuerto, en las áreas de atención se da la información necesaria y durante el vuelo también se suministra información por parte de la tripulación.
          li 
            i.fas.fa-plane
            | Se ofrecen las compensaciones por las afectaciones de acuerdo con la situación.
          li 
            i.fas.fa-plane
            | En caso de sobreventa se ofrece al pasajero viajar en otros horarios con ofrecimiento de beneficios de una compensación según políticas internas de la aerolínea como millas, bonos valor, tiquetes o lo establecido por el transportador.
          li 
            i.fas.fa-plane
            | Si la solicitud del pasajero es poner una PQRS se debe tomar la solicitud por escrito y tomar acción lo más pronto posible.
          li 
            i.fas.fa-plane
            | El pasajero también tiene derecho a realizar reclamación en las instancias que regulan el transporte aéreo en el país.


    .row.justify-content-center.mb-5
      .col-lg-12
        figure.mb-3
          img(src='@/assets/curso/t1-i13.svg', alt='infografia estructura proceso de reclamación')    
        figcaption Nota. <a href='https://bit.ly/36YkpOI' target='_blank'>https://bit.ly/36YkpOI</a>





  
</template>

<script>
export default {
  name: 'Tema1',
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
