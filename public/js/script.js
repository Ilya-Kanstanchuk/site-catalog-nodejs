const button = document.querySelector(".delete");

button.addEventListener("click",  ()=>{
    const endpoint = `/catalog/${button.dataset.doc}`;
    fetch(endpoint, {
        method: "DELETE"
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.redirect) {
            window.location.href = data.redirect;
        }
    })
    .catch((err) => console.log(err));
});
