var artmodal = document.getElementById("firstArtWork");
function monaLisa()
{
  //artmodal.img = "Images/monalisa.jpg";
  document.getElementById("modalHeader").innerHTML = "Mona Lisa";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/monalisa.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1503';
  document.getElementById("type").innerHTML = 'Oil';
  document.getElementById("dimention").innerHTML = '77 X 53 cm';
  document.getElementById("location").innerHTML = 'The Louvre';
  document.getElementById("artist").innerHTML = 'Leonardo da Vinci';
  document.getElementById("price").innerHTML = '620 million';
  document.getElementById("genre").innerHTML = 'Portrait';
  $(artmodal).modal();

}
function americangothic()
{
  document.getElementById("modalHeader").innerHTML = "American Gothic";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/americangothic.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1930';
  document.getElementById("type").innerHTML = 'Oil';
  document.getElementById("dimention").innerHTML = '74 X 62 cm';
  document.getElementById("location").innerHTML = 'Royal Academy of Arts';
  document.getElementById("artist").innerHTML = 'Grant Wood';
  document.getElementById("price").innerHTML = '620 million';
  document.getElementById("genre").innerHTML = 'Portrait';
  $(artmodal).modal();

}
function starrynight()
{
  document.getElementById("modalHeader").innerHTML = "Starry Night";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/starrynight.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1889';
  document.getElementById("type").innerHTML = 'Oil';
  document.getElementById("dimention").innerHTML = '74 X 92 cm';
  document.getElementById("location").innerHTML = 'Museum of Modern Art';
  document.getElementById("artist").innerHTML = 'Vincent van Gogh';
  document.getElementById("price").innerHTML = '620 million';
  document.getElementById("genre").innerHTML = 'Modern';
  $(artmodal).modal();
}

function thepersistenceofmemory()
{
  document.getElementById("modalHeader").innerHTML = "The Persistence Of Memory";
  document.getElementById("modalBody").innerHTML =
  '<img src=\'Images/thepersistenceofmemory.png\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1931';
  document.getElementById("type").innerHTML = 'Oil';
  document.getElementById("dimention").innerHTML = '24 X 33 cm';
  document.getElementById("location").innerHTML = 'Museum of Modern Art';
  document.getElementById("artist").innerHTML = 'Salvador Dali';
  document.getElementById("price").innerHTML = '620 million';
  document.getElementById("genre").innerHTML = 'Surrealism';
  $(artmodal).modal();
}
function guernica()
{
  document.getElementById("modalHeader").innerHTML = "Guernica";
  document.getElementById("modalBody").innerHTML = '<img src=\'Images/guernica.jpg\' height=\'400\' width=\'300\'/>';
  document.getElementById("date").innerHTML = '1937';
  document.getElementById("type").innerHTML = 'Oil';
  document.getElementById("dimention").innerHTML = '3.49 X 7.7 m';
  document.getElementById("location").innerHTML = 'Paris';
  document.getElementById("artist").innerHTML = 'Pablo Picasso';
  document.getElementById("price").innerHTML = '620 million';
  document.getElementById("genre").innerHTML = 'Surrealism';
  $(artmodal).modal();
}
