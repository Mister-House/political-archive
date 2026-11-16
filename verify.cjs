const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const elements=new Map();const element=()=>({value:'',innerHTML:'',textContent:'',style:{},dataset:{},classList:{add(){},remove(){},toggle(){}},before(){},click(){},focus(){},addEventListener(){},setAttribute(){},removeAttribute(){},querySelector(){return element()},querySelectorAll(){return []},showModal(){this.open=true},close(){this.open=false}});
const get=s=>{if(!elements.has(s))elements.set(s,element());return elements.get(s)};
get('#ownership').value='all';get('#sort').value='number';let saved=null;const timers=new Map();let timerId=0;const runTimer=id=>{const fn=timers.get(id);timers.delete(id);if(fn)fn();};
const context={document:{createElement:element,querySelector:get,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:()=>saved,setItem:(k,v)=>saved=v},crypto:require('node:crypto').webcrypto,history:{replaceState(){}},window:{scrollTo(){},addEventListener(){},matchMedia(){return {matches:false}}},location:{hash:''},setTimeout(fn){const id=++timerId;timers.set(id,fn);return id},clearTimeout(id){timers.delete(id)},runTimer,console};vm.createContext(context);
vm.runInContext(['questions.js','data.js','extra-cards.js','rarity.js','themes.js','portraits.js','app.js','collection-transfer.js','quiz.js','reveals.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n'),context);
if(get('#points-balance').textContent!=='100'||!get('#featured').innerHTML.includes('Karl Marx')||typeof get('#reveal-all').onclick!=='function')throw Error('Page initialization or event bindings failed');
vm.runInContext(`
if(QUESTIONS.length!==60||QUESTIONS.some(q=>/Geography|Science|Nature|Space|Mathematics/.test(q.category)))throw Error('Off-topic quiz bank');
if(validateQuiz({ids:['q-1','q-2','q-3','q-4','q-5'],answers:[],token:'legacy',review:false,awarded:false}))throw Error('Old quiz was not replaced');
if(CARDS.length!==400)throw Error('Unexpected catalog size');
if(new Set(CARDS.map(c=>c.id)).size!==400)throw Error('Duplicate IDs');
if(rarities.length!==6||RARITY_WEIGHTS.reduce((a,b)=>a+b,0)!==1)throw Error('Rarity tiers or odds');
for(const r of rarities)if(!CARDS.some(c=>c.rarity===r))throw Error('Unused rarity '+r);
if(CARDS.find(c=>c.name==='Pol Pot').rarity==='Archive Foil')throw Error('Controversy is not foil criterion');
if(packs.length!==8)throw Error('Missing themed packs');
for(const c of CARDS)if(!packs.some(p=>poolFor(p).includes(c)))throw Error('Unobtainable card '+c.name);
if(packs.some(p=>p.id==='world'))throw Error('World archive still available');
if(poolFor(packs.find(p=>p.id==='soviet')).length<35)throw Error('Soviet pool not expanded');
if(state.points!==100||!state.welcomeBonusClaimed||readState().points!==100)throw Error('Welcome bonus');
// The stored bonus flag must survive a new page load.
state=readState();if(state.points!==100||!state.welcomeBonusClaimed)throw Error('Bonus repeated or missing');state.points=0;persist();
function finishAllReveals(){draws.forEach((_,i)=>reveal(i));let guard=0;while(activeFoil&&guard++<10){if(!activeFoil.complete)for(let j=0;j<3;j++){chargeFoil();runTimer(activeFoil.timer);}finishFoilStage();}if(guard>=10)throw Error('Foil queue stalled');}
const beforeBlocked=JSON.stringify(state);if(openPack('ideas')!==false||JSON.stringify(state)!==beforeBlocked)throw Error('Unfunded pack changed state');
function completeTest(correctCount){startQuiz();for(let i=0;i<QUIZ_LENGTH;i++){const question=QUESTIONS.find(q=>q.id===state.quiz.ids[i]);const answer=i<correctCount?question.answer:question.options.find(a=>a!==question.answer);if(!answerQuiz(answer))throw Error('Quiz answer rejected');if(answerQuiz(answer))throw Error('Answer paid twice');advanceQuiz();}}
completeTest(5);if(state.points!==125||state.quizzesCompleted!==1||readState().points!==125)throw Error('Quiz award');if(advanceQuiz()||state.points!==125)throw Error('Repeated quiz claim');
startQuiz();const first=QUESTIONS.find(q=>q.id===state.quiz.ids[0]);answerQuiz(first.answer);if(readState().quiz.answers.length!==1||state.points!==125)throw Error('Unfinished quiz persistence');
if(openPack('ideas')===false||state.points!==25)throw Error('Packet charge');finishAllReveals();
advanceQuiz();for(let i=1;i<QUIZ_LENGTH;i++){const question=QUESTIONS.find(q=>q.id===state.quiz.ids[i]);answerQuiz(question.options.find(a=>a!==question.answer));advanceQuiz();}if(state.points!==50)throw Error('Partial quiz scoring');
for(let i=0;i<6;i++)completeTest(5);if(state.points!==800)throw Error('Quiz funding');
for(const p of packs){if(!poolFor(p).length)throw Error('Empty pool');for(let i=0;i<100;i++)if(!poolFor(p).includes(draw(poolFor(p))))throw Error('Wrong themed draw');openPack(p.id);if(draws.length!==5)throw Error('Pack size');if(draws.some(d=>!poolFor(p).includes(d.card)))throw Error('Wrong pool');finishAllReveals();if(revealed.size!==5)throw Error('Reveal failed');}
if(state.packs!==9||Object.values(state.owned).reduce((a,b)=>a+b,0)!==45)throw Error('Collection totals');
if(readState().packs!==9)throw Error('Persistence');
for(const c of CARDS)if(!PORTRAITS[c.id]||!cardHTML(c).includes('<img '))throw Error('Missing portrait '+c.name);
if(CARDS.filter(c=>c.category==='Artists').length!==56)throw Error('Artist roster');
if(poolFor(packs.find(p=>p.id==='art')).length!==67)throw Error('Art pack pool');
for(const name of ['Adolf Hitler','Karl Marx','Leonardo da Vinci'])if(CARDS.find(c=>c.name===name).rarity!=='Archive Foil')throw Error('Rarity override');
for(const name of ['Karl Marx','Frida Kahlo','Abdullah Öcalan']){const c=CARDS.find(c=>c.name===name);const html=cardHTML(c,{isNew:true});if(!html.includes(c.category.toUpperCase())||!html.includes(c.role)||!html.includes('NEW'))throw Error('Incorrect label '+name);}
for(const name of ['apo','fdr','sorel','spirito','hitler']){$('#search').value=name;catalog();if(!$('#catalog').innerHTML.includes('data-card'))throw Error('Missing search '+name);}
const backup={title:'The Political Archive',packetsOpened:50,cards:[{id:'pa-001',copies:100},{id:'pa-302',copies:7}]};mergeCollectionExport(backup);mergeCollectionExport(backup);if(count('pa-001')!==100||count('pa-302')!==7||state.packs!==50)throw Error('Collection transfer');let rejected=false;try{mergeCollectionExport({...backup,cards:[{id:'pa-001',copies:-1}]})}catch{rejected=true}if(!rejected||count('pa-001')!==100)throw Error('Invalid import mutated counts');
resetCelebration();const foil=CARDS.find(c=>c.rarity==='Archive Foil');draws=[{card:foil,isNew:true},{card:foil,isNew:false}];revealed.clear();$('#opening').showModal();reveal(0);reveal(1);reveal(0);
if(!activeFoil||foilQueue.length!==1||revealed.size||$('#foil-stage').innerHTML.includes(foil.name))throw Error('Foil identity leaked or queued twice');
for(let i=1;i<=3;i++){if(!chargeFoil()||activeFoil.taps!==i)throw Error('Foil charge');if(chargeFoil())throw Error('Rapid clicks skipped animation');if(revealed.size)throw Error('Foil revealed early');runTimer(activeFoil.timer);if(i<3&&revealed.size)throw Error('Foil revealed before third click');}
if(!revealed.has(0)||!activeFoil.complete||!$('#foil-card-host').innerHTML.includes(foil.name)||chargeFoil())throw Error('Final foil reveal');finishFoilStage();if(activeFoil?.index!==1)throw Error('Next foil not queued');chargeFoil();const cancelledTimer=activeFoil.timer;finishFoilStage();runTimer(cancelledTimer);if(revealed.has(1)||activeFoil)throw Error('Cancelled reveal completed');reveal(1);if(activeFoil?.taps!==0)throw Error('Cancelled foil cannot restart');resetCelebration();
$('#search').value='no-such-name-xyz';catalog();if($('#empty').hidden)throw Error('Empty state');
`,context);
const savedBeforeMigration=saved;saved=JSON.stringify({owned:{'pa-001':2,'pa-302':3},packs:1});vm.runInContext("if(readState().points!==0||readState().owned['pa-001']!==2||readState().owned['pa-302']!==3)throw Error('Legacy collection migration');",context);saved=savedBeforeMigration;
const current={};vm.createContext(current);vm.runInContext(fs.readFileSync('dist/data.js','utf8')+fs.readFileSync('dist/extra-cards.js','utf8')+';globalThis.cards=CARDS',current);const ids=JSON.parse(fs.readFileSync('card-ids.json'));for(const [id,name] of Object.entries(ids))assert.equal(current.cards.find(c=>c.id===id)?.name,name,'Existing card ID changed');
for(const c of current.cards){const p=JSON.parse(fs.readFileSync('dist/portraits.json'))[c.id];assert.ok(p&&!p.src.startsWith('http')&&fs.existsSync('dist/'+p.src),'Local portrait missing for '+c.name);}
const snapshot=JSON.parse(saved);const reloadContext={...context};vm.createContext(reloadContext);vm.runInContext(['questions.js','data.js','extra-cards.js','rarity.js','themes.js','portraits.js','app.js','collection-transfer.js','quiz.js','reveals.js'].map(f=>fs.readFileSync('dist/'+f,'utf8')).join('\n'),reloadContext);assert.equal(vm.runInContext('state.points',reloadContext),snapshot.points,'Welcome bonus granted again after reload');assert.equal(vm.runInContext('state.welcomeBonusClaimed',reloadContext),true);
console.log('PASS: one-time welcome bonus, three-click Foil concealment/queue/cancellation,  quiz scoring/resume/one-time rewards, pack payment gates, expanded pools,  six rarity tiers, 400 portraits, 8 packs, 800 themed draws, 45 saved cards, labels, rarity overrides, art pool, persistence, searches and all 302 existing IDs preserved.');
