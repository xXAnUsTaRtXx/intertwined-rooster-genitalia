function c() {document.body.innerHTML = "";} // clears the screen
function n() {document.write("<br>");} //makes a new line
function start()
{
  var name = prompt("What's your name?");
  document.write("<div class=\"sidebar\" id=\"start\">");
  if (name.length<=3)
  {
    document.write("<p>"+name+", huh? Nice and short, just how I like it.</p>");
    document.write("<p>People with long names aren't trustworthy, you know.</p>");
  }
  else
  {
    document.write("<p>I could never trust a man with a name that long. I'll call you fig.</p>");
    name = "fig";
  }
  document.write("<p>So, "+name+", what do you remember about yourself?</p>")
  document.getElementsByTagName("head")[0].innerHTML = "<title>Intertwined Rooster Genitalia</title>\
  <link rel=\"stylesheet\" type=\"text/css\" href=\"main.css\">";
  document.write("</div>");
}
