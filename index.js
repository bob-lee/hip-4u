import * as React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './src/App'
import express from 'express'
import * as fs from 'fs';
import * as functions from 'firebase-functions';

const index = fs.readFileSync(__dirname + '/index.html', 'utf8')

const app = express()

app.get('**', (req, res) => {
  renderApplication(req, res, index)
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
