const url =
  "https://api.currencyfreaks.com/v2.0/rates/latest?apikey=922d61fb433b4d3a84d5dc2e064dc24f";

let getcurr = async () => {
  let response = await fetch(url);
  let data = await response.json();

  let amount = parseInt(document.querySelector("input[name='a']").value);
  let from = document.getElementById("fromInput").value;
  let to = document.getElementById("toInput").value;

  let fromRate = data.rates[from];
  let toRate = data.rates[to];
  let p=(amount/fromRate)*toRate;
  let mes=document.getElementById("m");
  mes.innerText=amount+" "+from+" "+"is "+p.toString()+" "+to;
};

let submit = document.getElementById("sub");
submit.onclick = ()=>{
  getcurr(url);
}
