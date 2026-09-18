"use strict";
const STORAGE="starSoulV4";
const items=[
{d:0,t:"做重要决定时，我会先想：这符合我的价值观吗？"},
{d:1,t:"事情很复杂时，我会先拆开，再一步步处理。"},
{d:2,t:"我通常知道自己现在真正想要什么。"},
{d:3,t:"到陌生地方，我会自然留意周围是否安全。"},
{d:4,t:"别人越过我的界限时，我会明确维护自己。"},
{d:5,t:"深度的情感连接会让我更有活力。"},
{d:6,t:"我不会轻易让别人的要求影响我的核心生活。"},
{d:7,t:"听到一个说法时，我会先看有没有矛盾或夸大。"},
{d:8,t:"一件事明显不再适合我时，我能开始放下。"},
{d:9,t:"光线、声音、气味等变化会明显影响我。"},

{d:0,t:"即使短期吃亏，我也不愿违背自己的核心原则。"},
{d:1,t:"有几个选择时，我会先比较利弊再决定。"},
{d:2,t:"做决定时，我会考虑自己的真实感受。"},
{d:3,t:"熟悉的人或环境稍有变化，我通常会察觉。"},
{d:4,t:"冲突很重要时，我会把自己的立场说清楚。"},
{d:5,t:"我很重视关系中的理解、回应和交流。"},
{d:6,t:"我会慢慢建立信任，不会一下子完全打开自己。"},
{d:7,t:"有可靠的新证据时，我愿意改变原来的看法。"},
{d:8,t:"经历明显变化后，我会调整原来的生活方式。"},
{d:9,t:"我的身体常比理智更早感觉到紧张或放松。"},

{d:0,t:"做选择时，我会考虑它对别人或整体的影响。"},
{d:1,t:"我常从重复发生的事情里找规律。"},
{d:2,t:"长期压抑自己的感受，会明显影响我的状态。"},
{d:3,t:"答应重要事情前，我会先想可能的风险。"},
{d:4,t:"需要保护自己或别人时，我能马上行动。"},
{d:5,t:"亲密感常会激发我的表达欲或创造力。"},
{d:6,t:"面对别人的强烈情绪，我知道哪些不是我的责任。"},
{d:7,t:"重要信息出现时，我会先看来源是否可靠。"},
{d:8,t:"我能承认有些关系或目标已经该结束了。"},
{d:9,t:"睡眠、噪音或人太多，会明显影响我的状态。"},

{d:0,t:"我需要知道自己为什么要做一件事。"},
{d:1,t:"压力大时，列计划会让我更稳定。"},
{d:2,t:"我能明显感觉到自己喜欢什么、排斥什么。"},
{d:3,t:"安全感被破坏后，我通常需要时间恢复。"},
{d:4,t:"该做决定时，我不喜欢一直拖着不行动。"},
{d:5,t:"在互相尊重的前提下，我愿意投入亲密关系。"},
{d:6,t:"觉得被强迫时，我能明确说“不”。"},
{d:7,t:"我能分清“我不喜欢”和“它真的有害”。"},
{d:8,t:"结束一个阶段后，我会总结经验再重新开始。"},
{d:9,t:"我通常能觉察自己身体是紧张还是放松。"},

{d:0,r:true,t:"只要眼前有好处，我通常不太在意长期意义。"},
{d:1,r:true,t:"遇到复杂问题时，我通常凭第一感觉，不太想分析。"},
{d:2,r:true,t:"做决定时，我很少参考自己的情绪和身体感受。"},
{d:3,r:true,t:"在不确定的环境里，我很少注意潜在风险。"},
{d:4,r:true,t:"即使别人明显越界，我也常选择不回应。"},
{d:5,r:true,t:"我通常不太需要很深的亲密关系。"},
{d:6,r:true,t:"别人的情绪和意见很容易带着我走。"},
{d:7,r:true,t:"只要符合我原来的想法，我通常不会再核实。"},
{d:8,r:true,t:"即使一种生活方式明显没用了，我也很难改变。"},
{d:9,r:true,t:"我通常不太能察觉环境或身体的细微变化。"}
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
const box=document.getElementById("questions"), labels=["不像","较不像","一般","较像","很像"];
const POSKEY=STORAGE+"_pos";
let currentQuestion=0;

qs.forEach((q,i)=>{
  const d=document.createElement("div");
  d.className="q";
  d.dataset.index=i;
  d.hidden=true;
  d.innerHTML='<div class="qtitle">'+q+'</div><div class="scale">'+[1,2,3,4,5].map(v=>'<label class="choice"><input type="radio" name="q'+i+'" value="'+v+'"><span>'+labels[v-1]+'</span></label>').join("")+'</div>';
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