'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const currentPathname = pathname.split('/').slice(2).join('/');
    router.push(`/${newLocale}${currentPathname ? `/${currentPathname}` : ''}`);
  };

  return (
    // <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
    //   <button
    //     onClick={() => switchLocale('en')}
    //     className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
    //       locale === 'en'
    //         ? 'bg-white text-ocean shadow-sm'
    //         : 'text-white/80 hover:text-white hover:bg-white/10'
    //     }`}
    //     aria-label="Switch to English"
    //   >
    //     EN
    //   </button>
    //   <button
    //     onClick={() => switchLocale('vi')}
    //     className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
    //       locale === 'vi'
    //         ? 'bg-white text-ocean shadow-sm'
    //         : 'text-white/80 hover:text-white hover:bg-white/10'
    //     }`}
    //     aria-label="Chuyển sang tiếng Việt"
    //   >
    //     VI
    //   </button>
    // </div>
    <div className="flex items-center gap-2 bg-white/10 rounded-lg p-1">
  <button
    onClick={() => switchLocale('en')}
    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
      locale === 'en'
        ? 'bg-white text-ocean shadow-sm'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`}
    aria-label="Switch to English"
  >
    EN
  </button>
  <button
    onClick={() => switchLocale('vi')}
    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
      locale === 'vi'
        ? 'bg-white text-ocean shadow-sm'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`}
    aria-label="Chuyển sang tiếng Việt"
  >
    VI
  </button>
  <button
    onClick={() => switchLocale('kr')}
    className={`px-3 py-1 rounded-md text-sm font-medium transition-all ${
      locale === 'kr'
        ? 'bg-white text-ocean shadow-sm'
        : 'text-white/80 hover:text-white hover:bg-white/10'
    }`}
    aria-label="한국어로 전환"
  >
    KR
  </button>
</div>

  );
}