function catAndMouse(x, y, z) {
    let a=Math.abs(x-z)
    let b=Math.abs(y-z)
    let c=Math.max(a,b)
    if(a!=b&&c==a){
    console.log("Cat B")
    return "Cat B"
    }
    else if(a!=b&&c==b){
    console.log("Cat A")
    return "Cat A" 
    }
    else {
    console.log("Mouse C")
    return "Mouse C"   
    }
    
    }