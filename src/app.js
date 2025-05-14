const pronombres = ["yo", "tu", "el", "nosotros", "ellos"];
const adjetivos = ["feliz", "grande", "azul", "rapido", "nuevo"];
const sustantivos = ["coche", "casa", "libro", "ordenador", "perro"];
const extensiones = [".com", ".es", ".de", ".fr", ".gb"];
const dominios = [];

const tablaDominiosBody = document.querySelector('#tablaDominios tbody');

function generarDominios() {
  dominios.length = 0;
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
  console.log("Dominios actualizados:", dominios);
  actualizarTabla();
}

function actualizarTabla() {
  if (tablaDominiosBody) {
    tablaDominiosBody.innerHTML = ''; 
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
}

function agregar(tipo, inputId) {
  const inputValue = document.getElementById(inputId).value.trim();
  if (inputValue) {
    switch (tipo) {
      case 'pronombres':
        pronombres.push(inputValue);
        break;
      case 'adjetivos':
        adjetivos.push(inputValue);
        break;
      case 'sustantivos':
        sustantivos.push(inputValue);
        break;
      case 'extensiones':
        extensiones.push(inputValue);
        break;
    }
    document.getElementById(inputId).value = ''; 
    generarDominios(); 
  }
}


generarDominios();

