module.exports = [
  {
    command: `add-video-notification-role`,
    roleId: process.env.VIDEO_NOTIFICATION_ROLE_ID,
    type: "videos",
  },
  {
    command: `add-event-notification-role`,
    roleId: process.env.EVENT_NOTIFICATION_ROLE_ID,
    type: "events",
  },
]
