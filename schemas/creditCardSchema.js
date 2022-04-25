import mongoose from 'mongoose';

const cardSchema = mongoose.Schema(
	{
		cardNumber: {
			type: Number,
			required: true,
		},
		cvv: {
			type: Number,
			required: true,
		},
		date: {
			type: String,
			required: true,
		},
		amount: {
			type: Number,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);
export const Card = mongoose.model('Cards', cardSchema);
