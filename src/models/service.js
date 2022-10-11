import mongoose from "mongoose";

// aqui estamos criando um modelo de um service do mongoose, que vai nos ajudar a lidar com o
//formato do service e com as operações que precisaremos fazer no banco de dados
var Schema = mongoose.Schema;

var service = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

mongoose.models = {};

var Service = mongoose.model("Service", service);

export default Service;
