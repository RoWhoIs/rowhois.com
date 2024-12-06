import Head from "next/head";
import { Footer, Navigation } from "@/modules/navigation";
import {
  add_bot,
  open_server,
  open_github,
  open_discord,
  open_roblox,
  open_personal_github,
} from "@/modules/links.js";
export default function Main() {
  return (
    <>
      <Head>
        <title>RoWhoIs - About</title>
        <meta
          name="description"
          content="About RoWhoIs: the most advanced Roblox lookup Discord utility."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="about column-content">
        <div className="column-section">
          <img src="/rwi-pfp.png" alt="RoWhoIs logo" />
          <div className="text-container">
            <h1>About our Bot</h1>
            <p>
              RoWhoIs is the most advanced Roblox lookup tool that allows you to
              perform advanced user and item lookups, including seeing privated
              player's inventories and grabbing clothing textures, all while being
              open-sourcev!
            </p>
            <div className="buttons-container">
              <button type="button" onClick={add_bot}>
                <span></span>View Repository
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
