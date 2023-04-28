<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once '../config/database.php';
require_once '../controllers/ProductController.php';


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $database = new Database();
    $db = $database->getConnection();
    $controller = new ProductController($db);
    $data = json_decode(file_get_contents("php://input"));
    $data = get_object_vars($data);
    $controller->createProduct($data);
    echo json_encode(['message' => 'Product created successfully.']);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
