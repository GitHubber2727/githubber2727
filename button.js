function myFunction() {
var txt;
var person = prompt("enter name:","First Last");
if (person == null || person == "") {
txt = "User cancelled the prompt.";
} else {
txt = "Hello " + person + "! Thanks for visiting";
}
document.getElementById("demo").innerHTML = txt;
}