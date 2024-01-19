var x0= document.getElementById("input_x0");




var sel=document.getElementById("selector");

var Ro=0;
var Wn=0;
var k=0;
var y1=0;
var y2=0;
var liminf=0;
var limsup=0;
var boton=document.getElementById("boton");
var botonayuda=document.getElementById("botonayuda");

var r=document.getElementById("resultado");
var r2=document.getElementById("ayuda");

var Tp=0;
var Ganancia=0.0;
var Ts=0;
var expression="";
var aux=0;
var ayudav=0;


function ayuda()
{
    if(ayudav==1)
    {
        ayudav=0;
        r2.innerHTML="";

    }
    else
    {
        ayudav=ayudav+1;
        r2.innerHTML="Este programa realiza la linealizacion de las funciones, seno, coseno, tangenete, logaritmo natural y exponencial en un punto concreto(x0), luego grafica la funcion original(Azul) y la linealizada(Naranja)";
    }
}

  function draw() {
    try {

      x0.value=parseFloat(x0.value);

      
      if (sel.value=="Sin")         //senoidal-------------------------------------------------
      {
        y1=Math.cos(x0.value);
        y2=-x0.value*Math.cos(x0.value)+Math.sin(x0.value);
        if(y2<0)
        {
          y22=y2*-1;
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x - "+ y22.toFixed(3); 
        }
        else if(y2>=0)
        {
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        }
        else
        {
          r.innerHTML="error";
        }

        expression ="sin(x)";
        expression2= y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        y3=x0.value;

        const expr = math.compile(expression)
        const expr2 = math.compile(expression2)
        
        if(x0.value==0)
        {
          liminf=-2;
          limsup=2;
          Tm=1
        }
        else
        {
          liminf=0;
          limsup=y3*2;
          Tm=y3;
        }
        

        const xValues = math.range( liminf , limsup, (0.01*Tm)).toArray()
        const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })
        const trace1 = {
          x: xValues,
          y: yValues,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data = [trace1]
        
        const xValues2 = math.range( liminf , limsup, (0.01*Tm)).toArray()
        const yValues2 = xValues2.map(function (x) {   return expr2.evaluate({x: x})   })
        const trace2 = {
          x: xValues2,
          y: yValues2,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data2 = [trace2]
        


        var layout = {
          autosize: true,
          margin: {
              l: 80,
              r: 50,
              b: 60,
              t: 20,
              pad: 4
            },
          xaxis: { 
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
              color: '#000000',
              tickfont_family:'Arial Black',
              title: {
                text: 'Tiempo(s)',
                autosize: true,
                automargin: false,
                font: {family: 'Arial Black',
                size: 15,color: '#000000'
                }
              }
          },

          yaxis: {
            title: {
              text: 'Amplitud',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
              size: 15,color: '#000000'
              }},
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
            autosize: true,
            automargin: true,
            titlefont: { size:15 },
            color: '#000000'
          },  
          paper_bgcolor: '#2760B8',
          plot_bgcolor: '#c7c7c7',
          showlegend: false
        };
        Plotly.react('plot', data, layout, {displayModeBar: false})
        Plotly.addTraces('plot', data2)        

      }
      else if (sel.value=="Cos")         //coseno-------------------------------------------------
      {
        y1=-Math.sin(x0.value);
        y2=x0.value*Math.sin(x0.value)+Math.cos(x0.value);
        if(y2<0)
        {
          y22=y2*-1;
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x - "+ y22.toFixed(3); 
        }
        else if(y2>=0)
        {
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        }
        else
        {
          r.innerHTML="error";
        }

        expression ="cos(x)";
        expression2= y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        y3=x0.value;

        const expr = math.compile(expression)
        const expr2 = math.compile(expression2)
        if(x0.value==0)
        {
          liminf=-2;
          limsup=2;
          Tm=1
        }
        else
        {
          liminf=0;
          limsup=y3*2;
          Tm=y3;
        }

        const xValues = math.range( liminf , limsup, (0.01*Tm)).toArray()
        const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })
        const trace1 = {
          x: xValues,
          y: yValues,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data = [trace1]
        
        const xValues2 = math.range( liminf , limsup, (0.01*Tm)).toArray()
        const yValues2 = xValues2.map(function (x) {   return expr2.evaluate({x: x})   })
        const trace2 = {
          x: xValues2,
          y: yValues2,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data2 = [trace2]
        


        var layout = {
          autosize: true,
          margin: {
              l: 80,
              r: 50,
              b: 60,
              t: 20,
              pad: 4
            },
          xaxis: { 
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
              color: '#000000',
              tickfont_family:'Arial Black',
              title: {
                text: 'Tiempo(s)',
                autosize: true,
                automargin: false,
                font: {family: 'Arial Black',
                size: 15,color: '#000000'
                }
              }
          },

          yaxis: {
            title: {
              text: 'Amplitud',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
              size: 15,color: '#000000'
              }},
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
            autosize: true,
            automargin: true,
            titlefont: { size:15 },
            color: '#000000'
          },  
          paper_bgcolor: '#2760B8',
          plot_bgcolor: '#c7c7c7',
          showlegend: false
        };
        Plotly.react('plot', data, layout, {displayModeBar: false})
        Plotly.addTraces('plot', data2)
      }
      else if (sel.value=="Log")         //Logaritmo-------------------------------------------------
      {

        y1=1/(x0.value);

        y2=Math.log(x0.value)-1;
        
        if(y2<0)
        {
          console.log(y2);
          y22=y2*-1;
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x - "+ y22.toFixed(3); 
        }
        else if(y2>=0)
        {
          console.log(y2);
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        }
        else
        {
          console.log(y2);
          r.innerHTML="error";
        }

        expression ="log(x)";
        expression2= y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        y3=x0.value;

        const expr = math.compile(expression)
        const expr2 = math.compile(expression2)
        
        if(x0.value==0)
        {
          liminf=-2;
          limsup=2;
          Tm=1
        }
        else
        {
          liminf=0;
          limsup=y3*2;
          Tm=y3;
        }


        const xValues = math.range( liminf , limsup, (0.001*Tm)).toArray()
        const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })
        const trace1 = {
          x: xValues,
          y: yValues,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data = [trace1]


        const xValues2 = math.range( liminf , limsup, (0.001*Tm)).toArray()
        const yValues2 = xValues2.map(function (x) {   return expr2.evaluate({x: x})   })
        const trace2 = {
          x: xValues2,
          y: yValues2,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data2 = [trace2]
        


        var layout = {
          autosize: true,
          margin: {
              l: 80,
              r: 50,
              b: 60,
              t: 20,
              pad: 4
            },
          xaxis: { 
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
              color: '#000000',
              tickfont_family:'Arial Black',
              title: {
                text: 'Tiempo(s)',
                autosize: true,
                automargin: false,
                font: {family: 'Arial Black',
                size: 15,color: '#000000'
                }
              }
          },

          yaxis: {
            title: {
              text: 'Amplitud',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
              size: 15,color: '#000000'
              }},
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
            autosize: true,
            automargin: true,
            titlefont: { size:15 },
            color: '#000000'
          },  
          paper_bgcolor: '#2760B8',
          plot_bgcolor: '#c7c7c7',
          showlegend: false
        };
        Plotly.react('plot', data, layout, {displayModeBar: false})
        Plotly.addTraces('plot', data2)     
      }
 
      else if (sel.value=="Exp")         //exponencial------------------------------------------------
      {

        y1=Math.exp(x0.value);

        y2=Math.exp(x0.value)-Math.exp(x0.value)*x0.value;
        
        if(y2<0)
        {
          console.log(y2);
          y22=y2*-1;
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x - "+ y22.toFixed(3); 
        }
        else if(y2>=0)
        {
          console.log(y2);
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        }
        else
        {
          console.log(y2);
          r.innerHTML="error";
        }

        expression ="exp(x)";
        expression2= y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        y3=x0.value;

        const expr = math.compile(expression)
        const expr2 = math.compile(expression2)
        

        if(x0.value==0)
        {
          liminf=-2;
          limsup=2;
          Tm=1
        }
        else
        {
          liminf=0;
          limsup=y3*2;
          Tm=y3;
        }

        const xValues = math.range( liminf , limsup, (0.001*Tm)).toArray()
        const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })
        const trace1 = {
          x: xValues,
          y: yValues,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data = [trace1]


        const xValues2 = math.range( liminf , limsup, (0.001*Tm)).toArray()
        const yValues2 = xValues2.map(function (x) {   return expr2.evaluate({x: x})   })
        const trace2 = {
          x: xValues2,
          y: yValues2,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data2 = [trace2]
        


        var layout = {
          autosize: true,
          margin: {
              l: 80,
              r: 50,
              b: 60,
              t: 20,
              pad: 4
            },
          xaxis: { 
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
              color: '#000000',
              tickfont_family:'Arial Black',
              title: {
                text: 'Tiempo(s)',
                autosize: true,
                automargin: false,
                font: {family: 'Arial Black',
                size: 15,color: '#000000'
                }
              }
          },

          yaxis: {
            title: {
              text: 'Amplitud',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
              size: 15,color: '#000000'
              }},
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
            autosize: true,
            automargin: true,
            titlefont: { size:15 },
            color: '#000000'
          },  
          paper_bgcolor: '#2760B8',
          plot_bgcolor: '#c7c7c7',
          showlegend: false
        };
        Plotly.react('plot', data, layout, {displayModeBar: false})
        Plotly.addTraces('plot', data2)     

      }

      else if (sel.value=="Tan")         //Tangente-------------------------------------------------
      {

        y1=1/(Math.cos(x0.value)*Math.cos(x0.value));

        y2=Math.tan(x0.value)-(x0.value/(Math.cos(x0.value)*Math.cos(x0.value)));
        
        if(y2<0)
        {
          console.log(y2);
          y22=y2*-1;
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x - "+ y22.toFixed(3); 
        }
        else if(y2>=0)
        {
          console.log(y2);
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        }
        else
        {
          console.log(y2);
          r.innerHTML="error";
        }

        expression ="tan(x)";
        expression2= y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        y3=x0.value;

        const expr = math.compile(expression)
        const expr2 = math.compile(expression2)
        
        if(x0.value==0)
        {
          liminf=-2;
          limsup=2;
          Tm=1
        }
        else
        {
          liminf=0;
          limsup=y3*2;
          Tm=y3;
        }


        const xValues = math.range( liminf , limsup, (0.001*Tm)).toArray()
        const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })
        const trace1 = {
          x: xValues,
          y: yValues,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data = [trace1]


        const xValues2 = math.range( liminf , limsup, (0.001*Tm)).toArray()
        const yValues2 = xValues2.map(function (x) {   return expr2.evaluate({x: x})   })
        const trace2 = {
          x: xValues2,
          y: yValues2,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data2 = [trace2]
        


        var layout = {
          autosize: true,
          margin: {
              l: 80,
              r: 50,
              b: 60,
              t: 20,
              pad: 4
            },
          xaxis: { 
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
              color: '#000000',
              tickfont_family:'Arial Black',
              title: {
                text: 'Tiempo(s)',
                autosize: true,
                automargin: false,
                font: {family: 'Arial Black',
                size: 15,color: '#000000'
                }
              }
          },

          yaxis: {
            title: {
              text: 'Amplitud',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
              size: 15,color: '#000000'
              }},
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
            autosize: true,
            automargin: true,
            titlefont: { size:15 },
            color: '#000000'
          },  
          paper_bgcolor: '#2760B8',
          plot_bgcolor: '#c7c7c7',
          showlegend: false
        };
        Plotly.react('plot', data, layout, {displayModeBar: false})
        Plotly.addTraces('plot', data2)        

      }
      else if (sel.value=="Cos")
      {
        y1=-Math.sin(x0.value);
        y2=x0.value*Math.sin(x0.value)+Math.cos(x0.value);
        if(y2<0)
        {
          y22=y2*-1;
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x - "+ y22.toFixed(3); 
        }
        else if(y2>0)
        {
          r.innerHTML="La función linealizada es:"+"<br/>"+"y= "+ y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        }
        else
        {
          r.innerHTML="error";
        }

        expression ="cos(x)";
        expression2= y1.toFixed(3) +"*x + "+ y2.toFixed(3);
        y3=x0.value;

        const expr = math.compile(expression)
        const expr2 = math.compile(expression2)
        

        const xValues = math.range( 0 , y3*2, (0.01*y3)).toArray()
        const yValues = xValues.map(function (x) {   return expr.evaluate({x: x})   })
        const trace1 = {
          x: xValues,
          y: yValues,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data = [trace1]
        
        const xValues2 = math.range( 0 , y3*2, (0.01*y3)).toArray()
        const yValues2 = xValues2.map(function (x) {   return expr2.evaluate({x: x})   })
        const trace2 = {
          x: xValues2,
          y: yValues2,
          textfont: {
              family: 'Arial Black',
              size: 18,
              color: '#1f77b4'
            },
          type: 'scatter'
        }
        const data2 = [trace2]
        


        var layout = {
          autosize: true,
          margin: {
              l: 80,
              r: 50,
              b: 60,
              t: 20,
              pad: 4
            },
          xaxis: { 
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
              color: '#000000',
              tickfont_family:'Arial Black',
              title: {
                text: 'Tiempo(s)',
                autosize: true,
                automargin: false,
                font: {family: 'Arial Black',
                size: 15,color: '#000000'
                }
              }
          },

          yaxis: {
            title: {
              text: 'Amplitud',
              autosize: true,
              automargin: false,
              font: {family: 'Arial Black',
              size: 15,color: '#000000'
              }},
            tickfont: {
              family: 'Arial Black',
              size: 24,
              color: 'black'
            },
            autosize: true,
            automargin: true,
            titlefont: { size:15 },
            color: '#000000'
          },  
          paper_bgcolor: '#2760B8',
          plot_bgcolor: '#c7c7c7',
          showlegend: false
        };
        Plotly.react('plot', data, layout, {displayModeBar: false})
        Plotly.addTraces('plot', data2)



      }
      else
      {
          tipo="error determinando el tipo de sistema";
      }
    }
    catch (err) {
      console.error(err)
      alert(err)
    }
  }
botonayuda.addEventListener("click",ayuda);
boton.addEventListener("click",draw);