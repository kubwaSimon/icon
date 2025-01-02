const mongoose = require("mongoose");

const ClientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: string, required: true },
  message: { type: text, required: true },
});
//client model
module.exports = mongoose.model("Client", ClientSchema);
