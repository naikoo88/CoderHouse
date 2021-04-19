 $(document).ready(function(){
     
     //OCULTAR TODOS LOS ELEMENTOS DEL CV
        console.log('Arranco el script');
        $('.nc_item').hide();
        console.log('Se ocultan todos los items');
        $('#cv_item_default').show();
        console.log('Muestro unicamente el dafault');
     
     //SI SE MUESTRA UNA OPCION SE OCULTAN LAS OTRAS
        $('.collapse').on('show.bs.collapse', function () {
            console.log('Se selecciono un selector');
            $('.collapse.show').each(function(){
                $(this).collapse('hide');
                console.log('Se colapsan otro selector');
                $('.nc_item').hide();
                console.log('Se ocultan los items abiertos');
            });
        });
        
     
     //AL ABRIR UNA OPCION, LA PANTALLA SCROLLEA PARA QUE SE DEJE VER
        $('.btn_icon_select').click(function(){
            console.log('Se dio click a un .selector mobile. Escroleando:...');
             $('html,body').animate({
                    scrollTop: $('.nc_cv_selector').offset().top
                }, 500); 
            console.log('Escroleo finalizado');
        });
     
     
     // SI HAY OTRO ITEM DEL CV ABIERTO SE CIERRA
     // MUESTRA ITEM DEL CV
     // SCROLEA HASTA 20PX POR ENCIMA DE LA CABECERA DEL ITEM SELECCIONADO  
        $('.selector').change(function(){
            console.log('Se hizo un cambio en algun selector');
            $('.nc_item').hide();
            console.log('Se ocultan los items');
            $('#cv_' + $(this).val()).show();
            console.log('Se muestra el item correspondinete al campo seleccionado. En este caso: #cv_' + $(this).val() + '. Ahora escroleando:...');
            $('html,body').animate({
                    scrollTop: $('#cv_' + $(this).val()).offset().top
                }, 500); 
            console.log('Escroleo finalizado');
            $('.selector').val('');
            console.log('Se reincian los selectores');
            
        });
     
     
     //OCULTAR LOS ITEMS SI SE COLAPSA EL SELECTOR EN MOBILE
      $('.collapse').on('hide.bs.collapse', function () {
                console.log('Se ocultaron los .selectors mobile.');
                $('.nc_item').hide();
                console.log('Se cierran todos los items');
                $('#nc_item_default').show();
                console.log('Se muestra deja unicamente el item dafault');
        });
    });
