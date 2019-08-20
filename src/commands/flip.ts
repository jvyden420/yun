import { Command } from "discord-akairo";
import { Message } from "discord.js";
export default class extends Command {
  constructor() {
    super("flip", {
      aliases: ["flip"],
      description: "Flips a coin.",
      editable: true
    });
  }
  public async exec(message: Message) {
    const answers = ["Heads", "Tails"];
    const ra = Math.floor(Math.random() * answers.length);
    return message.channel.send(`You flipped: ${answers[ra]}`)
  }
}
