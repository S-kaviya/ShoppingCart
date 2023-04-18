const MongoClient = require("mongodb").MongoClient;
const url = "mongodb://127.0.0.1:27017/";
const dbName = "LoginDB";
const checkUser = async (username, password) => {
  console.log(username, password);
  const client = new MongoClient(url);
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("register");
    const user = await collection.findOne({ username: username });
    if (!user) {
      return { error: "User not found" };
    }
    const isMatch = await collection.findOne({ password: password });
    if (!isMatch) {
      return;
      {
        error: "Invalid password";
      }
    }
    return user;
  } catch (error) {
    console.error(error);
  } finally {
    await client.close();
  }
};
module.exports = { checkUser };
