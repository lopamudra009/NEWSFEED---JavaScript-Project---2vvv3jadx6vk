
fetch('https://inshorts.deta.dev/news?category=science')
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })



