const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'ball', number: 2 },
    { name: 'eye color', number: 12 },
    { name: 'iris', number: 3 },
    { name: 'shine', number: 1 },
    { name: 'shine', number: 1 },
    { name: 'bottom lid', number: 3 },
    { name: 'top lid', number: 3 },
];

const format = {
    width: 230,
    height: 230
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

/**+-How many N.F.T.s do you want in Total for your Collection? The Default Number here is 5,
and a Standard Number would be 10.000.*/
const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };