export function loadAbout() {
    const content = document.getElementById ("content");

    const aboutContainer = document.createElement('div');
    aboutContainer.setAttribute('id', 'aboutContainer');
    content.appendChild(aboutContainer);

    const contactUs = document.createElement ('h2');
    contactUs.setAttribute("id", "contactUs")
    contactUs.textContent = "Contact Us";
    aboutContainer.appendChild(contactUs);

    const midContainer = document.createElement('div');
    midContainer.setAttribute('id', 'midContainer');
    aboutContainer.appendChild(midContainer);

    const midLeft = document.createElement('div');
    midLeft.setAttribute('id', 'midLeft');
    midContainer.appendChild(midLeft);

    const midRight = document.createElement('div');
    const para1 = document.createElement('h3');
    const para2 = document.createElement('h3');
    midRight.setAttribute('id', 'midRight');
    para1.textContent = "If you need any assistance please reach out";
    para2.textContent = "We are here to help";
    midContainer.appendChild(midRight);
    midRight.appendChild(para1);
    midRight.appendChild(para2);

    const chooseContact = document.createElement ('h2');
    chooseContact.setAttribute("id", "contactUs")
    chooseContact.textContent = "Choose one of the ways to get in touch with us";
    aboutContainer.appendChild(chooseContact);

    const bottomContainer = document.createElement('div');
    bottomContainer.setAttribute('id', 'bottomContainer');
    aboutContainer.appendChild(bottomContainer);

    const bottom1 = document.createElement('div');
    bottom1.setAttribute('id', 'bottom1');
    bottom1.setAttribute('class', 'contactOptions');
    bottomContainer.append(bottom1);

    const bottom2 = document.createElement('div');
    bottom2.setAttribute('id', 'bottom2');
    bottom2.setAttribute('class', 'contactOptions');
    bottomContainer.appendChild(bottom2);

    const bottom3 = document.createElement('div');
    bottom3.setAttribute('id', 'bottom3');
    bottom3.setAttribute('class', 'contactOptions');
    bottomContainer.appendChild(bottom3);

    const bottom4 = document.createElement('div');
    bottom4.setAttribute('id', 'bottom4');
    bottom4.setAttribute('class', 'contactOptions');
    bottomContainer.appendChild(bottom4);

    // adding class name to every element
    const contactOptions = document.getElementsByClassName("contactOptions");
    for (const element of contactOptions) {
        const contactTop = document.createElement('div');
        contactTop.setAttribute('class', 'contactTop1');
        const contactMid = document.createElement('div');
        contactMid.setAttribute('class', 'contactMid1');
        const contactBot = document.createElement('div');
        contactBot.setAttribute('class', 'contactBot1');
        element.append(contactTop, contactMid, contactBot);
      }

    const contactMid = document.getElementsByClassName("contactMid1");
    const arraySupport = ['Email Us', "Call Us", "Live Chat", "FAQ"];
    let i = 0;
    for (const element of contactMid) {
        element.textContent = arraySupport[i];
        i = i+1;
      }
}