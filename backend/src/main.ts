import { NestFactory } from '@nestjs/onmon';
import { AppModule } from './app.module';

async function boot() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
  console.log('⚠ NestJS backend running on http://localhost:3000');
}

boot();
