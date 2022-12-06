<?php
require 'koneksi.php';
$data = [];
$username = $_GET['username'];
$query = mysqli_query($koneksi, "select * from diary where username='$username'");
while ($row = mysqli_fetch_object($query)) {
    $data[] = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);
