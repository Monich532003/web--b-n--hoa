function toggleChat(){

let chat=document.getElementById("chatbot");

if(chat.style.display=="flex"){

chat.style.display="none";

}else{

chat.style.display="flex";

}

}

function enter(e){

if(e.key==="Enter"){

sendMessage();

}

}

function sendMessage(){

let input=document.getElementById("message");

let text=input.value.trim();

if(text=="") return;

let chat=document.getElementById("chat-content");

chat.innerHTML+=`<div class="user">${text}</div>`;

let reply="Xin lỗi, tôi chưa hiểu câu hỏi.";

let t=text.toLowerCase();

if(t.includes("sinh nhật"))

reply="🎂 Chúng tôi có nhiều mẫu hoa sinh nhật từ 500.000đ đến 2.500.000đ.";

else if(t.includes("cưới"))

reply="💍 Bộ sưu tập hoa cưới được thiết kế theo phong cách Pháp sang trọng.";

else if(t.includes("khai trương"))

reply="🎉 Hoa khai trương có giá từ 900.000đ và hỗ trợ viết thiệp miễn phí.";

else if(t.includes("ship") || t.includes("giao"))

reply="🚚 Miễn phí giao nội thành cho đơn đặt trước 24 giờ.";

else if(t.includes("giá"))

reply="💰 Giá hoa dao động từ 350.000đ đến 3.500.000đ.";

else if(t.includes("hồng"))

reply="🌹 Hoa hồng Ecuador và hoa hồng Pháp đang là sản phẩm bán chạy nhất.";

else if(t.includes("liên hệ"))

reply="📞 Hotline: 0123 456 789<br>📧 Email: contact@aunomdelarose.vn";

setTimeout(function(){

chat.innerHTML+=`<div class="bot">${reply}</div>`;

chat.scrollTop=chat.scrollHeight;

},500);

input.value="";

chat.scrollTop=chat.scrollHeight;

}