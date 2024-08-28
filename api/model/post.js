const mongooes = require("mongoose")


const PostSchema = new mongooes.Schema({
    title:{
        type:String,
        require:true,
        unique:true,
    },
  desc:{
        type:String,
        require:true,
       
    },
   photo :{
        type:String,
        require:false,
       
    },
    username:{
        type:String,
        require:true,
      
    },

   categories:{
        type:Array,
        require:false,
      
    },
},
{
    timestamps:true,
}
)
module.exports = mongooes.model("Post",PostSchema)