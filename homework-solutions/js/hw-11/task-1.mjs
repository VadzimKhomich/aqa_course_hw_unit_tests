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
    if (!value || typeof value !== 'string') throw new Error('Invalid firstName value type');
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }

  set lastName(value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid lastName value type');
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }

  set profession(value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid profession value type');
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }

  set salary(value) {
    if (!value || value < 0 || typeof value !== 'number' || isNaN(value)) throw new Error('Invalid salary value type');
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  #employees;
  constructor(title, phone, address, employees = []) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.employees = employees;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid title value type');
    this._title = value;
  }

  get phone() {
    return this._phone;
  }

  set phone(value) {
    if (!value || typeof value !== 'number' || isNaN(value)) throw new Error('Invalid phone value type');
    this._phone = value;
  }

  get address() {
    return this._address;
  }

  set address(value) {
    if (!value || typeof value !== 'string') throw new Error('Invalid address value type');
    this._address = value;
  }

  addEmployee(employee) {
    if (employee instanceof Employee) {
      this.employees.push(employee);
    } else {
      throw new Error('Invalid Employee');
    }
  }

  getEmployees() {
    return this.employees;
  }

  getInfo() {
    return `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.employees.length}`;
  }
}

export { Employee, Company };
