import Head from "next/head";
import { Navigation, Footer } from "@/modules/navigation";
export default function Main() {
  return (
    <>
      <Head>
        <title>RoWhoIs - Terms of Service</title>
        <meta
          name="description"
          content="Terms of Service applicable to anyone using the RoWhoIs service."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="legal-content">
        <header>
          <h1>Terms of Service</h1>
          <p>Last Updated: 01/20/2024</p>
        </header>

        <section>
          <p>
            Thank you for using RoWhoIs! These Terms of Usage outline the terms
            and conditions governing your use of the RoWhoIs Discord bot. By
            using the bot, you agree to comply with these terms.
          </p>
        </section>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By using RoWhoIs, you acknowledge and agree to these Terms of Usage.
            If you do not agree with any part of these terms, please refrain
            from using the bot.
          </p>
        </section>

        <section>
          <h2>2. Use of External Services</h2>
          <p>
            RoWhoIs relies on external services, including but not limited to
            Discord, Rolimons, and Roblox, to provide its functionality. By
            using the bot, you understand and accept that your interactions with
            these external services are governed by their respective terms of
            service and privacy policies. RoWhoIs is not responsible for the
            actions or policies of these external services.
          </p>
        </section>
        <section>
          <h2>3. API Interface</h2>
          <p>
            RoWhoIs serves as an easy-to-use interface between users and
            external services. It facilitates communication and interaction but
            does not have control over the policies, content, or actions of the
            external services. Users are solely responsible for their
            interactions with these external services.
          </p>
        </section>
        <section>
          <h2>4. No Affiliation or Endorsement</h2>
          <p>
            RoWhoIs is an independent project and is not affiliated with,
            endorsed by, or sponsored by Discord, Rolimons, or Roblox. Any
            references to Discord, Rolimons, or Roblox are for informational
            purposes only. RoWhoIs does not claim any official status or
            partnership with these entities.
          </p>
        </section>
        <section>
          <h2>5. User Responsibilities</h2>
          <p>
            Users are responsible for their use of RoWhoIs, including compliance
            with applicable laws and regulations. Users must not engage in any
            activity that violates the terms of service of external services or
            that may disrupt the operation of the bot.
          </p>
        </section>
        <section>
          <h2>6. Right to Block Users</h2>
          <p>
            RoWhoIs reserves the right to block or terminate a user's access to
            the bot without prior notice if the user is found to be abusing the
            service, violating these Terms of Usage, or engaging in any activity
            that may harm the integrity or functionality of the bot.
            Furthermore, we ("RoWhoIs") reserve the right to stop users from
            accessing our services without a reason.
          </p>
        </section>
        <section>
          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms of Usage at any
            time. The date of the last update will be indicated at the beginning
            of the terms. Continued use of the bot after any changes implies
            acceptance of the modified terms.
          </p>
        </section>
        <section>
          <h2>8. Limitation of Liability</h2>
          <p>
            RoWhoIs is provided "as is," and we make no warranties or guarantees
            regarding its performance, reliability, or suitability for a
            particular purpose. We are not liable for any direct, indirect,
            incidental, consequential, or punitive damages arising out of or in
            connection with the use of the bot.
          </p>
        </section>
        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have any questions, concerns, or inquiries regarding these
            Terms of Usage, please contact us at{" "}
            <a href="mailto:support@rowhois.com">support@rowhois.com</a>.
          </p>
        </section>
        <section>
          <p>
            By using RoWhoIs, you agree to the terms and conditions outlined in
            these Terms of Usage and our Privacy Policy.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
}
