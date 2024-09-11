<?php
// Dados de login estáticos para validação
$valid_username = 'admin@gmail.com';
$valid_password = 'admin@123';

// Obtém os dados enviados via POST em JSON
$data = json_decode(file_get_contents("php://input"));

if ($data->username === $valid_username && $data->password === $valid_password) {
    // Login bem-sucedido
    echo json_encode(["success" => true]);
} else {
    // Falha no login
    echo json_encode(["success" => false]);
}
?>
