<template>
	<Container id="projects">
		<div class="flex flex-col py-10 text-white lg:py-20">
			<div class="mb-6 flex flex-row items-center gap-x-2 lg:mb-12 lg:gap-x-0">
				<div class="flex w-full flex-col lg:w-1/2">
					<div class="flex items-center gap-4">
						<h2 class="text-2xl font-bold lg:text-4xl">
							<span class="text-gradient">#{{ $t('projects') }}</span>
						</h2>

						<span class="mt-1 flex h-0.5 w-full flex-1 bg-gradient-to-r from-greenNew to-blueNew" />
					</div>
				</div>

				<div class="flex w-3/5 justify-end lg:w-1/2">
					<NuxtLinkLocale
						:to="{ name: 'projects' }"
						class="group/item flex gap-2 pr-1 text-right text-xs xs:text-base lg:gap-4 lg:text-xl"
					>
						{{ $t('View all') }}
						<SvgoIconsIconArrowRight
							class="w-5 stroke-white duration-300 ease-in-out group-hover/item:translate-x-1 lg:w-7"
							aria-hidden="true"
						/>
					</NuxtLinkLocale>
				</div>
			</div>

			<div
				v-if="projects"
				class="flex flex-col items-start gap-4 lg:flex-row"
			>
				<div
					v-for="project in projects.data"
					:key="project.id"
					class="w-full border border-white lg:w-1/3"
				>
					<div class="aspect-[16/9] overflow-hidden border-b border-white">
						<img
							:src="getImageUrl(project.imageMain.url)"
							:alt="project.title"
							class="size-full object-cover object-center"
						>
					</div>

					<div class="flex flex-wrap gap-2 border-b border-white p-3">
						<span
							v-for="(technology, index) in project.technologies"
							:key="technology + index"
						>
							{{ technology }}
							<span v-if="index < project.technologies.length - 1">/&nbsp;</span>
						</span>
					</div>

					<div class="p-3">
						<h3 class="mb-2 text-xl font-bold">
							{{ project.title }}
						</h3>

						<p class="mb-2">
							{{ project.description }}
						</p>

						<div class="flex gap-4">
							<NuxtLinkLocale
								:to="{
									name: 'projects-slug',
									params: { slug: project.slug },
								}"
								class="group/live flex gap-2 border border-greenNew py-1 pl-2 pr-3 duration-300 ease-in-out hover:bg-greenNew hover:text-dark"
							>
								{{ $t('Detail') }}
								<SvgoIconsIconArrowRight
									class="w-5 stroke-white duration-300 ease-in-out group-hover/live:translate-x-1 group-hover/live:stroke-dark"
									aria-hidden="true"
								/>
							</NuxtLinkLocale>

							<NuxtLink
								v-if="project.urlLive"
								:to="project.urlLive"
								target="_blank"
								class="group/live flex gap-2 border border-greenNew py-1 pl-2 pr-3 duration-300 ease-in-out hover:bg-greenNew hover:text-dark"
							>
								{{ $t('Live') }}
								<SvgoIconsIconArrowRight
									class="w-5 stroke-white duration-300 ease-in-out group-hover/live:translate-x-1 group-hover/live:stroke-dark"
									aria-hidden="true"
								/>
							</NuxtLink>

							<NuxtLink
								v-if="project.urlCached"
								:to="project.urlCached"
								target="_blank"
								class="group/cached flex gap-2 border border-white py-1 pl-2 pr-3 duration-300 ease-in-out hover:bg-white hover:text-dark"
							>
								{{ $t('Demo') }}
								<SvgoIconsIconArrowRight
									class="w-5 stroke-white duration-300 ease-in-out group-hover/cached:translate-x-1 group-hover/cached:stroke-dark"
									aria-hidden="true"
								/>
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
const { locale } = useI18n();
const { apiProjects } = useApiRepository();

const { data: projects } = useAsyncData(
	`projects-${ locale.value }`,
	() => apiProjects.getLatest({
		locale: locale.value,
	}),
	{
		watch: [ locale ],
	},
);

const config = useRuntimeConfig();

// Helper to get full image URL
const getImageUrl = (url: string) => {
	if (url.startsWith('http')) {
		return url;
	}
	const baseUrl = config.public.apiBaseUrl as string;
	const cleanBase = baseUrl?.replace(/\/api\/?$/, '');
	return `${ cleanBase }${ url }`;
};
</script>
