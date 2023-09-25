const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

function render(data) {
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${data.title}</title>
  </head>
  <body>
    ${data.body}
  </body>
  </html>`
}

app.get('/', (req, res) => {
  let title = 'Hello World!'
  let body = '<h1>Hello World!</h1>'

  res.send(render({
    title: title,
    body: body
  }))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
