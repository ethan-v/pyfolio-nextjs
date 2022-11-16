import HttpBaseService from '../http-base.service'
import { Page } from '../models/page.model';


export class PageService {

    static async all(): Promise<Page[]> {
        return new Promise((resolve, reject) => {
            HttpBaseService.get<any>('pages').then((response) => {
                let items = response.data?.items || [];
                    if (items.length) {
                    const data = items.map(element => {
                        return new Page(element);
                    });
                    resolve(data);
                }
                resolve(null);
            }, (err) => {
                reject(err);
            })
        })
    }

    static async getBySlug(slug: string): Promise<Page> {
        return new Promise((resolve, reject) => {
            HttpBaseService.get<any>(`pages/${slug}`).then((response) => {
                if(response?.data) {
                    const page = new Page(response?.data);
                    resolve(page);
                }
                resolve(null)
            }, (err) => {
                reject(err);
            })
        })
    }

    static async find(idOrSlug: string) {
        return HttpBaseService.get(`pages/${idOrSlug}`)
    }

    create(data) {
        return HttpBaseService.post('pages', { page: data })
    }

    update(id, data) {
        return HttpBaseService.put(`pages/${id}`, { page: data })
    }

    delete(id) {
        return HttpBaseService.delete(`pages/${id}`)
    }
}