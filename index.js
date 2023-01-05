const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args))
const express = require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/view/home/index.html')
})

app.post('/quotes', async (req, res) => {
  console.log(req.body)
  let translation
  translation = await translate(req.body.name)
  console.log(translation)
  res.json(translation)
})

const translate = async (string) => {
  let words = string.split(" ")
  let translatedWords = []

  for (let word of words) {
    let translatedWord = await translateWord(word)
    translatedWord = translatedWord.translatedText
    if (translatedWord.includes(" ")) {
      let wordSplit = translatedWord.split(" ")
      let firstWord = wordSplit.shift()
      
      if (wordSplit.includes(firstWord)) {
        translatedWord = firstWord
      }
    }
    translatedWords.push(translatedWord)
    console.log(translatedWord)
  }

  return translatedWords.join(" ")
}

const translateWord = async (word) => {
  const res = await fetch("http://0.0.0.0:5000/translate", {
    method: "POST",
    body: JSON.stringify({
      q: word,
      source: "en",
      target: "nl",
      format: "text",
      api_key: ""
    }),
    headers: { "Content-Type": "application/json" }
  })
  return await res.json()
}