import { ReactNode } from 'react';

/**
 * Feed Layout with Parallel Route Slot
 * Handles the @modal slot for intercepting routes
 */
export default function FeedLayout({
  children,
  modal,
}: {
  children: ReactNode;
  modal: ReactNode;
}) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}

