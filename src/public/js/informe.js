var meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Setiembre","Octubre","Noviembre","Diciembre"];
var fecha = new Date()
meses.push(fecha.getMonth()+1);
function NombreDeMeses(x){
    for(var i=0; i <=meses.length; i++){
        if(x==(i+1)){
            return meses[i];
        }
    }
}
var filtro=false;
var month = [];
var nroMonth=[];
var informe =[{
    visit:"",
    date:""
}];
var visit =0;
var date="";
var info = $("#info");
var anio_actual="";
function getFechas(){
    $.ajax({
        url:"informe",
        type:"GET",
        data: fecha,
        success: function(res){
            console.log(res.length);
            // la variable res trae visitas y fechas, si "i"es par = date sino "visit"
            for(var i = 1; i <= (res.length-1); i++){               
                
                if(fecha.getMonth()>4){
                    console.log("junio");
                    if(i%2==0){
                        anio_actual = res[i];
                        // console.log(anio_actual.substr(0,4), " :: ", fecha.getFullYear())
                        if(anio_actual.substr(0,4) == fecha.getFullYear()){
                            date = res[i];
                            
                        informe.push(visit,date.substr(5,2)); 
                        console.log(informe.date);
                        }                                 
                    }
                    else{
                        if(anio_actual.substr(0,4) == fecha.getFullYear()){
                            dvisit = res[i];
                        }                                    
                    }
                }
                if(fecha.getMonth()<5){
                    if(i%2==0){
                        anio_actual = res[i];
                        console.log(anio_actual.substr(0,4), " :: ", fecha.getFullYear())
                        if(anio_actual.substr(0,4) == fecha.getFullYear() || anio_actual.substr(0,4) == (fecha.getFullYear()-1)){
                            date = res[i];
                            
                        informe.push(visit,date.substr(5,2)); 
                        }                                 
                    }
                    else{
                        if(anio_actual.substr(0,4) == fecha.getFullYear() || anio_actual.substr(0,4) == (fecha.getFullYear()-1)){
                            dvisit = res[i];
                        }                                    
                    }
                }
                
            }
            // console.log(informe);
        },
        error:function (xhr, status, error) {
            alert("Error");
        }
    });
}

function Generar6meses(){
    month=[];
    for(var i=0; i < 6; i++){
        if(fecha.getMonth()>5){
            var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
            month.push(mes);
        }
        else{
            if(fecha.getMonth()<6){
                if(fecha.getMonth()==5){
                    var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
                    month.push(mes);
                }
                if(fecha.getMonth()==4){
                    if(i!=5){
                        var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
                        month.push(mes);
                    }
                    else{
                        month.push(NombreDeMeses(12));
                    }
                }
                if(fecha.getMonth()==3){
                    if(i!=4){
                        var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
                        month.push(mes);
                    }
                    else{
                        month.push(NombreDeMeses(12));
                        month.push(NombreDeMeses(11));
                        break
                    }
                }
                if(fecha.getMonth()==2){
                    if(i!=3){
                        var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
                        month.push(mes);
                    }
                    else{
                        month.push(NombreDeMeses(12));
                        month.push(NombreDeMeses(11));
                        month.push(NombreDeMeses(10));
                        break;
                    }
                }
                if(fecha.getMonth()==1){
                    if(i!=2){
                        var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
                        month.push(mes);
                    }
                    else{
                        month.push(NombreDeMeses(12));
                        month.push(NombreDeMeses(11));
                        month.push(NombreDeMeses(10));
                        month.push(NombreDeMeses(9));
                        break;
                    }
                }
                if(fecha.getMonth()==0){
                    if(i!=1){
                        var mes = NombreDeMeses((fecha.getMonth()+1)-(i))
                        month.push(mes);
                    }
                    else{
                        month.push(NombreDeMeses(12));
                        month.push(NombreDeMeses(11));
                        month.push(NombreDeMeses(10));
                        month.push(NombreDeMeses(9));
                        month.push(NombreDeMeses(8));
                        break;
                    }
                }
            }
        }
    }
}
getFechas();
console.log(informe);
Generar6meses();
var menorQueJunio=false;
var mes1,mes2,mes3,mes4,mes5,mes6;
$("#grafic").click( async function(){
    obtenerNroFechasParaVisitas(fecha.getMonth());
    console.log(mes1);
    await visitasPorMeses(mes1,mes2,mes3,mes4,mes5,mes6);
    await GraficaGlobal(visitasMes1,visitasMes2, visitasMes3,visitasMes4,visitasMes5,visitasMes6,(month[5]),(month[4]),(month[3]),(month[2]),(month[1]),(month[0]));
    
    
});
function obtenerNroFechasParaVisitas(dateMonth){

    if(dateMonth>4){
        mes1=(fecha.getMonth()-4);
        mes2=(fecha.getMonth()-3);
        mes3=(fecha.getMonth()-2);
        mes4=(fecha.getMonth()-1);
        mes5=fecha.getMonth();
        mes6=(fecha.getMonth()+1);

    }
    else{
        if(dateMonth==4){
            mes1=12;
            mes2=(fecha.getMonth()-3);
            mes3=(fecha.getMonth()-2);
            mes4=(fecha.getMonth()-1);
            mes5=fecha.getMonth();
            mes6=(fecha.getMonth()+1);
        }
        if(dateMonth==3){
            mes1=11;
            mes2=12;
            mes3=(fecha.getMonth()-2);
            mes4=(fecha.getMonth()-1);
            mes5=fecha.getMonth();
            mes6=(fecha.getMonth()+1);
        }
        if(dateMonth==2){
            mes1=10;
            mes2=11
            mes3=12
            mes4=(fecha.getMonth()-1);
            mes5=fecha.getMonth();
            mes6=(fecha.getMonth()+1);
        }
        if(dateMonth==1){
            mes1=9;
            mes2=10;
            mes3=11;
            mes4=12;
            mes5=fecha.getMonth();
            mes6=(fecha.getMonth()+1);
        }
        if(dateMonth==0){
            mes1=8;
            mes2=9;
            mes3=10;
            mes4=11;
            mes5=12;
            mes6=(fecha.getMonth()+1);
        }
    }
}
var visitasMes1,
visitasMes2,
visitasMes3,
visitasMes4,
visitasMes5,
visitasMes6,
visitaArray1=[],
visitaArray2=[],
visitaArray3=[],
visitaArray4=[],
visitaArray5=[],
visitaArray6=[];
function visitasPorMeses(m5,m4,m3,m2,m1,m0){
    
    console.log("informe: ",informe[3]," m5:",m5,m4,m3,m2,m1,m0);
    for(var i=1; i<informe.length; i++){
        console.log("primer mes: ",informe[i*2]," : ",m5);
        if(informe[i*2]==m5){
           
            visitaArray1.push(informe[i]);
        }
        if(informe[i*2]==m4){
            
            visitaArray2.push(informe[i]);
        }
        if(informe[i*2]==m3){
            
            visitaArray3.push(informe[i]);
        }
        if(informe[i*2]==m2){
            visitaArray4.push(informe[i]);
        }
        if(informe[i*2]==m1){
            visitaArray5.push(informe[i]);
        }
        if(informe[i*2]==m0){
            visitaArray6.push(informe[i]);
        }
    }
    visitasMes1 = visitaArray1.length;
    visitasMes2 = visitaArray2.length;
    visitasMes3 = visitaArray3.length;
    visitasMes4 = visitaArray4.length;
    visitasMes5 = visitaArray5.length;
    visitasMes6 = visitaArray6.length;        
}
var i=1;
function GraficaGlobal(v1,v2, v3,v4,v5,v6,m5,m4,m3,m2,m1,m0){   
    // console.log(filtro);
    if(filtro){
        i++;
        v1=visitasMes1/i;
        v2=visitasMes2/i;
        v3=visitasMes3/i;
        v4=visitasMes4/i;
        v5=visitasMes5/i;
        v6=visitasMes6/i;     
    }
    $(function($){
        $('#grafica').highcharts({
            title:{text:'Estádisticas de la Web de '+fecha.getFullYear()},
            xAxis:{categories:[m5,m4,m3,m2,m1,m0]},
            yAxis:{title:'Porcentaje %',plotLines:[{value:0,width:1,color:'#000033'}]},
            tooltip:{valueSuffix:'Visitas'},           
            series:[{type: 'column',name: 'Visitas',data: [v1,v2,v3,v4,v5,v6]},         
        ]       
        });   
           
    });  
    filtro = true;
}
