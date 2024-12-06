import Head from "next/head";
import { Navigation, Footer } from "@/modules/navigation";
import { add_bot, open_server, open_github } from "@/modules/links.js";
export default function Main() {
  return (
    <>
      <Head>
        <title>RoWhoIs</title>
        <meta
          name="description"
          content="The most advanced open-source Roblox lookup Discord utility."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="content">
        <img src="/rwi-pfp.png" alt="RoWhoIs logo" className="responsive" />
        <h1>RoWhoIs</h1>
        <p>The most advanced open-source Roblox lookup Discord utility.</p>
        <div>
          <button type="button" onClick={open_server}>
            <span></span>View Source
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
