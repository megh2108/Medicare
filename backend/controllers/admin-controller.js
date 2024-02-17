const User = require("../models/user-model");

const getAllUsers = async (req,res) =>{

    try{

        const users = await User.find({},{password:0,cpassword:0});
        console.log(users);
        
        if(!users || users.length === 0){
            return res.status(404).json({ message: "No User Found" });

        }

        return res.status(200).json(users);


    }catch(error){
        res.status(500).json({ message: "Internal server error" });
    }
}

const changeUserStatus = async (req,res) => {

    const { isValid } = req.body;
     const { userId } = req.params;

    try{

             const updatedUserStatus = await User.findByIdAndUpdate(
                userId,{ $set: { isValid } },{ new: true }
            );

            res.status(200).json(updatedUserStatus);


    }catch(error){
        res.status(500).json({ message: "Internal server error" });

    }
}

module.exports = { getAllUsers,changeUserStatus  };