<?php

class Book extends Product
{
    private $weight_kg;

    public function __construct($sku, $name, $price, $weight_kg)
    {
        parent::__construct($sku, $name, $price);
        $this->product_type = 'Book';
        $this->weight_kg = $weight_kg;
    }

    public function getSpecificAttribute()
    {
        return $this->weight_kg;
    }

    public function setSpecificAttribute($weight_kg)
    {
        $this->weight_kg = $weight_kg;
    }
}
