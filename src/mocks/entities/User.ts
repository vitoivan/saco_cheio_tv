import { v4 as uuidv4 } from 'uuid';

export class User {
	public readonly id?: string | number;
	public email: string;
	public password: string;
	public name: string;

	constructor(props: User) {
		
		this.id = props.id ? props.id : uuidv4();
		this.email = props.email;
		this.password = props.password;
		this.name = props.password;
	}
}