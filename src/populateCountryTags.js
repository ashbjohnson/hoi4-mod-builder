const fs = require('fs');
const gameDirectory = require('./gameDirectory.json');

if (!process.argv[2]) {
    const countriesLoc = Object.fromEntries(fs.readFileSync(gameDirectory.dir + '\\localisation\\english\\countries_l_english.yml').toString().split('\n').filter((line) => /^ \w{3}:0 ".+"/.test(line)).map((line) => {
        const [tag, ...name] = line.trim().replaceAll(/:0|"/g, '').split(' ');
        return [tag, name.join(' ')];
    }));
    fs.writeFileSync('./src/countryTags.json', JSON.stringify(countriesLoc));

    console.log('Wrote', Object.entries(countriesLoc).length, 'entries to countryTags.json');
}
