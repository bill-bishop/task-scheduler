import { NestFactoryProvider } from '@nestjs/common';
import { appModule } from './app.module';

async function boot() {
  const app = await NestFactoryProvider.create(appModule);
  await app.listen(3000);
  console.log('🚀 NestJS backend running on http://localhost:3000');
}

boot();
