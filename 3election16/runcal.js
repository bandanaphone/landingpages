var Interact = React.createClass({
getInitialState:function(){
return {trumpnums: 0, hillnums: 0, 
mi: 'und', miv: 16,
tx: 'und', txv: 38,
wa: 'und', wav: 12,
ca: 'und', cav: 55,
or: 'und', orv: 7,
nv: 'und', nvv: 6,
az: 'und', azv: 11,
ut: 'und', utv: 6,
id: 'und', idv: 4,
mt: 'und', mtv: 3,
wy: 'und', wyv: 3,
nd: 'und', ndv: 3,
sd: 'und', sdv: 3,
ne: 'und', nev: 5,
ks: 'und', ksv: 6,
ok: 'und', okv: 7,
la: 'und', lav: 8,
ar: 'und', arv: 6,
mo: 'und', mov: 10,
ia: 'und', iav: 6,
mn: 'und', mnv: 10,
wi: 'und', wiv: 10,
in: 'und', inv: 20,
mi: 'und', miv: 16,
oh: 'und', ohv: 18,
ky: 'und', kyv: 8,
tn: 'und', tnv: 11,
ms: 'und', msv: 6,
al: 'und', alv: 9,
ga: 'und', gav: 16,
sc: 'und', scv: 9,
nc: 'und', ncv: 15,
va: 'und', vav: 13,
wv: 'und', wvv: 5,
pa: 'und', pav: 20,
ny: 'und', nyv: 29,
me: 'und', mev: 4,
fl: 'und', flv: 29,
nm: 'und', nmv: 5,
co: 'und', cov: 9,
il: 'und', ilv: 20,
ak: 'und', akv: 3,
hi: 'und', hiv: 4,
nh: 'und', nhv: 4,
vt: 'und', vtv: 3,
nj: 'und', njv: 14,
md: 'und', mdv: 10,
de: 'und', dev: 3,
ct: 'und', ctv: 7,
de: 'und', dev: 3,
ri: 'und', riv: 4,
ma: 'und', mav: 11,
dc: 'und', dcv: 3,
ct: 'und', ctv: 7
}	
},

lemap:function(){	
var sting = this;
var map = new Datamap({element: document.getElementById('maincontains'),
scope: 'usa',
geographyConfig: {highlightBorderColor: 'white'},
fills: {defaultFill: 'rgb(217, 217, 217)'},

done: function(datamap) {
/*Conneticut*/	
datamap.svg.selectAll('.datamaps-subunit.CT').on('click', function(){
var stateclass = 'ct';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Washington DC*/	
datamap.svg.selectAll('.datamaps-subunit.DC').on('click', function(){
var stateclass = 'dc';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Massechussets*/	
datamap.svg.selectAll('.datamaps-subunit.MA').on('click', function(){
var stateclass = 'ma';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Rhode Island*/	
datamap.svg.selectAll('.datamaps-subunit.RI').on('click', function(){
var stateclass = 'ri';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Delaware*/	
datamap.svg.selectAll('.datamaps-subunit.DE').on('click', function(){
var stateclass = 'de';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Delaware*/	
datamap.svg.selectAll('.datamaps-subunit.DE').on('click', function(){
var stateclass = 'de';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Maryland*/	
datamap.svg.selectAll('.datamaps-subunit.MD').on('click', function(){
var stateclass = 'md';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*New Jersey*/	
datamap.svg.selectAll('.datamaps-subunit.NJ').on('click', function(){
var stateclass = 'nj';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});			
/*Vermont*/	
datamap.svg.selectAll('.datamaps-subunit.VT').on('click', function(){
var stateclass = 'vt';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*New Hampshire*/	
datamap.svg.selectAll('.datamaps-subunit.NH').on('click', function(){
var stateclass = 'nh';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Hawaii*/	
datamap.svg.selectAll('.datamaps-subunit.HI').on('click', function(){
var stateclass = 'hi';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Alaska*/	
datamap.svg.selectAll('.datamaps-subunit.AK').on('click', function(){
var stateclass = 'ak';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Colorado*/	
datamap.svg.selectAll('.datamaps-subunit.CO').on('click', function(){
var stateclass = 'co';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*New Mexico*/	
datamap.svg.selectAll('.datamaps-subunit.NM').on('click', function(){
var stateclass = 'nm';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Florida*/	
datamap.svg.selectAll('.datamaps-subunit.FL').on('click', function(){
var stateclass = 'fl';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Maine*/	
datamap.svg.selectAll('.datamaps-subunit.ME').on('click', function(){
var stateclass = 'me';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*New York*/	
datamap.svg.selectAll('.datamaps-subunit.NY').on('click', function(){
var stateclass = 'ny';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Pennsylvania*/	
datamap.svg.selectAll('.datamaps-subunit.PA').on('click', function(){
var stateclass = 'pa';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*West Virginia*/	
datamap.svg.selectAll('.datamaps-subunit.WV').on('click', function(){
var stateclass = 'wv';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Virginia*/	
datamap.svg.selectAll('.datamaps-subunit.VA').on('click', function(){
var stateclass = 'va';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*North Carolina*/	
datamap.svg.selectAll('.datamaps-subunit.NC').on('click', function(){
var stateclass = 'nc';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*South Carolina*/	
datamap.svg.selectAll('.datamaps-subunit.SC').on('click', function(){
var stateclass = 'sc';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Georgia*/	
datamap.svg.selectAll('.datamaps-subunit.GA').on('click', function(){
var stateclass = 'ga';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Alabama*/	
datamap.svg.selectAll('.datamaps-subunit.AL').on('click', function(){
var stateclass = 'al';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Mississippi*/	
datamap.svg.selectAll('.datamaps-subunit.MS').on('click', function(){
var stateclass = 'ms';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Tennessee*/	
datamap.svg.selectAll('.datamaps-subunit.TN').on('click', function(){
var stateclass = 'tn';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Kentucky*/	
datamap.svg.selectAll('.datamaps-subunit.KY').on('click', function(){
var stateclass = 'ky';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Ohio*/	
datamap.svg.selectAll('.datamaps-subunit.OH').on('click', function(){
var stateclass = 'oh';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Michigan*/	
datamap.svg.selectAll('.datamaps-subunit.MI').on('click', function(){
var stateclass = 'ok';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Indiana*/	
datamap.svg.selectAll('.datamaps-subunit.IN').on('click', function(){
var stateclass = 'in';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Illonois*/	
datamap.svg.selectAll('.datamaps-subunit.IL').on('click', function(){
var stateclass = 'il';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Wisconsin*/	
datamap.svg.selectAll('.datamaps-subunit.WI').on('click', function(){
var stateclass = 'wi';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Minnesota*/	
datamap.svg.selectAll('.datamaps-subunit.MN').on('click', function(){
var stateclass = 'mn';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Iowa*/	
datamap.svg.selectAll('.datamaps-subunit.IA').on('click', function(){
var stateclass = 'ia';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Missoura*/	
datamap.svg.selectAll('.datamaps-subunit.MO').on('click', function(){
var stateclass = 'mo';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Arkansas*/	
datamap.svg.selectAll('.datamaps-subunit.AR').on('click', function(){
var stateclass = 'ar';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Louisiana*/	
datamap.svg.selectAll('.datamaps-subunit.LA').on('click', function(){
var stateclass = 'la';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Oklahoma*/	
datamap.svg.selectAll('.datamaps-subunit.OK').on('click', function(){
var stateclass = 'ok';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*Kansas*/	
datamap.svg.selectAll('.datamaps-subunit.KS').on('click', function(){
var stateclass = 'ks';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Nebraska*/	
datamap.svg.selectAll('.datamaps-subunit.NE').on('click', function(){
var stateclass = 'ne';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*South Dakota*/	
datamap.svg.selectAll('.datamaps-subunit.SD').on('click', function(){
var stateclass = 'sd';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*North Dakota*/	
datamap.svg.selectAll('.datamaps-subunit.ND').on('click', function(){
var stateclass = 'nd';	
var statevote = stateclass+'v';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});		
/*Wyoming*/	
datamap.svg.selectAll('.datamaps-subunit.WY').on('click', function(){
var stateclass = 'wy';	
var statevote = 'wyv';	
var statemap = stateclass.toUpperCase();
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*Montana*/	
datamap.svg.selectAll('.datamaps-subunit.MT').on('click', function(){
var stateclass = 'mt';	
var statemap = stateclass.toUpperCase();
var statevote = 'mtv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*Idaho*/	
datamap.svg.selectAll('.datamaps-subunit.ID').on('click', function(){
var stateclass = 'id';	
var statemap = stateclass.toUpperCase();
var statevote = 'idv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*Utah*/	
datamap.svg.selectAll('.datamaps-subunit.UT').on('click', function(){
var stateclass = 'ut';	
var statemap = stateclass.toUpperCase();
var statevote = 'utv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});
/*Arizona*/	
datamap.svg.selectAll('.datamaps-subunit.AZ').on('click', function(){
var stateclass = 'az';	
var statemap = stateclass.toUpperCase();
var statevote = 'azv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*Nevada*/	
datamap.svg.selectAll('.datamaps-subunit.NV').on('click', function(){
var stateclass = 'nv';	
var statemap = stateclass.toUpperCase();
var statevote = 'nvv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});
/*Oregon*/	
datamap.svg.selectAll('.datamaps-subunit.OR').on('click', function(){
var stateclass = 'or';	
var statemap = stateclass.toUpperCase();
var statevote = 'orv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});	
/*Michigan*/	
datamap.svg.selectAll('.datamaps-subunit.MI').on('click', function(){
var stateclass = 'mi';	
var statemap = stateclass.toUpperCase();
var statevote = 'miv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});
/*Texas*/	
datamap.svg.selectAll('.datamaps-subunit.TX').on('click', function(){
var stateclass = 'tx';	
var statemap = stateclass.toUpperCase();
var statevote = 'txv';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});
/*Washington*/	
datamap.svg.selectAll('.datamaps-subunit.WA').on('click', function(){
var stateclass = 'wa';	
var statemap = stateclass.toUpperCase();
var statevote = 'wav';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});
/*California*/	
datamap.svg.selectAll('.datamaps-subunit.CA').on('click', function(){
var stateclass = 'ca';	
var statemap = stateclass.toUpperCase();
var statevote = 'cav';	
if (sting.state[stateclass] === 'und'){
sting.setState({trumpnums: sting.state.trumpnums + sting.state[statevote], [stateclass]: 'right'});	
map.updateChoropleth({[statemap]:'red'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'red'});	
});	
}

else if (sting.state[stateclass] === 'right'){
sting.setState({
trumpnums: sting.state.trumpnums - sting.state[statevote], 
hillnums: sting.state.hillnums + sting.state[statevote], [stateclass]: 'left'});	
map.updateChoropleth({[statemap]:'blue'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'blue'});	
});	
}

else if (sting.state[stateclass] === 'left'){
sting.setState({hillnums: sting.state.hillnums - sting.state[statevote], [stateclass]: 'und'});	
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});
datamap.svg.selectAll('.datamaps-subunit.'+[statemap]).on('mouseout', function(){
map.updateChoropleth({[statemap]:'rgb(217, 217, 217)'});	
});	
}
});
/*End Of States*/
}
});	
},

componentDidMount(){
this.lemap();	
},	

winning: function(){
if (this.state.trumpnums >= 270)
return (<h1 className="winning">Trump has won!</h1>);
else if (this.state.hillnums >= 270)
return (<h1 className="winning">Hillary has won!</h1>);
else return null;
},

theapp:function(){
return (<div>
<div id="mainholds"><div id="maincontains"></div></div>
{this.winning()}
<div id="thecandidates" className="row">
<div className="col-md-6 col-sm-6 col-xs-6">
<h1>Donald Trump</h1>
<h1>{this.state.trumpnums}</h1>
</div>

<div className="col-md-6 col-sm-6 col-xs-6">
<h1>Hillary Clinton</h1>
<h1>{this.state.hillnums}</h1>
</div>

</div>	
</div>)	
},
	
render:function(){
return this.theapp();}	
});

ReactDOM.render(<Interact />, document.getElementById('mainapp'));