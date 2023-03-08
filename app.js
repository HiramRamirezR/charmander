//Images
const charmanderImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4fd2a3ba-3c38-4769-80ec-e12b3670bcdf/dctlenm-5ea365f0-97c3-447d-963f-a1808e0c0543.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmZDJhM2JhLTNjMzgtNDc2OS04MGVjLWUxMmIzNjcwYmNkZlwvZGN0bGVubS01ZWEzNjVmMC05N2MzLTQ0N2QtOTYzZi1hMTgwOGUwYzA1NDMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CjKawk6FceS7fIWNIgF6d2fNOQKNEy1HHS2cisnO_sI"
const charmanderDeadImg = "https://i.chzbgr.com/full/8473431040/h8E0866B2/1/pokemon-memes-charmander-tired-gif"
const charmanderAttackImg = "https://thumbs.gfycat.com/JealousSaltyAustrianpinscher-size_restricted.gif"
const charmanderSleepImg = "https://gifdb.com/images/high/charmander-sad-scene-xe9ctlwkar7937ex.gif"
const tormentaImg = "https://64.media.tumblr.com/85dd2097acae9887155d64b8331a9193/tumblr_p9v5bih7kJ1tlgv32o1_640.gif"
const arbolImg = "https://media2.giphy.com/media/2ceckIBeAIKqw7awPO/200w.gif"
const cuevaImg = "https://i.pinimg.com/originals/c9/e8/ef/c9e8efca356e9fd2263493d78ab3737d.gif"
const blastoiseImg = "https://66.media.tumblr.com/tumblr_ma4fvrTeAk1rfjowdo1_500.gif"
const foodImg = "https://media1.giphy.com/media/JtGnvpnkkXbE2iEw80/giphy.gif?cid=6c09b952985fdbed2c279e689fe6f57b5a5b0ddb0caee3d7&rid=giphy.gif&ct=s"
const playaImg = "https://storage.ko-fi.com/cdn/useruploads/post/a73190c5-1724-4fc7-988e-d141445646d5_spiaggiapreview.gif"
const pidgeottoImg = "https://66.media.tumblr.com/tumblr_maorewZFZM1rfjowdo1_500.gif"
const volcanImg = "https://cdnb.artstation.com/p/assets/images/images/053/596/417/original/bera-fifth-tileset-volcano-spewing.gif?1662574582"

//Dom Elements
const img = document.querySelector('img')
const text = document.querySelector('p')
const input = document.querySelector('input')
const ok = document.querySelector('#ok')
const restart = document.querySelector('#restart')

//Variables
let name = ''
let contador = 8


//Event Listeners
restart.addEventListener('click', () => {
  location.reload()
})

ok.addEventListener('click', () => {
  //Día 1
  name = input.value
    if (contador === 0 && name !== '') {
      // name2 = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
      name2 = 'name'
      text.innerHTML = `${name2}, eres un charmander recién nacido. Pronto descubriras que hay muchos peligros en la vida de un pokemón desde que es bebé hasta que llega a su máxima evolución. <br>Pulsa el botón de 'Ok' para continuar.`
      seguir()
    } else if (contador === 1) {
      img.src = tormentaImg
      text.innerHTML = "Ahí viene una tormenta, debes esconderte para que tu cola no se apague.<br>¿Qué haces?<br>1. Te escondes en un árbol.<br>2. Te escondes en una cueva."
      seguir()
    } else if (contador === 2 && input.value === '1') {
      img.src = arbolImg
      text.innerHTML = "El árbol se derrumba y te aplasta.<br>Has muerto."
      muerte()
    } else if (contador === 2 && input.value === '2') {
      img.src = cuevaImg
      text.innerHTML = "Te escondes en una cueva y te proteges de la tormenta. Ahora debes salir de la cueva.<br>¿Qué haces?<br>1. Sales corriendo.<br>2. Sales caminando."
      seguir()
    } else if (contador === 3 && input.value === '1') {
      img.src = blastoiseImg
      text.innerHTML = "Por salir corriendo haces mucho ruido y despiertas al dueño de la cueva. Un enorme Blastoise que te ataca y apaga tu flama.<br>Has muerto."
      contador++
      muerte()
    } else if (contador === 3 && input.value === '2') {
      img.src = foodImg
      text.innerHTML = "Al caminar evitas hacer ruido y escapas sin despertar al dueño de la cueva. Ahora tienes mucha hambre y debes encontrar comida.<br>¿Qué haces?<br>1. Buscas comida en el bosque.<br>2. Buscas comida en la playa."
      seguir()
    } else if (contador === 4 && input.value === '1') {
      img.src = pidgeottoImg
      text.innerHTML = "En el bosque hay mucha comida de la que te gusta pero también hay muchos peligros para un charmander bebé. De los arbustos sale un pidgeotto enojado porque has entrado en su territorio.<br>¿Qué haces?<br>1. Te escondes en un árbol.<br>2. Atacas con un Lanzallamas."
      seguir()
    } else if (contador === 4 && input.value === '2') {
      img.src = playaImg
      text.innerHTML = "En la playa hay muchas tormentas y aquí viene una fuerte. No parece ser un buen lugar para un charmander bebé.<br>¿Qué haces?<br>1. Regresas al bosque.<br>2. Te escondes en una cueva."
      seguir()
      contador++
    } else if (contador === 5 && input.value === '1') {
      img.src = arbolImg
      text.innerHTML = "El pidgeotto te ataca con un tornado tan fuerte que derrumba el árbol y te aplasta.<br>Has muerto."
      muerte()
    } else if (contador === 5 && input.value === '2') {
      img.src = charmanderAttackImg
      text.innerHTML = "El pidgeotto esquiva tu ataque y ahora se la piensa mejor antes de atacarte.<br>Por ahora ha decidido que te dejará ir. <br>Pulsa el botón de 'Ok' para continuar."
      seguir()
      contador++
    } else if (contador === 6 && input.value === '1') {
      img.src = pidgeottoImg
      text.innerHTML = "En el bosque hay mucha comida de la que te gusta pero también hay muchos peligros para un charmander bebé. De los arbustos sale un pidgeotto enojado porque has entrado en su territorio.<br>¿Qué haces?<br>1. Te escondes en un árbol.<br>2. Atacas con un Lanzallamas."
      seguir()
      contador = 5
    } else if (contador === 6 && input.value === '2') {
      img.src = cuevaImg
      text.innerHTML = "La cueva se inundó por la tormenta y tu colita se apagó.<br>Has muerto"
      muerte()
    } else if (contador === 7) {
      img.src = charmanderSleepImg
      text.innerHTML = `${name2}, has sobrevivido a tu primer día como charmander. Ahora ya te has dado cuenta de que ser un charmander bebé no es nada fácil. Lo bueno es que ahora puedes dormir tranquilo. <br>Pulsa el botón de 'Ok' para ir al Día 2.`
      seguir()
    }
  //Día 2
      else if (contador === 8) {
      img.src = charmanderImg
      text.innerHTML = `Día 2. <br>Pulsa el botón de 'Ok' para continuar.`
      seguir()
    } else if (contador === 9) {
      img.src = volcanImg
      text.innerHTML = `A todos los charmanders les gusta vivir cerca de un volcán, así que emprenderás el camino hacia la Tierra de Fuego donde hay muchos volcanes juntos. <br>Pulsa el botón de 'Ok' para continuar.`
      seguir()
    } else if (contador === 10) {
      img.src = volcanImg
      text.innerHTML = `${name2}, si quieres evolucionar pronto deberás tener algunas batallas para ganar experiencia. <br>¿Quieres pelear o quieres viajar tranquilo? <br>1. Buscas con quien pelear.<br>2. Viajas escondiéndote para evitar peleas.`
      seguir()
    }
})

muerte = () => {
  input.value = ''
  restart.classList.remove('disabled')
  restart.classList.remove('btn-dark')
}

seguir = () => {
  contador++
  input.value = ''
}
