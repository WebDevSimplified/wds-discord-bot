require("dotenv").config()

const Discord = require("discord.js")
const client = new Discord.Client()
const courseCommands = require("./courseCommands.js")
const BOT_PREFIX = "!wds-"

client.on("message", msg => {
  if (!msg.content.startsWith(BOT_PREFIX)) return

  handleCourseCommands(msg)
  handleAdminCommands(msg)
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

const ROLE_UPDATE_COMMAND = `${BOT_PREFIX}update-course-roles`
async function handleAdminCommands(msg) {
  if (msg.content !== ROLE_UPDATE_COMMAND) return
  if (msg.member.id !== process.env.OWNER_ID) return
  const roleIds = courseCommands.map(c => c.roleId)
  try {
    const members = await msg.guild.members.fetch()
    let index = 0
    const courseMembers = members.filter(member => {
      console.log(`Checking roles of user ${index + 1}/${members.size}`)
      index++
      return (
        member.roles.cache.find(role => roleIds.includes(role.id)) &&
        member.roles.cache.every(
          role => role.id !== process.env.GENERIC_COURSE_ROLE_ID
        )
      )
    })

    index = 0
    courseMembers.forEach(member => {
      console.log(`Adding role to user ${index + 1}/${courseMembers.size}`)
      index++
      member.roles.add(process.env.GENERIC_COURSE_ROLE_ID)
    })
  } catch (e) {
    console.error(e)
  }
}

client.login(process.env.BOT_TOKEN)
