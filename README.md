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
  
