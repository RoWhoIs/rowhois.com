import Head from "next/head";
import { Footer, Navigation } from "@/modules/navigation";
import { upsell_premium } from "@/modules/links.js";
export default function Main() {
  return (
    <>
      <Head>
        <title>RoWhoIs+</title>
        <meta
          name="description"
          content="RoWhoIs+: RoWhoIs to the next level"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="plus column-content">
        <div className="column-section">
          <img src="/rwip-ico.webp" alt="RoWhoIs logo" />
          <div className="text-container">
            <h1>RoWhoIs+</h1>
            <p>
              RoWhoIs to the next level.
              <br />
              No cooldowns, more commands, and more data.
            </p>
            <button type="button" onClick={upsell_premium}>
              <span></span>Get RoWhoIs+
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
