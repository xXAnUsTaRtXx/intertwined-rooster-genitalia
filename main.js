//document.body.innerHTML = "";
function n() {document.write("<br>");}
function start()
{
  var name = prompt("What's your name?");
  if (name.length<=3)
  {
    document.write(name+", huh? Nice and short, just how I like it."); n();
    document.write("People with long names aren't trustworthy, you know.");n();
  }
  else
  {
    document.write("I could never trust a man with a name that long. I'll call you fig.");n();
    name = "fig";
  }
  document.write("So, "+name+", what do you remember about yourself?");n();
  document.getElementsByTagName("head")[0].innerHTML = "<title>Intertwined Rooster Genitalia</title>";
}
