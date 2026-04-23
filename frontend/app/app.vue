<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>

	<!-- <DevOnly>
		<ClientOnly>
			<VitePluginChecker />
		</ClientOnly>
	</DevOnly> -->
</template>

<script setup lang="ts">
import { FetchError } from 'ofetch';
import { useLocaleHead } from '#i18n';

const route = useRoute();
const { locale, t } = useI18n();
const configPublic = useRuntimeConfig().public;
const i18nHead = useLocaleHead();

const routeBaseName = useRouteBaseName();
const routeName = computed(() => String(routeBaseName(route)));

useHead({
	htmlAttrs: {
		lang: computed(() => locale.value),
	},
	title: computed(() => t(`meta.${ routeName.value }.title`)),
	meta: computed(() => [
		...i18nHead.value.meta || [],
		{ name: 'description', content: t(`meta.${ routeName.value }.description`) },
		{ name: 'keywords', content: t(`meta.${ routeName.value }.keywords`) },
		{ property: 'og:title', content: t(`meta.${ routeName.value }.title`) },
		{ property: 'og:description', content: t(`meta.${ routeName.value }.description`) },
		{ property: 'og:image', content: `${ configPublic.domainUrl }/og-hp-tarvit.jpg` },
	]),
	link: computed(() => [
		...i18nHead.value.link ?? [],
	]),
});

onErrorCaptured((error) => (!(error instanceof FetchError && error.statusCode === 401)));
</script>
