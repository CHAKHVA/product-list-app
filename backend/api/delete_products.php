<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Authorization, X-Requested-With');

require_once '../config/database.php';
require_once '../controllers/ProductController.php';

echo json_encode(['message' => 'Product deleted successfully.']);

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'DELETE') {
    $database = new Database();
    $db = $database->getConnection();
    $controller = new ProductController($db);
    $data = json_decode(file_get_contents("php://input"));
    foreach ($data->ids as $id) {
        $controller->deleteProduct($id);
    }
    echo json_encode(['message' => 'Product deleted successfully.']);
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}
