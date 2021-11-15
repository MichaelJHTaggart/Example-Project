// Primary key is automatically added to every table in sequelize under name 'id'
// 	this is the id format:
// 	id: {
// 		allowNull: false,
// 		autoIncrement: true,
// 		primaryKey: true,
// 		type: DataTypes.INTEGER
// 	}

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('Users', {
        username: {
            type: Sequelize.STRING,
            allowNull: false, //cannot be emptycode
            unique: true,
            validate: {
                is: /^\w{3,}$/
                // this validate  & REGEX is recommended by the Sequelize team, it will make sure
                //usernames to have length of at least 3, and only use letters, numbers and underscores.
                //*Additionally, whatever rules (REGEX) that you have in place on the server folder (ex. /^\w{3,}$/), Make sure to have the exact rules on the client side (your src folder, aka: front-end) so to prevent hitting the error handling that validate creates.
            }
        }
    });

    return User;
}