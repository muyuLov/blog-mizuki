// 项目数据配置文件
// 用于管理项目展示页面的数据

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: 'web' | 'mobile' | 'desktop' | 'other';
	techStack: string[];
	status: 'completed' | 'in-progress' | 'planned';
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
}

export const projectsData: Project[] = [
	{
		id: 'Aliya-cosmos',
		title: 'Aliya-cosmos',
		description: '一个基于Spring Boot 和 Spring Ai 的Ai聊天 + 记忆项目。',
		image: '',
		category: 'web',
		techStack: ["spring boot", "spring Ai", "java mlivus"],
		status: 'planned',
		liveDemo: 'null',
		sourceCode: 'https://github.com/muyulov',
		startDate: '2024-01-01',
		endDate: '2024-06-01',
		featured: true, //是否是精选项目
		tags: ["Aliya", "spring Ai"]
	}
];

// 获取项目统计信息
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(p => p.status === 'completed').length;
	const inProgress = projectsData.filter(p => p.status === 'in-progress').length;
	const planned = projectsData.filter(p => p.status === 'planned').length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned
		}
	};
};

// 按分类获取项目
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === 'all') {
		return projectsData;
	}
	return projectsData.filter(p => p.category === category);
};

// 获取特色项目
export const getFeaturedProjects = () => {
	return projectsData.filter(p => p.featured);
};

// 获取所有技术栈
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach(project => {
		project.techStack.forEach(tech => techSet.add(tech));
	});
	return Array.from(techSet).sort();
};