let place_data=[
    {
        tag: "keelung_city",
        place: "基隆市"
    },
    {
        tag: "taipei_city",
        place: "臺北市"
    },
    {
        tag: "new_taipei_city",
        place: "新北市"
    },
    {
        tag: "taoyuan_city",
        place: "桃園市"
    },
    {
        tag: "hsinchu_city",
        place: "新竹市"
    },
    {
        tag: "hsinchu_county",
        place: "新竹縣"
    },
    {
        tag: "miaoli_county",
        place: "苗栗縣"
    },
    {
        tag: "taichung_city",
        place: "臺中市"
    },
    {
        tag: "changhua_county",
        place: "彰化縣"
    },
    {
        tag: "nantou_county",
        place: "南投縣"
    },
    {
        tag: "yunlin_county",
        place: "雲林縣"
    },
    {
        tag: "chiayi_city",
        place: "嘉義市"
    },
    {
        tag: "chiayi_county",
        place: "嘉義縣"
    },
    {
        tag: "tainan_city",
        place: "臺南市"
    },
    {
        tag: "kaohsiung_city",
        place: "高雄市"
    },
    {
        tag: "pingtung_county",
        place: "屏東縣"
    },
    {
        tag: "taitung_county",
        place: "臺東縣"
    },
    {
        tag: "hualien_county",
        place: "花蓮縣"
    },
    {
        tag: "yilan_county",
        place: "宜蘭縣"
    },
    {
        tag: "penghu_county",
        place: "澎湖縣"
    },
    {
        tag: "kinmen_county",
        place: "金門縣"
    },
    {
        tag: "lianjiang_ county",
        place: "連江縣"
    },
    {
      tag: "green_island_township",
      place: "綠島"
    },
    {
      tag: "lanyu_township",
      place: "蘭嶼"
    },
    {
        tag: "liuqiu_island",
        place: "琉球嶼"
      }
    ];
    
    // Vue 要告訴它 執行的作用範圍
    // Vue3 這裡不受用 改用 Vue2
var vm = new Vue({
    el: "#app",   // element 元件
    data: {   // 打算用該地區的英文名來抓那筆資料
    filter: "" ,
    place_data: place_data  
    //紫:在Vue中定義它 黃:上面的obj
    },computed:{  //過濾資料 需先稍做計算
    // computed 計算屬性 計算哪些有用到Vue的屬性
    // 一變動filter 重新計算 計算屬性讓我們使用
    now_area: function(){  // 對 現在這地區 做計算           // now_area 理論上是抓filter 
        let vobj = this;  // 透過vobj 存取整個Vue物件
        let result = this.place_data.filter(function(obj){
        return obj.tag == vobj.filter;
    // 原tagname 是滑鼠移進去那個區塊用到的資料
        });
        
        if(result.length==0){
            return null;
        // 在return時就判斷裡面有沒有東西
        // result 抓出來有東西，就是陣列，要回傳；反之，空陣列，不回傳
        }
        return result[0] // 回傳過濾出來的資料  
        // 陣列內有東西，取它的第0筆
        // 因取第0筆，就不用會有[]的出現
    }
    
    }
});
    
//jQuery $  //mouseenter 滑鼠移到path 觸發
$("path").mouseenter(function(e){
    let tagname=$(this).attr("data-name");
    //  抓map上 滑鼠觸碰到該地區data-name(html) 
    //  this 抓現在正在觸發的那個物件的本體
    //  用jQuery抓屬性
    //  attr 屬性
    vm.filter=tagname
    // 讓過濾資料=滑鼠滑到的那筆資料
    // let result = place_data.filter(function(objs){
    //   return obj.tag == tagname;
    //   // obj物件的tag 必須等於 滑鼠滑到的那塊
    //   // filter 過濾條件 符合留下
    // });
    // console.log(result);  
});



let chiayi_city_1 = document.getElementById("chiayi_city_1");


chiayi_city_1.addEventListener("mouseover", function(){
    chiayi_city_1.style.fill = "#FFF2D8";
    chiayi_city_1.style.transform = "translateX(0px)";
    chiayi_city_1.style.transform = "translateY(0px)";
});

let keelung = document.getElementById("keelung");
let keelung_URL = "https://www.klcg.gov.tw/";
keelung.addEventListener("click", function(){
	window.open(keelung_URL, "_blank");
});
keelung.addEventListener("mousedown", function(){
	keelung.style.fill = "red";
});
keelung.addEventListener("mouseup", function(){
	keelung.style.fill = "";
});
let taipei = document.getElementById("taipei");
let taipei_URL = "https://www.gov.taipei/";
taipei.addEventListener("click", function(){
	window.open(taipei_URL, "_blank");
});
let new_taipei = document.getElementById("new_taipei");
let new_taipei_URL = "https://www.ntpc.gov.tw/";
new_taipei.addEventListener("click", function(){
	window.open(new_taipei_URL, "_blank");
});
let yilan = document.getElementById("yilan");
let yilan_URL = "https://www.e-land.gov.tw/";
yilan.addEventListener("click", function(){
	window.open(yilan_URL, "_blank");
});
let taoyuan = document.getElementById("taoyuan");
let taoyuan_URL = "https://www.tycg.gov.tw/ch/";
taoyuan.addEventListener("click", function(){
	window.open(taoyuan_URL, "_blank");
});
let hsinchu_city = document.getElementById("hsinchu_city");
let hsinchu_city_URL = "https://www.hccg.gov.tw/ch/index.jsp";
hsinchu_city.addEventListener("click", function(){
	window.open(hsinchu_city_URL, "_blank");
});
let hsinchu_county = document.getElementById("hsinchu_county");
let hsinchu_county_URL = "https://www.hsinchu.gov.tw/";
hsinchu_county.addEventListener("click", function(){
	window.open(hsinchu_county_URL, "_blank");
});
let miaoli = document.getElementById("miaoli");
let miaoli_URL = "https://www.miaoli.gov.tw/";
miaoli.addEventListener("click", function(){
	window.open(miaoli_URL, "_blank");
});
let taichung = document.getElementById("taichung");
let taichung_URL = "https://www.taichung.gov.tw/";
taichung.addEventListener("click", function(){
	window.open(taichung_URL, "_blank");
});
let changhua = document.getElementById("changhua");
let changhua_URL = "https://www.chcg.gov.tw/";
changhua.addEventListener("click", function(){
	window.open(changhua_URL, "_blank");
});
let yunlin = document.getElementById("yunlin");
let yunlin_URL = "https://www.yunlin.gov.tw/";
yunlin.addEventListener("click", function(){
	window.open(yunlin_URL, "_blank");
});
let chiayi_county = document.getElementById("chiayi_county");
let chiayi_county_URL = "https://www.cyhg.gov.tw/";
chiayi_county.addEventListener("click", function(){
	window.open(chiayi_county_URL, "_blank");
});
let chiayi_city = document.getElementById("chiayi_city");
let chiayi_city_URL = "https://www.chiayi.gov.tw/";
chiayi_city.addEventListener("click", function(){
	window.open(chiayi_city_URL, "_blank");
});
let tainan = document.getElementById("tainan");
let tainan_URL = "https://www.tainan.gov.tw/";
tainan.addEventListener("click", function(){
	window.open(tainan_URL, "_blank");
});
let kaohsiung = document.getElementById("kaohsiung");
let kaohsiung_URL = "https://www.kcg.gov.tw/";
kaohsiung.addEventListener("click", function(){
	window.open(kaohsiung_URL, "_blank");
});
let pingtung = document.getElementById("pingtung");
let pingtung_URL = "https://www.pthg.gov.tw/";
pingtung.addEventListener("click", function(){
	window.open(pingtung_URL, "_blank");
});
let nantou = document.getElementById("nantou");
let nantou_URL = "https://www.nantou.gov.tw/";
nantou.addEventListener("click", function(){
	window.open(nantou_URL, "_blank");
});
let hualien = document.getElementById("hualien");
let hualien_URL = "https://www.hl.gov.tw/";
hualien.addEventListener("click", function(){
	window.open(hualien_URL, "_blank");
});
let taitung = document.getElementById("taitung");
let taitung_URL = "https://www.taitung.gov.tw/";
taitung.addEventListener("click", function(){
	window.open(taitung_URL, "_blank");
});
let liuqiu = document.getElementById("liuqiu");
let liuqiu_URL = "https://www.pthg.gov.tw/liuchiu/Default.aspx";
liuqiu.addEventListener("click", function(){
	window.open(liuqiu_URL, "_blank");
});
let green_island = document.getElementById("green_island");
let green_island_URL = "https://www.lyudao.gov.tw/";
green_island.addEventListener("click", function(){
	window.open(green_island_URL, "_blank");
});
let lanyu = document.getElementById("lanyu");
let lanyu_URL = "https://www.lanyu.gov.tw/";
lanyu.addEventListener("click", function(){
	window.open(lanyu_URL, "_blank");
});
let penghu = document.getElementById("penghu");
let penghu_URL = "https://www.penghu.gov.tw/";
penghu.addEventListener("click", function(){
	window.open(penghu_URL, "_blank");
});
let kinmen = document.getElementById("kinmen");
let kinmen_URL = "https://www.kinmen.gov.tw/";
kinmen.addEventListener("click", function(){
	window.open(kinmen_URL, "_blank");
});
let lianjiang = document.getElementById("lianjiang");
let lianjiang_URL = "https://www.matsu.gov.tw/";
lianjiang.addEventListener("click", function(){
	window.open(lianjiang_URL, "_blank");
});
