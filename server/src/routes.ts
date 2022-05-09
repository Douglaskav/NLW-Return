import { Router } from "express";
import { NodemailerAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prisma-feedback-repository";

export const routes = Router();

routes.post("/feedbacks", async (req, res) => {
	const { type, comment, screenshot } = req.body;

	const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
	const nodemailerAdapter = new NodemailerAdapter();

	const submitFeedbackUseCase = new SubmitFeedbackUseCase(
		prismaFeedbacksRepository,
		nodemailerAdapter
	);

	await submitFeedbackUseCase.execute({
		type,
		comment,
		screenshot,
	});

	return res.status(201).send({});
});
