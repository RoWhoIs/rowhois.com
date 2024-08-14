import Head from "next/head";
import { Navigation, Footer } from "@/modules/navigation";
export default function Main() {
  return (
    <>
      <Head>
        <title>RoWhoIs - Privacy Policy</title>
        <meta
          name="description"
          content="Privacy Policy outlining what we collect, and what we protect."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navigation />
      <div className="legal-content">
        <header>
          <h1>Privacy Policy</h1>
          <h4>Last Updated: 02/25/2024</h4>
        </header>
        <section>
          <p>
            Thank you for using RoWhoIs! This Privacy Policy outlines how we
            collect, use, and safeguard your information when you use our
            Discord bot.
          </p>
        </section>
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect and store the following information from users of
            RoWhoIs: When you interface with our Discord bot, RoWhoIs, we store
            logs of what commands you run. This includes data such as,
            <br />
            Roblox User IDs: When you input a Roblox user's User ID, we will
            store this information for analytical and functional purposes.
            <br />
            Discord User IDs: When you run a command using our bot, we will
            store the context of the command alongside your Discord user ID.
            <br />
            Usernames: Similarly, when you input a Roblox user's username, we
            will store this information for analytical and functional purposes.
            <br />
            Item IDs: If you input a Roblox Item ID, we will store the Item ID
            for performance reasons.
            <br />
            Time stamps: When you run a command with our Discord bot, we will
            also store the date and time that the command ran to help improve
            functionality of our bot.
            <br />
            Emails: When you email our support team, we will store your email
            address and the contents of the email. We store this to help serve
            support tickets.
            <br />
            This information is necessary for the proper functioning of the bot
            and to provide you with the services it offers.
          </p>
        </section>
        <section>
          <h2>2. How We Use Your Information</h2>
          <p>
            We use the collected information for the following purposes:
            <br />
            <br />
            Bot Functionality: To operate and provide the services offered by
            RoWhoIs.
            <br />
            Improvements: To analyze usage patterns and improve the
            functionality and user experience of the bot.
            <br />
            Customer Support: To respond to inquiries, troubleshoot issues, and
            provide support to users.
          </p>
        </section>
        <section>
          <h2>3. Data Security</h2>
          <p>
            We are committed to ensuring the security of your information. We
            implement industry-standard security measures to protect against
            unauthorized access, alteration, disclosure, or destruction of your
            data.
          </p>
        </section>
        <section>
          <h2>4. Data Retention</h2>
          <p>
            We retain both Roblox and Discord user IDs, usernames, and item IDs
            only for as long as necessary to fulfill the purposes outlined in
            this Privacy Policy. After that period, we securely delete the data.
            <br />
            However, we will permanently store the Roblox user IDs of users who
            have chosen to opt-out of our service. Furthermore, we permanently
            store Discord user IDs of users who are blocked from using our
            service.
          </p>
        </section>
        <section>
          <h2>5. No Sale of Personal Information</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to third parties. Your data is used solely for the
            purposes described in this Privacy Policy.
          </p>
        </section>
        <section>
          <h2>6. Changes to the Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. The date of the last update will be indicated at the beginning
            of the policy. It is your responsibility to review this Privacy
            Policy periodically for changes.
          </p>
        </section>
        <section>
          <h2>7. Opting out</h2>
          <p>
            If you would like to not be searchable using our Discord bot, please
            reach out to{" "}
            <a href="mailto:support@rowhois.com">support@rowhois.com</a> and
            provide your Roblox username and a reason for opting out. This may
            take up to an hour after approval to be placed in effect.
          </p>
        </section>
        <section>
          <h2>8. Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding your
            privacy or this Privacy Policy, please contact us at{" "}
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
