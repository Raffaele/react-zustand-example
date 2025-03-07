# Simple React + zunstand example (todo list)

The boilerplate is coming from [Vite](https://vite.dev/) with the [zustand](https://github.com/pmndrs/zustand). A very simple backend version is created with [json-server](https://github.com/typicode/json-server).

### SW required

1. [Node](https://nodejs.org/)
2. [Yarn](https://www.npmjs.com/package/yarn)

### Run the example

1. Clone the repo
2. run `yarn` command
3. Run the sw locally
   1. By running in 2 separated terminals `yarn run server` and `yarn dev`
   2. By running in the terminal the command `yarn run full-example`
4. Open the link suggested in the terminal

### Where it is used

The store of zustand is in the `src/stores/todoStore` file. The usage in `src/components/CreateTaksForm/CreateTaksForm.tsx` and in `src/components/TodoList/TodoList.tsx` files.
