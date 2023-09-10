import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// 가장 처음 실행
async function bootstrap() {
  const app = await NestFactory.create(AppModule); // AppModule 안에 실행할 모든 내용들이 포함
  await app.listen(3000);
}
bootstrap();
