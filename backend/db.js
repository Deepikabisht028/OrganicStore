const mongoose = require('mongoose');
const mongoURI='mongodb+srv://zoroop1997:1acr05E@cluster0.ouhzheg.mongodb.net/Organicstore?retryWrites=true&w=majority'

const mongoDB=()=>{
    main().catch(err=>console.log(err));

    async function main(){ 
        await mongoose.connect(mongoURI,{useNewUrlParser: true});
        console.log("connected");

    }
}



module.exports=mongoDB;