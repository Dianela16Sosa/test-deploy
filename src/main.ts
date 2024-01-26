import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //app.setGlobalPrefix('api');

  //Pipe a nivel de aplicación
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true, //Error si se manda data que no se espera
    }),
  );

  //Configurar CORS
  const whiteList = [process.env.FRONTEND_URL, "http://localhost:5173", "http://127.0.0.1:5173"];
  /*const corsOptions = {
    origin: function(origin, callback) {
        if (whiteList.includes(origin)) {
            //Puede consultar la API
            callback(null, true);
        } else {
            //No puede consultar la API
            callback(new Error("Error de CORS"));
        }
    },
  };

  app.enableCors(corsOptions);*/
  app.enableCors({
    origin: whiteList
  });

  //OpenApi
  const config = new DocumentBuilder()
  .setTitle('MatchCar Example')
  .setDescription('MatchCar Endpoints')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap();
