<?php
    require './conn.php';
    $sql = "SELECT * FROM popcat WHERE `popcat`.`id` = 1";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    // echo "nuea : " . $row["nuea"]. "<br>klang : " . $row["klang"]. "<br>esan : " . $row["esan"]. "<br>";
    $nueapass = $row["nuea"];
    print $nueapass;
    $conn->close();