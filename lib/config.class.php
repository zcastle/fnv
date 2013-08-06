<?php

class config {
    private $server = '192.168.0.2';
    private $username = 'root';
    private $password = 'Jcvldc..';
    private $database_name = 'fnv';
    
    public function getServer() {
        return $this->server;
    }
    
    public function getUserName() {
        return $this->username;
    }
    
    public function getPassword() {
        return $this->password;
    }
    
    public function getDataBaseName() {
        return $this->database_name;
    }
}

?>