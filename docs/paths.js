module.exports = {
  // method of operation
  "/pokemons/{id}": {
    description: "this route is for manage all pokemons together",

    get: {
      tags: ["Single Pokemon CRUD Operations", "Pokemons CRUD Operations"],
      description: "get a pokemon by his id",
      operationId: "getPokemon",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "integer", // data model of the param
            example: 5,
            description: "represent de Id of the pokemon we want delete",
            required: true,
          },
          required: true, // Mandatory param
          description: "A single pokemon id", // param desc.
        },
      ],
      responses: {
        200: {
          description: "Pokemon geted successfully", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                title: "Generated schema for Root",
                type: "object",
                properties: {
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      types: {
                        type: "array",
                        items: {
                          type: "string",
                        },
                      },
                      id: {
                        type: "number",
                      },
                      name: {
                        type: "string",
                      },
                      hp: {
                        type: "number",
                      },
                      cp: {
                        type: "number",
                      },
                      picture: {
                        type: "string",
                      },
                      created: {
                        type: "string",
                      },
                    },
                    required: [
                      "types",
                      "id",
                      "name",
                      "hp",
                      "cp",
                      "picture",
                      "created",
                    ],
                  },
                },
                required: ["message", "data"],
              },
            },
          },
        },
        401: {
          description: "Unauthorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message: "mauvais id veuillez en renseigner un autre",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "mauvais id veuillez en renseigner un autre",
                  },
                  data: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        404: {
          description: "not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message: "mauvais id veuillez en renseigner un autre",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "mauvais id veuillez en renseigner un autre",
                  },
                  err: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    put: {
      tags: ["Single Pokemon CRUD Operations", "Pokemons CRUD Operations"],
      description: "update a pokemon by his id",
      operationId: "updatePokemon",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "integer", // data model of the param
            example: 5,
            description: "represent de Id of the pokemon we want delete",
            required: true,
          },
          required: true, // Mandatory param
          description: "A single pokemon id", // param desc.
        },
      ],
      requestBody: {
        required: true,
        description:
          "this request body sould contain all fields of a pokemon expect the id and the created date",
        content: {
          "application/json": {
            schema: {
              title: "Generated schema for Root",
              type: "object",
              properties: {
                types: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
                name: {
                  type: "string",
                },
                hp: {
                  type: "number",
                },
                cp: {
                  type: "number",
                },
                picture: {
                  type: "string",
                },
              },
              required: ["types", "name", "hp", "cp", "picture"],
            },
            example: {
              types: ["Poison"],
              name: "Abo",
              hp: 16,
              cp: 4,
              picture:
                "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Pokemon updated successfully", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                title: "Generated schema for Root",
                type: "object",
                properties: {
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      types: {
                        type: "array",
                        items: {
                          type: "string",
                        },
                      },
                      id: {
                        type: "number",
                      },
                      name: {
                        type: "string",
                      },
                      hp: {
                        type: "number",
                      },
                      cp: {
                        type: "number",
                      },
                      picture: {
                        type: "string",
                      },
                      created: {
                        type: "string",
                      },
                    },
                    required: [
                      "types",
                      "id",
                      "name",
                      "hp",
                      "cp",
                      "picture",
                      "created",
                    ],
                  },
                },
                required: ["message", "data"],
              },
            },
          },
        },
        401: {
          description: "Unauthorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message: "mauvais id veuillez en renseigner un autre",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "mauvais id veuillez en renseigner un autre",
                  },
                  data: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        404: {
          description: "not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message: "mauvais id veuillez en renseigner un autre",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "mauvais id veuillez en renseigner un autre",
                  },
                  err: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ["Single Pokemon CRUD Operations", "Pokemons CRUD Operations"],
      description: "delete a pokemon by his id",
      operationId: "delatePokemon",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "integer", // data model of the param
            example: 5,
            description: "represent de Id of the pokemon we want delete",
            required: true,
          },
          required: true, // Mandatory param
          description: "A single pokemon id", // param desc.
        },
      ],
      responses: {
        200: {
          description: "Pokemon were deleted", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GetPokmonsResponse",
              },
            },
          },
        },
        401: {
          description: "Unauthorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message:
                    "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example:
                      "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.",
                  },
                  data: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "/pokemons": {
    description: "this route is for manage all pokemons together",
    post: {
      tags: ["Pokemons CRUD Operations"], // operation's tag.
      description: "create a pokemon", // operation's desc.
      operationId: "createPokemon",
      security: [
        {
          bearerAuth: [],
        },
      ],
      requestBody: {
        required: true,
        description:
          "this request body sould contain all fields of a pokemon expect the id and the created date",
        content: {
          "application/json": {
            schema: {
              title: "Generated schema for Root",
              type: "object",
              properties: {
                types: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
                name: {
                  type: "string",
                },
                hp: {
                  type: "number",
                },
                cp: {
                  type: "number",
                },
                picture: {
                  type: "string",
                },
              },
              required: ["types", "name", "hp", "cp", "picture"],
            },
            example: {
              types: ["Poison"],
              name: "Abo",
              hp: 16,
              cp: 4,
              picture:
                "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
            },
          },
        },
      },
      responses: {
        // response code
        200: {
          description: "Pokemon were listed", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GetPokmonsResponse",
              },
            },
          },
        },
      },
    },
    get: {
      tags: ["Pokemons CRUD Operations"], // operation's tag.
      description: "Get pokemons", // operation's desc.
      operationId: "getPokemons", // unique operation id.
      parameters: [
        {
          in: "query",
          name: "limit",
          default: 5,
          schema: {
            type: "integer",
          },
          description: "the number max of pokemons per page of result",
        },
        {
          in: "query",
          name: "order",
          default: "ASC",
          schema: {
            type: "string",
            enum: ["ASC", "DESC"],
          },
          description: "represent the order of rendering founded pokemons",
        },
        {
          in: "query",
          name: "name",
          schema: {
            type: "string",
          },
          description: "the name you want to retrives a corresponding pokemon",
        },
      ], // expected params.
      // expected responses

      security: [
        {
          bearerAuth: [],
        },
      ],
      responses: {
        // response code
        200: {
          description: "Pokemon were listed", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GetPokmonsResponse",
              },
            },
          },
        },
        401: {
          description: "Unauthorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message:
                    "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example:
                      "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.",
                  },
                  data: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/signup": {
    description: "this route is for user registration",
    post: {
      tags: ["User Authentication"], // operation's tag.
      description: "user signup using username and password", // operation's desc.
      operationId: "signupUser", // unique operation id.

      requestBody: {
        description:
          "the body of this request should contain all fields of a pokemon except the id and the created date",

        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginRequestBody",
            },
          },
        },
      },
      responses: {
        200: {
          description: "User register succes", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                title: "Generated schema for Root",
                type: "object",
                example: {
                  message: "nouvel utilisateur cree ",
                  User: {
                    id: 2,
                    username: "johndoe",
                    password:
                      "$2b$10$2NbIzJmcta1qk1bRruq/E.dvfsWWigirY0UDVfUMERC9pBVN7OHVO",
                    updatedAt: "2023-10-09T01:09:51.823Z",
                    createdAt: "2023-10-09T01:09:51.823Z",
                  },
                },
                properties: {
                  message: {
                    type: "string",
                  },
                  User: {
                    type: "object",
                    properties: {
                      id: {
                        type: "number",
                      },
                      username: {
                        type: "string",
                      },
                      password: {
                        type: "string",
                      },
                      updatedAt: {
                        type: "string",
                      },
                      createdAt: {
                        type: "string",
                      },
                    },
                    required: [
                      "id",
                      "username",
                      "password",
                      "updatedAt",
                      "createdAt",
                    ],
                  },
                },
                required: ["message", "User"],
              },
            },
          },
        },
        400: {
          description: "User register failed", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                title: "Generated schema for Root",
                type: "object",
                example: {
                  message: "erreur de creation d'utilisateur",
                  err: {
                    name: "SequelizeUniqueConstraintError",
                    errors: [
                      {
                        message:
                          "Ce nom d'utilisateur est deja pris veuillez en choisir un autre",
                        type: "unique violation",
                        path: "username",
                        value: "johndoe",
                        origin: "DB",
                        instance: {
                          id: null,
                          username: "johndoe",
                          password:
                            "$2b$10$QhdjF7oovXbAKlyelv42juaz3c57OrH9FkvFvqmm37m8v8Hmmn8L2",
                          updatedAt: "2023-10-09T01:12:19.717Z",
                          createdAt: "2023-10-09T01:12:19.717Z",
                        },
                        validatorKey: "not_unique",
                        validatorName: null,
                        validatorArgs: [],
                      },
                    ],
                    parent: {
                      code: "ER_DUP_ENTRY",
                      errno: 1062,
                      sqlState: "23000",
                      sqlMessage:
                        "Duplicate entry 'johndoe' for key 'users.users_username_unique'",
                      sql: "INSERT INTO `users` (`id`,`username`,`password`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?);",
                      parameters: [
                        "johndoe",
                        "$2b$10$QhdjF7oovXbAKlyelv42juaz3c57OrH9FkvFvqmm37m8v8Hmmn8L2",
                        "2023-10-09 01:12:19",
                        "2023-10-09 01:12:19",
                      ],
                    },
                    original: {
                      code: "ER_DUP_ENTRY",
                      errno: 1062,
                      sqlState: "23000",
                      sqlMessage:
                        "Duplicate entry 'johndoe' for key 'users.users_username_unique'",
                      sql: "INSERT INTO `users` (`id`,`username`,`password`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?);",
                      parameters: [
                        "johndoe",
                        "$2b$10$QhdjF7oovXbAKlyelv42juaz3c57OrH9FkvFvqmm37m8v8Hmmn8L2",
                        "2023-10-09 01:12:19",
                        "2023-10-09 01:12:19",
                      ],
                    },
                    fields: {
                      username: "johndoe",
                    },
                    sql: "INSERT INTO `users` (`id`,`username`,`password`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?);",
                  },
                },
                properties: {
                  message: {
                    type: "string",
                  },
                  err: {
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      errors: {
                        type: "array",
                        items: {
                          type: "object",
                          properties: {
                            message: {
                              type: "string",
                            },
                            type: {
                              type: "string",
                            },
                            path: {
                              type: "string",
                            },
                            value: {
                              type: "string",
                            },
                            origin: {
                              type: "string",
                            },
                            instance: {
                              type: "object",
                              properties: {
                                id: {},
                                username: {
                                  type: "string",
                                },
                                password: {
                                  type: "string",
                                },
                                updatedAt: {
                                  type: "string",
                                },
                                createdAt: {
                                  type: "string",
                                },
                              },
                              required: [
                                "id",
                                "username",
                                "password",
                                "updatedAt",
                                "createdAt",
                              ],
                            },
                            validatorKey: {
                              type: "string",
                            },
                            validatorName: {},
                            validatorArgs: {
                              type: "array",
                              items: {},
                            },
                          },
                          required: [
                            "message",
                            "type",
                            "path",
                            "value",
                            "origin",
                            "instance",
                            "validatorKey",
                            "validatorName",
                            "validatorArgs",
                          ],
                        },
                      },
                      parent: {
                        type: "object",
                        properties: {
                          code: {
                            type: "string",
                          },
                          errno: {
                            type: "number",
                          },
                          sqlState: {
                            type: "string",
                          },
                          sqlMessage: {
                            type: "string",
                          },
                          sql: {
                            type: "string",
                          },
                          parameters: {
                            type: "array",
                            items: {
                              type: "string",
                            },
                          },
                        },
                        required: [
                          "code",
                          "errno",
                          "sqlState",
                          "sqlMessage",
                          "sql",
                          "parameters",
                        ],
                      },
                      original: {
                        type: "object",
                        properties: {
                          code: {
                            type: "string",
                          },
                          errno: {
                            type: "number",
                          },
                          sqlState: {
                            type: "string",
                          },
                          sqlMessage: {
                            type: "string",
                          },
                          sql: {
                            type: "string",
                          },
                          parameters: {
                            type: "array",
                            items: {
                              type: "string",
                            },
                          },
                        },
                        required: [
                          "code",
                          "errno",
                          "sqlState",
                          "sqlMessage",
                          "sql",
                          "parameters",
                        ],
                      },
                      fields: {
                        type: "object",
                        properties: {
                          username: {
                            type: "string",
                          },
                        },
                        required: ["username"],
                      },
                      sql: {
                        type: "string",
                      },
                    },
                    required: [
                      "name",
                      "errors",
                      "parent",
                      "original",
                      "fields",
                      "sql",
                    ],
                  },
                },
                required: ["message"],
              },
            },
          },
        },
      },
    },
  },
  "/signup/{id}": {
    description: "this route is for manage all user alone",

    put: {
      tags: ["User Management"],
      description: "update a user by his id",
      operationId: "updateUser",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "integer", // data model of the param
            example: 5,
            description: "represent de Id of the user we want delete",
            required: true,
          },
          required: true, // Mandatory param
          description: "A single user id", // param desc.
        },
      ],
      requestBody: {
        required: true,
        description:
          "this request body sould contain all fields of a user expect the id and the created date",
        content: {
          "application/json": {
            schema: {
              title: "Generated schema for Root",
              type: "object",
              properties: {
                types: {
                  type: "array",
                  items: {
                    type: "string",
                  },
                },
                name: {
                  type: "string",
                },
                hp: {
                  type: "number",
                },
                cp: {
                  type: "number",
                },
                picture: {
                  type: "string",
                },
              },
              required: ["types", "name", "hp", "cp", "picture"],
            },
            example: {
              types: ["Poison"],
              name: "Abo",
              hp: 16,
              cp: 4,
              picture:
                "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/023.png",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Pokemon updated successfully", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                title: "Generated schema for Root",
                type: "object",
                properties: {
                  message: {
                    type: "string",
                  },
                  data: {
                    type: "object",
                    properties: {
                      types: {
                        type: "array",
                        items: {
                          type: "string",
                        },
                      },
                      id: {
                        type: "number",
                      },
                      name: {
                        type: "string",
                      },
                      hp: {
                        type: "number",
                      },
                      cp: {
                        type: "number",
                      },
                      picture: {
                        type: "string",
                      },
                      created: {
                        type: "string",
                      },
                    },
                    required: [
                      "types",
                      "id",
                      "name",
                      "hp",
                      "cp",
                      "picture",
                      "created",
                    ],
                  },
                },
                required: ["message", "data"],
              },
            },
          },
        },
        401: {
          description: "Unauthorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message: "mauvais id veuillez en renseigner un autre",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "mauvais id veuillez en renseigner un autre",
                  },
                  data: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
        404: {
          description: "not found", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message: "mauvais id veuillez en renseigner un autre",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example: "mauvais id veuillez en renseigner un autre",
                  },
                  err: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    delete: {
      tags: ["Single Pokemon CRUD Operations", "Pokemons CRUD Operations"],
      description: "delete a pokemon by his id",
      operationId: "delatePokemon",
      security: [
        {
          bearerAuth: [],
        },
      ],
      parameters: [
        {
          name: "id",
          in: "path",
          schema: {
            type: "integer", // data model of the param
            example: 5,
            description: "represent de Id of the pokemon we want delete",
            required: true,
          },
          required: true, // Mandatory param
          description: "A single pokemon id", // param desc.
        },
      ],
      responses: {
        200: {
          description: "Pokemon were deleted", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/GetPokmonsResponse",
              },
            },
          },
        },
        401: {
          description: "Unauthorized", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                example: {
                  message:
                    "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.",
                },
                type: "object",
                properties: {
                  message: {
                    type: "string",
                    example:
                      "Vous n'avez pas fourni de jeton d'authentification. Ajoutez-en un dans l'en-tête de la requête.",
                  },
                  data: {
                    required: false,
                    type: "object",
                    properties: {
                      name: {
                        type: "string",
                      },
                      message: {
                        type: "string",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  "/connexion": {
    description: "this route is user login",

    post: {
      tags: ["User Authentication"], // operation's tag.
      description: "user Login using username and password", // operation's desc.
      operationId: "userLogin", // unique operation id.
      parameters: [], // expected params.
      // expected responses
      requestBody: {
        description:
          "the body of this request should only have username and password",
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/LoginRequestBody",
            },
          },
        },
      },
      responses: {
        // response code
        200: {
          description: "User connexion succes", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginResponse",
              },
            },
          },
        },
        400: {
          description: "User connexion failed", // response desc.
          content: {
            // content-type
            "application/json": {
              schema: {
                title: "Generated schema for Root",
                type: "object",
                properties: {
                  message: {
                    type: "string",
                  },
                  err: {
                    type: "object",
                    properties: {},
                    required: [],
                  },
                },
                required: ["message", "err"],
              },
            },
          },
        },
      },
    },
  },
};
