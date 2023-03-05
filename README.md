- [MarkDown Docs](https://www.markdownguide.org/)
- [MarkDown 한글 설명서](https://gist.github.com/ihoneymon/652be052a0727ad59601)
# React Native
Side Projact 를 위한 React Native 학습
--------------------------------------

### React Navigation

#### React-Native 에서 사용하는 화면 이동을 위한 라이브러리
[React-Navigation](https://reactnavigation.org "HomePage Link")

> Stack, BottomTap, Drawer 등 앱 개발시 많이 사용하는 화면 이동에 대해 각 플랫폼 환경에 맞도록 쉽게 변환 해 준다.  
>> React-Navigation 의 구성요소  
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
>>> ```


>>> #### Drawer NAvigator :  
>>> ```
>>> 슬라이드 를 통해서 이동할 Screen 들 을 나타내는 Navigator
>>> Drawer 에 대한 Open, Close, Toggle 등 기본적인 기능들을 함수로 제공
>>> Gmail, LinkedIn 등 에서 사용
>>> ```