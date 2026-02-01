"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = createApp;
const core_1 = require("@nestjs/core");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const app_module_1 = require("./app.module");
async function createApp() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, new platform_fastify_1.FastifyAdapter({ logger: false }));
    await app.init();
    const instance = app.getHttpAdapter().getInstance();
    if (typeof instance?.ready === "function") {
        await instance.ready();
    }
    return instance;
}
//# sourceMappingURL=main.js.map