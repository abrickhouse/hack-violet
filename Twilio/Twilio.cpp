using System; 
using System.Collections.Generic; 
using Twilio; 
using Twilio.Rest.Api.V2010.Account; 
using Twilio.Types; 
 
class Example 
{ 
    static void Main(string[] args) 
    { 
        var accountSid = "[ENTER SID]"; 
        var authToken = "[AuthToken]"; 
        TwilioClient.Init(accountSid, authToken); 
 
        var messageOptions = new CreateMessageOptions( 
            new PhoneNumber("Your Mobile Number"));   
        messageOptions.MessagingServiceSid = "Enter Service ID";     
 
        var message = MessageResource.Create(messageOptions); 
        Console.WriteLine(message.Body); 
    } 
}
