/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

package mail;

/**
 *
 * @author Saurabh
 */
import javax.mail.Session;
import javax.mail.Message;
import javax.mail.Transport;
import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.InternetAddress;
import java.util.Properties;

public class Main {
  public static void main(String[] args) {

      try{
    String from = "admin@gmail.com";
    String to = "gyanesh19@gmail.com";
    String subject = "Hi There...";
    String text = "How are you?";

    Properties properties = new Properties();
    properties.put("mail.smtp.host", "localhost");
    properties.put("mail.smtp.port", "25");
    Session session = Session.getDefaultInstance(properties, null);

    Message message = new MimeMessage(session);
    message.setFrom(new InternetAddress(from));
    message.setRecipient(Message.RecipientType.TO, new InternetAddress(to));
    message.setSubject(subject);
    message.setText(text);

    Transport.send(message);
      }
      catch(Exception e)
      {
          e.printStackTrace();
      }
      }


  
}