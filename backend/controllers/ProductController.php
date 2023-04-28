<?php
require_once '../models/ProductModel.php';

class ProductController
{
    private $model;

    public function __construct($db)
    {
        $this->model = new ProductModel($db);
    }

    public function createProduct($data)
    {
        extract($data);

        $product = null;
        switch ($product_type) {
            case 'DVD':
                $product = new DVD(null, $sku, $name, $price, $size);
                break;
            case 'Book':
                $product = new Book(null, $sku, $name, $price, $weight);
                break;
            case 'Furniture':
                $product = new Furniture(null, $sku, $name, $price, $height, $width, $length);
                break;
        }

        if ($product) {
            $this->model->createProduct($product);
        }
    }

    public function readProducts()
    {
        return $this->model->readProducts();
    }

    public function deleteProduct($id)
    {
        $this->model->deleteProduct($id);
    }
}
