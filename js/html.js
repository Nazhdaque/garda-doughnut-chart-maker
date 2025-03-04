import { html } from "lit-html";

export const slide = () => html`
	<article class="slide layout-center z-up xl-bg-img-none">
		<!-- <div class="slide-number"></div> -->

		<div class="slide__top-group">
			<div class="slide-ttl z-up width-x">
				<h1 class="fs-xl fw-eb">
					<!-- Во сколько вы оцениваете <span class="txt-gradient">потери</span>,
					связанные с утечкой своих персональных данных? -->
					<!-- Как изменится ваше <span class="txt-gradient">отношение</span> к
					компании, допустившей утечку ваших персональных данных? -->
					<!-- С какими <span class="txt-gradient">последствиями</span> утечки
					персональных данных вы сталкивались? -->
				</h1>
				<!-- <p class="fs-lg">
					<span class="txt-gradient"
						>Отношение россиян к утечкам персональных данных</span
					><br />
					Исследование группы компаний «Гарда»
				</p> -->
			</div>
			<button class="brand-logo sm-d-none toggle" aria-label="toggle theme">
				<img src="./images/logo-b.svg" alt="brand-logo" />
			</button>
		</div>
	</article>
`;

export const chartSection = (title, legends, index) => html`
	<section class="chart width-x xl-gaf-row">
		<figure class="chart-box">
			<canvas></canvas>
		</figure>

		<div class="${index % 2 ? null : "order-down xl-order-0"}">
			<h2 class="fs-xl fw-eb txt-gradient chart-title">${title}</h2>
			<ul class="chart-legend">
				${legends}
			</ul>
		</div>
	</section>
`;

export const li = (palette, value, legend, border, icons, i) => html`<li
	data-value=${value ? value : 0}
	data-color=${palette[i]}
	data-border=${border}
	data-icon=${icons ? `./images/icons/${icons[i]}` : ``}>
	${legend}
</li>`;
