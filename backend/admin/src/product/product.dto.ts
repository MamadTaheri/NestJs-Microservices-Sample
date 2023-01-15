export interface ProductDto {
  id: number;
  title: string;
  image: string;
  likes: number;
}

export type createOrUpdateProductDto = Omit<ProductDto, 'id'>;
