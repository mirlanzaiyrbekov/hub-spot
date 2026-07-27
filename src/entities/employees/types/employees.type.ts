export interface IEmployee {
	id: number
	firstName: string
	lastName: string
	age: number
	email: string
	phone: string
	image: string
	address: Address
	working?: boolean
	profit?: number
}

export interface Address {
	city: string
	state: string
	stateCode: string
	street: string
	postalCode: string
}
