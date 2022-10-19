import { CHAR_NO_BREAK_SPACE } from "https://deno.land/std@0.150.0/path/_constants.ts";
import { useState } from "preact/hooks";


export default function GetGeo() {
    const [postcode, setPostcode] = useState("");

    const sendToServer = async (geoLocation: any) => {
        const { latitude, longitude } = geoLocation.coords;
        const post_code = await fetch(`/api/geo?lat=${latitude}&lng=${longitude}`).then(r => r.json());        

        setPostcode(post_code);
    }

    const getPostcodeFromGeologation = async () => { 
        const geolocation = await navigator.geolocation.getCurrentPosition(sendToServer);
    }

  return (
    <main>
        <h1>What postal code am I in?</h1>
        <button onClick={getPostcodeFromGeologation} disabled={!!postcode}>Use current location</button>
        <h2>{ postcode ? (<>Your postcode is <em>{postcode}</em></>) : <span>&nbsp;</span> }</h2>
    </main>
  );
}
