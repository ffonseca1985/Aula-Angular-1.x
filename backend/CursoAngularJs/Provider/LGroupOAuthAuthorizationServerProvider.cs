using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.OAuth;

namespace CursoAngularJs.Provider
{
    public class LGroupOAuthAuthorizationServerProvider
        : OAuthAuthorizationServerProvider
    {
        //Valida o cliente
        public override Task ValidateClientAuthentication(
            OAuthValidateClientAuthenticationContext context)
        {
            //Estamos deixando passar tudo
            context.Validated();
            return Task.FromResult<object>(null);
        }

        //Valida os dados que estão vindo do cliente
        public override Task GrantResourceOwnerCredentials(
            OAuthGrantResourceOwnerCredentialsContext context)
        {
            //Podemos pegar os dados do usuario pela requisição
            var password = context.Password;
            var userName = context.UserName;

            //Validar dados
            if (password != "123456" || userName != "ffonseca")
            {
                context.SetError("invalid_grant", "usuario inválido");
            }
            else
            {
                //Criar uma identidade para o usuario
                var claim1 = new Claim(ClaimTypes.Name, "Fábio Fonseca");
                var claim2 = new Claim(ClaimTypes.Role, "Administrador");
                var lst = new List<Claim>()
                {
                    claim1,
                    claim2
                };
                //Criando uma identidade para o usuário
                var identidade = new ClaimsIdentity(lst, context.Options.AuthenticationType);

                //Criando o token
                var token = new AuthenticationTicket(identidade, 
                    Properties("Fábio Fonseca"));

                context.Validated(token);
            }

            return Task.FromResult<object>(null);
        }
        //Para adicionar as propriedades no response, preciso implementar o método abaixo
        public override Task TokenEndpoint(OAuthTokenEndpointContext context)
        {
            foreach (var propert in context.Properties.Dictionary)
            {
                context.AdditionalResponseParameters.Add(propert.Key, propert.Value);
            }
            return Task.FromResult<object>(null);
        }

        private static AuthenticationProperties Properties(string usuario)
        {
            IDictionary<string, string> dict = new Dictionary<string, string>()
            {
                {"Usuario", usuario}
            };

            return new AuthenticationProperties(dict);
        }
    }
}