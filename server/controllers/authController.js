module.exports = {
    login: async (req, res) => {
        const db = req.app.get('db');
        const { email, password } = req.body
        console.log(email, password)
        const [existingUser] = await db.get_user_password_and_email([email, password])
        console.log(existingUser)
        if (!existingUser) {
            return res.status(404).send('Your password or email was incorrect')
        }
        console.log(req)
        //req.session.user = existingUser
        res.status(200).send(existingUser)
    },
    getUserSession: async (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found')
        }
    }
}