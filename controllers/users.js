const User = require('../models/Users')


//@desc Save User Details
//@route POST /api/v1/users
//@access Public
exports.saveUserDetails = async (req, res, next) => {
    const user = await User.create(req.body)

    res.status(201).json({ success: true, data: User })
}