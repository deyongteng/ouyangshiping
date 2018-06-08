(function( $ ) {
    $.showLoding = function() {

        var html = '';
        html += ' <div id="loading" class="loader">';
        html += '       <div class="loader-inner">';
        html += '           <div class="loader-line-wrap">';
        html += '               <div class="loader-line"></div>';
        html += '           </div>';
        html += '           <div class="loader-line-wrap">';
        html += '                <div class="loader-line"></div>';
        html += '           </div>';
        html += '           <div class="loader-line-wrap">';
        html += '               <div class="loader-line"></div>';
        html += '           </div> ';
        html += '           <div class="loader-line-wrap">';
        html += '               <div class="loader-line"></div>';
        html += '           </div>';
        html += '           <div class="loader-line-wrap">';
        html += '               <div class="loader-line"></div>';
        html += '           </div>';
        html += '       </div>';
        html += '  </div>';

        $("body").append( html );
    };

    $.hideLoding = function () {
        $('#loading').remove();
    };
})( jQuery );
