
export function loadMenu (){
    const content = document.getElementById ("content");
    

    //fix this line it causes error switchoing pages
    // content.setAttribute('id', 'contentMenu')

    const hungry = document.createElement ('h2');
    hungry.setAttribute("id", "hungry")
    hungry.textContent = "What Are You Hungry For?";
    // content.appendChild(hungry);

    const menu = document.createElement ("div");
    menu.setAttribute('id', 'menu');
    content.appendChild(menu);
    menu.appendChild(hungry);

    const foodTitles = [
        'Roasted Salmon',
        'Keto Steak',
        'Poke Bowl',
        'Vegan Bowl',
        'Gluten Free Pasta',
        'Acai Bowl'
    ]
    const foodNutrition = [
        '500cal | Protein: 30g',
        '700cal | Protein: 50g',
        '500cal | Protein: 25g',
        '450cal | Protein: 20g',
        '650cal | Protein: 30g',
        '450cal | Protein: 25g',
    ]

    

    for (let i  =0 ; i<=5; i++){
        const menuItem = document.createElement('div');
        menuItem.setAttribute('id', 'menuItem'+i);
        menuItem.setAttribute('class', 'menuItems');
        menu.appendChild(menuItem);

        const menuItemImg = document.createElement('div');
        menuItemImg.setAttribute('class', 'foodImg');
        menuItemImg.setAttribute('id', 'foodImg'+i);
        

        const menuItemText = document.createElement('div');
        menuItemText.setAttribute('class', 'foodText');
        menuItem.appendChild(menuItemImg); 
        menuItem.appendChild(menuItemText)

        const textPara1 = document.createElement('p');
        textPara1.setAttribute('class', 'foodTitle');
        textPara1.textContent = foodTitles[i];

        const textPara2 = document.createElement('p');
        textPara2.setAttribute('class', 'foodNutrition');
        textPara2.textContent = foodNutrition[i];
        menuItemText.appendChild(textPara1);
        menuItemText.appendChild(textPara2);

    }

    const orderBtn = document.createElement('button');
    orderBtn.textContent = "Place Order";
    orderBtn.setAttribute('id', 'orderBtn');
    content.appendChild(orderBtn);

}

