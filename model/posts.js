module.exports = {

    posts: [
        {
            id: "ASdadrfg",
            title: "Teste do Mural",
            description: "Descrição Teste"
        },
    ],

    getAll(){
        return this.posts;
    },

    newPost(title, description){
        this.posts.push({id:generateId(), title, description})
    },

    deletePost(id){

    }
}

function generateId() {
    return Math.random().toString(36).substr(2, 9);
}


// 1 - Listar todos os processos que utilizam uma porta específica: lsof -i :[Porta] lsof -i :4000

// 2 - Matar processo baseado no pid que foi listado pelo comando anterior: kill -9 [Número do pid do processo] kill -9 1112