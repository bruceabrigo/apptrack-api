const mongoose = require('mongoose')

// Define enum types for a dropdown menu

// -------- Define Roles --------
const status = Object.freeze({
	None: 'None',
	UnderReview: 'Under Review',
	FirstRound: 'First Round / Phone Call',
	Technical: 'Technical Interview'
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
		// submitted: {
		// 	type: String,
		// 	enum: Object.values(isSubmitted),
		// 	required: true
		// },
		// create a boolean for the submitted field (default to false - options should be (Y/N))
		submitted: {
			type: Boolean,
			default: false,
			required: true,
		},
		interview: {
			type: Boolean,
			default: false,
			required: true,
		},
		status: {
			type: String,
			enum: Object.values(status),
			required: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			// required: true,
		},
	},
	{
		timestamps: true,
		// include virtuals to our model
		toObject: {virtuals: true},
		toJSON: {virtuals: true}
	}
)

applicationSchema.virtual('Full Title').get(function () {
	return `${this.role} at ${this.company}`
})

module.exports = mongoose.model('Application', applicationSchema)
