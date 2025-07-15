
const data = {
fruits: {
    Apples: 52,
    Blackberries: 43,
    "Cantaloupe Melon": 34,
    Cranberries: 46,
    Clementines: 47,
    Grapefruit: 42,
    Guava: 68,
    Oranges: 47,
    Papaya: 43,
    Peaches: 39,
    Pineapple: 50,
    Raspberries: 52,
    Rhubarb: 21,
    Strawberries: 33,
    Watermelon: 30
},
vegetables: {
    Asparagus: 20,
    Beets: 43,
    Broccoli: 45,
    Cabbage: 25,
    Carrots: 41,
    Cauliflower: 25,
    Celery: 16,
    Cucumbers: 16,
    Leek: 61,
    Lettuce: 15,
    Radish: 16,
    Spinach: 23,
    Tomatoes: 18,
    Turnips: 28,
    Zucchini: 17
},
staples: {
    Rice: 130,
    Chapathi: 104,
    Bread: 80,
    Dosa: 120,
    Idli: 58,
    Upma: 110,
    Puri: 150,
    Paratha: 180
},
snacks: {
    Chips: 150,
    Cookies: 100,
    Chocolate: 200,
    Popcorn: 90,
    Samosa: 130,
    Biscuit: 60
}
};

function loadFoodItems() {
const category = document.getElementById('category').value;
const foodSelect = document.getElementById('food');
const foodLabel = document.getElementById('foodLabel');
const quantityInput = document.getElementById('quantity');
const quantityLabel = document.getElementById('quantityLabel');
const result = document.getElementById('result');

foodSelect.innerHTML = '';
result.textContent = '';
quantityInput.style.display = 'none';
quantityLabel.style.display = 'none';

if (category && data[category]) {
    foodLabel.style.display = 'block';
    foodSelect.style.display = 'block';

    const defaultOption = document.createElement('option');
    defaultOption.textContent = '-- Select Food Item --';
    defaultOption.value = '';
    foodSelect.appendChild(defaultOption);

    for (let item in data[category]) {
    const option = document.createElement('option');
    option.value = item;
    option.textContent = `${item} (${data[category][item]} cal)`;
    foodSelect.appendChild(option);
    }

    foodSelect.onchange = () => {
    if (foodSelect.value) {
        quantityInput.style.display = 'block';
        quantityLabel.style.display = 'block';
    } else {
        quantityInput.style.display = 'none';
        quantityLabel.style.display = 'none';
    }
    };
} else {
    foodLabel.style.display = 'none';
    foodSelect.style.display = 'none';
}
}

function calculateCalories() {
const category = document.getElementById('category').value;
const food = document.getElementById('food').value;
const quantity = parseInt(document.getElementById('quantity').value);
const result = document.getElementById('result');

if (!category || !food || isNaN(quantity) || quantity <= 0) {
    result.textContent = ' Please complete all selections.';
    return;
}

const caloriePerItem = data[category][food];
const totalCalories = caloriePerItem * quantity;
result.textContent = `${quantity} ${food}(s) = ${totalCalories} Calories`;
}
