export class Item {
  _id: any;
  post_parent: number;
  post_type: string;
  post_text: string;
  post_title: string;
  post_url: string;
  author: string;
  created_at: Date;
  score: number;
  comment_on: Item[];
}
