let themes: {id: string, name: string}[] = [
    {
        id: "1",
        name: "waffles"
    },
    {
        id: "2",
        name: "tacos"
    },
    {
        id: "3",
        name: "meatless"
    },
    {
        id: "4",
        name: "slow cooker"
    },
    {
        id: "5",
        name: "salad"
    },
    {
        id: "6",
        name: "takeout"
    },
    {
        id: "7",
        name: "pasta"
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
    {
        id: "6",
        themeId: "3",
        name: "Taco bowl",
        notes: "Rice, black beans, avocado, corn, salsa"
    },
    {
        id: "7",
        themeId: "4",
        name: "Chili",
        notes: "Tomato sauce, beef, kidney beans"
    },
    {
        id: "8",
        themeId: "5",
        name: "Greek Salad",
        notes: "Falafel, red onion, kalamata olives, cucumber, tomato, feta"
    },
    {
        id: "9",
        themeId: "6",
        name: "Panda express"
    },
    {
        id: "10",
        themeId: "7",
        name: "Spaghetti",
        notes: "with meatballs"
    },
]
let weekdays: {id: string, name: string}[] = [
    {id: "1", name: "Monday"},
    {id: "2", name: "Tuesday"},
    {id: "3", name: "Wednesday"},
    {id: "4", name: "Thursday"},
    {id: "5", name: "Friday"},
    {id: "6", name: "Saturday"},
    {id: "7", name: "Sunday"}
]
let weekdayPlan: {id: string, weekdayId: string, themeId: string, mealId: string}[] = []
export default { themes, meals, weekdays, weekdayPlan};