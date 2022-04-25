import { Card } from './schemas/creditCardSchema.js';
import asyncHandler from 'express-async-handler';

const createNewCard = asyncHandler(async (req, res) => {
	const { cardNumber, cvv, date, amount } = req.body;
	let cardExists = await Card.findOne({ cardNumber });
	if (cardExists) {
		res.status(400);
		throw new Error('Карта существует');
	}
	const card = await Card.create({
		cardNumber: cardNumber,
		cvv: cvv,
		date: date,
		amount: amount,
	});
	if (card) {
		if (
			cardNumber.replace(/\D/g, '').length === 16 &&
			cvv.replace(/\D/g, '').length === 3 &&
			date.match(/[\d]{2}\/[\d]{4}/) &&
			amount
		) {
			res.status(201).json({
				RequestId: card._id,
				Amount: amount,
			});
		} else {
			res.status(401).json({
				message: 'Данные были введены неправильно',
			});
		}
	}
});

export { createNewCard };
