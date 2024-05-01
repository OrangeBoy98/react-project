import React from 'react';
import BookDetail from '../components/detail/BookDetail';
import BookIntroduction from '../components/detail/BookIntroduction';
import PublisherReview from '../components/detail/PublisherReview';
import AuthorProfile from '../components/detail/AuthorProfile';
import TableOfContents from '../components/detail/TableOfContents';
import Comments from '../components/detail/Comments';
import '../assets/Detailpage.css';

const DetailPage = () => {
    const bookData = {
        src: "https://img.ridicdn.net/cover/4755000137/xxlarge?dpi=xxhdpi#1",
        title: '개정판 | 류츠신 삼체 3부작 2권',
        author: '류츠신 저',
        publisher: '자음과모음 출판',
    }
    

    const introductionText = `
        SF의 신화가 된 류츠신『삼체』를 개정판으로 새롭게 만나다
        
        오바마 전 미국 대통령이 선택하고,
        노벨문학상 모옌이 극찬한 최고의 작품!
        아시아 최초로 휴고상을 수상하며 SF 거장으로 등극한 류츠신의 『삼체』 시리즈(전 3권)가 개정판으로 자음과모음에서 새롭게 출간되었다. 『1부-삼체문제』 『2부-암흑의 숲』 
        『3부-사신의 영생』으로 이어지는 ‘지구의 과거’ 3부작은 무수한 위험이 숨어 있는 ‘암흑의 숲’과 같은 우주에서 인류가 마주하게 될 운명을 대담한 상상력으로 그려냈다. 오바마 미국 
        전 대통령이 “『삼체』를 읽을 때 작품 스케일이 워낙 커서 백악관의 일상사가 사소하게 느껴졌다”(『뉴욕타임스』 인터뷰)라고 평했을 만큼, 『삼체』가 구축하고 있는 세계는 무한한 우주를 
        향해 끝없이 팽창한다.
        이처럼 『삼체』는 작가가 컴퓨터 엔지니어로 일하며 축적한 과학적 이론을 기반으로 독자들에게 우주에 관한 초월적인 시야를 선사한다. 『삼체』는 문화대혁명에서부터 수백 년 후 외계 
        문명과 인류의 전면전까지로 이어지는 SF 대서사시로 『1부-삼체문제』에서는 지구로부터 4광년 떨어져 있는 삼체 세계와 신호를 주고받으면서 외계 문명과 조우하게 된 인류의 
        운명을 그려내고 있으며, 『2부-암흑의 숲』에서는 “문명은 끊임없이 성장하고 확장되지만 우주의 물질 총량은 불변한다”라는 우주 공리(公理)를 내세우며 ‘암흑의 숲’과 같은 우주에서 
        살아남기 위해서는 외계 문명과의 생존경쟁이 불가피함을 말한다. 『3부-사신의 영생』에서는 외계 문명과의 전면전에서 살아남은 인류가 우주에 존재하는 더 큰 공포와 맞닥뜨리며 
        대단원의 막을 내린다. 1부에서 4부로 이어지는 무한한 상상력은 우주에 대한 본질적인 사고를 극한으로 끌어올리며 지적 즐거움을 경험하게 한다.
    `;
    const reviewText =`
     “인류가 이 전쟁에서 승리하는 것은 불가능하다.
      너희는 벌레다!”
      세 개 태양이 불타는 켄타우루스 알파성 삼중성계
      삼체 문명의 항성급 함대가 지구를 향해 출발한다
      
      『1부-삼체문제』에서 예원제는 문화대혁명의 광기 속에 아버지를 잃고, 어머니에게 버림을 받는다. 대학에서 천체물리학을 전공한 그녀는 외계 문명 탐사를 목적으로 만들어진 특급 
      기밀 지역인 홍안 기지에 들어가게 되고, 어느 날 밤 외계 문명으로부터 인류 최초로 전파를 수신받는다.  “경고한다. 대답하지 마라! 대답하는 순간 그곳의 위치가 파악되어 당신들의 
      세계는 점령당할 것이다.” 모든 것을 잃은 예원제는 무시무시한 경고 메시지에도 불구하고 인류에 대한 복수를 결심한다.
      
      “이곳에 오십시오. 나는 당신들이 이 세계를 얻는 것을 돕겠습니다.
      우리 문명은 이미 자신의 문제를 해결할 능력을 잃었습니다.
      당신들의 힘이 필요합니다.”
      
      40년 후, 중국 과학계는 기초과학 연구자들의 연이은 죽음으로 혼란에 빠진다. 그들은 모두 국제적 과학 학술 단체 ‘과학의 경계’ 회원들이다. 나노 소재 연구자 왕먀오는 가장 최근에 
      스스로 목숨을 끊은 촉망받던 여성 물리학자 양둥의 죽음에 의문을 갖고 경찰과의 협조하에 ‘과학의 경계’ 회원들과 접촉한다. 그 과정에서 가상현실 게임 ‘삼체’를 통해 세 개의 태양이 
      존재하는 기이한 ‘삼체 세계’와 접하게 된다. 한편, 눈앞에 계속해서 나타나는 알 수 없는 카운트다운의 정체를 알아내기 위해 왕먀오는 양둥의 어머니인 은퇴한 천체물리학자 
      예원제를 찾아간다.
      `;
    const authorBio = `
        중국을 대표하는 과학소설가. 1999년부터 2006년까지 8년 연속으로 중국 과학소설계 최고 권위를 자랑하는 SF 은하상을 수상했다. 주로 중국 현대사에 대한 깊은 성찰을 바탕으로 
        근미래의 중국 사회를 묘사함으로써 중국 과학소설의 지평을 넓혔다는 평가를 받고 있다. 1963년 6월 베이징에서 광산 엔지니어인 아버지와 교사인 어머니 사이에서 태어났고 
        아버지의 일 때문에 산시성 양취안에서 성장했다. 1985년 화베이 수리수력원 수리공정학과를 졸업하고 산시 냥쯔관 발전소에서 컴퓨터 엔지니어로 일하기 시작한다.
        SF에 흥미를 가진 계기가 된 작품은 쥘 베른의 『지구 속 여행』이며, 그 후 아서 C. 클라크의 『2001 스페이스 오디세이』를 읽고 본격적으로 SF에 빠져들게 되었다. 그렇게 소설을 쓰기 
        시작해 1999년 「고래의 노래」로 데뷔했다. 이 소설은 웅장한 스케일의 상상력과 아름다운 문장으로 문단과 독자로부터 호평을 받았다. 같은 해 『그녀의 눈과 함께』로 SF 은하상을, 
        이듬해 『떠도는 지구』로 SF 은하상 대상을 거머쥐며 류츠신은 단숨에 중국 과학소설계의 기대주로 떠오른다.
        주요 작품으로는 아이들만이 살아남아 지구를 통치하게 되는 미래를 그린 『초신성 시대』, 부모를 구형 번개 사고로 잃은 소년이 평생에 걸쳐 번개의 정체를 알아내는 과정을 다룬 
        『구상섬전』 등이 있고, 대표작인 「향촌 교사」 「중국 태양」이 실려 있는 단편집 『유랑지구』는 2019년 SF 블록버스터 영화로 제작되어 중국 역대 흥행 2위까지 올랐다.
        특히 『삼체 1부-삼체문제』를 시작으로 연이어 발표한 ‘지구의 과거’ 3부작은 문화대혁명에서부터 수백 년 후 외계 문명과 인류의 전면전으로까지 이어지는 SF 대서사시로, 중국 
        과학소설을 세계 수준으로 올려놓은 기념비적인 작품이다. 이 시리즈는 과학소설로서는 이례적으로 평단의 극찬과 독자의 열광적인 반응 속에 300만 부라는 판매고를 기록하며 
        제18회 SF 은하상 특별상을 수상했다. 『삼체』는 휴고상, 네뷸러상, 월드판타지상을 석권한 소설가 켄 리우가 직접 번역을 맡아 중국 과학소설로는 처음으로 미국에 정식 출간되었고, 
        2016년 세계 최고 권위의 SF 문학상인 휴고상을 아시아 최초로 수상했다. 류츠신의 소설은 우주와 미래에 대한 극단적인 설정 속에 문화대혁명, 톈안먼 사태, 양탄 공정 등 중국 
        현대사의 굵직한 사건들을 절묘하게 녹여내면서 극적 긴장과 현실감을 획득한다. 또한 풍부한 과학 지식을 바탕으로 하는 엔지니어 특유의 구체적이고 섬세한 기술 묘사는 그에게 
        “과학 기술과 상상력이라는 양 날개를 달고 창공을 향해 비상하는 작가”라는 평을 가져다주었다.
    `;
    const tableOfContents = [
        '1부 삼체문제',

        '‘초석’ 앞에 쓰다',
        '물리학은 존재하지 않는다',
        '반중력 당구공',
        '저격수와 농장주',
        '삼체, 주 문왕, 긴 밤',
        '예원제',
        '우주의 반짝임 1',
        '광란의 시대',
        '침묵의 봄',
        '홍안 1',
        '우주의 반짝임 2',
        '불가사의한 일 뒤에는 반드시 귀신이 있다',
        '삼체, 묵자, 화염',
        '홍안 2',
        '홍안 3',
        '홍안 4',
        '삼체, 코페르니쿠스, 우주의 럭비, 세 개의 태양',
        '삼체문제',
        '삼체, 뉴턴, 폰 노이만, 진시황, 일직선으로 늘어선 세 개의 태양',
        '회합',
        '삼체, 아인슈타인, 단진자, 대분열',
        '삼체, 원정',
        '지구 반군',
        '홍안 5',
        '홍안 6',
        '죽음의 꽃',
        '레이즈청과 양웨이닝의 죽음',
        '누구도 참회하지 않는다',
        '종의 공산주의',
        '제2의 홍안',
        '지구 삼체 운동',
        '두 개의 양성자',
        '작전명 ‘쟁’',
        '1379호 감청원',
        '지자 프로젝트',
        '벌레',
        '에필로그·유적',
        '작가의 말'
    ]; // 예시 목차
    const commentsData = ['정말 흥미로운 책이었습니다.', '추천해요!'];

    return (
        <div className="Detailpage">
            <BookDetail book={bookData} />
            <BookIntroduction introduction={introductionText} />
            <PublisherReview review={reviewText} />
            <AuthorProfile author={{ bio: authorBio }} />
            <TableOfContents contents={tableOfContents} />
            <Comments comments={commentsData}/>
        </div>
    );
}

export default DetailPage;
