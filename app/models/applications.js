const mongoose = require('mongoose')

// Define enum types for a dropdown menu

// -------- Define Roles --------
const isSubmitted = Object.freeze({
	FullStack: 'Fullstack',
	FrontEnd: 'Front-End',
	BackEnd: 'Back-End',
	SoftwareEngineer: 'Software Engineer'
})

const applicationSchema = new mongoose.Schema(
	{
		company: {
			type: String,
			required: true,
		},
		role: {
			type: String,
			required: true,
		},
		submitted: {
			type: String,
			enum: Object.values(isSubmitted),
			required: true
		},
		// create a boolean for the submitted field (default to false - options should be (Y/N))
		submitted: {
			type: Boolean,
			default: false,
		},
		status: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Application', applicationSchema)
