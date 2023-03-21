- [MarkDown Docs](https://www.markdownguide.org/)
- [MarkDown 한글 설명서](https://gist.github.com/ihoneymon/652be052a0727ad59601)
# React Native
Side Projact 를 위한 React Native 학습
--------------------------------------
>> ### React Life Cycle
>> -----------
>> Constructor ->  
>> Render ->  
>> ComponentDidMount ->  
>> ComponentWillUnmount
  
### React Navigation

#### React-Native 에서 사용하는 화면 이동을 위한 라이브러리
[React-Navigation](https://reactnavigation.org "HomePage Link")

> Stack, BottomTap, Drawer 등 앱 개발시 많이 사용하는 화면 이동에 대해 각 플랫폼 환경에 맞도록 쉽게 변환 해 준다.  
>> ### React-Navigation 의 구성요소  
>>> Navigator + Screen  
>>> ------------  
>>> Navigator :   
>>> Navigtion 이 어떤 구조로 되어있는지 나타내는 Component < Screen 의 집합 >   
>>>
>>> Screen: View drawing Component  
  
>>> Navigator 종류
>>> ---------------
>>> #### Stack Navigator :  
>>> ```
>>> Stack 과 동일한 자료 구조로 화면을 그리는 Navigator  
>>> 제일 마지막에 들어온 화면이 제일 먼저 없어짐  
>>> React-Navigation 에서 필요한 animation 등 은 구현됨  
>>>
>>> Stack Nativgator : JavaScript 로 작성, 자유도 높음  
>>> Native Stack Navigator : Native <java or Kotlin> 작성 자유도 낮음  
>>>  
>>> Presentation : Stack Navigator Screnn Option  
>>> > Stack Navigator 에서 Move View Animation 에 대한 설정 Option  
>>>  
>>> > Card : Right to Left Move Animation  
>>> > Modal : Bottom to Top Move Animation
>>> ```
>>>
>>> #### Drawer Navigator :  
>>> ```
>>> 슬라이드 를 통해서 이동할 Screen 들 을 나타내는 Navigator
>>> Drawer 에 대한 Open, Close, Toggle 등 기본적인 기능들을 함수로 제공
>>> Gmail, LinkedIn 등 에서 사용
>>> ```
>>> #### TAB Navigator :  
>>> ```
>>> 가장 흔하게 App 에서 볼 수 있는 UI
>>> 기본적으로 하단에 탭의 형태로 제공
>>> Material UI 를 통해서 제공하는 별도 UI 제공
>>> ( Meterial Buttom Tabs Navigator, Meterial Top Tabs Navigator )  
>>>   
>>> Back Behavior : Tap Navigator Screen Option
>>> > Andorid 에서 H/W Back Button 을 눌렀을때 어떻게 이동 하는지 정하는 Option
>>>  
>>> > firstRoute : 선언상 제일 처음에 있는 Top 으로 이동  
>>> > initialRoute : 최초 지정한 Top 으로 이동  
>>> > order : Top 을 선언한 순 으로 이동  
>>> > history : 이동한 History 역순 이동  
>>> ```
>>> #### 번외 Nesting Navigator :  
>>> ```
>>> Navigator 의 Screen 을 Component 가 아닌 다른 Navigator 로 선언하는 것,
>>>
>>> 주로 Presentation 을 다르게 선언하거나, 
>>> 조건에 따라 Navigator 의 분기가 필요할때 사용
>>> ```

>> ### DeepLink
>> -----------
>>> 특정 URL 을 누르게 되면 지정한 화면으로 이동 하는 것  
>>> 앱마다 유효한 scheme 을 가지고 있는 것  

>> ### Action
>> -----------
>>> 화면 이동에 대한 명령어 를 담고 있는 Object
>>> ```
>>> type : 어떤 작업인지 나타내는 식별자
>>> payload : 추가 정보가 포함되어 있음. (parameter)
>>>
>>> Common Action
>>> > navigate : 특정 화면으로 이동하는 action
>>> > reset : 현재 상태를 지정한 상태로 변경 해주는 action
>>> > goback : 이전 History 로 이동하는 action 
>>>
>>> Stack Action
>>> > push : Array.push 와 동일
>>> > pop : Array.pop 과 동일
>>>
>>> Tap Action
>>> > jumpTo : 탭간 이동시 사용  
>>> ```

*****
## React Component  
```
- 리액트로 만들어진 앱을 이루는 최소한의 단위  

 - 기존의 웹 프레임워크는 MVC방식으로 분리하여 관리하여 각 요소의 의존성이 높아 재활용이 어렵다는 단점이 있었다. 반면 컴포넌트는 MVC의 뷰를 독립적으로 구성하여 재사용을 할 수 있고 이를 통해 새로운 컴포넌트를 쉽게 만들 수 있다.  
 - 컴포넌트는 데이터(props)를 입력받아 View(state) 상태에 따라 DOM Node를 출력하는 함수.  
 - 컴포넌트 이름은 항상 대문자로 시작하도록 한다.   
   (리액트는 소문자로 시작하는 컴포넌트를 DOM 태그로 취급하기 때문이다.  
  
 - UI를 재사용 가능한 개별적인 여러 조각으로 나누고, 각 조각을 개별적으로 나누어 코딩한다.  
```
### 잘 만들어진 Component 란?
- Why Create Components?  
> 재사용을 위한 Create
> ```
> Component 화 하지 않고 제작시 code 의 양이 방대해져 유지보수 난이도 증가  
> 너무 잦은 컴포넌트 화 는 예상하지 못한 변경점이 생겨 버그로 이어짐
>
> Component 는 언제 만들어서 재사용 하는가
> - 제일 작은 단위는 우선적으로 Component 로 만들어 재사용
> - Molcule 이상의 단계들중 3회 이상 반복사용시 Component 화
> ```
> *****
> ### Atomic Design Pattern
>> 작은단위 부터 큰 단위까지   
>> Component 를 조합해 만들어가는 Design Pattern  
>>> #### 단위 구조
>>```
>> Atoms -> Molecules -> Organisms -> Templates -> Pages
>>```
>>> #### Dumb component VS Smart Component
>>```
>> Dumb Component : 보여주는 일에만 집중 - Show View Not option
>> Smart Component : 상태를 가지고 스스로 변함 - Show View is Option Set
>>```
>>> ### Compound Component Pattern
>>>```
>>> Component 에 (암시적으로 상태를 공유하는)  
>>> 선언적 Sub Component API를 제공하는 방법이다.
>>>```
>>> ### Functional Component 와 Class Component 의 동작과정
>>>```
>>> Class Component : 
>>> 1. new Class() = instance 생성
>>> 2. class 내부 render Method 호출
>>> 
>>> class call != render
>>> ______________________
>>> 
>>> Functional Component : 
>>> component 생성 관련 작업시 매번 호출하여 렌더링
>>>
>>> function call == render
>>>```
*****
## React Hook
> ### React Hook 이란?
>
>```
>- React 16.8 Version 에서 새로 소개되었으며,
>- funstional component 에서도 state 와
>  다른 side Effect 를 다루기 위해 탄생되었다.
>```
>  
> ### Functional Component  
> ```
> export default () => {
>  Component Code 
> }
> 
> ||
> 
> export default FunctionName = () => {
> 
> }
> 
> 위 와 같이 function 형식 으로 작성되는 Component
> hook 탄생 이전에는 state 를 가질 수 없었기에
> 주로 Dumb Component 활용 되었으나
> hook 등장 으로 주목 받기 시작함
> 
> 사용 방식은 다음과 같다.
>
> import Name from './component';
>
> ||
>
> import { Name } from './component';
>
> ```
>  
> ### Hook 탄생 이유
> ```
> 1. Component 간 상태 로직 재사용이 어렵다.
> 2. Component 사이즈가 커지면 로직이 복잡해져 이해가 힘듬 
>    & 유지보수 난이도 상승
> 3. Class 는 혼동되기 쉽다.
> ```
>  
> ### Hook 사용 규칙
> ```
> 1. 모든 Hook 은 사용시 함수 최상단에서 호출 하여야함
> 2. React Function 에서만 Hook 을 호출 하여야함
>
> - Hook Logic -
> 1. First Render -> index CURSOR = 0;
> - CURSOR 은 Hook 의 index 값 자동 지정
>
> 2. Hook call & Hook SET = CURSOR++;
>
> 3. Hook 조건부 Call 진행시 미실행 되면 CURSOR 값 역시 추가되지않음
> - Error 로 이어질 수 있으므로 사용시 주의
> ```
>   
>> ## 자주 사용하는 Hook
>> ```
>> 1. useWindowDimensions() : 화면의 Window, height 를 체크시 활용
>>
>> 2. useBackHandler(()=>{ return bool }) : android 상 back key 입력시 호출되는 function 을 관리
>> - true : 해당 component 에서 핸들링
>> - false : 다른 component 에서 처리
>>
>> 3. useAppState() : 해당 App의 상태값 반환
>> - Active : 앱이 foreground에서 실행 중이며 이벤트를 받았을 수 있는 상태
>> - Background : 앱이 사용중에 다른 앱을 실행하거나 홈 화면으로 나갔을 때 상태
>> - Inactive : 앱이 foreground 상태이기는 하나 이벤트를 받지 못한 상태 (only IOS)
>>
>> 2~3 - install Library : @react-native-community/hooks
>> ______________
>>
>> React-navigation-hook
>>
>> 1. useNavigation, useRoute : 
>>    props 에 들어있는 Navigation Prop 과 Route Prop 에 접근 할 수 있다.
>>
>> 2. useIsFocused, useFocusEffect : Focus Check
>> - useIsFocused : Boolean 값 리턴
>> - useFocusEffect : Focus 되었을 때 callback 처리
>>
>> 3. useScrollToTop : ScrollView 를 최상단으로 올릴 때 사용
>>
>> ______________
>>
>> react-use : npm package - hook
>>
>> useMount : Component 가 mount 된 시점에 callback 호출
>>  
>> usePrevious : state 의 이전 값을 알아내고자 할때 사용
>> ```

>> ## 최적화를 위한 Memoization
>> ```
>> Functional Component 는 Function Call 이 안됨
>> Function Call : render();
>>
>> Functional Component call 하며 생긴 함수 내부의 
>> 변수,함수 모두 신규 호출시 새로 할당
>> 
>> ______________
>> 
>> 
>> Memoization : 기존 수행 연산값을 data 에 저장 후
>> - 입력값이 동일할 시 재활용 하는것
>>
>> == HOOK == 
>> 
>> 1. useMemo(()=>{}, []) : 
>> 첫 번째 인자 : 기억할 값을 리턴 해 주는 함수
>> 두 번째 인자 : dependency Array
>>
>> EX ) const variableA = useMemo(()=>{
>>            return props.a + props.b
>>      }, [props.a, props.b]) 
>>      
>>      // props.a == 1 & props.b == 1 => props.a == 1 & props.b == 2 
>>      // 위와 같이 변경될시 re rendering
>>
>>      값 변경시 즉시 확인하기 위한 사용
>>
>> 2. useCallback(()=>{}, []) : 함수를 저장
>> 첫 번째 인자 : 기억할 함수를 리턴 해 주는 함수
>> 두 번째 인자 : dependency Array 
>>
>> ```

*****
> ## 기타
> [Ionicons](https://ionic.io/ionicons)

>> ### 첫번째 예제 프로젝트 WALLPAPER
>>> ## 사용된 라이브러리
>>>> 1. react-navigation/native
>>>> 2. react-navigation/native-stack
>>>> 3. react-navigation/bottom-tabs
>>>> 4. expo/vector-icons & prop-types