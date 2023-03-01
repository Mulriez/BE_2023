const siswaModel = require("../models").siswa;
const jwt = require("jsonwebtoken");

async function loginSiswa(req, res) {
  try {
    const { nisn, nis } = req.body;
    console.log(req.body);
    let siswa = await siswaModel.findOne({
      where: {
        nisn,
      },
    });
    if (siswa === null) {
      return res.status(403).json({
        status: "Fail",
        message: "Siswa tidak ditemukan",
      });
    }
    if (nis === null) {
      return res.status(403).json({
        status: "Fail",
        message: "password tidak cocok",
      });
    }
    const token = jwt.sign(
      {
        nisn: siswa?.nisn,
        nis: siswa?.nis,
        nama: siswa?.nama,
        idKelas: siswa?.idKelas,
        noTelp: siswa?.noTelp,
        idSpp: siswa?.idSpp,
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
      data: siswa,
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "Fail",
      message: "ada kesalahan",
    });
  }
}

async function registerSiswa(req, res) {
  try {
    const { nisn, nis, nama, alamat, noTelp} = req.body;
    await siswaModel.create({
      nisn,
      nis,
      nama,
      alamat,
      noTelp
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

module.exports = { loginSiswa, registerSiswa };
