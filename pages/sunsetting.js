import Head from "next/head";
import {Navigation, Footer} from "@/modules/navigation";
export default function Main() {
    return (
        <>
            <Head>
                <title>RoWhoIs - Sunsetting</title>
                <meta name="description" content="RoWhoIs could be sunsetting. It's rather important that you read this if you use RoWhoIs."/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Navigation/>
            <div className="legal-content">
                <header>
                    <center>
                        <h1>Sunsetting RoWhoIs</h1>
                        <h4>Autumn, RoWhoIs Creator</h4>
                    </center>
                </header>
                <header>
                    <p><b>Ownership Transfer Deadline:</b> 05/31/2024</p>
                    <p><b>Sunsetting Deadline:</b> 06/28/2024</p><br />
                </header>
                <section>
                    <p>Hi Robloxians,</p>
                    <br />
                    <p>I have rather unfortunate news to announce. Effective immediately, I will not be working on RoWhoIs anymore. You may be asking why, and the reason for it is simple: mental health. Checking on the growth of RoWhoIs became an addiction for me, and every time I saw the server or user count drop, I'd ask myself what I was doing wrong.</p>
                    <br />
                    <p>For obvious reasons, that isn't a healthy habit. And it tore at me. I'm currently looking for a better maintainer of the project who will keep it running and improving it. If you would like to own RoWhoIs, email me at <a href={"mailto:developers@rowhois.com"}>developers@rowhois.com</a>. Note you have to be over 18 (because of the bot monetization features).</p>
                    <br />
                    <p>If I can't find someone suitable enough by the "Ownership Transfer Deadline" date at the top, I'll be making RoWhoIs entirely open-source, and by the "Sunsetting Deadline" date, the RoWhoIs server will be going offline permanently.</p>
                    <br />
                    <p>I started developing RoWhoIs in late 2023, after I found out about the Roblox API and developed some tools for it. I shared my tools with my friends, and a few recommended I turn this into something public. I started creating RoWhoIs, which was actually the first Discord bot I had ever developed. I initially made it in discord.py but later switched to Hikari in hopes of better performance.</p>
                    <br />
                    <p>Within a matter of months, I found myself with a monetized bot with tens of thousands of users. It was funny, I'd play games like 'Drinks on Tap' and find people who used my bot- And they'd thank me. That still completely baffles me. Ultimately though, developing this has been an uphill battle both mentally and financially, but I felt it was worth it to give back to the community. With my mental health, though, this has reached a tipping point.</p>
                    <br />
                    <p>And any RoWhoIs+ subscribers, thanks for supporting me. If you'd like a refund on your purchase, you can reach out to <a href={"mailto:support@rowhois.com"}>support@rowhois.com</a>. I hope that if there is a next maintainer of RoWhoIs, they do a good job and keep the community happy. </p>
                    <br />
                    <p>And so, Robloxians, in a bid of farewell, thank you all for using RoWhoIs.</p>
                    <p><i>-- Autumn</i></p>
                </section>
            </div>
            <Footer/>
        </>
    );
}
