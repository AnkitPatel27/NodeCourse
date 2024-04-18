const express = require('express');
const router = express.Router();
const pool = require('../helpers/database');
const bcrypt = require('bcrypt');


router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM employee';
        const rows = await pool.query(sqlQuery, req.params.id);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


    res.status(200).json({id:req.params.id})
});

router.post('/register', async function(req,res) {
    try {
        const {first_name, last_name} = req.body;
        console.log("came here")
        // const encryptedPassword = await bcrypt.hash(password,10)
     
        const sqlQuery = `INSERT INTO employee (first_name, last_name, birth_day, sex, salary, super_id, branch_id) VALUES (?, ?, '1967-11-17', 'M', 250000, NULL, NULL)`;
        const result = await pool.query(sqlQuery, [first_name, last_name]);
        console.log(result)
        res.status(200).json({status: result.affectedRows});
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// router.post('/login', async function(req,res) {
//     try {
//         const {id,password} = req.body;

//         const sqlGetUser = 'SELECT password FROM user WHERE id=?';
//         const rows = await pool.query(sqlGetUser,id);
//         if(rows){
            
//             const isValid = await bcrypt.compare(password,rows[0].password)
//             res.status(200).json({valid_password: isValid});
//         }
//         res.status(200).send(`User with id ${id} was not found`);
        
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

module.exports = router;