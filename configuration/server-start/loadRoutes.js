const path = require('path');
const fs = require('fs');
let app;

module.exports = function(server, args) {
    app = server;
    args.forEach(pathItem => {
        intoList(pathItem.path)
    });
}

function intoList(dir_path) {
    //Check for folder/file existence
    if(fs.existsSync(dir_path)) {
        //Look inside of folder if found
        goDeeper(dir_path);
    }else {
        //Create folder in case it's not there yet
        fs.mkdir(dir_path, { recursive: true }, (err) => {
            if (err) throw err;
        });
    }
}

function goDeeper(dir_path = path) {
    //Make an array from file/folder names in directory
    const list = fs.readdirSync(dir_path, 'utf-8');
    
    //Lookup at each of the elements
    list.forEach(item => {
        current_path = path.join(dir_path, item);
        //Distinguish between folder and file source
        if(fs.statSync(current_path).isDirectory()) {
            //If directory => begin again until none left => (Recursive alg)
            goDeeper(current_path)
        }else {
            //File found!
            //Check for file type
            //if type == js => register in app
            
            if(`${current_path}`.split('.').reverse()[0] == "js") {
                if(require(current_path).router?.name == "router") {
                    
                    require(current_path)['router'].stack?.forEach(el => {
                        console.log(
                            "Registering ".reset + 
                            (require(current_path)["pre_route"]?.cyan || "") +
                            el['route']?.path?.cyan + 
                            " as a valid path. Method: ".reset +
                            el['route']?.stack[0]?.method.yellow
                        )
                    })
                    app.use(require(current_path)["pre_route"] || "", require(current_path)["router"])
                }
            }
        }
    })
}