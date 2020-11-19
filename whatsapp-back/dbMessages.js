import mongoose from 'mongoose'

const whatsAppSchema = mongoose.Schema({
	message: String,
	name: String,
	timestamp: String,
	sender: Boolean,
})

export default mongoose.model('messageContents', whatsAppSchema)
