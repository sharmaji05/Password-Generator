class password{
    constructor(pass){
        this.pass = pass
    }
    strong(){
            // console.log(`${this.pass}: this is your strong password`)
    }
    weak(){
        // console.log(`${this.pass}: this is your weak password`)
    }

    funny(){
        // console.log(`${this.pass}: this is normal password`)
    }
}

//for Button 1
submit.addEventListener("click",(e)=>{
       e.preventDefault()
    //    let pass = ps.value
        let arr = "123#@%^FGFGdfRy&786598"
        let n = 10
        let index = ''
        while(index.length < n){
            let p1 = Math.floor(Math.random()*arr.length)
            let r = arr[p1]
            index+=r
        }
        const o1 = new password(index)
        o1.strong()
         show.innerHTML = `
              ${index}
         `
})

//for button 2
submit1.addEventListener("click",(e)=>{
    let arr1 = "1234567890"
    let n1 = 5
    let index1 = ''
    while(index1.length <= n1){
        let p2 = Math.floor(Math.random()*arr1.length)
        let r2 = arr1[p2]
        index1+=r2
    }
    const o2 = new password()
    o2.weak()
    show1.innerHTML = `
         ${index1}
    `
})
