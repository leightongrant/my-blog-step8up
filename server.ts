import express from 'express'
import type { Request, Response } from 'express'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 5001

app.get('/', (req: Request, res: Response) => {
	res.sendFile(path.resolve('public', 'index.html'))
})

app.listen(PORT, () => {
	console.log(`Server listening on http://localhost:${PORT}`)
})
