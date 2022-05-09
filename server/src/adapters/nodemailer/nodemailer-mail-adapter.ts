import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "ce630153ee0804",
		pass: "10275321ddef67",
	},
});

export class NodemailerAdapter implements MailAdapter {
	async sendMail({ subject, body }: SendMailData) {
		await transport.sendMail({
			from: "Equipe Feedget <oi@feedback.com>",
			to: "Douglas Nicolas <dnmsmpvp@gmail.com>",
			subject,
			html: body,
		});
	}
}
