import mysql from 'mysql2/promise'

const config = {
  host: 'db',
  user: 'root',
  password: 'FullCycle',
  database: 'fullcycle'
}

const getPeople = async () => {
  try {
      const connection = await mysql.createConnection(config);
      const [rows, fields] = await connection.execute(`SELECT * FROM people`)
      connection.end()

      const names = rows.map(result => `<li>${result.name}</li>`)
      return names.join("")
  } catch (error) {
    console.log(error)
  }
}

export default getPeople;
