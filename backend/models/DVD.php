<?php

include_once('Product.php');

class DVD extends Product
{
    private $size;

    public function __construct($id, $sku, $name, $price, $size = null)
    {
        parent::__construct($id, $sku, $name, $price, "DVD");
        $this->size = $size;
    }

    public function getSize()
    {
        return $this->size;
    }

    public function setSize($size)
    {
        $this->size = $size;
    }

    public function toArray()
    {
        return [
            "id" => $this->getId(),
            "sku" => $this->getSku(),
            "name" => $this->getName(),
            "price" => "{$this->getPrice()} $",
            "size" => "Size: {$this->getSize()} MB",
        ];
    }

    public function getAdditionalAttributes()
    {
        return [$this->size, null, null, null, null];
    }

    public function setAdditionalAttributes($row)
    {
        extract($row);
        $this->size = $size;
    }
}
