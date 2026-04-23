<template>
	<Container id="contact-info">
		<div class="flex flex-col py-10 text-white lg:py-20">
			<div class="mb-6 flex w-full flex-col lg:mb-12 lg:w-1/2">
				<div class="flex items-center gap-4">
					<h2 class="text-2xl font-bold lg:text-4xl">
						<span class="text-gradient">#{{ $t('contact-form') }}</span>
					</h2>

					<span class="mt-2 flex h-0.5 w-full flex-1 bg-gradient-to-r from-greenNew to-blueNew" />
				</div>
			</div>

			<div class="flex flex-col lg:flex-row">
				<div class="mb-8 flex w-full flex-col lg:mb-0 lg:w-1/2">
					<p class="mb-4 lg:mb-6 lg:pr-20 lg:text-2xl">
						{{ $t('Fill out the form, and I will respond to your inquiry as soon as possible. Whether you have a question about a project, collaboration, or just want to say hi — I’d love to hear from you.') }}
					</p>
				</div>

				<div class="relative flex w-full flex-col items-center lg:w-1/2 lg:items-end">
					<form
						class="flex w-full flex-wrap gap-6 transition-all duration-300"
						@submit.prevent="submit()"
					>
						<div class="relative w-full lg:basis-[calc(50%-0.75rem)]">
							<input
								id="name"
								v-model="formData.name"
								name="name"
								type="text"
								class="peer/name w-full border border-white bg-transparent p-2 transition-all duration-300"
								:class="{ '!border-red': errors.name }"
							>
							<label
								for="name"
								class="pointer-events-none absolute left-2 top-2 bg-dark px-1 transition-all duration-300 peer-focus/name:-top-3"
								:class="{
									'!text-red': errors.name,
									'!-top-3': formData.name !== '',
								}"
							>
								{{ $t('Name') }}*
							</label>
						</div>

						<div class="relative w-full lg:basis-[calc(50%-0.75rem)]">
							<input
								id="email"
								v-model="formData.email"
								name="email"
								type="text"
								class="peer/email w-full border border-white bg-transparent p-2 transition-all duration-300"
								:class="{ '!border-red': errors.email }"
							>
							<label
								for="email"
								class="pointer-events-none absolute left-2 top-2 bg-dark px-1 !transition-all !duration-300 peer-focus/email:-top-3"
								:class="{
									'!text-red': errors.email,
									'!-top-3': formData.email !== '',
								}"
							>
								{{ $t('E-mail') }}*
							</label>
						</div>

						<div class="relative w-full">
							<textarea
								id="message"
								v-model="formData.message"
								name="message"
								rows="4"
								class="peer/message w-full border border-white bg-transparent p-2 transition-all duration-300"
								:class="{ '!border-red': errors.message }"
							/>
							<label
								for="message"
								class="pointer-events-none absolute left-2 top-2 bg-dark px-1 !transition-all !duration-300 peer-focus/message:-top-3"
								:class="{
									'!text-red': errors.message,
									'!-top-3': formData.message !== '',
								}"
							>
								{{ $t('Message') }}*
							</label>
						</div>

						<div class="flex w-full items-center justify-end">
							<div
								class="w-full opacity-0 transition-all duration-300"
								:class="{ '!opacity-100': isFormSubmitted }"
							>
								{{ $t('Thanks for reaching out — I’ll respond as soon as possible.') }}
							</div>

							<button
								type="submit"
								class="group/cached flex gap-2 border border-white py-2 pl-3 pr-4 duration-300 ease-in-out hover:bg-dark hover:text-white dark:hover:bg-white dark:hover:text-dark"
								:disabled="loading"
							>
								<template v-if="loading">
									{{ $t('Sending') }}...
								</template>
								<template v-else>
									{{ $t('Send') }}
									<SvgoIconsIconArrowRight
										class="w-5 stroke-white duration-300 ease-in-out group-hover/cached:translate-x-1 group-hover/cached:stroke-dark"
										aria-hidden="true"
									/>
								</template>
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</Container>
</template>

<script setup lang="ts">
const loading = ref(false);
const isFormSubmitted = ref(false);

const { formData, handleSubmit, errors } = useFormContact();

const { apiContactForm } = useApiRepository();

const submit = () => handleSubmit(async (values) => {
	try {
		await withLoading(loading, () => apiContactForm.create({
			body: {
				data: {
					name: values.name,
					email: values.email,
					message: values.message,
				},
			},
		}));

		isFormSubmitted.value = true;

		setTimeout(() => {
			isFormSubmitted.value = false;
		}, 7000);

		formData.value = {
			name: '',
			email: '',
			message: '',
		};
	}
	catch (error) {
		console.error('❌ Error submitting form:', error);
	}
});
</script>
