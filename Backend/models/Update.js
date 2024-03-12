const User = require("../Controller/userSchema");

const Update = async (req, res) => {
    const { userEmail, userName, phone, designation, gender, course, image } = req.body;
    const _id = req.params.id;
    try {
        const Userupdate = await User.findByIdAndUpdate(_id, { userEmail, userName, phone, designation, gender, course, image }, { new: true });
        res.json(Userupdate);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = Update;
