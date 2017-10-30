export class Item {
  id: number;
  post_parent: number;
  post_type: string;
  post_text: string;
  post_title: string;
  post_url: string;
  post_author: string;
  created_at: Date;
  score: number;
  comments: Item[];
}
