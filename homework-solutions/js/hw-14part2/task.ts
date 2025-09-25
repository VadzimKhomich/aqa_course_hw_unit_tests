interface IDepartment {
  id?: number;
  name: string;
  employees_count: number;
}

interface IEnterprise {
  id?: number;
  name: string;
  departments: IDepartment[];
}

class Department implements IDepartment {
  constructor(
    readonly name: string,
    readonly employees_count: number,
  ) {}
}

class Enterprise implements IEnterprise {
  readonly departments: IDepartment[] = [];
  constructor(readonly name: string) {}
}

abstract class AbstreactStorage {
  protected enterprises: IEnterprise[] = [];
  protected id: number = 1;
  constructor(...dataEnterprises: IEnterprise[]) {
    this.addEnterprises(...dataEnterprises);
  }
  abstract addEnterprises(...enterprises: IEnterprise[]): void;
  abstract getEnterpriseById(idEnterprise: IEnterprise['id']): IEnterprise;
  abstract addDepartments(idEnterprise: IEnterprise['id'], ...departments: IDepartment[]): void;
  abstract deleteEnterprise(idEnterprise: IEnterprise['id']): void;
  abstract getEnterprisesInfo(): string;
  abstract getEnterpriseByDepartmentIDorName(
    searchParametr: IDepartment['id'] | IDepartment['name'],
  ): IEnterprise['name'];
  abstract deleteDepartment(idDepartment: IDepartment['id']): void;
  abstract getDepartment(idDepartment: IDepartment['id']): IDepartment;
  abstract editDepartment(idDepartment: IDepartment['id'], nameDepartment: string): void;
  abstract getEnterprises(): IEnterprise[];
  abstract moveEmployees(fromIdDepartment: IDepartment['id'], toIdDepartment: IDepartment['id']): void;
}

class EnterpriseStorage extends AbstreactStorage {
  addEnterprises(...enterprises: IEnterprise[]): void {
    for (const enterprise of enterprises) {
      const enterpriseName = enterprise.name.trim();
      const findedEnterprise = this.enterprises.find(({ name }) => name === enterpriseName);
      if (findedEnterprise) {
        throw new Error(`Предприятие с именем ${enterpriseName} уже существует`);
      }
      this.enterprises.push({
        ...enterprise,
        id: this.id,
      });
      this.id++;
    }
  }

  addDepartments(idEnterprise: IEnterprise['id'], ...departments: IDepartment[]) {
    const enterprise = this.getEnterpriseById(idEnterprise);
    for (const department of departments) {
      const departmentName = department.name.trim();
      const findedDepartment = enterprise.departments.find(({ name }) => name === departmentName);
      if (findedDepartment) {
        throw new Error(`Отдел с именем ${findedDepartment} уже существует`);
      }
      enterprise.departments.push({
        ...department,
        id: this.id,
      });
      this.id++;
    }
  }

  getEnterpriseById(idEnterprise: IEnterprise['id']): IEnterprise {
    const enterprise = this.enterprises.find(({ id }) => id === idEnterprise);
    if (!enterprise) {
      throw new Error(`Предприятие с id ${idEnterprise} не найдено`);
    }
    return enterprise;
  }

  deleteEnterprise(idEnterprise: IEnterprise['id']): void {
    const index = this.enterprises.findIndex(({ id }) => id === idEnterprise);
    if (index === -1) {
      throw new Error(`Предприятие с id ${idEnterprise} не найдено`);
    }
    this.enterprises.splice(index, 1);
  }

  getEnterprisesInfo(): string {
    let result = ``;
    this.enterprises.forEach((enterprise) => {
      let employeesSum = enterprise.departments.reduce((sum, department) => (sum += department.employees_count), 0);
      result += `${enterprise.name} (${employeesSum ? employeesSum : 'нет'} сотрудников)\n`;
      enterprise.departments.forEach(({ name, employees_count }) => {
        if (name === 'Администрация') {
          result += `- ${name} (${employees_count ? employees_count : 'нет'} человек)\n`;
        } else {
          result += `- ${name} (${employees_count ? employees_count : 'нет'} сотрудников)\n`;
        }
      });
    });
    return result.slice(0, -1);
  }

  getEnterpriseByDepartmentIDorName(searchParametr: IDepartment['id'] | IDepartment['name']): IEnterprise['name'] {
    const enterprise = this.enterprises.find(({ departments }) => {
      return departments.find(({ id, name }) => name === searchParametr || id === searchParametr);
    });
    if (!enterprise) {
      throw new Error(`Предприятие не найдено`);
    }
    return enterprise.name;
  }

  deleteDepartment(idDepartment: IDepartment['id']): void {
    let indexToDelete: number | undefined = undefined;
    let indexEnterprise: number | undefined = undefined;
    const enterprise = this.enterprises.find(({ departments }, index) => {
      indexEnterprise = index;
      return departments.find(({ id, employees_count }, depIndex) => {
        if (id === idDepartment) {
          if (employees_count) {
            throw new Error('Удалить можно только отдел с 0 сотрудниками');
          }
          indexToDelete = depIndex;
          return true;
        }
      });
    });
    if (!enterprise || indexToDelete === undefined || indexEnterprise === undefined) {
      throw new Error(`Отдел для удаления не найден `);
    }
    this.enterprises[indexEnterprise].departments.splice(indexToDelete, 1);
  }

  getDepartment(idDepartment: IDepartment['id']): IDepartment {
    let targetDepartment;
    this.enterprises.forEach(({ departments }) => {
      departments.forEach((department) => {
        if (department.id === idDepartment) {
          targetDepartment = department;
        }
      });
    });
    if (!targetDepartment) {
      throw new Error('Отдел не найден');
    }
    return targetDepartment;
  }

  editDepartment(idDepartment: IDepartment['id'], nameDepartment: string) {
    const department = this.getDepartment(idDepartment);
    department.name = nameDepartment.trim();
  }

  getEnterprises(): IEnterprise[] {
    return this.enterprises;
  }

  moveEmployees(fromIdDepartment: IDepartment['id'], toIdDepartment: IDepartment['id']): void {
    const enterprise1 = this.getEnterpriseByDepartmentIDorName(fromIdDepartment);
    const enterprise2 = this.getEnterpriseByDepartmentIDorName(toIdDepartment);
    if (enterprise1 !== enterprise2) {
      throw new Error('Перенос сотрудников доступен только в рамках одного предприятия');
    }
    const fromDepartment = this.getDepartment(fromIdDepartment);
    const toDepartment = this.getDepartment(toIdDepartment);

    toDepartment.employees_count += fromDepartment.employees_count;
    fromDepartment.employees_count = 0;
  }
}

const storage = new EnterpriseStorage(
  new Enterprise('Предприятие 1'),
  new Enterprise('Предприятие 2'),
  new Enterprise('Предприятие 3'),
);

storage.addDepartments(
  1,
  new Department('Отдел тестирования', 10),
  new Department('Отдел маркетинга', 20),
  new Department('Администрация', 15),
);

storage.addDepartments(
  2,
  new Department('Отдел paзработки', 50),
  new Department('Отдел маркетинга', 20),
  new Department('Отдел охраны труда', 5),
);


