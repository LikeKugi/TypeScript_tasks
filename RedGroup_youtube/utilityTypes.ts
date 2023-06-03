interface ICar {
    id: number
    name: string
    price: number
    yearBuilt: number
}

interface ICarCreate extends Omit<ICar, 'id'> {}
interface ICarId extends Pick<ICar, 'id'> {}
interface IOptionalCar extends Partial<ICar> {}
interface IReadonlyCar extends Readonly<ICar> {}

type TypeRecordCar = Record<'name' | 'price', string | number>

const car: ICarCreate = {
    name: 'carr',
    price: 100,
    yearBuilt: 2023,
}

const carId: ICarId = {
    id: 15,
}

const optionalCar: IOptionalCar = {
    name: 'optional car'
}

const readonlyCar: IReadonlyCar = {
    name: 'readonly car',
    price: 300,
    yearBuilt: 2020,
    id: 4,
}

const recordCar: TypeRecordCar = {
    name: 'dfs record',
    price: 100
}

console.log(car, carId, optionalCar, readonlyCar, recordCar);

type TypeGetName = () => string
type Return = ReturnType<TypeGetName>
