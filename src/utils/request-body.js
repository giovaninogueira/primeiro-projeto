const extractBody = async (request) => {
  return new Promise((resolve) => {
    let body = "";
    // setando o encondig da request para utf-8
    request.setEncoding("utf-8");

    // concatenando
    request.on("data", (chunk) => (body += chunk));

    // encerrando a concatenação
    request.on("end", () => {
      if (request.headers["content-type"] === "application/json") {
        return resolve(JSON.parse(body));
      }
      return resolve(body);
    });
  });
};

export default extractBody;
