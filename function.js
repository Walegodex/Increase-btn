let count = 0;

document.getElementById("decrease").addEventListener("click" , function () {
    count = count - 1;
    document.getElementById("h1").innerHTML = count;
});

document.getElementById("increase").addEventListener("click" , function () {
    count = count + 1;  
    document.getElementById("h1").innerHTML = count;
});