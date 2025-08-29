---
title: Aliya-cosmos 项目开发情况
published: 2025-08-29
pinned: false
description: Aliya-cosmos 是一个基于 Spring Boot 后端和 Vue.js 前端的 AI 聊天应用。该项目集成了 Ollama AI 服务和 Milvus 向量数据库，旨在提供智能对话和记忆管理功能。
tags: [项目开发, spring Ai]
category: 项目开发
author: muyulov
sourceLink: "https://github.com/muyuLov/muyulovBlogPosts/blob/main/Aliya-cosmos-development/"
draft: false
date: 2025-08-29
image: './cover.jpg'
pubDate: 2025-08-29
series: "项目开发"
---

## 项目概述

Aliya-cosmos 是一个基于 Spring Boot 后端和 Vue.js 前端的 AI 聊天应用。该项目集成了 Ollama AI 服务和 Milvus 向量数据库，旨在提供智能对话和记忆管理功能。

## 当前项目状态分析

### 技术架构

#### 后端架构
- **核心技术栈**：Java、Spring Boot、Milvus向量数据库
- **AI集成**：Ollama服务，使用qwen2.5对话模型和nomic-embed-text嵌入模型
- **服务配置**：端口8080，上下文路径/AliyaBackEnd

#### 前端架构
- **核心技术栈**：Vue 3、Axios、Marked.js
- **UI设计**：现代化界面，包含渐变背景、毛玻璃效果等

### 已实现功能模块

1. **基础架构**
   - Spring Boot应用框架搭建完成
   - Ollama AI服务集成配置
   - Milvus向量数据库连接配置
   - 基础文件目录初始化管理

2. **核心模块**
   - 聊天功能基础框架
   - 记忆管理模块基础结构
   - 系统初始化和配置管理

3. **前端界面**
   - 完整的聊天界面实现
   - 消息展示和发送功能
   - Markdown渲染支持
   - 现代化UI设计

## 项目结构分析

### 后端结构
```
com.muyulov.backend
├── AliyaBackEndApplication.java  # 主应用启动类
├── Init.java                     # 系统初始化类
├── MilvusMemory/                 # 记忆管理模块
│   ├── config/                   # Milvus配置
│   ├── entity/                   # 记忆实体类
│   ├── service/                  # 记忆服务类
│   ├── type/                     # 记忆类型定义
│   └── TextVector.java           # 文本向量化处理
├── chat/                         # 聊天功能模块
│   ├── config/                   # 聊天配置
│   └── controller/               # 聊天控制器
└── utils/                        # 工具类
```

### 前端结构
```
FrontEnd/
└── main.html  # 测试用的聊天页面文件
```

## 后续开发任务规划

### 第一阶段：核心功能完善

#### 后端开发任务
1. **聊天接口完善**
   - 实现聊天控制器完整功能
   - 开发RESTful API接口
   - 集成Ollama聊天服务
   - 实现消息处理和响应逻辑

2. **记忆管理功能**
   - 完善MemoryService核心服务类
   - 实现记忆的增删改查功能
   - 开发记忆检索和相似度匹配算法
   - 实现记忆分类和标签管理

3. **数据模型优化**
   - 完善实体类设计
   - 实现TextVector文本向量化处理逻辑
   - 设计记忆实体的存储结构和索引策略

#### 前端开发任务
1. **聊天交互优化**
   - 完善消息发送和接收逻辑
   - 结合UE5 引擎开发桌面应用
   - 实现消息历史记录展示
   - 添加消息编辑和重新发送功能
   - 优化用户界面交互体验

2. **功能界面扩展**
   - 实现记忆管理界面
   - 添加系统设置面板
   - 实现多轮对话上下文管理
   - 添加文件上传和处理功能

### 第二阶段：系统集成与优化

#### 性能优化
1. 实现向量计算结果缓存机制
2. 优化数据库查询性能
3. 添加异步处理机制
4. 实现请求限流和防护

#### 稳定性提升
1. 完善异常处理机制
2. 添加日志记录和监控
3. 实现健康检查接口
4. 添加数据备份和恢复机制

### 第三阶段：测试与部署

#### 测试完善
1. 编写单元测试和集成测试
2. 实现API接口测试
3. 进行性能压力测试
4. 完善异常场景测试

#### 部署优化
1. 实现CI/CD流程
2. 配置生产环境参数
3. 添加监控和告警机制

## 开发优先级

| 优先级 | 任务内容 | 说明 |
|--------|----------|------|
| 高 | 完善聊天API接口和前端交互逻辑 | 核心功能，用户直接体验 |
| 中 | 实现记忆管理功能和优化UI体验 | 核心特色功能 |
| 中 | 系统集成和性能优化 | 提升系统稳定性和性能 |
| 低 | 高级功能开发和扩展 | 锦上添花的功能 |

如何你有一些建议，可以留言一下。（我很欢迎留言的！）