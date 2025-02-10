# Contributing

## Guideline

1. `main` 브랜치는 최종본만 업로드합니다.
2. feat-{페이지명 또는 기능명}(ex. feat-member)과 같은 브랜치를 만들어서 push하고 main에 merge합니다.
3. git commit convention
    - fix : 버그 패치
    - feat : 기능 추가
    - style : 기능 변경 없이 간단한 디자인, 변수명, 파일명, 경로변경 등의 작업
    - refactor : 기능 변경 없이 레거시를 리팩터링하는 거대한 작업
    - docs : 기능 변경 없이 문서 및 주석 수정 (코드 수정 X)
    - remove : 삭제
    - update: 페이지 내용 수정/추가

4. __commit message__
    ```text
    <convention>: 한 줄 설명 (ex. Carousel 사진 비율 변경)
    # 한 줄 띄우기
    - <커밋에 대한 본문 설명>
    ```

    `example`
    ```text
    fix: loading data error fix (#102)

    - Main페이지
    - Carousel 패딩값 수정
    - 이미지와 텍스트 align
    ```

5. __PR(Pull request)__ 은 페이지 단위로 작업해서 보내기.

    





### 참고

- [CONTRIBUTING.md template](https://gist.github.com/PurpleBooth/b24679402957c63ec426)
- [VSCode Linting](https://code.visualstudio.com/docs/python/linting)
- [Python PEP8](https://peps.python.org/pep-0008/)
- [Git commit convention](https://www.conventionalcommits.org/ko/v1.0.0/)
- [Git commit convention reference: FastAPI Template project](https://github.com/tiangolo/full-stack-fastapi-postgresql)
- [Sementic versioning](https://semver.org/lang/ko/)
- [Repository convention reference: SSAFY BookFlex project](https://github.com/glenn93516/BookFlex)