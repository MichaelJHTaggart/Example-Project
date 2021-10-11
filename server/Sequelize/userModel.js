

	// Primary key is automatically added to every table in sequelize under name 'id'
	// 	this is the id format:
	// 	id: {
	// 		allowNull: false,
	// 		autoIncrement: true,
	// 		primaryKey: true,
	// 		type: DataTypes.INTEGER
	// 	}

module.exports = (connection, Sequelize) => {
    const User = connection.define('users2', {
        username: {
            type: Sequelize.STRING,
            allowNull: false, //cannot be emptycode
            unique:true,
            validate: {
                is: /^\w{3,}$/
                // this validate  & REGEX is recommended by the Sequelize team, it will make sure
                //usernames to have length of at least 3, and only use letters, numbers and underscores.
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false //cannot be emptycode
        }
    });

    return User;
}