const User = require("../models/user");

module.exports = {
    findAll: async (req, res) => {
        try {
            const dbUser = await User.find({})
            res.json(dbUser);
        } catch (error) {
            res.sendStatus(500)
        }
    },
    create: async ({ body }, res) => {
        try {
            const dbUser = await User.create(body)
            res.json(dbUser)
        } catch (error) {
            res.sendStatus(500)
        }
    // },
    // addCard: async ({ body, params }, res) => {
    //     try {
    //         const dbUser = await User.findByIdAndUpdate(params.id, {
    //             $push: { exercises: body }
    //         })
    //         res.json(dbUser)
    //     } catch (error) {
    //         console.log(error)
    //         res.sendStatus(500)
    //     }
    }
}