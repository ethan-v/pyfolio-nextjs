import HttpBaseService from '../http-base.service'
import { Setting } from '../models/setting.model';


export class SettingService {

    static async all(limit: number = 10): Promise<Setting[]> {
        return new Promise((resolve, reject) => {
            HttpBaseService.get<any>('settings').then((response) => {
                let items = response.data?.items || [];
                    if (items.length) {
                    const data = items.map(element => {
                        return new Setting(element);
                    });
                    resolve(data);
                }
                resolve(null);
            }, (err) => {
                reject(err);
            })
        })
    }
}