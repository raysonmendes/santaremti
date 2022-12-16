import mongoose from "mongoose";

// aqui estamos criando um modelo de um service do mongoose, que vai nos ajudar a lidar com o
//formato do service e com as operações que precisaremos fazer no banco de dados
var Schema = mongoose.Schema;

// tipagem de uma proposta
var offer = new Schema({
  offeredPrice: {
    type: Number,
    required: true,
  },
  accepted: {
    type: Boolean,
    default: false,
  },
  offerer: {
    type: Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

var service = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    duoDate: {
      type: Date,
      required: false,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },
    assignedTo: {
      type: Schema.Types.ObjectId,
      ref: "Users",
      required: false,
    },
    offers: [offer],
  },
  {
    timestamps: true,
  }
);

mongoose.models = {};

var Service = mongoose.model("Service", service);

export default Service;
