"use strict";
const STORAGE="starSoulV3";
const items=[
{d:0,t:"做重要决定时，我会先判断它是否符合自己长期相信的价值与方向。"},
{d:1,t:"面对复杂问题时，我会自然地把它拆成几个部分，再逐步处理。"},
{d:2,t:"我通常能分辨自己此刻真正的情绪、欲望或身体需要。"},
{d:3,t:"进入陌生环境时，我会自然留意周围的人、出口、气氛或潜在风险。"},
{d:4,t:"当别人明显越过我的界限时，我通常会采取行动维护自己。"},
{d:5,t:"深度的情感连接会明显提升我的活力、灵感或投入感。"},
{d:6,t:"我不会轻易让外界的信息、要求或情绪进入自己的核心生活。"},
{d:7,t:"面对一个说法时，我会留意其中是否存在矛盾、夸大或操控。"},
{d:8,t:"当一个阶段已经失去意义时，我通常能够逐步结束并重新整理生活。"},
{d:9,t:"环境中的光线、声音、气味、拥挤程度等变化，会明显影响我的状态。"},

{d:0,t:"即使某个选择短期更有利，只要明显违背我的核心原则，我也会犹豫或放弃。"},
{d:1,t:"遇到多个方案时，我会主动比较证据、后果和可行性，而不是只凭感觉选一个。"},
{d:2,t:"在做决定时，我会认真考虑自己真实的感受，而不只是考虑别人期待什么。"},
{d:3,t:"当一个原本安全的人或环境出现细微变化时，我通常能较早察觉。"},
{d:4,t:"遇到冲突时，如果事情对我很重要，我能够明确表达立场而不是一直退让。"},
{d:5,t:"我很重视关系中的互相理解、回应和情感交流。"},
{d:6,t:"建立信任对我来说通常是一个逐步开放的过程，而不是一下子完全交付。"},
{d:7,t:"我愿意因为新的可靠证据而修正原来的判断，即使这会让我不舒服。"},
{d:8,t:"经历明显变化后，我通常会主动调整习惯、关系或环境，而不是完全照旧。"},
{d:9,t:"有时我的身体会先出现紧绷、放松、兴奋或抗拒，之后理智才明白原因。"},

{d:0,t:"当个人得失与更大的责任或整体影响冲突时，我会认真考虑后者。"},
{d:1,t:"我喜欢从重复出现的事件里寻找规律，并用规律帮助自己预测下一步。"},
{d:2,t:"如果长期压抑自己的感受或需要，我通常会明显感觉到状态变差。"},
{d:3,t:"在答应一件重要事情之前，我会本能地评估它是否可能带来风险或失控。"},
{d:4,t:"当需要保护自己、他人或重要原则时，我能迅速调动行动力。"},
{d:5,t:"美感、亲密感或彼此吸引，常常会激发我的创造欲和表达欲。"},
{d:6,t:"面对别人的强烈情绪或要求时，我能区分哪些需要回应，哪些不必承担。"},
{d:7,t:"在相信重要信息之前，我通常会同时考虑来源、动机和可能后果。"},
{d:8,t:"我能够承认某些关系、目标或身份已经不再适合自己，并允许它们结束。"},
{d:9,t:"睡眠、节奏、噪音、人群密度或空间舒适度，会明显改变我的精神状态。"},

{d:0,t:"即使生活很忙，我仍会需要一种“我为什么做这些事”的意义感。"},
{d:1,t:"在压力下，列计划、整理优先级或建立结构通常能让我恢复稳定。"},
{d:2,t:"我能感觉到自己对人、事、环境的吸引与排斥，而不是总要靠分析才知道。"},
{d:3,t:"一旦安全感被破坏，我通常需要一段时间才能重新完全放松。"},
{d:4,t:"当局面需要快速决断时，我往往比长期观望更容易进入行动状态。"},
{d:5,t:"只要关系是相互尊重的，我愿意投入时间与情感去建立真正的亲密。"},
{d:6,t:"我能够明确说“不”，尤其当某个要求让我觉得被侵入或被强迫时。"},
{d:7,t:"我能区分“我不喜欢”与“它真的有害”这两件不同的事。"},
{d:8,t:"结束旧阶段后，我通常会从中提取经验，并尝试建立新的生活方式。"},
{d:9,t:"我通常能觉察身体是更紧张还是更放松，并把这种信号纳入判断。"},

{d:0,r:true,t:"只要眼前有效果，我通常不太在意这件事是否符合长期意义或价值。"},
{d:1,r:true,t:"遇到复杂问题时，我通常不愿分析细节，更倾向只凭第一反应处理。"},
{d:2,r:true,t:"身体和情绪告诉我什么，对我的决定通常没有太大影响。"},
{d:3,r:true,t:"在不确定的环境中，我很少留意潜在风险或安全变化。"},
{d:4,r:true,t:"即使自己的界限被明显踩到，我通常也不会采取行动去维护。"},
{d:5,r:true,t:"我更习惯长期保持距离，亲密连接通常不会给我太多动力。"},
{d:6,r:true,t:"别人的情绪、意见或要求很容易进入我的生活，即使我并不确定是否合适。"},
{d:7,r:true,t:"只要一个说法符合我原先的想法，我通常不会再进一步核实。"},
{d:8,r:true,t:"即使某种生活模式已经明显无效，我也常常因为习惯而长期维持。"},
{d:9,r:true,t:"我通常很难察觉环境或身体状态的细微变化。"}
];
const qs=items.map(x=>x.t);
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
const box=document.getElementById("questions"), labels=["完全不像","较不像","一半一半","比较像","非常像"];
qs.forEach((q,i)=>{const d=document.createElement("div");d.className="q";d.innerHTML='<div class="qtitle"><b>'+(i+1)+'.</b> '+q+'</div><div class="scale">'+[1,2,3,4,5].map(v=>'<label class="choice"><input type="radio" name="q'+i+'" value="'+v+'"><span>'+v+'<br><small>'+labels[v-1]+'</small></span></label>').join("")+'</div>';box.appendChild(d)});
const answers=()=>qs.map((_,i)=>{const x=document.querySelector('input[name="q'+i+'"]:checked');return x?+x.value:null});
function progress(){const n=answers().filter(v=>v!==null).length;progressBar.style.width=(n/qs.length*100)+"%";progressText.textContent="已完成 "+n+" / "+qs.length}
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(answers()))}catch(e){}}
function load(){try{const a=JSON.parse(localStorage.getItem(STORAGE)||"null");if(Array.isArray(a))a.forEach((v,i)=>{if(v){const x=document.querySelector('input[name="q'+i+'"][value="'+v+'"]');if(x)x.checked=true}})}catch(e){}}
document.addEventListener("change",e=>{if(e.target.matches('input[type="radio"]')){progress();save()}});
function scores(){
  const a=answers();
  if(a.some(v=>v===null)) return null;
  const s=Array(10).fill(0), count=Array(10).fill(0);
  a.forEach((v,i)=>{
    const adjusted=items[i].r ? 6-v : v;
    s[idx[i]]+=adjusted;
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
      if(it.r) rev.push(6-a[i]); else pos.push(a[i]);
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
    '<div class="analysisBlock">'+suggestions(s)+'</div>'+
    '<p class="muted">以上内容是基于本测试内部评分规则生成的象征性人格解读，不是对真实外星DNA、血统、疾病或心理状态的判断。</p>';
  share="我的22星族×三魂七魄象征原型测试\n"+dims.map((d,i)=>d+" "+s[i]+"%").join("｜")+"\nTop 5："+rank.slice(0,5).map((r,i)=>(i+1)+"."+r[0]+" "+r[1]+"%").join("；")+"\n最突出特征："+sorted.slice(0,3).map(x=>x[0]).join("、")+"\n（仅作象征性人格/神话兴趣，不是外星DNA或医学检测）";
  quizCard.hidden=true;result.hidden=false;scrollTo({top:0,behavior:"smooth"});
}
const radarEl=document.getElementById("radar");
submitBtn.onclick=()=>{const s=scores();if(!s){error.style.display="block";error.scrollIntoView({behavior:"smooth",block:"center"});return}error.style.display="none";render(s)};
function clearAll(){document.querySelectorAll('input[type="radio"]').forEach(x=>x.checked=false);try{localStorage.removeItem(STORAGE)}catch(e){}progress();error.style.display="none";result.hidden=true;quizCard.hidden=false}
resetBtn.onclick=clearAll;restartBtn.onclick=()=>{clearAll();quizCard.scrollIntoView({behavior:"smooth"})};backBtn.onclick=()=>{result.hidden=true;quizCard.hidden=false;quizCard.scrollIntoView({behavior:"smooth"})};
demoBtn.onclick=()=>{const d=[4,5,3,4,2,5,3,4,4,5];for(let i=0;i<qs.length;i++){const x=document.querySelector('input[name="q'+i+'"][value="'+d[i%10]+'"]');if(x)x.checked=true}progress();save()};
copyBtn.onclick=async()=>{let ok=false;try{await navigator.clipboard.writeText(share);ok=true}catch(e){}notice.textContent=ok?"结果已复制。":"浏览器未允许自动复制，请手动复制页面结果。";notice.style.display="block";setTimeout(()=>notice.style.display="none",2200)};
load();progress();