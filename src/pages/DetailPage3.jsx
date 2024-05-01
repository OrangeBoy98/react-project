import React from 'react';
import BookDetail3 from '../components/detail/BookDetail3';
import BookIntroduction from '../components/detail/BookIntroduction';
import PublisherReview from '../components/detail/PublisherReview';
import AuthorProfile from '../components/detail/AuthorProfile';
import TableOfContents from '../components/detail/TableOfContents';
import Comments from '../components/detail/Comments';
import '../assets/Detailpage.css';


function DetailPage3() {
    // 여기에 책 정보, 소개, 서평, 저자 정보, 목차, 댓글 데이터가 있다고 가정합니다.
    const bookData = {
        src:"https://img.ridicdn.net/cover/950000429/xxlarge?dpi=xxhdpi#1",
        title: '컬트',
        author: '맥스 커틀러, 케빈 콘리 저박중서 역',
        publisher: '을유문화사 출판'
        // ... 기타 필요한 책 정보
    };

    const introductionText = `
    컬트란 무엇이고
    우리는 왜 컬트에 빠져드는가
    컬트는 우리를 인간답게 만들어 주는 그 속성을 먹이로 삼는다. 여기서 말하는 속성이란 바로 우리의 소속되려는 열망, 삶에서 더 깊은 의미를 찾으려는 열망, 신성한 
    목적을 지니고 일상을 살고 싶은 열망을 뜻한다. 이런 속성이 존재한다는 것은 결국 우리가 누구든지, 또 언제든지 저 무시무시한 컬트의 나락으로, 아울러 엉뚱한 대의를 
    향한 무조건적인 헌신으로 떨어질 가능성이 있다는 뜻이 된다. 어쩌면 바로 이런 마음가짐 때문에 우리는 컬트에 관해서 더 많이 알아내려고 노력하는 것일 수도 있다. 또 
    어쩌면 그 이야기가 워낙 엽기적이고도 불편하기 때문에, 우리는 이 악명 높은 집단들을 그렇게 굴러가게 만든 동력에 그저 감탄하는 것일 수도 있다.
    2017년 9월 처음 방송을 시작해 4년에 걸쳐 다운로드 횟수 5500만 건을 기록하며 청취자들의 열렬한 반응을 얻었던 미국의 인기 팟캐스트 (컬트)는 바로 그런 동력을 
    파헤치는 데 초점을 맞추어 왔다. 즉 컬트 지도자와 그 추종자, 그리고 이들 모두를 산출한 세계와 문화를 파헤치는 것이다. 이 책은 그 내용 가운데 가장 중요하고 
    사회적으로 큰 영향을 주었던 사례만을 골라 재구성한 단행본이다. 맨슨 패밀리, 인민사원, 천국문처럼 세계적으로 악명을 떨친 사례에서부터 크레도니아 음웨린데처럼 
    그 규모에 비해서 덜 알려진 사례, 가장 최근에 나타난 다단계 겸 자기계발 컬트 넥시움의 사례까지 모두 아홉 가지에 대해서 다룬다.

    찰스 맨슨부터 마셜 애플화이트까지
    사이코패스의 면모를 지닌 컬트 지도자들
    이 책에서 분석하는 서로 다른 세대의 컬트 지도자들에게는 뚜렷한 공통점이 있다. 그들은 압도적인 카리스마를 지닌 비범한 인물이면서 동시에 살인, 강간, 상해, 기타 
    잔혹 행위를 다수 저질렀다는 점에서 사이코패스의 전형적인 면모를 드러냈다. 사이코패스 검사의 창안자 로버트 헤어는 뛰어난 언변, 과도한 자기애, 공감 결여, 냉혹함, 
    무책임, 상습적 거짓말, 타인 조종 등을 그런 부류의 특징으로 거론하는데, 이 책에 나온 컬트 지도자들의 행적을 살펴보면 상당 부분 유사성이 나타난다. 사람을 휘어잡는 
    카리스마와 사람을 해치는 잔혹성이 사실은 동전의 양면이었던 셈이다.
    저자는 이러한 컬트 지도자의 행적을 상세히 추적하는 한편 그들의 심리와 동기를 이해하려고 노력한다. 어떻게 해서 그들이 사람들을 조종하고, 어떻게 해서 당대의 
    사회·문화적 환경이 그들의 범죄를 도왔는지를 살펴본다. “컬트 지도자가 된다는 것은 위험한 게임이었지만, 어떤 사람이 일단 그쪽의 소질을 발견하고 나면, 이번 생과 
    다음 생에 걸쳐 궁극적인 권력을 제공하는 조종을 중단하기는 어려우며, 급기야 상황이 너무 늦어버리고 마는 것이다.” 저자의 지적대로 그들은 각자의 욕망과 망상을 
    위해서 타인을 거침없이 착취하며 급기야 자신의 추종자들을 죽음으로까지 내몰았는데, 그 과정은 우리가 신성하게 여겨 온 것들을 가장 저급한 형태의 악의로 활용하는 
    과정이기도 했다.
    `;

    const reviewText =`
     왜 사람들은 컬트에 빠져들까? 그 내부에서는 실제로 무슨 일이 벌어지는 걸까? 컬트 지도자와 그를 추종하는 사람들의 머릿속에는 도대체 무엇이 들어 있을까? 
     총다운로드 수 5500만 건을 기록한 미국의 인기 팟캐스트를 토대로 한 이 책은 20세기 이후 세상을 경악하게 한 집단 광기의 역사를 기록하고 있다. 찰스 맨슨부터 마셜 
     애플화이트까지 전 세계의 이목을 집중시킨 악명 높고 기괴한 컬트 집단에 대한 상세한 설명과 분석은 각종 이단과 사이비 문제로 골머리를 앓고 있는 한국 사회에도 
     시사하는 바가 클 것이다.
      `;

    const authorBio = `
    지은이_맥스 커틀러(Max Cutler)
    2019년 스포티파이에 인수된 유명 팟캐스트 ‘파캐스트(Parcast)’ 스튜디오의 설립자이며, 그의 지휘하에 2017년 9월 처음 방송을 시작한 (컬트)는 4년에 걸쳐 다운로드 횟수 
    5500만 건을 기록하며 청취자들의 열렬한 반응을 얻었다. 동명의 인기 팟캐스트를 토대로 만든 이 책에서 커틀러는 찰스 맨슨부터 마셜 애플화이트까지 컬트 지도자의 어린 시절, 
    그들이 컬트 집단을 이끌게 된 과정, 극단적인 파국과 그 이후의 이야기를 정밀한 취재와 조사를 바탕으로 서술한다. 그가 『뉴요커』 에디터 출신 케빈 콘리의 도움을 받아서 저술한 이 
    책은 『뉴욕 타임스』와 『퍼블리셔스 위클리』 등 다수 매체로부터 “컬트가 사람들을 끌어들이는 요소와 컬트 지도자의 심리를 통찰력 있게 탐구”한 “범죄 실화를 위한 필독서”라는 
    평가를 받았다.

    지은이_케빈 콘리(Kevin Conley)
    『뉴요커』 에디터 출신으로 『GQ』, 『뉴욕 타임스 매거진』 등에도 글을 썼다. 저서로는 전미 베스트셀러 『Stud: Adventures in Breeding』 등이 있다.

    옮긴이_박중서
    출판 기획 및 번역가로 활동 중이다. 종교 분야의 번역서로는 『불멸의 열쇠』, 『영웅의 여정』, 『신화와 인생』, 『무신론자를 위한 종교』, 『과학적 경험의 다양성』 등이 있다
    
    `;


    const tableOfContents = [
        '서론',

        '제1장 수치: 찰스 맨슨과 패밀리',
        '제2장 수치: 아돌포 데 헤수스 콘스탄소와 마약악마숭배파',
        '제3장 착취: 바그완 슈리 라즈니쉬',
        '제4장 착취: 짐 존스와 인민사원',
        '제5장 가학성: 로크 테리오와 개미 언덕 아이들',
        '제6장 과대망상: 데이비드 코레시와 다윗가지파',
        '제7장 가학성: 키스 라니에르와 넥시움',
        '제8장 탈주: 크레도니아 음웨린데와 하느님의 십계명 회복 운동',
        '제9장 현실 부정: 마셜 애플화이트와 천국문',

        '감사의 말',
        '옮긴이의 말',
        '주',
        '참고 문헌'

    ]; // 예시 목차
    const commentsData = ['컬트 와 찰스맨슨의 관계를 잘 이해 할 수 있는 유익한 책이네요.', '컬트의 역사에 대한 깊은 고찰...'];

    return (
            <div className="Detailpage">

                <BookDetail3 book={bookData}/>
                <BookIntroduction introduction={introductionText}/>
                <PublisherReview review={reviewText}/>
                <AuthorProfile author={{bio: authorBio}}/>
                <TableOfContents contents={tableOfContents}/>
                <Comments comments={commentsData}/>
            </div>
    );
}

export default DetailPage3;
