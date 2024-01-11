const url = "https://localhost:7164";

//(async () => {
//    async function fetchContacts() {
//        try {
//            const response = await fetch(url + '/Contacts');
//            const data = await response.json();
//            return data[0].contacts[0];
//
//        } catch (error) {
//            console.error(error);
//        }
//    }
//
//    const contactsData = await fetchContacts();
//
//    document.querySelector('.panels').innerHTML = 
//        `
//            <div class="panel panel1">
//                <p>Email</p>
//                <p>${contactsData.email}</p>
//            </div>
//
//            <div class="panel panel2">
//                <p>Phone</p>
//                <p>${contactsData.phone}</p>
//            </div>
//
//            <div class="panel panel3">
//                <p>GitHub</p>
//                <p>${contactsData.gitHub}</p>
//            </div>
//
//            <div class="panel panel4">
//                <p>LinkedIn</p>
//                <p>${contactsData.linkedIn}</p>
//            </div>
//        `;
//
//        const panels = document.querySelectorAll('.panel');
//
//        panels.forEach(panel => panel.addEventListener('click', toggleOpen));
//        panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
//})();

const contactsData = {email: 'Linus.Edlund2@hotmail.com', phone: '070-9963633', gitHub: 'https://github.com/LinusEdlund', linkedIn: 'https://www.linkedin.com/in/linus-edlund/'};
    
document.querySelector('.panels').innerHTML = 
    `
        <div class="panel panel1">
            <p>Email</p>
            <p>${contactsData.email}</p>
        </div>

        <div class="panel panel2">
            <p>Phone</p>
            <p>${contactsData.phone}</p>
        </div>

        <div class="panel panel3">
            <p>GitHub</p>
            <p>${contactsData.gitHub}</p>
        </div>

        <div class="panel panel4">
            <p>LinkedIn</p>
            <p>${contactsData.linkedIn}</p>
        </div>
    `;

const panels = document.querySelectorAll('.panel');

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

function toggleOpen() {
    this.classList.toggle('open');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

