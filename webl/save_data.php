<?php
// Отримуємо дані з форми
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$interest = isset($_POST['interest']) ? htmlspecialchars($_POST['interest']) : "Не вказано";
$favorite_boxer = isset($_POST['favorite_boxer']) ? htmlspecialchars($_POST['favorite_boxer']) : "Не вказано";
$frequency = isset($_POST['frequency']) ? htmlspecialchars($_POST['frequency']) : "Не вказано";

// Формуємо текст для запису у файл
$data = "Ім'я: " . $name . "\n";
$data .= "E-mail: " . $email . "\n";
$data .= "Цікавиться професійним боксом: " . $interest . "\n";
$data .= "Улюблений боксер: " . $favorite_boxer . "\n";
$data .= "Частота перегляду боїв: " . $frequency . "\n\n";

// Зберігаємо дані у файл data.txt
file_put_contents('data.txt', $data, FILE_APPEND);

// Перенаправляємо назад на головну сторінку
header("Location: index.html");
exit();
?>
