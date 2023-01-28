import express from 'express'
const router = express.Router()
/**
 * @openapi
 * /:
 *   get:
 *     description: Endpoint to test the API.
 *     responses:
 *       200:
 *         description: Returns a message.
 */
router.get('/', (_, res) => {
  console.log('Hello world!!!')
  res.send('Response from API')
})

export { router }
