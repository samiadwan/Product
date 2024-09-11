export class Product{
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: any;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: any[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: any;
    thumbnail: string;
    images: string[];
  
    constructor() {
      this.id = 0;
      this.title = '';
      this.description = '';
      this.category = '';
      this.price = 0;
      this.discountPercentage = 0;
      this.rating = 0;
      this.stock = 0;
      this.tags = [];
      this.brand = '';
      this.sku = '';
      this.weight = 0;
      this.dimensions = { width: 0, height: 0, depth: 0 };
      this.warrantyInformation = '';
      this.shippingInformation = '';
      this.availabilityStatus = '';
      this.reviews = [];
      this.returnPolicy = '';
      this.minimumOrderQuantity = 0;
      this.meta = { createdAt: '', updatedAt: '', barcode: '', qrCode: '' };
      this.thumbnail = '';
      this.images = [];
    }
}