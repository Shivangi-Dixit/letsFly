import { useState, useEffect } from 'react';

export const useAutoCurrency = () => {
  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'AED' | 'INR' | 'GBP'>('USD');

  useEffect(() => {
    const detectCurrencyByTimezone = (): 'USD' | 'EUR' | 'AED' | 'INR' | 'GBP' => {
      const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      const currencyMap: Record<string, string> = {
        // UAE/Gulf
        'Asia/Dubai': 'AED',
        'Asia/Muscat': 'AED',
        'Asia/Riyadh': 'SAR',
        
        // India
        'Asia/Kolkata': 'INR',
        
        // Europe
        'Europe/London': 'GBP',
        'Europe/Paris': 'EUR',
        'Europe/Berlin': 'EUR',
        
        // US
        'America/New_York': 'USD',
        'America/Los_Angeles': 'USD',
        
        // Default
        'default': 'USD'
      };
      
      return (currencyMap as any)[userTimezone] || currencyMap['default'];
    };
    
    setCurrency(detectCurrencyByTimezone() as any);
  }, []);

  return currency;
};
