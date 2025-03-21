class Employee {
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    const regEx = /^[a-z]+$/gi;
    const isValid = regEx.test(value);
    if (
      !isValid ||
      value.length < 2 ||
      value.length > 50 ||
      !value ||
      typeof value !== "string"
    ) {
      throw new Error("Incorrect firstName");
    } else {
      this._firstName = value;
    }
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    const regEx = /^[a-z\s]+$/gi;
    const isValid = regEx.test(value);
    if (
      !isValid ||
      value.length < 2 ||
      value.length > 50 ||
      !value ||
      typeof value !== "string"
    ) {
      throw new Error("Incorrect lastName");
    } else {
      this._lastName = value;
    }
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    const regEx = /^[a-z\s]+$/gi;
    const isValid = regEx.test(value);
    if (!value || typeof value !== "string" || !isValid || value === ' ') {
      throw new Error("Incorrect profession");
    } else {
      this._profession = value;
    }
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (!value || value <= 0 || value >= 10000 || typeof value !== "number") {
      throw new Error("Incorrect salary");
    } else {
      this.#salary = value;
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees = [];
  constructor(title, phone, address) {
    this._title = title;
    this._phone = phone;
    this._address = address;
  }

  get title() {
    return this._title;
  }

  get phone() {
    return this._phone;
  }

  get address() {
    return this._address;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.#employees.push(employee);
    } else {
      throw new Error("Incorrect employee");
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${
      this.address
    }\nКоличество сотрудников: ${this.#employees.length}`;
  }

  findEmployeeByName(firstName) {
    const employee = this.#employees.find(
      (employee) => employee.firstName === firstName
    );
    if (!employee) {
      throw new Error("Employee not found");
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    let employeeIndex = this.#employees.findIndex(
      (employee) => employee.firstName === firstName
    );
    if (employeeIndex === -1) {
      throw new Error("Index not found");
    }
    return employeeIndex;
  }

  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
  }

  getTotalSalary() {
    return this.#employees.reduce(
      (sum, employee) => (sum += employee.salary),
      0
    );
  }
}

export { Employee, Company };
