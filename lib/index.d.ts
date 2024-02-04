import { Context, Schema } from 'koishi'

export declare const name = 'logier-tarot'

export declare const using: readonly ["puppeteer"];

export declare interface Config {}

export declare const Config: Schema<Config> = Schema.object({})

export declare function apply(ctx: Context) {
  // write your plugin here
}
