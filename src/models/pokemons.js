module.exports = (sequelize, DataTypes) => {
  const validTypes = [
    "feu",
    "eau",
    "terre",
    "air",
    "foudre",
    "soleil",
    "son",
    "espace",
    "neos",
    "plante",
    "poison",
    "electrik",
    "vol",
    "insecte",
    "fée",
    "normal",
  ];
  return sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: `le nom deja pris choisissez en un autre`,
        },
        validate: {
          notEmpty: { msg: "Le nom ne peut etre vide" },
          notNull: { msg: "Le nom est obligatoire" },
        },
      },
      hp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Les hp doivent etre des entier" },
          notNull: { msg: "les hp sont obligatoires" },
          max: {
            args: [999],
            msg: "les hp ne peuvent pas depasser 999",
          },
          min: {
            args: [0],
            msg: "les hp ne peuvent pas etre negatifs",
          },
        },
      },
      cp: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          isInt: { msg: "Les cp doivent etre des entier" },
          notNull: { msg: "les cp sont obligatoires" },
          max: {
            args: [999],
            msg: "les hp ne peuvent pas depasser 999",
          },
          min: {
            args: [0],
            msg: "les hp ne peuvent pas etre negatifs",
          },
        },
      },
      picture: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: { msg: "veuillez fournir un lien valide pour la photo" },
          notNull: { msg: "le lien de la photo est obligatoire" },
        },
      },
      types: {
        type: DataTypes.STRING,
        allowNull: false,
        get() {
          return this.getDataValue("types").split(",");
        },
        set(types) {
          this.setDataValue("types", types.join());
        },
        validate: {
          isTypeValid(value) {
            if (!value) {
              throw new Error("il faut minimum un type");
            }
            if (value.split(",").length > 3) {
              throw new Error("il faut moins de 4 type");
            }
            let Va = value.split(",");
            Va.forEach((typ) => {
              if (!validTypes.includes(typ.toLowerCase())) {
                throw new Error(
                  `Vos types doivent etre parmis ceux ci ${validTypes}`
                );
              }
            });
          },
        },
      },
    },
    {
      timestamps: true,
      createdAt: "created",
      updatedAt: false,
    }
  );
};
