package com.today.here.booking.mail;

import jakarta.mail.MessagingException;
import java.io.FileNotFoundException;

public interface EmailService {

     void sendSimpleEmail(final String toAddress, final String subject, final String message);

}
