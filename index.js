function func(event){
    let result = []
    let srcVal
    let initialMode
     let baseTwoValues = []
    let defaultMode = 2
    const {name, value, id} = event.target
   let mode = document.getElementById("mode").innerHTML
   let allButton = document.querySelectorAll("button")
   let cancel = document.getElementById("c")
        let modal = +mode.split(' ')[1]
        const btn = document.querySelectorAll('.btn')
        if(name === 'modeBtn'){
          if(document.getElementById("res").innerHTML.trim() == ''){
             modal++
             if(modal >  10) modal = defaultMode
             document.getElementById("mode").innerHTML = `mode ${modal}`
            document.getElementById("res").innerHTML = ''
            for(let i = 0; i<btn.length; i++){
              if(+btn[i].name >=modal){
                  btn[i].disabled = true
              }else{
                  btn[i].disabled = false
              }
          }
           return
          } 
            initialMode = modal
            modal++
            if(modal >  10){
                       modal = 2
                    document.getElementById("mode").innerHTML = `mode ${modal}`
                   }
                   document.getElementById("mode").innerHTML = `mode ${modal}` 
                   for(let i = 0; i<btn.length; i++){
                        if(+btn[i].name >=modal){
                            btn[i].disabled = true
                        }else{
                            btn[i].disabled = false
                        }
                    }
            let val = document.getElementById("res").innerHTML.trim()
            let validArr = val.split(' ')
            for(let i = 0; i < validArr.length; i += 2){
              let valToInt = validArr[i]
              let num = parseInt(valToInt, initialMode)
              validArr.splice(i, 1, num.toString())
              if(isNaN(+validArr[validArr.length - 1])){
                document.getElementById("res").innerHTML = 'MATH ERROR'
                return
              }
               baseTwoValues.push(num)
               let sumInBaseTen = eval(validArr.join().replace(/,/g, ''))
               let finalResult = sumInBaseTen.toString(modal)
               document.getElementById("res").innerHTML = +finalResult
               baseTwoValues = []
            }    
            } 
    if(name === 'c'){
      for(let i = 0; i<allButton.length; i++){
        allButton[i].classList.remove('points')
    }
        document.getElementById("res").innerHTML = ''
    } 
    else if(name === '+' || name === '-' || name === '/' || name === '*'){ 
        document.getElementById("res").innerHTML = `${document.getElementById("res").innerHTML} ${document.getElementById(id).innerHTML} `
       srcVal = `${document.getElementById("res").innerHTML}`
         let val = srcVal.split(' ')
          result.push(val)
           srcVal = ''
        screen += document.getElementById(id).innerHTML 
    } 
    else if(name === '='){
        srcVal = document.getElementById("res").innerHTML.trim()
        let val = srcVal.split(' ')
        result = val
        result = result.filter(a => a !=='')
        for(let i = 0; i < result.length; i++){
            if(isNaN(+result[result.length - 1])){
                document.getElementById("res").innerHTML = 'MATH ERROR'
                if(document.getElementById("res").innerHTML==='MATH ERROR'){
                  for(let i = 0; i<allButton.length; i++){
                    allButton[i].classList.add('points')
                }
                 cancel.classList.remove('points')
                }
                return
              }
              if((result[i]=== '+' || result[i]==='-') && (result[i+1]==='*' || result[i+1]=== '/')){
            document.getElementById("res").innerHTML = 'MATH ERROR'
            if(document.getElementById("res").innerHTML==='MATH ERROR'){
              for(let i = 0; i<allButton.length; i++){
                allButton[i].classList.add('points')
            }
            cancel.classList.remove('points')
            }
            return
          }
            if(isNaN(+result[i])){
                baseTwoValues.push(result[i])
           continue
          }
          
          
          let valToInt = result[i]
         
          let num = parseInt(valToInt, modal)
          result.splice(i, 1, num.toString())
           baseTwoValues.push(num)
           
        }
      let sumInBaseTen = eval(result.join().replace(/,/g, ''))
           let finalResult = sumInBaseTen.toString(modal)
           document.getElementById("res").innerHTML = +finalResult
          
           baseTwoValues = [] 
    }
   else if(!isNaN(+event.target.name)){
       document.getElementById("res").innerHTML += +name
     
   } 
   
}