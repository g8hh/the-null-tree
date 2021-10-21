/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "Gain 1 null point(np) every second.": "每秒获得 1 个空点（np）。",
    "Currently": "当前",
    "compressed null points": "压缩空点",
    "CP gain above 1e33 are raised to 3rd power.": "高于 1e33 的 CP 增益提高到 3 次方。",
    "Base np requirement to gain cp is 50% less.": "获得 cp 的基本 空点 要求减少 50%。",
    "Automation": "自动化",
    "Multiply effect of upgrade 12 ~ 14 based on np.": "基于空点的升级12~14倍增效果。",
    "Multiply effect of upgrade 12 and 13 based on your np.": "乘以升级 12 和 13 的效果基于您的 空点.",
    "Multiply effect of upgrade based on your cp.": "根据你的cp乘以升级的效果。",
    "Multiply np gain based on your compressed null point(cp).": "根据压缩空点（cp）乘以 空点 增益。",
    "Multiply np gain based on your np.": "根据您的 空点 乘以 空点 增益。",
    "Np required to get cp grows MUCH slower.": "获得 cp 所需的 空点 增长得慢得多。",
    "Np required to get cp grows MUCH^2 slower.": "获得 cp 所需的 空点 增长慢得多^2。",
    "Np required to get cp grows slower.": "获得 cp 所需的 空点 增长较慢。",
    "null points": "空点",
    "Reset for +": "重置得到 +",
    "The Null Tree Discord": "空值树 Discord",
    "Achievement Gotten!": "成就获得！",
    "achievement power (which gives you multiplier on points generation": "成就力量（它使您获得点数的乘数",
    "Air": "气",
    "Base np requirement to gain cp is 50% less AGAIN.": "获得 cp 的基本 空点 要求再次减少 50%。",
    "Buy all auto prestige for row 2.": "购买第 2 行的所有自动声望。",
    "\"REAL\" automation": "“真正的”自动化",
    "3k infinities": "3k 无限",
    "5 dozens of infinities": "5 打无穷大",
    "Buy upgrade 11 in id.": "在 id 中购买升级 11。",
    "Earth": "地",
    "Effectively idle.": "有效放置。",
    "Energetic Energy": "高能能量",
    "Faster than a potato": "比土豆还快",
    "Finish EASY challenge once.": "完成一次 简单 挑战。",
    "Fire": "火",
    "Get a fire point.": "得到1 火 点数",
    "Get a water point.": "得到1 水 点数",
    "Get an air point.": "得到1 气 点数",
    "Get an earth point.": "得到1 地 点数",
    "Get at least x2304 energy power from upgrades in S.": "从 S 的升级中获得至少 x2304 的能量。",
    "Infinity isn't hard": "无限并不难",
    "Have at least 60 seconds of inertia.": "至少有 60 秒的惯性。",
    "Limit Break": "突破极限",
    "Nearly 1e-21 Universe": "接近 1e-21 宇宙",
    "Not so challenging": "没那么有挑战性",
    "One minute is a lot.": "一分钟很多。",
    "Reward: points in row 2 becomes much cheaper.": "奖励：第 2 行的点数变得便宜得多。",
    "Reward: These upgrades increases energy gain, and also unlockes something great.": "奖励：这些升级增加了能量增益，也解锁了一些伟大的东西。",
    "Too Much Fire": "太多的火",
    "Water": "水",
    "You gotta start somewhere...": "你必须从某个地方开始......",
    "Get 29 OoMs of np per second.": "每秒获得 29 个 OoM 的 空点。",
    "Higher Generation np/s Cap": "更高世代 空点/秒 上限",
    "Higher Inertia Cap": "更高的惯性上限",
    "Faster Inertia Generation": "更快的惯性生成",
    "More Null Points": "更多空点",
    "Produce null points at a much slower speed but always get Inertia.": "以慢得多的速度产生空点，但总是得到惯性。",
    "seconds of Inertia": "秒的惯性",
    "Off": "关",
    "On": "开",
    "Auto buys upgrade in C.": "在 C 中自动购买升级。",
    "best fp multiplits cp gain.": "最佳 fp 乘以 cp 增益。",
    "fire points": "火点数",
    "fp no more resets cp.": "火点 不再重置 cp。",
    "More cp gain": "更多 cp 增益",
    "You can turn it on/off in layer Au.": "您可以在 Au 层中打开/关闭它。",
    "Your best fire points is 1": "你最好的火点是 1",
    "You get 2% of cp every second.": "你每秒获得 2% 的 cp。",
    "wp no more resets cp.": "wp 不再重置 cp。",
    "water points": "水点数",
    "Unlocks 3 new upgrades in C.": "在 C 中解锁 3 项新升级。",
    "Stronger achievement power": "更强的成就力量",
    "Slower cp cost growth": "CP 成本增长放缓",
    "np gain is raised to 1.15th power.": "np 增益提高到 1.15 力量。",
    "Milestone Gotten!": "获得里程碑！",
    "ep no more resets cp.": "地点数 不再重置 cp。",
    "earth points": "地点数",
    "Cheaper": "更便宜",
    "best ap multiplits cp gain.": "最佳 气点数 乘以 cp 增益。",
    "best ep multiplits cp gain.": "最佳 地点数 乘以 cp 增益。",
    "best wp multiplits cp gain.": "最佳 水点数 乘以 cp 增益。",
    "ap no more resets cp.": "气点数 不再重置 cp。",
    "air points": "气点数",
    "Increases np gain based on your cp.": "根据你的cp增加np增益。",
    "Multiplies cp gain based on np.": "基于 np 乘以 cp 增益。",
    "Multiplies np gain based on time since last reset.": "根据自上次重置以来的时间乘以 np 增益。",
    "Pretty Rich": "相当有钱",
    "cp gain becomes ^1.1": "cp 增益变为 ^1.1",
    "EASY": "简单",
    "infinity points": "无限点",
    "Your cp decrease rate becomes x0.72.": "你的 cp 减少率变为 x0.72。",
    "Your np gain becomes ^0.92.": "您的 空点 增益变为 ^0.92。",
    "Start": "开始",
    "Goal:": "目标:",
    "Reward:": "奖励:",
    "Reward": "奖励",
    "Unlocks buy max in row 2.": "在第 2 行解锁最多购买。",
    "Get a air point.": "获得 1 空气点。",
    "Get 6.66e68 null points.\nReward: Passive cp generation is multiplied by 10.": "获得 6.66e68 个空点。\n奖励：被动 cp 生成乘以 10。",
    "Exit Early": "提前退出",
    "CP above 1.80e308 are unstable. 95.00% of them disappear every second.": "CP 高于 1.80e308 是不稳定的。 它们中的 95.00% 每秒都会消失。",
    "Best ip increases np gain.": "最佳 无限点 增加 空点 增益。",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "(-": "(-",
    "(+": "(+",
    "(": "(",
    "-": "-",
    "+": "+",
    " ": " ",
    ": ": "： ",
    "\n": "",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Currently: ": "当前: ",
    "Your best air points is ": "你最好的 气点数是",
    "Your best earth points is ": "你最好的 地点数是",
    "Your best fire points is ": "你最好的 火点数是",
    "Your best water points is ": "你最好的 水点数是",
    "Your best infinity points is ": "你最好的 无限点数是",
    "\t\t\t\t": "\t\t\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    ":": "：",
    "：": "：",
    ": ": "： ",
    "： ": "： ",
    "/s)": "/s)",
    "/s": "/s",
    ")": ")",
    "%": "%",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": " ",
    "\n": "",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\^([\d\.]+)$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^Reach (.+) compressed null points to unlock \(You have (.+) compressed null points$/, '达到 $1 压缩空点解锁（你有 $1 压缩空点'],
    [/^You are getting (.+) seconds of Inertia every second.$/, '您每秒获得 $1 秒的惯性。'],
    [/^You are gaining (.+) compressed null points per second$/, '您每秒获得 $1 压缩空点'],
    [/^You are gaining (.+) infinity points per second$/, '您每秒获得 $1 无限点'],
    [/^Your Inertia is capped at (.+) seconds.$/, '您的惯性上限为 $1 秒。'],
    [/^Inertia is only generated when your np\/s isn\'t greater than (.+).$/, '惯性仅在您的 空点\/秒 不大于 $1 时生成。'],
    [/^Effect of this upgrade resets when C resets.\nCost: (.+) seconds of Inertia\n(.+)Amount: (.+)\n(.+)Effect: (.+)$/, '此升级的效果会在 C 重置时重置。\n成本：$1 秒的惯性\n$2数量：$3\n 效果：$4'],
    [/^Cost: (.+) fire points\n(.+)Amount: (.+)\n(.+)Multiplies cp gain by (.+)$/, '成本：$1 火点\n$2数量：$3\n$4将cp 增益乘以 $5'],
    [/^Cost: (.+) air points\n(.+)Amount: (.+)\n(.+)Multiplies cost of upgrades in C and ap, fp, ep, wp cost by (.+)$/, '成本：$1 气点\n$2数量：$3\n$4将 C 的升级成本 和 气点数、火点数、地点数、水点数 成本乘以 $5'],
    [/^Cost: (.+) earth points\n(.+)Amount: (.+)\n(.+)cp cost exponent decreased by (.+)$/, '成本：$1 地点\n$2数量：$3\n$4cp 成本指数减少了 $5'],
    [/^Cost: (.+) water points\n(.+)Amount: (.+)\n(.+)Multiplies achievement power by (.+)$/, '成本：$1 水点\n$2数量：$3\n$4成就力量乘以 $5'],
    [/^Cost: (.+) seconds of Inertia\n(.+)Amount: (.+)\n(.+)Multiplies your np gain by (.+)$/, '成本：$1 秒的惯性\n$2数量：$3\n$4将你的 空点 增益乘以 $5'],
    [/^Cost: (.+) seconds of Inertia\n(.+)Amount: (\d+) \/ (\d+)$/, '成本：$1 秒的惯性\n$2数量：$3 \/ $4'],
    [/^Req: (.+) compressed null points$/, '需要：$1 压缩空点'],
    [/^You have (.+) compressed null points$/, '你有 $1 压缩空点数'],
    [/^You have (.+) null points$/, '你有 $1 空点数'],
    [/^You have made a total of (.+) fire points$/, '你制造了总共 $1 火点数'],
    [/^You have made a total of (.+) earth points$/, '你制造了总共 $1 地点数'],
    [/^You have made a total of (.+) air points$/, '你制造了总共 $1 气点数'],
    [/^You have made a total of (.+) water points$/, '你制造了总共 $1 水点数'],
    [/^You have made a total of (.+) infinity points$/, '你制造了总共 $1 无限点数'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Have at least (.+) ap$/, '至少有 $1 ap'],
    [/^Get (.+) ip.$/, '获得 $1 ip'],
    [/^Get (.+) stars.$/, '获得 $1 星星'],
    [/^Get (.+) fp.$/, '获得 $1 fp'],
    [/^Get (.+) cp.$/, '获得 $1 cp'],
    [/^Have at least (.+) ep$/, '至少有 $1 地点每秒'],
    [/^Have at least (.+) wp$/, '至少有 $1 水点每秒'],
    [/^Have at least (.+) ap$/, '至少有 $1 气点每秒'],
    [/^Have at least (.+) fp$/, '至少有 $1 火点每秒'],
    [/^Next at (.+) compressed null points$/, '下一个在 $1 严肃哦空点数'],
    [/^Next at (.+) null points$/, '下一个在 $1 空点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
    [/^Buy upgrade ([\d\.]+) in C.$/, '在 C 中购买升级 $1。'],
	[/^([\d\.]+)e([\d\.,]+) compressed null points$/, '$1e$2 压缩空点'],
	[/^([\d\.]+)e([\d\.,]+)x$/, '$1e$2x'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)x$/, '$1\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) seconds of Inertia$/, '$1 秒的惯性'],
	[/^([\d\.,]+) seconds of Inertia$/, '$1 秒的惯性'],
	[/^([\d\.]+)e([\d\.,]+) seconds of Inertia$/, '$1e$2 秒的惯性'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+) compressed null points$/, '$1 压缩空点'],
    [/^([\d\.,]+) compressed null points$/, '$1 压缩空点'],
    [/^(\d+) infinity points$/, '$1 无心点数'],
    [/^(\d+) earth points$/, '$1 地点数'],
    [/^(\d+) water points$/, '$1 水点数'],
    [/^(\d+) air points$/, '$1 气点数'],
    [/^(\d+) fire points$/, '$1 火点数'],
    [/^(\d+) Royal points$/, '$1 皇家点数'],
    [/^Cost: (\d+) RP$/, '成本：$1 皇家点数'],
    [/^Cost: (.+) compressed null points$/, '成本：$1 压缩空点'],
    [/^Cost: (.+) infinity points$/, '成本：$1 无限点'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);