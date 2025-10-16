import { ISearch } from "../dto/search";
import { IStream } from "../dto/stream";
import { ITrending } from "../dto/trending";

abstract class BaseScrapper {
  abstract base_url: string;
  abstract headers: {
    Origin: string;
    Referer: string;
  };
  abstract getStreams(id: string): Promise<IStream>;
  abstract getSearch(id: string, page?: string): Promise<ISearch[]>;
  abstract getTrending(id: string, page?: string): Promise<ITrending[]>;
}

export { BaseScrapper };
