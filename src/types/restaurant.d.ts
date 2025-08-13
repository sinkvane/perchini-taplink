export interface IRestaurant {
	id: number;
	name: string;
	address: string;
	openHours: string;
	businessLunch?: string;
	menuUrl?: string;
	specialtyUrl?: string;
	PhoneNumber: IPhonesNumber[];
}

export interface IPhonesNumber {
	id: number;
	phones: string;
}
