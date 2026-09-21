// app/hooks/getIsDarkRoute.js
import { headers } from 'next/headers';
import { DARK_NAV_ROUTES } from '@/data/config/navigation';

export async function getIsDarkRoute() {
	const pathname = (await headers()).get('x-pathname') || '';
	return DARK_NAV_ROUTES.includes(pathname);
}