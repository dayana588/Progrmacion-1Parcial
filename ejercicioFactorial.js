let arreglo =[]
num =Number(prompt("Cauntos numeros quiere utilizar para factorial "))

for(let i=0;i<num;i++){
    
    if(i==0 || i==1){
        arreglo.push(1)
    }else{
        sum=1
        for(let j=1;j<=i;j++){
            sum*=j
        }
    arreglo.push(sum)
    }
}
console.log(arreglo)