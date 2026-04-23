import type { RouterConfig } from '@nuxt/schema';

const findEl = (selector: string, wait = 0): Promise<Element | null> =>
	new Promise((resolve) => {
		if (document.querySelector(selector)) {
			resolve(document.querySelector(selector));
			return;
		}

		const observer = new MutationObserver(() => {
			if (document.querySelector(selector)) {
				clearTimeout(timeout);
				observer.disconnect();
				resolve(document.querySelector(selector));
			}
		});

		const timeout = setTimeout(() => {
			observer.disconnect();
			resolve(null);
		}, wait);

		observer.observe(document.body, { childList: true, subtree: true });
	});

export default {
	scrollBehavior: async (to, from, savedPosition) => {
		// 1) keep current scroll position on HMR / same-route update without hash change
		if (to.path === from.path && to.hash === from.hash && !savedPosition) {
			return false;
		}

		// 2) restore position on browser back/forward
		if (savedPosition) {
			return savedPosition;
		}

		// 3) handle anchor links with offset (adjust top according to fixed header height if needed)
		if (to.hash) {
			const el = await findEl(to.hash, 5000);
			if (el) {
				return { el, behavior: 'smooth', top: 0 };
			}
			// fallback if target element does not exist
			return { left: 0, top: 0 };
		}

		// 4) default behavior: scroll to top on regular navigation
		return { left: 0, top: 0 };
	},
} as RouterConfig;
