import { BaseModel } from "./base.model";

export class Menu extends BaseModel {

    public id: number = 0;
    public title: string = '';
    public group: string = '';
    public url: string = '';
    public target: string = '';
    public is_active: boolean = false;

    constructor(obj: any) {
        super();
        this.map(obj);
    }
};

