/* import { createServer } from 'node:http';
import {createExpressApplication} from './app/index.js'
async function main() {
    
    try {
        const server=createServer(createExpressApplication)
        //should come form ENV
        const PORT:number=8080;

        server.listen(PORT,()=>{
            console.log(`HTTP Server running successfully at  PORT:${PORT}`);
        })
    } catch (error) {
        console.log(`Error starting http server`);
        throw error
    }


}

main() */

import { createExpressApplication } from './app/index.js'

async function main() {
  try {
    const app = createExpressApplication()

    const PORT: number = 8080

    app.listen(PORT, () => {
      console.log(`HTTP Server running successfully at PORT:${PORT}`)
    })
  } catch (error) {
    console.log(`Error starting http server`)
    throw error
  }
}

main()