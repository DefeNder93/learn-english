/**
 * Config service, injectable, see app.component.ts
 */
export class Config {

  private config: Object;

  get = (key?: string): string => this.config[key];

  init = (config: object) => this.config = config;
}
