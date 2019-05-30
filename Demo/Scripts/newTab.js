document.addEventListener('DOMContentLoaded', function () {
    console.log("made it to new tab");
    chrome.runtime.onMessage.addListener(function(request){
        console.log(request.msg);
        var url = request.msg;
        var id = request.id;
        document.getElementById("parsely").innerText = ("Parsely displaying " + url);
        var xhr = createCORSRequest('GET', url);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == XMLHttpRequest.DONE) {
              let doc = new DOMParser().parseFromString(xhr.responseText, 'text/html');
              document.body = doc.body;
              var recipe = $("div").find("*[class*='recipe']");
              closest = getClosest(recipe, id);
              if(id === 5){
                funkyTown(closest);
              }
              else{
                parse(closest, recipe);
              }
              cleanup(id, url);
            }
        }
        xhr.send();
    });

    function createCORSRequest(method, url) {
        var xhr = new XMLHttpRequest();
        if ("withCredentials" in xhr) {
          xhr.open(method, url, true);
        } 
        else {
          xhr = null;
        }
        return xhr;
      }

      function parse(closest,recipe){
        closest.children().not(recipe).toggle();
        $("style").hide();
        $("script").hide();
        $("div[class*='adthrive' i]").toggle();
        $("div[class*='hidden']").toggle();
        $("*[class*='tlod'").toggle();
        $("*[class*='widget'").toggle();
        $("div[class*='comment']").toggle();
      }

      function getClosest(r, id){
        if(id === 1){
          closest = r.closest("div[class$='content']");
          return closest;
        }
        else if(id === 2){
          closest = r.closest("article[class$='content']");
          return closest;
        }
        else if(id === 3){
          closest = $(r).parent();
          return closest;
        } 
        else if(id === 4){
          closest = r.closest("div[class*='single']");
          return closest;
        }
        else if(id === 5){
          closest = $(r).parent();
          return closest;
        }
      }

      function cleanup(id, url){
        if(id === 1){
          $("img[class*='wp-image' i]").remove();
          $("p[class='entry-category']").remove();
          $("svg").find("*").remove();
          $("ul[class*='mainmenu']").remove();
        }
        else if(id === 2){
          if(url.indexOf("averie") > -1){
            pAndH2();
          }
          else{
            $("img[class*='wp-image' i]").toggle();
          }
        }
        else if(id === 3){
          $("img[class*='wp-image' i]").toggle();
          $("div[class$='description']").toggle();
          $("div[id='cmh']").remove();
          $("*[class*='footer']").remove();
        } 
        else if(id === 4){
          //do nothing
        }
        else if(id === 5){
          //funkyTown
        }
      }

      function funkyTown(parent){
        $(parent).children().not("div[class*='itr']").toggle();
      }

      function pAndH2(){
        $("p").toggle();
        $("h2").toggle();
    }
      
});