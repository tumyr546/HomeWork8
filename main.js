
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

for (let i = 0; i < friends.length; i += 1){
string += friends[i]

if(i < friends.length - 1){
    string += ','
 }
}

console.log(string);
 const friendss = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
 const result = friendss.join(',')
 console.log(result);
const cards = [
    'карточка-1',
    'карточка-2',
    'карточка-3',
    'карточка-4',
    'карточка-5',
];
console.log(cards);

const cardToRemove = 'карточка-3';
const remove = cards.indexOf(cardToRemove)

cards.splice(remove, 1);

console.log(remove);


const cardToInsert = 'карточка-6';
const insertIndex = 4;
 cards.splice(insertIndex, 0, cardToInsert) 
 console.log(insertIndex);
 
const cardToUpdate = 'карточка-4';
const toUpdate = cards.indexOf(cardToUpdate);

cards.splice(toUpdate, 1, 'Updated') 
console.log(toUpdate);