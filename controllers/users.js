const User = require('../models/Users')
const path = require('path')


//@desc Save User Details
//@route POST /api/v1/users
//@access Public
exports.saveUserDetails = async (req, res, next) => {
    try {
        //console.log(req.body)
        if(!req.files)
        {
            return res.status(400).json({ success: false, data: 'Please upload a file'})
        }

        const file = req.files.file

        // Make sure the image is a photo
        if(!file.mimetype.startsWith('image'))
        {
            return res.status(400).json({ success: false, data: 'Please upload an image file'})
        }

        //Check filesize
        if(file.size > process.env.MAX_FILE_UPLOAD){
            return res.status(400).json({ success: false, data: `Please upload an image less than ${process.env.MAX_FILE_UPLOAD}`})
        }

        // Create custom filename
        file.name = `photo_${req.body.Name}${path.parse(file.name).ext}`
        file.mv(`${process.env.FILE_UPLOAD_PATH}/${file.name}`, async err =>{
            if(err){
                console.error(err)
                return res.status(500).json({ success: false, data: 'Problem with file upload'})
            }
            req.body.Photo = file.name
            
            const user = await User.create(req.body)
            res.status(201).json({ success: true, data: user })
        
        })
    } 
    catch (err) {
        console.error(err)
        res.status(400).json({ success: false, data: err.message})
    }
}