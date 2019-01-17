import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import { configService } from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle("Notre Blog")
    .setDescription("Le swagger de notre Blog")
    .setVersion("0.1")
    .addTag("Blog")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);

  await app.listen(configService.getNumber("PORT"));
}
bootstrap();
