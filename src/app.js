const pronombres = ["yo", "tu", "el", "nosotros", "ellos"];
const adjetivos = ["feliz", "grande", "azul", "rapido", "nuevo"];
const sustantivos = ["coche", "casa", "libro", "ordenador", "perro"];
const extensiones = [".com", ".es", ".de", ".fr", ".gb"];
const dominios = [];

for (const pronombre of pronombres) {
  for (const adjetivo of adjetivos) {
    for (const sustantivo of sustantivos) {
      for (const extension of extensiones) {
        const dominioSinSeparador = pronombre + adjetivo + sustantivo + extension;
        dominios.push(dominioSinSeparador);
      }
    }
  }
}

console.log(dominios); 

const tablaDominiosBody = document.querySelector('#tablaDominios tbody');
if (tablaDominiosBody) {
  let row;
  dominios.forEach((dominio, index) => {
    if (index % 5 === 0) {
      row = tablaDominiosBody.insertRow();
    }
    const cellDominio = row.insertCell();
    cellDominio.textContent = dominio;
    cellDominio.classList.add('columna'); 
  });
}

console.log(`Se generaron ${dominios.length} combinaciones de dominio.`);

function cambiarColor() {
  const colores = ['#f00', '#0f0', '#00f', '#ff0', '#f0f', '#0ff'];
  const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
  document.body.style.backgroundColor = colorAleatorio;
}

setInterval(cambiarColor, 2000);