var artmodal = document.getElementById("firstArtWork");
function monaLisa()
{
  //artmodal.img = "Images/monalisa.jpg";
  document.getElementById("modalHeader").innerHTML = "Mona Lisa";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/monalisa.jpg\' height=\'200\' width=\'150\'/>';

  $(artmodal).modal();

}
function americangothic()
{
  document.getElementById("modalHeader").innerHTML = "American Gothic";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/americangothic.jpg\' height=\'200\' width=\'150\'/>';

  $(artmodal).modal();

}
function starrynight()
{
  document.getElementById("modalHeader").innerHTML = "Starry Night";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/starrynight.jpg\' height=\'200\' width=\'150\'/>';

  $(artmodal).modal();
}

function thepersistenceofmemory()
{
  document.getElementById("modalHeader").innerHTML = "The Persistence Of Memory";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/thepersistenceofmemory.png\' height=\'200\' width=\'150\'/>';

  $(artmodal).modal();
}
function vangoghselfportrait()
{
  document.getElementById("modalHeader").innerHTML = "Vangogh Self Portrait";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/vangoghselfportrait.jpg\' height=\'200\' width=\'150\'/>';

  $(artmodal).modal();
}
document.getElementById("test").onclick = function(){
 window.open("http://www.google.ca", '_blank', 'width=300,height=200');
  window.open("http://www.google.ca", '_blank', 'width=300,height=200');
}
