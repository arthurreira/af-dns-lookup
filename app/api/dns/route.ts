import { redis } from "@/lib/redis-client"
import { v4 as uuidv4 } from "uuid";

export async function GET(request: Request) {

    const { searchParams } = new URL(request.url)

    const domain = searchParams.get('domain')
    const domainType = searchParams.get('type')



    const res = await fetch(`${process.env.API_URL}?domain=${domain}&type=${domainType}`, {

        headers: {
            "x-api-key": process.env.API_GATEWAY_KEY ?? ""
        }
    })

    const data = await res.json()
    const id = uuidv4()
    await redis.set(`lookup:${id}`, {

        domain,
        type: domainType,
        result: data,
        timestamp: new Date().toISOString()
    })
    return Response.json(data)

}