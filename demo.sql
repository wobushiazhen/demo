-- MySQL dump 10.13  Distrib 8.0.37, for Win64 (x86_64)
--
-- Host: localhost    Database: demo
-- ------------------------------------------------------
-- Server version	8.0.37

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `browser_plugins_article_detail`
--


SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `browser_plugins_article`
-- ----------------------------
DROP TABLE IF EXISTS `browser_plugins_article`;
CREATE TABLE `browser_plugins_article` (
  `bpa_id` varchar(200) NOT NULL COMMENT '浏览器插件文章数据',
  `bpa_name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '',
  `bpa_keyword` varchar(250) DEFAULT NULL,
  `bpa_author` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL DEFAULT '阿珍',
  `bpa_viewers` int DEFAULT '1',
  `bpa_like` int DEFAULT '1',
  `bpa_types` enum('桌面端','gitlab','gitee','github','Nginx','Node.js','mysql','React','Go','PHP','Java','Vue.js','浏览器','安卓IOS','设计师','ACD','产品经理','运维','测试','后端','前端') DEFAULT NULL COMMENT '枚举文章类型',
  `bpa_cover` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT '0',
  `bpa_content` text COMMENT '文章内容',
  `bpa_datetime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`bpa_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of browser_plugins_article
-- ----------------------------
INSERT INTO `browser_plugins_article` VALUES ('43de631b-e12a-4caa-9063-e26390c31cc4', '8', '8', '阿珍', null, null, 'gitee', null, '8', '2024-10-12 00:00:00');
INSERT INTO `browser_plugins_article` VALUES ('5d93f00a-8662-4586-9990-57655267d4ce', '1', '1', '阿珍', null, null, '', null, '1', '2024-10-12 00:00:00');
INSERT INTO `browser_plugins_article` VALUES ('5e08553c-055f-43c5-985e-52514c7b0c20', '9', '9', '阿珍', null, null, 'gitee', null, '9', '2024-10-12 12:24:50');
INSERT INTO `browser_plugins_article` VALUES ('8d7ec3e8-aac8-11ee-a4f6-040e3cdb1b58', 'web3开始了吗？我们能干什么啊数据库刮刮卡火龙果阿里河嘎啦果哈喽开个会啊火龙果哈拉少改好了', 'web3开始了吗, 我们能干什么, 区块链阿三哥哈撒给哈市开了个阿看见发过火见客户', '作者名', '46', '50', '前端', '/material/img/bg11.jpg', ' <h1>Web3 介绍</h1>\r\n\r\n    <p>Web3 是一个新兴的互联网技术概念，旨在通过去中心化、区块链技术和智能合约等技术手段，构建一个更加开放、透明和用户掌控的互联网。Web3 不仅仅是技术的进步，更是对互联网未来发展方向的一种愿景。</p>\r\n\r\n    <h2>Web3 的核心概念</h2>\r\n\r\n    <h3>去中心化</h3>\r\n    <p>Web3 的核心理念之一是去中心化，即减少对中心化机构的依赖，通过区块链技术实现数据的分布式存储和管理。</p>\r\n\r\n    <h3>区块链技术</h3>\r\n    <p>区块链是 Web3 的基础技术之一，通过加密和共识机制确保数据的安全性和不可篡改性。</p>\r\n\r\n    <h3>智能合约</h3>\r\n    <p>智能合约是运行在区块链上的自动化合约，可以在没有中介的情况下执行和验证合约条款。</p>\r\n\r\n    <h3>加密货币和去中心化金融（DeFi）</h3>\r\n    <p>Web3 推动了加密货币和去中心化金融的发展，使得用户可以直接进行金融交易，无需传统金融机构的参与。</p>\r\n\r\n    <h3>去中心化应用（DApps）</h3>\r\n    <p>DApps 是运行在区块链上的应用程序，具有去中心化、透明和安全的特点。</p>\r\n\r\n    <h2>Web3 的应用场景</h2>\r\n\r\n    <h3>去中心化金融（DeFi）</h3>\r\n    <p>通过智能合约和区块链技术，实现去中心化的借贷、交易、保险等金融服务。</p>\r\n\r\n    <h3>去中心化身份（DID）</h3>\r\n    <p>用户可以拥有和管理自己的数字身份，无需依赖中心化身份验证机构。</p>\r\n\r\n    <h3>去中心化存储</h3>\r\n    <p>通过分布式存储技术（如 IPFS），用户可以安全地存储和共享数据，减少对中心化存储服务的依赖。</p>\r\n\r\n    <h3>去中心化社交网络</h3>\r\n    <p>用户可以拥有自己的数据，并通过智能合约实现内容的分发和激励机制。</p>\r\n\r\n    <h3>去中心化市场</h3>\r\n    <p>通过区块链技术，实现去中心化的商品和服务交易市场，减少中介费用和信任成本。</p>\r\n\r\n    <h2>我们能干什么</h2>\r\n\r\n    <h3>学习和研究</h3>\r\n    <p>深入了解 Web3 的技术原理和应用场景，学习区块链、智能合约、加密货币等相关知识。</p>\r\n\r\n    <h3>开发和创新</h3>\r\n    <p>参与 Web3 项目的开发，构建去中心化应用（DApps），探索新的商业模式和技术解决方案。</p>\r\n\r\n    <h3>投资和参与</h3>\r\n    <p>通过投资加密货币、参与 DeFi 项目、购买 NFT 等方式，参与 Web3 经济生态。</p>\r\n\r\n    <h3>社区和生态建设</h3>\r\n    <p>参与 Web3 社区的建设和推广，分享知识和经验，推动 Web3 技术的发展和应用。</p>\r\n\r\n    <h3>政策和法规</h3>\r\n    <p>关注和参与 Web3 相关的政策和法规制定，推动监管环境的完善，促进 Web3 的健康发展。</p>\r\n\r\n    <h2>总结</h2>\r\n    <p>Web3 是一个充满机遇和挑战的新兴领域，通过去中心化、区块链技术和智能合约等技术手段，构建一个更加开放、透明和用户掌控的互联网。我们可以通过学习、开发、投资、社区建设和政策参与等方式，积极参与和推动 Web3 的发展，探索新的商业模式和技术解决方案，为未来的互联网发展贡献力量。</p>', '2024-10-09 17:26:59');
INSERT INTO `browser_plugins_article` VALUES ('8d7ec81c-aac8-11ee-a4f6-040e3cdb1b58', '另一个标题', '关键字1, 关键字2, 关键字3', '另一个作者', '2132', '56', '后端', '/material/img/bg12.jpg', '<h1>Web3 的未来展望</h1>\r\n\r\n    <p>Web3 是一个新兴的互联网技术概念，旨在通过去中心化、区块链技术和智能合约等技术手段，构建一个更加开放、透明和用户掌控的互联网。Web3 不仅仅是技术的进步，更是对互联网未来发展方向的一种愿景。</p>\r\n\r\n    <h2>Web3 的核心概念</h2>\r\n\r\n    <h3>去中心化</h3>\r\n    <p>Web3 的核心理念之一是去中心化，即减少对中心化机构的依赖，通过区块链技术实现数据的分布式存储和管理。</p>\r\n\r\n    <h3>区块链技术</h3>\r\n    <p>区块链是 Web3 的基础技术之一，通过加密和共识机制确保数据的安全性和不可篡改性。</p>\r\n\r\n    <h3>智能合约</h3>\r\n    <p>智能合约是运行在区块链上的自动化合约，可以在没有中介的情况下执行和验证合约条款。</p>\r\n\r\n    <h3>加密货币和去中心化金融（DeFi）</h3>\r\n    <p>Web3 推动了加密货币和去中心化金融的发展，使得用户可以直接进行金融交易，无需传统金融机构的参与。</p>\r\n\r\n    <h3>去中心化应用（DApps）</h3>\r\n    <p>DApps 是运行在区块链上的应用程序，具有去中心化、透明和安全的特点。</p>\r\n\r\n    <h2>Web3 的应用场景</h2>\r\n\r\n    <h3>去中心化金融（DeFi）</h3>\r\n    <p>通过智能合约和区块链技术，实现去中心化的借贷、交易、保险等金融服务。</p>\r\n\r\n    <h3>去中心化身份（DID）</h3>\r\n    <p>用户可以拥有和管理自己的数字身份，无需依赖中心化身份验证机构。</p>\r\n\r\n    <h3>去中心化存储</h3>\r\n    <p>通过分布式存储技术（如 IPFS），用户可以安全地存储和共享数据，减少对中心化存储服务的依赖。</p>\r\n\r\n    <h3>去中心化社交网络</h3>\r\n    <p>用户可以拥有自己的数据，并通过智能合约实现内容的分发和激励机制。</p>\r\n\r\n    <h3>去中心化市场</h3>\r\n    <p>通过区块链技术，实现去中心化的商品和服务交易市场，减少中介费用和信任成本。</p>\r\n\r\n    <h2>我们能干什么</h2>\r\n\r\n    <h3>学习和研究</h3>\r\n    <p>深入了解 Web3 的技术原理和应用场景，学习区块链、智能合约、加密货币等相关知识。</p>\r\n\r\n    <h3>开发和创新</h3>\r\n    <p>参与 Web3 项目的开发，构建去中心化应用（DApps），探索新的商业模式和技术解决方案。</p>\r\n\r\n    <h3>投资和参与</h3>\r\n    <p>通过投资加密货币、参与 DeFi 项目、购买 NFT 等方式，参与 Web3 经济生态。</p>\r\n\r\n    <h3>社区和生态建设</h3>\r\n    <p>参与 Web3 社区的建设和推广，分享知识和经验，推动 Web3 技术的发展和应用。</p>\r\n\r\n    <h3>政策和法规</h3>\r\n    <p>关注和参与 Web3 相关的政策和法规制定，推动监管环境的完善，促进 Web3 的健康发展。</p>\r\n\r\n    <h2>总结</h2>\r\n    <p>Web3 是一个充满机遇和挑战的新兴领域，通过去中心化、区块链技术和智能合约等技术手段，构建一个更加开放、透明和用户掌控的互联网。我们可以通过学习、开发、投资、社区建设和政策参与等方式，积极参与和推动 Web3 的发展，探索新的商业模式和技术解决方案，为未来的互联网发展贡献力量。</p>', '2024-10-09 17:30:25');
INSERT INTO `browser_plugins_article` VALUES ('8d7ec8e5-aac8-11ee-a4f6-040e3cdb1b58', '第三篇文章', '关键字A, 关键字B, 关键字C', '作者C', '2154', '4565', 'Java', '/material/img/bg13.jpg', '<h1>前端何去何从</h1>\r\n\r\n<p>前端开发是一个快速发展的领域，随着技术的不断进步，前端开发者需要不断学习和适应新的技术和工具。以下是一些前端发展的趋势和建议。</p>\r\n\r\n<h2>响应式设计</h2>\r\n<p>随着移动设备的普及，响应式设计成为前端开发的重要趋势，确保网站在不同设备上都能良好显示和使用。</p>\r\n\r\n<h2>前端框架</h2>\r\n<p>前端框架如 React、Vue.js 和 Angular 等，提供了强大的工具和组件，帮助开发者构建高效和可维护的前端应用。</p>\r\n\r\n<h2>性能优化</h2>\r\n<p>性能优化是前端开发的重要任务，通过优化代码和资源，提高网站的加载速度和用户体验。</p>\r\n\r\n<h2>总结</h2>\r\n<p>前端开发是一个快速发展的领域，随着技术的不断进步，前端开发者需要不断学习和适应新的技术和工具。响应式设计、前端框架和性能优化是前端发展的重要趋势。</p>', '2024-10-09 17:37:31');
INSERT INTO `browser_plugins_article` VALUES ('8d7ec94d-aac8-11ee-a4f6-040e3cdb1b58', '随机标题1', '随机关键字A, 随机关键字B', '随机作者1', '47', '132', '设计师', '/material/img/bg14.jpg', '<h1>前端新技术</h1>\r\n\r\n<p>前端技术不断发展，新的技术和工具不断涌现，帮助开发者构建更高效和创新的前端应用。以下是一些前端新技术的介绍。</p>\r\n\r\n<h2>WebAssembly</h2>\r\n<p>WebAssembly 是一种新的技术，可以在浏览器中运行高性能的代码，提高前端应用的性能和功能。</p>\r\n\r\n<h2>PWA</h2>\r\n<p>渐进式 Web 应用（PWA）是一种新的应用模型，结合了 Web 和原生应用的优势，提供更好的用户体验和性能。</p>\r\n\r\n<h2>CSS 变量</h2>\r\n<p>CSS 变量是一种新的技术，允许开发者定义和使用变量，提高 CSS 的可维护性和灵活性。</p>\r\n\r\n<h2>总结</h2>\r\n<p>前端技术不断发展，新的技术和工具不断涌现，帮助开发者构建更高效和创新的前端应用。WebAssembly、PWA 和 CSS 变量是一些前端新技术的代表。</p>', '2024-10-09 17:37:32');
INSERT INTO `browser_plugins_article` VALUES ('8d7ec99d-aac8-11ee-a4f6-040e3cdb1b58', '随机标题2', '随机关键字X, 随机关键字Y, 随机关键字Z', '随机', '4659', '54', '桌面端', '/material/img/bg15.jpg', null, '2024-01-05 12:23:30');
INSERT INTO `browser_plugins_article` VALUES ('8d7ec9e9-aac8-11ee-a4f6-040e3cdb1b58', '技术新闻', '技术, 新闻, 最新动态', '技术小编', '2944', '2145', 'ACD', '/material/img/bg16.jpg', '<h1>技术新闻</h1>\r\n\r\n<p>技术新闻是了解最新科技动态的重要途径，通过关注技术新闻，可以及时了解行业趋势和创新成果。以下是一些技术新闻的来源和建议。</p>\r\n\r\n<h2>科技媒体</h2>\r\n<p>关注科技媒体，如 TechCrunch、Wired 等，获取最新的科技新闻和行业动态。</p>\r\n\r\n<h2>社交媒体</h2>\r\n<p>关注科技领域的专家和公司，通过社交媒体获取最新的技术动态和观点。</p>\r\n\r\n<h2>技术会议</h2>\r\n<p>参加技术会议和活动，了解最新的技术趋势和创新成果，与行业专家和同行交流。</p>\r\n\r\n<h2>总结</h2>\r\n<p>技术新闻是了解最新科技动态的重要途径，通过关注科技媒体、社交媒体和技术会议，可以及时了解行业趋势和创新成果。</p>', '2024-10-09 17:37:14');
INSERT INTO `browser_plugins_article` VALUES ('8d7eca34-aac8-11ee-a4f6-040e3cdb1b58', '学习指南是的是的高速路口', '学习, 指南, 教程省公司帝国时代跟你说过你啦', '导师名', '152', '272', 'PHP', '/material/img/bg13.jpg', '暂无', '2024-10-14 15:06:02');
INSERT INTO `browser_plugins_article` VALUES ('8d7ecb30-aac8-11ee-a4f6-040e3cdb1b58', '代码分享', '代码, 分享, 开源', '开发者', '32', '5452', 'Vue.js', '/material/img/bg11.jpg', '<h1>代码分享</h1>\r\n\r\n<p>代码分享是开发者社区的重要组成部分，通过分享代码和经验，开发者可以相互学习和提高。以下是一些代码分享的建议。</p>\r\n\r\n<h2>开源项目</h2>\r\n<p>参与开源项目，贡献代码和文档，帮助他人解决问题，同时提升自己的技能和经验。</p>\r\n\r\n<h2>技术博客</h2>\r\n<p>撰写技术博客，分享自己的开发经验和心得，帮助他人理解和掌握新技术。</p>\r\n\r\n<h2>代码库</h2>\r\n<p>创建和维护代码库，分享常用的代码片段和工具，提高开发效率和质量。</p>\r\n\r\n<h2>总结</h2>\r\n<p>代码分享是开发者社区的重要组成部分，通过分享代码和经验，开发者可以相互学习和提高。参与开源项目、撰写技术博客和创建代码库，都是有效的代码分享方式。</p>', '2024-10-14 11:38:24');
INSERT INTO `browser_plugins_article` VALUES ('8d7ecb6f-aac8-11ee-a4f6-040e3cdb1b58', '创业心得', '创业, 心得, 创业经验', '创业者', '4688', '456', '前端', '/material/img/bg11.jpg', '<h1>创业心得</h1>\r\n\r\n<p>创业是一条充满挑战和机遇的道路，成功的创业需要坚定的信念、明确的目标和持续的努力。以下是一些创业心得，希望能为创业者提供一些启示。</p>\r\n\r\n<h2>明确目标</h2>\r\n<p>在创业之前，首先要明确自己的目标和愿景。清晰的目标可以帮助你制定合理的计划，并在遇到困难时保持动力。</p>\r\n\r\n<h2>团队建设</h2>\r\n<p>一个优秀的团队是创业成功的关键。选择志同道合、能力互补的合作伙伴，共同面对挑战，分享成功。</p>\r\n\r\n<h2>市场调研</h2>\r\n<p>在进入市场之前，进行充分的市场调研，了解市场需求和竞争环境，制定有效的市场策略。</p>\r\n\r\n<h2>持续学习</h2>\r\n<p>创业是一个不断学习和成长的过程。保持开放的心态，不断学习新知识和技能，适应市场变化。</p>\r\n\r\n<h2>总结</h2>\r\n<p>创业是一条充满挑战和机遇的道路，成功的创业需要坚定的信念、明确的目标和持续的努力。通过明确目标、团队建设、市场调研和持续学习，创业者可以更好地应对挑战，实现创业梦想。</p>', '2024-10-09 17:36:54');
INSERT INTO `browser_plugins_article` VALUES ('8d7ecb9f-aac8-11ee-a4f6-040e3cdb1b58', '未来科技', '未来, 科技, 先进技术', '科技迷', '0', '0', 'github', '/material/img/bg15.jpg', '<h1>未来科技</h1>\r\n\r\n<p>未来科技是一个充满无限可能的领域，通过不断创新和突破，科技将改变我们的生活和工作方式。以下是一些未来科技的发展趋势。</p>\r\n\r\n<h2>人工智能</h2>\r\n<p>人工智能将继续发展，通过机器学习和深度学习技术，实现更智能的应用和服务，提高生产力和生活质量。</p>\r\n\r\n<h2>量子计算</h2>\r\n<p>量子计算将带来计算能力的革命性提升，解决传统计算机无法解决的复杂问题，推动科学研究和产业发展。</p>\r\n\r\n<h2>生物技术</h2>\r\n<p>生物技术将通过基因编辑和合成生物学等技术，实现对生命的深入理解和改造，提高医疗水平和生活质量。</p>\r\n\r\n<h2>总结</h2>\r\n<p>未来科技是一个充满无限可能的领域，通过不断创新和突破，科技将改变我们的生活和工作方式。人工智能、量子计算和生物技术等领域的突破，将推动社会的进步和发展。</p>', '2024-10-09 17:37:00');
INSERT INTO `browser_plugins_article` VALUES ('b704f933-7d9e-4acb-95ac-990c4226fdcb', '2', '2', '阿珍', null, null, '', null, '2', '2024-10-12 00:00:00');
INSERT INTO `browser_plugins_article` VALUES ('ddb58a64-156d-45a7-839e-6c24c474304e', '2', '2', '阿珍', null, null, '桌面端', null, '2', '2024-10-12 00:00:00');
INSERT INTO `browser_plugins_article` VALUES ('eb0800d6-cca7-43fa-b199-bf2d9cd9535d', '435', '345', '阿珍', '1', '1', '桌面端', '0', '阿三哥', '2024-11-22 00:00:00');


DROP TABLE IF EXISTS `browser_plugins_article_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `browser_plugins_article_detail` (
  `bpad_id` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `bpa_name` varchar(250) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`bpad_id`),
  CONSTRAINT `fk_agsd1213235` FOREIGN KEY (`bpad_id`) REFERENCES `browser_plugins_article` (`bpa_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `browser_plugins_article_detail`
--

LOCK TABLES `browser_plugins_article_detail` WRITE;
/*!40000 ALTER TABLE `browser_plugins_article_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `browser_plugins_article_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `browser_plugins_article_likes`
--

DROP TABLE IF EXISTS `browser_plugins_article_likes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `browser_plugins_article_likes` (
  `like_id` int NOT NULL AUTO_INCREMENT,
  `bpa_id` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `device_uuid` varchar(200) COLLATE utf8mb4_general_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`like_id`),
  UNIQUE KEY `unique_like` (`bpa_id`,`device_uuid`)
) ENGINE=InnoDB AUTO_INCREMENT=563343 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `browser_plugins_article_likes`
--

LOCK TABLES `browser_plugins_article_likes` WRITE;
/*!40000 ALTER TABLE `browser_plugins_article_likes` DISABLE KEYS */;
INSERT INTO `browser_plugins_article_likes` VALUES (563341,'8d7ecb30-aac8-11ee-a4f6-040e3cdb1b58','m25rwxar-8ace8a1d-5b29-4db4-97b6-f44178007767','2024-10-14 03:24:08'),(563342,'8d7eca34-aac8-11ee-a4f6-040e3cdb1b58','m28hchwy-6f0c3971-a9ba-40a4-90b4-783a3e90943b','2024-10-14 06:49:27');
/*!40000 ALTER TABLE `browser_plugins_article_likes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editor`
--

DROP TABLE IF EXISTS `editor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editor` (
  `eid` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `etime` datetime DEFAULT NULL,
  `ehtml` longtext COLLATE utf8mb4_general_ci,
  `times` int DEFAULT NULL,
  `author` varchar(400) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `remark` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`eid`),
  KEY `ename` (`ename`),
  KEY `etime` (`etime`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
 
--
-- Dumping data for table `editor`
--

LOCK TABLES `editor` WRITE;
/*!40000 ALTER TABLE `editor` DISABLE KEYS */;
/*!40000 ALTER TABLE `editor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `editor_record`
--

DROP TABLE IF EXISTS `editor_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `editor_record` (
  `erid` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `eid` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `ename` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `etime` datetime DEFAULT NULL,
  `ehtml` longtext COLLATE utf8mb4_general_ci,
  PRIMARY KEY (`erid`),
  KEY `fk-edi12gs` (`eid`),
  KEY `fk-edname342423x` (`ename`),
  KEY `fk-erkbka12` (`etime`),
  CONSTRAINT `fk-edi12gs` FOREIGN KEY (`eid`) REFERENCES `editor` (`eid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `editor_record`
--

LOCK TABLES `editor_record` WRITE;
/*!40000 ALTER TABLE `editor_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `editor_record` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb3 */ ;
/*!50003 SET character_set_results = utf8mb3 */ ;
/*!50003 SET collation_connection  = utf8mb3_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `before_insert_editor_record` BEFORE INSERT ON `editor_record` FOR EACH ROW BEGIN

    DECLARE next_id INT;

    SELECT AUTO_INCREMENT INTO next_id

    FROM information_schema.TABLES

    WHERE TABLE_SCHEMA = 'demo'

    AND TABLE_NAME = 'editor_record';



    SET NEW.erid = CONCAT('erid-', LPAD(next_id, 3, '0'));

END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `interview_questions`
--

DROP TABLE IF EXISTS `interview_questions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `interview_questions` (
  `subid` int NOT NULL AUTO_INCREMENT,
  `subname` varchar(255) NOT NULL,
  `subUnderstand` varchar(255) DEFAULT NULL,
  `subtime` datetime DEFAULT NULL,  
  `level` enum('熟悉','掌握','了解','较差') DEFAULT NULL,
  `subtype` enum('优化与安全','计算机网络','浏览器','html','html5','css','css3','javascript','typescript','vue2','vue3','react','photoshop','git','nodeJs','大屏可视化','小程序','webpack/vite','axios/ajax','插件库/组件库','微前端','低代码/无代码平台','rust','nestJS','桌面端electron','其他') DEFAULT NULL,
  PRIMARY KEY (`subid`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `interview_questions`
--

LOCK TABLES `interview_questions` WRITE;
/*!40000 ALTER TABLE `interview_questions` DISABLE KEYS */;
INSERT INTO `interview_questions` VALUES ('1', 'css3新特性', 'css3新特性添加了一些伪类标签，动画效果。。。。', '2024-06-04 10:31:04', null, null);
INSERT INTO `interview_questions` VALUES ('2', 'Example Question', 'Understanding of basic JS concepts', '2024-06-04 10:33:42', null, null);
INSERT INTO `interview_questions` VALUES ('3', 'TCP是什么啊', 'tcp是面向连接、提供可靠传输、基于字节流的一种运输层的传输层协议', '2024-09-19 10:23:06', '掌握', '计算机网络');
INSERT INTO `interview_questions` VALUES ('4', '什么是udp啊', 'udp是一种面向无连接、不可靠传输、头部开销小。适用于直播、视频会议的一种传输协议', '2024-09-19 10:25:27', '了解', '计算机网络');
INSERT INTO `interview_questions` VALUES ('5', 'js 事件冒泡是怎么回事啊', '是原本要监听的元素，事件却绑定在其父元素身上进行监听，通过事件冒泡，父元素可以监听到子元素触发的事件。简单来说，当一个dom元素接受事件监听的时候，他会把接受到的事件传给他的父级元素，知道window。addEventListener默认就是事件冒泡\n', '2024-09-20 10:59:02', '较差', 'javascript');
INSERT INTO `interview_questions` VALUES ('6', 'js 事件委托呢', '事件委托就是利用了事件冒泡的原理，把触发的事件绑定在父元素身上，比如ul li绑定在ul身上通过e.target获取到li的值等。', '2024-09-20 11:10:13', '了解', 'javascript');


/*!40000 ALTER TABLE `interview_questions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subid_sequence`
--

DROP TABLE IF EXISTS `subid_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subid_sequence` (
  `current_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subid_sequence`
--

LOCK TABLES `subid_sequence` WRITE;
/*!40000 ALTER TABLE `subid_sequence` DISABLE KEYS */;
INSERT INTO `subid_sequence` VALUES (1003);
/*!40000 ALTER TABLE `subid_sequence` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-12-04 11:26:51
