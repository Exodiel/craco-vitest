# Craco Vitest Template TS

## What this template does

A template which use **craco** to run and build react code also integrate with `vitest` to run all suite test in the project.

By using this template or by following the guide bellow your project has support for:

- Zero downtime deploy with Create-React-App (CRA) setup
- Use **Vitest** to run all suite test

## Getting Started

### Install

#### Create the project.

```bash
npx degit Exodiel/craco-vitest project-name
```

#### Access the project directory.

```bash
cd project-name
```

#### Install dependencies.

```bash
yarn install
```

Serve with hot reload at http://localhost:3000.

```bash
yarn run dev
```

### Lint

```bash
yarn run lint
```

### Build

```bash
yarn run build
```

### Test

```bash
yarn run test
```

## Notes

**Zero downtime deploy**: If you are using a nais image to run your front-end application. You must ensure that the file names are the same between each deploy. By default CRA always names the js file `[name].[file-hash].js` and the css file `[name]-[file-hash].css`. This is usually good, but we need the names to stay the same when serving static files from a nais application. If not, a user can end up getting a new index.html from a new running instance, but asking the old instance for the `js` and `css` files. If the filenames are different, the user will get a 404.
