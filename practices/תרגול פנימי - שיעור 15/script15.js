let json_res = 
{"categories":[],
"created_at":"2020-01-05 13:42:23.240175",
"icon_url":"https://assets.chucknorris.host/img/avatar/chuck-norris.png",
"id":"7rXxnuK3SwC5Z6kXskgLIg","updated_at":"2020-01-05 13:42:23.240175",
"url":"https://api.chucknorris.io/jokes/7rXxnuK3SwC5Z6kXskgLIg",
"value":"The last time Chuck Norris was invited to the White House, the invitation said 'come as you are', so that's how he went - wearing nothing but a pair of assless chaps and a beer."
}

let my_time = document.getElementById('time');
let my_icon = document.getElementById('icon');
let my_value = document.getElementById('value');

my_time.innerText = json_res.created_at;
my_icon.src = json_res.icon_url;
my_value.innerText = json_res.value;