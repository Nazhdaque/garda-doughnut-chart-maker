import { html } from "lit-html";

export const slide = () => html`
	<article class="slide layout-center z-up xl-bg-img-none">
		<div class="slide-number"></div>

		<div class="slide__top-group">
			<!-- <div class="slide-ttl z-up width-x">
				<h1 class="fs-xl fw-eb">Гарда DBF 5.3: новый релиз — новые фичи!</h1>
				<p class="fs-xl txt-gradient">Результаты опроса</p>
			</div> -->
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

		<!-- <div class="${index % 2 ? null : "order-down xl-order-0"}"> -->
		<div class="order-up">
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
