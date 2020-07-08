const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const apiRoutes = require('./routes/index');
// const socket = require('socket.io');

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build/index.html"));
}
// //set up socket.io
// var server = app.listen(4000, function () {
//   console.log('listening to requests on port 4000');
// });

// var io = socket(server);
// io.on('connection', function (socket) {
//   console.log('ioSocket connected');
// });

// Define API routes here
app.use('/api', apiRoutes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//set up mongoose connection w/googlebooks
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
