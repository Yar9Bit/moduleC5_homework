const parser = new DOMParser()

const string = `
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

const xmlDOM = parser.parseFromString(string, "text/xml");

//selector

const listNode = xmlDOM.querySelector("list");
const studentNode = listNode.querySelector("student");
const nameNode = studentNode.querySelector("name");
const firstNode = nameNode.querySelector("first");
const secondNode = nameNode.querySelector("second");
const ageNode = studentNode.querySelector("age");
const profNode = studentNode.querySelector("prof");


//attribute

const langAttr = nameNode.getAttribute('lang');

//result

const result = {
    list: listNode,
    name: firstNode.textContent + secondNode.textContent,
    age: ageNode.textContent,
    prof: profNode.textContent,
    lang: langAttr,
};

console.log('result', result);
