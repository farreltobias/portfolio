// Island justification: Requires client-side state and focus management for an accessible mobile navigation drawer.

import { useCallback, useEffect, useRef, useState } from 'react';

interface NavLink {
  label: string;
  href: string;
}

interface Props {
  navLinks: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  currentPath: string;
}

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export default function MobileNav({
  navLinks,
  ctaLabel,
  ctaHref,
  currentPath,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const open = () => setIsOpen(true);
  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Focus first focusable element in drawer on open
  useEffect(() => {
    if (!isOpen) return;
    const first =
      drawerRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE)[0];
    first?.focus();
  }, [isOpen]);

  // Close on Escape; trap focus inside the drawer while open
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
        return;
      }

      if (e.key !== 'Tab' || !drawerRef.current) return;

      const focusable = Array.from(
        drawerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, close]);

  // Prevent body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const isActive = (href: string) =>
    href === '/'
      ? currentPath === '/'
      : currentPath === href || currentPath.startsWith(`${href}/`);

  return (
    <>
      {/* Hamburger trigger — visible on mobile only (visibility controlled by parent Header) */}
      <button
        ref={triggerRef}
        type="button"
        onClick={open}
        aria-expanded={isOpen}
        aria-controls="mobile-nav-drawer"
        aria-label="Open navigation menu"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.5rem',
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={close}
          aria-hidden="true"
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 'var(--z-overlay)' as never,
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
        />
      )}

      {/* Drawer */}
      <div
        ref={drawerRef}
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        hidden={!isOpen}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 'var(--z-drawer)' as never,
          width: 'min(80vw, 320px)',
          backgroundColor: 'var(--color-surface)',
          borderLeft: '1px solid var(--color-border)',
          display: isOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '1.5rem',
          gap: '0.5rem',
          overflowY: 'auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginBottom: '1rem',
          }}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close navigation menu"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.5rem',
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav aria-label="Mobile navigation">
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-base)',
                    textDecoration: 'none',
                    color: isActive(link.href)
                      ? 'var(--color-accent)'
                      : 'var(--color-text-primary)',
                    backgroundColor: isActive(link.href)
                      ? 'var(--color-accent-subtle)'
                      : 'transparent',
                    fontWeight: isActive(link.href) ? 600 : 400,
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {ctaLabel && ctaHref && (
          <a
            href={ctaHref}
            onClick={close}
            style={{
              display: 'block',
              marginTop: '1rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-base)',
              backgroundColor: 'var(--color-accent)',
              color: 'var(--color-bg)',
              fontWeight: 600,
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            {ctaLabel}
          </a>
        )}
      </div>
    </>
  );
}
