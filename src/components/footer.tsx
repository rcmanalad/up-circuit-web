import SiteLogo from "@/components/site-logo";
import SocialIcon from "@/components/social-icon";
import { NAV_LINKS, ORG, SOCIALS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-fog">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <SiteLogo className="w-48" light />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-fog/80">
              The premier Electrical and Electronics Engineering student organization of the EEEI, UP Diliman —
              “{ORG.motto}” since {ORG.founded}.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-skyice">Explore</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-skyice">Connect</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SOCIALS.map((social) => (
                <li key={social.href}>
                  <a href={social.href} target="_blank" rel="noopener" className="inline-flex items-center gap-2.5 transition hover:text-white">
                    <SocialIcon kind={social.kind} className="h-4 w-4 text-skysea" />
                    {social.handle}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${ORG.email}`} className="transition hover:text-white">
                  {ORG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-steel sm:flex-row">
          <p>© {new Date().getFullYear()} {ORG.name}. All rights reserved.</p>
          <p>Affiliated with the {ORG.affiliation}.</p>
        </div>
      </div>
    </footer>
  );
}
