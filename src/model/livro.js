import Sequelize from 'sequelize'
import { connection } from '../database/connection.js'

export const books = connection.define('books', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    capa: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    ano_l: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    autor: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    sinopse: {
        type: Sequelize.TEXT,
        allowNull: false,
    }
}, {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
    timestamps: false
})

const initTable = async () => {
    await books.sync()
}