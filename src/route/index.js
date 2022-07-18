const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const hostname = process.env.HOSTNAME || '127.0.0.1';
const port = process.env.PORT || 8086;
const UserController = require('../controller/UserController');

const router = express.Router();

router.get('/soal1', async (req, res, next) => {
  const parameter = req.query.parameter;

  if (!parameter || isNaN(parameter)) {
    return res.status(422).json({
      "message": `parameter harus berupa angka dan tidak boleh kosong, contoh: http://${hostname}:${port}/soal1?parameter=1`
    })
  }
  // let array = [];
  let string = "";
  for (let i = 1; i <= parameter; i++) {
    for (let j = parameter; j > i; j--) {
      string += " ";
    }
    for (let k = 0; k < i * 2 - 1; k++) {
      string += `[${k}]`;
    }
    string += "&";
  }

  for (let i = 1; i <= parameter - 1; i++) {
    for (let j = 0; j < i; j++) {
      string += " ";
    }
    for (let k = (parameter - i) * 2 - 1; k > 0; k--) {
      string += `[${k}]`;
    }
    string += "&";
  }
  // return res.status(200).json({
  //     "parameter" : parameter,
  //     "data" : string
  // })
  // res.set('Content-Type', 'text/html');
  // res.send(JSON.stringify(string));
  res.render('soal1', {
    parameter: parameter,
    data: string
  });
})

router.get('/soal2', UserController.getuser);

router.get('/soal3', UserController.renderUser);

module.exports = router;