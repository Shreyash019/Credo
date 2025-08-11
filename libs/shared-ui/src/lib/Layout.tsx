import { ReactNode } from "react";

type GridLayoutProps = {
  children: ReactNode;
  cardWidth: string;
  gap: string;
};

export const GridLayout = ({
  children,
  cardWidth = '250px',
  gap = '20px',
}: GridLayoutProps) => {
  const responsiveMinCardWidth = `min(100%, ${cardWidth})`;
  return (
    <div
      className="grid mx-auto"
      style={{
        maxWidth: '100%',
        gridTemplateColumns: `repeat(auto-fit, minmax(${responsiveMinCardWidth}, 1fr))`,
        gap: gap,
      }}
    >
      {children}
    </div>
  );
};