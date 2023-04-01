module.exports = [
  {
    command: `javascript-simplified-${process.env.JAVASCRIPT_SIMPLIFIED_COMMAND_NUMBERS}`,
    roleId: process.env.JAVASCRIPT_SIMPLIFIED_ROLE_ID,
    courseName: "JavaScript Simplified",
  },
  // TODO: Remove learn-react-today command in a few weeks/months
  {
    command: `learn-react-today-${process.env.LEARN_REACT_TODAY_COMMAND_NUMBERS}`,
    roleId: process.env.REACT_SIMPLIFIED_ROLE_ID,
    courseName: "React Simplified",
  },
  {
    command: `react-simplified-${process.env.REACT_SIMPLIFIED_COMMAND_NUMBERS}`,
    roleId: process.env.REACT_SIMPLIFIED_ROLE_ID,
    courseName: "React Simplified",
  },
  {
    command: `learn-css-today-${process.env.LEARN_CSS_TODAY_COMMAND_NUMBERS}`,
    roleId: process.env.LEARN_CSS_TODAY_ROLE_ID,
    courseName: "Learn CSS Today",
  },
]
