// Accepts both earlier Political Archive exports and the current export format.
const importButton=document.createElement('button');importButton.className='text-link';importButton.id='import';importButton.textContent='Import collection ↑';
const importInput=document.createElement('input');importInput.type='file';importInput.accept='.json,application/json';importInput.hidden=true;importInput.id='import-file';
$('#export').before(importButton);$('#export').before(importInput);
importButton.onclick=()=>importInput.click();
function mergeCollectionExport(data){
 if(!data||data.title!=='The Political Archive'||!Array.isArray(data.cards))throw Error('Choose a Political Archive collection export.');
 const known=new Set(CARDS.map(c=>c.id)),incoming={};
 for(const row of data.cards){if(!row||!known.has(row.id))continue;if(!Number.isSafeInteger(row.copies)||row.copies<0)throw Error('The collection contains an invalid card count.');incoming[row.id]=Math.max(incoming[row.id]||0,row.copies);}
 const packs=data.packetsOpened;if(!Number.isSafeInteger(packs)||packs<0)throw Error('The collection contains an invalid pack count.');
 if(!Object.keys(incoming).length)throw Error('No recognized cards were found in this export.');
 for(const[id,n]of Object.entries(incoming))state.owned[id]=Math.max(count(id),n);
 state.packs=Math.max(state.packs,packs);persist();stats();catalog();
 return Object.values(incoming).reduce((sum,n)=>sum+n,0);
}
importInput.onchange=async()=>{const file=importInput.files?.[0];if(!file)return;try{if(file.size>2*1024*1024)throw Error('Choose a collection export smaller than 2 MB.');const n=mergeCollectionExport(JSON.parse(await file.text()));toast(`Imported ${n} cards. Existing counts are kept when higher.`);}catch(e){toast(e.message||'Could not import this collection.');}finally{importInput.value='';}};
