import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { PostsService } from '../../posts/posts.service';
import { User } from '../../users/entities/user.entity';
import { seedPosts, seedUsers } from './seedData';
import { Post } from '../../posts/entities/post.entity';

@Injectable()
export class SeedCommand {
  constructor(
    private readonly userService: UsersService,
    private readonly postService: PostsService,
  ) {}

  @Command({
    command: 'seed',
    describe: 'seed database',
  })
  async seedDB() {
    const users = await this.userService.findAll({});
    const posts = await this.postService.findAll({});
    let newUsers: User[] = [];

    if (users.totalCount < 1 || posts.totalCount < 1) {
      try {
        newUsers = await this.userService.createMany(seedUsers);
      } catch (e) {
        return;
      }
    } else {
      console.log('Users/Posts already seeded');
      return;
    }

    if (newUsers.length === seedUsers.length) {
      let newPosts: Post[] = [];

      newPosts = seedPosts.map((post) => ({
        ...post,
        author:
          newUsers.find((user) => user.username === post.author)?._id ||
          newUsers[0]._id,
      }));

      try {
        await this.postService.createMany(newPosts);
      } catch (e) {
        console.log('something went wrong creating posts');
        return;
      }
    } else {
      console.log('something went wrong creating users');
      return;
    }
  }
}
