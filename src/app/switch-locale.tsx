"use client";

import { Link, usePathname } from "@/lib/i18n";

export const SwitchLocale = (
  props: Omit<React.ComponentPropsWithRef<typeof Link>, "href">
) => {
  const pathname = usePathname();
  return <Link href={pathname} {...props} />;
};
