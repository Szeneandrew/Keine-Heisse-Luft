<?php

session_start();

if (isset($_SESSION['userID'])) {
    
    //Logge den User aus, wenn er länger als eine halbe Stunde inaktiv war
    if ($_SESSION['timestamp'] + 1800 < time()) {

        session_unset();
        session_destroy();
        echo '{
            "status": "logged out"
        }';

    //Update die Session zu dem aktuellen Zeitstempel, wenn Aktivität erkannt wird
    } else {

        $_SESSION['timestamp'] = time();
        echo '{
            "status": "logged in"
        }';

    }

//Erkenne keine Session, wenn noch garnicht eingeloggt wurde
} else {

    session_unset();
    session_destroy();
    echo '{
        "satus": "logged hella out"
    }';

}