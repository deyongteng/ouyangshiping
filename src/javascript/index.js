var index = {
    element: null,
    _data: null,
    init: function ( data ) {
        this.element = $("#content");
        this._data = data;
        this.setHtml();
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
    },

    setContent: function ( data ) {

        var data = data || '';
        var $content2 = $(".content2");
        var text = "&nbsp;&nbsp;&nbsp;&nbsp;"+data.itme.content+"</br>我们的故事还在继续～";

        $content2.addClass("active");
        $content2.find(".time").text( data.itme.time );
        $content2.find(".text_content p").html( text )

    }
}