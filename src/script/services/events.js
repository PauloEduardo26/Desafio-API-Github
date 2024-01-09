import { baseUrl } from "../variables.js";

async function getEvents(userName){
    const responseEvents = await fetch(`${baseUrl}/${userName}/events?per_page=10`);
    return await responseEvents.json();
}

export { getEvents }