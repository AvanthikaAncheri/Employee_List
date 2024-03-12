const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
    adminId: {
      type: String
    },
    adminEmail: {
      type: String,
    },
    adminName: {
        type: String,
      },
    adminPassword:{
        type: String,
    }
  })

const Admin = mongoose.model("User",AdminSchema);

module.exports = Admin;