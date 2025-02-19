export interface Product {
    name : string;
    price : number;
    quantity : number;
    image : string;
}

export interface UnitProduct extends Product {
    id : String
}

export interface Products {
    [key : string] : UnitProduct
}