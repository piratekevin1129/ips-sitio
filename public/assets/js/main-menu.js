////////////BOTONES DEL HOME//////////////
function overBodyBtn(btn){
    jQuery('#img-'+btn).attr('class', 'body-img body-img-over')
}
function outBodyBtn(btn){
    jQuery('#img-'+btn).attr('class', 'body-img')
}

function clickSwitch(sw){
    var status = sw.getAttribute('status')
    if(status=="off"){
        sw.className = 'switch-button switch-button-on'
        sw.setAttribute('status','on')
        setContraste()
    }else{
        sw.className = 'switch-button switch-button-off'
        sw.setAttribute('status','off')
        unsetContraste()
    }
}
function clickSwitch2(sw){
    var status = sw.getAttribute('status')
    var sww = sw.getElementsByTagName('div')[0]
    if(status=="off"){
        sww.className = 'widget-mobile-appearance-btn widget-mobile-appearance-btn-desactived'
        sw.setAttribute('status','on')
        setContraste()
    }else{
        sww.className = 'widget-mobile-appearance-btn widget-mobile-appearance-btn-actived'
        sw.setAttribute('status','off')
        unsetContraste()
    }
}

function setContraste(){
    /*var contents_new = document.getElementsByClassName('content-newhome')
    for(var cn = 0;cn<contents_new.length;cn++){
        contents_new[cn].classList.add('content-dark')
    }*/
    document.body.classList.add('body-dark')
    document.getElementById('header-newhome').classList.add('header-dark')
    document.getElementById('footer-newhome').classList.add('footer-dark')

    //la variable url_current_accesibilidad la cogemos del modulo header-new
    if(
        url_current_accesibilidad=='https://www.epssura.com'||
        url_current_accesibilidad=='https://www.epssura.com/'||
        url_current_accesibilidad=='epssura.com'||
        url_current_accesibilidad=='epssura.com/'
    ){
        //es el home
    }else{
        //agregamos clase para otros elementos
        document.body.classList.add('body-dark-internas')
    }
    
}
function unsetContraste(){
    var contents_new = document.getElementsByClassName('content-newhome')
    for(var cn = 0;cn<contents_new.length;cn++){
        contents_new[cn].classList.remove('content-dark')
    }
    document.body.classList.remove('body-dark')
    document.getElementById('header-newhome').classList.remove('header-dark')
    document.getElementById('footer-newhome').classList.remove('footer-dark')

    //la variable url_current_accesibilidad la cogemos del modulo header-new
    if(
        url_current_accesibilidad=='https://www.epssura.com'||
        url_current_accesibilidad=='https://www.epssura.com/'||
        url_current_accesibilidad=='epssura.com'||
        url_current_accesibilidad=='epssura.com/'
    ){
        //es el home
    }else{
        //agregamos clase para otros elementos
        document.body.classList.remove('body-dark-internas')
    }
}

var body_size_levels = ['xxs','xs','s','m','l','xl','xxl'] //=> extra extra small, extra small, small, medium/normal, large, extra large, extra extra large
var actual_body_size_level = 3
var actual_body_size_level_class = 'body-font-size-m'

function clickRestaurarLetraHome(){
    //console.log(body_actual_size)
    
    actual_body_size_level = 3
    var contents_new = document.getElementsByClassName('content-newhome')
    
    for(var cn = 0;cn<contents_new.length;cn++){
        //contents_new[cn].classList.remove(actual_body_size_level_class)
        //contents_new[cn].classList.add('body-font-size-'+actual_body_size_level)

        var h1s = contents_new[cn].getElementsByTagName('h1')
        var h2s = contents_new[cn].getElementsByTagName('h2')
        var h3s = contents_new[cn].getElementsByTagName('h3')
        var h4s = contents_new[cn].getElementsByTagName('h4')
        var h5s = contents_new[cn].getElementsByTagName('h5')
        var h6s = contents_new[cn].getElementsByTagName('h6')
        var ps = contents_new[cn].getElementsByTagName('p')
        var labels = contents_new[cn].getElementsByTagName('label')
        var combinados = [h1s,h2s,h3s,h4s,h5s,h6s,ps,labels]
        var textos = []
        
        for(var c = 0;c<combinados.length;c++){
            for(var cc = 0;cc<combinados[c].length;cc++){
                if(combinados[c][cc].id==''||combinados[c][cc].id==undefined||combinados[c][cc].id==null){
                    combinados[c][cc].setAttribute('id','computed_format_element_'+c+'_'+cc)
                }
                var idname = combinados[c][cc].id
                textos.push(idname)
            }
        }
        //console.log(textos)

        for(var h = 0;h<textos.length;h++){
            var t = document.getElementById(textos[h])
            jQuery(t).removeAttr('style');
        }
    }
    
    document.getElementById('plus-btn').disabled = false
    document.getElementById('minus-btn').disabled = false
}

function clickAumentarLetraHome(){
    //console.log(body_actual_size)
    if(actual_body_size_level<(body_size_levels.length-1)){
        actual_body_size_level++
        var contents_new = document.getElementsByClassName('content-newhome')
        
            for(var cn = 0;cn<contents_new.length;cn++){
                //contents_new[cn].classList.remove(actual_body_size_level_class)
                //contents_new[cn].classList.add('body-font-size-'+actual_body_size_level)

                var h1s = contents_new[cn].getElementsByTagName('h1')
                var h2s = contents_new[cn].getElementsByTagName('h2')
                var h3s = contents_new[cn].getElementsByTagName('h3')
                var h4s = contents_new[cn].getElementsByTagName('h4')
                var h5s = contents_new[cn].getElementsByTagName('h5')
                var h6s = contents_new[cn].getElementsByTagName('h6')
                var ps = contents_new[cn].getElementsByTagName('p')
                var labels = contents_new[cn].getElementsByTagName('label')
                var combinados = [h1s,h2s,h3s,h4s,h5s,h6s,ps,labels]
                var textos = []
                
                for(var c = 0;c<combinados.length;c++){
                    for(var cc = 0;cc<combinados[c].length;cc++){
                        if(combinados[c][cc].id==''||combinados[c][cc].id==undefined||combinados[c][cc].id==null){
                            combinados[c][cc].setAttribute('id','computed_format_element_'+c+'_'+cc)
                        }
                        var idname = combinados[c][cc].id
                        textos.push(idname)
                    }
                }
                //console.log(textos)
    
                for(var h = 0;h<textos.length;h++){
                    var t = document.getElementById(textos[h])
                    //console.log(t)
                    var t_s = window.getComputedStyle(t, null).getPropertyValue('font-size');
                    var t_f = parseInt(t_s);
                    var f_n = (t_f+1)
                    var f_ns = String(f_n+'px')
                    //console.log('font-size: '+t_f)
                    //console.log(f_ns)
                    jQuery(t).attr('style', 'font-size: '+f_ns+' !important');
                    //jQuery(t).css("font-size", f_ns);
                    //t.style.fontSize = '10px !important'
                    //t.style.opacity = '0'
                }
            }
        
        if(actual_body_size_level==(body_size_levels.length-1)){
            document.getElementById('plus-btn').disabled = true
        }
        document.getElementById('minus-btn').disabled = false
        //actual_body_size_level_class = 'body-font-size-'+actual_body_size_level
    }
}

function clickDisminuirLetraHome(){
    //console.log(body_actual_size)
    if(actual_body_size_level>0){
        actual_body_size_level--
        var contents_new = document.getElementsByClassName('content-newhome')

            for(var cn = 0;cn<contents_new.length;cn++){
                //contents_new[cn].classList.remove(actual_body_size_level_class)
                //contents_new[cn].classList.add('body-font-size-'+actual_body_size_level)

                var h1s = contents_new[cn].getElementsByTagName('h1')
                var h2s = contents_new[cn].getElementsByTagName('h2')
                var h3s = contents_new[cn].getElementsByTagName('h3')
                var h4s = contents_new[cn].getElementsByTagName('h4')
                var h5s = contents_new[cn].getElementsByTagName('h5')
                var h6s = contents_new[cn].getElementsByTagName('h6')
                var ps = contents_new[cn].getElementsByTagName('p')
                var labels = contents_new[cn].getElementsByTagName('label')
                var combinados = [h1s,h2s,h3s,h4s,h5s,h6s,ps,labels]
                var textos = []
                
                for(var c = 0;c<combinados.length;c++){
                    for(var cc = 0;cc<combinados[c].length;cc++){
                        if(combinados[c][cc].id==''||combinados[c][cc].id==undefined||combinados[c][cc].id==null){
                            combinados[c][cc].setAttribute('id','computed_format_element_'+c+'_'+cc)
                        }
                        var idname = combinados[c][cc].id
                        textos.push(idname)
                    }
                }
                //console.log(textos)
    
                for(var h = 0;h<textos.length;h++){
                    var t = document.getElementById(textos[h])
                    //console.log(t)
                    var t_s = window.getComputedStyle(t, null).getPropertyValue('font-size');
                    var t_f = parseInt(t_s);
                    var f_n = (t_f-1)
                    var f_ns = String(f_n+'px')
                    //console.log('font-size: '+t_f)
                    //console.log(f_ns)
                    jQuery(t).attr('style', 'font-size: '+f_ns+' !important');
                    //jQuery(t).css("font-size", f_ns);
                    //t.style.fontSize = '10px !important'
                    //t.style.opacity = '0'
                }
            }

        if(actual_body_size_level==0){
            document.getElementById('minus-btn').disabled = true
        }
        document.getElementById('plus-btn').disabled = false
        //actual_body_size_level_class = 'body-font-size-'+actual_body_size_level
    }
}

/////////////MENU HEADER////////////
var global_menu_seguros = null
function overMenuSeguros(menu){
    console.log("este")
    //ocultar todos los menu
    var menus = document.getElementById('seguros-sura-menu').getElementsByClassName('seguros-sura-menu-azul-wraper')
    for(var i = (menus.length-1);i>=0;i--){
        menus[i].className = 'seguros-sura-menu-azul-wraper seguros-sura-menu-azul-wraper-collapsed'
    }
    if(menu!=null&&menu!=undefined){
        global_menu_seguros = menu
    }
    //'seguros-sura-menu-azul-nuestrosproductos' || 'seguros-sura-menu-azul-nuestrosproductos'
    if(global_menu_seguros!=null&&global_menu_seguros!=undefined){
        document.getElementById(global_menu_seguros).className = 'seguros-sura-menu-azul-wraper seguros-sura-menu-azul-wraper-active seguros-sura-menu-azul-wraper-collapsed'
    }
    jQuery('#seguros-sura-menu').attr('class', 'seguros-sura-menu-on')
}

function outMenuSeguros(){
    jQuery('#seguros-sura-menu').attr('class', 'seguros-sura-menu-off')
    jQuery('#menu-hamburguesa').attr('status','closed')
    jQuery('#menu-hamburguesa').attr('class','menu-hamburguesa-closed')
    jQuery('#seguros-sura-menu').attr('class', 'seguros-sura-menu-off')
    //console.log(param)
}

/////////////BUSCADOR/////////////
function clickBuscador(){
    var estado = jQuery('#buscador-btn').attr('status')
    if(estado=='closed'){
        jQuery('#buscador-btn').attr('status','opened')
        jQuery('#buscador-btn').attr('class','buscador-btn-cancel')
        jQuery('#buscador-container').attr('class', 'buscador-container-on')
    }else{
        jQuery('#buscador-btn').attr('status','closed')
        jQuery('#buscador-btn').attr('class','buscador-btn-lupa')
        jQuery('#buscador-container').attr('class', 'buscador-container-off')
    }
    event.preventDefault()
}

function upBuscadorKey(event){
    //console.log(event.keyCode)
    jQuery('#buscador-container-msg').attr('class','buscador-container-msg-off')
    if(event.keyCode=='13'){
        clickBuscadorKey()
        event.preventDefault()
    }
}
function clickBuscadorKey(){
    var value_buscador = jQuery('#buscador_type_text').val()
    var value_buscador_t = value_buscador.trim()
    var length_value = value_buscador_t.split("")
    if(length_value.length>=3){
        location.href = 'index.php/buscadoreps?q='+value_buscador_t
    }else{
        jQuery('#buscador-container-msg').attr('class','buscador-container-msg-on')
    }
}


////////////MENU PAISES///////////
function clickMenuPaises(){
    jQuery('#nav-pais-select-menu').attr('class','nav-pais-select-menu-on')
}
function outMenuPaises(){
    jQuery('#nav-pais-select-menu').attr('class','nav-pais-select-menu-off')
}
function selectPais(pais){
    /*jQuery('#nav-pais-selected').html(String(pais.innerHTML+'<i class="fas fa-caret-down"></i>'))
    jQuery('#nav-pais-select-menu').attr('class','nav-pais-select-menu-off')

    jQuery('#nav-pais-selected2').html(String(pais.innerHTML))
    clickAcordeon(document.getElementById('nav-pais-selected2'))*/
    //location.href = pais
}

/////////////MENU INICIAR SESION///////////

function clickIniciarSesion2(event,btn){
    var status = btn.getAttribute('status')
    if(status=='closed'){
        jQuery('#iniciar-sesion-btn2').attr('status','opened')
        jQuery('#seguros-sura-menu-amarillo-cont').attr('class','seguros-sura-menu-amarillo-expanded')
    }else{
        jQuery('#iniciar-sesion-btn2').attr('status','closed')
        jQuery('#seguros-sura-menu-amarillo-cont').attr('class','seguros-sura-menu-amarillo-collapsed')
    }
    event.preventDefault()
}

/************ACORDEON MENU RESPONSIVE*************/
function clickMenuHamburguesa(){
    var estado = jQuery('#menu-hamburguesa').attr('status')
    if(estado=='closed'){
        jQuery('#menu-hamburguesa').attr('status','opened')
        jQuery('#menu-hamburguesa').attr('class','menu-hamburguesa-opened')
        jQuery('#seguros-sura-menu').attr('class', 'seguros-sura-menu-on')
    }else{
        jQuery('#menu-hamburguesa').attr('status','closed')
        jQuery('#menu-hamburguesa').attr('class','menu-hamburguesa-closed')
        jQuery('#seguros-sura-menu').attr('class', 'seguros-sura-menu-off')
    }
    event.preventDefault()
}

function clickAcordeon(title){
    var padre = title.parentNode
    var clase_padre = padre.className
    var nueva_clase_padre = ''
    var menu = padre.getElementsByTagName('div')[1]
    var title = padre.getElementsByTagName('div')[0]
    //var alto_menu = menu.offsetHeight
    //var alto_title = title.offsetHeight

    if(clase_padre.indexOf('expanded')!=-1){
        //esta abierto, vamos a cerrarlo
        nueva_clase_padre = clase_padre.replace('expanded','collapsed')
        padre.className = nueva_clase_padre
        //padre.style.height = alto_title+'px'
    }else{
        //esta cerrado, vamos a abrirlo
        nueva_clase_padre = clase_padre.replace('collapsed','expanded')
        padre.className = nueva_clase_padre
        //padre.style.height = String(parseInt(alto_menu)+parseInt(alto_title))+'px'
    }
}

function clickAcordeon2(title,contenedor){
    var padre = title.parentNode
    var clase_padre = padre.className
    var nueva_clase_padre = ''
    var menu = padre.getElementsByTagName('ul')[0]
    var title = padre.getElementsByTagName('h5')[0]

    //ocultar todos y de paso el actual
    var cols = document.getElementById(contenedor).getElementsByClassName('seguros-sura-menu-col')
    for(var i = (cols.length-1);i>=0;i--){
        cols[i].className = 'seguros-sura-menu-col seguros-sura-menu-col-collapsed'
    }

    if(clase_padre.indexOf('expanded')!=-1){
        //esta abierto, vamos a cerrarlo
        nueva_clase_padre = clase_padre.replace('expanded','collapsed')
        padre.className = nueva_clase_padre
        //padre.style.height = alto_title+'px'
    }else{
        //esta cerrado, vamos a abrirlo
        nueva_clase_padre = clase_padre.replace('collapsed','expanded')
        padre.className = nueva_clase_padre
        //padre.style.height = String(parseInt(alto_menu)+parseInt(alto_title))+'px'
    }
}

var global_acordeon_group = null
function clickAcordeon3(title){
    if(global_acordeon_group!=null){
        global_acordeon_group.className = 'seguros-sura-menu-col-group seguros-sura-menu-col-group-collapsed'
    }

    var group = title.parentNode
    var clase_padre = group.className

    if(global_acordeon_group==group){
        global_acordeon_group = null
    }else{
        if(clase_padre.indexOf('expanded')==-1){
            //esta collapsed
            group.className = 'seguros-sura-menu-col-group seguros-sura-menu-col-group-expanded'
        }else{
            group.className = 'seguros-sura-menu-col-group seguros-sura-menu-col-group-collapsed'
        }
        global_acordeon_group = group
    }
}


function clickIniciarSesion(btn){
    preventDefaultBtn()
    
    var status = btn.getAttribute('status')
    if(status=='off'){
        btn.className = 'iniciar-sesion-cont-on'
        btn.setAttribute('status','on')
    }else{
        btn.className = ''
        btn.setAttribute('status','off')
    }
}
function blurIniciarSesion(){
    var btn = document.getElementById('iniciar-sesion-cont')
    btn.className = ''
    btn.setAttribute('status','off')
}

function preventDefaultBtn(){
    return false
}

function setModalEnglish(){
    jQuery('#modal-english').attr('class', 'modal-english-on')
}
function unsetModalEnglish(){
    jQuery('#modal-english').attr('class', 'modal-english-off')
}
function setModalEnglish2(){
    jQuery('#modal-english2').attr('class', 'modal-english-on')
}
function unsetModalEnglish2(l){
    jQuery('#modal-english2').attr('class', 'modal-english-off')
    if(l=='eps'){
        location.href='https://www.epssura.com/'
    }else if(l=='arl'){
        location.href='https://www.arlsura.com/'
    }else if(l=='seguros'){
        location.href='/paginas/personas.aspx'
    }
}

//window.onscroll = function(){
    //check alto header
    //var alto_header = document.getElementById('')
//}

/*setTimeout(function(){
    document.getElementById('iniciar-sesion-cont').focus()
},1000)*/