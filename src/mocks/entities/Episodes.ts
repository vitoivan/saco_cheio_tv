import { v4 as uuidv4 } from 'uuid';
import { Comments } from './Comments';

export class Episodes {
	public readonly id?: string | number;
	public title: string;
	public description: string;
	public date?: string = (new Date()).toLocaleDateString('pt-br');
	public image: string;
	public episodeUrl: string;
	public podcastId: string;
	public comments: Comments[]
	
	constructor(props: Episodes) {

		this.id = props.id ? props.id : uuidv4();
		this.title = props.title;
		this.description = props.description;
		this.date = props.date ? props.date : this.date;
		this.image = props.image;
		this.episodeUrl = props.episodeUrl;
		this.podcastId = props.podcastId;
		this.comments = props.comments;
	}
}