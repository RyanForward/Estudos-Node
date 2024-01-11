
function execute(){
    executeTo();
}

function executeTo(){
    throw new Error("erro no server"); 
}

function init(){
    try {
        execute()
    } catch (error) {
        console.log(`Problema:`, error.message);
    }
}

init();
console.log("Depois do erro");