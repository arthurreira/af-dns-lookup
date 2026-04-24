import dns from 'dns/promises';



export const handler = async (event) => {
    const queryDomain = event.queryStringParameters.domain;
    const queryType = event.queryStringParameters.type;



    try {
    
        const result = await dns.resolve(queryDomain, queryType);

        return {
            statusCode: 200,
            body: JSON.stringify({ result }),
        };
        
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: error.message }),
        };
    }
    
 
}


