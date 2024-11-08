import { LanguageProvider } from "@inlang/paraglide-next";

import { Link } from "@/lib/i18n";

import * as m from "@/paraglide/messages";
import { languageTag } from "@/paraglide/runtime.js";
import { SwitchLocale } from "./switch-locale";

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <LanguageProvider>
    <html lang={languageTag()}>
      <body>
        <nav>
          <ul>
            <li>
              <Link href="/">{m.HOMEPAGE()}</Link>
            </li>
            <li>
              <Link href="/about-us">{m.ABOUT_US()}</Link>
            </li>
            <li>
              <SwitchLocale locale="de">de</SwitchLocale>
            </li>
            <li>
              <SwitchLocale locale="en">en</SwitchLocale>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  </LanguageProvider>
);

export default RootLayout;
