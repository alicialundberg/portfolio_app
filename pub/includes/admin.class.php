<?php

class admin {
    //DB 
    private $db;

     //Constructor with DB
    function __construct() {
        $this->db = new mysqli('localhost', 'root', '', '') or die('Fel vid anslutning');
        if($this->db->connect_errno > 0) {
            die("Fel vid anslutning");
        }
    }

    public function loginUser($user, $psw) {

        $sql = "SELECT password FROM users WHERE  username = '$user'";
        $result = $this->db->query($sql);

        if($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $storedpassword = $row['password'];
        $username = $row['username'];

            if($storedpassword == $psw) {
            $_SESSION['username'] = $username;
                return true;
            } else {
                return false;
            }
        }
    }
}

?>
