/* Direct contact paths, shown in the Home's closing band beside "Let's talk".
   Fill in the real values: a path with an empty `href` is not rendered, so
   nothing appears until it is filled, and nothing is ever a placeholder.

   href     the link itself: "mailto:…", "https://www.linkedin.com/in/…",
            "https://github.com/…", "https://wa.me/<number, digits only>"
   display  what the page shows: the address or handle, e.g. "in/farrel" */
export interface ContactPath {
  label: string;
  href: string;
  display: string;
}

export const contactPaths: ContactPath[] = [
  {
    label: "Email",
    href: "mailto:garcia.farrel@gmail.com",
    display: "garcia.farrel@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/farreltobias",
    display: "in/farrel",
  },
  {
    label: "GitHub",
    href: "https://github.com/farreltobias",
    display: "farreltobias",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/5511964130624",
    display: "+55 11 96413-0624",
  },
];

/* Attributes for a contact link: profiles and chat open in a new tab and are
   marked as Farrel's own; an email address opens the mail app in place. */
export function contactLinkAttrs(href: string) {
  return href.startsWith("http")
    ? { target: "_blank", rel: "me noopener" }
    : {};
}
