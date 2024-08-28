const mongooes = require("mongoose")


const UserSchema = new mongooes.Schema({
   username:{
        type:String,
        require:true,
        unique:true,
    },

   email:{
        type:String,
        require:true,
        unique:true,
    },

  password:{
        type:String,
        require:true,
       
    },

    profilePic:{
        type:String,
        default:"",
       
    },
},

{
    timestamps:true,
}

)
module.exports = mongooes.model("User",UserSchema)