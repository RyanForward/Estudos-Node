const path = require('path');

console.log(path.basename('c:\\temp\\arquivo.html'));  //mostra o arquivo final
console.log(path.normalize('c:\\temp/dir//subdir/dir/..')); //arruma o caminho para o padrão
console.log('join path: ', path.join('/teste', 'teste2', 'teste3/teste4', 'dir2', '..')); //une o caminho e ajusta para o padrão

console.log('resolve; ', path.resolve('path.js')); //trás o caminho até o arquivo onde estou executando o código. O nome colocado dentro dos parênteses deve ser o nome do arquivo. ESSA LINHA NÃO ENCONTRA ARQUIVOS!!!


console.log('Extension: ', path.extname('path.js'));