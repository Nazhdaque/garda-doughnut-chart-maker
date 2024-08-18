import { html } from "lit-html";

export const slide = () => html`
	<article class="slide layout-center z-up xl-bg-img-none">
		<div class="slide-number"></div>

		<div class="slide__top-group">
			<div class="slide-ttl z-up width-x">
				<h1 class="fs-2xl fw-eb">
					Lorem ipsum <span class="txt-gradient">dolor sit</span>
				</h1>
				<p class="fs-lg txt-gradient">
					Officia laudantium eos iusto, velit cupiditate esse ipsa placeat eum
					tempora amet error dolores rerum illo saepe
				</p>
			</div>
			<a
				href="https://garda.ai/"
				class="brand-logo sm-d-none"
				aria-label="home">
				<img src="./images/logo-b.svg" alt="brand-logo" />
			</a>
		</div>
	</article>
`;

export const chartSection = (title, legends, index) => html`
	<section class="chart width-x xl-gaf-row">
		<figure class="chart-box">
			<canvas></canvas>
		</figure>

		<div class="${index % 2 ? "order-down xl-order-0" : null}">
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
