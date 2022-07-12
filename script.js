AOS.init({once: true, duration: 1000});

// Navigation
let sidebar_overlay = document.querySelector("#sidebar-overlay");
let sidebar = document.querySelector("#sidebar");
let btn_close_sidebar = document.querySelector("#btn-close-sidebar");
let btn_open_sidebar = document.querySelector("#btn-open-sidebar");

btn_open_sidebar.addEventListener("click", function(){
    sidebar_overlay.classList.add("show-overlay");
    sidebar.classList.add("show-sidebar");
});

btn_close_sidebar.addEventListener("click", function(){
    sidebar_overlay.classList.remove("show-overlay");
    sidebar.classList.remove("show-sidebar");
});

sidebar_overlay.addEventListener("click", function(){
    sidebar_overlay.classList.remove("show-overlay");
    sidebar.classList.remove("show-sidebar");
});

// Modal
let aListOfCards = document.querySelectorAll(".card__image");
let modal_overlay = document.querySelector("#modal-overlay");
let modal_close_btn = document.querySelector("#modal-close-btn");
let modal_image = document.querySelector("#modal-image");
let modal_client = document.querySelector("#modal-client");
let modal_category = document.querySelector("#modal-category");

function addEvent(currentCard, i){
    currentCard.addEventListener("click", function(){
       
        modal_image.setAttribute('alt', `Portfolio ${i} image`);
        modal_image.setAttribute('src', `img/portfolio-${i}.jpg`);
        
        switch(i){
            case 1:
                modal_client.textContent = "Threads";
                modal_category.textContent = "Illustration";
            break;
            case 2:
                modal_client.textContent = "Explore";
                modal_category.textContent = "Graphic Design";
            break;
            case 3:
                modal_client.textContent = "Finish";
                modal_category.textContent = "Identity";
            break;
            case 4:
                modal_client.textContent = "Lines";
                modal_category.textContent = "Branding";
            break;
            case 5:
                modal_client.textContent = "Southwest";
                modal_category.textContent = "Website Design";
            break;
            case 6:
                modal_client.textContent = "Website Design";
                modal_category.textContent = "Photography";
            break;
        }

        modal_overlay.classList.add("show-modal-overlay");

    });
}

for(let i = 0 ; i < aListOfCards.length; i++){
    addEvent(aListOfCards[i], i+1);
}

modal_overlay.addEventListener("click", function(e){
    if(e.target === e.currentTarget){
        // console.log("parent clicked");
        modal_overlay.classList.remove("show-modal-overlay");
    }
});

modal_close_btn.addEventListener("click", function(){
    modal_overlay.classList.remove("show-modal-overlay");
})