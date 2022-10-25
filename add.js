// №1
//     Реализуйте класс Worker(Работник),
//     который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы),
//     days (количество отработанных дней). Также класс должен иметь метод getSalary(),
//     который будет выводить зарплату работника.
//     Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

class worker{
    constructor(name, surname, rate, days) {
        this.name = name
        this.surname = surname
        this.rate = rate
        this.days = days
    }
    getSalary(rate, days) {
        let salary = this.rate * this.days;
        return salary}
}
const work = new worker('Аймурок', 'Досматова', 300, 20);

console.log(work.name);
console.log(work.surname);
console.log(work.rate);
console.log(work.days);
console.log(work.getSalary());

// №2. Модифицируйте класс Worker из
// предыдущей задачи следующим образом:
// сделайте все его свойства приватными,
// а для их чтения сделайте методы-геттеры.
// (подсказка используйте методы Get  и  Set)
class WorkerTypeTwo {
    #name;
    #surname;
    #rate;
    #days;
    constructor(name, surname, rate, days) {
        this.#name = name;
        this.#surname = surname;
        this.#rate = rate;
        this.#days = days;
    }
    getName() {
        return this.#name;
    }
    getSurname() {
        return this.#surname;
    }
    getRate() {
        return this.#rate;
    }
    getDays() {
        return this.#days;
    }
    getSalary(rate, days) {
        let salary = this.#rate * this.#days;
        return salary;
    }
}
workTwo = new WorkerTypeTwo('Аймурок', 'Досматова', 1000, 24);
console.log(workTwo.getName());
console.log(workTwo.getSurname());
console.log(workTwo.getRate());
console.log(workTwo.getDays());
console.log(workTwo.getSalary());