module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
         },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false
        },
         lastName: {
            type: Sequelize.STRING,
            allowNull: false
         },
         email: {
            type: Sequelize.STRING,
            allowNull: false
         },
         password: {
            type: Sequelize.STRING,
            allowNull: false
         },
         phoneNumber: Sequelize.INTEGER,
         bio: Sequelize.STRING,
         company: Sequelize.STRING,
         position: Sequelize.STRING,
         profilePhoto: Sequelize.BLOB
      });
    return Users;
  };