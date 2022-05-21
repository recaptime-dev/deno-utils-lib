/*
 * API configuration for the Community Radar Content Warnings API wrapper.
 */
const apiConfig = {
    rootUrl: "https://recaptime-contentwarnings.deno.dev/api",
    ua: "@community-radar-recaptime/content-warnings/v0.1.0 (https://github.com/RecapTime/deno-utils-lib)"
}

const customHeaders = new Headers()
customHeaders.append('User-Agent', apiConfig.ua)

/* 
 * Get content warning data for an specific URL from Community Radar CW API
 * @param url {string} URL to query against the API
 * @returns {object}
*/
export async function getCWData(url:string): Promise<void> {
    const requestData = new Request(
        `${apiConfig.rootUrl}/getCWData?url=${url}`,
        {
            headers: customHeaders
        }
    )
    const result = await fetch(requestData)
    return await result.json()
}