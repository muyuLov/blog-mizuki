// 相册配置数据结构
export interface Photo {
	id: string;
	src: string;
	thumbnail?: string;
	alt: string;
	title?: string;
	description?: string;
	tags?: string[];
	date?: string;
	location?: string;
	width?: number;
	height?: number;
	camera?: string;
	lens?: string;
	settings?: {
		aperture?: string;
		shutter?: string;
		iso?: string;
		focal?: string;
	};
}

export interface AlbumGroup {
	id: string;
	title: string;
	description?: string;
	cover: string;
	date: string;
	location?: string;
	tags?: string[];
	photos: Photo[];
	layout?: "grid" | "masonry";
	columns?: number;
}

// 相册数据
export const albumsData: AlbumGroup[] = [
	{
		id: "aliya",
		title: "Aliya的照片合集",
		description: "Aliya在一千年后的活动",
		cover: "https://wallpapercave.com/wp/wp2535789.jpg",
		date: "2025.09.01",
		location: "3025年后",
		tags: ["K-ON", "轻音少女", "萌系", "日常"],
		layout: "grid",
		columns: 3,
		photos: [
			{
				id: "yui-hirasawa-1",
				src: "",
				alt: "平泽唯 - 可爱的吉他手",
				width: 1920,
				height: 1080,
			},
		],
	},
];