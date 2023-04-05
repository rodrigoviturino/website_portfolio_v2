<?php

// Importar as classes
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Carregar o autoloader do composer
require 'vendor/autoload.php';

// Instância da classe
$mail = new PHPMailer(true);


// if (isset($_POST['nome']) && !empty($_POST['nome'])) {
//   $assunto = $_POST['nome'];
// }
// if (isset($_POST['descricao']) && !empty($_POST['descricao'])) {
//   $mensagem = $_POST['descricao'];
// }

try
{

  $mail->isSMTP();
  $mail->SMTPAuth = true;
  $mail->Username = 'rodrigo_viturino@outlook.com';
  $mail->Password = 'maikera123';
  $mail->SMTPSecure = 'tsl';
  $mail->Host = 'smtp-mail.outlook.com';
  $mail->Port = 587;

  //Recipients
  $mail->setFrom('viturino_souza@outlook.com', 'Maik');
  $mail->addAddress('viturino_souza@outlook.com', 'Rodrigo Viturino');     //Add a recipient
  $mail->addAddress('viturino_souza@outlook.com');               //Name is optional
  $mail->addReplyTo('viturino_souza@outlook.com', 'Information');
  //$mail->addCC(''); // optional
  //$mail->addBCC(''); // optional

  //Attachments
  //$mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
  //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = $nome;
  $mail->Body    = $mensagem;
  $mail->AltBody = 'Este é o cortpo da mensagem para clientes de e-mail que não reconhecem HTML';

  $mail->send();

  echo 'A mensagem foi enviada!';

} catch (Exception $e){
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}