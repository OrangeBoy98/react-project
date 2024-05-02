import React from 'react';
import BookDetail2 from '../components/detail/BookDetail2';
import BookIntroduction from '../components/detail/BookIntroduction';
import PublisherReview from '../components/detail/PublisherReview';
import AuthorProfile from '../components/detail/AuthorProfile';
import TableOfContents from '../components/detail/TableOfContents';
import Comments from '../components/detail/Comments';
import '../assets/Detailpage.css';
import Header from '../components/common/Header';

function DetailPage2() {
    // 여기에 책 정보, 소개, 서평, 저자 정보, 목차, 댓글 데이터가 있다고 가정합니다.
    const bookData = {
        src:"https://img.ridicdn.net/cover/3306000090/xxlarge?dpi=xxhdpi#1",
        title: '개정 번역판 | 해리 포터와 마법사의 돌',
        author: '조앤.K.롤링 저  강동혁 역',
        publisher: 'Pottermore 출판'
        // ... 기타 필요한 책 정보
    };
    function BookIntroduction2() {
        return (
            <div>
                <p>
                    <br/><strong>해리 포터 세대의, 해리 포터 세대를 위한, 해리 포터 세대에 의한 새 번역!<br/>
                    ‘21세기 대표 아이콘’에 걸맞은 완성도 높은 작품으로 재탄생하다!</strong><br/><br/>
                    1997년 영국에서 출간된 이래 『해리 포터』 시리즈는 지금까지 200개국 이상 80개의 언어로 번역되고 출간되어 5억 부 이상을 판매했다. 국내에서도 1999년 『해리 포터와 마법사의<br/>
                    돌』의 출간을 필두로 지금까지 약 1,500만 부가 판매되었으며, 현재에도 독자들에게 변함없는 사랑을 받고 있다. 이 시리즈는 여덟 편의 영화로도 제작되어 전 세계 곳곳에서 흥행을<br/>
                    거두었고, 영화와 관련된 새로운 도서가 출간되고 테마 파크가 조성되는 등 놀라운 기현상을 빚어냈다.<br/><br/>
                    뿐만 아니라 『해리 포터』 시리즈에서 또 다른 작품들이 문화상품으로 파생되어 지금도 꾸준히 독자들을 만나고 있다. ‘해리 포터’의 다음 세대인 자녀들의 이야기를 다룬 『해리 포터와<br/>
                    저주 받은 아이』는 시나리오로 출간된 이후 연극으로 만들어져 영국을 시작으로 미국, 호주, 독일, 캐나다 등 세계 곳곳에서 열띤 호응을 얻으며 공연 중이고, 『해리 포터』의 세계관이<br/>
                    확장된 『신비한 동물 사전』 시리즈는 계속해서 영화로 제작되고 있다. 이제 『해리 포터』는 소설이라는 단순한 문학 장르에 머무르지 않고 ‘21세기를 대표하는 시대의 아이콘’으로<br/>
                    불리며 일종의 사회문화 현상으로 받아들여지고 있다.<br/><br/>
                    20주년을 맞아 새롭게 출간한 『해리 포터』 시리즈는 ‘21세기 고전’이라 불릴 만한 품격에 맞춰 작품의 완성도를 높였다. 7권 『해리 포터와 죽음의 성물』로 완간된 기존의 『해리 포터』<br/>
                    시리즈는 빈틈없는 소설적 구성과 생생한 캐릭터 그리고 마법 세계를 정교하게 묘사하며 풍부한 상상력이 돋보이면서도 정밀한 세계관을 구축해 나갔다. 하지만 지금까지 출간된<br/>
                    책들은 J.K. 롤링이 펼쳐 나가는 판타지 세계의 규모가 어느 정도이며 그 속에 어떠한 소설적 장치를 심어 놓았는지 알 수 없는 상태에서 번역 작업이 이루어졌다. 또한 1~7편 모두<br/>
                    완결성을 갖추었지만, 시리즈의 특성상 편과 편을 이어 주며 작품 전체를 관통하는 서사의 개연성과 완결성은 마지막 편이 출간된 이후에나 파악할 수밖에 없었다. 그러다 보니 작가가<br/>
                    어느 장면에 복선을 깔아 두었고, 어느 장면이 작가가 창조한 세계관을 이해하는 중요한 역할을 하는지 의미를 파악하며 번역하기에는 한계가 있었다.<br/><br/>
                    이번에 선보이는 『해리 포터』 시리즈에는 J.K. 롤링이 작품 속에 이룩해놓은 문학적 성취가 완벽하게 구현되어 있다. 복선과 반전을 선사하는 문학적 장치들을 보다 정교하고 세련되게<br/>
                    다듬었으며, 인물들 사이의 관계나 그들의 숨겨진 비밀 그리고 성격이 도드라지는 말투의 미세한 뉘앙스까지 점검했다. 『해리 포터』의 세계에 처음 발을 들여놓는 독자는 물론, 그동안<br/>
                    『해리 포터』의 세계를 즐겨 찾아왔던 독자 모두에게 완성도 높은 만족과 감동을 선사할 것이다.<br/><br/>
                    <strong> 1탄 《해리포터와 마법사의 돌》</strong><br/>
                    어둠의 마왕 볼드모트에게 부모를 잃고 홀로 살아남은 아이, 해리는 안전을 위해 마법사가 아닌 사람인 ‘머글’ 페투니아 이모와 버논 이모부 손에 길러지며 불우한 어린 시절을 보낸다.<br/>
                    열한 번째 생일날, 해그리드를 통해 자신이 마법사라는 사실을 알게 된 해리는 호그와트 마법학교에 입학해 헤르미온느 그레인저, 론 위즐리라는 친구들과 함께 영생을 주는 마법사의<br/>
                    돌을 찾는 엄청난 모험을 시작하게 된다.<br/>
                </p>
            </div>
        );
    }
    const introductionText = BookIntroduction2()

    const reviewText =`
     ‘해리 포터 키즈’가 완벽하게 구현한 J.K. 롤링의 마법 세계!
    우리 시대에 가장 사랑받는 ‘21세기의 고전’을 고전답게 재해석하다!

    출간된 지 20년이 지났어도 『해리 포터』 시리즈가 전 세계에서 끊임없이 사랑을 받는 이유는 무엇일까? 그것은 매혹적이고 환상적인 이야기로 남녀노소의 구분 없이 오랫동안 전 
    연령의 독자층의 이목을 사로잡았기 때문이다. 보통 흥행하는 도서, 영화 등의 문화상품은 특정한 팬덤층이 형성되어 일시적인 유행을 이끄는 데 비해 『해리 포터』는 유례를 찾아볼 
    수 없을 만큼 특정 층에 국한되지 않고 책을 좋아하는 대다수 독자층의 지지를 얻고 있다. 이러한 현상이 20년 동안 지속되다 보니, 청소년 시절 『해리 포터』를 경험했던 1세대들이 
    부모 세대가 되어 자녀에게 소개시켜주면서 시간이 흐를수록 새로운 독자층이 생겨나고 있다.

    20주년에 맞춰 다음 세대를 위해 새롭게 번역 작업을 한 강동혁 역자 또한 중학생 시절 『해리 포터』에 흠뻑 빠져든 ‘해리 포터 키즈’였다. 그는 독서의 즐거움에 그치지 않고 
    직접 포털사이트에 ‘호그와트 마법학교’라는 카페를 만들어 ‘해리 포터’ 세계의 이모저모를 수많은 카페 회원들과 공유했고, 대학의 영어영문학과에 진학해서는 제프리 초서나 
    셰익스피어 같은 영문학에서 큰 비중을 차지하는 작가들의 작품과 『해리 포터』 시리즈를 친구들과 비교·분석하기도 했다.

    한편으로 그는 성인이 되어 원서를 접하게 되면서 독자 입장에서 아쉬움을 느끼기도 했다. 사실 20년 전만 해도 ‘판타지’는 국내 문학시장에서는 전문적인 장르로 인정받지 못했고, 
    호그와트에 입학하는 어린 해리가 주인공으로 등장하는 『해리 포터』는 더더욱 ‘어린이들이 읽는 책’이라는 공고한 선입견을 떼어 낼 수 없었다. 그 때문에 기존 번역본에서는 몰입감과 
    가독성을 높여 주는 장점을 살렸지만, 주된 독자층인 청소년에 맞춰 번역 과정에서 어휘를 조절해야 했다. 역자는 성인이 된 1세대들도 꾸준히 읽는 ‘고전’이 된 만큼, 이번에 
    출간되는 시리즈는 작가의 은유와 비유적인 표현은 물론 의도를 독자들이 생생하게 느낄 수 있는 데 번역의 주안점을 삼았다. 기존 번역본에서 순화된 표현이나 미묘한 뉘앙스의 차이 
    또한 꼼꼼하게 검토하고 크고 작은 톱니바퀴를 만들 듯 세밀하게 보완했다.

    역자는 해리 포터를 처음 만나는 어린 세대가 20년이 지나 성인의 눈높이에서 읽어도 어색함 없이 책을 통해 ‘해리 포터’ 세계를 경험하며 기쁨을 만끽할 수 있도록 고전의 
    깊이로 담아냈다.
      `;
    function AuthorProfile2(){
        return(
        <div>
            <h3>조앤.K.롤링 Joan K. Rowling</h3>
            <p>
                <br/>
                <strong>출생</strong>
                <br/>
                1965년 7월 31일 <br/><br/>
                <strong>학력</strong>
                <br/>
                하버드대학교 명예박사 <br/>
                엑시터대학교 명예박사 <br/>
                엑시터대학교 불문학, 고전학 학사 <br/><br/>
                <strong>경력</strong>
                <br/>
                포르투갈 인카운터 영어학교 교사 <br/><br/>
                <strong>수상</strong>
                <br/>
                2012년 런던시 자유상 <br/>
                2010년 안데르센 문학상 <br/>
                2009년 레종도뇌르 슈발리에 훈장 <br/>
                2001년 휴고상 <br/>
                2000년 올해의 작가상 <br/>
            </p>
        </div>
        );
    }
    const authorBio = AuthorProfile2();


    const tableOfContents = [
        '1장 살아남은 아이',
        '2장 사라진 유리창',
        '3장 발신자 없는 편지들',
        '4장 숲지기',
        '5장 다이애건 앨리',
        '6장 9와 4분의 3번 승강장에서 떠나는 여행',
        '7장 기숙사 배정 모자',
        '8장 마법약 교수',
        '9장 한밤의 결투',
        '10장 핼러윈',
        '11장 퀴디치',
        '12장 소망의 거울',
        '13장 니콜라 플라멜',
        '14장 노르웨이 리지백 노버트',
        '15장 금지된 숲',
        '16장 바닥의 문을 지나서',
        '17장 두 얼굴을 가진 남자'

    ]; // 예시 목차
    const commentsData = ['표지가 왜 바뀌었는지 모르겠네요 ㅠㅠ 신판 원래 버젼이 좋았는데 ㅠㅠㅠ', '헤헤 중고 구하러 가야겠다'];

    return (
            <div className="Detailpage">
                <Header />
                <BookDetail2 book={bookData}/>
                <BookIntroduction introduction={introductionText}/>
                <PublisherReview review={reviewText}/>
                <AuthorProfile author={{bio: authorBio}}/>
                <TableOfContents contents={tableOfContents}/>
                <Comments comments={commentsData}/>
            </div>
    );
}

export default DetailPage2;
