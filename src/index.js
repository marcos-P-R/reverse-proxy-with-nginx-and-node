import express from 'express'
import getPeople from './database/connection.js'
import nameListPage from './view/mountPage.js'
const app = express()
app.use(express.json())


app.get("/", async(req, res) => {
  const tagHtml = nameListPage(await getPeople())
  res.contentType("html")
  res.status(200).send(tagHtml)
})

app.listen(process.env.PORT || 3000, () => console.log(`http://localhost:3000`))