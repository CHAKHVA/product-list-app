<?php

class Database
{
    private $host = "localhost";
    private $user = "root";
    private $password = "";
    private $dbname = "products_list";

    private $connection;

    private function __construct()
    {
        $this->connect();
    }

    private function connect()
    {
        $this->connection = new mysqli($this->host, $this->user, $this->password, $this->dbname);

        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
    }

    public function query($sql)
    {
        $result = $this->connection->query($sql);

        if ($this->connection->error) {
            die("Query failed: " . $this->connection->error);
        }

        return $result;
    }

    public function escapeString($string)
    {
        return $this->connection->real_escape_string($string);
    }

    public function close()
    {
        $this->connection->close();
    }
}
