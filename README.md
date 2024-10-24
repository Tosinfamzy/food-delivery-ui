# Food Delivery UI

THe frontend for the food delivery app

I added an input field to the design with an autocomplete feature thar searches for the user and returns the delivery message on click.

## How to run

First rename the .env.example to .env and add the url to the api eg `http://localhost:3000/`

```bash
$ npm i
$ npm run dev
```

locally it should be running on [port 5173](http://localhost:5173/) or the closest available port.

## Other details

- Tailwind was used for the styling
- Decided to use context api rather than someting like redux based as that would be overkill
- Used axios for api calling but to make it flexible I exported an instance of axios with the defaultUrl

## Improvements

- Better compenent structure
- Add unit test for the happy and sad scenarios
- Implement Authentication which will eliminate the need for the input field
