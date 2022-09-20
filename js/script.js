var product_info = ["","使你的創作<br>溫馨又帶有童趣<br>隨興發揮、不受侷限<br>來揮灑顏料吧！","厚塗推薦<br>讓你的作品更有層次感<br>一起來塗塗抹抹！","描繪素描風格<br>手繪筆觸、飽含溫度<br>多種仿真筆刷<br>等你來挑選","各種圖形的筆刷<br>讓你在創作時更加輕鬆<br>一瞬間<br>就能呈現你要的效果！"];
var product_bottom_color = ["","#749768","#522376","#929292","#D7CD7A"];
var card_body_color = ["","#9AC08D","#785494","#CACACA","#EEE59B"];
var product_more = ["","查看更多水彩、水墨筆刷>>>","查看更多粉筆、蠟筆筆刷>>>","查看更多鉛筆、麥克筆筆刷>>>","查看更多特殊及其他筆刷>>>"];
var content_ = "";
var card_ = "";
for(i=1;i<5;i++){
    content_ +=
        `<div class="i_product_left">
            <div class="i_banner">
                <img src="image/i_banner_0${i}.png">
            </div>

            <div class="i_product_info">
                <h3 class="text-center">水彩、水墨</h3>
                <img src="image/i_product0${i}_00.png">
                <p class="text-center">${product_info[i]}</p>
            </div>
            
            <div class="i_product_bottom" style="background-color: ${product_bottom_color[i]};"></div>

            <div class="row i_product_row">`
            for(j=1;j<5;j++){
                card_ += 
                `<div class="col-3">
                    <a href="#"><div class="card i_product_demo">
                        <!--icon 愛心及購物車
                        <i class="fa-regular fa-heart"></i>
                        <i class="fa-solid fa-cart-arrow-down"></i>
                        <i class="fa-solid fa-cart-shopping"></i>-->

                        <img class="card-img-top i_card_top" src="image/i_product0${i}_0${j}.png" alt="Card image cap">
                        <div class="card-body i_card_body" style="background-color:${card_body_color[i]};">
                            <p style="float:left;" class="card-text">筆刷名稱<br>By作者名</p>
                            <p style="float:right;font-size: 1.1rem;">免費</p>
                        </div>
                    </div></a><!--card end-->
                </div><!--col-3 end-->`
            }

            `<a href="a1_water.html" class="i_product_more">${product_more[i]}</a>
            </div><!--row end-->
        </div><!--i_product end-->`
}
