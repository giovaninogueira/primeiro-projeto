const faker = require('faker');
const http = require('http');
const url = require('url');

// Ele irá retornar uma nova instância da classe http.Server.
const server = http.createServer();

server.on('request', (req, resp) => {
    const parsedUrl = url.parse(req.url);
    console.log(parsedUrl);
    const randomName = faker.name.findName();
    // Escrever no corpo da resposta o nome gerado.
    resp.write(`your name - ${randomName}`);
    // encerrando o response
    resp.end();
});

// escutando requisições na porta 3000
server.listen(3000, '127.0.0.1', () => {
    console.log('Server is running');
});

// É bom ter atenção que o código que o Node.JS está executando não é 
// “atualizado automaticamente”. 
// Temos que reiniciar a aplicação sempre que alterar o código. 
// Diferentemente de outros runtimes, o Node.JS não abre uma thread ou processo para cada request. 
// As aplicações em Node.JS são single threads, seu código permanece estático e as requisições são tratadas assincronamente. 
// Ou seja, em paralelo. Mas ainda sim, sendo single thread não terá dois blocos de códigos sendo executados simultaneamente. 
// Podemos dizer que Node.JS não é recomendado para executar um código que utiliza muito recurso do processador (CPU bind), 
// mas ele é ótimo para código com muita operação de entrada / saída (I/O bind).