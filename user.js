const mongo=require("mongoose")
const schema1=new mongo.schema({
    emailId:String,
    password:Number
})

module.exports=mongo.model("user",schema1)