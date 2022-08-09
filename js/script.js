//*****header
Vue.component("header-el", {
    data : () => {
        return {
            menuList : [
                ["About", "./about.html"],
                ["Movie", "./movie.html"],
                ["Artist", "./artist.html"],
                ["Audition", "./audition.html"],
                ["Community", "./community.html"],
            ]
        }
    },
    template : `
    <header>
        <div class="wrap">
            <div class="logo">
                <a href="#"><img src="./img/logo_fm.png" alt=""></a>
            </div>
            <nav>
                <ul>
                    <li v-for="list of menuList"><a :href="list[1]">{{list[0]}}</a></li>
                </ul>
            </nav>
        </div>
    </header>
    `
});

Vue.component("bannertop-el", {
    data : () => {
        return {
            slide_img : ["visual.png", "visual_02.png", "visual_03.png", "visual_04.png"]            
        }
    },
    template : `
    <div id="slider">
        <div class="slide_frame">

            <div v-for="list in slide_img" class="slide">
                <div class="bgImg" :style="'background-image:url(./img/'+list+')'"></div>
                <div class="dark"></div>
            </div>
        </div>
        <div class="wrap">
            <div class="text_part">
                <h2>지금부터 당신의 영화가 시작됩니다.</h2>
                <a href="#">오디션 참가</a>
            </div>
        </div>
    </div>
    `
    //반복되는 과정상 스타일 선언이 안됨 => 하위요소에 스타일을 걸어준다. 
});

Vue.component("cont1-el", {
    data : () => {
        return {
            movieList : [
                {img:"cont_01.png", title:"죄 많은 소녀 (After My Death, 2019)"},
                {img:"cont_02.jpeg", title:"소공녀 (Microhabitat, 2020)"},
                {img:"cont_03.jpg", title:"벌새 (House of Hummingbird, 2018)"},
            ]
        }
    },
    template : `
    <div id="movie">
        <div class="wrap">
            <h2>Today's Movie</h2>
            <div class="content">

                <div v-for="list in movieList" class="box">
                    <div class="movie_item" :style="'background-image:url(./img/'+list.img+')'">
                        <img src="./img/play_icon.png" alt="">
                    </div>
                    <h3>{{list.title}}</h3>
                </div>

            </div>
        </div>
    </div>
    `
});


Vue.component("bannermid-el", {
    template : `
    <div class="banner_middle">
        <div class="wrap">
            <div class="txt_part">
                <h2>Audition Schedule</h2>
                <p>실시간으로 업데이트 되는 오디션 정보를 확인 하실 수 있습니다. <br>배우 또는 배우지망생분들의 참여 바랍니다.</p>
                <a href="">오디션 정보확인</a>
            </div>
        </div>
    </div>
    `
});
Vue.component("cont2-el", {
    data : () => {
        return {
            actors : [
                {img:"yeobeen.png", name:"전여빈"},
                {img:"saebyeok.png", name:"김새벽"},
                {img:"sanghee.png", name:"이상희"},
                {img:"yeeun.png", name:"김예은"},
                {img:"hakju.png", name:"이학주"},
                {img:"jungmin.png", name:"박정민"},
            ]
        }
    },
    template : `
    <div id="actor">
        <div class="wrap">
            <div class="title">
                <h2>Actors</h2>
            </div>
            <div class="cont">

                <div v-for="list in actors" class="box">
                    <div class="actor_bg" :style="'background-image:url(./img/' + list.img + ')'"></div>
                    <div class="txt_part">
                        <p>전여빈</p>
                        <a href="">필모그래피</a>
                    </div>
                </div>

            </div>
            <div class="more_btn">
                <a href="">더보기</a>
            </div>
        </div>
    </div>
    `
});

Vue.component("review-el", {
    data : () => {
        return {
            reviews : [
                {
                    img : "review1.jpg",  
                    rtxt : "1차 오디션 합격 후, 감독님과의 직접 오디션을 보는 소중한 기회를 얻게 되었습니다. 감독님께서 제시하신 키워드에 맞게 준비한 연기를 보여드렸습니다. 연기가 끝나고 감독님께서는 호흡, 발음, 발성, 집중력 등 다각도에서 꼼꼼한 평을 해주셨습니다. 연기뿐만 아니라 프로필 사진에 대해서도 조언을 해주셨고, 제가 미처 생각하지 못했던 부분을 짚어주셔서 큰 도움을 받게 되었습니다.", 
                    name : "김지수"
                },
                {
                    img : "review2.jpg",  
                    rtxt : "오디션장에 들어가서 간단하게 자기소개를 하고 프로필에 나와있는 것들로 간단히 대화를 한 뒤 독백을 했습니다. 그 후 감독님이 얘기해주신 몇가지 상황들로 즉흥연기를 하고 작품의 내용을 간단히 듣고 마쳤습니다. 딱딱한 오디션이 아닌 대화하면서 긴장도 풀어주시고 편한 분위기의 오디션장이었습니다. 감사합니다.", 
                    name : "이영수"
                },
                {
                    img : "review3.jpg",  
                    rtxt : "필름메이커스에서 독립영화, 상업영화 등의 정보들과 직접적인 오디션을 볼 수 있는 연결 등이 특별하게 느껴지는 이 곳에 이제 가입한지 1주일 밖에 안 되었음에도 오디션을 볼 좋은 기회가 주어졌습니다. 오디션 영상을 찍으며 연기 외적으로도 고민 할 수 있게 되었습니다.", 
                    name : "박수현"
                },
            ]
        }
    },
    template : `
    <div id="review">
        <div class="dark">
            <div class="wrap">
                <div class="title">
                    <h2>Audition Reviews</h2>
                </div>

                <div class="slider_cover">
                    <div class="slider">

                        <div v-for="list in reviews" class="slide">
                            <p>{{list.rtxt}}</p>
                            <div class="img" :style="'background-image:url(./img/'+list.img+')'"></div>
                            <span>{{list.name}}</span>
                        </div>

                    </div>
                </div>
                <div class="pager">
                    <ol>
                        <li class="active" rel="0"></li>
                        <li rel="1"></li>
                        <li rel="2"></li>
                    </ol>
                </div>
            </div>
        </div>

    </div>
    `
});

Vue.component("footer-el", {
    template : `
    <footer>
        <div class="wrap">
            <ul class="footer_link">
                <li><a href="">이용약관</a></li>
                <li><a href="">고객상담실</a></li>
                <li><a href="">개인정보취급방침</a></li>
            </ul>
            <div class="footer_info">
                <div class="box">
                    <ul>
                        <li><span>Filmmakers</span></li>
                        <li><span>대표 : 임지애</span></li>
                        <li><span>사업자등록번호 : 113-28-507</span></li>
                    </ul>
                    <ul>
                        <li><span>주소 : 서울특별시 강남구 논현로</span></li>
                        <li><span>개인정보관리책임자 : 한상용</span></li>
                    </ul>
                    <p>&copy; 1999 - 2022 Filmmakers</p>
                </div>
                <div class="box">
                    <p>고객센터(이용 및 결제 문의) 제휴 및 대외 협력, 광고 문의</p>
                    <ul>
                        <li><span>대표전화 : 02-1234-5678</span></li>
                        <li><span>카카오톡 플러스친구 : 필름메이커스</span></li>
                    </ul>
                    <p>이메일 : info@filmmakers.com</p>
                </div>
            </div>
        </div>
    </footer>
    `
});





new Vue({
    el : "#app"
});



//jQuery 영역  (가동시점은 구조 완성 후)
$(document).ready(function(){
    $("#slider .slide_frame").slick({
        infinite: true,
        fade : true,
        autoplay: true,
        cssEase : 'linear'
    });

    $(document).on("click", "#review ol li", function(){
        //console.log("클릭이벤트 발생");
        $("#review ol li").removeClass("active");
        $(this).addClass("active");

        const $index = $(this).index();
        console.log($index);

        $("#review .slider").stop().animate({"margin-left": -100 * $index + "%"}, 500);

    });
});



