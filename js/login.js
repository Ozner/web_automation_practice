$(document).ready(function(){
        var user = $("#exampleInputEmail");
        var pass = $("#exampleInputPassword");
        var check = $("#customCheck");
        var ok_user = false;
        var ok_pass = false;

        $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").hide();
        $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(2) > span").hide();
        $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > button").on('click', entrar);

        function entrar(){
          if(user.val() == ""){
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").show();
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").html("Ingrese su email");
            ok_user = false;
          } else{
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").hide();
            if(validarEmail(user.val())){
              ok_user = true;
            }
          }


          if(pass.val() == ""){
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(2) > span").show();
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(2) > span").html("Ingrese el password");
            ok_pass = false;
          } else {
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(2) > span").hide();
            if(ok_user == true) {
              validarUser(user.val(),pass.val());
            }
          }
        }

        function validarEmail(email){
            var caract = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);
            if (caract.test(email) == false){
                $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").show();
                $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").html("El email no tiene formato correcto");
                return false;
            } 
                
            return true;
        }

        function validarUser(u, p){
          if(u == "test01@prueba.com" && p == "123456") {
            window.location.href = window.location.origin + "/curso_automation/index.html";
          } else {
            alert("El usuario o password no son correctos");
            user.val("");
            pass.val("");
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(1) > span").hide();
            $("body > div > div > div > div > div > div > div:nth-child(2) > div > form > div:nth-child(2) > span").hide();
          }
        }

        var prueba = "hola mundo";

    });