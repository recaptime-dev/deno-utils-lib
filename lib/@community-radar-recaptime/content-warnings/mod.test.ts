import { assertEquals, assert } from "./deps.ts" 
import { getCWData } from "./mod.ts"

Deno.test("Test API integration", async () => {
    const data = await getCWData("https://lttstore.com")
    assertEquals<boolean>(data.ok, false)
})