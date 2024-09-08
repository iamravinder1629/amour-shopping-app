import { createSlice } from "@reduxjs/toolkit";
const products = [
    {
        id: 1,
        quantity: 1,
        price: 129.99,
        name: "Elegant Evening Gown",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_green_button_up_midi_dress-3.jpg?v=1724012272&width=900",
        description: "A stunning evening gown with intricate",
    },
    {
        id: 2,
        quantity: 1,
        price: 39.99,
        name: "Floral Print Sundress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_tennis_graphic_tee-2.jpg?v=1723484697&width=1800",
        description: "A light and breezy sundress with a vibrant",
    },
    {
        id: 3,
        quantity: 1,
        price: 79.99,
        name: "Classic Little Black Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_golf_graphic_tee-2.jpg?v=1723484896&width=1800",
        description: "A timeless little black dress with a sleek ",
    },
    {
        id: 4,
        quantity: 1,
        price: 69.99,
        name: "Bohemian Maxi Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/2P4A0588.jpg?v=1723902636&width=1800",
        description: "A flowing maxi dress with a bohemian print ",
    },
    {
        id: 5,
        quantity: 1,
        price: 49.99,
        name: "Vintage Polka Dot Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_teal_graphic_tee-2.jpg?v=1723840108&width=1800",
        description: "A playful polka dot dress with a fitted ",
    },
    {
        id: 6,
        quantity: 1,
        price: 54.99,
        name: "Chic Wrap Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_teal_rodeo_tee-3.jpg?v=1720464350&width=1800",
        description: "A sophisticated wrap dress with a cinched ",
    },
    {
        id: 7,
        quantity: 1,
        price: 34.99,
        name: "Casual Shift Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_golf_club_sweatshirt-3.jpg?v=1723484526&width=1800",
        description: "A comfortable shift dress with a relaxed fit ",
    },
    {
        id: 8,
        quantity: 1,
        price: 44.99,
        name: "Off-Shoulder Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_patchwork_maxi_dress-6.jpg?v=1723839131&width=1800",
        description: "A stylish off-shoulder dress with a fitted .",
    },
    {
        id: 9,
        quantity: 1,
        price: 89.99,
        name: "Formal A-Line Dress",
        category: "Dresses",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_black_floral_maxi_dress-3_86ea8a0d-933e-420e-ba4d-1b710265aed5.jpg?v=1723833060&width=1800",
        description: "An elegant A-line dress with a flattering fit",
    },

    {
        id: 10,
        quantity: 1,
        price: 89.99,
        name: "Classic Black Pumps",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_tan_platform_heels-3_584f5756-c90c-45b4-b4b7-5229ec3441b8.jpg?v=1720535168&width=1800",
        description: "Elegant black pumps with a sleek design,",
    },
    {
        id: 11,
        quantity: 1,
        price: 109.99,
        name: "Brown Ankle Boots",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_beaded_sandals-8.jpg?v=1715275024&width=1800",
        description: "Stylish brown ankle boots with a comfortable.",
    },
    {
        id: 12,
        quantity: 1,
        price: 74.99,
        name: "White Sneakers",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_platform_double_strap_sandals-12.jpg?v=1723675092&width=1800",
        description: "Versatile white sneakers perfect for casual.",
    },
    {
        id: 13,
        quantity: 1,
        price: 129.99,
        name: "Red High Heels",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_tan_straw_heels-3.jpg?v=1712414386&width=1800",
        description: "Bold red high heels with a pointed toe ",
    },
    {
        id: 14,
        quantity: 1,
        price: 64.99,
        name: "Beige Loafers",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_espadrille_heels-3.jpg?v=1716484977&width=1800",
        description: "Comfortable beige loafers.",
    },
    {
        id: 15,
        quantity: 1,
        price: 49.99,
        name: "Gray Sandals",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_white_sneakers-10.jpg?v=1723675220&width=1800",
        description: "Casual gray sandals with adjustable straps",
    },
    {
        id: 16,
        quantity: 1,
        price: 78.99,
        name: "Criss Cross Strap",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_brown_espadrille_heels-3.jpg?v=1708009688&width=1800",
        description: "Criss cross strap casual shoes for party",
    },
    {
        id: 17,
        quantity: 1,
        price: 24.99,
        name: "Ankale stripe heal",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_tan_block_heels-10.jpg?v=1707404925&width=1800",
        description: "Casual Ankel strip heals",
    },
    {
        id: 18,
        quantity: 1,
        price: 33.99,
        name: "plan ankle",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_nude_ankle_strap_wedges-2.jpg?v=1709827842&width=1800",
        description: "nude ankle strap wedges",
    },
    {
        id: 19,
        quantity: 1,
        price: 33.99,
        name: "Slide Sandals",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_off_white_platforms_slides-6.jpg?v=1723674973&width=1800",
        description: " Cabana Ready Nude Platform Slide Sandals",
    },
    {
        id: 20,
        quantity: 1,
        price: 19.0,
        name: "Strappy Studded Heels",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_blush_studded_heels-4.jpg?v=1723675072&width=1800",
        description: " Boost In My Step Blush Strappy Studded Heels",
    },
    {
        id: 21,
        quantity: 1,
        price: 33.99,
        name: "Platform Wedges",
        category: "Shoes",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_taupe_platform_wedges-9.jpg?v=1719497935&width=900",
        description: "Shoreline Chic Nude Platform Wedges",
    },
    {
        id: 22,
        quantity: 1,
        price: 52.0,
        name: "dennem roomer",
        category: "Romp",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_denim_romper-3_84d2c2b0-0745-48b2-b97a-b55d60505477.jpg?v=1724342293&width=1800",
        description: "Precious Look Denim Romper",
    },
    {
        id: 23,
        quantity: 1,
        price: 56.0,
        name: "Ivory Romper",
        category: "Romp",
        image:
            "https://shopdressup.com/cdn/shop/files/shopdressup_ivory_denim_romper-2.jpg?v=1722015934&width=1800",
        description: "Appealing Perfection Ivory Denim Romper",
    },
    {
        id: 24,
        quantity: 1,
        price: 42.0,
        name: "High Appeal Romper",
        category: "Romp",
        image:
            "https://shopdressup.com/cdn/shop/files/2P4A6922.jpg?v=1724430040&width=1800",
        description: "High Appeal Romper",
    },
];

const shoes = products.filter(item => item.category === "Shoes")
const dresses = products.filter(item => item.category === "Dresses")

const dressSlice = createSlice({
    name: "dressSlice",
    initialState: {
        products: products,
        shoes: shoes,
        dresses: dresses
    },
    reducers: {
        mapDresses: (state) => {
            console.log(state.dresses);
        }
    }

})
export default dressSlice.reducer;