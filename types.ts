export interface Owner {
  _id: string;
  name: string;
  image: string;
}

export interface Reactions {
  clown_face: string[];
  thumbs_up: string[];
  heart: string[];
  enraged_face: string[];
}

export interface Author {
  _id: string;
  name: string;
  __v: number;
  avatar: string;
  birthday: string;
  description: string;
  jp_alternative_name: string;
  jp_name: string;
  sc_instagram_link: string;
  sc_pixiv_link: string;
  sc_twitter_link: string;
}

export interface Comment {
  reactions: Reactions;
  _id: string;
  comicSlug: string;
  comicName: string;
  section: string;
  content: string;
  owner: Owner;
  isSpoil?: boolean;
  replies: Comment[];
  totalReplies: number;
  createdAt: Date;
  updatedAt: Date;
  lastEdited?: Date;
  replayTo?: string;
}

export interface Notification {
  _id: string;
  owner: Pick<Owner, "image" | "name">;
  comment: Pick<
    Comment,
    "content" | "comicName" | "comicSlug" | "section"
  > | null;
  response: Pick<Owner, "image" | "name">;
  createdAt: Date;
  updatedAt: Date;
  seen?: Date;
}

export type sources =
  | "nettruyen"
  | "lhmanga"
  | "truyenqq"
  | "mangadex"
  | "mangareader";

export interface Subscription {
  endpoint: string;
}
