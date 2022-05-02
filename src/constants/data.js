import images from "./images";

const wines = [
	{
		title: "Pear and rose punch",
		price: "$56",
		tags: "AU | Bottle",
	},
	{
		title: "Virgin piña colada",
		price: "$59",
		tags: "AU | Bottle",
	},
	{
		title: "Faux fizz",
		price: "$44",
		tags: "FR | 750 ml",
	},
	{
		title: "Clementine mock mojito",
		price: "$31",
		tags: "CA | 750 ml",
	},
	{
		title: "Cranberry spritz",
		price: "$26",
		tags: "IE | 750 ml",
	},
];

const cocktails = [
	{
		title: "Berry Burlesque",
		price: "$20",
		tags: "Lime juice | Honey syrup | Black currant puree | 30 ml",
		// tags: "AU | Bottle",
	},
	{
		title: "Lyre’s Dublin Double Irish Coffee",
		price: "$16",
		tags: "Lyre’s American Malt | Hot brewed coffee | Premium maple syrup",
		// tags: "AU | Bottle",
	},
	{
		title: "Lavender Lemonade",
		price: "$10",
		tags: "Fresh lemon juice, strained | Dried lavender | Honey",
		// tags: "AU | Bottle",
	},
	{
		title: "Rose Fizz",
		price: "$31",
		tags: "Fresh lemon juice| Brown sugar | powdered sugar",
		// tags: "AU | Bottle",
	},
	{
		title: "Rosemary Blueberry Smash",
		price: "$26",
		tags: "Gin | Sweet Vermouth | Campari | Orange garnish",
		// tags: "AU | Bottle",
	},
];

const awards = [
	{
		imgUrl: images.award02,
		title: "Bib Gourmond",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award01,
		title: "Rising Star",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award05,
		title: "AA Hospitality",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
	{
		imgUrl: images.award03,
		title: "Outstanding Chef",
		subtitle: "Lorem ipsum dolor sit amet, consectetur.",
	},
];

export default { wines, cocktails, awards };
