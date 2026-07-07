# Custom UI (React UI Component Library)

이 프로젝트는 React 환경에서 자주 사용되는 UI 컴포넌트들을 직접 디자인하고 구현하여 모아놓은 커스텀 UI 라이브러리 및 쇼케이스 프로젝트입니다. Vite와 TypeScript를 기반으로 구축되었으며, 일관된 디자인 시스템과 재사용 가능한 컴포넌트 작성을 목표로 합니다.

## 🚀 주요 기능 및 컴포넌트

다양한 형태의 UI 컴포넌트들이 `src/components/UI` 내에 직접 구현되어 있습니다.

- **Basic Elements**: Button, Checkbox, Radio, Input, Switch, Slider
- **Overlays & Popups**: Modal, Drawer, Dropdown, Tooltip, Toast
- **Navigation & Layout**: Accordion, Tabs, Pagination
- **Feedback**: Spinner, Skeleton, Badge
- **Others**: Icon, Color Palette (색상 시스템), Form Elements

## 🛠 기술 스택

- **Core**: React (v18), TypeScript
- **Build Tool**: Vite
- **Styling**: SCSS
- **State Management**: Zustand
- **Utility**: Ant Design (쇼케이스 레이아웃용 등 보조적 활용), classnames, vite-plugin-svgr

## 📂 프로젝트 구조

```text
custom-ui/
├── src/
│   ├── components/
│   │   ├── UI/            # 코어 커스텀 UI 컴포넌트 모음
│   │   └── *Page/         # 각 컴포넌트의 사용 예시를 보여주는 쇼케이스 페이지
│   ├── libs/              # 공통 유틸리티 함수
│   ├── types/             # 타입스크립트 공통 타입 정의
│   └── App.tsx            # 메인 쇼케이스 앱 진입점
├── styles/                # 스타일 디렉토리
│   ├── ui/                # UI 컴포넌트 스타일
│   ├── pages/             # 쇼케이스 페이지 스타일
│   └── variables.module.scss # 전역 색상 및 스타일 변수 설정
├── package.json
└── vite.config.ts
```

## 📦 설치 및 실행 방법

이 프로젝트는 `yarn` 패키지 매니저를 사용하는 것을 권장합니다 (`yarn.lock` 포함).

### 1. 패키지 설치

```bash
yarn install
# 또는
npm install
```

### 2. 개발 서버 실행

```bash
yarn dev
# 또는
npm run dev
```

개발 서버가 시작되면, 웹 브라우저에서 `http://localhost:3000`에서 확인
