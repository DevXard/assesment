const express = require('express');
const axios = require('axios');
const ExpressError = require('./expressError')
const app = express();

app.use(express.json());

app.post('/', async function(req, res, next) {
  
  try {
    let results = await Promise.all(req.body.developers.map(d => 
    {
      return axios.get(`https://api.github.com/users/${d}`);
    }
    ))
    
    let out = results.map(  r => ({ name:  r.data.name, bio: r.data.bio })
    );
    
    return res.json(out);
  } catch(err) {
    next(err);
  }
});

app.use((req, res, next) => {
  throw new ExpressError("not Found", 404)
})

app.use((err, req, res, next) => {
  res.status(err.status || 500)

  return res.json({
    error: err.message
  })
})

app.listen(3000, function () {
  console.log('Server is running')
});
