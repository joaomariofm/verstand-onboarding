import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function main() {
  const app = await NestFactory.create(MainModule);
	app.enableCors()
  await app.listen(3000);
}

main();
