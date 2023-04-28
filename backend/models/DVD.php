<?php

class DVD extends Product
{
    private $size;

    public function __construct($id, $sku, $name, $price, $size)
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

    public function getSpecificAttributes()
    {
        return "Size: {$this->getSize()} MB";
    }

}
