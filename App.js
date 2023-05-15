const categoryContainer = document.getElementById("category-news-container");

// CARD GENERATOR FUNCTION 
// since every news item is different we have taken the item as arguement
// since we are rendering news of different categories hence category is also as argument variable
function genrateCard(item, category) {
    // we are creating a card with the help of template literal 
    const card = `<div class="card">
        <div class="card-header">
            <h3>Author name : ${item.author}</h3>
            <p class="news-category">Category <span>${category}</span> </p>
        </div>
        <p class="news-content">
            ${item.content}
            <button class="read-more">Read more</button>
        </p>
        <div class="like-btn"><i class="fa fa-heart"></i>
        </div>
    </div>`
    // returning the created card 
    return card;
}

// LIKE FUNCTIONALITY IMPLEMENTATION 
function likeFunctionality() {
    // selecting ALL the elements in the DOM which has ".fa-heart" class
    const likeBtns = document.querySelectorAll(".fa-heart");
    // iterating over all the buttons to check which button we are clicking on 
    likeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // once we have got the clicked button we are adding clicked class
            btn.classList.toggle("clicked")
        })
    })
}

function Business() {
    fetch('https://inshorts.deta.dev/news?category=business')
        .then(response => response.json())
        .then(data => {
            // reseting the container
            categoryContainer.innerHTML = "";
            // gettign category out of the object recieved
            const category = data.category;
            // mapping over each element of the recieved array 
            data.data.map(item => {
                const card = genrateCard(item, category)
                //appending the recieved card inside of already existing html content as a html content
                categoryContainer.innerHTML += card;
            })
            // calling like functionality
            likeFunctionality();
        })
}

function All() {
    fetch('https://inshorts.deta.dev/news?category=all')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                const card = genrateCard(item, category)
                categoryContainer.innerHTML += card;
            })
            likeFunctionality();
        })
}
function Sports() {
    fetch('https://inshorts.deta.dev/news?category=sports')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                const card = genrateCard(item, category)
                categoryContainer.innerHTML += card;
            })
            likeFunctionality();
        })
}
function Worlds() {
    fetch('https://inshorts.deta.dev/news?category=world')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                categoryContainer.innerHTML += genrateCard(item, category);
            })
            likeFunctionality();
        })
}
function Politics() {
    fetch('https://inshorts.deta.dev/news?category=politics')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                categoryContainer.innerHTML += genrateCard(item, category);
            })
            likeFunctionality();
        })
}

function Hatke() {
    fetch('https://inshorts.deta.dev/news?category=hatke')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                categoryContainer.innerHTML += genrateCard(item, category);
            })
            likeFunctionality();
        })
}

function Science() {
    fetch('https://inshorts.deta.dev/news?category=science')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                categoryContainer.innerHTML += genrateCard(item, category);
            })
            likeFunctionality();
        })
}
function Automobile() {
    fetch('https://inshorts.deta.dev/news?category=automobile')
        .then(response => response.json())
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                categoryContainer.innerHTML += genrateCard(item, category);
            })
            likeFunctionality();
        })
}