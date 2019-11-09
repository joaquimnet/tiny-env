import fs from 'fs'
import rootPath from 'app-root-path'
const defaultPath: string = `${ rootPath }/.env`

class TinyEnv {
  public path: string
  public data: object = {}
  public loadEnvFile(path: string): any {
    const data = fs.readFileSync(path, 'utf-8') 
    let arr = data.split('\n'), result: any = {}
    arr.forEach(item=> {
      if (item) {
        const [key, value] = item.split('=')
        result[key] = value
      }
    })
    this.data = result
    return result
  }
  constructor (mode?: string) {
    let split: string = defaultPath
    if (mode == 'dev') {
      split = split += '.dev'
    }
    this.path = split
    this.data = this.loadEnvFile(this.path)
  }
}

export = TinyEnv