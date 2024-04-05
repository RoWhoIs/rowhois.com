import Head from "next/head";
import {Footer, Navigation} from "@/modules/navigation";
import {add_bot, open_server, open_github, open_discord, open_roblox, open_personal_github} from "@/modules/links.js";
export default function Main() {
    return (
        <>
            <Head>
                <title>RoWhoIs - About</title>
                <meta name="description" content="About RoWhoIs: the most advanced Roblox lookup Discord utility."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Navigation/>
            <div className="column-content">
                <div className="column-section">
                    <img src="/rwi-pfp.png" alt="RoWhoIs logo"/>
                    <div className="text-container">
                        <h1>About our Bot</h1>
                        <p>RoWhoIs is an advanced Roblox lookup tool that allows you to perform advanced user and item
                            lookups, including seeing privated player's inventories and grabbing clothing textures.</p>
                        <button type="button" onClick={add_bot}><span></span>Add to server</button>
                        <button type="button" onClick={open_server}><span></span>Support Server</button>
                        <button type="button" onClick={open_github}><span></span>GitHub Page</button>
                    </div>
                </div>
                <div className="column-section">
                <img src="/profile_picture.jpeg" alt="Autumn's profile picture"/>
                    <div className="text-container">
                        <h1>About our Creator</h1>
                        <p>Heyhey! I'm Autumn. I develop RoWhoIs in my free time in between college and two jobs. I'm
                            not much of a Roblox player but I love their API and made some tools utilizing it. Some
                            friends recommended I make those tools public, et voila, we have RoWhoIs.</p>
                        <button type="button" onClick={open_discord}><span></span>Discord Profile</button>
                        <button type="button" onClick={open_roblox}><span></span>Roblox Profile</button>
                        <button type="button" onClick={open_personal_github}><span></span>GitHub Profile</button>

                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}
