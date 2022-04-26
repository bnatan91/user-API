module.exports = (sequelize, Sequelize) => {
   const Users = sequelize.define("users", {
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
      refreshToken: Sequelize.STRING,
      bio: Sequelize.TEXT,
      company: Sequelize.STRING,
      position: Sequelize.STRING,
      profilePhoto: Sequelize.STRING
   });
   return Users;
};