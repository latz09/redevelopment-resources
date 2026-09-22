'use client';
import { usePathname } from 'next/navigation';
import { DARK_NAV_ROUTES } from '@/data/config/navigation';

export function useIsDarkRoute() {
	const pathname = usePathname();
	return DARK_NAV_ROUTES.includes(pathname);
}