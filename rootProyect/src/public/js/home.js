const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(loginForm);

    const obj = {}

    data.forEach((value, key) => obj[key] = value);

    const url = `/auth`;
    const method = "POST";
    const headers = {
        "Content-Type": "application/json"
    }
    const body = JSON.stringify(obj); 

    fetch(url, {
        headers,
        method,
        body
    })
    .then(response => {
        if(response.redirected){
            return window.location.href = response.url;
        }
        return response.json()
    })
    .then(data => console.log(data))
    .then(err => console.log(err))

    //console.log(obj);
})