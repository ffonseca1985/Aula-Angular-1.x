
using System;
using System.Data.Common;
using System.Web.Cors;
using System.Web.Http;
using CursoAngularJs.Provider;
using Microsoft.Owin;
using Microsoft.Owin.Builder;
using Microsoft.Owin.Cors;
using Microsoft.Owin.Security.OAuth;
using Owin;
using Newtonsoft.Json.Serialization;

namespace CursoAngularJs
{
    //Nos temos que configurar o webservice da melhor forma possivel
    //A gente tem que fazer com que o cliente e o server se comuniquem
    //Da melhor forma!!
    public class Startup
    {
        //É o metoque que irá configurar a entrada e saida
        public void Configuration(IAppBuilder app)
        {
            //O Objeto de configuração
            var config = new HttpConfiguration();

            //Configurar rota
            ConfiguracaoRota(config);

            //Habilitando o Cors
            app.UseCors(CorsOptions.AllowAll);
            
            //Vamos interceptar a requisição
            ConfigureOauth(app);

            //Configurar o formato de retorno
            ConfiguracaoFormatoRetorno(config);

            //Da mesmo forma que existe um fluxo no WebForms
            //Existe no Owin
            //Colocando as minhas configurações no fluxo das requisições
            app.UseWebApi(config);
        }
        //Middleware de configuração da autenticação
        public void ConfigureOauth(IAppBuilder app)
        {
            //antes de tudo!!
            //agente tem que configurar como vai o token, tempo de expiração, formato etc
            var option = new OAuthAuthorizationServerOptions()
            {
                //Permite requisições não seguras
                AllowInsecureHttp = true,
                //O caminho que a gente tem que passar para se logar
                TokenEndpointPath = new PathString("/api/login"),
                //Tempo  de expiração
                AccessTokenExpireTimeSpan = TimeSpan.FromDays(1),
                //Provider => Esse item irá criar o token e autenticar o usuario
                Provider = new LGroupOAuthAuthorizationServerProvider()
            };

            //configurar as requisições que vem do servidor
            app.UseOAuthAuthorizationServer(option);

            //Para retornar um token Default
            app.UseOAuthBearerAuthentication(new OAuthBearerAuthenticationOptions());
        }

        //Configurando o formato de retorno
        public void ConfiguracaoFormatoRetorno(HttpConfiguration config)
        {
            // Já era o XML
            config.Formatters.Remove(config.Formatters.XmlFormatter);

            //Propriedades de serialização do Json
            var setting = config.Formatters.JsonFormatter.SerializerSettings;

            //Vou pegar a minha serialização e tranforma-la em camelCase, ou seja, 
            //igual a do Javascript
            setting.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }

        //Configurando a minha rota
        public void ConfiguracaoRota(HttpConfiguration config)
        {
            //Habilitando
            config.MapHttpAttributeRoutes();
            
            // Dada uma tabela de rotas
            // Estou definindo uma rota
            config.Routes.MapHttpRoute("Default"
                , "api/{Controller}/{id}"
                , new { id = RouteParameter.Optional});
        }
    }
}



