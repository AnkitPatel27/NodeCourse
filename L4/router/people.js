const express = require("express");
const router = express.Router();
const {
  getPeople,
  createPeople,
  appendPeople,
  deletePeople,
  changePeople,
} = require("../controller/people");

router.route('/').get(getPeople).post(createPeople);
router.route('/postman').post(appendPeople);
router.route('/:id').put(changePeople).delete(deletePeople);

// router.get("/", getPeople);

// router.post("/", createPeople);

// router.post("/postman", appendPeople);

// router.put("/:id", changePeople);

// router.delete("/:id", deletePeople);
module.exports = router;
