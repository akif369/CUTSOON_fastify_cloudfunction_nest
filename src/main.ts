import { NestFactory } from "@nestjs/core";
import {
  FastifyAdapter,
  NestFastifyApplication,
} from "@nestjs/platform-fastify";
import { AppModule } from "./app.module";

export async function createApp(): Promise<any> {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: false })
  );

  await app.init();

  const instance = app.getHttpAdapter().getInstance();

  if (typeof instance.ready === "function") {
    await instance.ready();
  }

  return instance;
}
