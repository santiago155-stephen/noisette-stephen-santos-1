import './style.css'

// add classes for mobile navigation toggling
var CSbody = document.querySelector('body');
const CSnavbarMenu = document.querySelector('#cs-navigation');
const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');

CShamburgerMenu.addEventListener('click', function () {
	CShamburgerMenu.classList.toggle('cs-active');
	CSnavbarMenu.classList.toggle('cs-active');
	CSbody.classList.toggle('cs-open');
	// run the function to check the aria-expanded value
	ariaExpanded();
});

// checks the value of aria expanded on the cs-ul and changes it accordingly whether it is expanded or not
function ariaExpanded() {
	const csUL = document.querySelector('#cs-expanded');
	const csExpanded = csUL.getAttribute('aria-expanded');

	if (csExpanded === 'false') {
		csUL.setAttribute('aria-expanded', 'true');
	} else {
		csUL.setAttribute('aria-expanded', 'false');
	}
}

// mobile nav toggle code
const dropDowns = Array.from(document.querySelectorAll('#cs-navigation .cs-dropdown'));
for (const item of dropDowns) {
	const onClick = () => {
		item.classList.toggle('cs-active');
	};
	item.addEventListener('click', onClick);
}


const tagsData = {
	'croissants': {
		'name': 'croissants',
		viewedName: "Croissants",
		svgIcon: `<svg
									class="cs-mask"
									width="369"
									height="249"
									viewBox="0 0 369 249"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
								>
									<g clip-path="url(#clip0_3335_6487)">
										<path
											d="M369 249V105.57H364.72L360.02 177.28L350.1 221.22L338.48 233.69L294.54 231.71L227.65 231.14L159.67 232.48L102.92 238.23L43.73 243.79L31 238.99L24.33 229L8.32 177.28L5.69 111.52L0 110.67V249H369Z"
											fill="var(--maskBG)"
										/>
										<path
											d="M0 0H369V114.64L364.64 113.67L364.72 77.5L356.91 50.01L348.69 27.11L329.08 10.47L296.81 4.93L28.9 9.69L21.28 14.57L15.61 25.63L4 124.51H0V0Z"
											fill="var(--maskBG)"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M366 4H4V245H366V4ZM31 239C-4.86 193.71 3.34 85.57 14 31C17.78 11.59 25.37 8.61 42 8C107.73 5.59 193.2 4.66 300 5C325.79 5.1 347.16 14.21 356 43C370.28 89.64 364.08 137.32 358.09 183.32L358 184C356.03 199.42 352.41 212.38 347 224C343.96 230.49 339.5 233.58 333 233C234.49 224.39 139.41 232.28 42 244C39.88 244.27 37.99 243.86 36 243C34.01 242.14 32.41 240.79 31 239Z"
											fill="var(--maskBG)"
										/>
										<path
											d="M13.9996 30.9899C9.37956 54.6199 5.22956 88.2999 4.90956 122.57C4.49956 167.43 10.6696 213.31 30.9996 238.99C32.4096 240.78 34.0096 242.13 35.9996 242.99C37.9896 243.85 39.8796 244.26 41.9996 243.99C139.42 232.27 234.49 224.38 333 232.99C339.5 233.57 343.96 230.48 347 223.99C352.41 212.37 356.02 199.41 358 183.99C364.01 137.78 370.35 89.8599 356 42.9899C347.16 14.1999 325.79 5.08989 300 4.98989C193.2 4.64989 107.73 5.57989 41.9996 7.98989C25.3696 8.59989 17.7796 11.5799 13.9996 30.9899Z"
											stroke="var(--maskBorder)"
											stroke-width="8"
										/>
									</g>
									<defs>
										<clipPath id="clip0_3335_6487-1516-1540">
											<rect width="369" height="249" fill="var(--maskBG)" />
										</clipPath>
									</defs>
								</svg>`,


	},
	'tarts': {
		name: 'tarts',
		viewedName: "Tarts",
		svgIcon: `<svg
									class="cs-mask"
									width="369"
									height="249"
									viewBox="0 0 369 249"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									preserveAspectRatio="none"
								>
									<g clip-path="url(#clip0_3335_6487)">
										<path
											d="M369 249V105.57H364.72L360.02 177.28L350.1 221.22L338.48 233.69L294.54 231.71L227.65 231.14L159.67 232.48L102.92 238.23L43.73 243.79L31 238.99L24.33 229L8.32 177.28L5.69 111.52L0 110.67V249H369Z"
											fill="var(--maskBG)"
										/>
										<path
											d="M0 0H369V114.64L364.64 113.67L364.72 77.5L356.91 50.01L348.69 27.11L329.08 10.47L296.81 4.93L28.9 9.69L21.28 14.57L15.61 25.63L4 124.51H0V0Z"
											fill="var(--maskBG)"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M366 4H4V245H366V4ZM31 239C-4.86 193.71 3.34 85.57 14 31C17.78 11.59 25.37 8.61 42 8C107.73 5.59 193.2 4.66 300 5C325.79 5.1 347.16 14.21 356 43C370.28 89.64 364.08 137.32 358.09 183.32L358 184C356.03 199.42 352.41 212.38 347 224C343.96 230.49 339.5 233.58 333 233C234.49 224.39 139.41 232.28 42 244C39.88 244.27 37.99 243.86 36 243C34.01 242.14 32.41 240.79 31 239Z"
											fill="var(--maskBG)"
										/>
										<path
											d="M13.9996 30.9899C9.37956 54.6199 5.22956 88.2999 4.90956 122.57C4.49956 167.43 10.6696 213.31 30.9996 238.99C32.4096 240.78 34.0096 242.13 35.9996 242.99C37.9896 243.85 39.8796 244.26 41.9996 243.99C139.42 232.27 234.49 224.38 333 232.99C339.5 233.57 343.96 230.48 347 223.99C352.41 212.37 356.02 199.41 358 183.99C364.01 137.78 370.35 89.8599 356 42.9899C347.16 14.1999 325.79 5.08989 300 4.98989C193.2 4.64989 107.73 5.57989 41.9996 7.98989C25.3696 8.59989 17.7796 11.5799 13.9996 30.9899Z"
											stroke="var(--maskBorder)"
											stroke-width="8"
										/>
									</g>
									<defs>
										<clipPath id="clip0_3335_6487-1516-1540">
											<rect width="369" height="249" fill="var(--maskBG)" />
										</clipPath>
									</defs>
								</svg>`
	},
	'sourDoughCrispyLoaf': {
		name: 'sourDoughCrispyLoaf',
		viewedName: "Sourdough Crispy Loaf",
		svgIcon: `<svg
											class="cs-icon cs-icon-color"
											loading="lazy"
											decoding="async"
											alt="icon"
											aria-hidden="true"
											width="24px"
											height="24px"
											xmlns="http://www.w3.org/2000/svg"
											xmlns:xlink="http://www.w3.org/1999/xlink"
											viewBox="0 0 512 512"
											version="1.1"
											xml:space="preserve"
										>
											<g id="SVGRepo_bgCarrier" stroke-width="0"></g>
											<g
												id="SVGRepo_tracerCarrier"
												stroke-linecap="round"
												stroke-linejoin="round"
											></g>
											<g id="SVGRepo_iconCarrier">
												<g>
													<path
														class="st0"
														d="M482.01,226.209c-20.105-18.897-48.03-35.352-80.138-48.1c-7.233-2.873-7.326-2.633-7.326-2.633 c-3.052-1.1-6.458-0.472-8.921,1.65c-2.447,2.114-3.578,5.398-2.927,8.58c0,0,0.278-0.139,1.332,6.684 c3.376,21.584,2.866,36.855,2.85,44.313c-0.015,17.417-11.926,22.536-13.956,6.931c-4.212-29.924-25.416-77.69-25.416-77.69 c-1.038-3.199-3.78-5.546-7.11-6.079c0,0-12.855-5.182-37.466-7.024c-26.439-1.983-41.169-1.378-42.795,1.03 s-1.998,5.452-0.976,8.178c0,0,6.443,14.815,9.743,26.13c7.496,25.711,8.611,44.15,9.385,52.552 c1.596,17.339-13.025,21.15-16.324,7.938c-6.01-25.246-15.056-48.913-26.285-69.73c-5.173-9.595-13.692-21.847-13.692-21.847 c-1.905-3.036-5.421-4.646-8.968-4.112c0,0-23.016,2.718-37.111,5.614c-15.644,3.206-33.378,8.898-33.378,8.898 c-2.803,0.751-5.08,2.803-6.102,5.522c-1.022,2.726-0.666,5.769,0.96,8.178c0,0,10.501,13.979,16.557,24.642 c13.335,23.519,18.694,41.378,21.374,49.424c5.514,16.526-8.271,22.04-11.028,11.012c-11.554-23.108-27.104-43.794-43.616-61.319 c-7.465-7.93-18.137-17.401-18.137-17.401c-2.726-2.626-6.83-3.253-10.222-1.564c0,0-11.725,5.335-19.748,9.82 c-16.387,9.13-30.822,19.353-42.578,30.404C-17.59,270.925-9.66,360.348,61.711,360.348c71.371,0,194.289,0,194.289,0 s122.918,0,194.289,0C521.66,360.348,529.59,270.925,482.01,226.209z"
													></path>
												</g>
											</g>
										</svg>`
	}

}

const menuItems = [
	{
		"classic-baguette": {
			name: 'Classic Baguette',
			image: 'https://static.wixstatic.com/media/7ba22c_0e5912474c7147009210dbd2c2a36ada~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A classic French baguette with a crisp crust and a soft, tangy crumb, using traditional sourdough techniques',
			category: 'Sourdough French Baguette',
			price: '7.5',
			currency: '$',
			type: 'Bread'
		}
	},
	{
		"mini-baguette": {
			name: 'Mini Baguette',
			image: 'https://static.wixstatic.com/media/7ba22c_4828e2cfcbe84ab4981bdfe6b4b24ba1~mv2.png/v1/fill/w_640,h_360,fp_0.50_0.50,q_85,enc_auto/Placeholder.png',
			description: 'Crisp golden crust and a soft, airy interior.',
			category: 'Sourdough French Baguette',
			price: '3.8',
			currency: '$',
			type: 'Bread'
		}
	},
	{
		"classic-ciabatta": {
			name: 'Classic Ciabatta',
			image: 'https://static.wixstatic.com/media/7ba22c_1a618834758140f8b8ae9ef1d3872db5~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'Handcrafted using our signature sourdough starter, this Italian classic boasts a light, airy texture with a chewy crust.',
			category: 'Sourdough Ciabatta',
			price: '4.2',
			currency: '$',
			type: 'Bread'
		}
	},
	{
		"classic-loaf": {
			name: 'Classic Loaf',
			image: 'https://static.wixstatic.com/media/7ba22c_f66f055c1bcb4faa88c029675e6a83da~mv2.jpg/v1/fill/w_147,h_147,al_c,q_80,usm_0.66_1.00_0.01,blur_2,enc_auto/Placeholder.jpg',
			description: 'Artisanally crafted with our signature sourdough starter, with a crisp crust and a tender, tangy crumb.',
			category: 'Sourdough Crispy Loaf',
			price: '8.5',
			currency: '$',
			type: 'Bread'
		}
	},
	{
		"chicken-caesar-salad": {
			name: 'Chicken Caesar Salad',
			image: 'https://static.wixstatic.com/media/7ba22c_86b7aceacc2d44a5b50643470bd71252~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Lettuce, grilled tenders, parmesan, croutons, with caesar dressing.',
			category: 'Salads',
			price: '2.25',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"greek-salad": {
			name: 'Greek Salad',
			image: 'https://static.wixstatic.com/media/7ba22c_09dad9efcf3b4d9bbb6353e1417a4621~mv2.jpg/v1/fill/w_701,h_394,fp_0.50_0.50,q_80,enc_auto/Placeholder.jpg',
			description: 'Light feta cheese, lettuce, olives, cucumber, tomatoes, red onion with vingrette dressing.',
			category: 'Salads',
			price: '1.45',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"tuna-pasta-salad": {
			name: 'Tuna Pasta Salad',
			image: 'https://static.wixstatic.com/media/7ba22c_25aa33b69ea5401aa8571feab4269202~mv2.webp/v1/fill/w_845,h_475,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.webp',
			description: 'Tuna, Fusilli pasta, bell peppers, onions, tomatoes, sweet corn, dill, dried mint with mayonnaise dressing.',
			category: 'Salads',
			price: '2.15',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"pesto-pasta-salad": {
			name: 'Pesto Pasta Salad',
			image: 'https://static.wixstatic.com/media/7ba22c_3d8e4592466e40c88aefd0aacf8f2e00~mv2.jpg/v1/fill/w_710,h_399,fp_0.50_0.50,q_80,enc_auto/Placeholder.jpg',
			description: 'Shell pasta, cherry tomatoes, parmesan, with olive oil & pesto sauce.',
			category: 'Salads',
			price: '1.85',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"chickpeas-salad": {
			name: 'Chickpeas Salad',
			image: 'https://static.wixstatic.com/media/7ba22c_2f648c1adf7a41c1ad53256105eb4d05~mv2.png/v1/fill/w_677,h_380,fp_0.50_0.50,lg_1,q_85,enc_auto/Placeholder.png',
			description: 'Bell pepper, onions, tomatoes, crunchy cucumber, avocado, fresh parsley, mint & tossed with zesty lemon dressing.',
			category: 'Salads',
			price: '1.30',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"smoked-salmon": {
			name: 'Smoked Salmon',
			image: 'https://static.wixstatic.com/media/7ba22c_83107a58e8704dbbbe3e97df7a1f1372~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Smoked salmon, lettuce, sour cream, capers, pickled onion with drizzle of lemon juice.',
			category: 'Sandwiches',
			price: '2.90',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"tuna-sandwich": {
			name: 'Tuna Sandwich',
			image: 'https://static.wixstatic.com/media/7ba22c_7f0517a6a9b84c8fa0efd023447a37df~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Tuna, onion, bell peppers, sweet corn & mayonnaise.',
			category: 'Sandwiches',
			price: '2.30',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"grilled-cheese": {
			name: 'Grilled Cheese',
			image: 'https://static.wixstatic.com/media/7ba22c_f49e25bc3ee44717bc1ff951736206f7~mv2.jpg/v1/fill/w_720,h_405,fp_0.50_0.50,lg_1,q_80,enc_auto/Placeholder.jpg',
			description: 'Buttery toast, emmental, cheddar & gouda cheese.',
			category: 'Sandwiches',
			price: '1.85',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"roast-beef": {
			name: 'Roast Beef',
			image: 'https://static.wixstatic.com/media/7ba22c_ed537bcc400d4922a34dc2f2500f665f~mv2.jpg/v1/fill/w_770,h_433,fp_0.50_0.50,q_80,enc_auto/Placeholder.jpg',
			description: 'Roast beef, lettuce, tomatoes, pickled cucumber, cheddar cheese with dijonnaise sauce.',
			category: 'Sandwiches',
			price: '2.65',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"turkey-&-cheese": {
			name: 'Turkey & Cheese',
			image: 'https://static.wixstatic.com/media/7ba22c_a66651a3793644479129b4aeacd5da1b~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Turkey, cheddar cheese, lettuce, tomatoes, pickles with spicy mayonnaise sauce.',
			category: 'Sandwiches',
			price: '2.20',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"avocado-&-feta-cheese": {
			name: 'Avocado & Feta Cheese',
			image: 'https://static.wixstatic.com/media/7ba22c_a75256a8517b4cc0b7ca9a2f823bbdb0~mv2.png/v1/fill/w_588,h_331,fp_0.50_0.50,lg_1,q_85,enc_auto/Placeholder.png',
			description: 'Mashed avocado, light feta cheese, red chili, chopped cilantro with drizzle of lemon juice & olive oil.',
			category: 'Sandwiches',
			price: '1.70',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"grilled-chicken-pesto": {
			name: 'Grilled Chicken Pesto',
			image: 'https://static.wixstatic.com/media/7ba22c_dbb7bdf8814846ad9ba1efa7aec6c036~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Grilled chicken with sun-dried tomatoes, cheddar cheese & pesto sauce.',
			category: 'Sandwiches',
			price: '2.35',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"french-breakfast": {
			name: 'French Breakfast',
			image: 'https://static.wixstatic.com/media/7ba22c_a733bfa462654c5da03a866a70adfaa3~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Two eggs your way with two sausages, herbed baby potatoes & mushrooms, mixed leaf salad & toasted sourdough bread.',
			category: 'Egg Plates',
			price: '2.75',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"mushroom-spinach-omelette": {
			name: 'Mushroom Spinach Omelette',
			image: 'https://static.wixstatic.com/media/7ba22c_96597c91713747dcb185e8e5b2c2ab54~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'A fluffy omelette filled with sautéed mushrooms & fresh spinach with a mixed leaf side salad, drizzled with French dressing.',
			category: 'Egg Plates',
			price: '1.75',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"plain-croissant": {
			name: 'Plain Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_5f4e6a3601c5469db6bf0f7e0f85ff2a~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'A buttery, flaky pastry crafted to golden perfection, offering a delicate crunch and a soft, airy interior.',
			category: 'Croissant',
			price: '8.0',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"cheese-croissant": {
			name: 'Cheese Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_95876ccd54fc4f4eb9599b10cc17ed47~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A buttery, flaky pastry crafted to golden perfection, topped with cheese.',
			category: 'Croissant',
			price: '1.10',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"turkey-&-cheese-croissant": {
			name: 'Turkey & Cheese Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_2642788989ef434089f5cbe23bf805df~mv2.jpg/v1/fill/w_600,h_337,fp_0.50_0.50,lg_1,q_80,enc_auto/Placeholder.jpg',
			description: 'A flaky pastry filled with tender slices of turkey layered with cheddar cheese & lettuce.',
			category: 'Croissant',
			price: '1.70',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"za’atar-croissant": {
			name: 'Za’atar Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_e5197493f0464254b61463b57e47d418~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'A twist on a classic pastry, featuring the aromatic flavors of za\'atar spice, expertly kneaded with olive oil.',
			category: 'Croissant',
			price: '1.10',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"foccacia": {
			name: 'Foccacia',
			image: 'https://static.wixstatic.com/media/7ba22c_92c16730062a437f8da70523a8b5257a~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'A rustic Italian bread infused with fragrant olive oil and sprinkled with herbs, offering a perfect balance of chewy texture.',
			category: 'Savory',
			price: '9.5',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"almond-croissant": {
			name: 'Almond Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_3c26e50b7777462da453b9e2de3a5712~mv2.webp/v1/fill/w_845,h_475,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.webp',
			description: 'Blend of flaky pastry filled with creamy almond paste and topped with almond flakes.',
			category: 'Savory',
			price: '1.25',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"rocher-croissant": {
			name: 'Rocher Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_afcb2012db8b48f0b16d8f4e6824fa5c~mv2.jpeg/v1/fill/w_614,h_345,fp_0.50_0.50,q_80,enc_auto/Placeholder.jpeg',
			description: 'Blend of flaky pastry filled with creamy chocolate hazelnut and finished with chocolate hazelnut glaze.',
			category: 'Savory',
			price: '1.35',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"pain-au-chocolat": {
			name: 'Pain au Chocolat',
			image: 'https://static.wixstatic.com/media/7ba22c_4114295769cf44bf8dd6282b58ab5989~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'Buttery pastry filled with rich chocolate.',
			category: 'Savory',
			price: '1.10',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},

	{
		"pistachio-croissant": {
			name: 'Pistachio Croissant',
			image: 'https://static.wixstatic.com/media/7ba22c_846e1e21faf84707ae0bc344d0a916e5~mv2.jpeg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpeg',
			description: 'Blend of flaky pastry filled with creamy pistachio and finished with pistachio glaze.',
			category: 'Cruffins',
			price: '1.50',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},

	{
		"cinnamon-cruffin-roll": {
			name: 'Cinnamon Cruffin Roll',
			image: 'https://static.wixstatic.com/media/7ba22c_0068f82a458e482a971b5e96de1b411d~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A swirl of flaky croissant and muffin, infused with warm cinnamon spice.',
			category: 'Cruffins',
			price: '9.0',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},

	{
		"pistachio-cruffin-roll": {
			name: 'Pistachio Cruffin Roll',
			image: './public/pistachio-cruffin-roll.webp',
			description: 'A swirl of flaky croissant and muffin, pistachio cream and topped with a delightful pistachio glaze.',
			category: 'Cruffins',
			price: '1.20',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"blueberry-lemon-cruffin-roll": {
			name: 'Blueberry Lemon Cruffin Roll',
			image: 'https://static.wixstatic.com/media/7ba22c_ce1c751487bd4a76809814d57b4de7e9~mv2.jpeg/v1/fill/w_281,h_158,fp_0.50_0.50,lg_1,q_80,enc_auto/Placeholder.jpeg',
			description: 'A swirl of flaky croissant and muffin, bursting with tangy lemon zest and juicy blueberries.',
			category: 'Cruffins',
			price: '1.15',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"vanilla-biscotti": {
			name: 'Vanilla Biscotti',
			image: 'https://static.wixstatic.com/media/7ba22c_2903d08ff1954234a1df456f043e9fc0~mv2.png/v1/fill/w_490,h_275,fp_0.50_0.50,lg_1,q_85,enc_auto/Placeholder.png',
			description: 'Crisp, twice-baked Italian cookies infused with fragrant vanilla.',
			category: 'Cookies & Cupcakes',
			price: '2.0',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"almond-biscotti": {
			name: 'Almond Biscotti',
			image: 'https://static.wixstatic.com/media/7ba22c_4e3377caaa2840c6b41e8a99e199f1f7~mv2.png/v1/fill/w_60,h_60,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_auto/Placeholder.png',
			description: 'Crisp, twice-baked Italian cookies enriched with flakes of almonds.',
			category: 'Cookies & Cupcakes',
			price: '2.5',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"pistachio-biscotti": {
			name: 'Pistachio Biscotti',
			image: 'https://static.wixstatic.com/media/7ba22c_063562d731344cd1b7e18f3a8b4826e7~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Crisp, twice-baked Italian chocolate cookies enriched with flakes of pistachio.',
			category: 'Cookies & Cupcakes',
			price: '3.0',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"brown-butter-chocolate-cookies": {
			name: 'Brown Butter Chocolate Cookies',
			image: 'https://static.wixstatic.com/media/7ba22c_05063b723e8047489cbcb64b18fe6075~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'Buttery cookie is generously stuffed with rich, gooey chocolate.',
			category: 'Cookies & Cupcakes',
			price: '7.0',
			currency: '$',
			type: 'Breakfast & Brunch'
		}
	},
	{
		"chocolate-millefeuille": {
			name: 'Chocolate Millefeuille',
			image: 'https://static.wixstatic.com/media/7ba22c_b7ac410e182a47e8b9b0db7af95b88d4~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Layers of flaky, caramelized puff pastry filled with chocolate pastry cream.',
			category: 'Mille-Feuille',
			price: '1.35',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"original-diplomate-cream-millefeuille": {
			name: 'Original Diplomate Cream Millefeuille',
			image: 'https://static.wixstatic.com/media/7ba22c_d322edacb9b84e48a3d6d82672cd2358~mv2.png/v1/fill/w_49,h_29,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_auto/Placeholder.png',
			description: 'Layers of flaky, caramelized puff pastry filled with diplomat cream & topped with icing sugar.',
			category: 'Mille-Feuille',
			price: '1.25',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"cherry-millefeuille": {
			name: 'Cherry Millefeuille',
			image: 'https://static.wixstatic.com/media/7ba22c_a92cfaeb36c84fa3a32099544dce1d1a~mv2.jpg/v1/fill/w_742,h_417,fp_0.50_0.50,q_80,enc_auto/Placeholder.jpg',
			description: 'Layers of flaky, caramelized puff pastry filled with strawberry & diplomat cream.',
			category: 'Mille-Feuille',
			price: '1.35',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"caramel-millefeuille": {
			name: 'Caramel Millefeuille',
			image: 'https://static.wixstatic.com/media/7ba22c_a92cfaeb36c84fa3a32099544dce1d1a~mv2.jpg/v1/fill/w_742,h_417,fp_0.50_0.50,q_80,enc_auto/Placeholder.jpg',
			description: 'Layers of flaky, caramelized puff pastry filled with salted caramel & diplomat cream.',
			category: 'Mille-Feuille',
			price: '1.35',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"lemon-meringue-tart": {
			name: 'Lemon Meringue Tart',
			image: 'https://static.wixstatic.com/media/7ba22c_af1cfb2d810c4c318ffe91c70b33c3ce~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'Tangy lemon curd nestled in a buttery pastry crust, crowned with fluffy meringue peaks.',
			category: 'Tarts',
			price: '1.20',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"rocher-bar": {
			name: 'Rocher Bar',
			image: 'https://static.wixstatic.com/media/7ba22c_56b8407ca8ee484b9636226eae8ef4f3~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A delicious chocolate bar with rocher flavor.',
			category: 'Tarts',
			price: '1.25',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"pistachio-tart": {
			name: 'Pistachio Tart',
			image: 'https://static.wixstatic.com/media/7ba22c_a0bfb7f7494d41aab03e90dcf744a60b~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A tart filled with pistachio cream.',
			category: 'Tarts',
			price: '1.50',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"chocolate-éclair": {
			name: 'Chocolate Éclair',
			image: 'https://static.wixstatic.com/media/7ba22c_4e088ea5cdb14efbb7e4f8fc008db6c6~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Choux pastry filled with chocolate pastry cream.',
			category: 'Éclair',
			price: '8.5',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"traditional-paris-brest": {
			name: 'Traditional Paris Brest',
			image: 'https://static.wixstatic.com/media/7ba22c_48fb35c7675949fcbd38433f832760b4~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Choux pastry filled with praline creme mousseline, hazelnut praline paste topped with hazelnut crisp.',
			category: 'Éclair',
			price: '1.35',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"pistachio-paris-brest": {
			name: 'Pistachio Paris Brest',
			image: 'https://static.wixstatic.com/media/7ba22c_69849828f3da49c0b29ca3a513b82b32~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_auto/Placeholder.png',
			description: 'Choux pastry filled with praline creme mousseline & pistachio praline paste topped with almond crisp.',
			category: 'Éclair',
			price: '1.45',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"cheesecake": {
			name: 'Cheesecake',
			image: 'https://static.wixstatic.com/media/7ba22c_69cb740dfcb14f1daed84162f68e697f~mv2.png/v1/fill/w_49,h_49,al_c,q_85,usm_0.66_1.00_0.01,blur_2,enc_auto/Placeholder.png',
			description: 'Rich cheesecake on a buttery crust, personalized with your favorite topping.',
			category: 'Cheesecake',
			price: '1.30',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"basque-burnt-cheesecake": {
			name: 'Basque Burnt Cheesecake',
			image: 'https://static.wixstatic.com/media/7ba22c_4eceb5d9ccf941849b019df1b8326e2e~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A caramelized masterpiece with a rich and creamy center, encased in a burnt exterior.',
			category: 'Cheesecake',
			price: '1.50',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"pistachio-cheesecake": {
			name: 'Pistachio Cheesecake',
			image: 'https://static.wixstatic.com/media/7ba22c_edbc468cd0374162ab642d8fc0bc6711~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'Cheesecake with pistachio flavor.',
			category: 'Cheesecake',
			price: '1.55',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"tiramisu": {
			name: 'Tiramisu',
			image: 'https://static.wixstatic.com/media/7ba22c_3506e999b7384f17b05d22bfd42df614~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'A classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
			category: 'Around the World',
			price: '1.30',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"black-forest-mousse": {
			name: 'Black Forest Mousse',
			image: 'https://static.wixstatic.com/media/7ba22c_97941208feef437cbbf0ad44cc24d05b~mv2.png/v1/fill/w_608,h_342,fp_0.50_0.50,lg_1,q_85,enc_auto/Placeholder.png',
			description: 'A rich chocolate mousse with cherries and whipped cream.',
			category: 'Around the World',
			price: '1.25',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"seasonal-fruit-pavlova": {
			name: 'Seasonal Fruit Pavlova',
			image: 'https://static.wixstatic.com/media/7ba22c_87a2dd38d6f041499e2feab25c71b4a9~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A meringue-based dessert with a crisp crust and soft, light inside, usually topped with whipped cream and fresh fruit.',
			category: 'Around the World',
			price: '1.25',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"brownies": {
			name: 'Brownies',
			image: 'https://static.wixstatic.com/media/7ba22c_714c618067e2443b8099748f11bb5dea~mv2.jpg/v1/fill/w_554,h_312,fp_0.50_0.50,lg_1,q_80,enc_auto/Placeholder.jpg',
			description: 'Rich and fudgy chocolate brownies.',
			category: 'Around the World',
			price: '8.8',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"rainbow-cake": {
			name: 'Rainbow Cake',
			image: 'https://static.wixstatic.com/media/7ba22c_9ab5bbf7057f4c1fb9f72786d51d84b7~mv2.jpg/v1/fill/w_594,h_334,fp_0.50_0.50,lg_1,q_80,enc_auto/Placeholder.jpg',
			description: 'A colorful layered cake with vibrant colors.',
			category: 'Special Cakes',
			price: '13.00',
			currency: '$',
			type: 'Sweet'
		}
	},
	{
		"cappuccino": {
			name: 'Cappuccino',
			image: 'https://static.wixstatic.com/media/nsplsh_9c39cf7cfc0642b583f516f77dc90cf8~mv2.jpg/v1/fill/w_845,h_475,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Placeholder.jpg',
			description: 'A classic Italian coffee drink prepared with espresso, hot milk, and steamed milk foam.',
			category: 'Coffee',
			price: '1.00',
			currency: '$',
			type: 'Beverages'
		}
	},
	{
		"latte": {
			name: 'Latte',
			image: 'https://static.wixstatic.com/media/7ba22c_b1801da2638d4d448719f519d3213185~mv2.png/v1/fill/w_845,h_475,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/Placeholder.png',
			description: 'A coffee drink made with espresso and steamed milk.',
			category: 'Coffee',
			price: '9.0',
			currency: '$',
			type: 'Beverages'
		}
	},
]



class CS_GalleryFilter {
	filtersSelector = '.cs-button';
	galleriesSelector = '.cs-gallery';
	activeClass = 'cs-active';
	hiddenClass = 'cs-hidden';

	constructor() {
		this.$galleries = document.querySelectorAll(this.galleriesSelector);
		const $filters = document.querySelectorAll(this.filtersSelector);

		this.onClick($filters[0]);

		for (const $filter of $filters) {
			$filter.addEventListener('click', () => this.onClick($filter));
		}
	}

	onClick($filter) {
		this.filter($filter.dataset.filter);

		const { activeClass } = this;

		this.$activeFilter?.classList.remove(activeClass);
		$filter.classList.add(activeClass);

		this.$activeFilter = $filter;
	}

	filter(filter) {
		const showAll = filter == 'all';
		const { hiddenClass } = this;

		for (const $gallery of this.$galleries) {
			const show = showAll || $gallery.dataset.category == filter;
			$gallery.classList.toggle(hiddenClass, !show);
		}
	}
}

new CS_GalleryFilter();




function populateGallery(menuItems) {
	// Get the first gallery container (data-category="one")
	const galleryContainer = document.querySelector('.cs-gallery[data-category="one"]');

	// Clear existing pictures except the first one (which we'll use as a template)
	const templatePicture = galleryContainer.querySelector('.cs-image:first-child');
	galleryContainer.innerHTML = '';
	galleryContainer.appendChild(templatePicture);

	// Iterate through menu items and create gallery items
	menuItems.forEach(item => {
		const itemKey = Object.keys(item)[0];
		const itemData = item[itemKey];

		// Clone the template picture
		const newPicture = templatePicture.cloneNode(true);

		// Update image sources
		const sources = newPicture.querySelectorAll('source');
		const img = newPicture.querySelector('img');
		sources.forEach(source => {
			source.srcset = itemData.image;
		});
		img.src = itemData.image;
		img.alt = itemData.name;

		// Update product data
		const productDataWrapper = newPicture.querySelector('.gallery-product-data-wrapper');
		if (productDataWrapper) {
			productDataWrapper.querySelector('.gallery-product-name').textContent = itemData.name;
			productDataWrapper.querySelector('.gallery-product-type').textContent = itemData.type;
			productDataWrapper.querySelector('.gallery-product-category').textContent = itemData.category;
			productDataWrapper.querySelector('.gallery-product-price').textContent = `${itemData.price} ${itemData.currency}`;
		}

		// Append to gallery
		galleryContainer.appendChild(newPicture);
	});
}

// Call the function with menuItems
populateGallery(menuItems);

