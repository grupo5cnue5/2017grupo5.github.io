function fcos() {//resolve o cos (x)
ang = document.getElementById("angulo").value; //lê o angulo em graus
ang=Number(ang); //para garantir q é numero

//COSSENO EXATO
angr=(ang/180)*(Math.PI) //conversao em radianos
cos=Math.cos(angr) //função javascript (todas tem que vir com "Math.")que calcula o cosseno
document.getElementById("ecos").innerHTML = cos; //mostra o resultado na pagina html

//POLINOMIO DE MCLAURIN
n = document.getElementById("nvezes").value; //le o numero de termos do polinomio
n=Number(n); //para garantir que é numero
n=n-1; //para considerar o termo zero
m=0
for (i = 0; i <= n; i++) { //para i de 0 a n, somando de 1 em 1
m=m+((Math.pow(-1,i))*((Math.pow(angr,2*i))/(fatorial(2*i))));
}
document.getElementById("mcos").innerHTML = m; //mostra o valor final
erro=(cos-m)
document.getElementById("derro").innerHTML = erro.toPrecision(1); //mostra o erro com um algarismo significativo
}
function fatorial(num) { //função fatorial de um numero
fat=1;
for (c = num; c>=1; c--) { //para c de num a 1, subtraindo 1 em 1
fat=fat*c;
}
return fat
}