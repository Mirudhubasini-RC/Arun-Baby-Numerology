import { useState } from 'react';
import styled from 'styled-components';
import { UserRound } from 'lucide-react';

const Frame = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: ${({ theme }) => theme.radii.lg};
  overflow: hidden;
  background: ${({ theme }) => theme.colors.sky};
  border: 1px solid ${({ theme }) => theme.colors.skyBorder};
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
`;

const Placeholder = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: ${({ theme }) => theme.colors.skyInk};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  opacity: 0.75;
`;

export const PROFILE_PHOTO_SRC = '/images/profile.jpg';

export function ProfilePhoto({ alt }: { alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <Frame>
      {failed ? (
        <Placeholder role="img" aria-label={alt}>
          <UserRound size={72} strokeWidth={1.1} />
        </Placeholder>
      ) : (
        <Img src={PROFILE_PHOTO_SRC} alt={alt} onError={() => setFailed(true)} />
      )}
    </Frame>
  );
}
