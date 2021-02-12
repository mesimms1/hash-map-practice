const HashMap = require('./HashMap');

const BSM = new HashMap(4);

BSM.assign('Growth Mindset','You can decide your path and take steps down your own road. You will learn, grow, and be a better you.');
BSM.assign('Detail Orientation', 'Watch out for that missing semi-colon. Even the strongest lions can be injured by the smallest thorns.');
BSM.assign('Future Orientation', 'Be a friend to your future self. By helping them, you help yourself.');

console.log(BSM.retrieve('Growth Mindset'));
console.log(BSM.retrieve('Detail Orientation'));
console.log(BSM.retrieve('Future Orientation'));

let growthMindset = BSM.retrieve('Growth Mindset');
let detailOrientation = BSM.retrieve('Detail Orientation');
let futureOrientation = BSM.retrieve('Future Orientation');

document.getElementById('BSM').innerText(growthMindset);
