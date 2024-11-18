const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactSchema = new Schema({
  firstname: { type: String, required: true },
  Lastname: { type: String},
  phonenumber: { type: Number, required: true , min : 1000000000, max : 9999999999},
  email: { type: String, required: true },
  jobtitle:{type: String},
  company:{type:String,required:true},

});
const Database = mongoose.model('Database', contactSchema);
module.exports = Database;