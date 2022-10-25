let form = document.querySelector("form");
form.addEventListener('submit', (e) => {
    e.preventDefault();
    document.querySelector("#sub").value = "Submiting..";
    let data = new FormData(form);
    fetch('https://script.google.com/macros/s/AKfycby8P52vvBOgNIBz2iWLBMHkQycqLzRc5cYF60cAUd0dy6BJ1bOIda0oeQttb5aNnuv2NQ/exec', {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(data => {
            document.querySelector("#msg").innerHTML = data;
            document.querySelector("#sub").value = "Submit"
        });
})