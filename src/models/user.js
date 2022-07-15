module.exports = (sequelize, DataTypes) => {
    return sequelize.define('user',{
        id:{
            type:DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true,
        },
        username:{
            type : DataTypes.STRING,
            unique:{
                msg : 'Ce nom d\'utilisateur est deja pris veuillez en choisir un autre'
            },
            allowNull : false,
            validate:{
              notEmpty : {msg : 'Le nom d\'utilisateur ne peut etre vide'},
              notNull : {msg : 'Le nom d\'utilisateur est obligatoire'}
            }
        },
        password:{
            type : DataTypes.STRING,
        }
    })
}