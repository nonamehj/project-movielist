<!-- # MovieList App

## 프로젝트 개요

- MovieList App은 다양한 카테고리의 영화를 검색하고, 각 영화의 상세 정보를 확인할 수 있는 React 기반의 애플리케이션입니다. 사용자는 카테고리별 영화 목록을 탐색하고, 영화의 세부 정보를 볼 수 있습니다.

## 사용 기술

- **React**: 사용자 인터페이스를 구축하기 위한 라이브러리입니다.
- **React Router**: `BrowserRouter`를 사용하여 페이지 간의 이동을 구현하였습니다.
- **Context API**: 상태 관리를 위한 컨텍스트를 만들어, `useGlobalContext`를 통해 각 페이지에 상태를 전달하였습니다.
- **Fetch API**: 데이터를 가져오는 데 사용하였으며, `useCallback`을 사용하여 성능을 최적화하였습니다.
- **useParams**: 영화 목록에서 상세 페이지로 이동할 때 사용하였습니다.
- **useNavigate**: 검색 시 결과 페이지로 이동할 때 사용하였습니다.
- **useRef**: 검색 입력 필드에서 리렌더링을 방지하는 데 사용하였습니다.
- **useEffect**:
- 홈 페이지에서 3초 간격으로 슬라이드를 전환하는 데 사용하였습니다.
- 주소 값이 바뀔 때마다 `useEffect`로 `fetch`를 실행하여 데이터를 가져오도록 하였습니다.

## 주요 기능

- **홈 페이지**: 3초 간격으로 랜덤 슬라이더가 전환되는 화면을 제공합니다.
- **카테고리 페이지**: `Comedy`, `Kids`, `Popular`, `Theatre` 등의 카테고리별 영화 목록을 표시합니다.
- **페이지 네비게이션**: 각 카테고리 페이지에서 1부터 10까지의 페이지 넘버를 통해 페이지 전환이 가능합니다.
- **영화 상세 페이지**: 영화 목록에서 `Details` 버튼을 클릭하여 영화의 사진, 날짜, 제목, 평균 평점, 러닝 타임, 인기도, 개요 등의 상세 정보를 표시합니다.
- **검색 기능**: 검색창에 검색어를 입력하면 검색 결과 리스트가 표시되며, `Details` 버튼을 클릭하여 해당 영화의 상세 정보를 볼 수 있습니다.

## 코드 설명

1. MainPage 컴포넌트:

- 이 컴포넌트는 홈 페이지의 메인 컨텐츠를 렌더링합니다.
- 랜덤으로 선택된 영화 이미지와 제목을 슬라이드 형식으로 보여줍니다.
- 3초마다 새로운 이미지가 표시됩니다.

2. MoviesList 컴포넌트:

- Popular, Theatre, Kids, Comedie 페이지에서 영화 목록을 렌더링합니다.
- 영화 목록이 로딩 중이면 로딩 스피너를 표시하고, 검색 결과가 없는 경우에는 해당 메시지를 표시합니다.
- 영화 목록이 있으면 각 영화의 이미지와 정보를 나열합니다.

3. Movie 컴포넌트:

- 영화 목록에서 각 영화의 개별 아이템을 렌더링합니다.
- 영화 포스터 이미지, 제목 을 표시합니다.
- 각 영화에는 "details" 버튼이 있어서 클릭하면 해당 영화의 상세 정보 페이지로 이동합니다.

4. Pagination 컴포넌트:

- 페이지네이션 기능을 제공합니다.
- 각 페이지 버튼을 클릭하면 해당 페이지로 이동합니다.
- "prev" 및 "next" 버튼을 클릭하여 이전 및 다음 페이지로 이동할 수 있습니다.

5. SearchForm 컴포넌트:

- 검색 기능을 제공합니다.
- 사용자가 입력한 검색어를 기반으로 영화를 검색하고 검색 결과를 표시합니다.
- 검색어를 입력하고 "search" 버튼을 클릭하면 해당 검색어를 포함한 영화 목록이 표시됩니다.

6. SingleMovie 컴포넌트:

- 개별 영화의 상세 정보를 표시합니다.
- URL의 파라미터로 전달된 영화 ID를 사용하여 영화 정보를 가져옵니다.
- 영화 포스터, 제목, 개봉일, 평균 평점, 영화 소개, 런타임, 인기도 등을 표시합니다.
- 로딩 중이면 로딩 스피너를 표시하고, 영화 정보가 없는 경우에는 해당 메시지를 표시합니다.

`App.js`

- 는 이 프로젝트의 주요 라우팅을 담당하는 컴포넌트입니다. 이 파일은 다양한 페이지와 해당 페이지에 필요한 레이아웃을 정의하고, 이를 통해 사용자에게 네비게이션 기능을 제공합니다.

`context.js`

- React 애플리케이션의 상태를 관리하는 데 사용되며, 애플리케이션 전반에 걸쳐 데이터를 공유하는 데 도움이 됩니다. 여기서 주요 기능을 설명하겠습니다.

1. AppContext: createContext() 함수를 사용하여 새로운 컨텍스트를 생성합니다. 이 컨텍스트는 전역으로 사용되며, 애플리케이션의 상태를 관리하는 데 필요한 데이터를 포함합니다.

2. API_KEY 및 base_url: API_KEY와 base_url은 The Movie Database (TMDB) API에 대한 접근을 위한 인증 및 요청 URL을 정의합니다.

3. AppProvider: AppProvider 컴포넌트는 애플리케이션의 상태를 제공하고, 상태를 변경하는 데 사용됩니다. useState 훅을 사용하여 로딩 상태, 영화 목록, 검색 쿼리, 및 페이지 인덱스를 관리합니다. 또한, useEffect 훅을 사용하여 페이지 로드 시 영화 목록을 가져오는 비동기 함수인 fetchMovies를 호출합니다.

4. fetchMovies: fetchMovies 함수는 API를 사용하여 영화 목록을 가져오는 비동기 함수입니다. useEffect 훅을 통해 컴포넌트가 마운트되거나 상태가 업데이트될 때마다 호출되며, URL 및 페이지 인덱스에 따라 영화 목록을 업데이트합니다.

5. useGlobalContext: useGlobalContext 함수는 useContext 훅을 사용하여 AppContext를 구독하는 컴포넌트에서 전역 컨텍스트를 사용할 수 있게 합니다. 이를 통해 컴포넌트들은 애플리케이션의 상태 및 상태 변경 함수에 접근할 수 있습니다.

이와 같이 context.js는 애플리케이션의 전역 상태를 관리하고, 컴포넌트 간에 데이터를 공유하는 데 사용됩니다. 이를 통해 애플리케이션의 코드를 더욱 모듈화하고 관리하기 쉽게 만들 수 있습니다.

`MainPage`

- 컴포넌트는 홈 페이지를 구성하는 부분입니다. 이 컴포넌트는 홈 화면에 랜덤으로 선택된 영화 이미지와 제목을 슬라이더로 표시합니다. 각 슬라이드에는 해당 영화의 포스터 이미지와 제목이 표시됩니다. 사용자는 이 슬라이드를 이전 또는 다음으로 이동할 수 있습니다. 또한 페이지 번호를 클릭하여 특정 페이지로 이동할 수 있습니다. 이 페이지 번호는 각 영화 리스트의 페이지를 나타냅니다. 만약 데이터가 로딩 중이라면 로딩 화면이 표시됩니다.

위 코드에서 MainPage 컴포넌트는 다음과 같은 주요 기능을 가지고 있습니다:

1. useGlobalContext 훅을 사용하여 전역 컨텍스트에서 필요한 데이터와 함수를 가져옵니다.
2. useEffect 훅을 사용하여 컴포넌트가 마운트될 때 랜덤한 값을 설정하고, 그 값을 인덱스로 사용하여 홈 화면에 표시할 영화를 선택합니다.
3. 페이지 번호를 클릭할 때 해당 페이지에 해당하는 영화 슬라이드를 보여주기 위한 handleClick 함수를 정의합니다.
4. 이전 페이지 또는 다음 페이지로 이동하기 위한 prevPage 및 nextPage 함수를 정의합니다.
5. 영화 데이터가 로딩 중이면 로딩 화면을 표시합니다.

이 컴포넌트는 홈 화면을 구성하는 주요 요소들을 제공하며, 사용자가 각 영화 슬라이드를 탐색하고 페이지를 이동할 수 있는 기능을 제공합니다.

`MoviesList`

- 컴포넌트는 Popular, Theatre, Kids, Comedie 페이지에서 사용되며, 각 페이지에서 영화 목록을 보여줍니다. 해당 페이지에서 사용되는 영화 목록은 전역 컨텍스트로부터 받아온 데이터를 기반으로 렌더링됩니다. 만약 데이터가 로딩 중이라면 로딩 화면을 표시하고, 데이터가 없다면 해당하는 메시지를 표시합니다.

이 컴포넌트는 다음과 같은 주요 기능을 가지고 있습니다:

1. useGlobalContext 훅을 사용하여 전역 컨텍스트에서 필요한 데이터를 가져옵니다.
2. 영화 데이터가 로딩 중이면 로딩 화면을 표시합니다.
3. 영화 목록이 없으면 해당하는 메시지를 표시합니다.
4. 영화 데이터가 있으면 각 영화를 나타내는 Movie 컴포넌트를 렌더링합니다.
5. 영화 페이지 번호를 설정하고 변경하기 위한 PageNumber 컴포넌트를 렌더링합니다.

`Movie`

- 컴포넌트는 각 영화를 나타내는데 사용되며, 해당 영화의 포스터 이미지, 제목 정보를 보여줍니다. 또한 각 영화에 대한 자세한 정보를 볼 수 있는 링크를 제공합니다.

`Pagination`

- 컴포넌트는 페이지 번호를 나타내며, 이전 페이지 또는 다음 페이지로 이동할 수 있는 버튼을 제공합니다. 페이지 번호를 클릭하면 해당 페이지로 이동하도록 설정되어 있습니다.

`SearchForm`

- 서치 폼 컴포넌트는 사용자가 영화를 검색할 수 있도록 제공됩니다. 사용자가 검색어를 입력하고 검색 버튼을 클릭하면 해당 검색어를 사용하여 영화를 검색하고, 검색 결과를 화면에 표시합니다. 이를 위해 다음과 같은 기능을 수행합니다:

1. 검색어 입력: 사용자는 검색어를 입력할 수 있는 입력 필드를 제공받습니다.
2. 검색 기능: 사용자가 검색어를 입력하고 검색 버튼을 클릭하면, 해당 검색어를 사용하여 영화를 검색합니다.
3. 검색 결과 표시: 검색 결과에 따라 검색된 영화 목록을 화면에 표시합니다.
4. 검색어 변경 감지: 사용자가 검색어를 입력하는 동안, 입력된 검색어의 변화를 감지하여 실시간으로 검색어를 업데이트합니다.
5. 검색 버튼 클릭 핸들링: 사용자가 검색 버튼을 클릭하면, 입력된 검색어를 사용하여 영화를 검색하고 결과를 화면에 표시합니다.
6. 포커스 관리: 검색어 입력 필드에 초기 포커스를 설정하여 사용자 편의성을 높입니다.

이 컴포넌트는 React의 useRef, useEffect 훅을 사용하여 상태 관리 및 렌더링을 수행하고, 전역 컨텍스트를 활용하여 다른 컴포넌트에서도 검색 상태를 공유합니다. 검색어 입력, 검색 버튼 클릭 등의 이벤트에 대한 핸들러 함수를 정의하여 해당 기능을 수행합니다.

`SingleMovie`

- 영화의 상세 정보를 보여주는데 사용됩니다.

1. useParams: React Router의 useParams 훅을 사용하여 URL에서 파라미터를 추출합니다. 이 경우에는 영화의 ID를 추출합니다.

2. useState: React의 useState 훅을 사용하여 movie와 loading 상태를 관리합니다. movie 상태는 영화의 정보를 저장하고, loading 상태는 데이터를 불러오는 동안 로딩 상태를 표시합니다.

3. useEffect: React의 useEffect 훅을 사용하여 컴포넌트가 마운트되거나 id가 변경될 때마다 fetchSingleMovie 함수를 실행합니다. 이 함수는 영화 정보를 API에서 가져와 movie 상태를 업데이트합니다.

4. fetchSingleMovie: useCallback을 사용하여 메모이제이션된 콜백 함수를 생성합니다. 이 함수는 API를 호출하여 영화의 상세 정보를 가져오는 비동기 함수입니다.

5. 렌더링: loading이 true일 경우 로딩 상태를 표시하고, movie가 null이면 "no movie to display" 메시지를 표시합니다. 그렇지 않은 경우에는 영화의 상세 정보를 화면에 표시합니다.

6. API 호출: fetchSingleMovie 함수 내부에서 API를 호출하여 영화의 상세 정보를 가져옵니다. 가져온 정보는 movie 상태에 저장됩니다.

7. 이미지 및 정보 표시: API에서 가져온 영화 정보를 사용하여 영화의 제목, 개봉일, 평점, 런타임, 인기도 등의 정보를 표시합니다. 영화 포스터는 이미지 경로를 사용하여 표시합니다. -->

<!-- ========== 새로 작성중 ========== -->

<!-- # 🎬 MovieList

## 프로젝트 소개

**movielist**는 API로 영화 데이터를 받아와 다양한 영화 리스트를 보여주는 웹 애플리케이션입니다.
사용자는 영화 목록을 탐색하고, 검색하며, 각 영화에 대한 상세 정보를 확인할 수 있습니다.
반응형 디자인과 사용자 인터랙션을 고려하여 슬라이드 및 그리드 형태로 UI를 구성했습니다.

## 기술 스택

- **React**: 사용자 인터페이스 구현을 위한 프레임워크
- **JavaScript**: 프로그래밍 언어
- **CSS**: css를 사용하여 스타일링
- **REST API**: 영화 데이터 제공을 위한 외부 API -->

<!-- ===============다시 작성 =================== -->

# 🎬 MovieList

무비리스트 (MovieList)

## 📌 프로젝트 소개

**MovieList**는 다양한 영화 카테고리를 탐색하고, 원하는 영화를 검색하여 상세 정보를 확인할 수 있는 웹 애플리케이션입니다.  
사용자는 카테고리별로 영화 목록을 쉽게 확인할 수 있고, 검색 기능을 통해 특정 영화를 빠르게 찾을 수 있습니다.  
선택한 영화에 대해 자세한 정보를 제공하여 편리한 영화 탐색 경험을 제공합니다.

---

## 🎯 주요 기능 및 흐름

### 주요 기능

- **주소 및 라우팅 구조**
  - 기본 메인 주소는 `/project-movielist`
  - 카테고리를 클릭하면 URL에 카테고리명이 추가됨  
    예: `/project-movielist/popular`, `/project-movielist/kids`
  - 각 카테고리에서 영화 리스트 중 하나를 선택하면 URL에 영화 고유 ID(파라미터)가 붙어 상세 페이지로 이동  
    예: `/project-movielist/popular/12345`
- **반응형 디자인 적용**
  - 화면 크기에 따라 479px 이하, 480~767px, 768px 이상 등 여러 미디어쿼리로 레이아웃 변화
- **네비게이션 및 검색**
  - 479px 이하 및 480~767px에서는 햄버거 메뉴 아이콘으로 카테고리 리스트 토글 가능
  - 768px 이상에서는 카테고리 메뉴가 항상 화면에 표시됨
- **카테고리**
  - Home, Popular, Theatre, Kids, Comedie 5개 카테고리
- **Home 카테고리**
  - 영화 이미지 3개 슬라이드 표시
  - 가운데 이미지는 현재 선택된 영화이며, 제목은 이미지 아래에 표시
  - 3~4초 간격 자동 슬라이드, 좌우 버튼으로 수동 이동 가능
  - 하단에는 모든 영화 이미지 가로 슬라이드, 선택 시 상단 슬라이드에 반영
- **Popular, Theatre, Kids, Comedie 카테고리**
  - 해당 카테고리에 맞는 영화 리스트 출력
  - 영화 선택 시 상세 정보 화면 표시
  - 목록 하단에 페이지 네비게이션 기능이 있어 다음 페이지로 이동 가능
- **검색 기능**
  - 검색어 입력 시 결과 리스트 출력, 결과가 없으면 안내 문구 표시
  - 검색 결과 선택 시 상세 정보 페이지로 이동

### 사용자 흐름

1. 화면 크기에 따라 자동으로 레이아웃이 조절됨
2. 479px 이하 및 480~767px 화면에서는 햄버거 메뉴를 클릭하여 카테고리를 선택
3. 768px 이상에서는 카테고리 메뉴가 항상 화면에 노출되어 선택 가능
4. Home 카테고리에서는 슬라이드로 영화 이미지와 제목을 확인 가능
5. Popular 등 다른 카테고리에서는 영화 리스트를 보고 상세 정보를 열람
6. 검색창에 키워드를 입력하여 원하는 영화를 빠르게 찾을 수 있음
7. 검색 결과 또는 카테고리 리스트에서 영화 선택 시 상세 정보 페이지로 이동

---

## 📁 폴더 구조 (src/)

```js
src/
├── components/
│   ├── error/                 → 라우팅 에러시 보여주는 페이지
│   │   ├── ErrorPage.js
│   │   └── ErrorPageStyle.css
│   ├── homepage/              → 홈 화면 관련 컴포넌트
│   │   ├── mainPage.js        → 홈 메인 부모 컴포넌트 (슬라이드 + 썸네일)
│   │   ├── mainPageStyle.css
│   │   ├── SlideMovies.js     → 현재 보여지는 슬라이드 이미지 3개 (자동 슬라이드)
│   │   ├── SlideMoviesStyle.css
│   │   ├── PreviewMovies.js   → 전체 이미지 목록, 선택 시 상단 슬라이드 반영
│   │   └── PreviewMoviesStyle.css
│   ├── loading/              → API 호출 전 로딩 컴포넌트
│   │   ├── Loading.js
│   │   └── LoadingStyle.css
│   ├── messages/              → 검색 결과가 없을 때 문구 출력
│   │   ├── NoSearchResult.js
│   │   └── NoSearchResultStyle.css
│   ├── movielist/            → 영화 목록 및 아이템 단위 컴포넌트
│   │   ├── movie.js
│   │   ├── movieStyle.css
│   │   ├── movielist.js
│   │   └── movielistStyle.css
│   ├── nav/                  → 네비게이션 (햄버거 메뉴, 카테고리)
│   │   ├── navbar.js
│   │   ├── navbarStyle.css
│   │   ├── NavItem.js
│   │   └── NavItemStyle.css
│   ├── pagination/           → 페이지네이션 컴포넌트
│   │   ├── Pagination.js
│   │   └── PaginationStyle.css
│   └── search/               → 검색 입력 폼
│       ├── SearchForm.js
│       └── SearchFormStyle.css
├── pages/
│   ├── Home.js
│   ├── Comedie.js
│   ├── Kids.js
│   ├── Popular.js
│   ├── Search.js
│   ├── SharedLayout.js
│   ├── SingleMovie.js
│   ├── SingleMovieStyle.css
│   └── index.js             → 각 페이지 export 모음
├── sharedLayout/
│   ├── SharedLayoutPage.js
│   ├── SharedLayoutSearch.js
│   └── index.js             → Layout export 모음
├── context.js               → Context API 사용, async/await 기반 API 관리
├── App.js                   → 전체 라우팅 구조 설정 (BrowserRouter 사용)
└── index.css                → 전역 스타일 적용

```

## 📦 컴포넌트 설명

### ErrorPage (error/ErrorPage)

라우트에서 존재하지 않는 경로로 접근 시 보여지는 안내 문구 전용 컴포넌트입니다.

### MainPage (homePage/MainPage)

메인 홈 화면을 구성하는 컴포넌트입니다.

- API 호출 전 로딩 상태 표시
- 이미지 3장을 보여주는 슬라이드 기능 포함
- 4초 간격 자동 슬라이드 + 수동 이동 버튼 포함
- 자식 컴포넌트: `PreviewMovies`, `SlideMovies`

### SlideMovies

- 이미지 3장 (이전, 현재, 다음) 표시
- 중앙 이미지에 타이틀 표시

### PreviewMovies

- 전체 영화 이미지 미리보기
- 슬라이드에서 특정 이미지를 선택하면 `SlideMovies`로 이동

### Loading (loading/Loading)

API 호출 대기 시 화면에 로딩 애니메이션, 텍스트를 표시하는 컴포넌트입니다.

### NoSearchResult (messages/NoSearchResult)

검색 결과가 없을 경우 또는 선택한 결과가 없을 때 보여주는 안내 문구 컴포넌트입니다.

### MovieList (moviesList/MovieList)

- API 호출 대기 시 `Loading` 컴포넌트 표시
- 결과가 없을 경우 `NoSearchResult` 표시
- map을 이용해 각 영화 아이템을 `Movie` 컴포넌트로 전달
- 자식 컴포넌트: `Movie`

### Movie

- 영화 개별 아이템 (이미지, 타이틀, 버튼) 표시
- 버튼 클릭 시 해당 영화 상세 페이지로 이동

### NavBar (nav/NavBar)

- 로고와 카테고리 메뉴 포함
- 반응형(미디어쿼리)에 따라 햄버거 메뉴 아이콘 표시
- 자식 컴포넌트: `NavItem`

#### NavItem

- 각 카테고리 버튼 구성
- 클릭 시 해당 카테고리 페이지로 라우팅

### Pagination (pagination/Pagination)

- 페이지네이션 기능
- 페이지 번호 클릭 시 `MovieList`의 목록 갱신

### SearchForm (search/SearchForm)

- 검색 입력 필드와 검색 버튼 포함
- 입력값 제출 시 검색 결과 페이지로 이동

### Home / Popular / Kids / Comedie / Search (pages/Home, Popular, Kids, Comedie, Search)

- 각각의 카테고리 메인 페이지 컴포넌트
- API 호출 결과를 바탕으로 영화 리스트 렌더링

### SharedLayout (pages/SharedLayout)

- 상위 레이아웃 컴포넌트
- 항상 고정으로 `NavBar` 및 `SearchForm` 노출
- 내부에 `Outlet` 포함하여 하위 라우트 연결

### SingleMovie (pages/SingleMovie)

- 영화 상세 정보 페이지
- 영화 리스트 또는 검색 결과에서 선택된 영화의 상세 데이터 렌더링

### SharedLayoutPage (sharedLayout/SharedLayoutPage)

- 각 카테고리 라우트의 레이아웃 담당
- 내부에 `Outlet` 포함

### SharedLayoutSearch (sharedLayout/SharedLayoutSearch)

- 검색 결과 페이지 전용 레이아웃
- 내부에 `Outlet` 포함

### App

- 최상위 컴포넌트
- `BrowserRouter`, `Routes`, `Route`를 사용하여 라우팅 구성

### context

- API를 호출하여 받은 값을 여러 컴포넌트에 전달할 수 있도록 Context API로 구성한 코드입니다.

---

## 🛠️ 사용 기술 및 라이브러리

### ✅ CSS

- 일반 CSS 사용
- 전역 스타일은 최상위 태그에서만 설정
- 반응형 처리는 각 컴포넌트 내부에서 media query 사용
- flex, grid 레이아웃 기반

### 📡 API

✅ The Movie Database (TMDB)

- TMDB API 사용
- fetch와 async/await를 활용하여 데이터 요청 및 응답 처리
- 요청한 데이터를 전역 상태로 관리하고, 필요한 컴포넌트에서 **Context API (useGlobalContext)**를 통해 전달

### 🔧 React 훅 및 라이브러리 사용 목록

✅ React Router

- BrowserRouter, Routes, Route, Link, useNavigate, useParams, Outlet

✅ React 기본 훅

- useState, useEffect, useRef, useMemo, useCallback, memo

✅ Context
createContext, useContext, useGlobalContext

✅ 아이콘

- react-icons

### 🚀 설치 및 실행 방법

- npx create-react-app movies
- cd movies
- npm install
- npm start

---

## 💡 개발 목적 및 계기

포트폴리오 프로젝트 주제를 고민하던 중, 다양한 예제를 찾아보면서 사용자에게 익숙하면서도 인터페이스가 직관적인 "영화 정보 조회 서비스"를 구현해보기로 결정하였습니다. 단순히 리스트를 보여주는 것이 아닌, 사용자 경험을 고려한 슬라이드 기능, 검색 기능, 페이지네이션 등을 통해 실전 프로젝트에 가까운 흐름을 연습하고자 했습니다.

## 🧠 개발하며 느낀 점

- 로딩 상태의 중요성 인식
  API 요청 시 데이터를 불러오는 동안 사용자에게 아무런 피드백이 없는 경우, 사용자 경험이 저하될 수 있다는 것을 알게 되었습니다. 따라서 데이터를 불러오는 동안 로딩 UI나 로딩 메시지를 보여주는 것이 필요하다는 점을 느꼈습니다

- Context API의 유용성
  다양한 컴포넌트에서 동일한 데이터를 사용할 경우 props를 깊게 전달하는 구조는 복잡성과 유지보수의 어려움을 느꼈으며, Context API를 사용한 전역 상태 관리 방식이 훨씬 적절하다는 것을 경험했습니다.

- 라우팅 구조에 대한 이해 향상
  라우터 사용 시 페이지 이동을 보다 간결하게 처리하기 위해, 자식 컴포넌트의 중첩 대신 루트 경로와 동적 파라미터(:id)를 명확히 구분하여 사용하는 방식이 실제로 더 관리하기 편하다는 점을 경험적으로 알게 되었습니다.

## 🌱 개선점 및 향후 계획

전역으로 관리해야 할 공통 컴포넌트나 스타일이 각 컴포넌트 내부에서 반복적으로 사용된 부분이 있어, 중복성을 줄이기 위한 리팩토링이 필요하다고 느꼈습니다.
여러 CSS를 각 컴포넌트 내부에서 개별적으로 작성했지만, 향후에는 전역 스타일 또는 모듈화를 통해 스타일 관리 효율성을 높이고 싶습니다.
현재는 영화 정보를 리스트 형식으로 보여주는 형태이지만, 향후에는 백엔드 기술을 학습한 뒤, 사용자 리뷰, 찜 목록, 예매 시스템 등 실사용 중심의 영화 플랫폼으로 확장해보고 싶습니다.

## 📸 프로젝트 데모 및 기타

📸 프로젝트 데모
👉 [https://nonamehj.github.io/project-movielist](\https://nonamehj.github.io/project-movielist)

💻 GitHub 코드
👉 [https://github.com/nonamehj/project-movielist](https://github.com/nonamehj/project-movielist)

<!-- ## 📸 스크린샷 및 데모
프로젝트 데모는 포트폴리오 웹사이트에서 확인하실 수 있습니다:
👉 [https://gptonline.ai/ko](https://gptonline.ai/ko)
https://nonamehj.github.io/project-movielist
---

## 📎 기타 정보

- 포트폴리오 웹사이트 주소: [https://gptonline.ai/ko](https://gptonline.ai/ko) -->
