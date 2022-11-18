import HttpBaseService from '../http-base.service'
import { Post } from '../models/post.model';


export class PostService {

    static async all(): Promise<Post[]> {
        return new Promise((resolve, reject) => {
            HttpBaseService.get<any>('posts').then((response) => {
                let items = response.data?.items || [];
                    if (items.length) {
                    const data = items.map(element => {
                        return new Post(element);
                    });
                    resolve(data);
                }
                resolve(null);
            }, (err) => {
                reject(err);
            })
        })
    }

    static async getBySlug(slug: string): Promise<Post> {
        return new Promise((resolve, reject) => {
            HttpBaseService.get<any>(`posts/${slug}`).then((response) => {
                const post = new Post(response.data);
                resolve(post);
            }, (err) => {
                reject(err);
            })
        })
    }

    one(id) {
        return HttpBaseService.get(`posts/${id}`)
    }

    create(data) {
        return HttpBaseService.post('posts', { post: data })
    }

    update(id, data) {
        return HttpBaseService.put(`posts/${id}`, { post: data })
    }

    delete(id) {
        return HttpBaseService.delete(`posts/${id}`)
    }
}