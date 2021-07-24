# 웹 실시간 동시 편집기

## 토이 프로젝트 목표
- `스마트에디터`의 `문서구조`를 이해하고, 해당 구조를 기반으로 OT 알고리즘을 적용해보자🙏
- OT 알고리즘 적용 후 가능성 및 방향성 검증
- WebPack, TypeScript를 공부하며 적용 🥊

## 기대효과
- 스마트에디터 문서구조 기반으로 OT 알고리즘 적용 가능성 검증 및 변경
- 문서 구조 외 OT 알고리즘 구현을 위한 추가적인 필요 기술 공부 (Node.js로 백엔드 구현해보기)
- OT 알고리즘에 대한 검증 및 개발을 용이하게 할 수 있는 데모 페이지 구성

## 관련 링크
실시간 문서 협업은 어떻게 동작할까(출처: 삼성멤버십)
http://www.secmem.org/blog/2019/01/09/operational-transform/

Operational-Transformation/ot.js(출처: github)
http://operational-transformation.github.io/index.html
 
TP1 (출처: https://hackernoon.com/analysing-different-operational-transformation-algorithms-for-collaborative-editing-60fcc49ef24b)
```
TP1 : For two concurrent operations O1 and O2, the transform function (T) satisfies TP1 iff O1 o T(O2, O1) ≡ O2 o T(O1, O2) where o denotes the sequence of operations containing Oi followed by Oj and ≡ denotes the equivalence of the two operations. 
```

TP2 (출처: https://hackernoon.com/analysing-different-operational-transformation-algorithms-for-collaborative-editing-60fcc49ef24b)
```
TP2 : For three concurrent operations O1, O2 and O3, the transform function (T) satisfies TP2 iff T(O3, O1 o T(O2, O1)) ≡ T(O3, O2 o T(O1, O2)). 
```
