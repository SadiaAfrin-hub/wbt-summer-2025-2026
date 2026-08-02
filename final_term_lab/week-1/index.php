<!DOCTYPE html>
<html>
<body>
<h3>UNIVERSITY CAFETERIA</h3>
<?php
$studentName = "Sadia Afrin";
$studentID = "23-54513-3";
$choice = 4;
$quantity = 2;
switch ($choice) {
    case 1:
        $foodItem = "Burger";
        $price = 5;
        break;

    case 2:
        $foodItem = "Pizza";
        $price = 8;
        break;

    case 3:
        $foodItem = "Sandwich";
        $price = 4;
        break;

    case 4:
        $foodItem = "Coffee";
        $price = 3;
        break;

    default:
        $foodItem = "Invalid Item";
        $price = 0;
}

$subtotal = $price * $quantity;
if ($subtotal >= 30) {
    $discountPercent = 20;
} elseif ($subtotal >= 20) {
    $discountPercent = 10;
} else {
    $discountPercent = 0;
}
$discountAmount = ($subtotal * $discountPercent) / 100;
$finalBill = $subtotal - $discountAmount;
//echo "UNIVERSITY CAFETERIA<br>";

echo "Student Name : " . $studentName . "<br>";
echo "Student ID : " . $studentID . "<br>";
echo "Food Item : " . $foodItem . "<br>";
echo "Price : $" . $price . "<br>";
echo "Quantity : " . $quantity . "<br><br>";
echo "Ordered Items:<br>";

for ($i = 1; $i <= $quantity; $i++) {
    echo "Item " . $i . ": " . $foodItem . "<br>";
}
echo "<br>";
echo "Subtotal : $" . $subtotal . "<br>";
echo "Discount : " . $discountPercent . "%<br>";
echo "Discount Amount : $" . $discountAmount . "<br>";
echo "Final Bill : $" . $finalBill . "<br>";
?>
<footer>THANK YOU FOR VISITING</footer>
</body>
</html>
