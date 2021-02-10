const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError')
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  
  try {
    // send paralel requests and resolve them
    let results = await Promise.all(req.body.developers.map(d => 
    {
      return axios.get(`https://api.github.com/users/${d}`);
    }
    ))
    // map over the data from result and get name and bio
    let out = results.map(  r => ({ name:  r.data.name, bio: r.data.bio })
    );
    // send json response and stop the function
    return res.json(out);
  } catch(err) {
    next(err);
  }
});

//return 404  if rout is missing
app.use((req, res, next) => {
  throw new ExpressError("not Found", 404)
})

// if there is and error from chatch return status code and message
app.use((err, req, res, next) => {
  res.status(err.status || 500)

  return res.json({
    error: err.message
  })
})

app.listen(3000, function () {
  console.log('Server is running')
});
