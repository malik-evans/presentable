import {Injectable} from '@nestjs/common';

/**
 * App Service
 */
@Injectable()
export class AppService {

  /**
   * Root method returning root state from {@link AppService}
   *
   * {@link https://github.com/malik-evans/presentable/blob/308cfdc8117767532b592ed9e31bc7e900e4454b/src/server/app/app.service.ts#L7-L10 | View Source}
   */
  root(): string {
    return 'Hello World!';
  }
}
