const fs = require('fs')
const axios = require('axios')

let path = process.argv[2]



class Crawling{
    constructor(path){
        this.path = path
        this.data;
    }

    rFile(){
        fs.readFile(`./${this.path}`, 'utf8', (err, data) => {
            if (err){
                console.log(err)
                return
            }
            
            this.rwFile(data.split('\n'))
            
        })
        
    }

    async rwFile(urls){
        
        for(let url of urls){
            let data = await this.getdata(url)
            console.log(typeof data === 'string')
            fs.writeFile(`./${this.getUrl(url)}`, data, err => {
                if(err){
                    console.log(err)
                }
                console.log(`Wrote to ${this.getUrl(url)}`)
            })
        }
        
    }

    async getdata(url) {
        try{
            let res = await axios.get(url)
            return res.data
        }catch(err){
            
        }
        
    }

    getUrl(url){
        let result = ''
        let startWriting = false
        for(let i = 0; i < url.length; i++){
            if(url[i] === '/'){
                startWriting = false
            }else if(url[i - 1] ==='/' && url[i - 2] === '/'){
                startWriting = true
            }
            
            if(startWriting){
                result += url[i]
            }
        }
        return result
    }
}

let b = new Crawling(path)
b.rFile()

