(function(){/*se crea funcion para que se llame asi misma para protejer el codigo y no mezclar*/
    const sliders=[...document.querySelectorAll('.testimony_body')];/*le pido que a travez de document.queryselectorAll todos los elementos de testimonyu_body que son 3 y lo (...) hace que en vez de ser un nodo sea un arraigh*/
    const buttonNext = document.querySelector('#next');/*constante botton de siguiente y cito la ID de CSS de next*/
    const buttonBefore = document.querySelector('#before');/*hago lo mismo pero con el botton before*/
    let value;
    
    buttonNext.addEventListener('click',()=>{/*creo un evento para el boton NEXT, agarrando la variable y añadiendo AddEventListener cada que se de CLICK se ejecute una funcion*/
        changePosition(1);/*argumento de un +1*/

    });

    buttonBefore.addEventListener('click',()=>{
        changePosition(-1);/*Arguemnto de -1*/
    });

    const changePosition = (add)=>{ /*hacemos quelos datos se alojen en add*/
        const currentTestimony = document.querySelector('.testimony_body--show').dataset.id;/*llama a la seccion testimony_body--show para requerir todo sus elementos particularmente quiero su dataset (ID)*/
        value = Number(currentTestimony);/*hago que value tome los valores que pedi anteriormente que son los ID*/
        value+=add;/*Le sumo el valor que tenemos en la funcion*/


        sliders[Number(currentTestimony)-1].classList.remove('testimony_body--show')/*le quito la clase al elemento acutal de currenttestimony para acceder a sus clases y remover clases testimony_body--show*/ 
        if(value === sliders.length+1 || value ===0){/*la condicion para que si value es igual a slider.lengtf+1 o value = a 0 entre en la condicion si el value se pasa de los numeros todos los elementos que tebgi y o son iguales a 0 entran a la condicion*/
            value = value === 0 ? sliders.length : 1;/*que si value es 0 entonces le doy un valor del slider para que vaya al 3 elemento y si rebasamos quiero que me mande al 1ro*/
        }
        sliders[value-1].classList.add('testimony_body--show')/*digo que los slider aceda a los elementos que tenga value (dataid) tambien quiero obtener sus clases y agregarle la clase testimony_body--show*/


    }
})();