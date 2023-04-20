<?php

require_once '../config/database.php';
require_once '../classes/Product.php';

header('Access-Control-Origin: *');
header('Content-Type: application/json');

$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $result = $product->read_products();
    $num = $result->num_rows;
    if ($num > 0) {
        $products = array();

        while ($row = $result->fetch_assoc()) {
            extract($row);
            $product_item = array(
                "id" => $id,
                "sku" => $sku,
                "name" => $name,
                "price" => $price,
                "product_type" => $product_type,
                "size" => $size,
                "weight" => $weight,
                "height" => $height,
                "width" => $width,
                "length" => $length
            );
            array_push($products, $product_item);
        }
        http_response_code(200);
        echo json_encode($products);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
