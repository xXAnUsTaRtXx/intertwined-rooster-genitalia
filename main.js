function n() {document.write("<br>");}
function start()
{
  var name = prompt("What's your name?");
  if (name.length<=3)
  {
    document.write(name+", huh? Nice and short, just how I like it."); n();
    document.write("People with long names aren't trustworthy, you know.");
  }
  else
  {
    document.write("I could never trust a man with a name that long. I'll call you fig.");
    name = "fig";
  }
  document.write("So, "+name+", ");
}
