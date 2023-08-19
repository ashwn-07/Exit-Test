const mongoose = require("mongoose")

const listSchema = mongoose.Schema({

      taskdesc:String,
      status:String

})


const listmodel = mongoose.model('list', listSchema)


module.exports= listmodel;