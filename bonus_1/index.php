<?php 

$localserver = "localhost";
$db_user = "root";
$db_password = "";
$db_name = "accommodation";

$connection = new mysqli($localserver, $db_user, $db_password, $db_name);

$query_result = [];
$error = "";

if(isset($_POST["tenants"])) {
    if($connection->connect_error) {
        die("Connection Error ".$conn->connect_error);
        header("location: index.php?error=servererror");
        exit();
    }

    $sql = "SELECT apt_tenant.tenant_id, tenants.tenant_name, COUNT(apt_tenant.tenant_id) AS num_of_apt ";
    $sql .= "FROM apt_tenant ";
    $sql .= "JOIN tenants ON tenants.tenant_id = apt_tenant.tenant_id ";
    $sql .= "GROUP BY apt_tenant.tenant_id HAVING COUNT(apt_tenant.tenant_id) > 1;";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
   
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $query_result[] = $row;
        }
    } else {
        $query_result = [];
    }
    
} else if(isset($_POST["open_building"])) {
    $sql = "SELECT building.building_name, COUNT(building.building_name) AS num_of_open_req FROM apartments ";
    $sql .= "JOIN requests ON requests.apt_id = apartments.apt_id ";
    $sql .= "JOIN building ON building.building_id = apartments.building_id ";
    $sql .= "WHERE requests.status = 'open' ";
    $sql .= "GROUP BY building.building_name HAVING COUNT(building.building_name) > 0;";
    $stmt = $connection->prepare($sql);
    $stmt->execute();
    $result = $stmt->get_result();
   
    if($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $query_result[] = $row;
        }
    } else {
        $query_result = [];
    }
   
    $stmt->close();
    $connection->close();
}

?>





<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    table {
        border-collapse: collapse;
    }
    td {
        padding: 5px;
        border: 1px solid #000;
    }
</style>
<body>
    <?php 
        if(isset($_POST["tenants"]) || isset($_POST["open_building"])) {
            echo "<a href='index.php'>back to home<a>";
        } else {
            echo "<p>Click on any button to view record from database<p>";
        }
    ?>
    <form action="index.php" method="post">
        <input type="submit" name="tenants" value="Tenants having more than one apartment">
    </form>
    <br>
    <form action="index.php" method="post">
        <input type="submit" name="open_building" value="open building">
    </form>

    <?php if(isset($_POST['tenants']) && $query_result != []) { ?>
        <p>Tenants with more than one apartments!</p>
        <table>
            <tr>
                <td>Tenant Name</td>
                <td>Number of Apartments</td>
            </tr>
            <?php 
                foreach($query_result as $para) {
                    $tenant_name = ucwords($para['tenant_name']);
                    echo "<tr>
                    <td>$tenant_name</td>
                    <td>{$para['num_of_apt']}</td>
                </tr>";
                }
            ?>
        </table>
   <?php } if(isset($_POST['open_building']) && $query_result != []) { ?>
        <p>Buildings with open request</p>
        <table>
            <tr>
                <td>Building Name</td>
                <td>Number of Openings</td>
            </tr>
            <?php 
                foreach($query_result as $para) {
                    $building_name = ucwords($para['building_name']);
                    echo "<tr>
                    <td>$building_name</td>
                    <td>{$para['num_of_open_req']}</td>
                </tr>";
                }
            ?>
        </table>
   <?php } ?>

</body>
</html>