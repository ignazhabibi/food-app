//Model 
const mockJournalData = [
    {
        "date": "31.01.2019",
        "time": "12:56",
        "food": "Banane",
        "calories": "500",
        "iconName": "banana.jpg" 
    },
    {
        "date": "31.01.2019",
        "time": "10:12",
        "food": "Apfel",
        "calories": "300",
        "iconName": "apple.jpg" 
    },
    {
        "date": "31.01.2019",
        "time": "08:11",
        "food": "Peach",
        "calories": "400",
        "iconName": "peach.jpg" 
    },
    {
        "date": "30.01.2019",
        "time": "19:55",
        "food": "Banane",
        "calories": "500",
        "iconName": "banana.jpg" 
    }
];

//Controller
class FoodJournalController {
    constructor(foodJournalView) {
        this.foodJournalView = foodJournalView;
    }
    init() {
        this.foodJournalView.init();
    }
    getJournal() {
        return mockJournalData;
    }
}

//View
class FoodJournalView {
    init() {
        this.renderFoodJournalView();
    }
    renderFoodJournalView() {
        const foodJournal = foodApp.getJournal();
        const iconPath = "../assets/foodicons/";
        const foodJournalUI = document.getElementById("today");
        
        for (let i of foodJournal) {
            let itemContainer = document.createElement("data-list-item");
            itemContainer.innerHTML = /*html*/`
                <data-list-icon src="${iconPath+i.iconName}"></data-list-icon>
                <data-list-content>
                    <h3>${i.food}</h3>
                    <p>Kalorien: ${i.calories}</p>
                </data-list-content>
                <data-list-sequence>${i.time} Uhr</data-list-sequence>
           `;
            foodJournalUI.appendChild(itemContainer);
        }
    }
}

//App
const foodJournalView = new FoodJournalView();
const foodApp = new FoodJournalController(foodJournalView);
foodApp.init();