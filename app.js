"use strict";
const STORAGE="starSoulV5";
const items=[
{d:0,q:"一个机会待遇很好，但和你的价值观有点冲突，你通常会？",o:[["先接下来再说",1],["问问别人怎么看",2],["待遇和原则一起权衡",3],["先看是否符合长期方向",4],["明显违背原则就放弃",5]]},
{d:1,q:"事情很复杂时，你通常先怎么开始？",o:[["凭感觉先开工",1],["先做最急的一件",2],["边做边整理",3],["列出关键步骤",4],["先拆结构再排优先级",5]]},
{d:2,q:"终于有一晚完全属于自己，你通常会？",o:[["继续把该做的事做完",1],["看别人怎么安排",2],["随便选个活动",3],["先感受自己想休息还是出门",4],["先照顾最明显的情绪或身体需要",5]]},
{d:3,q:"第一次去一个陌生地方，你通常先注意什么？",o:[["直接进去",1],["跟着别人走",2],["先看大概环境",3],["会留意出口和人群",4],["先确认安全感再放松",5]]},
{d:4,q:"别人明显越过你的界限时，你通常会？",o:[["算了，不说",1],["先忍一下",2],["看事情大小",3],["会提醒对方",4],["会明确制止或设界限",5]]},
{d:5,q:"遇到一个很聊得来的人，你通常会？",o:[["保持礼貌就好",1],["慢慢观察",2],["看相处是否自然",3],["愿意主动分享一点",4],["很愿意建立深度交流",5]]},
{d:6,q:"朋友临时请你帮忙，但你自己也很忙，你通常会？",o:[["马上答应",1],["先答应一部分",2],["看自己有没有余力",3],["先确认边界再决定",4],["超出承受范围会直接拒绝",5]]},
{d:7,q:"看到一条很吸引人的热门消息，你通常会？",o:[["觉得顺眼就信",1],["先看评论区",2],["先保留意见",3],["查一下来源",4],["对比多个可靠来源再判断",5]]},
{d:8,q:"一个习惯已经明显不适合你了，你通常会？",o:[["继续维持",1],["拖到不得不改",2],["先小改一点",3],["会逐步停掉",4],["确认没用后会主动结束",5]]},
{d:9,q:"咖啡店很吵，你还要专心做事，你通常会？",o:[["几乎不受影响",1],["有点影响",2],["看当天状态",3],["明显影响专注",4],["很快想换环境",5]]},

{d:0,q:"团队想走一个更快、但你觉得不太合原则的捷径，你会？",o:[["结果最重要，先做",1],["先跟多数人",2],["看影响大小",3],["提出自己的顾虑",4],["碰到底线就不做",5]]},
{d:1,q:"两个方案都能做，你更常怎么选？",o:[["随便选一个",1],["选最熟悉的",2],["先看直觉",3],["比几项关键条件",4],["系统比较成本、风险和收益",5]]},
{d:2,q:"别人问“你到底想要什么？”时，你通常？",o:[["常常说都可以",1],["先看别人想法",2],["要想一会儿",3],["大多能说出偏好",4],["通常很清楚自己的需要",5]]},
{d:3,q:"一个熟悉的人说话语气突然变了，你通常？",o:[["一般注意不到",1],["后来才发现",2],["会觉得有点不一样",3],["很快察觉",4],["会立刻进入观察状态",5]]},
{d:4,q:"遇到重要分歧时，你通常会？",o:[["尽量避免冲突",1],["先顺着对方",2],["看事情重要程度",3],["会表达不同意见",4],["重要时会坚持到底",5]]},
{d:5,q:"关系里对方情绪低落时，你更常怎么做？",o:[["不知道说什么",1],["先给对方空间",2],["先听一听",3],["主动问对方需要什么",4],["会投入时间陪伴和理解",5]]},
{d:6,q:"刚认识一个很投缘的人，你通常多久会真正信任？",o:[["很快什么都说",1],["容易跟着感觉走",2],["先分享一部分",3],["逐步建立信任",4],["会长期观察一致性再深入",5]]},
{d:7,q:"出现了和你原来观点相反的新证据，你通常会？",o:[["先忽略它",1],["先找支持自己的说法",2],["暂时保留",3],["重新比较证据",4],["必要时会彻底改观点",5]]},
{d:8,q:"一段关系或工作刚结束，你通常会？",o:[["尽量维持原样",1],["先拖着不处理",2],["慢慢调整",3],["会整理旧习惯",4],["会主动重建新的生活节奏",5]]},
{d:9,q:"开会前身体已经有点紧绷，你通常会？",o:[["不太注意",1],["只觉得有点累",2],["知道状态不太对",3],["会留意紧张来自哪里",4],["会把身体反应当成重要信号",5]]},

{d:0,q:"一个选择对你有利，但可能给别人带来麻烦，你通常会？",o:[["先看自己方便",1],["先解决眼前问题",2],["双方都考虑",3],["会想长期影响",4],["会把整体后果放在重要位置",5]]},
{d:1,q:"同一个问题反复出现时，你通常会？",o:[["每次当新问题处理",1],["凭经验应付",2],["会注意重复点",3],["会找规律",4],["会总结成一套方法",5]]},
{d:2,q:"你明显心情不好，但事情很多，你通常会？",o:[["继续顶着做",1],["用事情转移注意",2],["先放一放",3],["看看自己在难受什么",4],["主动处理情绪或身体需要",5]]},
{d:3,q:"答应一件重要事情前，你通常会？",o:[["先答应再说",1],["看别人都答不答应",2],["大概想一下",3],["会先看风险",4],["会先想最坏情况和退路",5]]},
{d:4,q:"看到身边的人需要保护时，你通常会？",o:[["尽量别卷入",1],["先观察",2],["先找别人帮忙",3],["会介入处理",4],["会马上采取保护行动",5]]},
{d:5,q:"创作或表达卡住时，什么最容易让你重新有感觉？",o:[["继续硬做",1],["先休息",2],["换个环境",3],["找人聊聊",4],["和重要的人连接后常更有灵感",5]]},
{d:6,q:"别人把很强烈的情绪倒给你时，你通常会？",o:[["全部接住",1],["不好意思拒绝",2],["先听一会儿",3],["区分能帮和不能帮的",4],["必要时会明确停止情绪倾倒",5]]},
{d:7,q:"看到一条重要新闻时，你通常会？",o:[["看标题就够",1],["看一个熟悉来源",2],["多看几条",3],["会查原始出处",4],["会核对来源、时间和上下文",5]]},
{d:8,q:"一个以前很重要的目标，现在已经没感觉了，你通常会？",o:[["还是坚持到底",1],["先放着",2],["边走边看",3],["会重新评估",4],["确认不合适就会结束",5]]},
{d:9,q:"前一晚睡得很差，第二天你通常会？",o:[["照常不管",1],["只是稍微慢一点",2],["调整一点安排",3],["会明显减少刺激",4],["会主动保护节奏和环境",5]]},

{d:0,q:"有件事很无聊，但必须完成，你通常靠什么撑下去？",o:[["做完就行",1],["看有没有奖励",2],["先完成责任",3],["会找它和长期目标的关系",4],["有意义感时才最容易投入",5]]},
{d:1,q:"压力一下子变大时，你通常先做什么？",o:[["随手处理",1],["先做最简单的",2],["边做边排",3],["先列清单",4],["按优先级和依赖关系排序",5]]},
{d:2,q:"和朋友选餐厅时，你通常是？",o:[["别人定就好",1],["哪里都行",2],["有几个都可以",3],["通常有明确偏好",4],["很快知道自己真正想吃什么",5]]},
{d:3,q:"一个你信任的人让你失望后，你通常多久能重新放松？",o:[["很快就算了",1],["过一会就忘",2],["会稍微谨慎",3],["需要一段时间观察",4],["很久后才会完全放松",5]]},
{d:4,q:"信息已经够了，但决定一直没做，你通常会？",o:[["能拖就拖",1],["等别人决定",2],["再看看",3],["信息够了就定",4],["宁可承担结果也会尽快决定",5]]},
{d:5,q:"一段关系越来越亲近时，你通常会？",o:[["会保持距离",1],["有点不习惯",2],["顺其自然",3],["愿意逐渐投入",4],["会主动经营深层连接",5]]},
{d:6,q:"别人强烈要求你做一件你不想做的事，你通常会？",o:[["多数时候会答应",1],["先答应再后悔",2],["会犹豫",3],["会说需要考虑",4],["不合适会直接说不",5]]},
{d:7,q:"你很不喜欢一个人的做法时，你通常会？",o:[["直接觉得对方有问题",1],["容易先下判断",2],["先停一下",3],["会分开看感受和事实",4],["会主动寻找反例和证据",5]]},
{d:8,q:"一个阶段结束后，你通常怎么处理过去的经验？",o:[["继续照旧",1],["尽量不回想",2],["偶尔总结",3],["会整理经验",4],["会明确调整下一阶段做法",5]]},
{d:9,q:"平时你对身体状态的觉察更接近哪一种？",o:[["很少注意身体",1],["只有不舒服才注意",2],["偶尔会觉察",3],["经常知道哪里紧绷或疲惫",4],["身体状态常会影响我的安排",5]]},

{d:0,r:true,q:"一个机会能立刻赚到钱，但和你的长期方向不太一致，你通常会？",o:[["先赚到再说",1],["问问别人意见",2],["两边一起权衡",3],["偏得太远就放弃",4],["先看长期方向再决定",5]]},
{d:1,r:true,q:"时间很赶、问题又复杂，你最容易先做什么？",o:[["直接凭感觉做",1],["先找现成答案",2],["边做边理",3],["先抓关键变量",4],["快速拆结构再行动",5]]},
{d:2,r:true,q:"你明明很累，但还有很多事没做，你通常会？",o:[["继续顶着直到做完",1],["先看别人需不需要我",2],["做一点再说",3],["会调整任务量",4],["先处理最明显的身体需要",5]]},
{d:3,r:true,q:"朋友说“应该没事”，但环境让你有点不确定，你通常会？",o:[["完全按朋友判断",1],["先不想太多",2],["边走边看",3],["会自己再确认一下",4],["先确认安全再继续",5]]},
{d:4,r:true,q:"别人明显越过你的界限，但场面有点尴尬，你通常会？",o:[["装作没事",1],["先忍着",2],["看情况再说",3],["会提醒对方",4],["会当场明确边界",5]]},
{d:5,r:true,q:"关系越来越亲近时，你更常见的反应是？",o:[["主动拉开距离",1],["有点不自在",2],["顺其自然",3],["逐渐更愿意分享",4],["会主动加深连接",5]]},
{d:6,r:true,q:"一个人情绪很强烈地要求你陪他，但你其实很累，你会？",o:[["还是全程陪着",1],["不好意思拒绝",2],["先陪一会儿",3],["说明自己能做到的范围",4],["必要时会明确拒绝",5]]},
{d:7,r:true,q:"一条消息正好符合你原来的看法，你通常会？",o:[["直接转发",1],["看标题就信",2],["先放着",3],["查一下来源",4],["会特别检查有没有确认偏误",5]]},
{d:8,r:true,q:"一个习惯已经明显没用了，但你很熟悉它，你通常会？",o:[["继续维持",1],["拖很久",2],["偶尔改一点",3],["会逐步替换",4],["确认无效后会主动停掉",5]]},
{d:9,r:true,q:"一天很忙，身体已经有点不舒服，你通常会？",o:[["忽略继续",1],["等更严重再处理",2],["有空再说",3],["会调整节奏",4],["会尽快根据身体信号做调整",5]]}
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
  ranking.innerHTML=rank.slice(0,5).map((r,i)=>'<div class="rankitem"><div class="ranktop"><span class="rankname">'+(i+1)+'. '+r[0]+'</span><span class="score">'+r[1]+'%</span></div><div class="muted"><b>核心：</b>'+r[2].core.join("、")+'<br><b>与你吻合：</b>'+r[2].aligned.join("、")+'<br>'+blurbs[r[0]]+'</div></div>').join("");
  kpis.innerHTML='<div class="kpi"><span>最突出特征</span><b>'+sorted[0][0]+'</b><span>'+sorted[0][1]+'% · '+band(sorted[0][1])+'</span></div><div class="kpi"><span>首要原型</span><b>'+rank[0][0]+'</b><span>结构相似度 '+rank[0][1]+'%</span></div><div class="kpi"><span>相对较弱特征</span><b>'+low[0]+'</b><span>'+low[1]+'% · '+band(low[1])+'</span></div>';
  interpret.innerHTML=
    '<div class="analysisBlock">'+overall(s,cons)+'</div>'+
    '<div class="analysisBlock">'+soulAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+poAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+comboAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+tensionAnalysis(s)+'</div>'+
    '<div class="analysisBlock">'+archetypeAnalysis(rank)+'</div>'+
    '<div class="analysisBlock">'+contrastTopTwo(s,rank)+'</div>'+
    '<div class="analysisBlock">'+suggestions(s)+'</div>'+
    '<p class="muted">以上内容是基于本测试内部评分规则生成的象征性人格解读，不是对真实外星DNA、血统、疾病或心理状态的判断。</p>';
  share="我的22星族×三魂七魄象征原型测试\n"+dims.map((d,i)=>d+" "+s[i]+"%").join("｜")+"\nTop 5："+rank.slice(0,5).map((r,i)=>(i+1)+"."+r[0]+" "+r[1]+"%").join("；")+"\n最突出特征："+sorted.slice(0,3).map(x=>x[0]).join("、")+"\n（仅作象征性人格/神话兴趣，不是外星DNA或医学检测）";
  quizCard.hidden=true;result.hidden=false;scrollTo({top:0,behavior:"smooth"});
}
const radarEl=document.getElementById("radar");
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