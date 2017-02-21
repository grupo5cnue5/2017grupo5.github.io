function fper() { //esta função poderia estar no arquivo html, entre <script></script> 
b = document.getElementById("base").value; //lê o número na caixa "base", no arquivo html, e gravando em b 
b=Number(b); //para garantir que é número 
a = document.getElementById("altura").value; //lê o número na caixa "altura", no arquivo html, e gravando em a 
a=Number(a); //para garantir que é número
h=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
per=h+b+a;
document.getElementById("dper").innerHTML = per; //mostrando a área em "dper", no html 
}