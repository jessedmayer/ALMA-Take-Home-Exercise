import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const leadsSchema = new Schema({
    first_name: String,
    last_name: String,

    email: String,
    country: String,
    linkedin: String,
    visa: String,
    long_input: String,

    reached_out: Boolean,
    createdAt: Date,
    updatedAt: Date,
});

const Leads = model('leads', leadsSchema);
export default Leads;