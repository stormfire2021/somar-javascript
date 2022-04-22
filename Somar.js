/* 
autor = Fabiula Pellicciotti
*/

/*a função soma dois numeros inteiros digitados de 1 a 100
 */
var result = "";

function somar() {
  var a = parseInt(document.querySelector(".numberA").value);
  var b = parseInt(document.querySelector(".numberB").value);
 
  if (a >= 1 && a <= 100) {
    if (b >= 1 && b <= 100) {
      alert("O valor da soma é " + (a + b));
      result += " " + (a + b);
      document.querySelector(".result").innerHTML = resultado;
    } else {
      alert("Segundo valor incorreto!");
    }
  } else {
    alert("Primeiro valor incorreto!");
  }
} 
