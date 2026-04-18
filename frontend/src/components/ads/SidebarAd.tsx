'use client';

import AdBanner from './AdBanner';

interface SidebarAdProps {
  dataAdSlot: string;
  className?: string;
}

export default function SidebarAd({ dataAdSlot, className = '' }: SidebarAdProps) {
  return (
    <div className={`sticky top-4 ${className}`}>
      <p className="text-xs text-center text-muted-foreground mb-2">Advertisement</p>
      <AdBanner
        dataAdSlot={dataAdSlot}
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        className="min-h-[600px]"
      />
    </div>
  );
}
