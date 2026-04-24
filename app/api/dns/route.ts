


export async function GET(request: Request){

    const {searchParams} = new URL(request.url)

    const domain = searchParams.get('domain')
    const domainType = searchParams.get('type')


   
    const res = await fetch(`${process.env.API_URL}?domain=${domain}&type=${domainType}`,{

            headers: {
                "x-api-key": process.env.API_GATEWAY_KEY ?? ""
            }
        })

        const data = await res.json()
        return Response.json(data)

}