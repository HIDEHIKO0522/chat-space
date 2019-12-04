$(function(){
      function buildHTML(message){{
            if (message.image){
              var img = `<img src= ${message.image} ,width="200px" height="100px">`
            }else{
              var img = ""
            }  
          }
          var html = 
          `<div class="main_chat__contents__messages" data-message-id=${message.id}>
              <div class="main_chat__contents__messages__info">
                <div class="main_chat__contents__messages__info__user_name">
                  ${message.user_name}
                </div>  
                <div class="main_chat__contents__messages__info__created_date">
                  ${message.date}
                </div> 
              </div>   
              <div class="main_chat_contents__messages__content">                 
                  <div class=main_chat__contents__messages__content_text">                  
                    ${message.text}
                  </div>
                  <div class=main_chat__contents__messages__content_image">
                    ${img} 
                  </div>
              </div>    
          </div>`      
        return html;
        }; 
  $("#new_message").on('submit', function(e){
    e.preventDefault()
    var formData = new FormData(this);
    var url = $(this).attr("action");
    $.ajax({
      url: url, //var urlを参照する
      type: 'POST', 
      data: formData, 
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data) {
      var html = buildHTML(data);
      $('.main_chat__contents').append(html);
      $('.main_chat__contents').animate({ scrollTop: $('.main_chat__contents')[0].scrollHeight});
      $('form')[0].reset();
      $('.form__submit').prop('disabled', false);
    })
    .fail(function() {
      alert('error');
    });
    return false;
  });
});
