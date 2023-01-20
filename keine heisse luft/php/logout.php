<?php

//Löscht Session, wenn sich User ausloggt.
session_start();
session_unset();
session_destroy();