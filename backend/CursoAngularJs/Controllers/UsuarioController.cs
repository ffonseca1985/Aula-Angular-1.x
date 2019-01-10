using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CursoAngularJs.Models;

namespace CursoAngularJs.Controllers
{
    // A nossa primeira api que irá se comunicar com o angular
    //api/Usuario
    [Authorize]
    public class UsuarioController : ApiController
    {
        public HttpResponseMessage Get()
        {
            //Retornar o modelo
            var usuarios = UsuarioModel.GetAll();
            //Retornar uma resposta para o usuario
            var response = Request.CreateResponse(HttpStatusCode.OK, usuarios);

            //Retornar na api
            return response;
        }

        public HttpResponseMessage Get(int id)
        {
            //Retornar o modelo
            var usuarios = UsuarioModel.GetAll().FirstOrDefault(x=>x.Id == id);
            //Retornar uma resposta para o usuario
            var response = Request.CreateResponse(HttpStatusCode.OK, usuarios);

            //Retornar na api
            return response;
        }


        public HttpResponseMessage Post(UsuarioModel usuario)
        {
            //Adicionando os usuarios
            var user = UsuarioModel.Add(usuario);

            //Criar uma reposta para o client
            var response = Request.CreateResponse(HttpStatusCode.OK, user);

            //Retornando os Dados
            return response;
        }
    }
}
