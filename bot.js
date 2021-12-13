require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()
const courseCommands = require("./courseCommands.js")
const roleCommands = require("./roleCommands.js")
const BOT_PREFIX = "!wds-"

client.on("message", msg => {
  if (!msg.content.startsWith(BOT_PREFIX)) return

  handleCourseCommands(msg)
  handleRoleCommands(msg)
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
    msg.member.roles.add(process.env.GENERIC_COURSE_ROLE_ID),
    msg.member.send(
      `Thank you so much for your support! You have been added to the private ${courseCommand.courseName} course chat.`
    ),
    msg.delete(),
  ]).catch(e => {
    console.error(e)
  })
}

function handleRoleCommands(msg) {
  const roleCommand = roleCommands.find(roleCommand => {
    return msg.content === `${BOT_PREFIX}${roleCommand.command}`
  })

  if (roleCommand == null) return

  const role = msg.guild.roles.cache.get(roleCommand.roleId)
  if (role == null) return

  Promise.all([
    msg.member.roles.add(role),
    msg.member.send(
      `You will now be notified when new ${roleCommand.type} are posted.`
    ),
    msg.delete(),
  ]).catch(e => {
    console.error(e)
  })
}

client.login(process.env.BOT_TOKEN)
