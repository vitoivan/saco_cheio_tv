import { v4 as uuidv4 } from 'uuid';

export class Comments {
	public readonly id?: string;
	public author: string;
	public text: string;
	public episodeId: string | number;
	public date?: string = (new Date()).toLocaleDateString('pt-br');

	
	constructor(props: Comments) {

		this.id = props.id ? props.id : uuidv4();
		this.date = props.date ? props.date : this.date;
		this.author = props.author
		this.text = props.text
		this.episodeId = props.episodeId
	}
}