<?php
require_once 'DVD.php';
require_once 'Book.php';
require_once 'Furniture.php';

class ProductModel
{
    private $db;
    private $table_name = "products";

    public function __construct($db)
    {
        $this->db = $db;
    }

    private function createProductObject($row)
    {
        extract($row);
        switch ($product_type) {
            case "DVD":
                return new DVD($id, $sku, $name, $price, $size);
            case "Book":
                return new Book($id, $sku, $name, $price, $weight);
            case "Furniture":
                return new Furniture($id, $sku, $name, $price, $height, $width, $length);
            default:
                return null;
        }
    }

    public function readProducts()
    {
        $query = "SELECT * FROM {$this->table_name} ORDER BY id";
        $result = $this->db->query($query);

        $products = array();

        while ($row = $result->fetch_assoc()) {
            $products[] = $this->createProductObject($row);
        }

        return $products;
    }


    /*public function createProduct($product)
    {
        $query = "INSERT INTO products (name, price, type, additional_info) VALUES (?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);
        $name = $product->getName();
        $price = $product->getPrice();
        $type = $product->getType();
        $additional_info = $product->getAdditionalInfo();
        $stmt->bind_param('sdss', $name, $price, $type, $additional_info);
        $stmt->execute();
    }*/

    public function deleteProduct($id)
    {
        $query = "DELETE FROM products WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i', $id);
        $stmt->execute();
    }
}
