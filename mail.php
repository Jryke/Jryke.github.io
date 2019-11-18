<?php

    // Only process POST reqeusts.
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get the form fields and remove whitespace.
        $name = strip_tags(trim($_POST["focusedInput8"]));
				$name = str_replace(array("\r","\n"),array(" "," "),$name);
        $email = filter_var(trim($_POST["focusedInput9"]), FILTER_SANITIZE_EMAIL);
        $phoneNo = trim($_POST["focusedInput10"]);
        $msg = trim($_POST["focusedInput11"]);

        // Check that data was sent to the mailer.
        if ( empty($name) OR empty($phoneNo) OR empty($msg) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
            // Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Please complete the form and try again.";
            exit;
        }

        // Set the recipient email address.
        // FIXME: Update this to your desired email address.
        $recipient = "crazycafe.net@gmail.com";    // Replace the email address with your email where you want to send message.

        // Set the email subject.
        $subject = "Message from Mat by $name";

        // Build the email content.
        $email_content = "$name sent a message!\n\n";
        $email_content .= "Email: $email\n\n";
        $email_content .= "Phone number: $phoneNo\n\n";
        $email_content .= "Message: $msg \n\n";

        // Build the email headers.
        $email_headers = "From: Mat Template\r\n";
        $email_headers = "Reply-To: ".$name." <".$email.">\r\n";

        // Send the email.
        if (mail($recipient, $subject, $email_content, $email_headers)) {
            // Set a 200 (okay) response code.
            http_response_code(200);
            echo "Thank You! You have tested the contact form. Message has been sent!";
        } else {
            // Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Oops! Something went wrong and we couldn't send your message.";
        }

    } else {
        // Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "There was a problem with your submission, please try again.";
    }

?>