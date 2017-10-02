const express = require('express')
const app = express()
const jwt = require('express-jwt')
const base64url = require('base64url')
const crypto = require('crypto')
const path = require('path')

app.use(express.static('public'))

app.get("/testingjwt", jwt({secret: process.env.SECRET}), (req, res) => {
  if(req.user.testing) return res.sendStatus(200)
  res.sendStatus(401)
})

app.get("/token", (req, res) => {
  res.send({ token: createJWT({ testing: 'test' }) , success: true })
})

app.get("*", (req, res) => {
  //res.sendFile(__dirname + '/public/index.html')
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})

const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

function createJWT(claims) {
  const headerEnc = base64url.encode(JSON.stringify({
    'typ': 'JWT',
    'alg': 'HS256'
  }))
  
  const claimsEnc = base64url.encode(`${JSON.stringify(claims)}`)
  const signature = base64url.encode(crypto.createHmac('sha256', process.env.SECRET)
                          .update(`${headerEnc}.${claimsEnc}`)
                          .digest())
  return `${headerEnc}.${claimsEnc}.${signature}`
}