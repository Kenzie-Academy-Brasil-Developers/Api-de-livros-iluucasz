export interface IBook {
    id: number;
    name: string;
    pages: number;
    category?: number;
    createdAt: Date;
    updatedAt: Date;
}

let id = 0;

export const generateId = () => {
    id++
    return id;
}