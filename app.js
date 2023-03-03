//Images
const charmanderImg = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4fd2a3ba-3c38-4769-80ec-e12b3670bcdf/dctlenm-5ea365f0-97c3-447d-963f-a1808e0c0543.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRmZDJhM2JhLTNjMzgtNDc2OS04MGVjLWUxMmIzNjcwYmNkZlwvZGN0bGVubS01ZWEzNjVmMC05N2MzLTQ0N2QtOTYzZi1hMTgwOGUwYzA1NDMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CjKawk6FceS7fIWNIgF6d2fNOQKNEy1HHS2cisnO_sI"
const tormentaImg = "https://64.media.tumblr.com/85dd2097acae9887155d64b8331a9193/tumblr_p9v5bih7kJ1tlgv32o1_640.gif"

//Dom Elements
const img = document.querySelector('img')
const text = document.querySelector('p')
const input = document.querySelector('input')
const ok = document.querySelector('#ok')
let name = ''
let contador = 0


//Event Listeners
ok.addEventListener('click', () => {
    name = input.value
    if (contador === 0 && name !== '') {
      name = input.value
      text.innerHTML = `${name}, eres un charmander recién nacido. Tu futuro parece brillante pero pronto descubriras que deberás enfrentarte a muchos peligros.`
      contador++
      input.value = ''
    } else if (contador === 1) {
      img.src = tormentaImg
      text.innerHTML = "Ahí viene una tormenta, debes esconderte.<br>¿Qué haces?<br>1. Te escondes en un árbol.<br>2. Te escondes en una cueva."
      contador++
      input.value = ''
    }
    else if (contador === 2 && input.value === '1') {
      text.innerHTML = "El árbol se derrumba y te aplasta. Has muerto."
      contador++
      input.value = ''
    }
    else if (contador === 2 && input.value === '2') {
      text.innerHTML = "Te escondes en una cueva y te proteges de la tormenta. Ahora debes salir de la cueva.<br>¿Qué haces?<br>1. Sales corriendo.<br>2. Sales caminando."
      contador++
      input.value = ''
    }
})
