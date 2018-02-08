<?php
error_reporting(0);

$mailto = "info@slonrf.com";

$name = trim(htmlentities($_POST['name'], ENT_QUOTES, "utf-8"));
$phone = trim(htmlentities($_POST['phone'], ENT_QUOTES, "utf-8"));
$text = trim(htmlentities($_POST['comment'], ENT_QUOTES, "utf-8"));

$errors = Array();


if(empty($name)) $errors[0] = 1;
if(empty($phone)) $errors[1] = 1;


if(count($errors)) {
    echo $errors[0].'|'.$errors[1];
} else {
    $to=$mailto;
    $subject="SLONRF | Запрос с сайта";
    $body="
    <div style=\"color: #000000;\">
    Пожалуйста, не отвечайте на это письмо, письмо создано автоматически.<br/><br/>

    <table border=\"0\" cellpadding=\"5\" cellspacing=\"0\" width=\"100%\">
        <tr bgcolor=\"#EEEEEE\">
            <td width=\"50%\"><font style=\"font-size: 18px;\"><b>Запрос с сайта SLONRF</b></font></td>
            <td width=\"50%\"></td>
        </tr>";

    if(!empty($name)) {
        $body.="<tr style=\"font-size: 16px;\">
            <td width=\"50%\">Имя:</td>
            <td width=\"50%\">".$name."</td>
        </tr>";
    }
    if(!empty($phone)) {
        $body.="<tr style=\"font-size: 16px;\">
            <td width=\"50%\">Телефон:</td>
            <td width=\"50%\">".$phone."</td>
        </tr>";
    }
    if(!empty($text)) {
        $body.="<tr style=\"font-size: 16px;\">
            <td width=\"50%\">Сообщение:</td>
            <td width=\"50%\">".$text."</td>
        </tr>";
    }

    $body.="</table>
    </div>
    ";
    $headers = "Content-type: text/html; charset=\"utf-8\"\r\n";
    $headers .= "From: robot@auralounge.ru ";
    

    if (mail($to, $subject, $body, $headers)) {
        echo 'ok';
    }
}
	
?>