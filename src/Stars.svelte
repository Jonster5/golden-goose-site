<script lang="ts">
import Particles from 'svelte-particles';
import { loadSlim } from 'tsparticles-slim';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadStarsPreset } from 'tsparticles-preset-stars';

const particlesConfig = {
	background: {
		opacity: 0,
	},
	particles: {
		color: {
			value: '#FFD700',
		},
		number: {
			value: 100,
		},
	},
	fullScreen: false,
	preset: 'stars',
} satisfies ISourceOptions;

let particlesInit = async (engine: Engine) => {
	await loadSlim(engine);
	await loadStarsPreset(engine);
};
</script>

<Particles class="absolute z-10 w-screen h-1/3" options={particlesConfig} {particlesInit} />
