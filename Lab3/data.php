<?php
$title = $_POST["title"];
$description = $_POST["description"];
$genre = $_POST[Genre];
$subject = $_POST[Subject];
$year = $_POST["year"];
$museum = $_POST["museum"];
$type = $_POST["painting"];
$ccs = $_POST["ccs"];

echo "Title: " + $title;
echo "</br>";
echo "Description: " + $description;
echo "</br>";
echo "Genre: " + $genre;
echo "</br>";
echo "Subject: " + $subject;
echo "</br>";
echo "Year: " + $year;
echo "</br>";
echo "Museum: " + $museum;
echo "</br>";
echo "Type: " + $type;
echo "</br>";
echo "Creative Commons Specification: " + $ccs;
echo "</br>";
?>
