const petugasModel = require("../models").petugas;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function loginAdmin(req, res) {
  try {
    const { username, password, level } = req.body;
    console.log(req.body);
    let admin = await petugasModel.findOne({
      where: {
        username: username,
      },
    });
    if (admin === null) {
      return res.status(403).json({
        status: "Fail",
        message: "Admin atau Petugas tidak ditemukan",
      });
    }
    if (password === null) {
      return res.status(403).json({
        status: "Fail",
        message: "password tidak cocok",
      });
    }
    if (level === null) {
      return res.status(403).json({
        status: "Fail",
        message: "pilih level anda",
      });
    }
    const token = jwt.sign(
      {
        idPetugas: admin?.idPetugas,
        username: admin?.username,
        namaPetugas: admin?.namaPetugas,
        level: admin?.level,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({
      status: "Success",
      message: "Berhasil Login",
      token: token,
      data: admin,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      message: "ada kesalahan",
    });
  }
}

async function registerAdmin(req, res) {
  try {
    const { username, password, namaPetugas, level } = req.body;
    let hashPassword = await bcrypt.hashSync(password, 10);
    await petugasModel.create({
      username,
      password: hashPassword,
      namaPetugas,
      level,
    });
    res.status(200).json({
      status: "Success",
      message: "Berhasil Register",
    });
  } catch (error) {
    res.status(403).json({
      status: "Fail",
      message: "ada kesalahan",
    });
  }
}

module.exports = { loginAdmin, registerAdmin };
