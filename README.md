# 인테리어 서비스 플랫폼

## 배포 주소

[https://house-deco.netlify.app/](https://house-deco.netlify.app/)

---

## 프로젝트 소개

> 인테리어 서비스 플랫폼을 가정하고, 컴포넌트 내에서 가구 및 인테리어 용품 정보를 손 쉽게 확인할 수 있는 서비스를 개발해 보았습니다.

--

## 사용 기술 및 스택

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

## 기능 구현 목록

1. 하단 상품 목록과 이미지 내의 툴팁뱃지의 연결  
   => 하단 또는 상단 어느 곳을 클릭해도 서로 연동되어 클릭되도록 구현
2. 제공된 x,y 좌표값에 따른 툴팁 뱃지 Image 내에 배치
3. 툴팁 클릭 시 apiData에 따른 상품 정보 토글 되도록 구현  
   => 특히, 이미지 박스의 넓이와 높이의 절반값을 활용해 상품정보 창이 이미지 박스 밖으로 돌출되지 않게 위치값 유동적으로 조정했습니다.

---

## 프로젝트 디렉토리 구조

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
