const User = require("../models/user-model");
const Medicine = require("../models/medicine-model");


const getAllUsers = async (req, res) => {

    try {

        const users = await User.find({}, { password: 0, cpassword: 0 });
        // console.log(users);

        if (!users || users.length === 0) {
            return res.status(404).json({ message: "No User Found" });

        }

        return res.status(200).json(users);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}


const getOneMedicines = async (req, res) => {
    const { id } = req.params;
    try {
        const medicine = await Medicine.findById(id);
        if (!medicine) {
            return res.status(404).json({ message: 'Medicine not found' });
        }


        return res.status(200).json(medicine);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}

const getAllMedicines = async (req, res) => {

    try {

        const medicines = await Medicine.find({});
        // console.log(users);

        if (!medicines || medicines.length === 0) {
            return res.status(404).json({ message: "No medicines Found" });

        }
        // console.log(medicines);
        return res.status(200).json(medicines);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
}


const updateMedicines = async (req, res) => {

    const { id } = req.params;
    const updateData = req.body;

    try {
        const updateMedicine = await Medicine.findByIdAndUpdate(id, updateData, { new: true });
        console.log(updateMedicine);
        if (!updateMedicine) {
            return res.status(404).json({ error: 'Medicine not updated' });
        }

        res.status(200).json(updateMedicine);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });

    }
}
const changeUserStatus = async (req, res) => {

    const { isValid } = req.body;
    const { userId } = req.params;

    try {

        const updatedUserStatus = await User.findByIdAndUpdate(
            userId, { $set: { isValid } }, { new: true }
        );

        res.status(200).json(updatedUserStatus);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });

    }
}

const insertMedicine = async (req, res) => {

    try {

        console.log(req.body);
        const { name, dosage, sideEffects, symptoms, contraindications, usageInstructions, manufacturer } = req.body;

        const medicineExist = await Medicine.findOne({ name });

        if (medicineExist) {
            return res.status(400).json({ msg: "medicine already exists" });
        }

        const medicineCreated = await Medicine.create({
            name, dosage, sideEffects, symptoms, contraindications, usageInstructions, manufacturer
        });

        if (!medicineCreated) {
            return res.status(500).json({ message: "Failed to create medicine" });
        }

        res.status(201).json({ message: "Medicine inserted successfully" });

    } catch (error) {
        res.status(500).json({ message: "Internal server error" });


    }
}


const getMedicine = async (req, res) => {
    try {

        const medicines = await Medicine.find({});
        // console.log(medicines);

        if (!medicines || medicines.length === 0) {
            return res.status(404).json({ message: "No medicines Found" });

        }

        return res.status(200).json(medicines);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};


const getDoctor = async (req, res) => {
    try {

        const doctors = await User.find({ type: 'doctor' }, { password: 0, cpassword: 0 });
        // console.log(doctors);

        if (!doctors || doctors.length === 0) {
            return res.status(404).json({ message: "No doctor Found" });

        }
        return res.status(200).json(doctors);


    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { getAllUsers, changeUserStatus, insertMedicine, getMedicine, getDoctor, getAllMedicines, getOneMedicines, updateMedicines };