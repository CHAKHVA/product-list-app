<?php

class Database
{
    private $host = "localhost";
    private $user = "id20689537_products_list";
    private $password = "CL*AA!6JnAVGWFih";
    private $db_name = "id20689537_product";

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
