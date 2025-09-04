class Employee {
  #salary;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    const regEx = /^[a-z]+$/gi;
    const isValid = regEx.test(value);
    if (!isValid || value.length < 2 || value.length > 50 || !value || typeof value !== 'string') {
      throw new Error('Incorrect firstName');
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
    if (!isValid || value.length < 2 || value.length > 50 || !value || typeof value !== 'string') {
      throw new Error('Incorrect lastName');
    } else {
      this._lastName = value;
    }
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (!value || value <= 0 || value >= 100000 || typeof value !== 'number') {
      throw new Error('Incorrect salary');
    } else {
      this.#salary = value;
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  #programmingLanguages = [];
  profession = 'Developer';
  constructor(firstName, lastName, salary, langs) {
    super(firstName, lastName, salary);
    if (langs) {
      this.#programmingLanguages.push(...langs);
    }
  }

  get programmingLanguages() {
    return this.#programmingLanguages;
  }

  addProgrammingLanguage(language) {
    language = language.trim();
    if (typeof language !== 'string' || !language) {
      throw new Error('Incorrect language');
    } else {
      this.#programmingLanguages.push(language);
    }
  }
}

class Manager extends Employee {
  #teamSize = 0;
  profession = 'Manager';
  constructor(firstName, lastName, salary, teamSize) {
    super(firstName, lastName, salary);
    this.#teamSize = teamSize;
  }

  increaseTeamSize() {
    this.#teamSize++;
  }

  get teamSize() {
    return this.#teamSize;
  }
}

class Designer extends Employee {
  profession = 'Designer';
  #designTools = [];
  constructor(firstName, lastName, salary, tools) {
    super(firstName, lastName, salary);
    if (tools) {
      this.#designTools.push(...tools);
    }
  }

  get designTools() {
    return this.#designTools;
  }

  addDesignTool(tool) {
    tool = tool.trim();
    if (typeof tool !== 'string' || !tool) {
      throw new Error('Incorrect language');
    } else {
      this.#designTools.push(tool);
    }
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
    const isExists = this.#employees.find((el) => {
      if (el._firstName === employee._firstName && el._lastName === employee._lastName) {
        return true;
      }
      return;
    });

    if (employee instanceof Employee && !isExists) {
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

  findEmployeeByName(firstName) {
    const employee = this.#employees.find((employee) => employee.firstName === firstName);
    if (!employee) {
      throw new Error('Employee not found');
    }
    return employee;
  }

  #getEmployeeIndex(firstName) {
    let employeeIndex = this.#employees.findIndex((employee) => employee.firstName === firstName);
    if (employeeIndex === -1) {
      throw new Error('Index not found');
    }
    return employeeIndex;
  }

  removeEmployee(firstName) {
    this.#employees.splice(this.#getEmployeeIndex(firstName), 1);
  }

  getTotalSalary() {
    return this.#employees.reduce((sum, employee) => (sum += employee.salary), 0);
  }

  getEmployeesByProfession(profession) {
    return this.#employees.filter((employee) => employee.profession === profession);
  }
}

export { Employee, Company, Designer, Developer, Manager };
