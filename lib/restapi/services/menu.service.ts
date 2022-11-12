import HttpBaseService from '../http-base.service'
import { Menu } from '../models/menu.model';


export class MenuService {

    static async all(): Promise<Menu[]> {
        return new Promise((resolve, reject) => {
            HttpBaseService.get<any>('menus').then((response) => {
                // console.log("Promise: ",response.data.items);
                let items = response.data?.items || [];
                const data = items.map(element => {
                    return new Menu(element);
                });
                resolve(data);
            }, (err) => {
                reject(err);
            })
        })
    }

    one(id) {
        return HttpBaseService.get(`menus/${id}`)
    }

    create(data) {
        return HttpBaseService.post('menus', { menu: data })
    }

    update(id, data) {
        return HttpBaseService.put(`menus/${id}`, { menu: data })
    }

    delete(id) {
        return HttpBaseService.delete(`menus/${id}`)
    }
}