<?php
include "MailChimp.php";

$MC_API_KEY = '4bd05a15aa28acbcacf4b37f845eb280-us10';
$MC_FORM_ID = 'd0cd4d4dad';

if ( empty( $MC_API_KEY ) ) {
	die( '<span class="danger">Admin please enter API key</span>' );
} elseif ( empty( $MC_FORM_ID ) ) {
	die( '<span class="danger">Admin please enter list ID</span>' );
}


$MailChimp = new \Drewm\MailChimp( $MC_API_KEY );
$lists = $MailChimp->call( 'lists/list' );
$data = $lists['data'];
$email = strtolower( $_POST['email'] );
$msg1 = '<span class="danger">Invalid email format</span>';
$msg2 = '<span class="success">You have successfully subscribed</span>';

if (!filter_var( $email, FILTER_VALIDATE_EMAIL ) ) {
	echo $msg1;
} else {
	$result = $MailChimp->call( 'lists/subscribe', array(
		'id' => $MC_FORM_ID,
		'email' => array( 'email' => $email ),
		'merge_vars' => array( 'FNAME' => '', 'LNAME' => '' ),
		'double_optin' => false,
		'update_existing' => true,
		'replace_interests' => false,
		'send_welcome' => false,
	) );

	die( $msg2 );
}
?>
