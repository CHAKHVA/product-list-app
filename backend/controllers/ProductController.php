<?php
require_once 'ProductModel.php';

class ProductController
{
    private $model;

    public function __construct($db)
    {
        $this->model = new ProductModel($db);
    }

    /*public function createProduct($type, $name, $price, $additionalInfo)
    {
        $product = null;

        switch ($type) {
            case 'DVD':
                $product = new DVD(null, $name, $price, $additionalInfo);
                break;
            case 'Book':
                $product = new Book(null, $name, $price, $additionalInfo);
                break;
            case 'Furniture':
                $product = new Furniture(null, $name, $price, $additionalInfo);
                break;
        }

        if ($product) {
            $this->model->addProduct($product);
        }
    }*/

    public function readProducts()
    {
        return $this->model->readProducts();
    }

    public function deleteProduct($id)
    {
        $this->model->deleteProduct($id);
    }
}
