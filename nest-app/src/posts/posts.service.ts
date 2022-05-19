import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  fakePosts: PostDto[] = [
    new PostDto(1, 'title1', 'some litle content', 'by me', `${new Date()}`),
    new PostDto(2, 'title2', 'some litle content1', 'by me', `${new Date()}`),
    new PostDto(3, 'title3', 'some litle content2', 'by me', `${new Date()}`),
    new PostDto(4, 'title4', 'some litle content3', 'by me', `${new Date()}`),
    new PostDto(5, 'title5', 'some litle content4', 'by me', `${new Date()}`),
  ];

  getAll() {
    return this.fakePosts;
  }

  getById(id: number): PostDto {
    const result = this.fakePosts.find((el: PostDto) => el.id == id);
    return result;
  }

  create(createdPost: CreatePostDto): PostDto {
    createdPost = new CreatePostDto(
      createdPost.title,
      createdPost.content,
      createdPost.author,
    );
    const post: PostDto = new PostDto(
      createdPost.id,
      createdPost.title,
      createdPost.content,
      createdPost.author,
      createdPost.createdAt,
    );
    this.fakePosts.push(post);
    return post;
  }

  update(post: PostDto): PostDto {
    const result = this.fakePosts.map((el) => {
      if (el.id == post.id) {
        el = {
          ...el,
          title: post.title,
          content: post.content,
          author: post.author,
        };
        post = { ...el };
      }
      return el;
    });
    this.fakePosts = [...result];
    return post;
  }

  remove(id: number): PostDto {
    const index = this.fakePosts.findIndex((el) => el.id == id);
    this.fakePosts.splice(index, 1);
    return this.fakePosts.find((el) => el.id == id);
  }
}
