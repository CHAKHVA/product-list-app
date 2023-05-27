<?php

include_once('Product.php');

class Book extends Product
{
    private $weight;

    public function __construct($id, $sku, $name, $price, $weight = null)
    {
        parent::__construct($id, $sku, $name, $price, "Book");
        $this->weight = $weight;
    }

    public function getWeight()
    {
        return $this->weight;
    }

    public function setWeight($weight)
    {
        $this->weight = $weight;
    }

    public function toArray()
    {
        return [
            "id" => $this->getId(),
            "sku" => $this->getSku(),
            "name" => $this->getName(),
            "price" => "{$this->getPrice()} $",
            "weight" => "Weight {$this->getWeight()}KG",
        ];
    }

    public function getAdditionalAttributes()
    {
        return [null, $this->weight, null, null, null];
    }

    public function setAdditionalAttributes($row)
    {
        extract($row);
        $this->weight = $weight;
    }
}
