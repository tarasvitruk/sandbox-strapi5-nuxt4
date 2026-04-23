export { };

declare global {
	type Locale = 'en' | 'uk' | 'cs';
}

export type ConsentState = {
	userConsent: boolean;
	necessary: boolean;
	analytics: boolean;
	// ads: boolean;
	// functional: boolean;
};
