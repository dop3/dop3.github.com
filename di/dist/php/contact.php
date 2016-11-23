<?php

$title = 'Destination Italia Coming Soon contact';
$to = 'info@destinationitalia.com';
$subject = 'Destination Italia Coming Soon contact';
$headers = 'From: (Destination Italia Coming Soon contact)' . "\r\n" . 'Content-type: text/html; charset=utf-8';

$message = '
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
	<title>[SUBJECT]</title>
	<style type="text/css">

@media screen and (max-width: 600px) {
    table[class="container"] {
        width: 95% !important;
    }
}

	#outlook a {padding:0;}
		body{width:100% !important; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; margin:0; padding:0;}
		.ExternalClass {width:100%;}
		.ExternalClass, .ExternalClass p, .ExternalClass span, .ExternalClass font, .ExternalClass td, .ExternalClass div {line-height: 100%;}
		#backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
		img {outline:none; text-decoration:none; -ms-interpolation-mode: bicubic;}
		a img {border:none;}
		.image_fix {display:block;}
		p {margin: 1em 0;}
		h1, h2, h3, h4, h5, h6 {color: black !important;}

		h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {color: blue !important;}

		h1 a:active, h2 a:active,  h3 a:active, h4 a:active, h5 a:active, h6 a:active {
			color: red !important; 
		 }

		h1 a:visited, h2 a:visited,  h3 a:visited, h4 a:visited, h5 a:visited, h6 a:visited {
			color: purple !important; 
		}

		table td {border-collapse: collapse;}

		table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }

		a {color: #000;}

		@media only screen and (max-device-width: 480px) {

			a[href^="tel"], a[href^="sms"] {
						text-decoration: none;
						color: black; /* or whatever your want */
						pointer-events: none;
						cursor: default;
					}

			.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
						text-decoration: default;
						color: orange !important; /* or whatever your want */
						pointer-events: auto;
						cursor: default;
					}
		}


		@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
			a[href^="tel"], a[href^="sms"] {
						text-decoration: none;
						color: blue; /* or whatever your want */
						pointer-events: none;
						cursor: default;
					}

			.mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {
						text-decoration: default;
						color: orange !important;
						pointer-events: auto;
						cursor: default;
					}
		}

		@media only screen and (-webkit-min-device-pixel-ratio: 2) {
			/* Put your iPhone 4g styles in here */
		}

		@media only screen and (-webkit-device-pixel-ratio:.75){
			/* Put CSS for low density (ldpi) Android layouts in here */
		}
		@media only screen and (-webkit-device-pixel-ratio:1){
			/* Put CSS for medium density (mdpi) Android layouts in here */
		}
		@media only screen and (-webkit-device-pixel-ratio:1.5){
			/* Put CSS for high density (hdpi) Android layouts in here */
		}
		/* end Android targeting */
		h2{
			color:#181818;
			font-family:Helvetica, Arial, sans-serif;
			font-size:22px;
			line-height: 22px;
			font-weight: normal;
		}
		a.link1{

		}
		a.link2{
			color:#fff;
			text-decoration:none;
			font-family:Helvetica, Arial, sans-serif;
			font-size:16px;
			color:#fff;border-radius:4px;
		}
		p{
			color:#555;
			font-family:Helvetica, Arial, sans-serif;
			font-size:16px;
			line-height:160%;
		}
	</style>

<script type="colorScheme" class="swatch active">
  {
    "name":"Default",
    "bgBody":"ffffff",
    "link":"fff",
    "color":"555555",
    "bgItem":"ffffff",
    "title":"181818"
  }
</script>

</head>
<body>
	<table cellpadding="0" width="100%" cellspacing="0" border="0" id="backgroundTable" class="bgBody">
		<tr>
			<td>
				<table cellpadding="0" width="620" class="container" align="center" cellspacing="0" border="0">
					<tr>
						<td>
							<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
								<tr>
									<td class="movableContentContainer bgItem" colspan="2">
										
										<div class="movableContent:>
											<table cellpadding="0" cellspacing="0" border="0" align="center" width="600" class="container">
												<tr>
													<td width="100">&nbsp;</td>
													<td width="400">&nbsp;</td>
												</tr>
												<tr>
													<td width="100" style="font-size: 20px">Name</td>
													<td width="400" align="center" style="font-size: 16px">
														<div class="contentEditableContainer contentTextEditable">
						                					<div class="contentEditable" align="left" >
						                  						' . $_POST['name'] . '
						                					</div>
						              					</div>
													</td>
												</tr>
												<tr>
													<td width="100">&nbsp;</td>
													<td width="400">&nbsp;</td>
												</tr>
												<tr>
													<td width="100" style="font-size: 20px">Email</td>
													<td width="400" align="center" style="font-size: 16px">
														<div class="contentEditableContainer contentTextEditable">
						                					<div class="contentEditable" align="left" >
						                  						' . $_POST['email'] . '
						                					</div>
						              					</div>
													</td>
												</tr>
												<tr>
													<td width="100">&nbsp;</td>
													<td width="400">&nbsp;</td>
												</tr>
												<tr>
													<td width="100" style="font-size: 20px">Message</td>
													<td width="400" align="center" style="font-size: 16px">
														<div class="contentEditableContainer contentTextEditable">
						                					<div class="contentEditable" align="left" >
						                  						' . $_POST['msg'] . '
						                  						<br />
						                  						<br />
						                					</div>
						              					</div>
													</td>
												</tr>
											</table>
										</div>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</td>
		</tr>
	</table>
</body>
</html>
';

if ( ! empty( $_POST['name'] ) && ! empty( $_POST['email'] ) && ! empty( $_POST['msg'] ) ) {
    if ( filter_var( $_POST['email'], FILTER_VALIDATE_EMAIL ) ) {
        // send
        require 'PHPMailerAutoload.php';

        $mail = new PHPMailer;

//        $mail->SMTPDebug = 3;                               // Enable verbose debug output


        $mail->isSMTP();                                      // Set mailer to use SMTP
        $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth = true;                               // Enable SMTP authentication
        $mail->Username = 'infodestinationitalia@gmail.com';                 // SMTP username
        $mail->Password = 'Destin4tionP4ss!';                           // SMTP password
        $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
        $mail->Port = 587;                                    // TCP port to connect to

        $mail->setFrom('info@destinationitalia.com', 'Coming Soon Contact Form');
        $mail->addAddress($to, $_POST['name']);     // Add a recipient

        $mail->isHTML(true);                                  // Set email format to HTML

        $mail->Subject = $subject;
        $mail->Body    = $message;

        if(!$mail->send()) {
            $result['msg'] = '<span class="danger">Error sending Mail</span>';
            $result['status'] = 'error';
        } else {
            $result['status'] = 'success';
            $result['msg'] = '<span class="success">Your email was sent!</span>';
        }
    }else{
        $result['status'] = 'error';
        $result['msg'] = '<span class="danger">Please input a valid email address!</span>';
    }
} else {
    $result['status'] = 'error';
    $result['msg'] = '<span class="danger">All fields must be filled!</span>';
}

echo json_encode($result);