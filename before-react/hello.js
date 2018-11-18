var text = "Hello, my name is Colin";
var int = setInterval(func, 125);
var i = 0;
function func() {
  if(i++>text.length) clearInterval(int);
  document.getElementById('jumper').innerHTML = text.slice(0, i);
}
