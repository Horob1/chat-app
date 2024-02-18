import mongoose from 'mongoose';

const connectToDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_DB_URL.replace(
        '<password>',
        process.env.MONGO_DB_PASSWORD
      )
    );
    console.log('Connect to db success');
  } catch (error) {
    console.log("Can't connect to DB! Error: " + error.message);
  }
};

export default connectToDB;
