export type ApiResponse = {
    message: string;
    data: any | {
        items: any[],
        limit: number,
        next_page_link: string,
        skip: number,
        total: number,
        total_page: number
    };
};