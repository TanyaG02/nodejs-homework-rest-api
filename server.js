const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://tanyagryanko:KP2carfSJfWjh3tZ@cluster0.aawt66m.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000);
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
