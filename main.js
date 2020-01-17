const name = "Katie";
const articleHeader = document.querySelector(".article__header");
articleHeader.textContent = `Welcome to the ${name} blog`;

const allArticleHeaders = document.querySelectorAll(".article__header");
for (let i=0; i < allArticleHeaders.length; i++) {
    allArticleHeaders[i].classList.add("important");
}

const dash = document.querySelector(".dashed");
dash.classList.remove("dashed");

const footer = document.querySelector(".article__footer");
footer.classList.add("goldenrod");