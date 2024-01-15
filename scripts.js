const url = "https://localhost:7164";
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');


//(async () => {
//    async function fetchProjects() {
//        try {
//            const response = await fetch(url + '/Project');
//            const data = await response.json();
//            return data[0].projects;
//        } catch (error) {
//            console.error(error);
//        }
//    }
//
//    const projectsData = await fetchProjects();
//
//    document.querySelector('.projects').innerHTML = 
//        projectsData
//            .map(project => 
//                `<li>
//                    <a href="#">${project.name}</a>
//                    <div class="dropdown">
//                        <img src="${project.image}" alt="Project Image" class="image">
//                        <div class="text">
//                            <p>${project.description}</p>
//                            <div class="links">
//                                <a href="${project.repo}" target="_blank">GitHub</a>
//                                <a href="${project.live}" target="_blank">Live</a>
//                            </div>
//                        </div>
//                        
//                    </div>
//                </li>`)
//                .join('');
//
//
//
//    const triggers = document.querySelectorAll('.projects > li');
//
//    triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
//    triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
//
//})();






const projectsData = [{name: 'LiaProject', description: 'Användaren kan skapa sin egna AI-bliderbok ', image: 'Lia.png', repo: 'https://github.com/MarcRick/LiaProject', live: "https://github.com/MarcRick/LiaProject"}, 
{name: 'Turnering', description: 'Skapa din enga cup turnering', image: 'Tunering.png', repo: 'https://github.com/LinusEdlund/Turnering', live: "https://github.com/LinusEdlund/Turnering"},
{name: 'SuggestionApp', description: 'Användaren kan lägga upp förslag på video ideer. Om man är inloggad som admin får man välja vilka förslag som får komma upp på hemsidan. Det är en kopia av Tim Corys Suggestions hemsida.', image: 'Suggeston.png', repo: 'https://github.com/LinusEdlund/SuggestionApp', live: "https://suggestions.iamtimcorey.com/"}];

document.querySelector('.projects').innerHTML = 
    projectsData
        .map(project => 
            `<li>
                <a href="#">${project.name}</a>
                <div class="dropdown">
                    <img src="${project.image}" alt="Project Image" class="image">
                    <div class="text">
                        <p>${project.description}</p>
                        <div class="links">
                            <a href="${project.repo}" target="_blank">GitHub</a>
                            <a href="${project.live}" target="_blank">Live</a>
                        </div>
                    </div>
                    
                </div>
            </li>`)
            .join('');



const triggers = document.querySelectorAll('.projects > li');

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));






function handleEnter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 250);
    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave() {
    const background = document.querySelector('.dropdownBackground');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}










