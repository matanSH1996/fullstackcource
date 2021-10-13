var bars = document.getElementById('bar-icon');
var menu_list = document.getElementById('menu-list');

bars.addEventListener('click', (e) => {
    if(menu_list.className == 'closed'){
        menu_list.className = 'open';
    }else {
        menu_list.className = 'closed';
    }
});

let close_icon = document.getElementById('close-icon');
close_icon.addEventListener('click', (e) => {
    let contact_popup_section =  document.getElementById('contact-popup-section');
    if(contact_popup_section.style.display == 'none'){
        contact_popup_section.style.display = 'block';
    }else {
        contact_popup_section.style.display = 'none';
    }
});

let lets_talk_button =  document.getElementById('lets-talk-button');
lets_talk_button.addEventListener('click', (e) => {
    let contact_popup_section =  document.getElementById('contact-popup-section');
    contact_popup_section.style.display = 'block';
});

let stickey_whatsapp_div = document.getElementById('stickey-whatsapp-div');
stickey_whatsapp_div.addEventListener('click', (e) => {
    window.open("https://wa.me/message/XE45XREURC2KG1");
});

let linkedin_icon = document.getElementById('linkedin-icon');
linkedin_icon.addEventListener('click', (e) => {
    window.open("https://www.linkedin.com/in/matanshtern");
});
