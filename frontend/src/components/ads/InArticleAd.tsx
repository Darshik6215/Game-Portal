'use client';

import AdBanner from './AdBanner';

interface InArticleAdProps {
  dataAdSlot: string;
  className?: string;
}

export default function InArticleAd({ dataAdSlot, className = '' }: InArticleAdProps) {
  return (
    <div className={`my-8 ${className}`}>
      <p className="text-xs text-center text-muted-foreground mb-2">Advertisement</p>
      <AdBanner
        dataAdSlot={dataAdSlot}
        dataAdFormat="fluid"
        dataFullWidthResponsive={true}
        className="min-h-[250px]"
      />
    </div>
  );
}
