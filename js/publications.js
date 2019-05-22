/*window.onload overwrite problem*/
function addEvent(node, type, listener) {
    if (node.addEventListener) {
        node.addEventListener(type, listener, false);
        return true;
    } else if (node.attachEvent) {
        node['e' + type + listener] = listener;
        node[type + listener] = function() {
            node['e' + type + listener](window.event);
        }
        node.attachEvent('on' + type, node[type + listener]);
        return true;
    }
    return false;
};
/*window.onload overwrite problem*/
/*spinner*/
function addSpinner() {
var elm1 = document.createElement('div');
elm1.className = 'spinner-layout';
var elm2 = document.createElement('div');
elm2.className = 'spinner';

for (i = 1; i < 3; i++) {

var elm3 = document.createElement('div');
elm3.className = 'spinner-container container' + [i];
elm2.appendChild(elm3);
  
for (j = 1; j < 5; j++) { 
    var a = document.createElement('div');
    a.className = 'circle' + [j];
    elm3.appendChild(a);
}  
} 
elm1.appendChild(elm2);
document.getElementById('citation-detail').getElementsByClassName('modal-dialog')[0].appendChild(elm1);
  
};
function removeSpinner() {
$('.spinner-layout').remove();
};
/*end of spinner*/

/*waiting for elements and jquery*/
function windowonloadPublic(){
  
/*sat site add bootstrap*/
  var bootstrap_css = '/media/oecdorg/publications/css/publications_bootstrap.css'.replace(/amp;/g, '');
  var bootstrap_js = '/media/oecdorg/styleassets/responsive/lib/bootstrap/js/bootstrap.min.js'.replace(/amp;/g, '');
  if (typeof $().modal != 'function') {
      $('head').append('<link rel="stylesheet" type="text/css" media="" href="' + bootstrap_css + '">');
      $('head').append('<script type="text/javascript" src="' + bootstrap_js + '"></script>');
  }
/*sat site add bootstrap*/
  
if ( $('.sideNav').length > 0 ) { $('html').addClass('left-nav-template')} else { $('html').addClass('full-width-template')};
  
    /*collapse or not collapsed:*/
      $('.books .panel-group .panel.summaries  .panel-heading [data-toggle="collapse"]').click(function(){
      var maxlenght = $('.books .panel-group>.panel.summaries .panel-body .table tr').length;
            for (i = 7; i < maxlenght; i++) {
                $('.books .panel-group>.panel.summaries .panel-body .table tr').eq(i).show();
      };
      $('.more-custom').remove();
    });
  
    $('.books .panel-group .panel .panel-heading [data-toggle="collapse"]').click(function(){
      if ($(this).hasClass("collapsed")) {
          $(this).html($('#hidetext').html());
          if($(this).hasClass("collapsed")){
            $(this).toggleClass('collapsed');
          }
          if(!$($($(this).attr('href')).children()[0]).is(':visible') && $($(this).attr('href')).attr('aria-expanded') === undefined){
            $($(this).attr('href')).slideDown(500);
          }
        } else {
          $(this).html($('#showtext').html());
          if(!$(this).hasClass("collapsed")){
            $(this).toggleClass('collapsed');
          }
          if($($($(this).attr('href')).children()[0]).is(':visible') && $($(this).attr('href')).attr('aria-expanded') === undefined){
          	$($(this).attr('href')).slideUp(500);
          }
      };
    });
  
    if ($('.book-editable-body').children().length < 1) {
      
        /*summary*/
        if ($('.books .panel-group>.panel.summaries >.panel-collapse table tr').length < 8){
        $('.books .panel-group>.panel.summaries>.panel-heading [data-toggle="collapse"]').click();
        }
        else {
        $('.books .panel-group>.panel.summaries>.panel-heading [data-toggle="collapse"]').click();
        var maxlenght = $('.books .panel-group>.panel.summaries .panel-body .table tr').length;
        for (i = 7; i < maxlenght; i++) {
            $('.books .panel-group>.panel.summaries .panel-body .table tr').eq(i).hide();
        }
        $('.books .panel-group>.panel.summaries .panel-body .table').after('<div class="more-custom">' +   $('#readmoretext').html() + '</div>');         
    }
      
    $('.more-custom').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).html($('#readmoretext').html());
            var maxlenght = $('.books .panel-group>.panel.summaries .panel-body .table tr').length;
            for (i = 7; i < maxlenght; i++) {
                $('.books .panel-group>.panel.summaries .panel-body .table tr').eq(i).hide();
            }
        } else {
            $(this).addClass('open');
            $(this).html($('#readlesstext').html());
            var maxlenght = $('.books .panel-group>.panel.summaries .panel-body .table tr').length;
            for (i = 7; i < maxlenght; i++) {
                $('.books .panel-group>.panel.summaries .panel-body .table tr').eq(i).show();
            }
        }
    });
        
        /*main TOC always open*/
        $('.books .panel-group>.panel.table-contents>.panel-heading [data-toggle="collapse"]').click();
      
        /*sub menu TOC*/
      $('.books .panel-group>.panel.table-contents>.panel-collapse table tr.sub-panel').each(function( index ) {
        if ( $( this ).find('table tr').length < 11 ) { $( this ).find('.panel-heading [data-toggle="collapse"]').click()} ;
      });
      
    };
    /*end of collapse or not collapsed:*/
  
  
    /*citation iframe*/
    $('[data-target="#citation-detail"]').click(function(){
      addSpinner();
      var frametarget = $(this).attr('href');
      var targetmodal = $(this).attr('data-target');
      $(targetmodal).find('iframe').attr("src", frametarget );
      $(targetmodal).find('iframe').load(function () {
            removeSpinner();
        });
    });
    /*end of citation iframe*/
  
    /*read more for summuries*/
    function ellipsisText() {
        var p_margin = 0;
        if ($('.book-summary').children('p').length > 0) {
            p_margin = $('.book-summary').children('p').length * parseInt($('.book-summary').children('p').css('margin-bottom'));
        }
        var line_count = ($('.book-summary').height() - p_margin) / parseInt($('.book-summary').css('line-height'));
        var line = 4;
        if (line_count > line) {
            var height = line * parseInt($('.book-summary').css('line-height'));
          
    if (($('.book-summary p').first().height()) / parseInt($('.book-summary p').first().css('line-height')) === 3 )
    {height = height - parseInt($('.book-summary').css('line-height')); }
          
            $('.book-summary').css('height', height);
            $('.book-summary').css('overflow', 'hidden');
            if (!$('.book-summary').next().hasClass('readMore'))
                $('.book-summary').after('<div class="readMore">' + $('#readmoretext').html()+ '<div>');
        }
    };
  
    function ellipsisText2() {
        var charmax = 701;
        while ($('.book-summary').text().substr(charmax - 1, 1) != " ") {
            charmax = charmax + 1;
        }
        $('.book-summary').html($('.book-summary').text().substr(0, charmax) + '<span class="readMore-open">'+ $('#readmoretext').html() + '</span><span class="overtext">' + $('.book-summary').text().substr(charmax, $('.book-summary').text().length) + '</span><span class="readMore-close">' + $('#readlesstext').html() + '</span>');
    };

    ellipsisText();

    $('.readMore').click(function() {
        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).html($('#readmoretext').html());
            ellipsisText();
        } else {
            $(this).addClass('open');
            $(this).html($('#readlesstext').html());
            $('.book-summary').css('height', 'auto');
        }
    });
  
    /* end of read more for summuries*/
 
    /* position buttons*/
    if ($('.book-head .col-md-4').height() - $('.book-head .col-md-8').height() > 59) {
        $('.books .btn-grp-books').css('position', 'absolute');
        $('.books .btn-grp-books').css('left', '20px');
        $('.books .btn-grp-books').css('top', ($(' .book-head .col-md-4').height() - 30) + 'px');
        $('.book-head').css('height' , parseInt($('.btn-grp-books').css('top')) + $('.btn-grp-books').height() );
    }
    else { 
      $('.books .btn-grp-books').css('position', 'absolute');
      $('.books .btn-grp-books').css('left', '20px');
      $('.books .btn-grp-books').css('top', ($(' .book-head .col-md-8').height() + 25) + 'px');
     $('.book-head').css('height' , parseInt($('.btn-grp-books').css('top')) + $('.btn-grp-books').height() );
    }
    /* end of position buttons*/

    // get the links to "Also Available"    
    $('.pub-langs a.available-lang').each(function(idx, item){
      var lang = $(item).data('lang');      
      if (alsoAvailableObj && alsoAvailableObj[lang] ){
        $(item).attr('href', alsoAvailableObj[lang]);
      }
    });  
};
addEvent(window , 'load' , windowonloadPublic);
