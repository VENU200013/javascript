var data=[]

var backbtn=document.getElementById("back")
var savebtn=document.getElementById("save")
var savebtn2=document.getElementById("save2")
var gender=""
var count=0;
var a=0
// var details=document.getElementById("details")



savebtn.addEventListener('click',(e)=>{
    e.preventDefault()
    var name_=document.getElementById("name").value;
var collage=document.getElementById("collage").value;
var sid=document.getElementById("sid").value;
var Percentage=document.getElementById("Percentage").value;
var doj=document.getElementById("doj").value;
var male=document.getElementById("male").value;
var female=document.getElementById("female").value;
    if(male){
        gender="male"
    }
    else if(female){
        gender="female"
    }
    
var objdata={
    slno:a++,
    Name:name_,
    collage:collage,
    _id:sid,
    percentage:Percentage,
    date:doj,
    gender:gender
}

data.push(objdata);  
count++
localStorage.setItem(`data`,JSON.stringify(data))
// var count2= JSON.parse( localStorage.getItem('count'))

// count=count2
})
savebtn2.addEventListener("click",()=>{
    document.getElementById("formfill").style.display="block"
    document.getElementById("WholeTable").style.display="none"
    document.getElementById("del").style.display="none"
})
function details() {
  var data1= JSON.parse( localStorage.getItem(`data`))
//   ocalStorage.setItem('count',JSON.Math(count))
  console.log(count);
   
    document.getElementById("WholeTable").style.display="block"
    document.getElementById("formfill").style.display="none"
    document.getElementById("del").style.display="none"
    document.getElementById("print").innerHTML=`
    ${data1.map(ele=>{
return(
    `<tr>
    <td>${ele.slno}</td>
    <td>${ele.Name}</td>
    <td>${ele.collage}</td>
    <td>${ele._id}</td>
    <td>${ele.percentage}</td>
    <td>${ele.date}</td>
    <td>${ele.gender}</td>
    </tr>`
    )
    })}`
    console.log(data);
}
var deleteStudent=()=>{
    document.getElementById("WholeTable").style.display="none"
    document.getElementById("formfill").style.display="none"
    document.getElementById("del").style.display="block"
    var deleteid=document.getElementById('deleteid').value
    
    localStorage.removeItem(deleteid)

}

var deleteStudent2=()=>{
    document.getElementById("WholeTable").style.display="none"
    document.getElementById("formfill").style.display="none"
    document.getElementById("del").style.display="block"
    

}