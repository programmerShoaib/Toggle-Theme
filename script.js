let theme = document.getElementById("theme");
let child1 = document.getElementsByClassName("child")[0];
let child2 = document.getElementsByClassName("child")[1];
let child3 = document.getElementsByClassName("child")[2];
let child4 = document.getElementsByClassName("child")[3];
let child5 = document.getElementsByClassName("child")[4];
let child6 = document.getElementsByClassName("child")[5];
theme.addEventListener("change", () => {
    if (theme.value == "dark") {
        document.body.style.backgroundColor = "#f2f2f2";
        child1.style.backgroundColor = "black";
        child2.style.backgroundColor = "black";
        child3.style.backgroundColor = "black";
        child4.style.backgroundColor = "black";
        child5.style.backgroundColor = "black";
        child6.style.backgroundColor = "black";
    } else {
        document.body.style.backgroundColor = "white";
        child1.style.backgroundColor = "#f2f2f2";
        child2.style.backgroundColor = "#f2f2f2";
        child3.style.backgroundColor = "#f2f2f2";
        child4.style.backgroundColor = "#f2f2f2";
        child5.style.backgroundColor = "#f2f2f2";
        child6.style.backgroundColor = "#f2f2f2";
    }
})
