import { BaseModel } from "./base.model";

export class Setting extends BaseModel {

    public id: number = 0;
    public key: string = '';
    public value: string = '';
    public name: string = '';
    public created_at: string = '';
    public updated_at: string = '';

    constructor(obj: any) {
        super();
        this.map(obj);
    }
};

