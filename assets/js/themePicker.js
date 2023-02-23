const ROOT = document.querySelector(':root');

PALETTES = {
  blue: {
    '--blue-900': '#001A33',
    '--blue-800': '#002E5E',
    '--blue-700': '#00438C',
    '--blue-600': '#0057B8',
    '--cyan-800': '#007BC7',
    '--indigo-900': '#1F1A36',
    '--indigo-800': '#231E39',
    '--indigo-700': '#1e2039',
    '--indigo-600': '#2D2747',
    '--bluegrey-100': '#B3B8CD',
    '--green-300': '#a2df1a',
    '--white-100': '#ffffff'
  },
  purple: {
  '--purple-900': '#2d0036',
  '--purple-800': '#4f015b',
  '--purple-700': '#730283',
  '--purple-600': '#9a02ac',
  '--pink-800': '#C400D7',
  '--indigo-900': '#1F1A36',
  '--indigo-800': '#231E39',
  '--indigo-700': '#1e2039',
  '--indigo-600': '#2D2747',
  '--bluegrey-100': '#B3B8CD',
  '--amber-500': '#FEBB0B',
  '--white-100': '#ffffff'
  }
};

THEMES = {
  blue: {
    '--bg-1': PALETTES.blue['--blue-900'],
    '--bg-2': PALETTES.blue['--blue-800'],
    '--bg-3': PALETTES.blue['--blue-700'],
    '--bg-4': PALETTES.blue['--blue-600'],
    '--bg-5': PALETTES.blue['--cyan-800'],
    '--bg-card-1': PALETTES.blue['--indigo-900'],
    '--bg-card-2': PALETTES.blue['--indigo-800'],
    '--text-1': PALETTES.blue['--bluegrey-100'],
    '--text-2': PALETTES.blue['--white-100'],
    '--highlight': PALETTES.blue['--green-300'],
    '--img-border': PALETTES.blue['--cyan-800'],
    '--btn': PALETTES.blue['--cyan-800'],
    '--border-skill': PALETTES.blue['--indigo-600']
  },
  purple: {
    '--bg-1': PALETTES.purple['--purple-900'],
    '--bg-2': PALETTES.purple['--purple-800'],
    '--bg-3': PALETTES.purple['--purple-700'],
    '--bg-4': PALETTES.purple['--purple-600'],
    '--bg-5': PALETTES.purple['--pink-800'],
    '--bg-card-1': PALETTES.purple['--indigo-900'],
    '--bg-card-2': PALETTES.purple['--indigo-800'],
    '--text-1': PALETTES.purple['--bluegrey-100'],
    '--text-2': PALETTES.purple['--white-100'],
    '--highlight': PALETTES.purple['--amber-500'],
    '--img-border': PALETTES.purple['--pink-800'],
    '--btn': PALETTES.purple['--pink-800'],
    '--border-skill': PALETTES.purple['--indigo-600']
  }
};

// theme should be string representing key in THEMES
function setTheme(themeKey){
  const { style } = ROOT;
  // const newBG = getComputedStyle(ROOT).getPropertyValue('--bg-1')
  
  Object.keys(THEMES[themeKey]).forEach(cssVar => {
    style.setProperty(cssVar, THEMES[themeKey][cssVar]);
  })

  localStorage.setItem('themeKey', themeKey);
};

window.onload = () => {
  const themeKey = localStorage.getItem('themeKey');
  if(themeKey){
    setTheme(themeKey);
  };
};