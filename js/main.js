$(document).ready(function(){
    let imgLoaded = 0;
    let totalImg = imagesLoaded('body').images.length;
    
    setInterval(()=>{

    })
    $('body').imagesLoaded()
        .done( function( instance ) {
            $('.bg-wrap').css("opacity",0)
            setTimeout(() => {
                $('.loading-page').css("display","none");
                $('body').css("overflow","visible")
            }, 1000);
        })
        .progress( function() {
            
          imgLoaded++;
          let LoeadingRatio = Math.floor(imgLoaded/totalImg * 100);
          $('.dark-box').css("width",`${100-LoeadingRatio}%`) 
          $('.loading').html(LoeadingRatio + "%") 
        });

        
    
  
 
    $(window).resize(function(){
        $('.h-line1').css("top",`${$('.shoes-box3').offset().top-$('.shoes-visual1').offset().top}px`)
        $('.star1').css("top",`${$('.shoes-box3').offset().top-$('.shoes-visual1').offset().top}px`)
        $('.h-line2').css("top",`${$('.shoes-box5').offset().top-$('.shoes-visual1').offset().top}px`)
        $('.star2').css("top",`${$('.shoes-box5').offset().top-$('.shoes-visual1').offset().top}px`)
        })
        $('.h-line1').css("top",`${$('.shoes-box3').offset().top-$('.shoes-visual1').offset().top}px`)
        $('.star1').css("top",`${$('.shoes-box3').offset().top-$('.shoes-visual1').offset().top}px`)
        $('.h-line2').css("top",`${$('.shoes-box5').offset().top-$('.shoes-visual1').offset().top}px`)
        $('.star2').css("top",`${$('.shoes-box5').offset().top-$('.shoes-visual1').offset().top}px`)

        let boolean = true;
        $('.m-menu').click(function(){
            if(boolean){
                $('body').addClass('stopscroll').on('scroll touchmove mousewheel', function(e){
                e.stopPropagation();
                e.preventDefault();
                
                return false
                });
                
                
                $('.line-wrap').addClass('on')
                $('.m-nav-list').addClass('on')
                setTimeout(()=>{
                    $('.line-wrap').addClass('on2')
                },250)
                boolean = false;
            }else{
                $('body').removeClass('stopscroll').off('scroll touchmove mousewheel');
                
                $('.m-nav-list').removeClass('on')
                
                $('.line-wrap').removeClass('on2')
                setTimeout(()=>{
                $('.line-wrap').removeClass('on')
                },250)
                boolean = true;
            }
        })

        $(window).on('load',function(){
            const signatureTop = $('#t-shirt').offset().top
            const contactTop = $('.footer-content').offset().top
            const loginTop = $('.footer-login').offset().top
            const mobileNav = $('.m-nav-list')
    
            window.scrollTo({
                top : 0,
                behavior : 'smooth'
            })

            document.querySelector('.m-home').addEventListener('click',function(){
                $('body').removeClass('stopscroll').off('scroll touchmove mousewheel');

                window.scrollTo({
                    top : 0,
                    behavior : 'smooth'
                })
                mobileNav.removeClass('on')
                document.querySelector('.line-wrap').classList.remove('on2')
                setTimeout(()=>{
                document.querySelector('.line-wrap').classList.remove('on')
                },250)
                boolean = true;
                
            })
            document.querySelector('.m-signature').addEventListener('click',function(){
                $('body').removeClass('stopscroll').off('scroll touchmove mousewheel');

                window.scrollTo({
                    top : signatureTop,
                    behavior : 'smooth'
                })
                mobileNav.removeClass('on')
                document.querySelector('.line-wrap').classList.remove('on2')
                setTimeout(()=>{
                document.querySelector('.line-wrap').classList.remove('on')
                },250)
                boolean = true;
            })
            document.querySelector('.m-contact').addEventListener('click',function(){
                $('body').removeClass('stopscroll').off('scroll touchmove mousewheel');

                window.scrollTo({
                    top : contactTop,
                    behavior : 'smooth'
                })
                mobileNav.removeClass('on')
                document.querySelector('.line-wrap').classList.remove('on2')
                setTimeout(()=>{
                document.querySelector('.line-wrap').classList.remove('on')
                },250)
                boolean = true;
                
            })
        //    dddd
            document.querySelector('.m-login').addEventListener('click',function(){
                $('body').removeClass('stopscroll').off('scroll touchmove mousewheel');

                window.scrollTo({
                    top : loginTop,
                    behavior : 'smooth'
                })
                mobileNav.removeClass('on')
                document.querySelector('.line-wrap').classList.remove('on2')
                setTimeout(()=>{
                document.querySelector('.line-wrap').classList.remove('on')
                },250)
                boolean = true;
            })
        })

        // --------------scroll btn-----------------//

        let scrollbtn = [
            // [버튼요소,탑위치로 이동될 해당요소]//
            ['.home','body'],
            ['.signature','#figure'],
            ['.contact','footer'],
            ['.login','footer']
        ]

        scrollbtn.forEach((a)=>{
            $(a[0]).click(function(){
            let offset = $(a[1]).offset().top;
            $('html, body').animate({scrollTop:offset},0);
            return false;
        });
        })

        

 
        // -----------------Tag img append-----------------------//
        for(let i = 0; i<81; i++)
        {
        let imgBox = `<img class="main main${i}" src="./img/movie/${i}_optimized.png" alt="">`
        $('.visual-box').append(imgBox)
        }
        let lastScroll = 0;

        // -----------------basket-mordal 새로고침 이벤트 방지-----------------//
        let scrollY = $(window).scrollTop();
        if(scrollY > 500){
            $('.basket-mordal').css("display","none");
        } else {
            $('.basket-mordal').css("display","flex");
        }

        //----------------------Scrolling---------------------//
        $(window).scroll(function(){
            let scrollY = $(window).scrollTop();
            let height = window.innerHeight;
            let delaytime = 0;

            
            const el = [
                ".figure-demon h4",
                ".figure-demon p",
                ".shoes-demon h2",
                ".shoes-demon p",
                ".poster-demon h4",
                ".poster-demon p",
                ".sns-demon h4",
                ".sns-demon p",
                ".poster1",
                ".poster2",
                ".poster3",
                ".poster4",
                ".poster5",
                ".t-slogan",
                ".etc-demon2 h2",
                ".etc-demon2 p",
                ".shoes-box1 .shoes-imgbox",
                ".shoes-box3 .shoes-imgbox",
                ".shoes-box1 h4",
                ".shoes-box1 p",
                ".shoes-box3 h4",
                ".shoes-box3 p",
                ".shoes-box5 h4",
                ".shoes-box5 p",
                ".etc-demon1 h2",
                ".etc-demon1 p",
                ".etc-demon3 h2",
                ".etc-demon3 p",
                ".shoes-box2 .shoes-imgbox",
                ".shoes-box4 .shoes-imgbox",
                ".shoes-box2 h4",
                ".shoes-box2 p",
                ".shoes-box4 h4",
                ".shoes-box4 p",
                ".shoes-box5 .shoes-imgbox"
            ]

            el.forEach((a)=>{
                if(scrollY + height > $(a).offset().top){
                    $(a).addClass('on')
                }else {
                    $(a).removeClass('on')
                }
            })
    


            console.log(scrollY)
            
        
        
        //----------------basket-mordal------------------//

        if(scrollY > 50){
            $('.basket-mordal').css("opacity",0);
        }
        if(scrollY <= 50) {
            $('.basket-mordal').css("opacity",1);
        }

        // ------------ header-fixed ------------//
        if(scrollY > lastScroll) {
            //down
        $('header').addClass('fixed');
        } else {
            // up
        $('header').removeClass('fixed');
        }
        lastScroll = scrollY;


        

        //----------------Main visual //

        if(scrollY > 500){
            $('.basket-mordal').css("display","none");
        } else {
            $('.basket-mordal').css("display","flex");
        }

        let [imgNum,a,b,c,d,e,scaleA,scaleB,scaleC,scaleD,scaleE] = [];
            imgNum = parseInt(scrollY / 60);
            imgNum > 80 ? imgNum = 80 : imgNum = imgNum;

        

        $('.main').css("visibility","hidden");
        $('.main'+imgNum).css("visibility","visible");
            function tshirtAnimateM(){
                let twrapRatio = (scrollY + $(window).innerHeight() - $('.t-shirt-wrap').offset().top) / $('.t-shirt-wrap').innerHeight();
                twrapRatio < 0.35 ? twrapRatio = 0.35 : twrapRatio > 0.85 ? twrapRatio = 0.85 : twrapRatio = twrapRatio
                if(twrapRatio >= 0.35 && twrapRatio <= 0.85){
                    $('.ta').css("transform",`perspective(1000px) rotateY(${(twrapRatio - 0.35)*720}deg)`)
                }
            }

            

            

        // -------Goods T-shirt scroll animation-------//
            function tshirtAnimate(){
                if(scrollY < 6400){
                a = 0;
                $('.tb').css("opacity",0)
            }
            if(scrollY > 6400){
                let val = scrollY - 6400;
                a = val
                scaleA = 1
                scaleB = 1-0.05*(val/150)
                $('.tb').css("opacity",1)
            }
            if(scrollY > 6550){
                let val = scrollY - 6550;
                a = 150
                b = val
                scaleB = 0.95
                scaleC = 1-0.1*(val/150)
            }
            if(scrollY > 6690){
                let val = scrollY - 6690;
                b = 140
                c = val
                scaleC = 0.9
                scaleD = 1-0.15*(val/140)
            }
            if(scrollY > 6820){
                let val = scrollY - 6820;
                c = 130
                d = val
                scaleD = 0.85
                scaleE = 1-0.2*(val/130)

            }
            if(scrollY > 6940){
                let val = scrollY - 6940;
                d = 120
                e = val
                scaleE = 0.8
            }
            if(scrollY > 7050){
                e = 110
            }
            let taImage = [".ta1",".ta2",".ta3",".ta4",".ta5"]
            let tbImage = [".tb1",".tb2",".tb3",".tb4",".tb5"]
            let gap = [a,b,c,d,e]
            let scalearr = [scaleA,scaleB,scaleC,scaleD,scaleE]
            let gapChange = 0;

            for(let i = 0; i<5; i++){
                let taElm = taImage.join();
                let tbElm = tbImage.join();
                gapChange = gapChange + gap[i]
                $(taElm).stop();
                $(taElm).css("transform",`translateX(-${gapChange}px) scale(${scalearr[i]})`)
                $(tbElm).stop();
                $(tbElm).css("transform",`translateX(${gapChange}px) scale(${scalearr[i]})`)
                taImage.splice(0,1);
                tbImage.splice(0,1);
            }
            }
        
                // ----------------T-shirt demon------------------//
                if(scrollY <= 7100){
                    $('.t-demon1').css("transform", `translateY(0px)`)
                                    .css("opacity",0);
                    $('.t-demon2').css("transform", `translateY(0px)`)
                                    .css("opacity",0);
                }
                if(scrollY > 7100 && scrollY <7300){
                    let opa= (scrollY - 7100) / 200
                    let trans = (7300 - scrollY ) / 4;

                    $('.t-demon1').css("transform", `translateY(${trans}px)`)
                                    .css("opacity",opa);
                }
                if(scrollY > 7300 && scrollY <7500){
                    let opa= (scrollY - 7300) / 200
                    let trans = (7500 - scrollY ) / 4;

                    $('.t-demon2').css("transform", `translateY(${trans}px)`)
                                    .css("opacity",opa);
                }


                // ----------------shoes-demon--------------- //



                const shoesvisual = $('.shoes-visual1');
                if(scrollY => shoesvisual.offset().top){
                    let linevalue = parseInt(scrollY+ $(window).innerHeight()*0.7 -shoesvisual.offset().top);
                    linevalue > shoesvisual.innerHeight()*2/3 ? linevalue = shoesvisual.innerHeight()*2/3 : linevalue = linevalue;
                    $('.v-line').css("height",`${linevalue}px`)
                }
                     
                let ratio = (scrollY + $(window).innerHeight()*0.7 - shoesvisual.offset().top) / shoesvisual.innerHeight()
                if(ratio >= 0.33 ){
                    $('.h-line1').css("width","100%")
                    $('.star1').css("opacity",1)
                }else {
                    $('.h-line1').css("width","0%")
                    $('.star1').css("opacity",0)
                }
                if(ratio >= 0.66 ){
                    $('.h-line2').css("width","100%")
                    $('.star2').css("opacity",1)
                }else {
                    $('.h-line2').css("width","0%")
                    $('.star2').css("opacity",0)
                }
                if($(window).innerWidth() <= 768) {
                tshirtAnimateM()
                }else{
                tshirtAnimate()
                }
                
        })
        
        
//  ------------------------ path-scroll ----------------------------//
            let [
                figureContent,figurePath,figurePathLength,
                figure2Content,figure2Path,figure2PathLength,
                tshirtContent,tshirtPath,tshirtPathLength,
                tshirt2Content,tshirt2Path,tshirt2PathLength,
                shoesContent,shoesPath,shoesPathLength,
                shoes2Content,shoes2Path,shoes2PathLength,
                posterContent,posterPath,posterPathLength,
                poster2Content,poster2Path,poster2PathLength,
                etcContent,etcPath,etcPathLength,
                etc1Content,etc1Path,etc1PathLength,
                etc2Content,etc2Path,etc2PathLength,
                etc3Content,etc3Path,etc3PathLength,
                snsContent,snsPath,snsPathLength,
                membershipContent,membershipPath,memberPathLength,
            ] = [];
            
            

            let elements = ["figure","figure2","tshirt","tshirt2","shoes","shoes2","poster","poster2","etc","etc1","etc2","etc3","sns","membership"];
            elements.forEach((a)=>{
             eval(`${a}`  + "Content" + `= document.querySelector(".${a}-content")`);       
             eval(`${a}`  + "Path" + `= document.querySelector(".${a}-path")`);       
             eval(`${a}`  + "PathLength" + `= ${a}Path.getTotalLength()`);       
             eval(`${a}`  + "Path.style.strokeDasharray" + `= ${a}PathLength + ' ' + ${a}PathLength`);       
            })

                
                function calcDashoffset(scrollY, element, length) {
                    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
                    const value = length - (length * ratio*2) //ratio*a >> a=속도조절//
                    return value < 0 ? 0 : value > length ? length : value
                 }

                function scrollHandler() {
                    const scrollY = window.scrollY + (window.innerHeight * 0.4) //window.innerHeight * a >> a=등장할위치조절 ex)a=0.4 -> 40퍼쯤내렸을때 등장//
                        figurePath.style.strokeDashoffset = calcDashoffset(scrollY, figureContent, figurePathLength)
                        figure2Path.style.strokeDashoffset = calcDashoffset(scrollY, figure2Content, figure2PathLength)
                        tshirtPath.style.strokeDashoffset = calcDashoffset(scrollY, tshirtContent, tshirtPathLength)
                        tshirt2Path.style.strokeDashoffset = calcDashoffset(scrollY, tshirt2Content, tshirt2PathLength)
                        shoesPath.style.strokeDashoffset = calcDashoffset(scrollY, shoesContent, shoesPathLength)
                        shoes2Path.style.strokeDashoffset = calcDashoffset(scrollY, shoes2Content, shoes2PathLength)
                        posterPath.style.strokeDashoffset = calcDashoffset(scrollY, posterContent, posterPathLength)
                        poster2Path.style.strokeDashoffset = calcDashoffset(scrollY, poster2Content, poster2PathLength)
                        etcPath.style.strokeDashoffset = calcDashoffset(scrollY, etcContent, etcPathLength)                        
                        etc1Path.style.strokeDashoffset = calcDashoffset(scrollY, etc1Content, etc1PathLength)                        
                        etc2Path.style.strokeDashoffset = calcDashoffset(scrollY, etc2Content, etc2PathLength)                        
                        etc3Path.style.strokeDashoffset = calcDashoffset(scrollY, etc3Content, etc3PathLength)                        

                }

                function calcDashoffset2(scrollY, element, length) {
                    const ratio = (scrollY - element.offsetTop) / element.offsetHeight
                    const value = length - (length * ratio*3) //ratio*a >> a=속도조절//
                    return value < 0 ? 0 : value > length ? length : value
                 }

                function scrollHandler2() {
                    const scrollY = window.scrollY + (window.innerHeight * 0.1) //window.innerHeight * a >> a=등장할위치조절 ex)a=0.4 -> 40퍼쯤내렸을때 등장//
                    snsPath.style.strokeDashoffset = calcDashoffset2(scrollY, snsContent, snsPathLength)
                  }

                  function scrollHandler3() {
                    const scrollY = window.scrollY + (window.innerHeight * 0.4) //window.innerHeight * a >> a=등장할위치조절 ex)a=0.4 -> 40퍼쯤내렸을때 등장//
                    membershipPath.style.strokeDashoffset = calcDashoffset2(scrollY, membershipContent, membershipPathLength)
                  }
                
            

                window.addEventListener('scroll', scrollHandler);
                window.addEventListener('scroll', scrollHandler2);
                window.addEventListener('scroll', scrollHandler3);
           


    
  
    
    
    

    if($(window).innerWidth() < 768){
            topTobottom = [];
            $(window).scroll(()=>{
                let posterRatio = ($(window).scrollTop() - $('.poster-box').offset().top)/$('.poster-box').innerHeight();
                for(i=1; i<5; i++){
                    $('.poster'+i).css("opacity",1-(posterRatio-(0.2*i-0.18))*50);
                    let pscale = 1-(posterRatio-(0.2*i-0.18))*3
                    pscale > 1 ? pscale = 1 : pscale = pscale;
                    pscale < 0.8 ? pscale = 0.8 : pscale = pscale;
                    $('.poster'+i).css("transform",`translateY(0px) scale(${pscale})`);
                }
                
                
            })
            
        }
        
 


  


 
   
        

})
            
            
      