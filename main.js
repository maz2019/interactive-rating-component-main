const ratingState = document.querySelector(".rating-state");
const thanksState = document.querySelector(".thanks-state");
const submitBtn = document.querySelector(".submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitBtn.addEventListener("click", () => {
    thanksState.classList.remove("hide");
    ratingState.classList.add("hide");
})
rates.forEach((rate)=> {
    rate.addEventListener("click", ()=> {
        rating.innerHTML = rate.innerHTML;
    })
})