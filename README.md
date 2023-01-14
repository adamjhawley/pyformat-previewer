## PyFormat Previewer
Experiment with different Python number formatting parameters in-browser.

## Development
### Python API
1. Run the API using: `uvicorn index:app --reload`

### Frontend
1. Adjust the host in `page.ts` to be `http://localhost:PORT` where `PORT` can be found from the
   Python API output.
2. Run vite in development mode with: `npm run dev`

### CI/CD
Front-end is hosted on [netlify](https://www.netlify.com/) and building is configured using the
'netlify.toml' configuration file in the root directory of this project.

The API which processes all of the string formatting is hosted on [vercel](https://vercel.com/) and
is configured using the 'vercel.json' configuration file in the root directory of this project.