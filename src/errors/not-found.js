/**
 *
 * @param {Request} req
 * @param {Response} resp
 */
 const notFoundException = (req, resp) => {
    resp.statusCode = 404;
    resp.write("not found");
    resp.end();
  };

export default notFoundException;