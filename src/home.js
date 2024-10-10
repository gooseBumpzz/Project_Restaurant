

export function loadHome (){
    // const contentMenu = dcoument.getElementById ("contentMenu");
    const content = document.getElementById ("content");
    

    // content.style.backgroundImage = "food.jpg";

    const innerContent = document.createElement('div');
    innerContent.setAttribute('id', 'inner-content');
    content.appendChild(innerContent);

    const h1el = document.createElement ('h1');
    h1el.textContent = "My Fitness Kitchen";
    innerContent.appendChild(h1el);

    const slogan = document.createElement ('h2');
    slogan.textContent = "We take care of your nutrition and save you time";
    innerContent.appendChild(slogan);

    const orderBtn = document.createElement('button');
    orderBtn.textContent = "Place Order";
    orderBtn.setAttribute('id', 'orderBtn');
    innerContent.appendChild(orderBtn);

    const how = document.createElement ('h2');
    how.setAttribute("id", "how")
    how.textContent = "How It Works";
    innerContent.appendChild(how);

    const steps = document.createElement('div');
    steps.setAttribute('id', 'steps');
    innerContent.appendChild(steps);

    const stepsIMG = document.createElement('div');
    stepsIMG.setAttribute('id', 'stepsIMG')
    steps.appendChild(stepsIMG)
    for (let i= 0; i<3; i++) {
        const imgEl =  document.createElement('div'); 
        imgEl.setAttribute('class', 'imgs');
        imgEl.setAttribute('id', 'img'+i)
        stepsIMG.appendChild(imgEl);
    }

    const stepsText = document.createElement('div');
    stepsText.setAttribute('id', 'stepsText')
    steps.appendChild(stepsText);
    for (let i= 0; i<3; i++) {
        const para =  document.createElement('p'); 
        para.setAttribute('class', 'paras');
        para.setAttribute('id', 'para'+i)
        stepsText.appendChild(para);
    }

    const para0 = document.getElementById('para0');
    para0.textContent = "Chose your food";

    const para1 = document.getElementById('para1');
    para1.textContent = "Select your schedule";

    const para2 = document.getElementById('para2');
    para2.textContent = "Warm up and enjoy";
}