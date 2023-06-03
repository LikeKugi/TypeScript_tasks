type TypeIsNumber<T> = T extends number ? 'yes' : 'no';

type Type1 = TypeIsNumber<number>
type Type2 = TypeIsNumber<string>

type TypeBrand = 'one' | 'two' | 'three'
type TypeValue = 1 | 2 | 3

type UnionType = `${TypeBrand} ${TypeValue}`;

const val1: UnionType = 'two 3'
console.log(val1);
