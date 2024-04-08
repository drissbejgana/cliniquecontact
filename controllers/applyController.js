const catchAsync = require("../utils/catchAsync");
const multer = require("multer");
const sendEmail = require("../utils/sendEmail")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Cvs/'); // Specify the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
        // Use the original file name as the new file name
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

const applys = catchAsync(async (req, res, next) => {

   const { name, phone, email, field, message} = req.body;
        const form = `Un nouveau message
            Le Nom complet : ${name} 
            Adresse e-mail :${email}  
            Numéro de téléphone : ${phone}
            Field : ${field}
            Message : ${message}
            CV : you will find it in "Cvs folder" in your hosting
            `
        
        await sendEmail({
            to: "Contact@cliniquerrahma.ma",
            subject: "Recrutment",
            text: form,
        })
    res.status(201).json({ status: "success" });
});

module.exports = {applys,upload};
