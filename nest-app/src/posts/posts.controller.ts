import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { PostDto } from './dto/post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  // eslint-disable-next-line prettier/prettier
  constructor(private postsService: PostsService) { }

  @Get()
  getAll(): PostDto[] {
    return this.postsService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ParseIntPipe) id: number): PostDto {
    return this.postsService.getById(id);
  }

  @Post()
  create(@Body() post: CreatePostDto) {
    return this.postsService.create(post);
  }

  @Put()
  update(@Body() post: PostDto): PostDto {
    return this.postsService.update(post);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): PostDto {
    return this.postsService.remove(id);
  }
}
