const express = require("express");
const { loginAdmin, registerAdmin } = require("../controller/adminController");
const { loginSiswa, registerSiswa } = require("../controller/siswaController");
const router = express.Router();

//logres-admin
router.post("/login-admin", loginAdmin);
router.post("/register-admin", registerAdmin);
//logres-siswa
router.post("/login-siswa", loginSiswa);
router.post("/register-siswa", registerSiswa);

module.exports = router;
