# 프로젝트 개요 

* React와 Next.js를 공부하기 위해 게시판을 구현한다. 
* 서버는 json-server로 대체 한다. 

# 사전 작업

## 프로젝트 생성
```
cd ~
npx create-next-app
```

# 화면 구성

## /Home
2x2 게시판의 5개 글 목록을 보여준다. 

## /Board?게시판ID
선택된 게시판에 등록된 글 목록을 보여준다. 
글ID , 제목, 작성자, 작성일시, 조회수, 댓글수

## /Article?글ID
선택된 글을 보여준다.
제목, 작성일시, 작성자, 내용, 댓글

## /Admin/Manage/Board
게시판을 관리한다.
