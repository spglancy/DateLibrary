class CustomDate {
  constructor(...args) {
    this.date = new Date(...args)
  }

  get year() {
    return this.date.getFullYear()
  }

  get month() {
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[this.date.getMonth()]
  }

  get day() {
    return this.date.getDate()
  }

  get hours() {
    return this.date.getHours() + 1
  }

  get mins() {
    return this.date.getMinutes() + 1
  }

  get seconds() {
    return this.date.getSeconds() + 1
  }

  format(str) {
    if (str === undefined) {
      return `${this.month}/${this.day}/${this.year}`
    }
    const copy = str.split("")
    const output = []
    copy.forEach(val => {
      switch (val) {
        case 'Y':
          output.push(this.year)
          break
        case 'y':
          output.push(Array(this.year).slice(2, 3))
          break
        case 'M':
          output.push(this.month)
          break
        case 'm':
          output.push(this.month.slice(0, 3))
          break
        case 'D':
          if (this.day < 10) {
            output.push(`0${this.day}`)
          } else {
            output.push(this.day)
          }
          break
        case 'd':
          output.push(this.day)
          break
        case 'H':
          if (this.hours < 10) {
            output.push(`0${this.hours}`)
          } else {
            output.push(this.hours)
          }
          break
        case 'h':
          output.push(this.hours)
          break
        case 'I':
          if (this.mins < 10) {
            output.push(`0${this.mins}`)
          } else {
            output.push(this.mins)
          }
          break
        case 'i':
          output.push(this.mins)
          break
        case 'S':
          if (this.seconds < 10) {
            output.push(`0${this.seconds}`)
          }
          output.push(this.seconds)
          break
        case 's':
          output.push(this.seconds)
          break
        default:
          output.push(val)
      }
    })
    return output.join("")
  }
  when(curr = new customDate) {
    const l = ['seconds', 'mins', 'hours', 'day', 'month', 'year']
    return l.reduce((acc, unit) => {
      const unitName = unit
      if (this[unit] < curr[unit]) {
        return `${curr[unit] - this[unit]} ${unitName}${curr[unit] - this[unit] === 1 ? "" : "s"} ago`
      }
      else if (this[unit] > curr[unit]) {
        return `${this[unit] - curr[unit]} ${unitName}${this[unit] - curr[unit] === 1 ? "" : "s"} from now`
      }
      return acc
    }, 'now')
  }
}

module.exports = CustomDate