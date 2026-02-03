import { Module, Controller, Get } from "@nestjs/common";

@Controller()
class AppController {
  @Get()
  hello() {
    return { msg: "Nest + Fastify + Firebase 🚀" };
  }
}

@Module({
  controllers: [AppController],
})
export class AppModule {}
