module.exports = [
  {
    command: `javascript-simplified-${process.env.JAVASCRIPT_SIMPLIFIED_COMMAND_NUMBERS}`,
    roleId: process.env.JAVASCRIPT_SIMPLIFIED_ROLE_ID,
    courseName: "JavaScript Simplified",
  },
  {
    command: `react-simplified-${process.env.REACT_SIMPLIFIED_COMMAND_NUMBERS}`,
    roleId: process.env.REACT_SIMPLIFIED_ROLE_ID,
    courseName: "React Simplified",
  },
  {
    command: `typescript-simplified-${process.env.TYPESCRIPT_SIMPLIFIED_COMMAND_NUMBERS}`,
    roleId: process.env.TYPESCRIPT_SIMPLIFIED_ROLE_ID,
    courseName: "TypeScript Simplified",
  },
  // TODO: Remove learn-css-today command in a few weeks/months
  {
    command: `learn-css-today-${process.env.LEARN_CSS_TODAY_COMMAND_NUMBERS}`,
    roleId: process.env.LEARN_CSS_TODAY_ROLE_ID,
    courseName: "Learn CSS Today",
  },
  {
    command: `css-simplified-${process.env.CSS_SIMPLIFIED_COMMAND_NUMBERS}`,
    roleId: process.env.CSS_SIMPLIFIED_ROLE_ID,
    courseName: "CSS Simplified",
  },
]
