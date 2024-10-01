AOS.init();
        let wrap_content = document.querySelectorAll(".wrap-content")
        let main_container =document.querySelectorAll(".main-container")
        let card_container = document.querySelector(".card-content")
        let about_me = document.querySelector(".about-me")
        let cards = document.querySelectorAll(".card")
        const entrepreneurs = document.querySelector(".entrepreneurs")
        const carousel_caption = document.querySelectorAll(".carousel-caption")
        console.log(main_container)
        function myFunction(x) {
            if (x.matches) { 
              //carousal_caption_adjust()
                about_me.classList.add("text-center")
                about_me.classList.remove("text-left")
               // carousel_caption.style.fontSize = "1vh"
                entrepreneurs.style.height="25vh"
                wrap_content.forEach((content)=>{
                    
                    content.classList.add  ("flex-wrap");
                })

                main_container.forEach((container)=>{
                    container.classList.remove("container")
                })

                card_container.style.padding="1vh"
            } else {
                about_me.classList.add("text-left")
               // carousel_caption.style.fontSize = "5vh"
                entrepreneurs.style.height="43vh"
                about_me.classList.remove("text-center")
                main_container.forEach((container)=>{
                    container.classList.add("container")
                })

                wrap_content.forEach((content)=>{
                    content.classList.remove ("flex-wrap");
                })
                
                }
                card_container.style.padding="7vh"
            }
          
          


          // Create a MediaQueryList object
          let x = window.matchMedia("(max-width: 900px)")
          console.log(wrap_content)

            myFunction(x);


            x.addEventListener("change", function() {
                myFunction(x);
              });
        

          let carousel_container = document.querySelector(".carousel-container")
          const images = ['0.jpg', '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']

          images.forEach((image)=>{
            let carousel_html=`<div class="carousel-item">
                <img src="/images/${image}" class="d-block w-100" alt="...">
              </div>`
              carousel_container.innerHTML += carousel_html
          })

          
        /*  function carousal_caption_adjust(){
            carousel_caption.forEach((caption)=>{
              caption.classList.remove("d-md-block")
              caption.classList.remove("d-none")
            })
          }
*/


const button = document.querySelectorAll(".btn--green")
button.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        
        window.location.href=("/register.html");
    })
})