import { startStandaloneServer } from "@apollo/server/standalone";
import { gqlServer } from "./graphQl/index";
import 'dotenv/config';

(async function () {
  const { url } = await startStandaloneServer(gqlServer, {
    listen: { port: 4000 },
  });

  console.log("Server is ready at " + url);
})();

