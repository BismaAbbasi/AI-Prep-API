import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,        // Strips properties that do not have any decorators
    forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are present
    transform: true,        // Automatically transforms payloads to DTO instances
  }));

  const config = new DocumentBuilder()
    .setTitle('AI Prep Api')
    .setDescription('AI powered interview and study assistant by Bisma Abbasi')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
