// Candidate data & crew array.
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};
let crew = [candidateA,candidateC,candidateE];

// Code your orbitCircumference function here:
function circumference(r){
 let c = Math.round(Math.PI*2*r);
 return c;
}  

// Code your missionDuration function here:
function missionDuration(oNum,radius=2000,oSpeed = 28000){
let time = Math.round(((oNum*circumference(radius))/oSpeed)*100)/100;
return time;
}

let radius = 2000;
let oSpeed = 28000;
console.log(`The mission will travel ${circumference(radius)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`)
// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
  }

// Code your oxygenExpended function here:
function oxygenExpended(candidate){
let spaceWalk = 3;  
let spaceWalkTime = missionDuration(spaceWalk,3000,30000);
console.log(spaceWalkTime);
let oUsed = Math.round(candidate.o2Used(spaceWalkTime)*1000)/1000;
//return `${candidate.name} will perform the spacewalk, which will last ${spaceWalkTime} hours and require ${oUsed} kg of oxygen.`
return oUsed;
}

//console.log(oxygenExpended(selectRandomEntry(crew)));

//bonus mission
let consumpsion=[];
for(let i=0; i<crew.length; i++){
  consumpsion.push(oxygenExpended(crew[i]));
}
console.log(Math.min(...consumpsion));

 

 