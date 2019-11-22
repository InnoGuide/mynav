const subParts = [
    { item: "Part's" },
    { item: 'Part 1', func: () => console.log('Part 1') },
    { item: 'Part 2', func: () => console.log('Part 2') }
];
const subPrograms = [
    { item: 'Progs' },
    subParts,
    { item: 'Prog 1', func: () => console.log('Prog 1') },
    { item: 'Prog 2', func: () => console.log('Prog 2') },
    { item: 'Prog 3', func: () => console.log('Prog 3') }
];
const subDownloads = [
    { item: 'downloads', disabled: true },
    { item: 'download File one', func: () => console.log('file one') },
    { item: 'download File two', func: () => console.log('file two') },
    { item: '--' },
    subPrograms,
    { item: '--' },
    { item: 'download File three', func: () => console.log('file three') },
    { item: 'download File four', func: () => console.log('file four') }
];
const subTheme = [
    { item: 'Themes' },
    { item: 'red', func: () => { mynav.background = 'red'; mynav.color = 'yellow' } },
    { item: 'blue', func: () => { mynav.background = 'blue'; mynav.color = 'white' } },
    { item: 'yellow', func: () => { mynav.background = 'yellow'; mynav.color = 'black' } },
    { item: 'reset', func: () => { mynav.background = 'rgba(0,0,40,0.5)'; mynav.color = 'white' } }
];
const MENUE = {
    items: [
        { item: 'Home', func: Home, disabled: false },
        { item: 'About', func: About },
        subDownloads,
        subTheme
    ],
    background: 'rgba(0,0,40,0.5)',
    backgroundHover: 'rgb(0,0,40)',
    backgroundDisabled: 'rgba(0,0,40,0.6)',
    colorDisabled: 'grey',
    color: 'white',
    fontFamily: '"Arial Black"',
    searchVisible: false,
    navWidth: '70%',
    navHeight: '45px',
    position: 'fixed',
    trigger: 'hover',
    logoText:
        '<div style="color: yellow; font-weight: bold; font-size: x-large"><i class="fas fa-atom"></i></div>',
    logoImage: '../img/logo.png',
    buttonText: '<div style="padding: 0 20px">Login</div>',
    buttonFunction: Login,
    searchButtonText: 'SUCHE',
    searchButtonFunction: (suche) => console.log('Ich suche nach:', suche),

}
const mynav = new MyNavEntryPoint.MyNavBar(MENUE)

function Home() {
    /*
    Beispiel 1: 
           <a href="#home">Scrolle zu Home!<a>
           entspricht:
           document.querySelector('#home').scrollIntoView({ behavior: 'smooth' }); //oder 'auto' 
    Beispiel 2:     
           <a href="https://www.npmjs.com/package/mynav">Öffne Webseite<a> //oder z.B. "./meineZweiteSeite.html"
           entspricht:
           window.open('https://www.npmjs.com/package/mynav', '_blank'); // oder '_self'
    */
    document.querySelector('#about').style.display = 'none';
    document.querySelector('#home').style.display = 'flex';
}

function About() {
    document.querySelector('#home').style.display = 'none';
    document.querySelector('#about').style.display = 'flex';
}

function Login() {
    document.querySelector('.formBox').style.display = 'flex';
    document.getElementById('id').addEventListener('click', e => {
        e.preventDefault();
        mynav.searchVisible = true;
        const dummyNav = mynav.items;
        dummyNav[2][0].disabled = false;
        mynav.items = dummyNav;
        mynav.buttonText = 'Logout';
        mynav.buttonFunction = Logout;
        document.querySelector('.formBox').style.display = 'none';
    });
}

function Logout() {
    mynav.searchVisible = false;
    const dummyNav = mynav.items;
    dummyNav[2][0].disabled = true;
    mynav.items = dummyNav;
    mynav.buttonText = '<div style="padding: 0 20px">Login</div>';
    mynav.buttonFunction = Login;
}