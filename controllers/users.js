const User = require('../models/Users')


//@desc Save User Details
//@route POST /api/v1/users
//@access Public
exports.saveUserDetails = async (req, res, next) => {
    try {
        console.log(req.body)
        //res.status(200).json({ success: true, data: user })
        
        const user = await User.create(req.body)

        res.status(201).json({ success: true, data: user })
        
        } 
    catch (err) {
        res.status(400).json({ success: false, data: err.message})
    }
}