// Sincronizar las letras con la canción 
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Si quieres te digo un secreto", time: 17 },
  { text: "Promete que no huirás también", time: 20.99 },
  { text: "No puedo tomar el metro", time: 24 },
  { text: "No puedo recordar los trenes", time: 27 },
  { text: "Y estoy cansado de conducir", time: 30.76 },
  { text: "Pero no quiero quedarme quieto", time: 34.33 },
  { text: "También tengo miedo de volar", time: 37 },
  { text: "Sé que es gracioso a mi edad", time: 41 },
  { text: "Te contaré otro secreto", time: 50.49 },
  { text: "Si me dices tú primero", time: 54.08 },
  { text: "Solo mejoro si te veo", time: 57.60 },
  { text: "Si doblas la esquina caigo de nuevo", time: 60.89 },
  { text: "Y durante dos meses estuve comiendo mal", time: 64 },
  { text: "Supongo que la dieta no me va", time: 67.86 },
  { text: "Ni siquiera puedo pelear", time: 70.42 },
  { text: "Y duele, pero…", time: 74 },
  { text: "Verte reír", time: 77.09 },
  { text: "Qué bueno es para alguien como yo", time: 80 },
  { text: "Verte reír", time: 84 },
  { text: "Hace que incluso alguien como yo se sienta mejor", time: 86.75 },
  { text: "Verte reír", time: 91 },
  { text: "Es como cine para mí", time: 93 },
  { text: "Sí, eres todo para mí", time: 98.42 },
  { text: "Te cuento el último secreto", time: 104 },
  { text: "Y después no te aburro más", time: 107 },
  { text: "Esta noche veo todo negro", time: 110 },
  { text: "Pero sabes, me pudiste animar", time: 113.5 },
  { text: "Y perdona si respondo mal", time: 117 },
  { text: "Simplemente no quiero mantener la calma", time: 121 },
  { text: "Ahora que te vas", time: 124.42 },
  { text: "Y duele, pero…", time: 127 },
  { text: "Verte reír", time: 130.09 },
  { text: "Qué bueno es para alguien como yo", time: 134 },
  { text: "Verte reír", time: 137.20 },
  { text: "Hace que incluso alguien como yo se sienta mejor", time: 140 },
  { text: "Verte reír", time: 143 },
  { text: "Es como cine para mí", time: 146 },
  { text: "Sí, eres todo para mí", time: 151.42 },
  { text: "Todo para mí", time: 161 },
  { text: "Sí, eres todo para mí", time: 165 },
  { text: "Verte reír", time: 170 },
  { text: "Qué bueno es para alguien como yo", time: 173.73 },
  { text: "Verte reír", time: 177 },
  { text: "Hace que incluso alguien como yo se sienta mejor", time: 180 },
  { text: "Verte reír", time: 184.40 },
  { text: "Sí, como cine para mí", time: 187 },
  { text: "Sí, eres todo para mí", time: 192 },
  { text: "Todo para mí", time: 199 },
  { text: "Sí, eres todo para mí", time: 206 },
  { text: "Todo para mí", time: 214 }
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime;
  var currentLine = null;
  
  for (var i = 0; i < lyricsData.length; i++) {
    var line = lyricsData[i];
    var nextLine = lyricsData[i + 1];
    var endTime = nextLine ? nextLine.time : line.time + 6;
    
    if (time >= line.time && time < endTime) {
      currentLine = line;
      break;
    }
  }
  
  if (currentLine) {
    var fadeInDuration = 0.2;
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

// Llamada más fluida (cada 10 ms)
setInterval(updateLyrics, 10);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 220 segundos (220,000 milisegundos)
setTimeout(ocultarTitulo, 220000);
