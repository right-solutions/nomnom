function defineAssociations(sequelize) {
	const { User, Restaurant, UserWeight } = sequelize.models;
	
    UserWeight.belongsTo(User);
}

module.exports = { defineAssociations };