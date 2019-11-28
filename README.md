# CCN Quotes

**Figma Prototype:** https://www.figma.com/file/mgDXo72A9VZWzCfq7obMlI/Untitled?node-id=1%3A3

---

## Introduction: What's this

A notes app! :) I.e. an SPA that lets the user:

1. Pull a list of quotes from an API.
2. Create a new quote.
3. Update a quote.
4. Delete a quote.

## What's used

1. A [create-react-app](https://facebook.github.io/create-react-app/docs/) to run the application in development mode.
2. The [cypress](https://www.cypress.io/) testing suite.
3. A local api to CRUD (Create Read Update Delete) the quotes.


## Getting started

Make sure you are running `nodejs >= 10` before starting.

In the project directory, run: `yarn` to install all the dependencies. Then you can run the following commands:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn cypress open`

Opens Cypress's electron app, useful when writing test as it reloads the test suite when editing a test.

### `yarn cypress run`

Executes the Cypress test suite in the terminal (headless mode).

### `yarn api`

Runs the api locally.<br>
The api is available @ [http://localhost:3001](http://localhost:3001).

## API Specification

All the data is persisted in the `db.json` file located at the root of the repository. The API is built using [json-server](https://github.com/typicode/json-server)

### Data model

The data model includes a single entity, the `quote` object:

```
{
  id: int, //auto increment
  author: string, // the quote author
  body: string, // the quote text
  source: string // the url pointing to the author profile
}
```

### Endpoints

The available endpoints are:

```
// Get an array of quotes
GET    /quotes

// Get a single quote by id
GET    /quotes/{id}

// Create a new quote
// Required field are author / body / source
POST   /quotes

// Update a quote
// Allowed parameters are author / body / source
PUT    /quotes/{id}

// Delete a quote by id
DELETE /quotes/{id}
```

The following api features are not required for the assignement but are here if you feel creative :)

### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.

```
GET /quotes?_page=7
GET /quotes?_page=7&_limit=20
```

_10 items are returned by default_

### Sort

Add `_sort` and `_order` (ascending order by default)

```
GET /quotes?_sort=author&_order=asc
```

### Full-text search

Add `q`

```
GET /quotes?q=nyan
```
