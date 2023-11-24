import { createClient } from 'redis'

const client = createClient({
  password: process.env.REDIS_PW,
  socket: {
    host: process.env.REDIS_HOST,
    port: 13857
  }
})

client.on('error', err => console.log(err));
if (!client.isOpen) {
  client.connect()
}

export { client }