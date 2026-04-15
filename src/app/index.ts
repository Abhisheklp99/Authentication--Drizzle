import express from'express'
import type {Express} from 'express'

export function createExpressApplication():Express{
    const app = express()


    //middleware



    //Routes
app.get('/', (req, res) => {
  console.log("✅ Route hit")
  res.json({ message: "Return to chai code service" })
})


    return app

}