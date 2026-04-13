// 프로젝트 데이터 (예시)
const projects = [
    {
        title: "프로젝트 1",
        description: "웹 퍼블리싱 프로젝트 설명.",
        githubUrl: "https://github.com/username/project1"
    },
    {
        title: "프로젝트 2",
        description: "또 다른 프로젝트 설명.",
        githubUrl: "https://github.com/username/project2"
    }
];

// 프로젝트 카드 생성 함수
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.githubUrl}" target="_blank">GitHub 보기</a>
    `;
    return card;
}

// 갤러리에 카드 추가
function loadProjects() {
    const gallery = document.getElementById('project-gallery');
    projects.forEach(project => {
        const card = createProjectCard(project);
        gallery.appendChild(card);
    });
}

// 페이지 로드 시 실행
document.addEventListener('DOMContentLoaded', loadProjects);