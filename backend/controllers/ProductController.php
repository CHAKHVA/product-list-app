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

        $productTypes = [
            'DVD' => ['class' => 'DVD', 'args' => [$sku, $name, $price, $size]],
            'Book' => ['class' => 'Book', 'args' => [$sku, $name, $price, $weight]],
            'Furniture' => ['class' => 'Furniture', 'args' => [$sku, $name, $price, $height, $width, $length]],
        ];

        $productInfo = $productTypes[$product_type];
        $product = new $productInfo['class'](null, ...$productInfo['args']);
        $this->model->createProduct($product);
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
