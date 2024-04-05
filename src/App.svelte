<script lang="ts">
import Logo from './Logo.svelte';
import Card from './Card.svelte';
import Stars from './Stars.svelte';
import Flag from './assets/flag.jpg';
import { writable, type Writable } from 'svelte/store';
//bg-gradient-to-t from-sky-500 from-30% to-transparent

const text = [
	`Young voters are attracted to the concept of universal healthcare due to its multifaceted benefits. Offering a safety net regardless of financial status or employment, it provides a sense of security for individuals navigating uncertain career paths. Moreover, universal healthcare embodies principles of fairness and equality, ensuring that healthcare access isn't determined by income or background. This promotes preventative care and early intervention, improving overall health outcomes. Importantly, it resonates with the values of social justice and collective responsibility, fostering a sense of community support among younger generations striving for a fairer, more compassionate society.`,
	`Young voters are likely to support rent control policies due to the pressing issue of housing affordability. With rental costs often outpacing wage growth, many young people struggle to find affordable housing, impacting their financial stability and quality of life. Rent control offers a tangible solution by placing limits on rent increases, providing tenants with greater predictability and security in their housing expenses. By stabilizing rents, this policy can make housing more accessible and enable young individuals to pursue education, career opportunities, and personal goals without the burden of exorbitant housing costs. Therefore, young voters see rent control as a crucial step towards creating a fairer and more inclusive housing market.`,
	`Young voters are highly likely to support policies aimed at student debt relief due to the significant financial burden many of them face after pursuing higher education. Saddled with substantial student loan debt, young individuals often find themselves constrained in their financial decisions, from delaying major life milestones such as buying a home or starting a family to limiting career choices. Student debt relief not only eases the financial strain on individuals but also promotes economic mobility and fosters a more equitable society. By alleviating the burden of student loans, this policy empowers young voters to invest in their futures, pursue entrepreneurial endeavors, and contribute more fully to the economy, ultimately leading to broader societal benefits. Thus, young voters view student debt relief as an essential measure to address the systemic challenges associated with higher education financing.`,
	`Young voters may find the idea of strict gun control policies appealing due to concerns about public safety and the prevalence of gun violence. With mass shootings and firearm-related incidents continuing to occur, particularly in schools and public spaces, many young individuals feel a pressing need for measures to limit access to firearms. Strict gun control laws, such as universal background checks, bans on assault weapons, and limitations on high-capacity magazines, are seen as effective ways to reduce gun violence and prevent tragedies. By advocating for such policies, young voters aim to create safer communities where individuals can live without fear of gun violence, promoting a sense of security and well-being for themselves and future generations.`,
	`Young voters may support lowering the drinking age to 18 as it aligns with principles of fairness and autonomy. At 18, individuals are considered adults and gain various rights and responsibilities, such as voting and serving in the military. Lowering the drinking age would grant young adults the freedom to make their own choices about alcohol consumption, rather than facing inconsistency in legal adulthood rights. Moreover, proponents argue that it could promote responsible drinking habits by allowing legal access to alcohol in regulated environments, such as bars and restaurants, where supervision and education about alcohol consumption are more readily available. Additionally, lowering the drinking age could reduce unsafe drinking behaviors associated with underage drinking, as young adults would no longer need to resort to clandestine and potentially hazardous drinking settings. Overall, young voters may support lowering the drinking age to 18 as a matter of personal freedom, consistency in legal adulthood, and promoting responsible alcohol consumption.`,
	`Legalizing gambling for all ages is a proposal that may resonate with some young voters due to principles of personal freedom and autonomy. Advocates argue that adults should have the right to make their own choices regarding gambling activities, much like they do with other adult activities such as voting and consuming alcohol. Legalizing gambling for all ages could also be seen as a way to remove the stigma associated with gambling and promote responsible gaming practices through education and regulation. However, opponents raise concerns about the potential negative consequences, particularly for young people who may be more vulnerable to developing gambling addictions or experiencing financial harm. Additionally, legalizing gambling for all ages may undermine efforts to protect vulnerable populations, such as minors and individuals with gambling problems. Therefore, while some young voters may support the idea of deregulating gambling as a matter of personal freedom, there are significant considerations regarding potential social and individual harms that must be carefully weighed.`,
];

const titles = [
	'Universal Healthcare',
	'Rent Control / Landlord Public Executions',
	'Student Debt Relief',
	'Strict Gun Control',
	'Lower Drinking Age to 18',
	'Deregulate / Legalize Gambling for All Ages',
];

let show_modal = writable(false);
let show_title: Writable<string> = writable(titles[0]);
let show_text: Writable<string> = writable(text[0]);

const show = (index: number) => () => {
	show_modal.set(true);
	show_title.set(titles[index]);
	show_text.set(text[index]);
};
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<div class="block w-screen h-[98vh] bg-cover bg-no-repeat bg-center bg-transparent z-50">
	<Stars />
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<main
		class="grid grid-rows-[5%_25%_30%_40%] w-full h-full"
		style:background-image={`linear-gradient(to bottom, #000000, #00000055), url(${Flag})`}>
		<header class="z-50 flex items-center justify-between w-full px-3 bg-white">
			<span class="font-bold">THE NATIONAL <span class="text-yellow-400">GOOSE</span> COMMITTEE</span>
			<button
				class="px-4 py-1 font-serif text-yellow-400 rounded-lg w-fit h-fit bg-slate-600 hover:bg-slate-500 active:translate-y-1"
				>DONATE</button>
		</header>
		<div class="flex items-center justify-center w-full text-white">
			<h1 class="w-2/3 font-serif text-6xl text-center text-yellow-400" style:text-shadow="0 0 20px black">
				Greatest Of All Time
			</h1>
		</div>
		<div class="grid w-full grid-cols-3 p-2">
			<div class="flex"></div>
			<div class="flex items-start justify-center grow">
				<p class="w-2/3 font-sans text-xl leading-loose text-center text-white">No one is better than us.</p>
			</div>
			<div class="flex"></div>
		</div>
		<div class="grid w-full h-full grid-cols-3">
			<div class="h-full p-10">
				<div class="flex flex-col gap-2">
					<Card click={show(0)}>{titles[0]}</Card>
					<Card click={show(1)}>{titles[1]}</Card>
					<Card click={show(2)}>{titles[2]}</Card>
				</div>
			</div>
			<Logo class="fill-[url(#gradient)] h-2/3 mx-auto" />
			<div class="h-full p-10">
				<div class="flex flex-col gap-2">
					<Card click={show(3)}>{titles[3]}</Card>
					<Card click={show(4)}>{titles[4]}</Card>
					<Card click={show(5)}>{titles[5]}</Card>
				</div>
			</div>
		</div>
	</main>
</div>

{#if $show_modal}
	<div
		class="flex flex-col absolute z-20 w-1/2 h-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000cc] rounded-md left-1/2 top-1/2 text-white">
		<button class="w-4 h-4 ml-auto mr-1 text-white top-2 right-2" on:click={() => ($show_modal = false)}>X</button>
		<h3 class="w-full text-2xl font-bold text-center text-yellow-400">{$show_title}</h3>
		<p class="m-6 text-sm" >{$show_text}</p>
	</div>
{/if}

<footer class="fixed flex w-screen h-[2vh] bg-yellow-400 bottom-0 justify-center items-center">
	<span class="font-serif text-xs font-bold text-black">be sure to donate today!</span>
</footer>
