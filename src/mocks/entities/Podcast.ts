import { AiOutlineConsoleSql } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';
import { Episodes } from './Episodes';

export class Podcast {
	public readonly id?: string | number;
	public title: string;
	public host: string;
	public description: string;
	public banner: string;
	public apresentation: string;
	public image: string;
	public date?: string = "";
	public episodes?: Episodes[] = [];

	constructor(props: Podcast) {
	

		this.id = props.id ? props.id : uuidv4();
		this.title = props.title;
		this.host = props.host;
		this.description = props.description;
		this.banner = props.banner;
		this.apresentation = props.apresentation;
		this.image = props.image;
		this.date = props.date;
		this.episodes = props.episodes ? props.episodes : [];
	}
}
