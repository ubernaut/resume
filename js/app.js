        window.toggleDark = () => {
                let body = document.getElementById("body");
                if(body.getAttribute("class")== "crt light"){
                        body.setAttribute("class", "crt dark");
                }else{
                        body.setAttribute("class", "crt light");
                }
        }
        
         console.log("works");
         window.addEventListener('load', () => {
                  registerSW();
                });
            
                // Register the Service Worker
                async function registerSW() {
                  if ('serviceWorker' in navigator) {
                    try {
                      await navigator
                            .serviceWorker
                            .register('serviceworker.js');
                    }
                    catch (e) {
                      console.log('SW registration failed');
                    }
                  }
                }
        