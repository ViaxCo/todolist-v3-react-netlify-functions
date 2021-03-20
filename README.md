# todolist-v3-react-netlify-functions

This app lets you create various todo lists with their individual items, built using React, Redux, [Netlify Functions](https://www.netlify.com/products/functions/) and MongoDB for the database.

This app is a clone of [todolist-v3-react](https://github.com/ViaxCo/todolist-v3-react) that used Node.js and Express to create the api endpoints, but instead serverless functions are being used in this case.

## How to use

Clone the project:

```bash
git clone https://github.com/ViaxCo/todolist-v3-react-netlify-functions.git
```

Install dependencies:

```bash
npm install
```

Create a `.env` file for this environment variable:

```
MONGO_URI=
```

Run the dev server:

```bash
npm run dev
```

Build out the project for production:

```bash
npm run build
```
