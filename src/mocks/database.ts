import { UnionType } from "typescript";
import { Episodes } from "./entities/Episodes";
import { Podcast } from "./entities/Podcast";
import { User } from "./entities/User";
import { Migrations } from "./repositores/migrations";


export interface IEpisodeData {
	podcast: Podcast,
	episode: Episodes
}

export interface IDatabase {
	findUserByEmail(email: string): User | null;
	findPodcastById(id: string): Podcast | null;
	getPodcasts(): Podcast[];
	login(email: string, password: string): boolean;
	registerUser(user: User): void;
	registerPodcast(podcast: Podcast): void;
	getPodcastEpisodes(id: string): Episodes[];
	migrate(migrations: Migrations): void;
	getEpisode(id: string): IEpisodeData | null;
}

