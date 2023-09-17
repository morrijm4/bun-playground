# bun-playground

Run, build, and manage scripts with Bun.

## Commands

### dev

Run index.ts file.

```
bun dev
```

### make

Build and minify index.ts file.

```
bun make
```

### start

Run the built dist/index.js file.

```
bun start
```

### store

Save the index.ts file in the `store/` directory. It will append the date (yyyy-mm-dd) and optionally you can provide
a title to name the file.

```
bun store [title]
```

### reset

Replace index.ts with the default kit.

```
bun reset
```
