"use strict";
const STORAGE="starSoulV6";
const items=[
{d:0,q:"你收到一个收入更高的新机会，但工作内容和你长期想走的方向不太一样，你通常会？",o:[["先看眼前收益",1],["听听身边人的建议",2],["把收益和方向一起比较",3],["更看重长期方向",4],["方向不对就很难接受",5]]},
{d:1,q:"接手一个从没做过的复杂任务，你通常先怎么开始？",o:[["先动手试试看",1],["找一个现成做法照着做",2],["边做边理清",3],["先列关键步骤",4],["先拆结构和依赖关系",5]]},
{d:2,q:"周末突然空出半天，没有任何安排，你通常会？",o:[["随便做点什么",1],["看看别人有没有安排",2],["临时决定",3],["先感受自己更想休息还是活动",4],["通常很快知道自己真正想要什么",5]]},
{d:3,q:"第一次进入一个完全陌生的场所，你最自然的反应更接近？",o:[["直接进入状态",1],["跟着别人走",2],["先看整体环境",3],["会留意人员和出口",4],["先确认安全感再放松",5]]},
{d:4,q:"会议中有人突然打断你并否定你的意见，你通常会？",o:[["先不回应",1],["等会后再说",2],["看情况决定",3],["当场把观点说明白",4],["会马上维护自己的发言空间",5]]},
{d:5,q:"和一个新认识的人聊得特别投缘，你通常会？",o:[["保持礼貌距离",1],["先观察几次",2],["顺其自然",3],["愿意分享更多自己",4],["会主动建立更深的连接",5]]},
{d:6,q:"同事临时把一项本不属于你的工作交给你，你通常会？",o:[["先接下来再说",1],["大多会帮忙",2],["看当天负荷",3],["先谈清范围",4],["超出范围会明确拒绝",5]]},
{d:7,q:"朋友发来一条很惊人的消息，你第一反应更接近？",o:[["先相信再说",1],["看看大家怎么评论",2],["先保留判断",3],["查一下来源",4],["会核对多个可靠来源",5]]},
{d:8,q:"你发现每天坚持的一个习惯已经没有效果，你通常会？",o:[["继续保持",1],["再坚持一阵",2],["做一点小调整",3],["逐步换掉它",4],["确认无效后会主动结束",5]]},
{d:9,q:"你需要在一个很吵、很亮的地方待两个小时，你通常会？",o:[["基本没感觉",1],["有一点影响",2],["看当天状态",3],["会明显消耗精力",4],["会很想换环境或减少刺激",5]]},

{d:0,q:"你已经投入很多时间做一件事，但越来越觉得它不符合现在的自己，你通常会？",o:[["因为投入很多就继续",1],["再撑一段时间",2],["边做边观察",3],["重新评估它是否值得",4],["会按现在的价值方向重新选择",5]]},
{d:1,q:"两个方案都能解决问题，但各有优缺点，你通常会？",o:[["凭第一感觉选",1],["选最熟悉的",2],["看几个关键点",3],["比较主要利弊",4],["系统比较成本、风险和收益",5]]},
{d:2,q:"朋友问你“你现在到底在难受什么？”你通常会？",o:[["很难说清",1],["只能说不舒服",2],["大概知道",3],["通常能说出主要情绪",4],["能较具体分辨情绪和需要",5]]},
{d:3,q:"一个平时很熟悉的人突然说话方式变了，你通常会？",o:[["一般注意不到",1],["过后才发现",2],["觉得有点不一样",3],["很快会察觉",4],["会马上提高观察和警觉",5]]},
{d:4,q:"你和亲近的人有重要分歧时，你通常怎么处理？",o:[["尽量不谈",1],["先顺着对方",2],["等情绪过去再说",3],["会明确表达不同意见",4],["会坚持谈到边界和立场清楚",5]]},
{d:5,q:"亲近的人情绪很低落，但没有主动求助，你通常会？",o:[["等对方自己处理",1],["保持一点距离",2],["简单问候",3],["主动问对方需不需要陪伴",4],["会投入时间理解和陪伴",5]]},
{d:6,q:"刚认识一个很有魅力的人，对方很快就想知道你的很多私事，你通常会？",o:[["很快就全说",1],["大多会跟着气氛分享",2],["只说一部分",3],["会慢慢开放",4],["会先看长期一致性再深入",5]]},
{d:7,q:"你看到一个和自己原有看法相反、但来源可靠的新研究，你通常会？",o:[["先忽略",1],["先找支持原观点的资料",2],["暂时放着",3],["重新比较证据",4],["必要时会明显修改原观点",5]]},
{d:8,q:"搬家、换工作或毕业后，原来的生活节奏被打乱，你通常会？",o:[["尽量维持原样",1],["先随便过一阵",2],["慢慢适应",3],["主动建立新节奏",4],["会把旧结构整体重新整理",5]]},
{d:9,q:"在一个重要场合前，你发现自己肩颈很紧、呼吸变浅，你通常会？",o:[["不太会注意",1],["只觉得有点累",2],["知道自己状态不对",3],["会留意身体在反应什么",4],["会根据身体信号调整自己",5]]},

{d:0,q:"你做的一个决定对自己很方便，但会给团队其他人增加不少负担，你通常会？",o:[["先顾自己效率",1],["看大家会不会介意",2],["双方影响都考虑",3],["会考虑整体后果",4],["通常会把整体影响放到很重要的位置",5]]},
{d:1,q:"同一种问题连续出现几次，你通常会？",o:[["每次单独解决",1],["凭经验应付",2],["注意到有重复",3],["主动找共同规律",4],["总结成以后可以复用的方法",5]]},
{d:2,q:"你连续几天心情不太对，但工作仍然很多，你通常会？",o:[["继续忙，不太管感受",1],["用事情分散注意",2],["先撑过去再说",3],["抽时间看看自己怎么了",4],["会主动处理情绪和内在需要",5]]},
{d:3,q:"有人邀请你参加一个听起来不错、但细节还很模糊的活动，你通常会？",o:[["先答应再说",1],["看别人去不去",2],["先问几个基本问题",3],["会了解风险和退路",4],["信息不足时通常不会轻易答应",5]]},
{d:4,q:"你看到身边的人被不公平对待，而对方一时不敢说话，你通常会？",o:[["尽量不介入",1],["先观察局势",2],["私下问对方需不需要帮助",3],["会出面支持",4],["会直接采取行动制止或保护",5]]},
{d:5,q:"你想做一个创作或表达项目时，什么最容易让你进入状态？",o:[["先靠纪律硬做",1],["找资料刺激自己",2],["换环境试试",3],["和喜欢的人交流后更有感觉",4],["情感连接常直接激发我的创造力",5]]},
{d:6,q:"一个朋友连续几天向你倾诉同一件事，你已经有点累了，你通常会？",o:[["继续全部听完",1],["不好意思停下来",2],["缩短一点时间",3],["说明自己能陪到什么程度",4],["必要时会明确暂停这种倾诉",5]]},
{d:7,q:"有人用很强烈的情绪和语气说服你支持一件事，你通常会？",o:[["容易被气氛带动",1],["先看谁说得更有感染力",2],["暂时不表态",3],["会把情绪和事实分开",4],["会特别检查是否存在操控或误导",5]]},
{d:8,q:"一个以前很重要的目标，现在已经不再让你有动力，你通常会？",o:[["还是坚持原计划",1],["先放着不管",2],["边做边看",3],["重新评估是否继续",4],["确认不适合后会允许自己结束",5]]},
{d:9,q:"前一晚没睡好，第二天安排又很多，你通常会？",o:[["照常全部做",1],["只靠意志撑",2],["减少一点安排",3],["主动降低刺激和强度",4],["会根据身体状态重新安排一天",5]]},

{d:0,q:"你在做一件别人觉得“很成功”的事，但自己越来越觉得没有意义，你通常会？",o:[["既然成功就继续",1],["先看看还能得到什么",2],["一边做一边观察",3],["会认真思考是否还值得",4],["意义长期缺失时会考虑换方向",5]]},
{d:1,q:"压力突然变大、任务同时涌进来时，你通常先做什么？",o:[["随手抓一件做",1],["先做最简单的",2],["边做边排",3],["先列优先级",4],["先看优先级、依赖关系和资源",5]]},
{d:2,q:"你对一个人或一件事有很强的喜欢或排斥，但暂时说不出原因，你通常会？",o:[["不太当回事",1],["先看别人怎么评价",2],["先放一放",3],["会留意这种感觉",4],["会把这种内在反应当成重要线索",5]]},
{d:3,q:"一个曾经让你失望的人重新对你很好，你通常会？",o:[["马上恢复原来的信任",1],["很快就放下警惕",2],["一边接触一边观察",3],["需要一段时间验证",4],["会长期看行为是否稳定再完全放松",5]]},
{d:4,q:"一个项目已经信息足够，但大家一直不愿做决定，你通常会？",o:[["继续等",1],["看谁先表态",2],["再收集一点信息",3],["会推动做出决定",4],["宁可承担结果也倾向尽快定下来",5]]},
{d:5,q:"亲近关系里出现误会后，你通常会怎么修复？",o:[["等时间过去",1],["尽量不再提",2],["恢复日常相处",3],["愿意把误会谈清楚",4],["会主动理解彼此感受并重建连接",5]]},
{d:6,q:"朋友问你一个很私人的问题，但你并不想回答，你通常会？",o:[["还是会回答",1],["用玩笑带过去",2],["只说一点",3],["说明自己不想谈",4],["会很自然地保护自己的隐私边界",5]]},
{d:7,q:"你很不喜欢一个人的做法，但还不了解完整情况，你通常会？",o:[["很快认定对方有问题",1],["先站在自己的感觉上",2],["先不下结论",3],["会区分事实与个人好恶",4],["会主动寻找更多背景和反例",5]]},
{d:8,q:"一个阶段结束后，你通常怎样处理从中得到的经验？",o:[["很少回顾",1],["想到什么算什么",2],["偶尔总结",3],["会整理哪些做法要保留或放弃",4],["会把经验转化成下一阶段的新规则",5]]},
{d:9,q:"天气、饮食或作息发生变化时，你通常多久会感觉到身体差异？",o:[["通常感觉不到",1],["变化很大才会发现",2],["有时会察觉",3],["多数时候会比较快察觉",4],["身体通常很快就会给我反馈",5]]},

{d:0,r:true,q:"如果没人知道、也不会有明显后果，你做决定时还会在意自己认不认同这件事吗？",o:[["基本不会",1],["看有没有实际损失",2],["有时会在意",3],["通常还是会在意",4],["即使没人知道也很难违背自己",5]]},
{d:1,r:true,q:"你学会一个新方法后，发现结果并不理想，你下一步更常怎么做？",o:[["换个方法碰碰运气",1],["照原样再试几次",2],["改一点细节",3],["找出哪里出了问题",4],["会分析原因并更新自己的方法",5]]},
{d:2,r:true,q:"连续忙了很久之后，你突然变得烦躁，你通常会怎么理解？",o:[["觉得只是自己脾气不好",1],["先压住情绪继续",2],["休息一下再说",3],["会看看是不是某种需要没被照顾",4],["会把情绪、疲劳和需要一起辨认",5]]},
{d:3,r:true,q:"周围所有人都说没问题，但你一直觉得哪里不太对，你通常会？",o:[["完全跟着大家判断",1],["先忽略自己的感觉",2],["暂时保留一点疑问",3],["会自己再确认",4],["没确认清楚前很难完全放松",5]]},
{d:4,r:true,q:"别人替你做了一个你本来想自己决定的重要选择，你通常会？",o:[["就照对方安排",1],["虽然不舒服但接受",2],["先看看结果",3],["会要求重新讨论",4],["会明确把决定权拿回来",5]]},
{d:5,r:true,q:"你和一个重要的人很久没好好相处了，你通常会？",o:[["觉得各忙各的也行",1],["等对方主动",2],["有机会再联系",3],["会主动安排相处时间",4],["会主动创造恢复连接的机会",5]]},
{d:6,r:true,q:"大家都赞同一个决定，但你自己其实很不舒服，你通常会？",o:[["跟着大家就好",1],["不太敢提出不同意见",2],["先保留自己的感觉",3],["会说出自己的顾虑",4],["即使是少数也会守住自己的边界",5]]},
{d:7,r:true,q:"一个很权威的人说了一个你不太理解的结论，你通常会？",o:[["权威说的就接受",1],["大体相信",2],["先记着",3],["会想知道依据",4],["会看证据是否真的支持结论",5]]},
{d:8,r:true,q:"你准备清理房间，发现很多东西“也许以后会用”，你通常会？",o:[["基本都留下",1],["只丢很明显没用的",2],["一半留一半清",3],["会按实际需要筛选",4],["不再有用或有意义的会比较果断清掉",5]]},
{d:9,r:true,q:"一天事情很多时，你通常会不会因为身体状态而临时调整计划？",o:[["几乎不会",1],["只有很不舒服才会",2],["偶尔会",3],["经常会参考身体状态",4],["身体信号会明显影响我的安排",5]]}
];
const qs=items.map(x=>x.q);
const dims=["胎光","爽灵","幽精","尸狗","伏矢","雀阴","吞贼","非毒","除秽","臭肺"];
const meaning={胎光:"意义、本源与整体视角",爽灵:"认知、策略与分析",幽精:"情感、欲望与身体体验",尸狗:"警觉、安全与危险侦测",伏矢:"行动、防御与边界",雀阴:"亲密、连接与创造",吞贼:"过滤、保护与内外边界",非毒:"辨别、判断与心理免疫",除秽:"清理、结束与更新",臭肺:"感官、环境与身体直觉"};
const idx=items.map(x=>x.d);
const A={
"Ciakar 天龙族":[28,82,68,92,96,42,78,50,32,34],
"Lyran 天琴族":[82,76,58,48,72,70,42,58,55,50],
"Orion 猎户族":[42,98,30,58,82,28,74,90,44,34],
"Cygnus 天鹅座":[80,50,66,30,20,58,34,50,62,98],
"Arcturian 大角星":[100,60,26,20,18,28,52,88,100,62],
"Pleiadian 昴宿星":[92,48,82,30,22,100,40,56,46,76],
"Zeta / Grey 灰人":[26,99,20,84,32,14,94,78,36,42],
"Sirian 天狼星":[76,72,50,58,46,42,86,74,62,84],
"Aldebaran 毕宿五":[38,74,68,48,98,84,54,42,36,34],
"Andromedan 仙女座":[98,48,52,24,18,44,40,78,94,88],
"Mizarian 开阳":[30,100,28,38,26,24,88,100,46,34],
"Mintakan 参宿三星":[70,32,100,52,18,90,28,34,72,100],
"Cassiopian 仙后座":[52,76,54,86,44,34,70,88,60,60],
"Canes Venatici 猎犬座":[70,62,44,94,88,36,58,72,48,46],
"Pictorian 绘架座":[34,28,100,92,62,58,40,34,38,98],
"Antarian 心宿二":[78,68,48,44,98,46,50,64,94,54],
"Sagittarian 猫科型":[64,50,84,76,98,88,44,42,46,70],
"Anunnaki / Nibiruan":[44,96,78,58,82,66,100,48,44,40],
"Tau Cetian 鲸鱼座τ":[90,82,36,34,30,32,72,100,88,44],
"Capellian 五车二":[32,72,62,78,72,34,99,58,46,42],
"Procyon 南河三":[74,96,30,48,34,30,100,96,58,48],
"Hyades 毕星团":[70,46,78,72,44,94,48,46,56,66]
};
const blurbs={
"Ciakar 天龙族":"核心在生存警觉、边界与强行动。与阿努纳奇相比，它更偏防御与直接控制，而不是资源组织和系统建设。",
"Lyran 天琴族":"核心在开拓、创造、独立与主动行动。与毕宿五相比，它更重价值方向和创造性，而不是强烈支配与魅力驱动。",
"Orion 猎户族":"核心在分析、战略、判断和行动。与灰人相比，它更强调策略与冲突处理；灰人更偏冷静信息处理和过滤。",
"Cygnus 天鹅座":"核心在环境感知、感官敏锐与整体感。与 Mintaka 相比，它更偏观察与感知，情感和亲密驱动相对没那么强。",
"Arcturian 大角星":"核心在整体意识、辨别、清理与整合。与仙女座相比，它更偏净化和秩序；仙女座更偏自由、释放和环境感受。",
"Pleiadian 昴宿星":"核心在亲密、共情、连接和价值感。与 Mintaka 相比，它更偏关系连接；Mintaka 更偏身体感受、情绪流动和感官体验。",
"Zeta / Grey 灰人":"核心在高分析、高过滤、高警觉和低亲密驱动。与猎户相比，它更偏信息处理和边界过滤，而不是战略行动。",
"Sirian 天狼星":"核心在守护、秩序、信息过滤和环境感知，属于较均衡的“守护—知识”型原型。",
"Aldebaran 毕宿五":"核心在行动、魅力、亲密和现实执行。与阿努纳奇相比，它更偏个人力量与直接推动，而不是系统和资源管理。",
"Andromedan 仙女座":"核心在整体视角、自由、清理旧模式和环境感知。与大角星相比，它更强调释放限制与流动性。",
"Mizarian 开阳":"核心在分析、核实、辨别和信息过滤。与南河三相比，它更偏纯粹认知和验证，整体意义感相对较低。",
"Mintakan 参宿三星":"核心在身体感受、情绪流动、亲密与高度感官敏感。与昴宿相比，它更“身体化”和感受驱动。",
"Cassiopian 仙后座":"核心在风险识别、辨别和非常规分析，带有较强的观察与警戒色彩。",
"Canes Venatici 猎犬座":"核心在忠诚、守护、警觉与行动边界。与天龙相比，它更偏保护与原则，而不是控制和占有。",
"Pictorian 绘架座":"核心在本能、身体感受、环境敏锐和生存反应，属于最明显的“身体—本能”型原型之一。",
"Antarian 心宿二":"核心在行动、突破、转化和结束旧模式。与天琴相比，它更偏“破局和重生”，而不是创造和开拓。",
"Sagittarian 猫科型":"核心在行动、尊严、亲密、本能和身体敏捷。与绘架座相比，它更主动、更具领地与行动特征。",
"Anunnaki / Nibiruan":"核心在分析、资源、边界、组织与执行。与天龙相比，它更偏系统建设和管理，而不是纯粹生存防御。",
"Tau Cetian 鲸鱼座τ":"核心在价值、辨别、改革与清理旧模式。与南河三相比，它更偏伦理、透明和更新系统。",
"Capellian 五车二":"核心在过滤、生存适应、警戒和现实防御。与天龙相比，它更偏筛选和适应，攻击性相对较低。",
"Procyon 南河三":"核心在分析、自主、信息过滤和辨别。与开阳相比，它保留更多整体方向感，也更强调抵抗外界操控。",
"Hyades 毕星团":"核心在亲密、归属、情感和群体连接。与昴宿相比，它更重稳定归属与群体关系，而不是理想化共情。"
};
const box=document.getElementById("questions");
const POSKEY=STORAGE+"_pos";
let currentQuestion=0;

const optionOrders=[
  [2,0,4,1,3],
  [1,4,2,0,3],
  [3,1,0,4,2],
  [0,3,1,4,2],
  [4,2,0,3,1]
];

items.forEach((it,i)=>{
  const d=document.createElement("div");
  d.className="q";
  d.dataset.index=i;
  d.hidden=true;
  const shown=optionOrders[i%optionOrders.length].map(k=>it.o[k]);
  d.innerHTML='<div class="qtitle">'+it.q+'</div><div class="answerList">'+shown.map(opt=>'<label class="choice sentenceChoice"><input type="radio" name="q'+i+'" value="'+opt[1]+'"><span>'+opt[0]+'</span></label>').join("")+'</div>';
  box.appendChild(d);
});

const answers=()=>qs.map((_,i)=>{
  const x=document.querySelector('input[name="q'+i+'"]:checked');
  return x?+x.value:null;
});

function currentAnswered(){
  return answers()[currentQuestion]!==null;
}

function progress(){
  const n=answers().filter(v=>v!==null).length;
  progressBar.style.width=(n/qs.length*100)+"%";
  progressText.textContent="已完成 "+n+" / "+qs.length;
}

function save(){
  try{
    localStorage.setItem(STORAGE,JSON.stringify(answers()));
    localStorage.setItem(POSKEY,String(currentQuestion));
  }catch(e){}
}

function load(){
  try{
    const a=JSON.parse(localStorage.getItem(STORAGE)||"null");
    if(Array.isArray(a)){
      a.forEach((v,i)=>{
        if(v){
          const x=document.querySelector('input[name="q'+i+'"][value="'+v+'"]');
          if(x)x.checked=true;
        }
      });
    }
    const saved=Number(localStorage.getItem(POSKEY));
    const firstEmpty=answers().findIndex(v=>v===null);
    if(Number.isInteger(saved)&&saved>=0&&saved<qs.length) currentQuestion=saved;
    if(firstEmpty>=0 && answers()[currentQuestion]!==null) currentQuestion=firstEmpty;
    if(firstEmpty<0) currentQuestion=qs.length-1;
  }catch(e){
    currentQuestion=0;
  }
}

function renderCurrent(){
  document.querySelectorAll("#questions .q").forEach((el,i)=>el.hidden=i!==currentQuestion);
  questionCounter.textContent="第 "+(currentQuestion+1)+" / "+qs.length+" 题";
  prevBtn.disabled=currentQuestion===0;
  nextBtn.hidden=currentQuestion===qs.length-1;
  nextBtn.disabled=!currentAnswered();
  const allDone=answers().every(v=>v!==null);
  submitBtn.hidden=!(currentQuestion===qs.length-1&&allDone);
  error.style.display="none";
  progress();
  save();
}

function goToQuestion(i){
  currentQuestion=Math.max(0,Math.min(qs.length-1,i));
  renderCurrent();
  const stage=document.querySelector(".questionStage");
  if(stage) stage.scrollIntoView({behavior:"smooth",block:"start"});
}

document.addEventListener("change",e=>{
  if(!e.target.matches('input[type="radio"]')) return;
  progress();
  save();
  if(currentQuestion<qs.length-1){
    setTimeout(()=>goToQuestion(currentQuestion+1),160);
  }else{
    renderCurrent();
  }
});

prevBtn.onclick=()=>goToQuestion(currentQuestion-1);
nextBtn.onclick=()=>{
  if(!currentAnswered()){
    error.textContent="请先选择一个答案。";
    error.style.display="block";
    return;
  }
  goToQuestion(currentQuestion+1);
};
function scores(){
  const a=answers();
  if(a.some(v=>v===null)) return null;
  const s=Array(10).fill(0), count=Array(10).fill(0);
  a.forEach((v,i)=>{
    s[idx[i]]+=v;
    count[idx[i]]++;
  });
  return s.map((v,i)=>Math.round((v/count[i]-1)/4*100));
}
function responseConsistency(){
  const a=answers();
  if(a.some(v=>v===null)) return null;
  const diffs=[];
  for(let d=0;d<10;d++){
    const pos=[], rev=[];
    items.forEach((it,i)=>{
      if(it.d!==d) return;
      if(it.r) rev.push(a[i]); else pos.push(a[i]);
    });
    const p=pos.reduce((x,y)=>x+y,0)/pos.length;
    const r=rev.reduce((x,y)=>x+y,0)/rev.length;
    diffs.push(Math.abs(p-r)/4*100);
  }
  return Math.max(0,Math.round(100-diffs.reduce((x,y)=>x+y,0)/diffs.length));
}
function mean(x){return x.reduce((a,b)=>a+b,0)/x.length}
function pearson(a,b){
  const ma=mean(a), mb=mean(b);
  let num=0,da=0,db=0;
  for(let i=0;i<a.length;i++){
    const x=a[i]-ma,y=b[i]-mb;
    num+=x*y; da+=x*x; db+=y*y;
  }
  if(!da||!db) return 0;
  return num/Math.sqrt(da*db);
}
function archetypeSignature(v){
  const pairs=v.map((x,i)=>[i,x]).sort((a,b)=>b[1]-a[1]);
  return {high:pairs.slice(0,3).map(x=>x[0]),low:pairs.slice(-2).map(x=>x[0])};
}
function matchProfile(user,name,profile){
  let sq=0;
  for(let i=0;i<user.length;i++) sq+=(user[i]-profile[i])**2;
  const closeness=Math.max(0,100-Math.sqrt(sq/user.length));
  const corr=pearson(user,profile);
  const shape=Math.max(0,Math.min(100,(corr+1)*50));
  const sig=archetypeSignature(profile);
  const key=[...sig.high,...sig.low];
  const signature=Math.max(0,100-key.reduce((sum,i)=>sum+Math.abs(user[i]-profile[i]),0)/key.length);
  const score=Math.round(closeness*.45+shape*.40+signature*.15);

  const shared=sig.high
    .filter(i=>user[i]>=60)
    .sort((a,b)=>Math.abs(user[a]-profile[a])-Math.abs(user[b]-profile[b]));
  const aligned=(shared.length?shared:sig.high.slice().sort((a,b)=>Math.abs(user[a]-profile[a])-Math.abs(user[b]-profile[b])))
    .slice(0,3).map(i=>dims[i]);

  const gaps=user.map((x,i)=>[i,Math.abs(x-profile[i]),x-profile[i]])
    .sort((a,b)=>b[1]-a[1]).slice(0,2)
    .map(x=>({name:dims[x[0]],gap:Math.round(x[1]),direction:x[2]>0?"高于":"低于"}));

  return [name,score,{closeness:Math.round(closeness),shape:Math.round(shape),signature:Math.round(signature),core:sig.high.map(i=>dims[i]),aligned,gaps}];
}
function matchSeparation(rank){
  const gap12=rank[0][1]-rank[1][1], span=rank[0][1]-rank[Math.min(4,rank.length-1)][1];
  if(gap12>=8&&span>=15) return "区分度较高：第一原型与后续原型拉开了较明显差距。";
  if(gap12>=4||span>=9) return "区分度中等：有一个较明显的主原型，但仍保留混合特征。";
  return "区分度较低：前几个原型非常接近，更适合看成混合型，而不是单一归类。";
}
function radar(s){const c=170,r=120,N=10,p=(i,R)=>{const a=-Math.PI/2+i*2*Math.PI/N;return[c+Math.cos(a)*R,c+Math.sin(a)*R]};let g="";[.25,.5,.75,1].forEach(f=>g+='<polygon class="grid" points="'+Array.from({length:N},(_,i)=>p(i,r*f).join(",")).join(" ")+'"/>');let ax="",lb="";for(let i=0;i<N;i++){const q=p(i,r),t=p(i,r+28);ax+='<line class="axis" x1="'+c+'" y1="'+c+'" x2="'+q[0]+'" y2="'+q[1]+'"/>';lb+='<text x="'+t[0]+'" y="'+t[1]+'" text-anchor="middle" dominant-baseline="middle">'+dims[i]+'</text>'}const pts=s.map((v,i)=>p(i,r*v/100));return '<svg class="radar" width="340" height="340" viewBox="0 0 340 340">'+g+ax+'<polygon class="shape" points="'+pts.map(v=>v.join(",")).join(" ")+'"/>'+pts.map(v=>'<circle class="dot" cx="'+v[0]+'" cy="'+v[1]+'" r="3"/>').join("")+lb+'</svg>'}
let share="";

function band(v){
  if(v>=80)return "非常突出";
  if(v>=65)return "较突出";
  if(v>=45)return "中等";
  if(v>=30)return "偏弱";
  return "较弱";
}
function avg(arr){return Math.round(arr.reduce((a,b)=>a+b,0)/arr.length)}
function byScore(items){return [...items].sort((a,b)=>b[1]-a[1])}
function soulAnalysis(s){
  const souls=[["胎光",s[0]],["爽灵",s[1]],["幽精",s[2]]];
  const sorted=byScore(souls), gap=sorted[0][1]-sorted[2][1];
  const desc={
    胎光:"你更容易从意义、方向、整体感和价值感出发理解自己。",
    爽灵:"你更容易通过分析、计划、知识、策略和结构来处理事情。",
    幽精:"你更重视真实感受、身体经验、欲望、关系与情感流动。"
  };
  let balance=gap<=15
    ?"三魂之间相对均衡，说明你在意义、理性与感受之间切换较自然。"
    :gap<=30
    ?"三魂存在一定主次，但仍有互相补偿的空间。"
    :"三魂差异较明显，强项会很鲜明，同时也更容易出现“知道、想要、实际感受”彼此不同步的情况。";
  return "<h3>三魂结构</h3><p><b>"+sorted[0][0]+"</b> 是目前最突出的三魂特征（"+sorted[0][1]+"%），"+desc[sorted[0][0]]+"</p><p>"+balance+" 当前排序为：<b>"+sorted.map(x=>x[0]+" "+x[1]+"%").join(" → ")+"</b>。</p>";
}
function poAnalysis(s){
  const po=dims.slice(3).map((d,i)=>[d,s[i+3]]);
  const sorted=byScore(po), hi=sorted.slice(0,3), low=sorted[sorted.length-1];
  return "<h3>七魄结构</h3><p>七魄中最突出的三项是 <b>"+hi.map(x=>x[0]+" "+x[1]+"%").join("、")+"</b>。这表示你的本能系统更常通过"+hi.map(x=>meaning[x[0]]).join("、")+"来回应外界。</p><p>相对较弱的是 <b>"+low[0]+" "+low[1]+"%</b>（"+meaning[low[0]]+"）。这里的“较弱”不是缺陷，而是说明它目前不像其他特征那样经常主导你的反应。</p>";
}
function comboAnalysis(s){
  const combos=[];
  if(s[0]>=65&&s[1]>=65) combos.push("胎光＋爽灵较强：你容易把理想、意义感转化成结构、方案和行动逻辑。");
  if(s[0]>=65&&s[2]>=65) combos.push("胎光＋幽精较强：价值感与情感体验连接紧密，通常更看重“内在真实”而不是纯粹效率。");
  if(s[1]>=65&&s[2]>=65) combos.push("爽灵＋幽精较强：你既会分析，也会依据真实感受修正判断，适合把抽象想法落到生活经验。");
  if(s[3]>=65&&s[4]>=65) combos.push("尸狗＋伏矢较强：对风险和边界反应快，保护意识与行动能力会比较明显。");
  if(s[5]>=65&&s[9]>=65) combos.push("雀阴＋臭肺较强：亲密、审美、感官与环境感受容易互相放大，关系体验通常很深。");
  if(s[6]>=65&&s[7]>=65) combos.push("吞贼＋非毒较强：你对信息、关系和环境的筛选意识较强，不容易完全照单全收。");
  if(s[8]>=65) combos.push("除秽较强：当某件事确认失去意义后，你具有重新整理、结束旧阶段并重启的倾向。");
  if(!combos.length) combos.push("目前没有单一组合压倒其他特征，整体更像多种倾向共同参与，而不是由某一种模式长期主导。");
  return "<h3>组合优势</h3><ul>"+combos.slice(0,5).map(x=>"<li>"+x+"</li>").join("")+"</ul>";
}
function tensionAnalysis(s){
  const t=[];
  if(Math.abs(s[0]-s[2])>=30) t.push(s[0]>s[2]?"胎光明显高于幽精：你可能先追求意义与理想，再照顾身体和情感需要；有时会出现“精神上认同，但身体并不愿意”的情况。":"幽精明显高于胎光：真实感受和关系体验可能比宏大意义更能推动你；需要时可反过来问自己长期方向是什么。");
  if(Math.abs(s[1]-s[2])>=30) t.push(s[1]>s[2]?"爽灵明显高于幽精：理性和分析容易压过感受，压力大时可能更倾向于解释情绪，而不是直接体验它。":"幽精明显高于爽灵：感受很强时可能先行动后分析，适合给自己一点结构化整理的空间。");
  if(s[3]>=70&&s[5]>=70) t.push("尸狗与雀阴都高：一方面渴望连接，另一方面又很在意安全，这种“想靠近又想确认安全”的拉扯可能在关系中较明显。");
  if(s[4]>=70&&s[9]>=70) t.push("伏矢与臭肺都高：行动反应快，同时又高度敏感，环境刺激过强时容易从感受到行动之间跳得很快。");
  if(s[6]>=75&&s[5]<=40) t.push("吞贼高而雀阴偏低：保护边界可能比建立亲密更优先，你通常需要更高的信任门槛。");
  if(!t.length) t.push("目前没有特别强的两极拉扯，说明这些特征之间的差距相对可控。");
  return "<h3>可能的内在拉扯</h3><ul>"+t.slice(0,4).map(x=>"<li>"+x+"</li>").join("")+"</ul>";
}
function archetypeAnalysis(rank){
  const a=rank[0],b=rank[1],c=rank[2], ad=a[2],bd=b[2],cd=c[2];
  const gapText=x=>x.gaps.map(g=>g.name+"（你比原型"+g.direction+"约"+g.gap+"分）").join("、");
  return "<h3>星族原型混合解读</h3>"+
    "<p><b>第一原型："+a[0]+"（结构相似度 "+a[1]+"%）</b>。其核心特征是 <b>"+ad.core.join("、")+"</b>；与你最吻合的关键特征是 <b>"+ad.aligned.join("、")+"</b>。"+blurbs[a[0]]+"</p>"+
    "<p>与你第一原型差异最大的地方是 "+gapText(ad)+"。这意味着它不是“完全等同于你”，而只是目前十项特征结构里最接近的一种象征模板。</p>"+
    "<p><b>第二原型："+b[0]+"（"+b[1]+"%）</b>，主要吻合 <b>"+bd.aligned.join("、")+"</b>；<b>第三原型："+c[0]+"（"+c[1]+"%）</b>，主要吻合 <b>"+cd.aligned.join("、")+"</b>。</p>"+
    "<p>"+matchSeparation(rank)+" 因此结果更适合读成 <b>"+a[0]+" × "+b[0]+" × "+c[0]+"</b> 的象征性组合，而不是“属于某一个星族”。</p>"+
    "<p class=\"muted\">这里的百分比是本测试内部的结构相似度：综合绝对分数接近度、十项特征形状，以及该原型关键高低特征计算；不是概率，也不是DNA比例。</p>";
}
function fullArchetypeRanking(rank){
  const rows=rank.map((r,i)=>{
    const tier=i<5?"较显著":i>=rank.length-5?"较弱":"中间";
    return "<div class=\"allArchetypeRow\">"+
      "<div class=\"allArchetypeName\"><span class=\"allRank\">"+(i+1)+"</span><b>"+r[0]+"</b></div>"+
      "<div class=\"allArchetypeMeta\"><span>"+tier+"</span><strong>"+r[1]+"%</strong></div>"+
      "<div class=\"allArchetypeBar\"><i style=\"width:"+r[1]+"%\"></i></div>"+
    "</div>";
  }).join("");
  return "<h3>全部22星族吻合度</h3>"+
    "<p>下面按照本次测试的结构相似度从高到低列出全部22个星族原型。百分比越高，表示你的十项特征分布与该原型模板越接近；它不是概率，也不是DNA比例。</p>"+
    "<div class=\"allArchetypes\">"+rows+"</div>";
}
function weakArchetypeAnalysis(rank){
  const weak=rank.slice(-5).reverse();
  const cards=weak.map(r=>{
    const diff=r[2].gaps.map(g=>g.name+"（你比该原型"+g.direction+"约"+g.gap+"分）").join("、");
    return "<div class=\"weakItem\"><div class=\"weakTop\"><b>"+r[0]+"</b><span>结构相似度 "+r[1]+"%</span></div>"+
      "<p><b>典型特征：</b>"+r[2].core.join("、")+"。</p>"+
      "<p><b>在你身上较不明显的原因：</b>"+diff+"。</p>"+
      "<p class=\"muted\">"+blurbs[r[0]]+"</p></div>";
  }).join("");
  return "<h3>在你身上显现较弱的其他星族原型</h3>"+
    "<p>下面这些原型与你目前的十项特征结构差异相对较大，因此在本次测试里显现得不明显。这里的“较弱”只表示结构相似度较低，并不代表你完全没有这些特征。</p>"+
    "<div class=\"weakList\">"+cards+"</div>";
}
function contrastTopTwo(s,rank){
  const a=rank[0], b=rank[1], pa=A[a[0]], pb=A[b[0]];
  const diffs=pa.map((v,i)=>[i,Math.abs(v-pb[i]),v,pb[i]])
    .sort((x,y)=>y[1]-x[1]).slice(0,3);
  const rows=diffs.map(x=>{
    const i=x[0], da=Math.abs(s[i]-x[2]), db=Math.abs(s[i]-x[3]);
    const lean=da<db?a[0]:db<da?b[0]:"两者之间";
    return "<li><b>"+dims[i]+"</b>：你是 "+s[i]+"%，"+a[0]+" 模板为 "+x[2]+"%，"+b[0]+" 模板为 "+x[3]+"%，这一项更靠近 <b>"+lean+"</b>。</li>";
  }).join("");
  return "<h3>第一名 vs 第二名：为什么会这样？</h3><p>最能区分 <b>"+a[0]+"</b> 和 <b>"+b[0]+"</b> 的三个特征如下：</p><ul>"+rows+"</ul><p>所以第一名并不是由某一个单独分数决定，而是十项特征整体形状加上这些关键差异共同决定。</p>";
}
function suggestions(s){
  const sorted=byScore(s.map((v,i)=>[dims[i],v]));
  const hi=sorted[0][0], low=sorted[sorted.length-1][0], tips=[];
  tips.push("利用 <b>"+hi+"</b> 的优势时，也观察它是否在压力下走向过度，例如从优势变成僵化、控制、回避或过度敏感。");
  tips.push("把 <b>"+low+"</b> 当作补充练习方向，而不是“需要修复的问题”。可以在日常小事中刻意给这一特征一点表达空间。");
  if(s[3]>=70) tips.push("警觉性较高时，先区分“现实中的具体风险”与“身体自动进入警戒”这两种状态。");
  if(s[4]>=70) tips.push("行动/防御很强时，可以在回应冲突前多加入一步：我现在是在保护边界，还是只是在快速反击？");
  if(s[5]>=70) tips.push("关系连接较强时，注意亲密与边界同时存在：能共情不等于必须承担对方的全部情绪。");
  if(s[7]>=70) tips.push("辨别力较强时，也保留修正判断的空间，避免把“快速看出问题”变成过早定论。");
  if(s[8]>=70) tips.push("更新能力强时，在结束旧阶段前确认：这是成熟的放下，还是为了摆脱暂时的不适。");
  return "<h3>自我观察建议</h3><ul>"+tips.slice(0,5).map(x=>"<li>"+x+"</li>").join("")+"</ul>";
}
function overall(s,cons){
  const sorted=byScore(s.map((v,i)=>[dims[i],v])), mean=avg(s), spread=sorted[0][1]-sorted[sorted.length-1][1];
  let shape=spread<=20?"整体比较均衡":spread<=40?"有明显主次":"轮廓非常鲜明";
  const consText=cons>=80?"正反向题整体较一致":cons>=60?"正反向题存在一定情境差异":"正反向题差异较明显，结果更适合当作探索性参考"; return "<h3>总体轮廓</h3><p>你的十项特征平均值约为 <b>"+mean+"%</b>，最高与最低相差 <b>"+spread+"</b> 分，整体属于“<b>"+shape+"</b>”的结构。最突出的三项是 <b>"+sorted.slice(0,3).map(x=>x[0]+" "+x[1]+"%").join("、")+"</b>；相对较弱的两项是 <b>"+sorted.slice(-2).reverse().map(x=>x[0]+" "+x[1]+"%").join("、")+"</b>。</p><p><b>作答一致性参考："+cons+"%</b>： "+consText+"。这只是本测试内部的正反向题一致性检查，不是经过验证的心理测量信度指标。</p>";
}

function render(s){
  const cons=responseConsistency();
  const rank=Object.entries(A).map(([n,v])=>matchProfile(s,n,v)).sort((a,b)=>b[1]-a[1]),
        sorted=s.map((v,i)=>[dims[i],v]).sort((a,b)=>b[1]-a[1]),
        low=[...sorted].sort((a,b)=>a[1]-b[1])[0];
  radarEl.innerHTML=radar(s);
  dimBars.innerHTML='<h3>十项特征得分</h3>'+dims.map((d,i)=>'<div class="dim"><div class="dimhead"><span>'+d+' · '+meaning[d]+'</span><b>'+s[i]+'% · '+band(s[i])+'</b></div><div class="bar"><i style="width:'+s[i]+'%"></i></div></div>').join("");
  ranking.innerHTML=rank.slice(0,5).map((r,i)=>'<div class="rankitem"><div class="ranktop"><span class="rankname">'+(i+1)+'. '+r[0]+'</span><span class="score">'+r[1]+'%</span></div><div class="muted"><b>与你吻合：</b>'+r[2].aligned.join("、")+'<br>'+blurbs[r[0]]+'</div></div>').join("");
  allRanking.innerHTML=rank.map((r,i)=>'<div class="allArchetypeRow"><div class="allArchetypeName"><span class="allRank">'+(i+1)+'</span><b>'+r[0]+'</b></div><div class="allArchetypeMeta"><span>结构相似度</span><strong>'+r[1]+'%</strong></div><div class="allArchetypeBar"><i style="width:'+r[1]+'%"></i></div></div>').join("");
  interpret.innerHTML=
    '<div class="analysisBlock">'+overall(s,cons)+'</div>'+
    '<div class="analysisBlock">'+soulAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+poAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+comboAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+tensionAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+archetypeAnalysis(rank)+'</div>'+
    '<div class="analysisBlock">'+contrastTopTwo(s,rank)+'</div>'+
    '<div class="analysisBlock">'+weakArchetypeAnalysis(rank)+'</div>'+
    '<div class="analysisBlock">'+suggestions(s)+'</div>'+
    '<p class="muted">以上内容是基于本测试内部评分规则生成的象征性人格解读，不是对真实外星DNA、血统、疾病或心理状态的判断。</p>';
  share="我的22星族×三魂七魄象征原型测试\n"+dims.map((d,i)=>d+" "+s[i]+"%").join("｜")+"\nTop 5："+rank.slice(0,5).map((r,i)=>(i+1)+"."+r[0]+" "+r[1]+"%").join("；")+"\n最突出特征："+sorted.slice(0,3).map(x=>x[0]).join("、")+"\n（仅作象征性人格/神话兴趣，不是外星DNA或医学检测）";
  quizCard.hidden=true;result.hidden=false;scrollTo({top:0,behavior:"smooth"});
}
const radarEl=document.getElementById("radar");
const allRanking=document.getElementById("allRanking");
submitBtn.onclick=()=>{
  const s=scores();
  if(!s){
    error.textContent="还有题目没有完成。";
    error.style.display="block";
    return;
  }
  error.style.display="none";
  render(s);
};
function clearAll(){
  document.querySelectorAll('input[type="radio"]').forEach(x=>x.checked=false);
  currentQuestion=0;
  try{
    localStorage.removeItem(STORAGE);
    localStorage.removeItem(POSKEY);
  }catch(e){}
  result.hidden=true;
  quizCard.hidden=false;
  renderCurrent();
}
resetBtn.onclick=clearAll;
restartBtn.onclick=()=>{clearAll();quizCard.scrollIntoView({behavior:"smooth"})};
backBtn.onclick=()=>{result.hidden=true;quizCard.hidden=false;renderCurrent();quizCard.scrollIntoView({behavior:"smooth"})};
copyBtn.onclick=async()=>{
  let ok=false;
  try{await navigator.clipboard.writeText(share);ok=true}catch(e){}
  notice.textContent=ok?"结果已复制。":"浏览器未允许自动复制，请手动复制页面结果。";
  notice.style.display="block";
  setTimeout(()=>notice.style.display="none",2200);
};
load();
renderCurrent();