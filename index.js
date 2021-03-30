const names = ["Lisa", "Kaitlin", "Jan"];
const event = 'surprise';

function writeCards(names, _event) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${_event} gift!`);
    }

    return newArray;
}

writeCards('name', 'event');

function countDown(init = 10) {
    while (init >= 0) {
        console.log(init--)
    }
}