import { BaseModel } from "./base.model";

export class SearchReq extends BaseModel {

    public page: number = 0;
    public limit: number = 10;
    public sort: string = 'id';
    public order: string = 'desc';
    public search_by: string = '';
    public search_value: string = '';

    constructor(obj?: any) {
        super();
        this.map(obj);
    }

    toQuery(): string {
        const search_by = this.search_by.trim()
        const search_value = this.search_value.trim()
        const offset = (this.page - 1) * this.limit;
        let query = `page=${this.page}&limit=${this.limit}&skip=${offset}&sort=${this.sort}&order=${this.order}`
        
        if(search_by && search_value) {
            query += `search_by=${search_by}&search_value=${search_value}`
        }
        return query;
    }
};

