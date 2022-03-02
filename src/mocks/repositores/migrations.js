import { Podcast } from "../entities/Podcast";
import { User } from "../entities/User";
import commentsJSON from '../Comments.json';
import usersJSON from '../Users.json'
import epsJSON from '../Episodres.json'
import poscastsJSON from '../Podcasts.json';

import { Comments } from "../entities/Comments";
import { Episodes } from "../entities/Episodes";

export class Migrations {
	users = []
	podcasts  = [];

	constructor() {
		
		const comments = commentsJSON.map(c => new Comments(c));
		const users = usersJSON.map(u => new User(u));
		
		const eps = epsJSON.map(ep => {
			const cmts = comments.filter(c => c.episodeId === ep.id);
			ep.comments = cmts;
			return new Episodes(ep);
		})
		const allPodcasts = poscastsJSON.map(pod => {
			
			const epsArr = eps.filter(e => e.podcastId === pod.id);
			pod.episodes = epsArr;
			const newPod =  new Podcast(pod);
			return newPod
		})
		
		this.podcasts = allPodcasts;
		this.users = users;
	}

	run(db) {
		db.users = this.users;
		db.podcasts = this.podcasts;
		localStorage.setItem('@saco-cheio-podcasts', JSON.stringify(this.podcasts))
	}
}