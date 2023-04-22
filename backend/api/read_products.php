<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once '../config/database.php';
require_once '../classes/Product.php';


$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $result = $product->readProducts();
    $num = $result->num_rows;
    if ($num > 0) {
        $products = array();

        while ($row = $result->fetch_assoc()) {
            extract($row);
            $product_item = array(
                "id" => $id,
                "sku" => $sku,
                "name" => $name,
                "price" => $price . "$",
                "size" => $size ? "Size: " . $size . " MB" : null,
                "weight" => $weight ? "Weight: " . $weight . "KG" : null,
                "dimension" => $height ? "Dimension: " . $height . "x" . $width . "x" . $length : null
            );
            array_push($products, $product_item);
        }
        http_response_code(200);
        echo json_encode($products);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
