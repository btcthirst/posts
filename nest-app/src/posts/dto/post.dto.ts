export class PostDto {
  id: number;
  title: string;
  content: string;
  author: string;
  createdAt: string;

  constructor(
    id: number,
    title: string,
    content: string,
    author: string,
    createdAt: string,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.author = author;
    this.createdAt = createdAt;
  }
}
