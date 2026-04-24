import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { redis } from "@/lib/redis-client"
import Link from "next/link"

interface LookupRecord {
  domain: string
  type: string
  result: object
  timestamp: string
}
export default async function Page() {

  const keys = await redis.keys('lookup:*')
  const data = keys.length ? await redis.mget<LookupRecord[]>(...keys) : []

  return (

    <main className="flex min-h-screen  ">
      <div className="flex justify-center p-4">
        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Here you can see your DNS lookup history</h1>
            <p>Also can be filtered by domain and record type etc you name it...</p>
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>

      <div className="my-4 w-full px-6">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {data.map((lookup: LookupRecord, index: number) => (
            <Card key={index} style={{ minWidth: 0 }} className="flex flex-col space-y-10 gap-2 p-4 ">
              <CardHeader className=" p-0 ">

                <div className="flex justify-between">
                  <h2 className="text-xs font-semibold">
                    {new Date(lookup.timestamp).toLocaleDateString()}
                  </h2>
                  <p className="text-xs text-primary">
                    {new Date(lookup.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="text-xs bg-muted border  rounded-md p-3 overflow-auto max-h-full">
                <pre >
                  <code>{JSON.stringify(lookup, null, 2)}</code>
                </pre>
              </CardContent>

              <CardFooter className="p-0 ">
                <Link href={`http://${lookup.domain}`} className="text-sm text-primary font-bold">{lookup.domain}</Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

    </main>

  )
}
