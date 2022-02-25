class ProjectUtils{

    typesToArray (types= []) {
        var tipo = ""
        types.map((item) => {
            if(tipo === ""){
                tipo = item.type.name
            } else {
                tipo = tipo + " / " + item.type.name
            }
        })
        return tipo        
    };
}

module.exports = ProjectUtils