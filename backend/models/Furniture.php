<?php

include_once('Product.php');

class Furniture extends Product
{
    private $height;
    private $width;
    private $length;

    public function __construct($id, $sku, $name, $price, $height = null, $width = null, $length = null)
    {
        parent::__construct($id, $sku, $name, $price, "Furniture");
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

    public function toArray()
    {
        return [
            "id" => $this->getId(),
            "sku" => $this->getSku(),
            "name" => $this->getName(),
            "price" => "{$this->getPrice()} $",
            "dimension" => "Dimension: {$this->getHeight()}x{$this->getWidth()}x{$this->getLength()}",
        ];
    }

    public function getAdditionalAttributes()
    {
        return [null, null, $this->height, $this->width, $this->length];
    }

    public function setAdditionalAttributes($row)
    {
        extract($row);
        $this->height = $height;
        $this->width = $width;
        $this->length = $length;
    }
}
