<?php

class Furniture extends Product
{
    private $height;
    private $width;
    private $length;

    public function __construct($id, $sku, $name, $price, $height, $width, $length)
    {
        parent::__construct($id, $sku, $name, $price);
        $this->product_type = 'Furniture';
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }

    public function getHeight()
    {
        return $this->height;
    }

    public function setHeight($height)
    {
        $this->height = $height;
    }

    public function getWidth()
    {
        return $this->width;
    }

    public function setWidth($width)
    {
        $this->width = $width;
    }

    public function getLength()
    {
        return $this->length;
    }

    public function setLength($length)
    {
        $this->length = $length;
    }

    public function getSpecificAttribute()
    {
        return "Dimensions: {$this->getHeight()}x{$this->getWidth()}x{$this->getLength()}";
    }

    public function setSpecificAttribute($dimensions)
    {
        list($height, $width, $length) = explode('x', $dimensions);
        $this->setHeight($height);
        $this->setWidth($width);
        $this->setLength($length);
    }
}
