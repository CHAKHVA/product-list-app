<?php

class Book extends Product
{
    private $weight_kg;

    public function __construct($id, $sku, $name, $price, $weight_kg)
    {
        parent::__construct($id, $sku, $name, $price);
        $this->product_type = 'Book';
        $this->weight_kg = $weight_kg;
    }
}
