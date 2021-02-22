# Reactend-faker

This is a template to create your http-server as a mock-server with fake data (using [faker.js](https://github.com/Marak/Faker.js#readme))

```js
import React from "react";
import {
  registerApp,
  App,
  Router,
  Get,
  Post,
  Res,
  Logger,
} from "@reactend/express";

const ExpressApp = () => (
  <App port={process.env.PORT || 3000}>
    <Logger mode="dev" />
    <Router path="/">
      <Get path="/users">
        <Res.Faker
          length={5}
          locale="en"
          map={{
            userId: "random.uuid",
            isAdmin: false,
            profile: {
              fullName: "name.findName",
              avatar: "image.people",
              registeredAt: "date.past",
            },
            orders: Array.from({ length: 3 }, () => ({
              id: "random.uuid",
              name: "commerce.productName",
              color: "commerce.color",
            })),
          }}
        />
      </Get>
      <Post path="/post">
        <Res.Faker
          map={{
            title: "lorem.sentence",
            body: "lorem.paragraphs",
            image: "image.city",
            createdAt: "date.past",
          }}
        />
      </Post>
    </Router>
  </App>
);

registerApp(ExpressApp);
```

### Faker Data

## Check this playground

https://rawgit.com/Marak/faker.js/master/examples/browser/index.html

## API

- address
  - zipCode
  - zipCodeByState
  - city
  - cityPrefix
  - citySuffix
  - streetName
  - streetAddress
  - streetSuffix
  - streetPrefix
  - secondaryAddress
  - county
  - country
  - countryCode
  - state
  - stateAbbr
  - latitude
  - longitude
  - direction
  - cardinalDirection
  - ordinalDirection
  - nearbyGPSCoordinate
  - timeZone
- commerce
  - color
  - department
  - productName
  - price
  - productAdjective
  - productMaterial
  - product
  - productDescription
- company
  - suffixes
  - companyName
  - companySuffix
  - catchPhrase
  - bs
  - catchPhraseAdjective
  - catchPhraseDescriptor
  - catchPhraseNoun
  - bsAdjective
  - bsBuzz
  - bsNoun
- database
  - column
  - type
  - collation
  - engine
- date
  - past
  - future
  - between
  - betweens
  - recent
  - soon
  - month
  - weekday
- fake
- finance
  - account
  - accountName
  - routingNumber
  - mask
  - amount
  - transactionType
  - currencyCode
  - currencyName
  - currencySymbol
  - bitcoinAddress
  - litecoinAddress
  - creditCardNumber
  - creditCardCVV
  - ethereumAddress
  - iban
  - bic
  - transactionDescription
- git
  - branch
  - commitEntry
  - commitMessage
  - commitSha
  - shortSha
- hacker
  - abbreviation
  - adjective
  - noun
  - verb
  - ingverb
  - phrase
- helpers
  - randomize
  - slugify
  - replaceSymbolWithNumber
  - replaceSymbols
  - replaceCreditCardSymbols
  - repeatString
  - regexpStyleStringParse
  - shuffle
  - mustache
  - createCard
  - contextualCard
  - userCard
  - createTransaction
- image
  - image
  - avatar
  - imageUrl
  - abstract
  - animals
  - business
  - cats
  - city
  - food
  - nightlife
  - fashion
  - people
  - nature
  - sports
  - technics
  - transport
  - dataUri
- internet
  - avatar
  - email
  - exampleEmail
  - userName
  - protocol
  - httpMethod
  - url
  - domainName
  - domainSuffix
  - domainWord
  - ip
  - ipv6
  - port
  - userAgent
  - color
  - mac
  - password
- lorem
  - word
  - words
  - sentence
  - slug
  - sentences
  - paragraph
  - paragraphs
  - text
  - lines
- music
  - genre
- name
  - firstName
  - lastName
  - middleName
  - findName
  - jobTitle
  - gender
  - prefix
  - suffix
  - title
  - jobDescriptor
  - jobArea
  - jobType
- phone
  - phoneNumber
  - phoneNumberFormat
  - phoneFormats
- random
  - number
  - float
  - arrayElement
  - arrayElements
  - objectElement
  - uuid
  - boolean
  - word
  - words
  - image
  - locale
  - alpha
  - alphaNumeric
  - hexaDecimal
- system
  - fileName
  - commonFileName
  - mimeType
  - commonFileType
  - commonFileExt
  - fileType
  - fileExt
  - directoryPath
  - filePath
  - semver
- time
  - recent
- unique
- vehicle
  - vehicle
  - manufacturer
  - model
  - type
  - fuel
  - vin
  - color
  - vrm

[@reactend/express](https://github.com/reactend/reactend-express)
