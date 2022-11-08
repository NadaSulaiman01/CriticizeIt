using MimeKit;
using Org.BouncyCastle.Asn1.Ocsp;
using MailKit.Net.Smtp;
namespace CriticizeIt.Services.MailService
{
    public class MailService : IMailService
    {
        private readonly IConfiguration config;

        public MailService(IConfiguration config)
        {
            this.config = config;
        }
        public async Task SendEmailAsync(string to, string subject, string body)
        {

            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse(config.GetSection("EmailUserName").Value));
            email.To.Add(MailboxAddress.Parse(to));
            email.Subject = subject;
            email.Body = new TextPart(MimeKit.Text.TextFormat.Html) { Text = body };

            using var smtp = new SmtpClient();
            smtp.Connect(config.GetSection("EmailHost").Value, 587, MailKit.Security.SecureSocketOptions.StartTls);
            smtp.Authenticate(config.GetSection("EmailUserName").Value, config.GetSection("EmailPassword").Value);
            smtp.Send(email);
            smtp.Disconnect(true);
        }
    }
}
