DROP TABLE IF EXISTS skills;
DROP TABLE IF EXISTS projects;
DROP TABLE IF EXISTS profile;
DROP TABLE IF EXISTS highlights;

CREATE TABLE profile (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  team TEXT NOT NULL,
  position TEXT NOT NULL,
  uniform_number TEXT NOT NULL,
  tagline TEXT NOT NULL,
  introduction TEXT NOT NULL,
  image_path TEXT NOT NULL
);

CREATE TABLE highlights (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  label TEXT NOT NULL
);

INSERT INTO profile (name, team, position, uniform_number, tagline, introduction, image_path)
VALUES (
  '이채희',
  '부산대학교 산업공학과',
  '산업공학과 학생',
  '',
  '데이터와 기술로 아이디어를 실제 경험으로 만드는 산업공학도입니다.',
  '작년에 참여했던 청년일경험 프로젝트의 경험을 바탕으로, 이번에는 같은 학과 동기들과 다시 한번 도전하게 되었습니다. 이전 경험에서 배운 협업과 실행력을 살려 새로운 프로젝트에도 성실하게 참여하겠습니다.',
  ''
);

INSERT INTO highlights (label) VALUES
  ('웨이브앤바이브 × 1953형제돼지국밥｜브랜드 경험과 고객 데이터 수집을 위한 인터랙티브 국밥 만들기 게임 기획·구현'),
  ('일루넥스 산학협력 프로젝트｜수요기업과 공급기업을 연결하는 매칭 알고리즘 개발'),
  ('IBA 동아리｜여러 데이터 분석 프로젝트에 참여하며 분석 경험과 협업 역량 축적'),
  ('고모텍 자동화 마케팅 프로젝트｜앞으로 참여하며 데이터 기반 마케팅 자동화 경험 확장 예정');
