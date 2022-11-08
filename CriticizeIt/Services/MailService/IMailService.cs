namespace CriticizeIt.Services.MailService
{
    public interface IMailService
    {
        Task SendEmailAsync(string to, string subject, string body);
    }
}
