import HttpBaseService from '../http-base.service'
import { Post } from '../models/post.model';
import { ApiResponse } from '../models/response.model';
import { SearchReq } from '../models/search-request.model';


export class PostService {

    static async all(searchReq: SearchReq): Promise<any> {
        return new Promise((resolve, reject) => {
            const url = `/posts?${searchReq.toQuery()}`
            HttpBaseService.get<any>(url).then((response) => {
                let data = response.data
                let items = data?.items || [];
                if (items.length) {
                    data.items = items.map(element => {
                        return new Post(element);
                    });
                }
                resolve(data);
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