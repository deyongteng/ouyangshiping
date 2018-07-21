var index = {
    element: null,
    _data: null,
    init: function ( data ) {
        var _this = this;
        $.showLoding()

        var nub = 0;
        for (var i = 0; i < lodingImag.length; i++) {
            var img=new Image();
            img.src=lodingImag[i];
            img.onload=function(){
                nub++;
                // logoText.innerHTML="已加载"+(Math.floor(nub/lodingImag.length*100))+"%";
                if(nub===lodingImag.length){
                    _this.startPage();
                    $.hideLoding();
                }
            }
        }


        this.element = $("#content");
        this._data = data;
        this.binEvent();
    },
    setHtml: function () {
        var itmeArr = this._data;
        var html = "",time,content;

        for( var i=0,l=itmeArr.length; i<l; i++ ){

            time = itmeArr[i].itme.time;
            content = itmeArr[i].itme.content;

            if( content.length >= 32 ){
                content = content.slice(1,32)+"...";
            }
            if( i == 0 ){
                html += ' <li class="first">';
            }else if( i == itmeArr.length-1 ){
                html += ' <li class="last">';
            }else{
                html += ' <li class="">';
            }

            html += '     <div class="left_liner animated slideInLeft">';
            html += '           <span></span>';
            html += '           <span></span>';
            html += '     </div>';
            html += '       <div class="right_content animated flipInX">';
            html += '           <div class="content">';
            html += '               <time>'+ time +'</time>';
            html += '               <p>'+ content +'</p>';
            html += '           </div>';
            html += '       </div>';
            html += '</li>';
        }

        $("[name='itme_list']").html( html );
    },

    binEvent: function () {
        var _this = this;

        this.element.find("[name='itme_list']").off("click","li").on("click","li",function () {

            _this.setContent( _this._data[$(this).index()] );
        });

        this.element.find(".return").off("click").on("click",function () {
            $(".content2").removeClass("active");
        });

        var off = true;
        this.element.find(".startPage").off("touchend").on("touchend",function () {
            _this.element.find(".startPage").find("p").addClass("hide");
            var itmeL = _this.element.find(".itme");
            for( var i=0,l=itmeL.length; i<l; i++){
                itmeL.eq(i).css("transform",'translateZ('+Math.random()*6000+'px) rotateY('+ +Math.random()*360+'deg) rotateX('+Math.random()*360+'deg)');
            }

            if( !off ){return}
            setTimeout(function () {
                _this.element.find(".startPage").addClass("active");

                setTimeout(function () {
                    _this.element.find(".startPage").remove();
                    _this.setHtml();
                    console.log("开发播放音乐")
                    document.getElementById("audio").play()
                },200)
            },2000)
        })

    },

    setContent: function ( data ) {

        var data = data || '';
        var html = '';
        var imgUrl = data.itme.imgUrl;
        var $content2 = $(".content2");
        var text = "&nbsp;&nbsp;&nbsp;&nbsp;"+data.itme.content+"</br>我们的故事还在继续～";

        for( var i=0,l=imgUrl.length; i<l; i++ ){
            html += '<img src="'+ imgUrl[i] +'" style="left:'+ (Math.random()*200*(i=0?100:i)) +'px;top:'+ (Math.random()*200*(i=0?1:i)) +'px;transform:rotate('+ Math.random()*50 +'deg)"/>'
        }
        $content2.addClass("active");
        $content2.find(".time").text( data.itme.time );
        $content2.find(".text_content p").html( text );
        $content2.find(".img_box").html( html );

    },

    startPage: function () {

        var windowW = $(window).width();
        var number = Math.ceil($(window).width()/6);
        var itmeL;
        var html = '';
        for (var j = 0; j < 36; j++) {

            html+="<div class='itme' style='width:"+ number +"px;height:"+ number +"px;left:"+number*(j%6)+"px;top:"+number*(Math.floor(j/6))+"px;'></div>";
        }

        this.element.find(".bg_box").css({width:windowW+"px",height:windowW+"px"});
        this.element.find(".bg_box").html(html);

        itmeL = this.element.find(".itme");

        for (var i = 0; i < itmeL.length; i++) {
            itmeL.eq(i).css({
                "background-positionX": -number*(i%6)+"px",
                "background-positionY": -number*(Math.floor(i/6))+"px",
                "background-size": windowW+"px"
            });

        }

    }
}