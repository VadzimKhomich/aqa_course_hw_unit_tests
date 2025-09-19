// 1. Создайте интерфейс IEmployee {name: string, salary: number, isManager: boolean } и объект QA: IEmployee
interface IEmployee {
  name: string;
  salary: number;
  isManager: boolean;
}

const QA: IEmployee = {
    name: "Vadim",
    salary: 2000,
    isManager: false
}

// 2. Создайте тип EmployeeKeys, который будет юнионом названий ключей IEmployee (использовать keyof)
type EmployeeKeys = keyof IEmployee

// 3. Создайте тип QaKeys, который будет содержать лишь ключи объекта QA(использовать keyof и typeof)
type QaKeys = keyof typeof QA

// 4. Создайте тип UserType из объекта QA (используйте typeof)
type UserType = typeof QA

// 5. Создайте тип, в котором все поля интерфейса IEmployee будут необязательными
type IEmployeeRequired = Required<IEmployee>

// 6. Создайте тип, который будет содержать поля name и salary из интерфейса IEmployee
type IEmployeePick = Pick<IEmployee, "name" | "salary">

// 7. Создайте тип, который будет держать все поля из интерфейса IEmployee, кроме isManager
type IEmployeeOmit = Omit<IEmployee, "isManager">

// 8. Создайте тип, который будет содержать все поля из интерфейса IEmployee и сделает их неизменяемыми (readonly)
type IEmployeeReadonly = Readonly<IEmployee>

// 9. Создайте объект с помощью Record, в ключах которого будут строки, а в значениях - ключи объекта QA (Используйте Record, keyof, typeof)
type ObjectRecord = Record<string, keyof typeof QA>