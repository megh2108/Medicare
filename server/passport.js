const dotenv = require('dotenv');
const passport = require("passport");
const OAuth2Strategy = require("passport-google-oauth2").Strategy;


// configure env directory
dotenv.config({ path: './config.env'});
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

const Usergoogleschema = require("./model/User/userGoogleAuthSchema");


passport.use(
    new OAuth2Strategy({
        clientID:CLIENT_ID,
        clientSecret:CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"]
    },
    async(accessToken,refreshToken,profile,done)=>{
        try {
            let user = await Usergoogleschema.findOne({googleId:profile.id});

            if(!user){
                user = new Usergoogleschema({
                    googleId:profile.id,
                    name:profile.displayName,
                    email:profile.emails[0].value,
                    image:profile.photos[0].value
                });

                await user.save();
            }

            return done(null,user)
        } catch (error) {
            return done(error,null)
        }
    }
    )
)

passport.serializeUser((user,done)=>{
    done(null,user);
})

passport.deserializeUser((user,done)=>{
    done(null,user);
});