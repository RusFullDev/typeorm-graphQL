import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

const start=async()=> {

  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService)

  const PORT = config.get<number>("API_PORT")
  await app.listen(PORT||3030,()=>{
    console.log(`Server started at ${PORT}`);
  });
}
start();
