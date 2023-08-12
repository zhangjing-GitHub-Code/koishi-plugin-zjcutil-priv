import { Context, Schema } from 'koishi'

export const name = 'zjcutil'

export interface Config {}

export const Config: Schema<Config> = Schema.object({})

export function apply(ctx: Context) {
  //ctx.on('command');
  ctx.command("ban <user:user>")
    .action((_,user)=>{
      return "receive ban user "+user;
      //_.session.bot.setGroupBan();
    })
  // write your plugin here
}
