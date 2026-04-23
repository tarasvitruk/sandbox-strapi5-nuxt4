<template>
	<div class="flex h-full items-center justify-center">
		<div class="flex flex-col text-center">
			<div class="my-auto">
				<h1
					v-if="error.statusCode"
					class="text-5xl font-bold"
				>
					{{ error.statusCode }}
				</h1>
				<p class="mt-5 text-lg">
					{{ error.statusMessage }}
				</p>
				<button
					type="button"
					class="mt-10 underline hover:no-underline"
					@click="handleError"
				>
					Homepage
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

type Props = {
	error: NuxtError;
};

const props = defineProps<Props>();

const errorTitle = computed(() => `Error: ${ props.error.statusMessage }`);

useHead({
	title: errorTitle.value,
});

const handleError = () => clearError({ redirect: '/' });
</script>
