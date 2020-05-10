const functions = require('firebase-functions')
const fs = require('fs')

import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/App'
import express from 'express'


const index = fs.readFileSync(__dirname + '/index.html', 'utf8')

const app = express()

app.get('**', (req, res) => {
  const frags = req.url.split('/')
  const workPath = frags.length === 3 && frags[1] === 'work' ? frags[2] : ''
  console.log(`url: '${req.url}', ${frags.length}, '${workPath}'`)

  if (workPath) {
    renderApplication(req, res, index, work[workPath])
    // getUrls(workPath, true).then(urls => { // will fail on Spark plan
    //   renderApplication(req, res, index, urls)
    // })
  } else {
    renderApplication(req, res, index)
  }
})

function renderApplication(req, res, index, serverData) {
  const context = {}
  const appHtml = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App />
    </StaticRouter>
  )
  const tempHtml = index.replace('/** ::APP:: **/', appHtml)
  const finalHtml = tempHtml.replace('/** ::SERVER_DATA:: **/', JSON.stringify(serverData || ''))
  res.set('Cache-Control', 'public, max-age=600 s-maxage=1200')
  res.send(finalHtml)
}

export let ssr = functions.https.onRequest(app);

// temporary static json object that holds current set of urls on database 
const work = {
  "portrait": [
  ],
}
