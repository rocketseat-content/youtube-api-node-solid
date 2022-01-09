import express,{ Request, Response, NextFunction } from 'express'
import 'express-async-errors'

import { router } from './routes'

const app = express()

app.use(express.json())
app.use(router)
app.use((err:Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error) {
        return response.status(400).json({ message: err.message})
    }

    return response.status(500).json({ message: 'Internal Server Error' })
})
export { app }