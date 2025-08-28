import React from 'react'

const Dom = () => {
  return (
    <>
      {/*
        1. DOM, 가상의 DOM
          DOM 
          = Document Object Model
          = html을 해석해서 트리 구조로 나타내는 것
        
          가상 DOM
          = 자바스크립트 객체로 만들어진 가상의 'DOM'
          = 리액트에서 사용
          = 렌더링 성능 최적화
          = UI 업데이트 최적화

        2. 패키지 관리자
        = 프로젝트의 의존성 관리
        = 라이브러리 설치 및 업데이트
        = 패키지 배포
          <대표적인 패키지 관리자>
          1) 자바스크립트의 npm
          2) 루비(Ruby)의 gem
          3) PHP의 composer
          4) 파이썬(Python)의 pip
        = 'npm'이나 'yarn'의 장점
        1) 패키지 버전 관리(팀 안에서 패키지를 공유하고 버전을 통일하기 쉽다)
        2) 의존성 관리(의존하지 않아도 자동으로 해결)
        3) 스크립트 실행
        4) 전 세게에 공개된 패키지를 하나의 명령어로 이용할 수 있다
        5) 어디에서 로딩한 것인지 알기 쉽다

        <패키지 관리자의 동작 과정>
        NPM(패키지 저장소) -> 패키지 설치 -> package.json(Node.js/React 프로젝트의 “설명서 + 설정파일”) 업데이트 -> node_modules(패키지들이 설치되는 폴더) 생성
        = 명령어를 실행하면 로컬 파일인 'package.json'이 변경되고(업데이트) 패키지 정보가 추가된다
        npm설치 : <package-lock className="json"></package-lock>
        yarn설치 : <yarn-lock className="json"></yarn-lock>
        = 'node_modules' 폴더는 패키지들이 설치되는 폴더
        = 'node_modules' 폴더는 용량이 크기때문에 보통 git(깃허브)에 올리지 않는다

        NPM 
        = 전 세계 사람이 패키지 공개 장소로 사용
        = npm install [패키지명] / yarn add [패키지명] : 간단한 명령어로 전 세계 사람이 공개한 패키지들을 사용할 수 있다


      */}
    </>
  )
}

export default Dom