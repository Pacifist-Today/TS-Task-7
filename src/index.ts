// Визначте інтерфейс, який використовує сигнатуру індексу з типами об'єднання. Наприклад, тип значення для кожного ключа може бути число | рядок.
// Створіть інтерфейс, у якому типи значень у сигнатурі індексу є функціями. Ключами можуть бути рядки, а значеннями — функції, які приймають будь-які аргументи.
// Опишіть інтерфейс, який використовує сигнатуру індексу для опису об'єкта, подібного до масиву. Ключі повинні бути числами, а значення - певного типу.
// Створіть інтерфейс з певними властивостями та індексною сигнатурою. Наприклад, ви можете мати властивості типу name: string та індексну сигнатуру для додаткових динамічних властивостей.
// Створіть два інтерфейси, один з індексною сигнатурою, а інший розширює перший, додаючи специфічні властивості.
// Напишіть функцію, яка отримує об'єкт з індексною сигнатурою і перевіряє, чи відповідають значення певних ключів певним критеріям (наприклад, чи всі значення є числами).

interface IUnionSignature {
    [key: string]: number | string
}

const unionSignature: IUnionSignature = {
    name: "Robert",
    age: 45
}
///////////////////////////////////////////



interface IFunctionSignature {
    [key: string]: (arg: any) => {}
}

const functionSignature: IFunctionSignature = {
    calcSome(arg: any): any {}
}
/////////////////////////////////////////////



interface IObjectSignature {
    [key: number]: any
}

const objectSignature: IObjectSignature = {
    1: 'user',
    '2': 3,
    3: true
}
///////////////////////////////////////////////



interface IMixedSignature  {
    name: string
    [prop: number]: unknown
}

const mixedSignature: IMixedSignature = {
    name: "John",
    3: false
}
///////////////////////////////////////////////



interface IIndexedSignature {
    [key: number]: unknown
}

interface IAdditionalSignature extends IIndexedSignature {
    name: string
}

const additionalSignature: IAdditionalSignature = {
    1: true,
    name: 'Dimon'
}
//////////////////////////////////////////////////



const checkingOnIndexes = (obj: {[key: string]: number}): boolean | never => {
    return true
}

console.log(checkingOnIndexes(
        {
            2: 6,
            '1': 5,
            'lol': '4',
            //error
        }
    )
)