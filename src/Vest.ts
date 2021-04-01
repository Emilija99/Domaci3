export class Vest{
    public naslov:string;
    public datumVreme:Date;
    public sadrzaj:string;

    constructor(naslov:string,dat:Date,sadrzaj:string)
    {
        this.naslov=naslov;
        this.datumVreme=dat;
        this.sadrzaj=sadrzaj;
    }
    
}