'use client';

import { useEffect } from 'react';

interface AdBannerProps {
  dataAdSlot: string;
  dataAdFormat?: string;
  dataFullWidthResponsive?: boolean;
  className?: string;
}

export default function AdBanner({
  dataAdSlot,
  dataAdFormat = 'auto',
  dataFullWidthResponsive = true,
  className = '',
}: AdBannerProps) {
  const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID;

  useEffect(() => {
    if (adsenseId) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        console.error('AdSense error:', err);
      }
    }
  }, [adsenseId]);

  if (!adsenseId) {
    // Show placeholder when AdSense is not configured
    return (
      <div className={`bg-slate-100 dark:bg-slate-800 border-2 border-dashed rounded-lg flex items-center justify-center ${className}`}>
        <div className="text-center p-4">
          <p className="text-sm text-muted-foreground">Advertisement Space</p>
          <p className="text-xs text-muted-foreground mt-1">Configure AdSense to show ads</p>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={adsenseId}
        data-ad-slot={dataAdSlot}
        data-ad-format={dataAdFormat}
        data-full-width-responsive={dataFullWidthResponsive.toString()}
      />
    </div>
  );
}
