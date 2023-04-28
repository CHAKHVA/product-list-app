<?php
require_once 'DVD.php';
require_once 'Book.php';
require_once 'Furniture.php';

class ProductModel
{
    private $db;
    private $table_name = "product";

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

    public function createProduct(Product $product)
    {
        $query = "INSERT INTO {$this->table_name} (sku, name, price, product_type, size, weight, height, width, length) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);

        $sku = $product->getSku();
        $name = $product->getName();
        $price = $product->getPrice();
        $product_type = $product->getProductType();
        $size = null;
        $weight = null;
        $height = null;
        $width = null;
        $length = null;

        if ($product instanceof DVD) {
            $size = $product->getSize();
        }
        else if ($product instanceof Book) {
            $weight = $product->getWeight();
        }
        else if ($product instanceof Furniture) {
            $height = $product->getHeight();
            $width = $product->getWidth();
            $length = $product->getLength();
        }

        $stmt->bind_param('ssdsiiiii', $sku, $name, $price, $product_type, $size, $weight, $height, $width, $length);
        $stmt->execute();
    }

    public function readProducts()
    {
        $query = "SELECT * FROM {$this->table_name} ORDER BY id";
        $result = $this->db->query($query);

        $products = array();

        while ($row = $result->fetch_assoc()) {
            $product = $this->createProductObject($row);
            $products[] = $product->toArray();
        }
        return $products;
    }

    public function deleteProduct($id)
    {
        $query = "DELETE FROM {$this->table_name} WHERE id = ?";
        $stmt = $this->db->prepare($query);
        $stmt->bind_param('i', $id);
        $stmt->execute();
    }
}
