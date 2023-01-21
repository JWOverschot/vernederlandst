async function submit(e) {
    e.preventDefault()
    let base_url = window.location.origin
    let data = new FormData(e.target)

    response = await fetch(base_url + "/quotes", {
        method: "POST",
        body: new URLSearchParams(data),
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
    })

    alert(await response.json())

    return response.json()
}

let translationForm = document.getElementById("translation-form")

translationForm.addEventListener('submit', submit)