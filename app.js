"use strict";
const STORAGE="starSoulV2";
const qs=[
"我经常思考“我为什么来到这里”以及人生真正的意义。","遇到复杂问题，我本能地想分析结构、规律和解决方案。","我的感情、欲望和身体感受对我的决定影响很大。","进入陌生环境时，我会很快注意到潜在危险或不安全因素。","当自己的边界被侵犯时，我会产生很强的反击欲望。","我很重视亲密、吸引力、爱情以及人与人之间深层的连接。","我对“什么属于我、什么不应该进入我的生活”有很强的界线意识。","我常能迅速感觉出某个人、某种信息或某个环境哪里不对。","我的人生经常经历“结束旧阶段—彻底改变—重新开始”的循环。","我对声音、气氛、空间、天气或周围人的状态非常敏感。","相比个人得失，我有时更关心一个事件背后的整体意义。","我喜欢系统、知识、科技、战略、分类或寻找隐藏规律。","我很依赖直觉、感受和内在冲动来理解自己真正想要什么。","即使别人没察觉到问题，我也很容易提前进入警戒状态。","面临冲突时，我通常更倾向于行动，而不是长期退让。","美感、爱情、亲密关系或创造生命/作品会给我很强的满足感。","我不容易让别人进入自己的核心世界，需要较长时间建立信任。","我非常看重真假、善恶、健康与有害之间的辨别。","对已经失去意义的人、关系或生活模式，我最终会选择清理掉。","我有时不需要明确理由，就能通过身体感觉判断环境是否适合自己。","我偶尔会有一种“自己属于更大整体”的感觉。","在压力下，我往往会变得更加理性、计划化和策略化。","我需要真实体验生活，而不仅仅是理解人生理论。","安全感一旦被破坏，我会很难完全放松。","我拥有明显的竞争心、保护欲或捍卫立场的力量。","我很容易通过关系、情感和亲密体验获得创造灵感。","对操控、侵入、强迫或别人替我决定，我尤其敏感。","我宁愿面对不舒服的真相，也不太愿意相信漂亮但虚假的解释。","我具有较强的“断舍离”倾向，某个阶段结束后可以完全成为另一个自己。","我的身体似乎经常比理智更早知道喜欢/不喜欢、安全/危险。"];
const dims=["胎光","爽灵","幽精","尸狗","伏矢","雀阴","吞贼","非毒","除秽","臭肺"];
const meaning={胎光:"意义、本源与整体视角",爽灵:"认知、策略与分析",幽精:"情感、欲望与身体体验",尸狗:"警觉、安全与危险侦测",伏矢:"行动、防御与边界",雀阴:"亲密、连接与创造",吞贼:"过滤、保护与内外边界",非毒:"辨别、判断与心理免疫",除秽:"清理、结束与更新",臭肺:"感官、环境与身体直觉"};
const idx=[0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
const A={
"Ciakar 天龙族":[35,78,72,86,95,52,70,55,45,40],"Lyran 天琴族":[80,78,62,55,72,76,48,55,50,58],"Orion 猎户族":[45,95,42,60,78,35,70,82,50,42],"Cygnus 天鹅座":[78,52,82,52,36,74,42,48,55,92],"Arcturian 大角星":[98,62,38,35,30,38,56,88,90,62],"Pleiadian 昴宿星":[90,50,88,42,30,94,45,58,55,84],"Zeta / Grey 灰人":[36,98,28,78,38,20,90,75,42,48],"Sirian 天狼星":[78,76,55,64,50,48,82,70,58,80],"Aldebaran 毕宿五":[48,82,78,55,88,82,65,52,48,45],"Andromedan 仙女座":[96,56,60,35,28,50,45,72,90,82],"Mizarian 开阳":[42,92,40,50,38,35,88,92,55,46],"Mintakan 参宿三星":[86,44,92,52,28,84,40,48,62,94],"Cassiopian 仙后座":[55,80,62,82,50,42,68,86,58,64],"Canes Venatici 猎犬座":[75,70,48,88,82,42,62,70,55,55],"Pictorian 绘架座":[48,42,98,84,66,72,52,46,48,90],"Antarian 心宿二":[82,74,55,52,92,55,52,68,88,58],"Sagittarian 猫科型":[72,55,88,82,92,78,52,48,50,76],"Anunnaki / Nibiruan":[50,90,84,62,86,78,88,58,55,52],"Tau Cetian 鲸鱼座τ":[86,84,48,45,42,40,72,94,86,58],"Capellian 五车二":[42,82,76,80,84,48,90,60,52,50],"Procyon 南河三":[84,88,48,50,46,42,94,96,70,58],"Hyades 毕星团":[76,55,82,78,52,88,55,52,60,70]};
const blurbs={
"Ciakar 天龙族":"战略、生存、边界与行动力强；阴影面是过度警戒、控制与支配。","Lyran 天琴族":"开拓、创造、独立与领导；阴影面是好胜与过度个人主义。","Orion 猎户族":"分析、组织、系统与战略；阴影面是二元化、控制与过度理性。","Cygnus 天鹅座":"感知、艺术、声音与环境共振；阴影面是感官过载与情绪漂浮。","Arcturian 大角星":"整体意识、辨别、净化与整合；阴影面是过度精神化、脱离现实。","Pleiadian 昴宿星":"共情、连接、美感与关系；阴影面是讨好、理想化和边界模糊。","Zeta / Grey 灰人":"信息处理、观察、系统化；阴影面是情感疏离与机械化。","Sirian 天狼星":"守护、知识、秩序和自然智慧；阴影面是使命执着与教条。","Aldebaran 毕宿五":"魅力、执行、领导与创造；阴影面是权力欲与冲动。","Andromedan 仙女座":"自由、超越、和平与更新；阴影面是难落地、逃避限制。","Mizarian 开阳":"研究、精确、分类与辨别；阴影面是挑剔、怀疑与僵化。","Mintakan 参宿三星":"情感深度、流动、本源感与环境敏感；阴影面是怀旧和逃避现实。","Cassiopian 仙后座":"非常规思维、适应和独立观察；阴影面是戒备、疏离和不信任。","Canes Venatici 猎犬座":"忠诚、保护、原则和勇气；阴影面是敌我划分与过度警戒。","Pictorian 绘架座":"身体意识、本能和自然生命力；阴影面是冲动与社会化困难。","Antarian 心宿二":"突破、勇气、转化和重生；阴影面是极端、急躁与冲突依赖。","Sagittarian 猫科型":"尊严、敏捷、身体直觉和保护；阴影面是骄傲、领地性与竞争。","Anunnaki / Nibiruan":"工程、组织、资源与建造；阴影面是等级、占有和控制。","Tau Cetian 鲸鱼座τ":"公正、透明、辨别与精神自主；阴影面是道德洁癖和审判。","Capellian 五车二":"务实、生存、策略和适应；阴影面是冷漠、机会主义与防御。","Procyon 南河三":"学习、自主、辨别与抵抗操控；阴影面是怀疑一切、排斥外界。","Hyades 毕星团":"归属、传承、关系和迁徙适应；阴影面是群体依附与害怕失去归属。"};
const box=document.getElementById("questions"), labels=["完全不像","较不像","一半一半","比较像","非常像"];
qs.forEach((q,i)=>{const d=document.createElement("div");d.className="q";d.innerHTML='<div class="qtitle"><b>'+(i+1)+'.</b> '+q+'</div><div class="scale">'+[1,2,3,4,5].map(v=>'<label class="choice"><input type="radio" name="q'+i+'" value="'+v+'"><span>'+v+'<br><small>'+labels[v-1]+'</small></span></label>').join("")+'</div>';box.appendChild(d)});
const answers=()=>qs.map((_,i)=>{const x=document.querySelector('input[name="q'+i+'"]:checked');return x?+x.value:null});
function progress(){const n=answers().filter(v=>v!==null).length;progressBar.style.width=(n/30*100)+"%";progressText.textContent="已完成 "+n+" / 30"}
function save(){try{localStorage.setItem(STORAGE,JSON.stringify(answers()))}catch(e){}}
function load(){try{const a=JSON.parse(localStorage.getItem(STORAGE)||"null");if(Array.isArray(a))a.forEach((v,i)=>{if(v){const x=document.querySelector('input[name="q'+i+'"][value="'+v+'"]');if(x)x.checked=true}})}catch(e){}}
document.addEventListener("change",e=>{if(e.target.matches('input[type="radio"]')){progress();save()}});
function scores(){const a=answers();if(a.some(v=>v===null))return null;const s=Array(10).fill(0),c=Array(10).fill(0);a.forEach((v,i)=>{s[idx[i]]+=v;c[idx[i]]++});return s.map((v,i)=>Math.round((v/c[i]-1)/4*100))}
function sim(a,b){let d=0,x=0,y=0;for(let i=0;i<a.length;i++){d+=a[i]*b[i];x+=a[i]*a[i];y+=b[i]*b[i]}return Math.round(d/(Math.sqrt(x)*Math.sqrt(y))*100)}
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
  const a=rank[0],b=rank[1],c=rank[2];
  return "<h3>星族原型混合解读</h3><p><b>第一原型："+a[0]+"（"+a[1]+"%）</b>。"+blurbs[a[0]]+"</p><p><b>第二原型："+b[0]+"（"+b[1]+"%）</b>。它更像是你的辅助模式：当第一原型不足以应对环境时，这一套特征可能更容易被调用。"+blurbs[b[0]]+"</p><p><b>第三原型："+c[0]+"（"+c[1]+"%）</b>。它可以理解为较次级但仍明显的色彩。"+blurbs[c[0]]+"</p><p>因此结果不建议理解成“你属于某一个星族”，而更适合看成 <b>"+a[0]+" × "+b[0]+" × "+c[0]+"</b> 的象征性组合。</p>";
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
function overall(s){
  const sorted=byScore(s.map((v,i)=>[dims[i],v])), mean=avg(s), spread=sorted[0][1]-sorted[sorted.length-1][1];
  let shape=spread<=20?"整体比较均衡":spread<=40?"有明显主次":"轮廓非常鲜明";
  return "<h3>总体轮廓</h3><p>你的十项特征平均值约为 <b>"+mean+"%</b>，最高与最低相差 <b>"+spread+"</b> 分，整体属于“<b>"+shape+"</b>”的结构。最突出的三项是 <b>"+sorted.slice(0,3).map(x=>x[0]+" "+x[1]+"%").join("、")+"</b>；相对较弱的两项是 <b>"+sorted.slice(-2).reverse().map(x=>x[0]+" "+x[1]+"%").join("、")+"</b>。</p>";
}

function render(s){
  const rank=Object.entries(A).map(([n,v])=>[n,sim(s,v)]).sort((a,b)=>b[1]-a[1]),
        sorted=s.map((v,i)=>[dims[i],v]).sort((a,b)=>b[1]-a[1]),
        low=[...sorted].sort((a,b)=>a[1]-b[1])[0];
  radarEl.innerHTML=radar(s);
  dimBars.innerHTML='<h3>十项特征得分</h3>'+dims.map((d,i)=>'<div class="dim"><div class="dimhead"><span>'+d+' · '+meaning[d]+'</span><b>'+s[i]+'% · '+band(s[i])+'</b></div><div class="bar"><i style="width:'+s[i]+'%"></i></div></div>').join("");
  ranking.innerHTML=rank.slice(0,5).map((r,i)=>'<div class="rankitem"><div class="ranktop"><span class="rankname">'+(i+1)+'. '+r[0]+'</span><span class="score">'+r[1]+'%</span></div><div class="muted">'+blurbs[r[0]]+'</div></div>').join("");
  kpis.innerHTML='<div class="kpi"><span>最突出特征</span><b>'+sorted[0][0]+'</b><span>'+sorted[0][1]+'% · '+band(sorted[0][1])+'</span></div><div class="kpi"><span>首要原型</span><b>'+rank[0][0]+'</b><span>匹配 '+rank[0][1]+'%</span></div><div class="kpi"><span>相对较弱特征</span><b>'+low[0]+'</b><span>'+low[1]+'% · '+band(low[1])+'</span></div>';
  interpret.innerHTML=
    '<div class="analysisBlock">'+overall(s)+'</div>'+
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
demoBtn.onclick=()=>{const d=[4,5,3,4,2,5,3,4,4,5];for(let i=0;i<30;i++){const x=document.querySelector('input[name="q'+i+'"][value="'+d[i%10]+'"]');if(x)x.checked=true}progress();save()};
copyBtn.onclick=async()=>{let ok=false;try{await navigator.clipboard.writeText(share);ok=true}catch(e){}notice.textContent=ok?"结果已复制。":"浏览器未允许自动复制，请手动复制页面结果。";notice.style.display="block";setTimeout(()=>notice.style.display="none",2200)};
load();progress();