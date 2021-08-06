import { LinkedList } from "./088 LinkedList";
import { CharacterCollection } from "./CharectarCollection";
import { NumberCollection } from "./NumbersCollection";

//  Short characters

const characters = new CharacterCollection(
  "oaiergfhapiuraguijdgnbjashvaljgoapiertauiwyhtfua"
);
characters.sort;
console.log("characters : ", characters.data);

//  Short Number

const number = new NumberCollection([
  182, 3, 9, -5, -9, 71, 566, 66, 6689, -8, 9, 8, 9, 185, -6, 15, 981, 49, 10,
  3, 54, 85,
]);
number.sort();
console.log("number : ", number.data);

// Short linkedList

const linkedList = new LinkedList();

linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(-53);
linkedList.add(12);
linkedList.add(10);
linkedList.add(432);
linkedList.sort();
console.log("linkedList : ");
linkedList.print();
