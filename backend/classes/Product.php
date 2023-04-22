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

    public function readProducts()
    {
        $query = "SELECT * FROM " . $this->table_name . " ORDER BY id";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        $result = $stmt->get_result();
        return $result;
    }

    public function deleteProduct($id)
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = " . $id;
        $stmt = $this->conn->prepare($query);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}
