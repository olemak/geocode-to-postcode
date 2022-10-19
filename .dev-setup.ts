/* THREE STEPS TO SET UP A NEW PROJECT:

First: Create a developer account at google and get a Google maps API key:
    https://developers.google.com/

Second: replace the placeholder text below with your key: */

const GMAPS_KEY = "YOUR_GOOGLE_MAPS_KEY_HERE";

/* Finally, run this file from the terminal with the following command:
    deno run --allow-env .dev-setup.ts
*/

Deno.env.set("GMAPS_KEY", GMAPS_KEY);

/* 
    Now you can start the local server with the following command:
    deno task start
*/

/* You may have to restart your computer for the environment variable to become available.
   If this stil does not work, try setting the key directly in your computer's environment variables.
  
   REMEMBER: If you deploy to a server, set the GMAP_KEY environment variable there as well! */
