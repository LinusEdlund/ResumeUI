const url = "https://localhost:7164";
let isDown = false;
let startX;
let scrollLeft;

//document.addEventListener('DOMContentLoaded', async () => {
//    async function fetchExperience() {
//        try {
//            const response = await fetch(url + '/Experience');
//            const data = await response.json();
//            return data[0].experiences;
//        } catch (error) {
//            console.error(error);
//        }
//    }
//
//    const experienceData = await fetchExperience();
//
//    document.querySelector('.experience').innerHTML = experienceData
//        .map(exp => `<li>
//                        <h2>${exp.title}</h2>
//                        <main>    
//                            <div class="left-side">
//                                <div class="left-text place">
//                                    <h3>Workplace</h3>
//                                    <p>${exp.workPlace}</p>
//                                </div>
//                                <div class="left-text range">
//                                    <h3>Range</h3>
//                                    <p>${exp.range}</p>
//                                </div>
//                            </div>
//                            <div class="right-side">${exp.responsibilities}</div>
//                        </main>
//                    </li>`)
//        .join('');
//
//    const slider = document.querySelector('.experience');
//    slider.addEventListener('mousedown', down);
//    slider.addEventListener('mouseleave', leave);
//    slider.addEventListener('mouseup', leave);
//    slider.addEventListener('mousemove', move);
//});







const experienceData = [{title: 'Nodehill (Lia)', workPlace: 'Lund', range: 'Sep 2023 - Dec 2023', responsibilities: 'Under min tid på Nodhill arbetade jag som del av ett team som utvecklade en AI-baserad bilderbok. Min huvudsakliga uppgift var att bidra till att bygga och implementera texten med Markdown till de AI-genererade bilderna.'},
{title: 'Objektorienterad programmering med AI-kompetens (Yrkeshögskola)', workPlace: 'Halmstad', range: 'Aug 2022 - Dec 2023', responsibilities: 'På Yrkeshögskolan fick jag en omfattande utbildning inom programmeringsspråken C#, Python och webutveckling med fokus på JavaScript, CSS och HTML. Dessutom inkluderade utbildningen inriktning på AI, vilket gav mig en bred förståelse för tillämpningar inom artificiell intelligens inom webutveckling och programmering.'},
{title: 'Blazor course from iamtimcorey', workPlace: 'Distans', range: 'Juni 2023 - Juli 2023', responsibilities: 'På kursen med Tim Corey lärde jag mig Blazor, där jag förvärva kunskaper om att skapa webbapplikationer med hjälp av C# och .NET. Jag fick en djup förståelse för att bygga interaktiva användargränssnitt med Blazor-komponenter och använda C#-syntaxen för att skapa dynamiska och responsiva webbplatser.'}];

document.querySelector('.experience').innerHTML = experienceData
    .map(exp => `<li>
                    <h2>${exp.title}</h2>
                    <main>    
                        <div class="left-side">
                            <div class="left-text place">
                                <h3>Workplace</h3>
                                <p>${exp.workPlace}</p>
                            </div>
                            <div class="left-text range">
                                <h3>Range</h3>
                                <p>${exp.range}</p>
                            </div>
                        </div>
                        <div class="right-side">${exp.responsibilities}</div>
                    </main>
                </li>`)
    .join('');

const slider = document.querySelector('.experience');
slider.addEventListener('mousedown', down);
slider.addEventListener('mouseleave', leave);
slider.addEventListener('mouseup', leave);
slider.addEventListener('mousemove', move);



function down(e) {
    isDown = true;
    this.classList.add('active');
    startX = e.pageX - this.offsetLeft;
    scrollLeft = this.scrollLeft;
}

function leave() {
    isDown = false;
    this.classList.remove('active');
}

function move(e) {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - this.offsetLeft;
    const walk = (x - startX) * 2;
    this.scrollLeft = scrollLeft - walk;
}



