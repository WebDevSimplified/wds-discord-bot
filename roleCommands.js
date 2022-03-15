module.exports = [
  {
    command: `video-notification`,
    roleId: process.env.VIDEO_NOTIFICATION_ROLE_ID,
    type: "videos",
  },
  {
    command: `event-notification`,
    roleId: process.env.EVENT_NOTIFICATION_ROLE_ID,
    type: "events",
  },
]
