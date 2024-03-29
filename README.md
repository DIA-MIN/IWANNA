#  IWANNA

<h3 align="center">

<img width="500" height="380" src=https://user-images.githubusercontent.com/42745614/182776233-36e39b7c-5262-4146-9e48-b83728a6245e.gif></br>

</h3>
프로젝트 소개: 다양한 뉴스 확인 및 스크랩할 수 있는 웹앱입니다.</br>
진행 기간: 2022년 7월 6일 → 2022년 8월 2일</br>
프로젝트 인원: 개인 프로젝트</br>
Service Link: https://dia-min.github.io/IWANNA/

## 🎈Motivation
</br>
최근 미디어 플랫폼(YouTube, Instagram)에서 한정적이고 정확하지 않은 정보를 얻고 있었던 나는 기존에 알던 사실과 실제 뉴스에 나오는 내용이 많이 다르다는 것을 느꼈다. 

그래서 미디어 플랫폼 아닌 공식 뉴스를 찾아보게 되었는데, 그 과정에서 많은 불편함을 느꼈다.

많은 방송/통신사 중 하나를 선택하여 원하는 카테고리의 뉴스를 접하기까지 프로세스가 너무 복잡하다고 생각했다. 

뉴스를 쉽게 접할 수 있고 카테고리별 원하는 뉴스를 보며, 스크랩까지 가능한 웹사이트가 있으면 자주 사용할 거 같아 만들게 되었다. 
</br>
</br>
## ⚙️ Stack
- **Front-End** : React, TypeScript, Redux, Sass
- **Deployment** : GitHub

## 📄 프로젝트 소개

현재 프로젝트에서 제공하는 서비스는 다음과 같다.

- 각 카테고리별 뉴스의 정보를 확인할 수 있다.
- 관심 있는 뉴스같은 경우 스크랩을 통해 모아볼 수 있다.
- 원하는 뉴스를 검색하여 빠르게 찾아볼 수 있다.

## 💻 개발 내용

### 컴포넌트 디자인 및 개발

프로젝트 설계 단계에서 작성 했던 Mockup을 중심으로 컴포넌트를 개발하였으며, 다양한 기기에 대응되도록 반응형으로 디자인하였습니다.

### 로컬 저장소를 활용한 데이터 관리

해당 프로젝트의 스크랩 컴포넌트는 뉴스 데이터를 저장하기 위해 **`Redux`**와 `**localStorage**`를 활용하여 별도의 백엔드 구현 없이 데이터를 최대한 활용할 수 있도록 구현했습니다.

## 💎 나의 성장

### Data Type의 중요성

해당 프로젝트에 `**TypeScript**`를 적용해 보면서 **data type**의 중요성을 알게 되었습니다. 

컴포넌트에 API의 데이터를 뿌려주기 전 interface에 데이터의 타입을 미리 정의해 놓음으로써 자잘한 에러 및 버그를 방지할 수 있었습니다. 

또한, 미리 정의한 데이터 타입들을 재활용 함으로써 생산성도 높일 수 있었습니다.

### React.StrictMode

News Ticker 기능을 구현하고 useEffect로 해당 함수를 첫 렌더링 시 호출되도록 하였으나, UI 상의 문제를 발견하였습니다. 

디버깅 결과 useEffect가 두 번 호출되는 문제가 있었으며, React에서 기본으로 제공하는React.StrictMode가 원인인 것을 알 수 있었습니다.

해당 모드는 개발 단계시 오류를 잘 잡기위해 두 번씩 렌더링되는 것이었으며, 해당 프로젝트를 진행하면서 React에 대해 더 공부를 할 수 있었던 계기가 되었습니다.

### Open API에 대해

API 호출 시 로컬 환경에서는 데이터가 잘 받아져 왔으나, 배포 후 환경에서는 데이터를 받아올 수 없는 문제가 있었습니다. 

해당 API 사이트에서는 로컬 환경에서만 데이터를 무료 제공하는 사이트였기 때문에 로컬 이외의 환경은 제공받을 수 없는 것이 원인이었습니다.

다행히도 비슷한 데이터를 제공하는 API로 대처하였고, 브라우저 개발자 도구의 Network 패널에서 API request 시 response 결과가 오가는지 분석할 수 있는 역량을 기르게 되었습니다.

## ✨ 서비스 화면

### 1-1. 메인 페이지 (배너)

<img width="944" alt="Untitled" src="https://user-images.githubusercontent.com/42745614/182777507-010229a6-0ac3-437f-a827-5527ebc960eb.png">

### 1-2. 메인 페이지 (카테고리 및 뉴스)

<img width="896" alt="Untitled 1" src="https://user-images.githubusercontent.com/42745614/182777653-b2ea9776-1808-44d4-971b-27991818f59f.png">


### 2. 스크랩

<img width="942" alt="Untitled 2" src="https://user-images.githubusercontent.com/42745614/182777703-95503b0e-31fd-41b4-9306-72e7cadd1e84.png">


### 3. 뉴스 조회

<img width="867" alt="Untitled 3" src="https://user-images.githubusercontent.com/42745614/182777725-276b5f85-af28-405e-941e-79a74e2ef9ea.png">
