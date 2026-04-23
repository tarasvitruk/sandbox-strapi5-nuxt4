<template>
	<footer class="bg-[#1f2126] py-8 text-white lg:py-10">
		<Container>
			<div class="flex w-full flex-col items-center lg:flex-row">
				<div class="mb-8 flex w-full flex-col lg:mb-0 lg:w-1/2">
					<h2 class="mb-2 text-xl font-bold text-greenNew">
						{{ $t('Contact me') }}
					</h2>
				</div>

				<div class="flex w-full flex-col items-start lg:w-1/2 lg:items-end">
					<p>
						&#9400;&nbsp;2018&nbsp;-&nbsp;{{ new Date().getFullYear() }}&nbsp;{{ $t('Taras Vitruk') }}. {{ $t('All rights reserved') }}
					</p>
					<p>
						{{ $t('Design and development - Taras Vitruk') }}
					</p>
				<!-- <p>
					&#9400;&nbsp;2018&nbsp;Taras&nbsp;Vitruk. Designed & Developed by Taras&nbsp;Vitruk.
				</p> -->
				</div>
			</div>
		</Container>
	</footer>
</template>
