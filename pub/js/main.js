function openSlideMenu(){document.getElementById("menu").style.width="250px",document.getElementById("wrapper").style.marginLeft="250px",document.getElementById("hamburger").style.color="#cfcfe1"}function closeSlideMenu(){document.getElementById("menu").style.width="0",document.getElementById("wrapper").style.marginLeft="0",document.getElementById("hamburger").style.color="#fff"}$(".submit").click(function(e){console.log("Clicked submit-button");var t=$(".name").val(),n=$(".email").val(),a=$(".message").val(),l=$(".status");l.empty(),t.length>2?l.append("<p>Name is valid</p>"):(e.preventDefault(),l.append("<p>Name is not valid, try again")),n.length>5&&n.includes("@")?l.append("<p>Email is valid</p>"):(e.preventDefault(),l.append("<p>Email not valid, try again</p>")),a.length>10?l.append("<p>Message is valid</p>"):(e.preventDefault(),l.append("<p>Message is not valid, try again"))});