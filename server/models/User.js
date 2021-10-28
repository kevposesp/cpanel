'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    User.init({
        id: {
            allowNull: false,
            primaryKey: true,
            // type: DataTypes.STRING,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
        },
        userName: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [3, 255],
                    msg: "The username must contain at least 3 characters"
                }
            }
        },
        firstName: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: {
                    msg: "The name can only contain letters."
                },
                len: {
                    args: [3, 255],
                    msg: "The name must contain at least 3 characters"
                }
            }
        },
        lastName: {
            type: DataTypes.STRING,
            validate: {
                isAlpha: {
                    msg: "The last name can only contain letters."
                },
                len: {
                    args: [3, 255],
                    msg: "The last name must contain at least 3 characters"
                }
            }
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                isEmail: {
                    msg: "The email must be a valid email"
                }
            }
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {
                len: {
                    args: [8, 255],
                    msg: "The password must have a minimum of 8 characters"
                }
            }
        },
        idStripe: {
            allowNull: false,
            type: DataTypes.STRING
        },
        typeUser: {
            allowNull: false,
            type: DataTypes.STRING
        }
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};