<?php

$applicant_id = $_GET["applicant_id"] ?? "";
$full_name = $_GET["full_name"] ?? "";
$email = $_GET["email"] ?? "";
$phone = $_GET["phone"] ?? "";
$gender = $_GET["gender"] ?? "";
$job_position = $_GET["job_position"] ?? "";
$qualification = $_GET["qualification"] ?? "";
$address = $_GET["address"] ?? "";
$cv = $_GET["cv"] ?? "";

?>

<!DOCTYPE html>
<html>

<head>
    <title>Application Result</title>
</head>

<body>

    <h2>Application Result</h2>

    <p>Applicant ID: <?php echo htmlspecialchars($applicant_id); ?></p>

    <p>Name: <?php echo htmlspecialchars($full_name); ?></p>

    <p>Email: <?php echo htmlspecialchars($email); ?></p>

    <p>Phone: <?php echo htmlspecialchars($phone); ?></p>

    <p>Gender: <?php echo htmlspecialchars($gender); ?></p>

    <p>Job Position: <?php echo htmlspecialchars($job_position); ?></p>

    <p>Qualification: <?php echo htmlspecialchars($qualification); ?></p>

    <p>Address: <?php echo htmlspecialchars($address); ?></p>

    <p>Uploaded CV: <?php echo htmlspecialchars($cv); ?></p>

    <p><strong>Application submitted successfully<strong></p>

</body>

</html>