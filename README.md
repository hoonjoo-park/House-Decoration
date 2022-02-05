# 🏠 인테리어 서비스 플랫폼

## 🥑 배포 주소

[https://house-deco.netlify.app/](https://house-deco.netlify.app/)

---

## 🥲 블로그 주소

[https://hoonjoo-park.github.io/projects/preonboard/2.houseDecoration/](https://hoonjoo-park.github.io/projects/preonboard/2.houseDecoration/)

---

## 💬 프로젝트 소개

> 인테리어 서비스 플랫폼을 가정하고, 컴포넌트 내에서 가구 및 인테리어 용품 정보를 손 쉽게 확인할 수 있는 서비스를 개발해 보았습니다.
<img width="600" alt="preview" src="https://user-images.githubusercontent.com/67448481/152417800-347de776-4ae7-4da6-afd7-7bdb503c3a09.png">

---

## 🕹 사용 기술 및 스택

| ⚙️  Stack                     |
| ----------------------------- |
| React Hooks                   |
| styled-components             |
| React-icons                   |
| axios                         |
| Deploy : Netilfy              |
| Other : Git / GitHub          |
| Build Tool (Create React App) |
| Code Quality Tool (Prettier)  |

---

## 🪄 기능 구현 목록

1. 하단 상품 목록과 이미지 내의 툴팁뱃지의 연결  
   => 하단 또는 상단 어느 곳을 클릭해도 서로 연동되어 클릭되도록 구현
2. 제공된 x,y 좌표값에 따른 툴팁 뱃지 Image 내에 배치
3. 툴팁 클릭 시 apiData에 따른 상품 정보 토글 되도록 구현  
   => 특히, 이미지 박스의 넓이와 높이의 절반값을 활용해 상품정보 창이 이미지 박스 밖으로 돌출되지 않게 위치값 유동적으로 조정했습니다.
4. 하단 제품리스트의 드래그 슬라이딩 기능 구현

---

## 🗂 프로젝트 디렉토리 구조

```shell
.
├── App.tsx
├── react-app-env.d.ts
├── index.tsx
├── components
│   ├── Product.tsx
│   ├── ProductList.tsx
│   ├── RoomImage.tsx
│   ├── RoomIntroduce.tsx
│   ├── ToggleBox.tsx
│   └── ToolTip.tsx
├── constants
├── images
├── pages
│   └── introduceHome.tsx
└── styles
    └── GlobalStyles.ts
```

---

## 💡 프로젝트 회고
타입스크립트를 통해 리액트 프로젝트를 진행해볼 수 있는 좋은 기회였다고 생각합니다. 개인 프로젝트였지만, 최대한 커밋의 일관성을 지키고자 노력했고, 다른 개발자들과의 협업을 항상 가정하며 작업했습니다. 그리고 드래그 슬라이드 기능을 구현하는 과정이 굉장히 배울 점도 많았고 useRef의 활용도와 의의를 다시금 학습할 수 있는 유익한 기회였다고 생각합니다.

---
