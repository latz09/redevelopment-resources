// hooks/useIsDarkRoute.js
'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { DARK_NAV_ROUTES } from '@/data/config/navigation';

export function useIsDarkRoute() {
	const pathname = usePathname();
	const [resolvedPath, setResolvedPath] = useState(pathname);
	const isFirstRun = useRef(true);

	useEffect(() => {
		if (isFirstRun.current) {
			// First mount: trust the real browser URL over whatever
			// usePathname() resolved during hydration.
			isFirstRun.current = false;
			setResolvedPath(window.location.pathname);
			return;
		}
		// Any later change to pathname is a real client-side navigation —
		// usePathname() is reliable at that point, so just follow it.
		setResolvedPath(pathname);
	}, [pathname]);

	return DARK_NAV_ROUTES.includes(resolvedPath);
}