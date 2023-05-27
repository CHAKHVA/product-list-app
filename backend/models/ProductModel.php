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

        $product = null;

        $productTypes = [
            "DVD" => DVD::class,
            "Book" => Book::class,
            "Furniture" => Furniture::class,
        ];

        $productClass = $productTypes[$product_type];
        $product = new $productClass($id, $sku, $name, $price);
        $product->setAdditionalAttributes($row);

        return $product;
    }

    public function createProduct(Product $product)
    {
        $query = "INSERT INTO {$this->table_name} (sku, name, price, product_type, size, weight, height, width, length) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $this->db->prepare($query);

        $sku = $product->getSku();
        $name = $product->getName();
        $price = $product->getPrice();
        $product_type = $product->getProductType();

        $additionalAttributes = $product->getAdditionalAttributes();

        $stmt->bind_param('ssdsiiiii', $sku, $name, $price, $product_type, ...$additionalAttributes);
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
