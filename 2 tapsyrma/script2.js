var san1 = prompt("1 sandy engiziniz")
var san2 = prompt("2 sandy engiziniz")
var san3 = prompt("3 sandy engiziniz")
var san = 0
if ((san1 > san2) && (san2 > san3)) {
    alert(san1 - san3)
}else if ((san1 < san2) && (san2< san3)) {
    alert (san3 - san2)
}else ((san1 < san2) && (san2 >san3) &&( san3 > san1)); {
    alert(san2 - san3)
}  if ((san1 < san2) && (san2 > san3) && (san3 > san1)) {
    alert (san2 - san1)
}
