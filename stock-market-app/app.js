const express = require('express');
const app = express();
const port = 3000;
const routes = require('./routes/routes');

require('./db');

// Enable body parsing for JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use  API routes
app.use('/api', routes);

app.listen(port, () => {
  console.log(`We are alive on http://localhost:${port}!!!!`);
});
