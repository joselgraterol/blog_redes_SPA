// stylesss

let burger = document.querySelector("#burger");
let equis = document.querySelector("#equis");
let menu = document.querySelector("#navbar");
let span = document.querySelector("#span");
let overlay = document.querySelector(".overlay");




burger.addEventListener("click", () => {
    menu.classList.add("active");
    overlay.classList.add("active");
})

equis.addEventListener("click", function(){
    menu.classList.remove("active");
})


document.onclick = (e) => {
	if(e.target.id !== "navbar" && e.target.id !== "span" && e.target.id !== "burger"){
		menu.classList.remove("active");
		overlay.classList.remove("active");
		
	}
}




let routes = {};
let templates = {};

let app_div = document.getElementById('app');



function home() {
  let div = document.createElement('div');
  div.classList.add('page');
  div.innerHTML = `
    <section class="home">

        <div class="text">
            <h2>Redes de Computadoras</h2>
            <p>Conectando el mundo digital: ¡Explora, aprende y desbloquea el potencial de la conectividad informática!</p>
            <a href="#/about" class="btn" role="button">Ver Articulos</a>
        </div>

        <div class="image">
            <img src="https://dazzling-sprite-29c5b0.netlify.app/images/hero.svg" alt="">
        </div>

    </section>
  `;

  app_div.appendChild(div);
  
}



function about() {
  let div = document.createElement('div');
  div.classList.add('page');
  // div.innerHTML = `
  //   <h1>About</h1>
  //   <a href="#/about/products">Products</a>
  //   <a href="#/about/tags">Tags</a>
  // `;

  div.innerHTML = `
    
    <section class="bd-container">
    <h2>Artículos</h2>

      <div class="bd-grid-2 articulos_container">

        <div class="articulo_card">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad1.svg" alt="" class="articulo_img">
          <div class="card_content">
              <a href="#/about/products"><h3 class="card_name">Unidad I</h3></a>
              <span class="card_detail">Fundamentos Básicos de las Redes de Computadoras</span>    
          </div>
          <a href="#/about/products" class="button card__button view-details">Leer articulo</a>
        </div>

        <div class="articulo_card">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad2.svg" alt="" class="articulo_img">
          <div class="card_content">
          <a href="#/about/tags"><h3 class="card_name">Unidad II</h3></a>
              <span class="card_detail">Medios de Comunicación</span>    
          </div>
          <a href="#/about/tags" class="button card__button view-details">Leer articulo</a>
        </div>

        <div class="articulo_card">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad3.svg" alt="" class="articulo_img">
          <div class="card_content">
          <a href="#/about/3"><h3 class="card_name">Unidad III</h3></a>
              <span class="card_detail">Componentes de una Red</span>    
          </div>
          <a href="#/about/3" class="button card__button view-details">Leer articulo</a>
        </div>

        <div class="articulo_card">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad4.svg" alt="" class="articulo_img">
          <div class="card_content">
              <a href="#/about/4"><h3 class="card_name">Unidad IV</h3></a>
              <span class="card_detail">Clasificación de las Redes</span>    
          </div>
          <a href="#/about/4" class="button card__button view-details">Leer articulo</a>
        </div>

        <div class="articulo_card">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad5.png" alt="" class="articulo_img">
          <div class="card_content">
              <a href="#/about/5"><h3 class="card_name">Unidad V</h3></a>
              <span class="card_detail">Protocolos de las Redes</span>    
          </div>
          <a href="#/about/5" class="button card__button view-details">Leer articulo</a>
        </div>

        <div class="articulo_card">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad6.png" alt="" class="articulo_img">
          <div class="card_content">
              <a href="#/about/6"><h3 class="card_name">Unidad VI</h3></a>
              <span class="card_detail">Ancho de Banda y Tecnologias</span>    
          </div>
          <a href="#/about/6" class="button card__button view-details">Leer articulo</a>
        </div>

      </div>
    </section>

    `;

  app_div.appendChild(div);
  
}



// articulo 1

function aboutProducts() {
  let div = document.createElement('div');
  // div.innerHTML = '<h2>Products</h2>';
  div.innerHTML = `


    <div class="article-container">
      <section class="individual-article">

        <h2>Unidad I. Fundamentos Básicos de las Redes de Computadoras </h2>

        <div class="img-container-principal">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad1.svg" class="article_img">
        </div>

        <p class="text">Forouzan (2001; P. 4), define las redes como, “un conjunto de dispositivos conectados por enlaces de un medio físico. Un nodo puede ser una computadora, una impresora o cualquier otro dispositivo capaz de enviar y/o recibir datos por otros nodos de la red”. De esta forma podemos decir que las redes de computadoras son un conjunto de dos o más computadoras interconectadas entre sí con el fin de  intercambiar Información (comunicarse)  a través de un medio o canal</p>

        <h3>Comunicación</h3>

        <p class="text"> Es la acción consciente de intercambiar información entre dos o más participantes con el fin de transmitir o recibir información, es por esto que se define como un proceso esencial para la vida en la sociedad.</p>

        <h3>Elementos de la Comunicación</h3>
        <ul>
          <li>Emisor: Aquél que transmite la información (un individuo, un grupo o una máquina).</li>
          <li>Receptor: Aquél que recibe la información (un individuo, un grupo o una máquina).</li>
          <li>Código: Es el lenguaje que se utiliza para comunicarse entre el emisor y el receptor, debe ser entendible por ambos y debe poder  viajar a través del canal.</li>
          <li>Mensaje: Esta construido por los diferentes códigos que deben ser compartidos por las parte para ser la  comunicación posible.</li>
          <li>Canal: Medio que se utiliza para hacer llegar el mensaje.</li>
          <li>Feed-back: Este se genera cuando el receptor devuelve o responde el mensaje.</li>
        </ul>

        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/elecomunicacion.png" class="article_img">
        </div>

        <h3>Medios de Comunicación</h3>
        <p class="text">Es el canal o enlace físico entre los nodos o equipos  de una red a través  del cual es transmitida la información. Existen dos tipos de  medios de comunicación:</p>
        
        <ul>
          <li>Guiados: Son aquellos que utilizan un medio físico para transmitir los datos, como un cable de cobre o una fibra óptica. Estos medios ofrecen una mayor velocidad y seguridad en la transmisión de datos, pero tienen una limitación en cuanto a la distancia que pueden cubrir. Ejemplo: cable coaxial, fibra optica, cable par  trenzado.</li>
          <li>No Guiados: Son aquellos que utilizan ondas de radio para transmitir los datos, como en las redes inalámbricas. Estos medios ofrecen una mayor flexibilidad en cuanto a la movilidad de los dispositivos conectados en la red, pero pueden ser más susceptibles a la interferencia y a la pérdida de señal. Ejemplo:
          satelitales, microondas terrestre, ondas de radio, telefonía móvil celular, wI-fI, bluetooth, infrarrojo.</li>
        </ul>

        <p class="text">Para mayor información sobre los medios de comunicación, presione <a href="#/about/tags" class="aqui">aqui</a></p>

        

        <h3>Modos de Transmisión de Datos</h3>

        <ul>
          <li>Simplex: Este modo de transmisión permite que la información discurra en un solo sentido y de forma permanente, con esta formula es difícil la corrección de errores causados por deficiencias de línea. (un solo tiempo, una sola dirección).
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/simplex.png" class="article_img">
            </div>
          </li>

          <li>Half duplex o semi duplex: En este caso ambos extremos del sistema de comunicación cumplen funciones de transmisor y receptor, los datos se desplazan en ambos sentidos pero no simultáneamente (t1≠t2) ejemplo tenemos banda civil y  los Walkis Talkis.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/semiduplex.png" class="article_img">
            </div>
          </li>

          <li>Full dúplex:  en todo momento la comunicación puede ser en dos sentidos posibles y así pueden corregir los errores de manera instantánea y permanente. Se realiza en tiempos iguales.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/fullduplex.png" class="article_img">
            </div>
          </li>

          
        </ul>

        <h3>Formas de Transmisión de Datos</h3>

        <ul>
          <li>Serial: Es una forma de transmisión de datos en la que los bits de datos se transmiten uno a uno, en serie, a través de un solo canal de comunicación. En otras palabras, los datos se envían secuencialmente, uno después del otro, en lugar de enviarlos todos a la vez.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/serial.png" class="article_img">
            </div>
          </li>
          <li>Paralelo: una forma de transmisión de datos en la que múltiples bits de datos se transmiten simultáneamente a través de varios canales de comunicación. En otras palabras, los datos se envían juntos, en paralelo, en lugar de enviarlos uno después del otro. 
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/paralelo.png" class="article_img">
            </div>
          </li>
        </ul>

        <h4>Referencias</h4>
        <ul>
          <li><a href="https://www.twinkl.es/teaching-wiki/elementos-de-comunicacion" target="_blank">Elementos de comunicación</a></li>
		  <li><a href="https://darthgeekgx.wordpress.com/acerca-de/que-son-las-redes-de-computo-y-sus-diferentes-tipos/antecedentes-de-las-redes-de-computo/componentes-de-una-red-de-computo/medios-de-transmision-de-datos/#:~:text=Medios%20de%20transmisi%C3%B3n%20de%20datos%201%20DISPOSITIVOS%20DE,7%20GATEWAYS%20...%208%20M%C3%93DEMS%20...%20M%C3%A1s%20elementos"  target="_blank">Medios de transmision de datos</a></li>
		  <li><a href="https://www.redeszone.net/tutoriales/redes-cable/diferencias-full-half-duplex/"  target="_blank">Full duplex</a></li>
        </ul>


        <div class="volver"><a href="#/about"><i class="fa-solid fa-arrow-left-long"></i> Volver</a></div>
      
      </section>

      <div class="sidebar">

          <div class="box">
            <h3 class="title">Unidades</h3>
            <div class="unidades-sidebar">
                <a href="#/about/products">Unidad I</a>
                <a href="#/about/tags">Unidad II</a>
                <a href="#/about/3">Unidad III</a>
                <a href="#/about/4">Unidad IV</a>
                <a href="#/about/5">Unidad V</a>
                <a href="#/about/6">Unidad VI</a>
            </div>
          </div>

      </div>

    </div>

  `;
  app_div.appendChild(div);
}



function aboutTags() {
  let div = document.createElement('div');
  div.innerHTML = `
    <div class="article-container">
      <section class="individual-article">

        <h2>Unidad II. Medios de Comunicación</h2>

        <div class="img-container-principal">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad2.svg" class="article_img">
        </div>

        <p class="text">Los medios de comunicación son herramientas o canales que se utilizan para transmitir información, ideas o mensajes de un emisor a un receptor. Hay varios tipos de medios de comunicación, y se pueden clasificar en dos categorías principales: medios de comunicación guiados y no guiados.</p>

        <h3>Medios de Comunicación Guiados</h3>
        <p class="text">Los medios de comunicación guiados son aquellos que requieren de un medio físico para transmitir la información.</p>

        <h4>Cable Coaxial</h4>
        <p class="text">Es un cable utilizado para transportar señales eléctricas de alta frecuencia que posee dos conductores concéntricos, uno central llamado núcleo, encargado de llevar la información y uno exterior de aspecto tubular, llamado malla (blindaje)</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/coaxial.jpg" class="article_img">
        </div>

        <ul>
          <li>Cable coaxial para transmisión en banda ANCHA: Utilizado en transmisión de señales de televisión por cable, Esta categoría tiene una impedancia característica de 75 ohmios. El término banda ancha proviene del medio telefónico, y se refiere a frecuencias mayores a 4 kHz. Se nutren de la  tecnología patrón para envío de señales de televisión por cable y por ello pueden llegar a alcanzar los 450 MHz de ancho de banda para longitudes de 100 m.</li>

          <li>Cable Coaxial para transmisión en banda BASE: Son usados en redes de trabajo locales (LAN). Tienen una impedancia característica de 50 ohmios. En esta categoría se emplean dos tipos de cable: coaxial grueso  y coaxial fino.</li>

          <li>Cable coaxial grueso ("thick"): Inicialmente fue el cable más utilizado en las redes de área local Y aún se sigue usando en determinadas circunstancias (alto grado de interferencias). Trabaja en red 10 base 5.</li>

          <li>Cable coaxial fino ("thin"): Es más económico, flexible y sencillo de instalar. Propiedades de transmisión son sensiblemente peores que las del coaxial grueso. Trabaja en la red 10base2. Ha sido reemplazado por el cable de par trenzado. Actualmente se usa para la distribución de señales de audio/vídeo.</li>

          <div class="img-container">
            <img src="https://dazzling-sprite-29c5b0.netlify.app/images/coaxiales.jpg" class="article_img">
          </div>
        </ul>

        <h4>Cable Par Trenzado</h4>
        <p class="text">Es un tipo de conexión que tiene dos conductores eléctricos aislados y entrelazados de forma helicoidal para anular las interferencias de fuentes externas y diafonía de los cables adyacentes. Esto se hace ya que los alambres en paralelo forman una antena simple.</p>
        <br>
        <p class="text">ANSI/EIA/TIA es el estándar define diferentes categorías de cableado de par trenzado, cada una con diferentes especificaciones de rendimiento en términos de ancho de banda, velocidad de transmisión, interferencia y pérdida de señal. La elección de la categoría de cableado de par trenzado depende de las necesidades específicas de la aplicación.</p>

        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/partrenzado.png" class="article_img">
        </div>

        <p class="text">Existen varios tipos de cable de par trenzado que se utilizan en las redes de computadoras y en la industria de las telecomunicaciones. A continuación, se describen algunos de los tipos más comunes:</p>

        <ul>
          <li>Par trenzado sin blindaje (UTP): este tipo de cable de par trenzado no tiene ninguna protección o blindaje adicional y se utiliza comúnmente en redes de área local (LAN) para la conexión de dispositivos de red como computadoras, impresoras, routers y switches.</li>

          <li>Par trenzado con blindaje (STP): este tipo de cable de par trenzado tiene una capa de blindaje metálico para proteger la señal de interferencias y ruidos externos. Se utiliza comúnmente en redes de alta velocidad y en entornos con alta interferencia electromagnética, como en la industria de la aviación y en aplicaciones militares.</li>

          <li>Par trenzado de pares múltiples (MPT): este tipo de cable de par trenzado tiene varios pares trenzados en una sola cubierta, lo que lo hace ideal para la conexión de múltiples dispositivos de red en una sola línea.</li>

          <li>Par trenzado con pantalla global (FTP): este tipo de cable de par trenzado tiene una capa de blindaje metálico que cubre todos los pares trenzados, lo que proporciona una protección adicional contra interferencias y ruidos externos.</li>
          
          <div class="img-container">
            <img src="https://dazzling-sprite-29c5b0.netlify.app/images/partrenzados.jpg" class="article_img">
          </div>

          <li>Par trenzado conector RJ45 y jack couple hembra: Es una interfaz física comúnmente utilizada para  conectar redes de cableado estructurado atendiendo el estándar de la EIA/TIA/ANSI para 568.
          <div class="img-container">
            <img src="https://dazzling-sprite-29c5b0.netlify.app/images/hembra.png" class="article_img">
          </div>

          </li>

        </ul>

        <h4>Fibra Óptica</h4>
        <p class="text">Es medio de transmisión físico por el cual se puede transmitir información a gran distancia. Funciona con  pequeños filamentos cristalinos  por el cual se pueden enviar haces de luz de un punto a otro.  Estas pueden ser: Multimodo y Monomodo.</p>
        <ul>
          <li>Multimodo: Se denomina así porque hay múltiples rayos de luz de una fuente luminosa que se mueven a través del núcleo por caminos distintos.</li>

          <li>Monomodo: Permite propagar un tipo de modo de luz a la vez, tiene normalmente un diámetro de núcleo estrecho de 8 a 10 µm (micrómetros), que puede propagarse a una longitud de onda de entre 1310 nm y 1550 nm.</li>

          <div class="img-container">
            <img src="https://dazzling-sprite-29c5b0.netlify.app/images/fibra.jpg" class="article_img">
          </div>

        </ul>


        <h3>Medios de Comunicación no Guiados</h3>
        <p class="text">Los medios de comunicación no guiados, por otro lado, son aquellos que no requieren un medio físico para transmitir la información. Algunos ejemplos de medios de comunicación no guiados son:</p>

        <ul>
          <li>Satelitales: En las comunicaciones por satélite, las ondas electromagnéticas se transmiten gracias a la presencia en el espacio de satélites artificiales situados en órbita alrededor de la Tierra. Su principal función es la de amplificar la señal, corregirla y retransmitirla a una o más antenas ubicadas en la tierra. 3G – 30GHZ (SHF).
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/satelite.png" class="article_img">
            </div>
          </li>

          <li>Microondas Terrestres: Es cuando se provee conectividad entre dos sitios en línea de vista. Se usa un equipo de radio con frecuencias de portadora por encima de 1 Ghz.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/micro.png" class="article_img">
            </div>
          </li>

          <li>Ondas de radiofrecuencia: Son ondas omnidireccionales que pueden reflejarse en el mar u otros objetos. Trabaja en el orden de 300 khz a 3Mhz.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/radio.png" class="article_img">
            </div>
          </li>

          <li> Telefonía Móvil Celular: La telefonía móvil celular es un servicio de conexión a la red telefónica pública mediante una red inalámbrica, en la cual los usuarios tienen la posibilidad de originar y recibir llamadas telefónicas.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/telefono.png" class="article_img">
            </div>
          </li>

          <li> WIFI:  Es un sistema de envió de datos sobre redes de ordenadores que utilizan ondas de radio en lugar de cables, este sistema esta presente en: Ordenadores Personales, Consolas de videojuegos, Smartphone Reproductores de audio digital.

            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/wifi.png" class="article_img">
            </div>
          </li>

          <li> Bluetooth:  Se utiliza principalmente en un gran número de productos como teléfonos, impresoras, módems y auriculares. Su uso es adecuado cuando puede haber dos o más dispositivos en un área reducida sin grandes necesidades de ancho de banda.

            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/blue.png" class="article_img">
            </div>
          </li>

          <li> Infrarrojo: Es un enlace punto a punto donde el transmisor concentra toda su potencia en una pequeña región del espacio y es captada por un receptor generalmente LED.

            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/infra.png" class="article_img">
            </div>
          </li>

        </ul>
        
      
        
        <h4>Referencias</h4>
        <ul>
          <li><a href="https://darthgeekgx.wordpress.com/acerca-de/que-son-las-redes-de-computo-y-sus-diferentes-tipos/antecedentes-de-las-redes-de-computo/componentes-de-una-red-de-computo/medios-de-transmision-de-datos/#:~:text=Medios%20de%20transmisi%C3%B3n%20de%20datos%201%20DISPOSITIVOS%20DE,7%20GATEWAYS%20...%208%20M%C3%93DEMS%20...%20M%C3%A1s%20elementos"  target="_blank">Medios de transmision de datos</a></li>
		  
		  <li><a href="https://core.ac.uk/download/pdf/80532101.pdf"  target="_blank">Medios de comunicación</a></li>
        </ul>
        

        <div class="volver"><a href="#/about"><i class="fa-solid fa-arrow-left-long"></i> Volver</a></div>
      
      </section>

      <div class="sidebar">

          <div class="box">
            <h3 class="title">Unidades</h3>
            <div class="unidades-sidebar">
                <a href="#/about/products">Unidad I</a>
                <a href="#/about/tags">Unidad II</a>
                <a href="#/about/3">Unidad III</a>
                <a href="#/about/4">Unidad IV</a>
                <a href="#/about/5">Unidad V</a>
                <a href="#/about/6">Unidad VI</a>
            </div>
          </div>

      </div>

    </div>
  `;
  app_div.appendChild(div); 
}

function unidad3() {
  let div = document.createElement('div');
  // div.innerHTML = '<h2>Tags</h2>';
  // div.innerHTML = '<h2>Articulo 2</h2>';
  div.innerHTML = `
    <div class="article-container">
      <section class="individual-article">

        <h2>Unidad III. Componentes de una Red</h2>

        <div class="img-container-principal">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad3.svg" class="article_img">
        </div>

        <p class="text">Los componentes de una red o dispositivos de conexión son los equipos físicos necesarios para la interacción y comunicación del hardware de una red informática. Se utilizan para conectar un ordenador y otros dispositivos para que puedan compartir archivos y recursos. Cada dispositivo cuenta con características de dispositivos de conexión de alcance por separado, que varían de acuerdo a los escenarios y requisitos de la red.</p>

        <h3>Funciones</h3>
        <ul>
          <li>Transmisión y recepción de datos.</li>
          <li>Acceso al conector.</li>
          <li>Lleva a cabo la conversión de serial a paralelo.</li>
          <li>Convierte los datos enviados por el ordenador a un  formato que puede ser utilizado por el cable de red.</li>
          <li>Codificación y decodificación de la señal.</li>
        </ul>

        <p class="text">Algunos de los dispositivos de red o dispositivos de conexión que suelen usarse más están listados de la siguiente forma:</p>

        <h3>Targeta de Red</h3>
        <p class="text">La targeta de red es un dispositivo electrónico que hace posible la conexión entre ordenadores o de un equipo a internet. Cuando hablamos de ordenadores, no solo nos referimos a equipos sobremesa como los que habitualmente nos encontramos en las oficinas, sino también a portátiles o servidores.</p>

        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/interfaz.jpg" class="article_img">
        </div>

        <ul>

         <li>Tarjeta de Ethernet: Es la clase  más utilizada, estas tarjetas incluyen un puerto con el estándar 8P8C y el conector RJ45. Aquí, se debe introducir el cable que proviene del router. En la actualidad, permiten conexiones BNC, AUI, MII y GMII...
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/ether.png" class="article_img">
            </div>
          </li>

          <li>Tarjeta de red ARCNET (Attached Resource Computer Network): . Se crearon en los años 80 y cayeron en desuso porque tenían una velocidad de conexión máxima muy baja en comparación con las Ethernet. Se conectan mediante un cable coaxial y se emplean en la industria para la automatización de procesos.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/arc.png" class="article_img">
            </div>
          </li>


          <li>Tarjetas de red inalámbricas: Son  tarjetas para expansión sin necesidad  de cables, en la actualidad son las  más populares dada su flexibilidad, eficiencia y productividad. Funcionan a través de wifi y hay dos tipos, el primero es externo y se conecta a un BUS vacío y a la placa madre. El segundo viene integrado de fábrica. Se debe comprobar el tipo de estándar para el que se diseñaron las tarjetas. El IEEE 802.11b alcanza más de 400 metros y funciona a 11 MB/s. El IEEE 802.11g tiene el mismo alcance y su velocidad es de 54 MB/s. Finalmente, el IEEE 802.11n presenta una velocidad de 800 MB/s y alcanza los 800 metros.

            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/redina.png" class="article_img">
            </div>
          </li>

          <li>Tarjeta de red óptica: se define por su  velocidad de transmisión, utiliza  conectores: fc, fddi, st, lc, sc y sc-duplex.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/optica.png" class="article_img">
            </div>
          </li>

          <li>Tarjeta de red USB: Se adaptan a una entrada USB, por lo tanto estas incluyen una pequeña antena para captar la red wifi.
            <div class="img-container">
              <img src="https://dazzling-sprite-29c5b0.netlify.app/images/usb.jpg" class="article_img">
            </div>
          </li>

        </ul>

        <h3>Servidores</h3>
        
        <p class="text"> Son unidades informáticas u ordenadores que proporcionan diversos  servicios a computadoras conectadas con ellas a través de una red. Asimismo, estan al servicio de personas llamadas  clientes con el fin de suministrar a estos todo tipo de información.</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/server.jpg" class="article_img">
        </div>

        <p class="text">En la actualidad hay una gran cantidad de diferentes tipos de servidores, a continuación se muestran algunos:.</p>

        <ul>
          <li>Servidor proxy: El servidor proxy actúa como intermediario entre un cliente y otro servidor. Puede mejorar la seguridad, filtrar contenido o mejorar el rendimiento al almacenar datos en caché. Los servidores proxy son comúnmente utilizados para controlar el acceso a Internet en entornos corporativos y educativos.</li>

          <li>Servidor web: El servidor web aloja sitios web y los hace accesibles a través de Internet. Los servidores web procesan las solicitudes de los navegadores de los usuarios y devuelven la información necesaria para visualizar el sitio web. Estos servidores son fundamentales para cualquier actividad en línea, desde el comercio electrónico hasta las noticias y los blogs.</li>

          <li>Servidor de base de datos: Un servidor de base de datos gestiona las bases de datos y proporciona acceso a grandes cantidades de información estructurada. Los servidores de bases de datos son esenciales para las empresas, ya que permiten almacenar, gestionar y analizar grandes volúmenes de datos.</li>

          <li>Servidor de correo: El servidor de correo es encargado de enviar, recibir y almacenar correos electrónicos. Puede manejar tanto la comunicación interna de una organización como la comunicación externa. Empresas de todos los tamaños utilizan servidores de correo para facilitar la comunicación interna y externa.</li>

          <li>Servidor Groupware: Un servidor groupware es un tipo de servidor que facilita la colaboración y el trabajo en equipo en un entorno digital. Este tipo de servidor proporciona las herramientas necesarias para que los equipos puedan comunicarse, coordinarse y colaborar de manera eficaz, independientemente de su ubicación geográfica.</li>

          <li>Servidor de seguridad: Un servidor de seguridad protege la red de amenazas externas. Puede incluir un firewall para bloquear tráfico no deseado, un sistema de detección de intrusos para identificar posibles amenazas, y un sistema de prevención de intrusos para bloquear dichas amenazas. Los servidores de seguridad son vitales para proteger la información y los recursos de la empresa.</li>

          <div class="img-container">
            <img src="https://dazzling-sprite-29c5b0.netlify.app/images/allserver.png" class="article_img">
          </div>
        </ul>


        <h3>Modem</h3>
        <p class="text">Un módem es un dispositivo que conecta la red doméstica con el proveedor  de servicios de Internet, o ISP. . La palabra MÓDEM es contracción de los  términos modulación y demodulación y opera mediante el paso de los datos  digitales a transmitir a analógicos y en el equipo receptor efectúa el proceso  inverso.</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/modem.png" class="article_img">
        </div>

        <h3>Repetidor o Amplificador</h3>
        <p class="text">Este dispositivo sólo amplifica la señal de la red y es útil en las redes que se extienden grandes distancias. En la actualidad los repetidores  se han vuelto muy populares a nivel de redesinalámbricas o WI-FI. Dentro de sus principales funciones este recibe una señal débil o de bajo nivel y la retransmite a una potencia o nivel más alto, de tal modo que se puedan cubrir distancias más largas sin degradación o con una degradación tolerable. Además, Conectan a nivel físico dos intranets, o dos segmentos de intranet, al igual que permiten resolver problemas de limitación de distancias en un segmento de intranet</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/repetidor.png" class="article_img">
        </div>

        <h3>Concentrador o Hub</h3>
        <p class="text">Es un elemento de hardware que permite concentrar el tráfico de red que  proviene de múltiples hosts y regenerar la señal.Presenta una determinada cantidad de puertos por lo que se conoce como repetidor multipuertos</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/hub.png" class="article_img">
        </div>

        <h3>Puente o Bridge</h3>
        <p class="text">Es un dispositivo de hardware utilizado para conectar dos redes, Los Bridge  actúan a nivel de enlace de datos. Este interconecta segmentos de red (o divide una red en segmentos) haciendo la  transferencia de datos de una red hacia otra con base en la dirección física de  destino de cada paquete. Los bridges normalmente tienen  un número pequeño de interfaces  (de dos a cuatro).</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/puente.png" class="article_img">
        </div>

        <h3>Conmutador o Switch</h3>
        <p class="text">Es un dispositivo digital lógico de interconexión de redes de  computadoras que opera en la capa de enlace de datos del modelo OSI. Su principal propósito es la conectividad, haciendo que la transmisión  de datos sea más eficiente. El switch conmuta paquetes desde los puertos (las interfaces) de  entrada hacia los puertos de salida, suministrando a cada puerto el  ancho de banda total. Pasando datos de un segmento a otro de acuerdo con la dirección MAC  de destino de las tramas en la red.</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/switch.jpg" class="article_img">
        </div>

        <h3>Enrutador o Router</h3>
        <p class="text">Es un dispositivo que proporciona conectividad a nivel de red. Su  función principal consiste en enviar o encaminar paquetes de datos de  una red a otra, es decir, interconectar subredes, entendiendo por subred  un conjunto de máquinas IP que se pueden comunicar sin la intervención  de un router y que por tanto tienen prefijos de red distintos. Dentro de sus funciones principales tenemos que: Permite la conexión a la LAN desde otras redes, se puede conectar con redes WAN, permite la conexión ADSL permitiendo, trabaja con direcciones lógicas, cuando los datos se presenta en una de las líneas, el router lee la información de dirección en el paquete para determinar su destino final.</p>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/router.png" class="article_img">
        </div>

        <h4>Referencias</h4>
        <ul>
          <li><a href="https://www.tokioschool.com/noticias/componentes-de-redes/" target="_blank">Componentes de una red</a></li>
		  <li><a href="https://www.profesores.frc.utn.edu.ar/sistemas/ingcura/archivos_com/componentes.asp" target="_blank">Componentes de redes</a></li>
        </ul>

        <div class="volver"><a href="#/about"><i class="fa-solid fa-arrow-left-long"></i> Volver</a></div>
      
      </section>

      <div class="sidebar">

          <div class="box">
            <h3 class="title">Unidades</h3>
            <div class="unidades-sidebar">
                <a href="#/about/products">Unidad I</a>
                <a href="#/about/tags">Unidad II</a>
                <a href="#/about/3">Unidad III</a>
                <a href="#/about/4">Unidad IV</a>
                <a href="#/about/5">Unidad V</a>
                <a href="#/about/6">Unidad VI</a>
            </div>
          </div>

      </div>

    </div>
  `;
  app_div.appendChild(div); 
}

function unidad4() {
  let div = document.createElement('div');
  // div.innerHTML = '<h2>Tags</h2>';
  // div.innerHTML = '<h2>Articulo 2</h2>';
  div.innerHTML = `
    <div class="article-container">
      <section class="individual-article">

        <h2>Unidad IV. Clasificación de las Redes</h2>

        <div class="img-container-principal">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad4.svg" class="article_img">
        </div>

        <p class="text">Las redes pueden clasificarse según su administración, alcance y tipologia.</p>

        <h3>Según su Administración</h3>
        <ul>
          <li>Redes públicas: son redes abiertas al público en general y son administradas por proveedores de servicios de telecomunicaciones o empresas de Internet. Estas redes pueden ser utilizadas por cualquier persona que tenga acceso a ellas y no están limitadas a un solo usuario o grupo de usuarios. Ejemplos de redes públicas incluyen la Internet pública y las redes de telefonía móvil.</li>

          <li>Redes privadas: son redes que se utilizan dentro de una organización o empresa específica y son administradas por el personal de TI de la organización. Estas redes son utilizadas para compartir información y recursos dentro de la organización y no están abiertas al público en general. Ejemplos de redes privadas incluyen las redes de área local (LAN) utilizadas en empresas y organizaciones gubernamentales.</li>

          <li>Redes híbridas: son redes que combinan elementos de redes públicas y privadas. Estas redes son administradas por una organización, pero utilizan infraestructura de red pública para conectar diferentes ubicaciones geográficas. Ejemplos de redes híbridas incluyen las redes de área amplia (WAN) que utilizan conexiones de Internet pública para conectar diferentes sucursales de una empresa.</li>
        </ul>

        <h3>Según su Alcance</h3>
        <ul>
          <li>PAN (Personal Area Network): La Red de Área Personal se refiere a una red de dispositivos cercanos entre sí, generalmente dentro de un área de unos pocos metros. Ejemplos comunes incluyen la conexión de un teléfono móvil a un auricular, o la conexión de un ratón inalámbrico a una computadora portátil.</li>

          <li>LAN (Local Area Network): La Red de Área Local  se refiere a una red que conecta dispositivos en un área geográfica limitada, como una oficina, un edificio o un campus universitario. Las LAN son propiedad y están gestionadas por una organización y se utilizan para compartir recursos como impresoras, archivos y aplicaciones. Ejemplos de tecnologías de LAN incluyen Ethernet y Wi-Fi.</li>

          <li>MAN (Metropolitan Area Network): La Red de Área Metropolitana se refiere a una red que cubre una ciudad o una región metropolitana. Las MAN se utilizan para interconectar redes LAN en diferentes edificios o lugares dentro de una zona geográfica. Ejemplos de tecnologías de MAN incluyen el protocolo de radio de banda ancha (WiMAX) y las redes de área metropolitana definidas por software (SD-MAN).</li>

          <li>CAN (Campus Area Network): La Red de Área de Campus se refiere a una red que interconecta redes LAN en diferentes edificios o ubicaciones dentro del mismo campus universitario o corporativo. Las CAN son similares a las MAN, pero con un alcance geográfico más limitado.</li>

          <li>WAN (Wide Area Network): La Red de Área Amplia se refiere a una red que abarca distancias geográficas más amplias, como ciudades, estados, países o incluso continentes. Las WAN se utilizan para conectar dispositivos en diferentes ubicaciones geográficas y suelen estar formadas por varias redes LAN interconectadas. Ejemplos de tecnologías de WAN incluyen el protocolo de Internet (IP), Frame Relay, ATM, MPLS y las redes de área extensa definidas por software (SD-WAN).</li>

          <li>WLAN  (Wireless Local Area Network): La Red de Área Local Inalámbrica se refiere a una red LAN que utiliza tecnología inalámbrica para conectar dispositivos en un área geográfica limitada, como una oficina o un edificio. Ejemplos de tecnologías de WLAN incluyen Wi-Fi y Bluetooth.</li>

          <li>VLAN (Virtual Local Area Network): La Red de Área Local Virtual se refiere a una red LAN que se divide en varias redes lógicas a través del uso de software. Las VLAN se utilizan para mejorar la seguridad y la eficiencia de la red, ya que permiten a los administradores de red crear grupos lógicos de dispositivos que pueden comunicarse entre sí de forma segura y eficiente.</li>
        </ul>


        <h3>Según su Tipologia</h3>
        <div class="img-container">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/tipologia.png" class="article_img">
        </div>

        <ul>
          <li>Redes en estrella: en una red en estrella, cada dispositivo está conectado a un nodo central, que actúa como un punto de concentración para la comunicación. Los dispositivos no están directamente conectados entre sí, sino que se comunican a través del nodo central. Este tipo de red es común en entornos de oficina y es fácil de administrar y solucionar problemas. Sin embargo, si el nodo central falla, toda la red puede verse afectada.</li>

          <li>Redes en bus: en una red en bus, todos los dispositivos están conectados a un medio de transmisión común, como un cable en el que se transmiten los datos. Los datos se transmiten en ambas direcciones a lo largo del cable, y cada dispositivo recibe solo los datos destinados a él. Este tipo de red es económico y fácil de instalar, pero puede ser vulnerable a fallos si el cable falla.</li>

          <li>Redes en anillo: en una red en anillo, cada dispositivo está conectado a otros dos dispositivos, creando así un anillo de dispositivos. Los datos se transmiten en una dirección a lo largo del anillo, y cada dispositivo recibe los datos y los envía al siguiente dispositivo en el anillo. Este tipo de red es eficiente en cuanto a la utilización del ancho de banda, pero puede ser vulnerable a fallos si un dispositivo falla.</li>

          <li>Redes en árbol: en una red en árbol, los dispositivos se organizan en una jerarquía de ramas y subramas que se extienden desde un nodo raíz. Los datos se transmiten desde el nodo raíz a través de las ramas y subramas hasta los dispositivos finales. Este tipo de red es escalable y permite un control centralizado, pero puede ser menos eficiente en cuanto a la utilización del ancho de banda.</li>

          <li>Redes en malla: en una red en malla, cada dispositivo está conectado directamente a todos los demás dispositivos de la red, creando así una red completamente conectada. Los datos pueden ser transmitidos entre dispositivos de forma redundante, lo que hace que esta red sea muy resistente a fallos y garantiza una alta disponibilidad. Sin embargo, esta red puede ser costosa de implementar y administrar.</li>

          <li>Redes en híbrido: es una combinación de dos o más topologías de red diferentes. Por ejemplo, una red en estrella y en bus combinada puede crear una red en estrella extendida, que combina la facilidad de administración de una red en estrella con la escalabilidad de una red en bus.</li>
        </ul>

		  <h4>Referencias</h4>
				<ul>
				  <li><a href="https://www.ionos.es/digitalguide/servidores/know-how/los-tipos-de-redes-mas-conocidos/#:~:text=Local%20Area%20Networks%20(LAN)%20o,o%20red%20de%20%C3%A1rea%20global" target="_blank">Tipos de redes</a></li>
				  
				  <li><a href="https://www.netinkst.com/notas/redesit.html" target="_blank">Clasificación de las redes</a></li>
				</ul>


       <div class="volver"><a href="#/about"><i class="fa-solid fa-arrow-left-long"></i> Volver</a></div>
      
      </section>

      <div class="sidebar">

          <div class="box">
            <h3 class="title">Unidades</h3>
            <div class="unidades-sidebar">
                <a href="#/about/products">Unidad I</a>
                <a href="#/about/tags">Unidad II</a>
                <a href="#/about/3">Unidad III</a>
                <a href="#/about/4">Unidad IV</a>
                <a href="#/about/5">Unidad V</a>
                <a href="#/about/6">Unidad VI</a>
            </div>
          </div>

      </div>

    </div>
  `;
  app_div.appendChild(div); 
}

function unidad5() {
  let div = document.createElement('div');
  // div.innerHTML = '<h2>Tags</h2>';
  // div.innerHTML = '<h2>Articulo 2</h2>';
  div.innerHTML = `
    <div class="article-container">
      <section class="individual-article">

        <h2>Unidad V. Protocolos de las Redes</h2>

        <div class="img-container-principal">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad5.png" class="article_img">
        </div>

        <p class="text">Un protocolo de red es un conjunto de reglas y procedimientos que rigen la comunicación entre dispositivos en una red de computadoras. Los protocolos de red establecen estándares para la transmisión de datos, la administración de redes y la comunicación entre dispositivos. Los protocolos de red pueden incluir estándares para la transmisión de datos, como el Protocolo de Control de Transmisión (TCP) y el Protocolo de Internet (IP), que se utilizan ampliamente en Internet y en redes empresariales. Los protocolos de red son esenciales para garantizar que los dispositivos de la red puedan comunicarse entre sí de manera efectiva y eficiente. Sin protocolos de red, los dispositivos no tendrían una forma estandarizada de comunicarse, lo que dificultaría la creación de redes y la interoperabilidad entre dispositivos.</p>

        <h3>Modelo OSI</h3>
		
		 <p class="text">El modelo OSI (Open Systems Interconnection) es un modelo de referencia para la comunicación entre dispositivos en una red de computadoras. Fue desarrollado por la Organización Internacional de Normalización (ISO) en 1984 y se considera un modelo teórico que describe cómo deben funcionar las redes de computadoras, independientemente de su tecnología subyacente. El modelo OSI se divide en siete capas, cada una de las cuales tiene una función específica en el proceso de comunicación entre dispositivos. Estas capas son las siguientes:</p>
		
        <ul>
          <li>Capa física: Esta capa se encarga de la transmisión de datos a través del medio físico de la red, como cables de cobre, fibra óptica o señales inalámbricas.</li>
		  
		  <li>Capa de enlace de datos: Esta capa se encarga de la transmisión de datos entre dispositivos directamente conectados en la red. Esta capa también se encarga de la detección de errores en la transmisión de datos y su corrección.</li>
		  
		  <li>Capa de red: Esta capa se encarga de la transmisión de datos a través de múltiples redes. Esta capa utiliza protocolos de enrutamiento para determinar la ruta más eficiente para que los datos viajen desde el origen hasta el destino.</li>
		  
		  <li>Capa de transporte: Esta capa se encarga de la transferencia de datos entre dispositivos finales en la red. Esta capa utiliza protocolos de transporte como TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) para garantizar que los datos se transmitan de manera confiable y eficiente.</li>
		  
		  <li>Capa de sesión: Esta capa se encarga de establecer y mantener sesiones de comunicación entre dispositivos en la red. Esta capa también maneja la autenticación y el control de acceso a la red.</li>
		  
		  <li> Capa de presentación: Esta capa se encarga de la representación de datos en un formato que pueda ser entendido por los dispositivos en la red. Esta capa también se encarga de la compresión y el cifrado de datos.</li>
		  
		  <li>Capa de aplicación: Esta capa se encarga de proporcionar servicios de red a las aplicaciones de software en los dispositivos finales. Esta capa incluye protocolos como HTTP, FTP y SMTP.</li>
        </ul>
		
		<h3>Modelo TCP/IP</h3>
		
		 <p class="text">El modelo TCP/IP es un modelo de referencia para la comunicación de redes que se utiliza ampliamente en Internet y en redes empresariales. El modelo se basa en dos protocolos principales: el Protocolo de Control de Transmisión (TCP) y el Protocolo de Internet (IP). El modelo TCP/IP se divide en cuatro capas, cada una de las cuales se encarga de una función específica en la comunicación de red. Estas capas son:</p>
		 
        <ul>
          <li>Capa de acceso a la red: esta capa se encarga de la transmisión de datos a través de la red física, como cables, fibra óptica, señales inalámbricas, etc. Esta capa utiliza protocolos como Ethernet, Wi-Fi, y Bluetooth.</li>
		  
		  <li>Capa de Internet: esta capa se encarga del enrutamiento de los paquetes de datos a través de la red. Esta capa utiliza el Protocolo de Internet (IP) para identificar y enrutar los paquetes de datos a través de la red.</li>
		  
		  <li>Capa de transporte: esta capa se encarga de la transferencia de datos de extremo a extremo. Esta capa utiliza el Protocolo de Control de Transmisión (TCP) para garantizar que los datos se entreguen de manera confiable y ordenada.</li>
		  
		  <li>Capa de aplicación: esta capa se encarga de la comunicación entre aplicaciones y servicios en la red. Esta capa utiliza una variedad de protocolos de aplicación, como el Protocolo de Transferencia de Archivos (FTP), el Protocolo Simple de Correo (SMTP), el Protocolo de Transferencia de Hipertexto (HTTP), etc.</li>
		  
        </ul>
		
		<h3>Modelos de Comunicación</h3>
		<h5>Par a Par</h5>
        
		  <p class="text">El modelo de comunicación de par a par, también conocido como modelo P2P, es un modelo de red en el que los dispositivos están conectados directamente entre sí, sin la necesidad de un servidor centralizado. En este modelo, cada dispositivo en la red actúa como un cliente y un servidor al mismo tiempo, lo que permite que los recursos y servicios se compartan entre los dispositivos de la red.</p>
		  <br>
		  <p class="text">El modelo P2P se utiliza en una amplia variedad de aplicaciones, incluyendo el intercambio de archivos, la transmisión de video en línea, la mensajería instantánea, la telefonía IP y otros servicios de comunicación. Los sistemas P2P son particularmente útiles en situaciones en las que se requiere la transmisión de grandes cantidades de datos y en las que se desea evitar la sobrecarga de un servidor centralizado.</p>
		  
		  <div class="img-container">
			<img src="https://www.gta.ufrj.br/ensino/eel878/redes1-2018-1/trabalhos-v1/p2p/images/p2p_model.png" class="article_img">
		  </div>
		  
		  <h5>Encapsulamiento</h5>
		  <p class="text">El encapsulamiento es un proceso en el que los datos se envuelven en un paquete que contiene información adicional para su transmisión a través de una red. El paquete encapsulado incluye información sobre el origen y el destino de los datos, así como información de control para garantizar que los datos se transmitan de manera confiable y eficiente. El proceso de encapsulamiento se realiza en cada capa del modelo de referencia OSI o TCP/IP. A medida que los datos se mueven a través de la pila de protocolos, se agregan encabezados y pies de página adicionales al paquete de datos original. Estos encabezados y pies de página proporcionan información adicional sobre los datos y ayudan a asegurar que se transmitan de manera precisa y eficiente.</p>
		  
		   <div class="img-container">
			<img src="http://4.bp.blogspot.com/-pK6gk35ahmk/U9b_C_PbxYI/AAAAAAAAAGI/zAjeLwxiC4k/s1600/encapsulamientoEX.png" class="article_img">
			</div>
		  
		  <h5>Cliente/Servidor</h5>
		  <p class="text">El modelo cliente/servidor es un modelo de arquitectura de red en el que los dispositivos de la red se dividen en dos categorías: clientes y servidores. En este modelo, los servidores proporcionan servicios o recursos a los clientes, quienes solicitan y utilizan estos servicios o recursos. Los servidores son dispositivos que proporcionan servicios o recursos a los clientes. Estos pueden incluir servidores de archivos, servidores de correo electrónico, servidores web y servidores de bases de datos.</p>
		  <br>
		  <p class="text">Los servidores suelen estar diseñados para proporcionar servicios de manera constante y confiable, y a menudo son dispositivos de alta capacidad con una gran cantidad de almacenamiento y procesamiento. Los clientes, por otro lado, son dispositivos que solicitan y utilizan los servicios o recursos proporcionados por los servidores. Los clientes pueden ser dispositivos de escritorio, portátiles, teléfonos móviles o cualquier otro dispositivo que pueda conectarse a la red y utilizar los servicios proporcionados por los servidores.</p>
		  
			<div class="img-container">
				<img src="https://reactiveprogramming.io/_next/image?url=%2Ffigures%2Fcliente-servidor.png&w=640&q=75" class="article_img">
			</div>
		  
		  <h5>Dominios Colision y Broadcast</h5>
		  <p class="text">Un dominio de colisión es un grupo de dispositivos de red que comparten un medio de transmisión, como un cable o un segmento de red inalámbrica. En un dominio de colisión, los paquetes de datos enviados por un dispositivo pueden colisionar con los paquetes enviados por otros dispositivos en el mismo medio de transmisión. Esto puede causar errores de transmisión y retrasos en la entrega de los datos. Por otra parte, un broadcast es un mensaje enviado a todos los dispositivos en una red. </p>
		  <br>
		  <p class="text">Este tipo de mensaje puede ser útil para enviar información de control o notificaciones importantes a todos los dispositivos de la red. Sin embargo, los mensajes de broadcast también pueden ser un problema si se utilizan en exceso, ya que pueden consumir ancho de banda y reducir el rendimiento de la red. Por lo tanto, es importante utilizar los mensajes de broadcast de manera cuidadosa y limitada.</p>
		  
        <div class="img-container">
          <img src="http://2.bp.blogspot.com/-pmJt8sNTN5M/UDy2lcO_zDI/AAAAAAAADcQ/EGA_D-p-Zs4/s400/Captura.PNG" class="article_img">
        </div>
		

	  <h4>Referencias</h4>
			<ul>
			   <li><a href="https://www.redeszone.net/tutoriales/internet/protocolos-basicos-redes/" target="_blank">Protocolos  basicos de las redes</a></li>
			   
			   <li><a href="https://www.kio.tech/blog/data-center/protocolos-de-comunicaci%C3%B3n-de-redes" target="_blank">Protocolos de redes</a></li>
			   
			</ul>

        <div class="volver"><a href="#/about"><i class="fa-solid fa-arrow-left-long"></i> Volver</a></div>
      
      </section>

      <div class="sidebar">

          <div class="box">
            <h3 class="title">Unidades</h3>
            <div class="unidades-sidebar">
                <a href="#/about/products">Unidad I</a>
                <a href="#/about/tags">Unidad II</a>
                <a href="#/about/3">Unidad III</a>
                <a href="#/about/4">Unidad IV</a>
                <a href="#/about/5">Unidad V</a>
                <a href="#/about/6">Unidad VI</a>
            </div>
          </div>

      </div>

    </div>
  `;
  app_div.appendChild(div); 
}

function unidad6() {
  let div = document.createElement('div');
  // div.innerHTML = '<h2>Tags</h2>';
  // div.innerHTML = '<h2>Articulo 2</h2>';
  div.innerHTML = `
    <div class="article-container">
      <section class="individual-article">

        <h2>Unidad VI. Ancho de Banda y Tecnologias</h2>

        <div class="img-container-principal">
          <img src="https://dazzling-sprite-29c5b0.netlify.app/images/unidad6.png" class="article_img">
        </div>

        <p class="text">El ancho de banda es una medida de la cantidad de datos que pueden ser transmitidos a través de una conexión de red en un período de tiempo determinado. En general, se mide en bits por segundo (bps), kilobits por segundo (Kbps), megabits por segundo (Mbps) o gigabits por segundo (Gbps).El ancho de banda se refiere a la capacidad máxima de una conexión de red para transmitir datos, y está determinado por varios factores, como la velocidad de transmisión de los dispositivos de red, el ancho de banda del medio de transmisión y la cantidad de tráfico en la red.</p>
		<br>
		<p class="text">Las características del ancho de banda incluyen la velocidad de transmisión, la latencia y la capacidad de la red. La velocidad de transmisión se refiere a la cantidad de datos que se pueden transmitir en un período de tiempo determinado, mientras que la latencia se refiere al tiempo que tarda un paquete de datos en viajar desde su origen hasta su destino. La capacidad de la red se refiere a la cantidad máxima de datos que pueden ser transmitidos a través de la red en un período de tiempo determinado.</p>
		<br>
		<p class="text">De esta manera, la medición del ancho de banda se realiza mediante pruebas de velocidad de Internet o usando herramientas de monitoreo de red. Las pruebas de velocidad de Internet miden la velocidad de transmisión de datos entre un dispositivo y un servidor remoto, mientras que las herramientas de monitoreo de red miden la cantidad de tráfico en la red y la capacidad de la red.</p>
		<br>
		<p class="text">Por otra parte, a tasa de transferencia se refiere a la cantidad de datos que se pueden transmitir de un dispositivo a otro en un período de tiempo determinado. La tasa de transferencia depende del ancho de banda de la conexión de red y de la cantidad de tráfico en la red. Por ejemplo, si una conexión de red tiene un ancho de banda de 1 Mbps, la tasa de transferencia máxima será de 1 Mbps.</p>

        <h3>Tecnologias</h3>
        <ul>
          <li>Token Ring: es una tecnología de LAN que utiliza un token para controlar el acceso a la red. En una red Token Ring, los datos se transmiten en un solo sentido, en una dirección circular a través de la red. El token se utiliza para controlar el acceso a la red, lo que significa que solo un dispositivo en la red puede transmitir datos en un momento dado. Token Ring pertenece a la capa de enlace de datos del modelo OSI.</li>

          <li>FDDI (Fiber Distributed Data Interface): es una tecnología de LAN que utiliza fibra óptica para transmitir datos a través de la red. FDDI es una tecnología de alta velocidad que se utiliza a menudo en redes de alta capacidad, como las redes de área amplia (WAN). FDDI pertenece a la capa de enlace de datos del modelo OSI.</li>

          <li>Ethernet: es una tecnología de LAN que utiliza un protocolo de acceso múltiple con detección de colisiones (CSMA/CD) para controlar el acceso a la red. En una red Ethernet, los datos se transmiten en ambos sentidos a través de la red. Ethernet es una tecnología de red muy común y accesible, y se utiliza en una amplia variedad de dispositivos de red, como computadoras, enrutadores, conmutadores y puntos de acceso inalámbrico. Ethernet pertenece a la capa de enlace de datos del modelo OSI.</li>
        </ul>


        
        
       <h4>Referencias</h4>
			<ul>
			   <li><a href="https://espanol.verizon.com/articles/internet-essentials/bandwidth-definition/#:~:text=El%20ancho%20de%20banda%20es,el%20grifo%20fuera%20m%C3%A1s%20angosto." target="_blank">Ancho de banda</a></li>
			   
			   <li><a href="https://es.wikipedia.org/wiki/Token_Ring" target="_blank">Token Ring</a></li>
			   <li><a href="https://es.wikipedia.org/wiki/Interfaz_de_datos_distribuida_por_fibra" target="_blank">La interfaz de datos distribuida por fibra (FDDI)</a></li>
			   <li><a href="https://www.computerweekly.com/es/definicion/Ethernet" target="_blank">Ethernet</a></li>
			</ul>
        


        <div class="volver"><a href="#/about"><i class="fa-solid fa-arrow-left-long"></i> Volver</a></div>
      
      </section>

      <div class="sidebar">

          <div class="box">
            <h3 class="title">Unidades</h3>
            <div class="unidades-sidebar">
                <a href="#/about/products">Unidad I</a>
                <a href="#/about/tags">Unidad II</a>
                <a href="#/about/3">Unidad III</a>
                <a href="#/about/4">Unidad IV</a>
                <a href="#/about/5">Unidad V</a>
                <a href="#/about/6">Unidad VI</a>
            </div>
          </div>

      </div>

    </div>
  `;
  app_div.appendChild(div); 
}


function contact() {
  let div = document.createElement('div');
  div.classList.add('page');
  div.innerHTML = `
    <div class="article-container">
      <section class="individual-article">

        <h2>Sobre Mi</h2>

        <p class="text">Soy estudiantes de informática del Trayecto 2 Trimestre 1 de la Universidad Politécnica Territorial de Falcón "Alonso Gamero" y decidí crear este blog con la finalidad de compartir los conocimientos que he adquirido durante este trimestre sobre las Redes de Computadoras, si tienes alguna duda, no dudes en contactarme.</p>
		
		<h5>Autor</h5>
		<ul>
          <li>José Graterol | Telf: 0424.660.3768</li>
 
        </ul>


        <div class="volver"><a href="#/about">Ver Artículos</a></div>
		
      
      </section>

      <div class="sidebar">

          

      </div>

    </div>
  `;
  app_div.appendChild(div);
}




function route(path, template) {
  if (typeof template === 'function') {
    return routes[path] = template;
  }
  else if (typeof template === 'string') {
    return routes[path] = templates[template];
  }
  else {
    return;
  }
}

function template(name, templateFunction) {
  return templates[name] = templateFunction;
}

template('home', home);

template('about', about);
template('aboutProducts', aboutProducts);
template('aboutTags', aboutTags);
template('unidad3', unidad3);
template('unidad4', unidad4);
template('unidad5', unidad5);
template('unidad6', unidad6);

template('contact', contact);


route('/', 'home');

route('/about', 'about');
route('/about/products', 'aboutProducts');
route('/about/tags', 'aboutTags');
route('/about/3', 'unidad3');
route('/about/4', 'unidad4');
route('/about/5', 'unidad5');
route('/about/6', 'unidad6');

route('/contact', 'contact');

function resolveRoute(route) {
  try {
    return routes[route];
  }
  catch (e) {
    throw new Error(`Route ${route} not found`);
  }
}

function router(evt) {
  let url = window.location.hash.slice(1) || '/';
  let route = resolveRoute(url);

  // Add smooth transition effect
  app_div.style.opacity = 0;
  setTimeout(() => {
    // Clear the content of the app_div element
    app_div.innerHTML = '';
  
    // Render the content for the current route
    if (route) {
      route();
    }
    // Update the navigation bar
  let nav = document.querySelector('nav ul');
  let links = nav.getElementsByTagName('a');

  // Remove active class from all links
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('active');
  }

  // Set active class on current link
  for (let i = 0; i < links.length; i++) {
    let link = links[i];
    if (link.hash === window.location.hash || (window.location.hash === '' && link.getAttribute('href') === '#/')) {
      link.classList.add('active');
    }
    if (link.hash === window.location.hash || link.hash === '#/about' && window.location.hash.startsWith('#/about')) {
    link.classList.add('active');
    }
 
  }

  // Add logic to set the active class for the subpage links:

    // Reset opacity to trigger transition effect
    app_div.style.opacity = 1;
  }, 300);

  window.scrollTo(0, 0);
};


window.addEventListener('load', router);
window.addEventListener('hashchange', router);


//function leaveSite() {
  //window.location.href = 'about:blank';
  //window.history.back();
  //window.location.href = 'https://www.google.com'; 
//}

let alternativeLinks = [
  {name: 'Google', url: 'https://www.google.com'},
  {name: 'Firefox', url: 'https://www.mozilla.org/en-US/firefox/new/'},
  {name: 'Safari', url: 'https://www.apple.com/safari/'},
  {name: 'Microsoft Edge', url: 'https://www.microsoft.com/en-us/edge'}
];

function getBrowserName() {
  let userAgent = navigator.userAgent;
  if (userAgent.indexOf("Chrome") !== -1) {
    return "Google";
  } else if (userAgent.indexOf("Firefox") !== -1) {
    return "Firefox";
  } else if (userAgent.indexOf("Safari") !== -1) {
    return "Safari";
  } else if (userAgent.indexOf("Edg") !== -1) {
    return "Microsoft Edge";
  } else {
    return "Unknown";
  }
}

let currentBrowser = getBrowserName();
let currentBrowserLink = alternativeLinks.find(link => link.name === currentBrowser);

if (currentBrowserLink) {
  alternativeLinks.push({name: currentBrowser, url: currentBrowserLink.url});
}

function leaveSite() {
  let homePageUrl;
  if (currentBrowserLink) {
    homePageUrl = currentBrowserLink.url;
  } else {
    homePageUrl = alternativeLinks[0].url;
  }
  window.location.replace(homePageUrl);
}



let leaveButton = document.getElementById('leave');
leaveButton.addEventListener('click', leaveSite);








