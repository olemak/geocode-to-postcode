import { HandlerContext } from "$fresh/server.ts";

const postalcode = (addressComponents: any) => {
    console.log({addressComponents});   // TODO: Remove this line!
    const postal_code = addressComponents.results
        // @ts-expect-error-next-line 
        .map(result => result.address_components
            // @ts-expect-error-next-line
            .find(component => component.types.includes("postal_code"))
        );
    console.log({postal_code});           // TODO: Remove this line!
    return postal_code;
}

export const handler = async (req: Request, _ctx: HandlerContext): Promise<Response> => {
    const googleAPIkey = Deno.env.get('GMAPS_KEY');
    // @ts-expect-error-next-line
    const lat = req.url.match(/lat=([^&]*)/)[1];
    // @ts-expect-error-next-line
    const lng = req.url.match(/lng=([^&]*)/)[1];
    const geoDataUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleAPIkey}&result_type=street_address`;
    const geoData = await fetch(geoDataUrl).then(r => r.json()).then(res => {
        const [pocode_object] = postalcode(res);
        return pocode_object.long_name;
    });

  return new Response(JSON.stringify(geoData));
};
