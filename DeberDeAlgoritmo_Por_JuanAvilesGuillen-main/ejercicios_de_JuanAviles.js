class Ejercicios1a30{
//1) Sumar dos numeros siempre cuando el promero sea mayor al segundo

ejercio1(){
    console.log("1) Sumar dos numeros siempre cuando el promero sea mayor al segundo");
let num1= Math.floor (Math.random()*10);
let num2= Math.floor (Math.random()*10);
let suma=0
if (num1>num2){
suma=num1+num2
console.log("La suma de ",num1," y ",num2," es ",suma)
}
else{
console.log("la suma no se pudo ejecutar ya que ",num1,"no es mayor que ",num2);
}
}
//2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo
ejercicio2(){
    console.log("2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y reciduo");
let num1= Math.floor (Math.random()*10);
let num2= Math.floor (Math.random()*10);
let opsu=0,opre=0,opmu=0,opdi=0,opres=0
opsu=num1+num2
opre=num1-num2
opmu=num1*num2
opdi=num1/num2
opres=num1%num2
console.log(num1,"+",num2,"=",opsu );
console.log(num1,"-",num2,"=",opre);
console.log(num1,"*",num2,"=",opmu );
console.log(num1,"/",num2,"=",opdi );
console.log(num1,"%",num2,"=",opres );
}
//3) Presentar el mayor de dos numeros
ejercicio3(){
    console.log("3) Presentar el mayor de dos numeros");
    let num1= Math.floor (Math.random()*10);
    let num2= Math.floor (Math.random()*10);
    if (num1>num2){
      console.log(num1," es mayor que ",num2);
    }
    else{
        if (num1=num2){
          console.log(num1," y ",num2," son iguales");
        }
        else{
            console.log(num2," es mayor que ", num1);
        }
     
    }
}
//4) Dado un nombre presentarlo
ejercicio4(){
    console.log("4) Dado un nombre presentarlo");
let nombr= ["J","U","A","N"]
let lon=nombr.length
let cont=0;
while(cont<lon){
    console.log(nombr[cont]);
    cont=cont+1
}
}
//5) Dado un valor de compra presentar el total considerando un 12% de iva
ejercicio5(){
    console.log("5) Dado un valor de compra presentar el total considerando un 12% de iva");
    let valor=Math.floor (Math.random()*10);
    let total=0
    let iva=0
    iva=valor*0.12
    total=valor+iva
    console.log("El total del pago es ",total," con un iva del 12%");
}
//6) Presentar 5 veces un nombre
ejercicio6(){
    console.log("6) Presentar 5 veces un nombre");
    let nombre=["F","E","R","N","A","N","D","O"]
    let longitud= nombre.length
    let cont=0
    let c=0
    while(c<5){
        cont=0
    while(cont<longitud){
        console.log(nombre[cont]);
        cont=cont+1
    }
    c=c+1
}
}
//7) Presentar los numeros multiplos de 3 del 3 al 21
ejercicio7(){
    console.log("7) Presentar los numeros multiplos de 3 del 3 al 21");
    let num1=3
    let t=0
    while(num1<=21){
    t=num1%3
    if(t==0){
    console.log(num1);
    }
    num1=num1+1
    }
}
//8) Presentar los numeros multiplos de 3 del 21 al 3
ejercicio8(){
    console.log("8) Presentar los numeros multiplos de 3 del 21 al 3");
    let num1=21
    let t=0
    while(num1>=3){
    t=num1%3
    if(t==0){
    console.log(num1);
    }
    num1=num1-1
    }
}
//9) Dados dos nombres indicar si son iguales o diferentes
ejercicio9(){
    console.log("9) Dados dos nombres indicar si son iguales o diferentes");
    let nombre1=["J","U","A","N"]
    let nombre2=["G","A","B","R","I"]
    let cont=0
    let c=0
    let long1=nombre1.length
    let long2=nombre2.length
    if (long1==long2){
    while(cont<long1,cont<long2){
    if(nombre1[cont]==nombre2[cont]){
    c=c+1
    }
     cont=cont+1   
    }
    if(c==long1,c==long2){
        console.log("Estos nombres son iguales");
    }
    else{
        console.log("Estos nombres no son iguales");
    }   
}
    else{
        console.log("Estos Nombres no son iguales");
    }
    
}
//10) Dado diez numeros en un arreglo presentar los que tengan menos de 5 caracteres
ejercicio10(){
    console.log("10) Presenta Elementos De Un Arreglo Que Tengan Menos De 5 Caracteres")
        let arreglo=["6775","953789","774","165227","128764","20","128","1943234","90","123456"]
        //               0        1     2     3       4    5   6    7   8    9       
        console.log(arreglo)
        for(let pos=0;pos<10;pos=pos+1){
          if (arreglo[pos].length < 5  ){ 
           console.log(`pos->${pos} Elemento:${arreglo[pos]}` )
          }
        }
}
   



//12) Dado un arreglo de numeros presentar los menores a 10
ejercicio12(){
    console.log("12) Dado un arreglo de numeros presentar los menores a 10");
let numeros=[12,45,4,566,3,2,8,9,10]
let cont=0
let l=numeros.length
while(cont<l){
if(numeros[cont]<10){
 console.log(numeros[cont]);
}
cont=cont+1    
}

}
//13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares
ejercicio13(){
    console.log("13) Dado un arreglo de numeros presentar los impares y al final la suma de los pares");
let arrenum=[23,45,67,20,10,8,14]
let l=arrenum.length
let cont=0
let sumapar=0
let n=0
while(cont<l){
    n=parseInt (arrenum[cont])
    if (n%2!=0){
    console.log(n);
    }
    else{
     sumapar=sumapar+n
    }
cont=cont+1
}
console.log("La suma de los numeros pares es ",sumapar);
}

//14) Presentar el primero el medio y el ultimo valor de un arreglo
ejercicio14(){
    console.log("14) Presentar el primero el medio y el ultimo valor de un arreglo");
let arr=[34,56,78,45]
let cont=0
let l=arr.length
let r=0
r=(l-1)/2
if (r - Math.floor(r) == 0) {
    console.log("el primer",arr[0],"el medio",arr[r],"el ultimo termino",arr[l-1]);
} else {
    r = r.toFixed(); 
    console.log("el primer",arr[0],"el medio",arr[r],"el ultimo termino",arr[l-1]);
}
}

//15) Calcular el vuelto de un a compra dado el costo y el pago
ejercicio15(){
    console.log("15) Calcular el vuelto de un a compra dado el costo y el pago");
    let costo=Math.floor (Math.random()*10);
    let pago=Math.floor (Math.random()*20);
    let vuelto=0
    vuelto=pago-costo
if(pago>costo){
    console.log("La compra tuvo un costo de ",costo," se pago con ",pago," y con un vuelto de ",vuelto);
}
else{
    
    console.log("La compra tuvo un costo de ",costo," se pago con ",pago," y quedo debiendo ",vuelto);
}

   
}

//16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12

ejercicio16(){
    console.log("16) Presentar la tabla de multiplicar de cualquier numero del 1 al 12");
    let num1=Math.floor (Math.random()*10);
    let cont=0
    let resul=0
    while(cont<12){
    cont=cont+1
    resul=num1*cont
    console.log(num1,"x",cont,"=",resul);

    }
}

//17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas
//ejemplo: n1=5  n2=3
//r=5+5+5=15
ejercicio17(){
console.log("17) Realizar la multiplicacion de dos numeros por medio de sumas sucesivas");
let f1=Math.floor (Math.random()*10);
let f2=Math.floor (Math.random()*10);
let n=0
let cont=0
let resul=0
while(cont<f2){
cont=cont+1
resul=n+f1
console.log(cont,"#",n,"+",f1,"=",resul);
n=n+f1
}
console.log("la multiplcacion de ",f1,"x",f2,"=",resul);
}


//18)Divisiones mediante restas susesivas
ejercicio18(){
    console.log("18) Division mediante restas susecivas");
    let visor=2
    let dendo=10
    let ciente=0
    let cont=0
    let r=0
    let res=0
    let d=0
    d=dendo
    r=dendo/visor
    while(cont<r){
        cont=cont+1 
        res=dendo-visor
        console.log(cont,"# ",dendo,"-",visor,"=",res);
        dendo=dendo-visor
    }
    console.log("la Division entre ",d,"/",visor,"=",cont);
    }

//19)Calcular el factorial de un numero
ejercicio19(){
    console.log("19) Calcular el factorial de un numero");
    let n=Math.floor (Math.random()*12);
    let n1=n
    let cont=n
    let re=0
    while(cont>1){
    cont=cont-1
    re=n*cont
    console.log(n,"*",cont);
    n=n*cont
      

    }
    console.log("el factorial del numero ",n1," es ",re);
}

//20)Calcular el exponente de un numero
//	ejemplo: num=4  exp=3
//    respuesta=4*4*4=64
ejercicio20(){
    console.log("20) Calcular el exponente de un numero");
let num=Math.floor (Math.random()*20);
let exp=Math.floor (Math.random()*5);
let cont=0
let resul=1
while(cont<exp){
cont=cont+1
resul=resul*num

}
console.log(num," elevado a la ",exp," es ",resul);
}

ejercicio21(){
 // serie fibonacci dado n numeros n=8
    console.log("21) Calcular la serie fibonacci ");
        let a=0,b=1,c=1,cont=3,n=8,x=0
        //n= Math.floor(Math.random()*10)
        console.log(x)
        console.log(a,b,c)
        while (cont < n){
            a=b;b=c;c = a+b
            console.log(c)
            cont=cont +1
        }  
}

//22) Dado un numero invertirlo
ejercicio22(){
    console.log("22) Dado un numero invertirlo")
    let num = 987654321;
    let numcade = num.toString(); // Convertirmos a cadena
    let l=numcade.length
    let cont=l
    let cont1=0
   //recorremos el arreglo
    while(cont1<l){
    cont=cont-1
    console.log(numcade[cont]);
    cont1=cont1+1    
    }
 
}

//23) Presentar los divisores de un numero
ejercicio23(){
    console.log("23) Presentar los divisores de un numero")
    let num=15
    let i=0
      for ( i = 1; i < num; i++) {
        if (num % i === 0) {
          console.log(i,"Es divisor de ",num);
        }
      }
}

//24) Presentar si un numero es perfecto o no")
ejercicio24(){
    console.log("24) Presentar si un numero es perfecto o no")
    let num=Math.floor (Math.random()*100)
    let i=0
    let acu=0
      for ( i = 1; i < num; i++) {
        if (num % i === 0) {
          acu=acu+i
        }
      }
    if(acu==i){
     console.log("El numero ",num," es perfecto");
    }
    else{
        console.log("El numero ",num," no es perfecto");
    }

}

//25) Verfificar si un numero es primo o no Primo cuando solo es divsivible para 1 y el propio numero es decir no tenga divisores
ejercicio25(){
console.log("25) Verfificar si un numero es primo o no Primo cuando solo es divsivible para 1 y el propio numero es decir no tenga divisores")
let num=Math.floor (Math.random()*50)
let i=0
let cont=0
for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      cont=cont+1
    }   
  }  
  if(cont==0){
console.log(num,"es primo");
  }
  else{
    console.log(num,"no es primo");
  }
}
}

let ejer1= new Ejercicios1a30()
ejer1.ejercio1()
let ejer2= new Ejercicios1a30()
ejer2.ejercicio2()
let ejer3= new Ejercicios1a30()
ejer3.ejercicio3()
let ejer4= new Ejercicios1a30()
ejer4.ejercicio4()
let ejer5= new Ejercicios1a30()
ejer5.ejercicio5()
let ejer6= new Ejercicios1a30()
ejer6.ejercicio6()
let ejer7= new Ejercicios1a30()
ejer7.ejercicio7()
let ejer8= new Ejercicios1a30()
ejer8.ejercicio8()
let ejer9= new Ejercicios1a30()
ejer9.ejercicio9()
let ejer10= new Ejercicios1a30()
ejer10.ejercicio10()
let ejer12= new Ejercicios1a30()
ejer12.ejercicio12()
let ejer13= new Ejercicios1a30()
ejer13.ejercicio13()
let ejer14= new Ejercicios1a30()
ejer14.ejercicio14()
let ejer15= new Ejercicios1a30()
ejer15.ejercicio15()
let ejer16= new Ejercicios1a30()
ejer16.ejercicio16()
let ejer17= new Ejercicios1a30()
ejer17.ejercicio17()
let ejer18= new Ejercicios1a30()
ejer18.ejercicio18()
let ejer19= new Ejercicios1a30()
ejer19.ejercicio19()
let ejer20= new Ejercicios1a30()
ejer20.ejercicio20()
let ejer21= new Ejercicios1a30()
ejer21.ejercicio21()
let ejer22= new Ejercicios1a30()
ejer22.ejercicio22()
let ejer23=new Ejercicios1a30()
ejer23.ejercicio23()
let ejer24=new Ejercicios1a30()
ejer24.ejercicio24()
let ejer25=new Ejercicios1a30()
ejer25.ejercicio25()