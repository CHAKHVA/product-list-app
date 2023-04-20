<?php

class Product
{
    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    protected $product_type;

    protected $conn;
    protected $table_name = "product";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function read_products()
    {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }
}
