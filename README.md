# Sorter 
a simple **number** (array) , **string** , **linked-list** sorter. 

to use this project first u need to clone it and and install the need dependencies:
```bash 
npm install
```
# How to use its:
## imports

```javascript
import { LinkedList } from "./088 LinkedList";
import { CharacterCollection } from "./CharectarCollection";
import { NumberCollection } from "./NumbersCollection";
```
## Short characters
```javascript
//  Short characters

const characters = new CharacterCollection(
  "oaiergfhapiuraguijdgnbjashvaljgoapiertauiwyhtfua"
);
characters.sort;
console.log("characters : ", characters.data);
```
> ***output*** :
>> characters :  oaiergfhapiuraguijdgnbjashvaljgoapiertauiwyhtfua
## Short Number
```javascript
//  Short Number

const number = new NumberCollection([
  182, 3, 9, -5, -9, 71, 566, 66, 6689, -8, 9, 8, 9, 185, -6, 15, 981, 49, 10,
  3, 54, 85,
]);
number.sort();
console.log("number : ", number.data);
```
> ***output*** :
>>number :  [
    -9,  -8,  -6,   -5,  3,   3,
     8,   9,   9,    9, 10,  15,
    49,  54,  66,   71, 85, 182,
   185, 566, 981, 6689
 ]
## Short linkedList

```javascript
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

```
> ***output*** :
>> -53
>> 2
>> 3
>> 4
>> 10
>> 12
>> 432


