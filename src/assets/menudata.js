import saladImg from '@/assets/salad.jpg';
import burgerImg from '@/assets/burger.jpg';
import drinksImg from '@/assets/drinks.jpg';
import dessertImg from '@/assets/dessert.jpg';

function makeItem(name, price, summary, description, image, options){
    return {name, price, summary, description, image,
	    options: (!options ? null : [
		{name: 'Add-Ons', options}
	    ])};
}

export default [
    {
	title: 'drinks',
	image: drinksImg,
	subsections: [
	    {
		title: 'beer',
		items: [
		    makeItem('Cabin Supersaturation', 6.79),
		    makeItem('Coors Light', 5.69),
		    makeItem('Canmore Brewing Black Pilsner', 5.69)
		]
	    },{
		title: 'cocktails',
		items: [
		    makeItem('Margarita', 7.19),
		    makeItem('Blue Hawaii', 7.19)		    
		]
	    },{
		title: 'non-alcoholic',
		items: [
		    makeItem('Coffee, Tea, Hot Chocolate', 3.50),
		    {
			name: 'Specialty Coffee',
			price: 4.50,
			summary: 'Cappucino, mocha or espresso'
		    },{	
			name: 'Water',
			price: 299.99,
			badges: {
			    gf: 1
			},
			summary: 'H2O',
			description: 'This is a nice restaurant, how about you order something other than water?'
		    },
		    makeItem('Gatorade', 2.99)
		]
	    },
	]
    },{
	title: 'sharables',
	description: 'These items were designed to be enjoyed by more than one person, so save some for the rest of us, fatty.',
	image: saladImg,
	subsections: [
	    {
		title: 'salad',
		items: [
		    {
			name: 'Cobb Salad',
			id: '1',
			summary: 'Salad on the cob',
			description: "While this salad doesn't actually come 'on the cobb', sometimes we wish it did.",
			price: 12.79,
			badges: {
			    gf: 1
			},
			options: [
			    {
				name: 'Add-Ons',
				options: [
				    {name: 'Additional Cobb', price: 2}
				]
			    }
			]
		    },{
			name: 'Chopped Salad',
			id: '2',
			price: 13.09,
			description: 'You like chop? You get chop. Chopped salad!',
			badges: {
			    gf: 1,
			    spicy: 2
			},
			note: 'HIIIYYYYAAA!',
			options: [
			    {
				name: 'Add-Ons',
				options: [
				    {name: 'Egg', price: 1},
				    {name: 'Capers', price: 1}
				]
			    }
			]
		    },{
			name: 'Caprese',
			id: '3',
			price: 12.00,
			summary: 'Basil, tomato, buffalo mozzarella',
			description: 'Once upon a time in Italy, some dude was like "let me make the national flag with vegetables and cheeses" and now we have caprese salad. Served with balsamic, olive oil and the perfect amount of salt.',
			badges: {
			    gf: 1,
			    fav: 1
			}
		    }
		]
	    },{
		title: 'appetizers',
		items: [
		    {
			name: 'Hot Wings',
			id: 10,
			summary: 'Nuclear hot',
			price: 11.89,
			badges: {
			    spicy: 3
			}
		    },
		    {
			name: 'A Bowl of Frogs',
			id: 11,
			price: 32.88,
			summary: 'A wonderous French delicacy',
		    }
		]
	    }
	]
    },{
	title: 'handhelds',
	image: burgerImg,
	subsections: [
	    {
		title: 'burgers',
		description: 'Burgers are not available with meat substitute products; stop asking.',
		items: [
		    makeItem('The Original', 12.99, 'Our original flame-grilled burger'),
		    makeItem('Pepperita', 14.99, 'Can you handle the heat?'),
		    makeItem('Ol\' Wasteful', 48.99, 'So. Much. Meat.'),
		    {
			name: 'Chicken Burger',
			id: '18',
			price: 16.25,
			summary: 'Chicks with buns',
			description: 'Crispy breaded chicken twixt bread with some tasty veggies to boot',
			note: 'This was originally offered in beef',
			options: [
			    {
				name: 'Add-Ons',
				options: [
				    {name: 'Large pickle', price: 1}
				]
			    },
			    {
				name: 'Hold',
				select: 'single',
				options: [
				    {name: 'Tomato'},
				    {name: 'Transmission Fluid'}
				]
			    }
			]
		    },{
			name: 'Spicy Chicken Burger',
			id: '18.b',
			price: 16.25,
			summary: 'Hot chicks with buns',
			description: 'Crispy breaded chicken twixt bread with some tasty veggies to boot! This timem with some added heat',
			note: 'This was originally offered in beef',
			badges: {
			    spicy: 2,
			    fav: 1
			},
			options: [
			    {
				name: 'Add-Ons',
				options: [
				    {name: 'Large pickle', price: 1}
				]
			    }
			]
		    }
		]
	    },{
		title: 'sandwiches',
		description: 'Served piping hot with your choice of fries or caesar salad',
		items: [
		    makeItem('The Ruben', 13.99, 'Please, call me Dave'),
		    makeItem('Egg Salad', 11.29),
		    makeItem('Macaroni and Peas', 2.00),
		    makeItem('Roast Beast', 17.89, 'A Christmas favorite!')
		]
	    },{
		title: 'specialty',
		items: [
		    makeItem('Tacooooos', 8.99, '3 special, unique, Miami breakfast tacos')
		]
	    }
	],
    },{
	title: 'dessert',
	image: dessertImg,
	items: [
	    makeItem('Butterscotch', 2.89, 'Butterworth brand hard candies'),
	    makeItem('Worms in Dirt', 11.29, 'A gummy classic')
	]
    }
];
