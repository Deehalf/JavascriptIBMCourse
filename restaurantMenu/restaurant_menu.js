const breakfastMenu = ['Pancakes - $12', 'Eggs Benedict - $25', 'Oatmeal - $13', 'Frittata - $15'];
const mainCourseMenu = ['Steak - $30', 'Pasta - $20', 'Burger - $15', 'Salmon - $25'];
const dessertMenu = ['Cake - $8', 'Ice Cream - $5', 'Pudding - $6', 'Fruit Salad - $7'];

 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

