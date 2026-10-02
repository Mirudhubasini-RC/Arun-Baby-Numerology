import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../context/useLanguage';
import { contact } from '../../content/contact';
import { Container } from '../ui/Layout';
import { Button } from '../ui/Button';
import { Brand } from './Brand';
import { TopBar } from './TopBar';

const Bar = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${({ theme }) => theme.colors.white};
  border-bottom: 1px solid ${({ theme, $scrolled }) => ($scrolled ? theme.colors.border : 'transparent')};
  transition: border-color ${({ theme }) => theme.motion.base} ease, box-shadow ${({ theme }) => theme.motion.base} ease;

  ${({ $scrolled, theme }) =>
    $scrolled &&
    css`
      box-shadow: ${theme.shadows.sm};
    `}
`;

const Inner = styled(Container)`
  height: ${({ theme }) => theme.layout.headerHeight};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.xl};

  ${({ theme }) => theme.media.mobile} {
    height: ${({ theme }) => theme.layout.headerHeightMobile};
    gap: 12px;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => (theme.lang === 'ta' ? '18px' : '28px')};

  ${({ theme }) => theme.media.navCollapsed} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: ${({ theme }) => (theme.lang === 'ta' ? '14.5px' : '15px')};
  white-space: nowrap;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.textMuted};
  padding: 6px 0;
  position: relative;
  transition: color ${({ theme }) => theme.motion.fast} ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.media.navCollapsed} {
    gap: 12px;
  }
`;

const DesktopOnly = styled.div`
  display: contents;

  ${({ theme }) => theme.media.navCollapsed} {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radii.md};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};

  ${({ theme }) => theme.media.navCollapsed} {
    display: inline-flex;
  }
`;

const MobilePanel = styled.div<{ $open: boolean }>`
  display: none;

  ${({ theme }) => theme.media.navCollapsed} {
    display: block;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    box-shadow: ${({ theme }) => theme.shadows.md};
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transform: translateY(${({ $open }) => ($open ? '0' : '-6px')});
    transition: opacity ${({ theme }) => theme.motion.base} ease, transform ${({ theme }) => theme.motion.base} ease,
      visibility ${({ theme }) => theme.motion.base};
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 8px 0 24px;

  ${NavLink} {
    font-size: 16.5px;
    padding: 14px 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    color: ${({ theme }) => theme.colors.text};
  }

  ${Button} {
    margin-top: 20px;
  }
`;

const sections = ['about', 'service', 'process', 'fee', 'faq', 'contact'] as const;

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <Bar $scrolled={scrolled || open}>
      <TopBar />
      <Inner>
        <Brand />

        <Nav aria-label="Primary">
          {sections.map((id) => (
            <NavLink key={id} href={`#${id}`}>
              {t.nav[id]}
            </NavLink>
          ))}
        </Nav>

        <Actions>
          <DesktopOnly>
            <Button href={contact.whatsappLink} target="_blank" rel="noopener noreferrer" $size="sm">
              {t.nav.cta}
            </Button>
          </DesktopOnly>
          <MenuButton
            type="button"
            aria-label={open ? t.nav.close : t.nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={20} strokeWidth={1.75} /> : <Menu size={20} strokeWidth={1.75} />}
          </MenuButton>
        </Actions>
      </Inner>

      <MobilePanel id="mobile-menu" $open={open} aria-hidden={!open}>
        <Container>
          <MobileNav aria-label="Mobile">
            {sections.map((id) => (
              <NavLink key={id} href={`#${id}`} onClick={close} tabIndex={open ? 0 : -1}>
                {t.nav[id]}
              </NavLink>
            ))}
            <Button
              href={contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              $variant="whatsapp"
              $block
              tabIndex={open ? 0 : -1}
            >
              <FaWhatsapp size={18} />
              {t.nav.cta}
            </Button>
          </MobileNav>
        </Container>
      </MobilePanel>
    </Bar>
  );
}
