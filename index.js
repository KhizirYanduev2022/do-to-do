const body = document.body

const section = document.querySelector('#todo')
const inp_1 = document.querySelector('#inp')
const btn = document.querySelector('#btn')





btn.addEventListener('click', (e)=>{

   
        
        const res = document.createElement('div')
        res.id = 'res'
        
        const inp_2 = document.createElement('input')
        inp_2.className= 'inp_2'
        inp_2.type = 'checkbox'
        res.append(inp_2)
     

        inp_2.addEventListener('click',(e)=>{
         if(inp_2.checked) {
            e.target.nextElementSibling.style.textDecoration = 'line-through'
         }else{
            e.target.nextElementSibling.style.textDecoration = 'none'
         }
        })
            
        
        
        const p =  document.createElement('p')
        p.className= 'text'
        p.textContent = inp_1.value
        res.append(p)
        
        const but = document.createElement('button')
        but.className = 'but'
        but.textContent = 'add'
        res.append(but)
        
        const sect = document.querySelector('.sect')
        sect.prepend(res)
        console.log(sect)
        
        but.addEventListener('click', (e)=> {
        
        e.target.parentElement.remove()
        
            
        })
         
        
        
        
        }
        
        

)




































// btn.addEventListener('click',(e)=>{
// //    if(input.value === '') return
//     createAndDeleteElems(input.value)
//     // input.value = ''
// })


// function createAndDeleteElems (value){
//     // console.log(value)

//     const li = document.createElement('li')
//     const btn = document.createElement('button')


//     btn.className = ('btn')
//     btn.textContent = 'add'
//     li.appendChild(btn)


//     li.className = ('li')
//     li.textContent = value
//     result.appendChild(li)
// }


// btn.addEventListener ('click', (e)=>{
//  createAndDeleteElems(input.value)
// })


// function createAndDeleteElems (value) {
//     const li = document.createElement('li')
//     li.className = ('li')
//     li.textContent = value
//     result.appendChild(li)

//     const btn = document.createElement('button')
//     btn.className = 'btn'
//     btn.textContent = 'add'
//     li.appendChild(btn)

//     btn.addEventListener('click', (e)=>{
//         result.removeChild(li)
//     })

//     const div = document.createElement('div')
//     div.prepend(result)

//    const inp2 = document.createElement('input')
//    inp2.className = 'inp2'
//    li.prepend(inp2)
//    inp2.type = 'checkbox'
//  }


