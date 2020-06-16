import PAClient from './client'

const client: PAClient = new PAClient('192.168.90.207:4317')
client.connect()

// import { Socket } from 'net'
// import PAPacket from './packet'
// import { auth, setClientName, getSinks } from './commands'
// // import PromiseSocket from "promise-socket"



// const socket = new Socket()
// // const socketPath = 'pulseaudio:4317'
// socket.connect(4317, '192.168.90.207')
// socket.on('readable', () => {
//   console.log('New packet arrived!')
//   let a = socket.read()
//   console.log(a);

//   let packet: PAPacket = new PAPacket(a)
//   console.log(packet)
//   console.log('done')
// })
// socket.on('error', (err) => { console.log(err) })
// socket.on('connect', () => {
//   console.log('connected!')

//   // Auth packet
//   let command: Buffer = auth(0, Buffer.from('780000010059cf1c70a28fa55cc512a36d204963e8ce8b1ccfec5ef095d9b86f1f46f88aea9cb7ea18aa7d163174353379a277ea83867f5e36560749b235f025b48da7dadc7033921b820af1c4434f3dfc196a89f8bdd7357e40dcd741ddeccbc9c5c70cf966e863fef08746912ef2550b0068f4f343f5f97a0bcedae38d66b6483f13dd6af6051ad7b44cae1322e2f1cb2ea4d4ce280cd1775327b36fadf5c5a191758a1dcb02627ddb87e376ef02603c61639b323547359dace2d7a1b1471a0599baa37a2184c0f1a849a4fbccb943a80fb7dbe4619c9e1437bc0fac2811aed25a6305ebc2a23afbc04a4e206445cb20ce8cb2d6045fc158f11533ab0c20a0cfc6c93074', 'hex'))
//   socket.write(command)
// })


// setTimeout(() => {  
//   socket.write(setClientName(1))
// }, 3500)

// setTimeout(() => {  
//   socket.write(getSinks(2))
// }, 1000)


// const socket = new Socket()
// const pSocket = new PromiseSocket(socket)

// async function main () {
//   await pSocket.connect(4317, '192.168.90.207')
//   console.log('connected...')

//   // Auth
//   await pSocket.write(auth(0, Buffer.from('780000010059cf1c70a28fa55cc512a36d204963e8ce8b1ccfec5ef095d9b86f1f46f88aea9cb7ea18aa7d163174353379a277ea83867f5e36560749b235f025b48da7dadc7033921b820af1c4434f3dfc196a89f8bdd7357e40dcd741ddeccbc9c5c70cf966e863fef08746912ef2550b0068f4f343f5f97a0bcedae38d66b6483f13dd6af6051ad7b44cae1322e2f1cb2ea4d4ce280cd1775327b36fadf5c5a191758a1dcb02627ddb87e376ef02603c61639b323547359dace2d7a1b1471a0599baa37a2184c0f1a849a4fbccb943a80fb7dbe4619c9e1437bc0fac2811aed25a6305ebc2a23afbc04a4e206445cb20ce8cb2d6045fc158f11533ab0c20a0cfc6c93074', 'hex')))
//   const content: Buffer = await pSocket.readAll() as Buffer
//   console.log(new PAPacket(content))

//   await delay(3500)
  
//   // Set Client name
//   await pSocket.write(setClientName(1, 'test-tomi'))
//   const content2: Buffer = await pSocket.readAll() as Buffer
//   console.log(new PAPacket(content2))
  
//   await delay(3500)
  
//   // Set get sinks
//   await pSocket.write(getSinks(2))
//   const content3: Buffer = await pSocket.readAll() as Buffer
//   console.log(content3);
//   console.log(new PAPacket(content3))
  
// }

// main()


// async function delay(timeout: number): Promise<any> {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve()
//     }, timeout)
//   })
// }