// export default function Component3(){
//     return (
//         <>
//             <h1>Hello, Function Componen</h1>
//         </>
//     )
// }


export default function Component3(){
    return(
        <>
            <h1>Hello, Function Componen</h1>
        </>
    )
}
/*
    Function Component(함수형 컴포넌트)
    = 함수를 사용해 컴포넌트를 작성하는 방식
    = 'function'키워드로 함수를 선언한 뒤 'return'문 안에 JXS를 사용해 화면에 표시할 UI 구조를 정의
    = 함수형 컴포넌트가 실행하면 'return' 문에 작성한 JXS가 반환
    = 리액트는 반환된 JSX를 HTML로 변환해 웹 브라우저에 렌더링한다
    = 즉 JSX로 실제 화면(UI)이 어떻게 보여야 할지 구성하는 것
    = 상속이나 복잡한 구조없이 함수 하나만으로 컴포넌트를 만들 수 있어 가독성이 뛰어나고 작성하기도 쉽다
    
        [형식]
            (1) export default function [컴포넌트_이름](){
            = App 컴포넌트를 함수형 컴포넌트로 선언
            = 선언할 때 'export default' 키워드를 사용하면 이 컴포넌트를 다른 파일에서 쉽게 불러와 사용할 수 있다

                (2) return(
                    <>
                        <h1>Hello, Function Component</h1>
                    </>
                )
                = 'return'문 안에서는 리액트에서 사용하는 JSX 문법을 작성
                = 여기서는 'Fragment' 단축 문법인 '<>...</>'를 사용
                = 'Fragment'는 여러 요소를 감쌀 때 불필요한 HTML 태그를 추가하지 않고 그룹화할 수 있게 해준다
            }

    <클래스 컴포넌트와 함수형 컴포넌트>
    1. 클래스 컴포넌트
    = 리액트 16.8 이전에는 상태관리나 생명주기 기능을 구현하면 클래스 컴포넌트를 반드시 사용해야 했다
    = 하지만 클래스 컴포넌트는 문법이 복잡하고 상태 관리나 코드 재사용이 어렵다는 단점이 있다

    2. 함수형 컴포넌트
    = 단순히 'function'키워드로 컴포넌트를 정의할 수 있어서 자바스크립트를 익힌 사람에게 더 직관적이다
    = 리액트 훅의 도입으로 상태관리, 생명주기 처리 등 대부분의 기능을 '함수형 컴포넌트'에서 구현할 수 있게 되었다
    = 2019년 이후 대부분 프로젝트에서는 '함수형 컴포넌트'를 주로 사용
*/
