function myValue(){


    const valor1 =parseFloat(prompt('Ahora dame el primer cateto!!, que me des el valor del primer cateto!!:'));
    const valor2 =parseFloat(prompt('Gracias, ahora dame el segundo cateto. RÁPIDO!!:'));

    const hipotenusa = Math.sqrt((valor1*valor1) + (valor2*valor2))

    if(!valor1 || !valor2) {
        alert('Si no queres darme valores de verdad... entonces ni me gasto en calcularte nada!!')
    } else if(valor1 == 1 && valor2 == 1){
        alert('Gracias a las matemáticas modernas esta pregunta ya esta resuelta... pero Pitágoras mató a un aprendíz de su escuela por hacer esa misma pregunta. Tu hipotenuesa es de: ' + hipotenusa)
    } else if (valor1 < 0 || valor2 <0){
        alert('No te pases de listo!! Solo números positivos!!')
    } else {
        alert('Pues, analizando tus datos he llegado a la conclusion que la hipotenusa de tu triangulo es: ' + hipotenusa)
    }
}
