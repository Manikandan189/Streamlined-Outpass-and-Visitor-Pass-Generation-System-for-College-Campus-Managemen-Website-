const mongo=require("mongoose")
const user=require("./user")
main()
async function main()
{
await mongo.connect("mongodb://localhost/testdb")
const user=await user.create({
    emailId:emailId,
    password:12345

})
console.log(user)
}