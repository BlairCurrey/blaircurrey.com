const ROOT = document.querySelector(':root');
const STYLE = getComputedStyle(ROOT);
const DEFAULT_THEME = 'blue'

THEMES = {
  blue: {
    '--bg-1': STYLE.getPropertyValue('--blue-900'),
    '--bg-2': STYLE.getPropertyValue('--blue-800'),
    '--bg-3': STYLE.getPropertyValue('--blue-700'),
    '--bg-4': STYLE.getPropertyValue('--blue-600'),
    '--bg-5': STYLE.getPropertyValue('--cyan-800'),
    '--bg-card-1': STYLE.getPropertyValue('--indigo-900'),
    '--bg-card-2': STYLE.getPropertyValue('--indigo-800'),
    '--text-1': STYLE.getPropertyValue('--bluegrey-100'),
    '--text-2': STYLE.getPropertyValue('--white-100'),
    '--highlight': STYLE.getPropertyValue('--green-300'),
    '--img-border': STYLE.getPropertyValue('--cyan-800'),
    '--btn': STYLE.getPropertyValue('--cyan-800'),
    '--border-skill': STYLE.getPropertyValue('--indigo-600'),
    '--theme-btn': STYLE.getPropertyValue('--cyan-800')
  },
  purple: {
    '--bg-1': STYLE.getPropertyValue('--purple-900'),
    '--bg-2': STYLE.getPropertyValue('--purple-800'),
    '--bg-3': STYLE.getPropertyValue('--purple-700'),
    '--bg-4': STYLE.getPropertyValue('--purple-600'),
    '--bg-5': STYLE.getPropertyValue('--pink-800'),
    '--bg-card-1': STYLE.getPropertyValue('--indigo-900'),
    '--bg-card-2': STYLE.getPropertyValue('--indigo-800'),
    '--text-1': STYLE.getPropertyValue('--bluegrey-100'),
    '--text-2': STYLE.getPropertyValue('--white-100'),
    '--highlight': STYLE.getPropertyValue('--amber-500'),
    '--img-border': STYLE.getPropertyValue('--pink-800'),
    '--btn': STYLE.getPropertyValue('--pink-800'),
    '--border-skill': STYLE.getPropertyValue('--indigo-600'),
    '--theme-btn': STYLE.getPropertyValue('--pink-800')
  },
  green: {
    '--bg-1': STYLE.getPropertyValue('--green-900'),
    '--bg-2': STYLE.getPropertyValue('--green-800'),
    '--bg-3': STYLE.getPropertyValue('--green-700'),
    '--bg-4': STYLE.getPropertyValue('--green-600'),
    '--bg-5': STYLE.getPropertyValue('--lime-800'),
    '--bg-card-1': STYLE.getPropertyValue('--olive-900'),
    '--bg-card-2': STYLE.getPropertyValue('--olive-800'),
    '--text-1': STYLE.getPropertyValue('--grey-100'),
    '--text-2': STYLE.getPropertyValue('--white-100'),
    '--highlight': STYLE.getPropertyValue('--yellow-500'),
    '--img-border': STYLE.getPropertyValue('--lime-800'),
    '--btn': STYLE.getPropertyValue('--lime-800'),
    '--border-skill': STYLE.getPropertyValue('--olive-600'),
    '--theme-btn': STYLE.getPropertyValue('--lime-800')
  }
};

// theme should be string representing key in THEMES
function setTheme(themeKey){
  const { style } = ROOT;
  
  Object.keys(THEMES[themeKey]).forEach(cssVar => {
    style.setProperty(cssVar, THEMES[themeKey][cssVar]);
  })

  localStorage.setItem('themeKey', themeKey);

  // Disable the button for the currently active theme
  const buttons = document.querySelectorAll('.theme');
  buttons.forEach(button => {
    if (button.id === `${themeKey}-theme`) {
      button.disabled = true;
    } else {
      button.disabled = false;
    }
  });
};

function loadThemeFromStorage(){
  try {
    const themeKey = localStorage.getItem('themeKey');
    if(themeKey && themeKey in THEMES){
      setTheme(themeKey);
      return true;
    };
  } catch (error) {
    console.error(error);
  }
  return false;
}

function renderThemePicker(){
  const themePicker = document.getElementById('theme-picker');
  const themeKeys = Object.keys(THEMES);

  if (themeKeys.length === 0) return themePicker.style.display = 'none';

  const i = document.createElement('i');
  i.classList.add('fa-solid', 'fa-palette')
  themePicker.append(i)

  const activeTheme = localStorage.getItem('themeKey') || DEFAULT_THEME;

  themeKeys.forEach((themeKey) => {
    const button = document.createElement('button');
    button.classList.add('theme');
    button.id = `${themeKey}-theme`;
    button.style['background-color'] = THEMES[themeKey]['--theme-btn']
    button.onclick = () => setTheme(themeKey);
    themePicker.appendChild(button);

    if(themeKey === activeTheme){
      button.disabled = true
    }
  });
}

window.onload = () => {
  const loaded = loadThemeFromStorage();
  if(!loaded) setTheme(DEFAULT_THEME);
  renderThemePicker();
};