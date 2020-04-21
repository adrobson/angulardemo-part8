export class Country{

    public CountryId:number ;

    public CountryName:string;

}

 

export class Stock{

    public StockId:number;

    public CountryName:string;

    public CountryId:number ;

}

 

export class Fund{

    public FundId:number;

    public CountryName:string;

    public CountryId:number ;

}

export class MockAPICountryList{

    countrys:Country[];

}