<?php
include("includes/header.php");
include("includes/admin.class.php");

if (session_status() == PHP_SESSION_NONE) {
  session_start();
}

// Spara variabler om loginknapp klickas
if(isset($_POST['loginButton'])) {
    $user = $_POST['username'];
    $psw = $_POST['psw'];
  
    // Anropar Admin-klass
    $admin = new admin;
  
    // Skickar vidare till secret.php om korrekt inloggningsuppgifter
    if($admin->loginUser($user, $psw)) {
      header("Location: admin.php");
    } else {
      echo "<p>Felaktigt användarnamn eller lösenord</p>";
    }
  }
?>

<div class="login-container">
  <h2>Logga in här!</h2>
  <div>
    <form method="post">
      <input type="text" name="username" placeholder="Användarnamn: " />
      <input type="password" name="psw" placeholder="Lösenord: "  />
      <input type="submit" name="loginButton" class="loginButton btn" value="Logga in"/>
    </form>
  </div>
</div>

<?php
include("includes/footer.php");
?>

