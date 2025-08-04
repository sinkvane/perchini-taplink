import { IRestaurant } from './restaurant';

export interface ICity {
	name: string;
	foreignId: number;
	restaurants?: IRestaurant[];
}
