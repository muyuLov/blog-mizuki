// 时间线数据配置文件
// 用于管理时间线页面的数据

export interface TimelineItem {
	id: string;
	title: string;
	description: string;
	type: "education" | "work" | "project" | "achievement";
	startDate: string;
	endDate?: string; // 如果为空表示至今
	location?: string;
	organization?: string;
	position?: string;
	skills?: string[];
	achievements?: string[];
	links?: {
		name: string;
		url: string;
		type: "website" | "certificate" | "project" | "other";
	}[];
	icon?: string; // Iconify icon name
	color?: string;
	featured?: boolean;
}

export const timelineData: TimelineItem[] = [
	{
		id: "first-project-plan",
		title: "学习期间的项目练习",
		description: "学习过程中，完成一个基于Spring Boot 和 Spring Ai 的Ai聊天 + 记忆项目的开发。",
		type: "project",
		startDate: "2025-8",
		skills: ["java SE", "spring Boot", "speing Ai"],
		achievements: [
			"无"
		],
		icon: "material-symbols:code",
		color: "#b63737ff"
	},
	{
		id: "subsequent-learningOf-the-programming-language-of-interest",
		title: "后续对感兴趣的编程语言的学习情况",
		description: "零零散散的学了十几种编程语言和计算机相关的知识，收获不少。但拿得出手的可以说没有，决定在2025的暑假专精于Java SE的基础学习。",
		type: "achievement",
		startDate: "2025-7",
		skills: ["十几种编程语言和计算机知识"],
		achievements: [
			"零零散散的学了十几种编程语言和计算机相关的知识"
		],
		icon: "material-symbols:code",
		color: "#291946ff"
	},
	{
		id: "first-programming-experience",
		title: "初次接触编程",
		description: "在小学手机上第一次接触编程，开始学习C语言基础语法。",
		type: "education",
		startDate: "2019-5",
		endDate: "2019-5",
		skills: ["C", "基础编程概念"],
		achievements: [
			'完成了第一个"Hello World"程序',
			"学会了基本的循环和条件语句",
			"培养了对编程的兴趣",
		],
		icon: "material-symbols:code",
		color: "#7C3AED"
	}
];

// 获取时间线统计信息
export const getTimelineStats = () => {
	const total = timelineData.length;
	const byType = {
		education: timelineData.filter((item) => item.type === "education").length,
		work: timelineData.filter((item) => item.type === "work").length,
		project: timelineData.filter((item) => item.type === "project").length,
		achievement: timelineData.filter((item) => item.type === "achievement")
			.length,
	};

	return { total, byType };
};

// 按类型获取时间线项目
export const getTimelineByType = (type?: string) => {
	if (!type || type === "all") {
		return timelineData.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
	}
	return timelineData
		.filter((item) => item.type === type)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取特色时间线项目
export const getFeaturedTimeline = () => {
	return timelineData
		.filter((item) => item.featured)
		.sort(
			(a, b) =>
				new Date(b.startDate).getTime() - new Date(a.startDate).getTime(),
		);
};

// 获取当前进行中的项目
export const getCurrentItems = () => {
	return timelineData.filter((item) => !item.endDate);
};

// 计算总工作经验
export const getTotalWorkExperience = () => {
	const workItems = timelineData.filter((item) => item.type === "work");
	let totalMonths = 0;

	workItems.forEach((item) => {
		const startDate = new Date(item.startDate);
		const endDate = item.endDate ? new Date(item.endDate) : new Date();
		const diffTime = Math.abs(endDate.getTime() - startDate.getTime());
		const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
		totalMonths += diffMonths;
	});

	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};
