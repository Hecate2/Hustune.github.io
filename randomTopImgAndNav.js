var imgList = new Array();
for(i=1;i<=5;i++)
    imgList.push("/img/K"+String(i)+".jpg");

var topImageClass = document.createElement('div');
topImageClass.className = "topImage";
var topImg = document.createElement('img');
topImg.id = "topImg";
topImg.setAttribute("src", imgList[Math.floor(Math.random() * imgList.length)]);
topImageClass.append(topImg);
document.body.insertBefore(topImageClass, document.body.children[0]);

var navBar = new DOMParser().parseFromString(String.raw`    <div class="nav" id="nav">
        <ul>
            <li>
                <h1>Chtholly</h1>
            </li>
            <li><a href=".">首页</a></li>
            <li><a href="doujins/doujins.html">同人</a></li>
            <li><a href="https://img.sukasuka.cn/" target="_blank">珂图</a></li>
        </ul>
    </div>
`, "text/html");
document.body.insertBefore(navBar.getElementById("nav"), document.body.children[0]);