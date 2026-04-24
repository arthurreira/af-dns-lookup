"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { Card } from "@/components/ui/card"
const RECORD_TYPES = ["A", "AAAA", "MX", "TXT", "CNAME", "NS"]
export default function Page() {

  const [domain, setDomain] = useState("")
  const [domainType, setDomainType] = useState("A")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)


  const handleFetch = async () => {

      if (!domain) {
        toast.error("Please enter a domain")
        return
      }
      setLoading(true)
      setResult(null)
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?domain=${domain}&type=${domainType}`)
        if (!res.ok) {

          throw new Error("failer to fecth dns data!")
        }
        const data = await res.json();
        console.log(data);
        setResult(data);
      }
      catch (error) {
        toast.error(error.message)

      }
      finally {

        setLoading(false)
      }

  }
  return (

    <main className="flex min-h-screen flex-col items-center justify-between p-12">
      <div className="flex min-h-svh justify-center  p-6">

        <div className="flex max-w-md min-w-0 flex-col gap-4 text-sm leading-loose">
          <div>
            <h1 className="font-medium">Ready to test this functionality? </h1>
            <p>First you need to enter a domain and select a record type.</p>
          </div>

          <div className="flex gap-2">
            <Input
              placeholder="192.168.0.1"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
            />
            <Select
              value={domainType}
              onValueChange={(value) => setDomainType(value)}
            >
              <SelectTrigger >
                <SelectValue defaultValue={domainType} />

              </SelectTrigger>
              <SelectContent>
                {RECORD_TYPES.map((type) => (
                  <SelectItem key={type} value={type}>
                    {type}
                  </SelectItem>
                ))}
              </SelectContent>

            </Select>
          </div>

          <div>
            <Button onClick={handleFetch}>
            {loading ? "Loading..." : "Search for DNS"}
            </Button>
          </div>


          <div>

                  {result && (
                    <Card className="p-4 overflow-auto">
                      <pre className="text-sm">
                        <code>{JSON.stringify(result, null, 2)}</code>
                      </pre>
                    </Card>
                  )}

          </div>
          <div className="font-mono text-xs text-muted-foreground">
            (Press <kbd>d</kbd> to toggle dark mode)
          </div>
        </div>
      </div>
    </main>

  )
}
