export const sendEmail = async (email: string) => {
  try {
    // 这里可以调用实际的邮件发送API
    // 例如使用第三方邮件服务如 SendGrid、Mailgun 等
    console.log(`Sending email to ${email} with content: "123"`);
    alert(`Email sent to ${email}`);
  } catch (error) {
    console.error('Failed to send email:', error);
    alert('Failed to send email');
  }
};