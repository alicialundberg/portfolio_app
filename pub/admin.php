<?php

  require "includes/header.php";

 // Starts session
  if(session_status() == PHP_SESSION_NONE){
    session_start();
    }

    // Ends session and send back to index.php
    if(isset($_POST['logout'])) {
      unset($_SESSION['username']);
      header('location:index.php');
      session_destroy();
}
?>

<div class="admin-container">
  <h1>Admin</h1>

  <h3>Välj tabell och skriv sedan in ny data</h3>
  <fieldset class="admin-input">
        <input list="tables" id="table">
          <datalist id="tables">
            <option value="education">
            <option value="experience">
            <option value="portfolio">
          </datalist>
        </input>
        <input id="name" type="text" placeholder="Name of workplace/school/website" value=""></input>
        <input id="title" type="text" placeholder="Title/program/URL" value=""></input>
        <input id="description" type="text" placeholder="Description" value=""></input>
        <input id="start_date" type="text" placeholder="Start date" value=""></input>
        <input id="end_date" type="text" placeholder="End date" value=""></input>
        <button onclick="add_adminData()" type="button" class="add btn">Lägg till</button>
  </fieldset>
  
  <h3>Tidigare erfarenheter</h3>
  <div id="experience-form"></div>
  <h3>Utbildningar</h3>
  <div id="education-form"></div>
  <h3>Portfolio</h3>
  <div id="portfolio-form"></div>

  <form class="logoutform" action="" method="post">
          <input class="btn" name="logout" type="submit" value="Log out">
  </form>
</div>
<script>  // Call function
         get_adminEducation(); 
         get_adminExperience();
         get_adminPortfolio();
  </script>
<?php require "includes/footer.php" ?>

