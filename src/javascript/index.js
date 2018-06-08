var index = {

    init: function ( data ) {
        this.setHtml( data );
    },
    setHtml: function () {
        var itmeArr = data;
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
                html += ' <li class=>';
            }

            html += '     <div class="left_liner">';
            html += '           <span></span>';
            html += '           <span></span>';
            html += '     </div>';
            html += '       <div class="right_content">';
            html += '           <div class="content">';
            html += '               <time>'+ time +'</time>';
            html += '               <p>'+ content +'</p>';
            html += '           </div>';
            html += '       </div>';
            html += '</li>';
        }

        $("[name='itme_list']").html( html );
    }
}