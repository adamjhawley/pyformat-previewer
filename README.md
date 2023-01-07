## PyFormat Previewer
Are you:
* Confused by the different Python string formatting options?
* Too lazy to open a terminal and try examples there?

If so, PyFormat Previewer is here to save the day. Experiment with different formatting parameters in-browser.

## Development
### Python API
1. Run the API using: `uvicorn index:app --reload`

### Frontend
1. Adjust the host in `page.ts` to be `localhost:PORT` where `PORT` can be found from the Python API output.
2. Run vite in development mode with: `npm run build`
