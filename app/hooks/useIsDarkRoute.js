'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DARK_NAV_ROUTES } from '@/data/config/navigation';

// usePathname() can briefly disagree with the real browser URL on a hard/
// first production load — e.g. if a middleware rewrite or edge cache serves
// an internally-resolved path instead of the literal address-bar URL.
// window.location.pathname is always the literal URL, so we resync to it
// once mounted on the client, then let normal client-side navigation keep
// usePathname() driving things after that.
export function useIsDarkRoute() {
	const pathname = usePathname();
	const [resolvedPath, setResolvedPath] = useState(pathname);

	useEffect(() => {
		setResolvedPath(window.location.pathname);
	}, []);

	useEffect(() => {
		setResolvedPath(pathname);
	}, [pathname]);

	return DARK_NAV_ROUTES.includes(resolvedPath);
}