<?php

class Database
{
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $db_name = "products_list";

    public $conn;

    public function getConnection()
    {
        $this->conn = new mysqli($this->host, $this->user, $this->password, $this->db_name);

        if ($this->conn->connect_error) {
            die("Connection failed: " . $this->conn->connect_error);
        }

        return $this->conn;
    }
}
