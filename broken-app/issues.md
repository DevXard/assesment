# Broken App Issues

* app.use(express.json()); was not used
* The original results  was returning promises and coud not get the data needed for respocents
* insted of res. send we can do res.json to have the write headers
* there is no error handeling