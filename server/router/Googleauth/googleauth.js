const express = require('express');
const router = express.Router();
const passport = require("passport");


// initial google ouath login
router.get("/auth/google",passport.authenticate("google",{scope:["profile","email"]}));

router.get("/auth/google/callback",passport.authenticate("google",{
    successRedirect:"http://localhost:3000/About",
    failureRedirect:"http://localhost:3000/Login"
}))

router.get("/login/sucess",async(req,res)=>{

    if(req.user){
        res.status(200).json({message:"user Login",user:req.user})
    }else{
        res.status(400).json({message:"Not Authorized"})
    }
})

router.get("/google-logout",(req,res,next)=>{
    console.log("Google logout");
    req.logout(function(err){
        if(err){
            return next(err)
        }
        res.redirect("http://localhost:3000/Login");
    })
})


module.exports = router;