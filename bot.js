require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()
const courseCommands = require("./courseCommands.js")
const BOT_PREFIX = "!wds-"

client.on("message", msg => {
  if (!msg.content.startsWith(BOT_PREFIX)) return

  handleCourseCommands(msg)
})

function handleCourseCommands(msg) {
  const courseCommand = courseCommands.find(courseCommand => {
    return msg.content === `${BOT_PREFIX}${courseCommand.command}`
  })

  if (courseCommand == null) return

  const role = msg.guild.roles.cache.get(courseCommand.roleId)
  if (role == null) return

  Promise.all([
    msg.member.roles.add(role),
    msg.member.send(
      `Thank you so much for your support! You have been added to the private ${courseCommand.courseName} course chat.`
    ),
    msg.delete()
  ]).catch(e => {
    console.error(e)
  })
}

client.login(process.env.BOT_TOKEN)
