function c() {document.body.innerHTML = "";} // clears the screen
function n() {document.write("<br>");} //makes a new line
//global vars go here
var firstRun=0;
var playerName="";
var career=0;
function start()
{
  playerName = prompt("What's your name?");
  document.write("<div class=\"sidebar\" id=\"start\">");
  if (playerName.length<=3)
  {
    document.write("<p>"+playerName+", huh? Nice and short, just how I like it.</p>");
    document.write("<p>People with long names aren't trustworthy, you know.</p>");
  }
  else
  {
    document.write("<p>I could never trust a man with a name that long. I'll call you fig.</p>");
    playerName = "fig";
  }
  document.write("<p>So, "+playerName+", what do you remember about yourself?</p>");
  firstRun=1;
  document.getElementsByTagName("head")[0].innerHTML = "<title>Intertwined Rooster Genitalia</title><link rel=\"stylesheet\" type=\"text/css\" href=\"main.css\">";
  document.write("<input type=\"button\" onclick=\"stats()\" value=\"Go to stats page\">");
  document.write("</div>");
}

function stats()
{
  c();
  document.write("<div class=\"sidebar\">");
  if (firstRun===1)
  {
    career = prompt("What was your prior career?");
    if (career[0]==="P" || career[0]==="p")
    {
      alert("Good choice");
    }
    else
    {
      career="Fucktard";
    }
    document.write("<p>You have chosen the career of "+career+".</p>");
    firstRun=2;
  }
  else
  {
    start();
  }
  document.write("</div>");
}
