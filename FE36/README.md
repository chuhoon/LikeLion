# 36일차

# 17. 최적화 (Optimization)

## 성능 측정의 척도

소프트웨어 프로그래밍은 일단 동작하게 만들고(Make it work), 올바르게 동작하게 만들고(Make it right), 빠르게 동작하게 만든다(Make it fast) 라는 전략으로 접근합니다.

**성능 측정의 척도**

1. 올바르게 동작하게 만든다 : 메모리, 네트워크 트래픽(백엔드)과 같은 자원을 효과적으로 사용하는 것입니다.
2. 빠르게 동작하게 만든다 : 시간과 긴밀한 관계가 있습니다.

<br>

## 시간

- 초기 구동 시간 : 초기에 애플리케이션이 로드 되는 시간
- 계산시간 : 동일한 계산을 얼마나 빠르게 수행하는가
- 반응 시간 : 사용자의 행동에 얼마나 빠르게 반응하는가

<br>

### 초기 구동시간

[https://web.dev/why-speed-matters/](https://web.dev/why-speed-matters/)

로딩 시간이 빠른 페이지와 그렇지 않은 페이지의 사용자 경험은 하늘과 땅 차이입니다.

1. 다운로드 해야 하는 파일 갯수와 용량은 작게 유지해야합니다.

   - 이미지 스프라이트 기법을 적극적으로 사용합니다. ([참고](https://www.notion.so/23-CSS-d03207280dc741839e2d0c919e2788e4))
   - 가능한 최신 포맷의 이미지를 사용합니다([참고](https://www.notion.so/8-Embedded-content-1b3c7dddb3d544aab3ce9c924b1524ed)). 이미지 용량 최적화 툴을 활용합니다. ([참고](https://kraken.io/))
   - 최적화된 폰트를 사용합니다. 사용하려는 폰트의 용량을 체크해보고 가능한 최신 포맷의 폰트([참고](https://www.notion.so/8-CSS-declarations-a0fa80f24d794b6fb5c526f021175c31))를 사용합니다. 폰트의 사용빈도가 제한적이라면 이미지 폰트를 사용합니다.

   <br>

   ```css
   @font-face {
     font-family: 'Nanum Gothic';
     src: url(NanumGothic.woff) format(‘woff’);
     src: url(NanumGothic.woff2) format(‘woff2’);
   }
   /* format(‘’) 값을 명시적으로 작성하면 
   이 형식을 지원하는 브라우저만 글꼴을 내려받게 되어 있습니다. */
   ```

<br>

2. 최소화한(minify) CSS, JS 파일 사용하여 파일의 용량을 줄입니다. ([참고](https://jquery.com/download/))
   - vscode의 JS & CSS Minifier **\*\*\*\***를 설치해봅시다.
3. 라이브러리, 프레임워크는 필요한 것만 사용해야합니다. (네이버, 다음 비교)
4. 중요하지 않은 컨텐츠라면 레이지 로딩을 고려해볼 필요가 있습니다. ([참고](https://developer.mozilla.org/ko/docs/Web/HTML/Element/img#attr-loading))

<br>

```html
<img src="image.jpg" alt="..." loading="lazy" />
<iframe src="video-player.html" title="..." loading="lazy"></iframe>
```

<br>

1. 지속적인 구동시간 측정하기. (크롬 네트워크 탭, [참고](https://pagespeed.web.dev/))

<br>

### 계산 시간

효율적이고 빠르게 계산을 수행하도록 코드를 작성. 이것은 알고리즘의 영역입니다.

<br>

### 반응 시간

사용자의 행동에 얼마나 빠르게 반응 하는가를 판단하는것이 바로 반응 시간입니다.

이 반응 시간을 줄이기 위해 우리는 브라우저의 렌더링 방식을 이해할 필요가 있습니다. ([참고](https://www.notion.so/16-CSS-transition-transform-6d9c47fd793145edbd559f8b44cfd282))

1. JS 보다는 CSS 애니메이션을 활용합니다.
   - JS로 스타일을 수정해도 결국 CSS 속성으로 업데이트 됩니다.
2. Transform 속성을 사용합니다.
3. repaint, reflow 를 유발하는 속성은 되도록 사용하지 않습니다.

   - [csstriggers](https://csstriggers.com/) : css 속성 별 reflow & repaint 에 대한 정보를 참고하세요.
     [** 브라우저별 사용 렌더링 엔진 **](https://www.notion.so/2d21b97337624442a9afba681e3dcfa9)

4. requestAnimationFrame 을 사용합니다.
   - [requestAnimationFrame](https://developer.mozilla.org/ko/docs/Web/API/Window/requestAnimationFrame) : 브라우저가 애니메이션을 최적화 하도록 하고, 비 활성 탭에서는 애니메이션이 동작하지 않도록 합니다.
     - 실습 : div 태그로 상자를 하나 만들고 키보드의 화살표 키를 눌러 왼쪽, 오른쪽으로 이동하도록 만들어 보세요.
5. DOM 접근과 업데이트는 가능한 적게 합니다.

   - DOM 접근은 가능한 좁은 범위에서 적게 사용합니다.

     - 실습 : 아래와 같은 HTML 구조상에서 JS를 이용해 이미지와 텍스트를 변경해보세요.

<br>

```html
<article class="parent">
  <figure>
    <img
      class="figImg"
      src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/202112/13/e4725896-2596-44f0-8b95-ab3faaa76d7d.jpg"
      alt=""
    />
    <figcaption class="figCap">
      유재석씨가 코로나에 돌파 감염되었다는 소식입니다.
    </figcaption>
  </figure>
</article>

<!-- 
1. 이미지는 https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg 로 변경합니다.
2. figcaption 안의 텍스트는 '유재석씨가 수상식에서 환하게 웃고 있다.' 로 변경합니다.
-->
```

- Document fragment 를 사용해서 한번에 DOM을 업데이트합니다.
  - DocumentFragment : 오직 메모리상에서만 존재하는 경량화된 DOM 트리입니다.
  - 실습 : 아래와 같은 HTML 구조를 JS를 이용해 10개를 만들어 브라우저에 랜더링 해봅니다.

<br>

```html
<article class="parent">
  <figure>
    <img
      class="figImg"
      src="https://file.mk.co.kr/meet/neds/2021/07/image_readtop_2021_654175_16256093474708254.jpg"
      alt=""
    />
    <figcaption class="figCap">
      유재석씨가 수상식에서 환하게 웃고 있다.
    </figcaption>
  </figure>
</article>
```

<br>

## 17.4 메모리

### 메모리 누수와 Garbage Collection

메모리 누수는 프로그램이 필요하지 않은 메모리 공간을 계속해서 점유하는 현상의 의미합니다. 이러한 현상을 방지하기 위해 자바스크립트나 자바, 파이썬 같은 고수준 언어에는 가비지 컬렉터가 존재합니다.

C, C++ 와 같은 저수준의 언어와는 다르게 자바스크립트에서 사용하지 않는 메모리는 자바스크립트 엔진이 추정하여 삭제(Garbage Collection)합니다.

이때 이용하는 방식이 **참조 카운팅** (reference counting)으로 메모리에 존재하는 값을 몇개의 변수와 함수가 참조하고 있는지 살펴보는것 입니다. 참조가 0이 되면 값을 메모리에서 삭제합니다.

예전에는 객체끼리 서로 맞물려있어 제거되지 않던 문제(순환 참조 문제)가 있었지만 최신 브라우저에서는 마크스위프(Mark and Sweep) 알고리즘을 사용하여 이런 문제가 해결되어 있습니다.([https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management#mark-and-sweep_algorithm](https://developer.mozilla.org/ko/docs/Web/JavaScript/Memory_Management#mark-and-sweep_algorithm))

자바스크립트에서 메모리 관리에 신경 써야하는 경우 중 하나는 제때 메모리를 해제해 주지 못하는 경우입니다.

바로 전역변수. 전역변수는 프로그램이 종료되기 전까지 계속 메모리에 존재하게 됩니다.

<br>

## 17.5 좋은 습관 기르기

좋은 습관을 들인 코드는 많은 에러를 사전에 예방할 수 있도록 만들어 줍니다.

<br>

### 17.5.1 배열이나 객체를 불변하는 객체처럼 다루기

배열이나 객체는 불변하는 객체처럼 다루는것이 데이터의 변화를 추적하는데 용이합니다.
만약 배열 데이터를 수정해야 한다면, 기존에 사용했던 원본 데이터는 그대로 두고 새로운 배열을 만들어 사용하는 습관을 들이길 바랍니다.

- 실습 : 다음 코드에서 배열의 원소에 💖 이모지를 추가해보세요

```jsx
const aespa = ['카리나', '윈터', '지젤', '닝닝'];
// 결과 : ['카리나💖', '윈터💖', '지젤💖', '닝닝💖']
```

<br>

### 엄격모드(strict mode)로 사용하기

자바스크립트는 엄격모드로 사용할 것을 권장 드립니다. 많은 에러를 예방할 수 있습니다.

**엄격 모드의 특징**

1. 선언하지 않은 변수에 값을 할당할 수 없습니다.
2. 읽기 전용 객체에 값을 할당하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
3. 지울수 없는 값을 지우려고 하면 에러가 발생합니다. (일반 모드에서는 조용한 에러 —> 무시 처리)
4. 함수 파라메터에 중복된 이름을 사용할 수 없습니다.

<br>

### 일치연산자 사용하기

```jsx
1 == 1
1 == '1'
1 == 2
'' == false
[] == false
null == undefined
```
