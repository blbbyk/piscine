module.exports = function (sequelize, DataTypes) {
	let user = sequelize.define("User", {
		userID: {
			filed: "id",
			type: DataTypes.INTEGER,
			unique: true,
			allowNull: false,
			autoIncrement : true,
			primaryKey: true
		},
		userName: {
			filed: "username",
			type: DataTypes.STRING(20),
			unique: true,
			allowNull: false
		},
		email: {
			filed: "email",
			type: DataTypes.STRING(50),
			unique: true,
			allowNull: false
		},
		isCadet: {
			filed: "isCadet",
			type: DataTypes.BOOLEAN
		},
		careerYears: {
			files: "careerYears",
			type: DataTypes.BOOLEAN
		}},
	{
		charset: "utf8",
		underscored: true,
		freezeTableName: true,
		tableName: "user",
		timestamps: true
	});
	return user;
}
