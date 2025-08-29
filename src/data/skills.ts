// 技能数据配置文件
// 用于管理技能展示页面的数据

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // 相关项目ID
	certifications?: string[];
	color?: string; // 技能卡片主题色
}

export const skillsData: Skill[] = [
	// Frontend Skills
	{
		id: "javascript",
		name: "JavaScript",
		description: "现代JavaScript开发，包括ES6+语法、异步编程、模块化开发等。",
		icon: "logos:javascript",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 0.1 },
		projects: ["mizuki-blog", "portfolio-website", "data-visualization-tool"],
		color: "#F7DF1E",
	},
	{
		id: "react",
		name: "React",
		description: "构建用户界面的JavaScript库，包括Hooks、Context、状态管理等。",
		icon: "logos:react",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 0.1 },
		projects: ["portfolio-website", "task-manager-app"],
		color: "#61DAFB",
	},
	{
		id: "vue",
		name: "Vue.js",
		description: "渐进式JavaScript框架，易学易用，适合快速开发。",
		icon: "logos:vue",
		category: "frontend",
		level: "beginner",
		experience: { years: 0, months: 0.1 },
		projects: ["data-visualization-tool"],
		color: "#4FC08D",
	},

	// Backend Skills
	{
		id: "python",
		name: "Python",
		description: "通用编程语言，适用于Web开发、数据分析、机器学习等。",
		icon: "logos:python",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#3776AB",
	},
	{
		id: "java",
		name: "Java",
		description: "企业级应用开发的主流编程语言，跨平台、面向对象。",
		icon: "logos:java",
		category: "backend",
		level: "intermediate",
		experience: { years: 0, months: 2 },
		projects: ["enterprise-system", "microservices-api"],
		color: "#ED8B00",
	},
	{
		id: "c",
		name: "C",
		description: "底层系统编程语言，操作系统和嵌入式系统开发的基础。",
		icon: "logos:c",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 0.2 },
		projects: ["embedded-system", "kernel-module"],
		color: "#A8B9CC",
	},
	{
		id: "php",
		name: "PHP",
		description: "广泛使用的服务器端脚本语言，特别适合Web开发。",
		icon: "logos:php",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 0.2 },
		projects: ["cms-system", "e-commerce-backend"],
		color: "#777BB4",
	},
	{
		id: "spring",
		name: "Spring Boot",
		description: "Java生态系统中最流行的企业级应用开发框架。",
		icon: "logos:spring-icon",
		category: "backend",
		level: "beginner",
		experience: { years: 0, months: 0.2 },
		projects: ["enterprise-system", "rest-api"],
		color: "#6DB33F",
	},

	// Database Skills
	{
		id: "mysql",
		name: "MySQL",
		description: "世界上最流行的开源关系型数据库管理系统，广泛用于Web应用。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "beginner",
		experience: { years: 0, months: 0.01 },
		projects: ["e-commerce-platform", "blog-system"],
		color: "#4479A1",
	},
	// Tools
	{
		id: "git",
		name: "Git",
		description: "分布式版本控制系统，代码管理和团队协作必备工具。",
		icon: "logos:git-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 0.5 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description: "轻量级但功能强大的代码编辑器，丰富的插件生态。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		color: "#007ACC",
	},
	{
		id: "intellij",
		name: "IntelliJ IDEA",
		description: "JetBrains旗舰IDE，Java开发的首选工具，强大的智能编码辅助。",
		icon: "logos:intellij-idea",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1.5 },
		projects: ["java-enterprise", "spring-boot-app"],
		color: "#000000",
	},
	{
		id: "docker",
		name: "Docker",
		description: "容器化平台，简化应用部署和环境管理。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 0.1 },
		color: "#2496ED",
	},
	{
		id: "nginx",
		name: "Nginx",
		description: "高性能的Web服务器和反向代理服务器。",
		icon: "logos:nginx",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 0.2 },
		projects: ["web-server-config", "load-balancer"],
		color: "#009639",
	},
	{
		id: "tomcat",
		name: "Apache Tomcat",
		description: "Java Servlet容器和Web服务器，Java Web应用的标准部署环境。",
		icon: "logos:tomcat",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 0.1 },
		projects: ["java-web-app", "servlet-container"],
		color: "#F8DC75",
	},
	{
		id: "linux",
		name: "Linux",
		description: "开源操作系统，服务器部署和开发环境的首选。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 1 },
		projects: ["server-management", "shell-scripting"],
		color: "#FCC624",
	},
	{
		id: "postman",
		name: "Postman",
		description: "API开发和测试工具，简化API的设计、测试和文档编写。",
		icon: "logos:postman-icon",
		category: "tools",
		level: "beginner",
		experience: { years: 0, months: 0.1 },
		projects: ["api-testing", "api-documentation"],
		color: "#FF6C37",
	},
];

// 获取技能统计信息
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate").length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// 按分类获取技能
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// 获取高级技能
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// 计算总经验年数
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
