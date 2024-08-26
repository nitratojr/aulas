let rl = require('readline-sync')

export class repository{
    blob: string;
    commits: string[];
    historico: string[];
    branches: any[];

    constructor(blob:string, commits: string[], historico: string[],branches: any[]){
        this.blob = blob;
        this.commits = commits;
        this.historico = historico;
        this.branches = branches;
    }

    index(): void{
        let indexed = false;
        let quest = rl.question('Você deseja salvar seu arquivo?')
        quest = quest.toLowerCase()
        if(quest == "sim"){
            console.log("Blob salvo.")
            
                this.commits.push(this.blob)
            
            indexed = true;
        }else{
             console.log("Blobs não salvos.")
        }
    }
    Head(): void{
        console.log(this.commits[this.commits.length - 1])
    }

    branch(): void{
       this.branches.push(this.commits)
     
    }

    inserirCommit(): void{
        let Commit = rl.question("Oque deseja adicionar em Commits?")
        this.commits.push(Commit)
    }

    RemoverBlob(): void{
        this.blob = ''
    }

    GetRepository(): void{
        console.log(``)

    }

  
    inserirBlob(): void{
        let novoBlob = rl.question("Insira o novo blob");
        this.blob = novoBlob;

    }
}