import { RiContrastDropLine } from "react-icons/ri";
import { IDatabase, IEpisodeData } from "../database";
import { Episodes } from "../entities/Episodes";
import { Podcast } from "../entities/Podcast";
import { User } from "../entities/User";
import { Migrations } from "./migrations";



export class Database implements IDatabase {

	public podcasts: Podcast[] = [];
	public users: User[] = [];

	findPodcastById(id: string): Podcast | null {
		const data =  this.podcasts.find( pdcast => (pdcast.id === parseInt(id)) );
		return data ? data : null;
	}

	login(email: string, password: string): boolean {
		const haveUser = this.findUserByEmail(email);

		if (haveUser) {
			const usr = this.users.find(u => (u.email === email && u.password === password));
			return usr ? true : false;
		}
		return false;
	}

	registerPodcast(podcast: Podcast): void {
		this.podcasts.push(podcast);
	}

	registerUser(user: User): void {
		this.users.push(user);
	}

	findUserByEmail(email: string): User | null {
		const usr = this.users.find(u => u.email === email);
		return usr ? usr : null;
	}
	getPodcasts(): Podcast[] {
		return this.podcasts;
	}
	migrate(migratons: Migrations) {
		migratons.run(this);
	}
	getPodcastEpisodes(id: string): Episodes[] {
		const podcast = this.podcasts.find(p => p.id === parseInt(id));

		if (podcast) {
			return podcast.episodes || [];
		}
		
		return [];
	}
	getEpisode(id: string): IEpisodeData | null {
		let ep;
		const podcast = this.podcasts.find(p => {
			
			const episodes: Episodes[] = p.episodes || [];
			const _ep = episodes.find(e => {
				return e.id === parseInt(id)
			});
			if (_ep) {
				ep = _ep;
				return true;
			}
			return false;
		});
		if (!podcast) return null;

		return {episode: ep, podcast};
	}

}
const migrations = new Migrations();
const memoryDB = new Database();

memoryDB.migrate(migrations);

export { memoryDB, migrations };