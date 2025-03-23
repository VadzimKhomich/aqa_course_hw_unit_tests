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
    if (!value || typeof value !== 'string') {
      throw new Error('Incorrect firstName');
    } else {
      this._firstName = value;
    }
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Incorrect lastName');
    } else {
      this._lastName = value;
    }
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (!value || typeof value !== 'string') {
      throw new Error('Incorrect profession');
    } else {
      this._profession = value;
    }
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (!value || value < 0 || typeof value !== 'number') {
      throw new Error('Incorrect salary');
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
      throw new Error('Incorrect employee');
    }
  }

  getEmployees() {
    return this.#employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`;
  }
}

export { Employee, Company };
