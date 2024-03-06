const addDays = require('date-fns/addDays')
const days = d => {
  const newDate = addDays(new Date(2020, 7, 22), d)
  return `${newDate.getDate()}-${
    newDate.getMonth() + 1
  }-${newDate.getFullYear()}`
}

module.exports = days
