import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("App is not starting: ", error);
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is up and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection failed: ", error);
  });

/*
import { DB_NAME } from "constants.js";
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Err: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`Server is up and listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();

*/
