export type CarObject = {
    id: number;
    make: string;
    model: string;
    year: number;
    deleted_flag: null | number;
}

export type ResponseData = {
    jwt: string;
    success: boolean;
}
