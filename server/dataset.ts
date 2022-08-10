let themes: {id: string, name: string}[] = [
    {
        id: "1",
        name: "waffles"
    },
    {
        id: "2",
        name: "tacos"
    }
]
let meals: {id: string, themeId: string, name: string, notes?: string}[] = [
    {
        id: "1",
        themeId: "1",
        name: "Belgian",
        notes: "Served with fruit and whip cream"
    },
    {
        id: "2",
        themeId: "1",
        name: "Bubble",
        notes: "Served in a cone with ice cream"
    },
    {
        id: "3",
        themeId: "2",
        name: "Fish",
        notes: "Corn tortilla, white fish, sauce, slaw"
    },
    {
        id: "4",
        themeId: "2",
        name: "American Chicken",
        notes: "Flour tortilla, grilled chicken, lettuce, salsa, sour cream"
    },
    {
        id: "5",
        themeId: "2",
        name: "Street Taco",
        notes: "Corn tortilla, cilantro, onion, steak"
    },
]
export default { themes: themes, meals: meals};