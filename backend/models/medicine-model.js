const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    dosage: {
        type: String,
        required: true,
    },
    sideEffects: {
        type: [String],
        default: [],
        required:true,
    },
    symptoms: {
        type: [String],
        default: [],
        required:true,
    },
    contraindications: {
        type: [String],
        default: [],
        required:true,
    },
    usageInstructions: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
});

const Medicine = mongoose.model("MEDICINE", medicineSchema);

module.exports = Medicine;
