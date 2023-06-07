const categoryContainer = document.getElementById("category-news-container");

// CARD GENERATOR FUNCTION 
// since every news item is different we have taken the item as arguement
// since we are rendering news of different categories hence category is also as argument variable
function genrateCard(item, category) {
    // we are creating a card with the help of template literal 
    const card = `<div class="card" id="card">
        <div class="card-header">
            <h3>Author name : ${item.author}</h3>
            <p class="news-category">Category <span>${category}</span> </p>
        </div>
        <p id="news-para" class="news-content">
            ${item.content}
        </p>
        <div class="bottom-wrapper">
                <button class="read-more" id="read-more">Read more...</button>
                <div class="like-btn"><i class="fa fa-heart"></i></div>
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


function categoryHandler(newsCategory) { //newsCat is a param variable which is coming from button click
    // different buttons are sending different args
    // like : Business btn is sending "business" as an arg and hatke btn is seding "hatke" arg.
    let url = `https://inshorts.deta.dev/news?category=${newsCategory}`; // this is called string interpolation and within backticks we define template literal ``=> this wss introduced in es6
    fetch(url)  // according to the updated url we are fetching the data .
        .then((response) => {
            console.log(response);
            return response.json()
        })
        .then(data => {
            categoryContainer.innerHTML = "";
            const category = data.category;
            data.data.map(item => {
                categoryContainer.innerHTML += genrateCard(item, category);
            })
            likeFunctionality();
            readMoreFunctionality();
        })
}



// this expanded flag is to keep a check for the expansion of the card
function readMoreFunctionality() {
    const readMoreBtns = document.querySelectorAll("#read-more");
    const paras = document.querySelectorAll("#news-para");
    const cards = document.querySelectorAll("#card");
    let expanded = false;
    readMoreBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            if (!expanded) { // !expanded && readMoreBtn[index] === btn
                paras[index].style.height = 80 + 'px';
                cards[index].style.height = 150 + 'px'
                btn.innerText = "Show Less"
                expanded = true;
            }
            else {
                btn.innerText = "Read More..."
                cards[index].style.height = 110 + 'px'
                paras[index].style.height = 5 + "px";
                expanded = false;
            }
        })
    })
}



// const para = document.getElementById("news-para");
// const readMoreBtn = document.getElementById("read-more");
// const savedNewsCard = document.getElementById("card");



// readMoreBtn.addEventListener("click", () => {
//     if (!expanded) {
//         para.style.height = 80 + 'px';
//         savedNewsCard.style.height = 150 + 'px'
//         readMoreBtn.innerText = "Show Less"
//         expanded = true;
//     }
//     else {
//         readMoreBtn.innerText = "Read More..."
//         savedNewsCard.style.height = 110 + 'px'
//         para.style.height = 5 + "px";
//         expanded = false;
//     }
// })





