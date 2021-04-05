import { Product } from "../structuredirective/Iproduct";

export interface PurcahseItem{
    purchaseId: number,
    purchaseTitle :string,
    purchaseDate: string,
    vendorname : string,
    items : Product[],
}