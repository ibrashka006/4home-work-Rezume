const h3=document.querySelector('h3')
const inputs=document.querySelectorAll('input')
const JasooBTN=document.getElementById('create')
const root=document.querySelector('#root')

JasooBTN.onclick=(e)=>{
    if (inputs[0,1,2,3,4,5,6].value.trim().length>0){
    e.preventDefault()
    showInfo()
    }
}
function showInfo(){
    h3.innerHTML=`${inputs[0].value} ${inputs[1].value}`
    root.innerHTML=`
    <h2>Электронная Почта:${inputs[2].value}</h2>
    <h2>Жашы ${inputs[3].value}</h2>
    <h2>Кесиби ${inputs[4].value}</h2>
    <h2>Тел.: ${inputs[5].value}</h2>
    <h2>Жашаган Жери  ${inputs[6].value}</h2>
    <img width='350px' src='https://tmssl.akamaized.net/images/foto/galerie/zlatan-ibrahimovic-ac-mailand-1603008323-49388.jpg?lm=1603008348' ${inputs[7].value}>
    `
}
