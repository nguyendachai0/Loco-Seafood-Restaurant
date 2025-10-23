import { useLocale } from 'next-intl';

/**
 * Hook to get locale-prefixed paths
 * Usage: const getPath = useLocalePath(); getPath('/menu') => '/en/menu'
 */
export function useLocalePath() {
  const locale = useLocale();
  
  return (path: string) => {
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `/${locale}${cleanPath ? `/${cleanPath}` : ''}`;
  };
}