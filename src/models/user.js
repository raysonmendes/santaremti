import mongoose from "mongoose";

// aqui estamos criando um modelo do mongoose, que vai nos ajudar a lidar com o
//formato do usuário e com as operações que precisaremos fazer no banco de dados
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  cpf: {
    type: String,
    required: false,
    default: "",
  },
  tel: {
    type: String,
    required: false,
    default: "",
  },
  roles: {
    type: Array,
    required: true,
    default: ["client"],
  },
  avatarUri: {
    type: String,
    required: false,
    default: "",
  },
});

mongoose.models = {};

var User = mongoose.model("User", user);

export default User;
