import app from "./app.js";
import { sequelize } from "./database/database.js";

async function main() {
  await sequelize;
  app.listen(3000);
  console.log("Server on port 3000");
}

main();
