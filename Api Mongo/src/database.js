let mongoose = require("mongoose");


mongoose.connect('mongodb+srv://ManuelPiris:Aitana2022@cluster0.nhgjdoj.mongodb.net/codenotch',
                {useNewUrlParser: false, useUnifiedTopology:false})

.then((db) => {
    console.log("Database connected on " + db.connection.host)
})
.catch((error)=>
{
    console.log(error)
});