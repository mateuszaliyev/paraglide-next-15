import { PrefixStrategy, Navigation, Middleware } from "@inlang/paraglide-next";

import type { AvailableLanguageTag } from "@/paraglide/runtime";

const strategy = PrefixStrategy<AvailableLanguageTag>({
  pathnames: {
    "/": {
      de: "/",
      en: "/",
    },
    "/about-us": {
      de: "/ueber-uns",
      en: "/about-us",
    },
  },
  prefixDefault: "never",
});

export const middleware = Middleware({ strategy });

export const { Link, useRouter, usePathname, redirect, permanentRedirect } =
  Navigation({ strategy });
