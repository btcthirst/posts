export class CreatePostDto {
  id?: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;

  constructor(title: string, content: string, author: string) {
    this.id = Date.now();
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = `${new Date()}`;
  }
}
