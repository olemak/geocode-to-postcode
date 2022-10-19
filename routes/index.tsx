import { Head } from "$fresh/runtime.ts";
import GetPostcode from "../islands/GetPostcode.tsx";

export default function Home() {
  return (
    <body>
      <Head>
        <title>What is my postcode?</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📍</text></svg>"></link>
        <link rel="stylesheet" href="style.css"/>
      </Head>
      <GetPostcode />
    </body>
  );
}
