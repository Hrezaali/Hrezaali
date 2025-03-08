// api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,  // ایمیل خود را در محیط‌های Vercel ذخیره کنید
        pass: process.env.EMAIL_PASS,  // پسورد ایمیل
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECIPIENT_EMAIL,  // ایمیل مقصد
      subject: 'پیام جدید از فرم تماس',
      text: `نام: ${name}\nایمیل: ${email}\nپیام: ${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'ایمیل با موفقیت ارسال شد' });
    } catch (error) {
      res.status(500).json({ message: 'خطا در ارسال ایمیل' });
    }
  } else {
    res.status(405).json({ message: 'متد غیرمجاز' });
  }
}
