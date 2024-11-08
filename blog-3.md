## Why are Type Guards Necessary?

Type Guard is a TypeScript feature commonly used for narrowing a type of variable or expression within a conditional block. It takes a variable with a unique property and returns a boolean or other variable type. Type guards work with a set of conditions to check whether a variable or expression is valid and safe by checking the type of the variable using typeof, instanceof, or custom type guard functions.

There are several types of type guards which are described as follows:

* typeof guard
* instanceof guard
* in guard

## Discuss Various Types of Type Guards and Their Use Cases: ==>

## 'typeof' guard.

The typeof type guard is used to narrow down the type (primitive types with string, number, boolean, symbol, and undefined) of a variable using typeof operator.

```typescript
{
  function processType(value: number | string | boolean) {
    if (typeof value === "number") {
      console.log(`Number value: ${value}`);
    } else if (typeof value === "string") {
      console.log(`String value: ${value}`);
    } else if (typeof value === "boolean") {
      console.log(`Boolean value: ${value}`);
    }
  }

  processType(147);
  processType("Rimon");
  processType(true);
}
```

In this function check the primitive value number, string and boolen. If input value is not match these condition then not a return value.

## 'instanceof' guard.

An instanceof guard is a built-in type guard that can be used to check if a variable or expression is an instance of a given constructor or class. Using this type guard test an object or property is drived from a base class.

```typescript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  sound: string;
  constructor(name: string, sound: string) {
    super(name);
    this.sound = sound;
  }
}

class Cat extends Animal {
  sound: string;
  constructor(name: string, sound: string) {
    super(name);
    this.sound = sound;
  }
}
function animalInfo(animal: Dog | Cat) {
  if (animal instanceof Dog) {
    console.log(`The ${animal.name} dog making sound ${animal.sound}`);
  } else {
    console.log(`The ${animal.name} cat making sound ${animal.sound}`);
  }
}
const dog = new Dog("German Shefard", "Barking");
const cat = new Cat("Oliver", "Meaw Meaw");

animalInfo(dog);
animalInfo(cat);
```

In this example, animal could be an instance of the Dog or Cat class. The instanceof type guard checks the class of animal and the function (animalInfo) calls the method based on the result.

## 'in' guard

The 'in' operator can be useful working with objects and there's a need to check if they exist in property.

```typescript
type JuniorDeveloper = {
  name: string;
  age: number;
};

type SeniorDeveloper = {
  name: string;
  age: number;
  isTSExpert: boolean;
};

const developer = (dev: JuniorDeveloper | SeniorDeveloper) => {
  if ("isTSExpert" in dev) {
    console.log(`My name is ${dev.name} and expert in TypeScript`);
  } else {
    console.log(`My name is ${dev.name}`);
  }
};
const junior: JuniorDeveloper = { name: "Rimon", age: 20 };
const senior: SeniorDeveloper = { name: "Imam", age: 30, isTSExpert: true };
developer(senior);
```

In this example, the in operator checks whether specific properties 'isTSExpert' exist in the senior object.

# Conclusion

In this article, several types of type guards in TypeScript, describing a few examples to see them in action. Type Guards assuring the value of a type, improving the overall code more reliable, easier to maintain and type-safty.
