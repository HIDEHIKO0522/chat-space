
json.id @message.id
json.text @message.text
json.image @message.image_url
json.user_name @message.user.name
json.date @message.created_at.strftime("%Y/%m/%d %H:%M")
