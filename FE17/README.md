# 17일차

> Don't forget to code your dream.

select Box Custom, IR 테크닉, CSS Sprite 기법, 레티나 디스플레이 대응법을 배웠다.

### 3. CSS Sprite 기법

여러가지의 이미지를 하나의 이미지 파일안에 배치하여 이미지로드 부담을 줄이는 방법이다.

이미지를 편집할 때는 온라인 에디터를 사용하거나 직접 에디팅 앱(포토샵, 피그마, 스케치 등)을 사용해 개발자가 직접 편집한다.

image sprite generator 검색 : [https://www.toptal.com/developers/css/sprite-generator/](https://www.toptal.com/developers/css/sprite-generator/)

<br>

### 4. 레티나 디스플레이 대응법

#### 4.1 **레티나란?**

- 특정한 시야 거리에서 인간의 눈으로는 화소를 구분할 수 없는 화소 밀도(300 PPI가 넘을 경우)를 가진 애플 LCD 제품의 브랜드 이름입니다.

<br>

#### 4.2 **원인은 무엇일까?**

- 레티나(고해상도 화면)로 넘어오면서 논리픽셀(css에서 표현하는 화소의 기본 단위)과 물리픽셀(디바이스가 실제로 처리할 수 있는 화소의 기본 단위)의 차이가 발생한다. 그러나 브라우저는 css에서 정의한 픽셀만큼 이미지를 렌더링 해야하기 때문에 원래는 물리픽셀에 맞게 렌더링된 이미지가 논리픽셀 만큼 커져버리게 된다.

<br>

#### 4.3 해결 방법

화면에 우리가 그리고자 하는 사이즈의 2배 되는 이미지를 준비한다.
