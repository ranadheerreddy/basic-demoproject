function toggleDone(event) {
    console.log(event.target)
}

const characterList = document.querySelectorAll('.characters')
characterList.addEventListener('click', toggleDone);