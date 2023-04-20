<?php

class DVD extends Product
{
    private $size;

    public function __construct($id, $sku, $name, $price, $size)
    {
        parent::__construct($id, $sku, $name, $price);
        $this->product_type = 'DVD';
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

    public function getSpecificAttribute()
    {
        return "Size: {$this->getSize()} MB";
    }

    public function setSpecificAttribute($size)
    {
        $this->setSize($size);
    }
}
