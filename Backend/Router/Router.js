const express=require('express')
const protect = require('../Middleware/middleware')
const CreateUser = require('../models/Create')
const getsingle = require('../models/getSingle')
const Delete = require('../models/Delete')
const getEvents = require('../models/getEvents')
const Update = require('../models/Update')
const Tokens2 = require('../loginCode/login')
const Tokens = require('../loginCode/Token')

const router = express.Router()
const middleware=[protect]

router.route('/user').post(CreateUser)
router.route('/update/:id').put(Update)
router.route('/getAll').get(getEvents)
router.route('/getsingle/:id').get(getsingle)
router.route('/delete/:id').delete(Delete)

router.route('/signup').post(Tokens)
router.route('/login').post(Tokens2)

module.exports=router