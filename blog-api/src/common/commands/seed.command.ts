import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { UsersService } from '../../users/users.service';
import { PostsService } from '../../posts/posts.service';
import { getSeedData } from './getSeedData';

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

    if (users.totalCount < 1 || posts.totalCount < 1) {
      const { seedPosts, seedUsers } = getSeedData();
      try {
        await this.userService.createMany(seedUsers);
        await this.postService.createMany(seedPosts);

        console.log('DB seeded successfully!');
      } catch (e) {
        console.log('Something went wrong seeding DB');
        return;
      }
    } else {
      console.log('DB is already seeded');
      return;
    }
  }
}
