<?php

abstract class Product
{
    protected $conn;
    protected $table_name = "product";

    protected $id;
    protected $sku;
    protected $name;
    protected $price;
    protected $product_type;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
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

    public function getProductType()
    {
        return $this->product_type;
    }

    public function setProductType($product_type)
    {
        $this->product_type = $product_type;
    }

    protected abstract function getSpecificAttributes();
    protected abstract function createProduct();
    protected abstract function readProducts();
    protected abstract function deleteProducts();
}
