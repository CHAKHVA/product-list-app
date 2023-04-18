<?php

require_once '../config/database.php';

header('Content-Type: application/json');

$dbConnection = new Database();

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $products = $dbQueries->getAllProducts();
    echo json_encode($products);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
