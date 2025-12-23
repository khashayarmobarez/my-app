import { BASE_URL } from "@/constants";

// making the page dynamic
// export const dynamic = 'force-dynamic';

// making the page static but revalidating every 1 minute
// export const revalidate = 60;

async function CachePage() {
    const response = await fetch(`${BASE_URL}/api/caching`,
        {
            // revalidating in api req
            // next: {
            //     revalidate: 60,
            // },


            // no store 
            // cache: 'no-store',
        }
    );
    const data = await response.json();
    return <div>{data.message}</div>;
}