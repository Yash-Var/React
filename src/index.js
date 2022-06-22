import React from 'react';
import ReactDOM  from 'react-dom';
import './index.css';
let curDate=new Date();
let greeting='';
curDate=curDate.getHours();
const csstyle={ };
if(curDate>=1 && curDate<12){
greeting='Good Morning';
 csstyle.color="green";
}else if(curDate>=12 && curDate<19)
{
  greeting='Good Afternoon';
  csstyle.color="orange";
}else{

  greeting='Good Night';
  csstyle.color="blue";
}
ReactDOM.render(<>
<div>
<h1>Hello sir, <span style={csstyle}>{greeting}</span></h1>
</div>
</>
,
document.getElementById('root'));
