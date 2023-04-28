<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

require_once '../config/database.php';
require_once '../controllers/ProductController.php';


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $database = new Database();
    $db = $database->getConnection();
    $controller = new ProductController($db);
    $products = $controller->readProducts();
    echo json_encode($products);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
