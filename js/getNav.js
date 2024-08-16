export const getNav = () => {
	const slides = document.querySelectorAll(".slide");

	const nav = document.querySelector(".slide-list");
	slides.forEach((__, i) => {
		nav.insertAdjacentHTML(
			"beforeend",
			`<li>
				<a href="#slide-${i + 1}">
					<span class="sr-only">slide ${i + 1}</span>
				</a>
			</li>`
		);
	});

	const navLinks = document.querySelectorAll(".slide-list > *");
	const navLinksAndSlideNumberAnimation = e => {
		const num = e.currentTarget.querySelector(".slide-number");
		if (num) num.style.top = `${num.getBoundingClientRect().height / -4}px`;
		const activeLink = document.querySelector(".slide-list > *.active");
		activeLink && activeLink.classList.remove("active");
		slides.forEach((slide, i) => {
			slide === e.currentTarget &&
				navLinks[i].querySelector("a").click() &
					navLinks[i].classList.add("active");
		});
	};
	slides.forEach(slide =>
		slide.addEventListener("mouseenter", navLinksAndSlideNumberAnimation)
	);
	navLinks.forEach(link =>
		link.addEventListener("click", navLinksAndSlideNumberAnimation)
	);
};
