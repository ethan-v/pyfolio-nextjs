import { BaseModel } from "./base.model";

export class Page extends BaseModel {

    public id: number = 0;
    public title: string = '';
    public slug: string = '';
    public content: string = '';
    public image: string = '';
    public is_active: boolean = false;
    public created_at: string = '';
    public updated_at: string = '';

    constructor(obj: any) {
        super();
        this.map(obj);
    }
};

