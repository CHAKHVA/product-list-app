<?php

abstract class Product
{
    const TABLE_NAME = "product";

    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    protected $product_type;

    protected $conn;

    public function __construct($db, $id, $sku, $name, $price, $product_type)
    {
        $this->conn = $db;
        $this->id = $id;
    }

    public function getSku()
    {
        return $this->sku;
    }

    public function setSku($sku)
    {
        $this->sku = $sku;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function setPrice($price)
    {
        $this->price = $price;
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
