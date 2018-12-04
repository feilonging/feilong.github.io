<?php
  $con = mysqli_connect("localhost","root","GDHL007","sysu");
 
  if(!empty($_GET['account'])){
    $sql1 = 'select * from login where account = "'.$_GET['account'].'"';
    //数据库操作
    $result1 = mysqli_query($con,$sql1);
    if(mysqli_num_rows($result1)>0)
      echo '<font style="color:#00FF00;">该用户存在</font>';
    else 
      echo '<font style="color:#FF0000;">该用户不存在</font>';
    mysqli_close($con);
  }else
    echo '<font style="color:#FF0000;">用户名不能为空</font>';
 
?>