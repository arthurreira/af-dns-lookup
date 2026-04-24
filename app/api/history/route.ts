import { redis } from "@/lib/redis-client"


export async function GET(request: Request) {

    const keys = await redis.keys('lookup:*')

    const lookupData = await redis.mget(...keys)

    return Response.json(lookupData)

}