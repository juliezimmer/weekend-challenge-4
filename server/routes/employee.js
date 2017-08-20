//routes
var express = require('express');
var router = express.Router();
var pool = require('../modules/pool');

//post route
/*router.post('/', function(req,res){
    console.log('message post route has been hit');
    //connecting to DB
    pool.connect(function (err, db, done){
        if(err) {
            //connection failed
            console.log('There was an error connecting to the DB');
            res.sendStatus(500);
        } else {
            //connection established, query can proceed
            db.query('INSERT INTO employees(id,first_name, last_name, job_title, annual_salary) VALUES ($1, $2, $3, $4, $5);', 
            [req.body.id, req.body.firstName, req.body.lastName, req.body.jobTitle, req.body.annualSalary]
                done();
                if(errorMakingQuery){
                    //if query is not successful
                    console.log('There was a problem with the query');
                    res.sendStatus(500);
                } else {
                 //the query was successful
                 res.sendStatus(201);   
                }
            };
        });
    });*/


module.exports = router;