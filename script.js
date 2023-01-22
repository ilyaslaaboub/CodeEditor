let codes = document.getElementById("codes");
let run = document.getElementById("run");
let delet = document.getElementById("delet");
let results = document.getElementById("results");


run.onclick = ()=>{
    results.innerHTML = codes.value;
    localStorage.setItem("RESULT" , codes.value);
}
delet.onclick = ()=>{
    results.innerHTML ="";
}
onload = ()=>{
    codes.value = localStorage.getItem("RESULT");
    results.innerHTML = codes.value;
}
