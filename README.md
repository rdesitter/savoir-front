# projet-11-transmission-des-savoirs-front

## SPRINT 1

### How to work

Always start from branch `sprint1`

```bash
git checkout sprint1
```

Create a new branch to work on your feature

```bash
git checkout -b <custom_name>
```

Commit your code and push it on that new branch

```bash
git push origin <custom_name>
```

On github : Create a pull request to merge your new branch on `sprint1`

### Git naming convention

We are using [Gitmoji](https://gitmoji.dev/) + [conventional commits](https://www.conventionalcommits.org/)\

```bash
:gitmoji: type : commit name
```

### Comments

We are using [JS DOC](https://jsdoc.app/) to comment our code.\
Snippet : `/**`

_Always use english langage in your code_

```js
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```

### `npm i`

Install all dependencies we need to work.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
