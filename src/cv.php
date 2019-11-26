<?php

  require "includes/header.php";
?>

  <div class="body-wrapper">

    <div class="timeline-container">
      <h2> Tidigare arbetserfarenheter</h2>
      <div class="timeline">
       
        <div id="exp_div"></div>

      </div>
  </div>
        

    <div class="list-container">
      <h2> Utbildningar </h2>
      <div class="timeline">

        <div id="edu_div"></div>
         
      </div>
  </div>
  <script> get_experience();  // Call function
         get_education(); 
  </script>

<?php require "includes/footer.php" ?>

