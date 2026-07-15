import { useEffect, useState } from "react";
import { Link } from "wouter";

export default function Home() {
  const [activeSection, setActiveSection] = useState("acceptance-of-terms");

  const sections = [
    { id: "acceptance-of-terms", title: "1. Acceptance of Terms" },
    { id: "what-mingle-is", title: "2. What Mingle Is" },
    { id: "account-information", title: "3. Account Information We Collect" },
    { id: "pi-payments", title: "4. Pi Payments Between Users" },
    { id: "kyc-requirements", title: "5. KYC Requirements" },
    { id: "no-refunds", title: "6. No Refunds" },
    { id: "user-generated-content", title: "7. User-Generated Content" },
    { id: "marketplace-conduct", title: "8. Marketplace Conduct" },
    { id: "account-suspension", title: "9. Account Suspension & Termination" },
    { id: "disclaimer", title: "10. Disclaimer & Limitation of Liability" },
    { id: "changes", title: "11. Changes to These Terms" },
    { id: "contact", title: "12. Contact" },
  ];

  // Intersection observer to update active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first intersecting entry
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-100px 0px -60% 0px" } // Adjust this margin to trigger exactly when reading
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      // Offset for sticky header if any, plus some breathing room
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              M
            </div>
            <span className="font-semibold text-lg tracking-tight">Mingle</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="text-foreground transition-colors">Legal</Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-6 py-12 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative">
          
          {/* Sidebar Navigation */}
          <aside className="hidden md:block w-56 lg:w-64 shrink-0">
            <div className="sticky top-32">
              <h3 className="font-semibold text-sm tracking-wider text-muted-foreground uppercase mb-6">
                Contents
              </h3>
              <nav className="flex flex-col gap-1 border-l-2 border-border/50">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(section.id, e)}
                    className={`
                      px-4 py-2 text-sm transition-all duration-200 border-l-2 -ml-[2px]
                      ${activeSection === section.id 
                        ? 'border-primary text-primary font-medium bg-primary/5' 
                        : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'}
                    `}
                  >
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <article className="flex-1 max-w-3xl prose prose-slate prose-headings:font-semibold prose-h1:text-4xl prose-h1:tracking-tight prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-p:text-muted-foreground prose-p:leading-relaxed prose-li:text-muted-foreground prose-li:marker:text-primary/50">
            <div className="mb-16">
              <h1 className="text-foreground mb-4">Mingle Terms of Use</h1>
              <p className="text-sm font-medium text-primary">Last updated: July 15, 2026</p>
            </div>

            <section id="acceptance-of-terms" className="scroll-mt-32">
              <h2>1. Acceptance of Terms</h2>
              <p>By creating an account or using Mingle ("the App"), you agree to these Terms of Use. If you do not agree, do not use the App.</p>
            </section>

            <section id="what-mingle-is" className="scroll-mt-32">
              <h2>2. What Mingle Is</h2>
              <p>Mingle is a social and marketplace app built on the Pi Network. It lets users connect socially and buy and sell goods and services from one another using Pi.</p>
            </section>

            <section id="account-information" className="scroll-mt-32">
              <h2>3. Account Information We Collect</h2>
              <p>To create and operate your account, Mingle collects only:</p>
              <ul>
                <li>Your username</li>
                <li>Your Pi wallet address</li>
                <li>Your email address</li>
              </ul>
              <p>We use this information solely to authenticate you, operate your account, and facilitate transactions on the App. We do not collect additional personal data beyond what is listed here.</p>
            </section>

            <section id="pi-payments" className="scroll-mt-32">
              <h2>4. Pi Payments Between Users</h2>
              <p>Mingle allows users to pay one another in Pi for goods and services listed or agreed upon within the App.</p>
              <ul>
                <li>All payments are made directly between users using Pi.</li>
                <li>Mingle facilitates the connection and listing but is not a party to the transaction between buyer and seller.</li>
                <li>Users are responsible for accurately describing goods/services offered and for fulfilling agreed transactions in good faith.</li>
              </ul>
            </section>

            <section id="kyc-requirements" className="scroll-mt-32">
              <h2>5. KYC Requirements</h2>
              <p>Certain Pi transactions require Know Your Customer (KYC) verification through the Pi Network before they can be completed.</p>
              <ul>
                <li>Users may be required to complete Pi Network's KYC process to send, receive, or withdraw Pi through the App.</li>
                <li>Mingle does not perform its own separate identity verification; KYC status and verification are managed by the Pi Network.</li>
                <li>Transactions that require KYC may be delayed or blocked until verification is complete.</li>
              </ul>
            </section>

            <section id="no-refunds" className="scroll-mt-32">
              <h2>6. No Refunds</h2>
              <p>All Pi payments made through Mingle are final.</p>
              <ul>
                <li>Mingle does not process, hold, or reverse payments, and cannot issue refunds for any transaction between users.</li>
                <li>Disputes about goods or services not delivered as described must be resolved directly between the buyer and seller.</li>
                <li>Users should confirm details of a transaction before sending payment.</li>
              </ul>
            </section>

            <section id="user-generated-content" className="scroll-mt-32">
              <h2>7. User-Generated Content</h2>
              <p>Mingle allows users to post content, including listings, messages, profile information, and other material ("User Content").</p>
              <ul>
                <li>You retain ownership of the User Content you post, but grant Mingle a license to display it within the App as needed to operate the service.</li>
                <li>You are solely responsible for the content you post. Content must not be illegal, fraudulent, harassing, hateful, sexually explicit, or infringe on others' rights.</li>
                <li>Mingle may remove any User Content, and suspend or terminate accounts, that violate these rules or applicable law, at its discretion.</li>
                <li>Do not post content misrepresenting goods, services, or your identity in connection with a Pi transaction.</li>
              </ul>
            </section>

            <section id="marketplace-conduct" className="scroll-mt-32">
              <h2>8. Marketplace Conduct</h2>
              <ul>
                <li>Listings must accurately describe the goods or services offered and their price in Pi.</li>
                <li>Users must not use the App for illegal goods or services, scams, or misleading listings.</li>
                <li>Mingle may remove listings or restrict accounts that violate marketplace rules.</li>
              </ul>
            </section>

            <section id="account-suspension" className="scroll-mt-32">
              <h2>9. Account Suspension & Termination</h2>
              <p>Mingle may suspend or terminate a user's account for violations of these Terms, fraudulent activity, or misuse of the App's social or marketplace features.</p>
            </section>

            <section id="disclaimer" className="scroll-mt-32">
              <h2>10. Disclaimer & Limitation of Liability</h2>
              <p>Mingle is provided "as is." Mingle is not responsible for the conduct of users, the quality or delivery of goods/services exchanged between users, or losses arising from Pi Network transactions, KYC delays, or Pi price fluctuations. To the maximum extent permitted by law, Mingle disclaims liability for any indirect, incidental, or consequential damages arising from use of the App.</p>
            </section>

            <section id="changes" className="scroll-mt-32">
              <h2>11. Changes to These Terms</h2>
              <p>We may update these Terms from time to time. Continued use of the App after changes are posted constitutes acceptance of the updated Terms.</p>
            </section>

            <section id="contact" className="scroll-mt-32">
              <h2>12. Contact</h2>
              <p>Questions about these Terms can be sent to: <a href="mailto:mingle.app.pi@gmail.com" className="text-primary hover:underline font-medium">mingle.app.pi@gmail.com</a></p>
            </section>
          </article>
        </div>
      </main>
      
      <footer className="mt-24 border-t border-border/50 py-12 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
              M
            </div>
            <span className="font-semibold text-sm">Mingle</span>
          </div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; 2026 Mingle. Built on the Pi Network.
          </p>
        </div>
      </footer>
    </div>
  );
}
