class D {
  constructor(...args) {
    this.date = new Date(...args)
  }

  year() {
    return this.date.getFullYear()
  }

  month() {
    const months = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return months[this.date.getMonth()]
  }

  day() {
    return this.date.getDate()
  }

  hours() {
    return this.date.getHours() + 1
  }

  mins() {
    return this.date.getMinutes() + 1
  }

  seconds() {
    return this.date.getSeconds() + 1
  }

  format(str) {
    if (str === undefined) {
      return `${this.month} ${this.date} ${this.year}`
    }
    copy = Array(str)
    output = []
    copy.forEach(val => {
      switch (val) {
        case 'Y':
          output.push(this.year())
          break
        case 'y':
          output.push(Array(this.year()).slice(2, 3))
          break
        case 'M':
          output.push(this.month())
          break
        case 'm':
          output.push(Array(this.month()).slice(0, 2))
          break
        case 'D':
          output.push()
          break
        case 'd':
          output.push(this.day())
          break
        case 'H':
          output.push()
          break
        case 'h':
          output.push(this.hours())
          break
        case 'I':
          output.push()
          break
        case 'i':
          ouptut.push(this.mins())
          break
        case 'S':
          output.push()
          break
        case 's':
          output.push(this.seconds())
          break
        default:
          output.push(val)
      }
    })
  }
  when() {

  }
}