export type ApiResponse = {
    message: string;
    data: any | {
        items: any[]
    };
};