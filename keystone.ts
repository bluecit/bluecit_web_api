/*
Welcome to Keystone! This file is what keystone uses to start the app.

It looks at the default export, and expects a Keystone config object.

You can find all the config options in our docs here: https://keystonejs.com/docs/apis/config
*/

import { config } from "@keystone-6/core";

// Look in the schema file for how we define our lists, and how users interact with them through graphql or the Admin UI
import { lists } from "./schema";
console.log(process.env.NODE_ENV);
// Keystone auth is configured separately - check out the basic auth setup we are importing from our auth file.
import { withAuth, session } from "./auth";
import { devDB, prodDB } from "./config";
const devURL = process.env.FRONTEND_URL as string;
const prodURL = process.env.FRONTEND_PROD_URL as string;
console.log(devDB);

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    server: {
      port: 3000,
      cors: {
        origin: [devURL, prodURL],
        credentials: true,
      },
    },
    db: {
      provider: "sqlite",
      url: process.env.NODE_ENV === "development" ? devDB : prodDB,
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session,
  })
);
