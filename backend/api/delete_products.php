<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');
header('HTTP/1.1 200 OK');

require_once '../config/database.php';
require_once '../models/Product.php';


$database = new Database();
$db = $database->getConnection();

$product = new Product($db);

$data = json_decode(file_get_contents("php://input"));

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    foreach ($data->ids as $id) {
        $product->deleteProduct($id);
    }
    http_response_code(200);
    echo json_encode("Succesfully deleted products");
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
