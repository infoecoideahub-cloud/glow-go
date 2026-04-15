var ggSt=[
  {space:'residential',loc:'single'},
  {space:'residential',loc:'single'},
  {space:'residential',loc:'single'}
];

window.ggCalc=function(i){
  var f=document.getElementById('freq'+i);
  var h=document.getElementById('hrs'+i);
  if(!f||!h)return;
  var freq=parseInt(f.value);
  var hrs=parseInt(h.value);
  var s=ggSt[i];
  var disc=[0.10,0.15,0.20][i];
  var mo=[1,3,6][i];
  var rate=67.5;
  if(s.space==='commercial')rate=rate*1.12;
  if(s.loc==='multi')rate=rate*1.10;
  rate=rate*(1-disc);
  var pm=Math.round(rate*hrs)*freq;
  var tot=pm*mo;
  var base=67.5;
  if(s.space==='commercial')base=base*1.12;
  if(s.loc==='multi')base=base*1.10;
  var full=Math.round(base*hrs)*freq*mo;
  var sv=full-tot;
  var pv=document.getElementById('pv'+i);
  var pt=document.getElementById('pt'+i);
  var ps=document.getElementById('ps'+i);
  if(pv)pv.textContent=pm;
  if(pt)pt.textContent=mo>1?'$'+tot+' total for '+mo+' months':'$'+tot+' total';
  if(ps){
    if(sv>0){ps.textContent='You save $'+sv;ps.style.display='block';}
    else{ps.style.display='none';}
  }
};

window.ggSetSpace=function(i,val,btn){
  ggSt[i].space=val;
  var bs=btn.parentNode.querySelectorAll('.mp-tbtn');
  for(var b=0;b<bs.length;b++){
    bs[b].style.borderColor='#e2ecf3';
    bs[b].style.background='#fff';
    bs[b].style.color='#6b7f96';
  }
  btn.style.borderColor='#17b9e8';
  btn.style.background='#e8f8fd';
  btn.style.color='#17b9e8';
  window.ggCalc(i);
};

window.ggSetLoc=function(i,val,btn){
  ggSt[i].loc=val;
  var bs=btn.parentNode.querySelectorAll('.mp-tbtn');
  for(var b=0;b<bs.length;b++){
    bs[b].style.borderColor='#e2ecf3';
    bs[b].style.background='#fff';
    bs[b].style.color='#6b7f96';
  }
  btn.style.borderColor='#17b9e8';
  btn.style.background='#e8f8fd';
  btn.style.color='#17b9e8';
  window.ggCalc(i);
};

setTimeout(function(){
  window.ggCalc(0);
  window.ggCalc(1);
  window.ggCalc(2);
},300);
