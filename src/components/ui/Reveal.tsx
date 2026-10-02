import { useEffect, useRef, useState, type ReactNode } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ $visible: boolean; $delay: number }>`
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? '0' : '14px')});
  transition:
    opacity ${({ theme }) => theme.motion.reveal} ${({ theme }) => theme.motion.easing},
    transform ${({ theme }) => theme.motion.reveal} ${({ theme }) => theme.motion.easing};
  transition-delay: ${({ $delay }) => $delay}ms;

  ${({ theme }) => theme.media.reducedMotion} {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} $visible={visible} $delay={delay} className={className}>
      {children}
    </Wrapper>
  );
}
