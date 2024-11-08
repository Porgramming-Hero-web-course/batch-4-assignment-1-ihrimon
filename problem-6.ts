/*-----------Problem-7-----------*/

class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getCarAge() {
    const currentYear = new Date().getFullYear();
    console.log(
      `${currentYear - this.year} (assuming current year is ${currentYear})`
    );
  }
}

const car = new Car("Honda", "Civic", 2018);
car.getCarAge();
