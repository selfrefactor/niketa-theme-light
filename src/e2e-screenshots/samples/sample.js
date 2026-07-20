// JavaScript sample with all COLOR_X levels exercised
const fs = require('node:fs')
const path = require('node:path')

// Comment (COLOR_4)
const DEFAULT_NAME = 'World' // Constant (COLOR_4) + String (COLOR_1)

function greet(name) {
  // Function declaration (COLOR_0: entity.name.function)
  const message = `Hello, ${name}!` // Template literal (COLOR_1)
  console.log(message) // Support function (COLOR_0)
  return message
}

class App {
  // Class (COLOR_0: entity.name.class)
  constructor() {
    this.name = DEFAULT_NAME // Property (COLOR_2: variable.other.property)
  }

  async run() {
    // Method (COLOR_0: entity.name.function.method)
    try {
      const data = await fs.promises.readFile(
        path.resolve(__dirname, 'data.json'),
        'utf-8',
      )
      return JSON.parse(data)
    } catch (err) {
      console.error('Failed:', err.message)
    }
  }
}

const app = new App()
export { app, greet }
