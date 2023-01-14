const fluc_dec = [-4.58, -2.43, -4.23, -1.25, -1.43, 20.64, 8.69, -4.96, -3.14, -4.56, -2.49,
    -19.71, -22.41, -13.72, 15.05, -8.85, -0.64, -17.84, 7.29, -22.27, -26.92, -0.59,
    1.96, 16.39, 20.25, -23.46, -29.29, -1.87, 6.22, -26.50, -24.68, -2.79, 14.44, -8.62,
    -21.11, -2.03, -14.35, -4.63, 0.36, -11.74, 12.07, 23.52, -7.99, 9.96, -8.15, -27.61,
    25.11, -21.22, -2.81, -22.89];

var stock_decrease = [
    {
      "trial": 1,
      "fluctuation": -4.58,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.lineTo(10,4.58)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -4.58,
      "condition": "decrease",
    },
    {
      "trial": 2,
      "fluctuation": -2.429560396,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300)
        ctx.rotate(-Math.PI*0.5)
        ctx.font = "18px sans-serif"
        ctx.fillText('Global Market Value',-70,20) 
        ctx.stroke();

        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0);
        ctx.lineTo(10,4.58);
        ctx.stroke()
        
        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(10, 4.58)
          ctx.lineTo(20,7.01)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -7.01,
      "condition": "decrease",
    },
    {
      "trial": 3,
      "fluctuation": -4.23,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<2; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(20, 7.01)
          ctx.lineTo(30,11.24)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -11.24,
      "condition": "decrease",
    },
    {
      "trial": 4,
      "fluctuation": -1.249992466,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<3; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(30, 11.24)
          ctx.lineTo(40,12.49)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -12.49,
      "condition": "decrease",
    },
    {
      "trial": 5,
      "fluctuation": -1.433133369,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<4; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(40, 12.49)
          ctx.lineTo(50,13.92)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -13.92,
      "condition": "decrease",
    },
    {
      "trial": 6,
      "fluctuation": 20.63697235,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<5; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(50, 13.92)
          ctx.lineTo(60, -6.71)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 6.71,
      "condition": "decrease",
    },
    {
      "trial": 7,
      "fluctuation": 8.691330095,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<6; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(60, -6.71)
          ctx.lineTo(70, -15.4)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 15.4,
      "condition": "decrease",
    },
    {
      "trial": 8,
      "fluctuation": -4.962851336,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<7; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(70, -15.4)
          ctx.lineTo(80, -10.44)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 10.44,
      "condition": "decrease",
    },
    {
      "trial": 9,
      "fluctuation": -3.138443901,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<8; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(80, -10.44)
          ctx.lineTo(90, -7.3)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 7.3,
      "condition": "decrease",
    },
    {
      "trial": 10,
      "fluctuation": -4.55876501,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<9; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(90, -7.3)
          ctx.lineTo(100, -2.74)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 2.74,
      "condition": "decrease",
    },
    {
      "trial": 11,
      "fluctuation": -2.490989549,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<10; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(100, -2.74)
          ctx.lineTo(110, -0.25)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 0.25,
      "condition": "decrease",
    },
    {
      "trial": 12,
      "fluctuation": -19.70720389,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<11; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(110, -0.25)
          ctx.lineTo(120, 19.45)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -19.45,
      "condition": "decrease",
    },
    {
      "trial": 13,
      "fluctuation": -22.40588311,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<12; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(120, 19.45)
          ctx.lineTo(130, 41.86)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -41.86,
      "condition": "decrease",
    },
    {
      "trial": 14,
      "fluctuation": -13.72256535,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<13; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(130, 41.86)
          ctx.lineTo(140, 55.58)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -55.58,
      "condition": "decrease",
    },
    {
      "trial": 15,
      "fluctuation": 15.05052313,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<14; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(140, 55.58)
          ctx.lineTo(150, 40.53)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -40.53,
      "condition": "decrease",
    },
    {
      "trial": 16,
      "fluctuation": -8.847914651,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<15; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(150, 40.53)
          ctx.lineTo(160, 49.38)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -49.38,
      "condition": "decrease",
    },
    {
      "trial": 17,
      "fluctuation": -0.63599894,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<16; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(160, 49.38)
          ctx.lineTo(170, 50.02)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -50.02,
      "condition": "decrease",
    },
    {
      "trial": 18,
      "fluctuation": -17.84022274,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<17; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(170, 50.02)
          ctx.lineTo(180, 67.86)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -67.86,
      "condition": "decrease",
    },
    {
      "trial": 19,
      "fluctuation": 7.298697127,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<18; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(180, 67.86)
          ctx.lineTo(190,60.56)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -60.56,
      "condition": "decrease",
    },
    {
      "trial": 20,
      "fluctuation": -22.26506314,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<19; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(190, 60.56)
          ctx.lineTo(200, 82.82)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -82.82,
      "condition": "decrease",
    },
    {
      "trial": 21,
      "fluctuation": -26.92327238,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<20; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(200, 82.82)
          ctx.lineTo(210, 109.75)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -109.75,
      "condition": "decrease",
    },
    {
      "trial": 22,
      "fluctuation": -0.595369451,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<21; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(210, 109.75)
          ctx.lineTo(220, 110.34)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -110.34,
      "condition": "decrease",
    },
    {
      "trial": 23,
      "fluctuation": 1.964034816,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<22; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(220, 110.34)
          ctx.lineTo(230, 108.38)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -108.38,
      "condition": "decrease",
    },
    {
      "trial": 24,
      "fluctuation": 16.38874906,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<23; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(230, 108.38)
          ctx.lineTo(240, 91.99)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -91.99,
      "condition": "decrease",
    },
    {
      "trial": 25,
      "fluctuation": 20.2489658,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<24; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(240, 91.99)
          ctx.lineTo(250, 71.74)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -71.74,
      "condition": "decrease",
    },
    {
      "trial": 26,
      "fluctuation": -23.46128917,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<25; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(250, 71.74)
          ctx.lineTo(260, 95.2)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -95.2,
      "condition": "decrease",
    },
    {
      "trial": 27,
      "fluctuation": -29.28950925,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<26; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(260, 95.2)
          ctx.lineTo(270, 124.49)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -124.49,
      "condition": "decrease",
    },
    {
      "trial": 28,
      "fluctuation": -1.869983349,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<27; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(270, 124.49)
          ctx.lineTo(280, 126.36)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -126.36,
      "condition": "decrease",
    },
    {
      "trial": 29,
      "fluctuation": 6.216458423,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<28; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(280, 126.36)
          ctx.lineTo(290, 120.14)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -120.14,
      "condition": "decrease",
    },
    {
      "trial": 30,
      "fluctuation": -26.50094087,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<29; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(290, 120.14)
          ctx.lineTo(300, 146.64)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -146.64,
      "condition": "decrease",
    },
    {
      "trial": 31,
      "fluctuation": -24.67827908,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<30; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(300, 146.64)
          ctx.lineTo(310, 171.32)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -171.32,
      "condition": "decrease",
    },
    {
      "trial": 32,
      "fluctuation": -2.793042018,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<31; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(310, 171.32)
          ctx.lineTo(320, 174.12)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -174.12,
      "condition": "decrease",
    },
    {
      "trial": 33,
      "fluctuation": 14.43855909,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<32; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(320, 174.12)
          ctx.lineTo(330, 159.68)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -159.68,
      "condition": "decrease",
    },
    {
      "trial": 34,
      "fluctuation": -8.618069364,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<33; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(330, 159.68)
          ctx.lineTo(340, 168.29)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -168.29,
      "condition": "decrease",
    },
    {
      "trial": 35,
      "fluctuation": -21.10523155,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<34; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(340, 168.29)
          ctx.lineTo(350, 189.4)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -189.4,
      "condition": "decrease",
    },
    {
      "trial": 36,
      "fluctuation": -2.028636665,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<35; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(350, 189.4)
          ctx.lineTo(360, 191.43)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -191.43,
      "condition": "decrease",
    },
    {
      "trial": 37,
      "fluctuation": -14.35054733,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<36; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(360, 191.43)
          ctx.lineTo(370, 205.78)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -205.78,
      "condition": "decrease",
    },
    {
      "trial": 38,
      "fluctuation": -4.633774637,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<37; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(370, 205.78)
          ctx.lineTo(380, 210.41)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -210.41,
      "condition": "decrease",
    },
    {
      "trial": 39,
      "fluctuation": 0.363555088,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<38; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(380, 210.41)
          ctx.lineTo(390, 210.05)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -210.05,
      "condition": "decrease",
    },
    {
      "trial": 40,
      "fluctuation": -11.74299984,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<39; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(390, 210.05)
          ctx.lineTo(400, 221.79)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -221.79,
      "condition": "decrease",
    },
    {
      "trial": 41,
      "fluctuation": 12.07214713,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<40; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(400, 221.79)
          ctx.lineTo(410, 209.72)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -209.72,
      "condition": "decrease",
    },
    {
      "trial": 42,
      "fluctuation": 23.51775958,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<41; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(410, 209.72)
          ctx.lineTo(420, 186.2)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -186.2,
      "condition": "decrease",
    },
    {
      "trial": 43,
      "fluctuation": -7.987432194,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<42; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(420, 186.2)
          ctx.lineTo(430, 194.19)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -194.19,
      "condition": "decrease",
    },
    {
      "trial": 44,
      "fluctuation": 9.956503467,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<43; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(430, 194.19)
          ctx.lineTo(440, 184.23)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -184.23,
      "condition": "decrease",
    },
    {
      "trial": 45,
      "fluctuation": -8.145885467,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<44; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(440, 184.23)
          ctx.lineTo(450, 192.38)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -192.38,
      "condition": "decrease",
    },
    {
      "trial": 46,
      "fluctuation": -27.60818489,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<45; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(450, 192.38)
          ctx.lineTo(460, 219.99)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -219.99,
      "condition": "decrease",
    },
    {
      "trial": 47,
      "fluctuation": 25.10852147,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<46; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(460, 219.99)
          ctx.lineTo(470, 194.88)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -194.88,
      "condition": "decrease",
    },
    {
      "trial": 48,
      "fluctuation": -21.2206738,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<47; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(470, 194.88)
          ctx.lineTo(480, 216.1)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -216.1,
      "condition": "decrease",
    },
    {
      "trial": 49,
      "fluctuation": -2.812880939,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<48; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(480, 216.1)
          ctx.lineTo(490, 218.91)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -218.91,
      "condition": "decrease",
    },
    {
      "trial": 50,
      "fluctuation": -22.88838898,
      "graph": (c) => {
        var ctx = c.getContext('2d');
        
        ctx.beginPath();
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 1.5;
        // x axis
        ctx.moveTo(50,300);
        ctx.lineTo(550, 300);
        // y axis
        ctx.moveTo(50,60);
        ctx.lineTo(50, 540);
        // upper tick
        ctx.moveTo(50, 60);
        ctx.lineTo(60, 70);
        //lower tick
        ctx.moveTo(50, 540);
        ctx.lineTo(60, 530);
        // label
        ctx.translate(10, 300);
        ctx.rotate(-Math.PI*0.5);
        ctx.font = "18px sans-serif";
        ctx.fillText('Global Market Value',-70,20);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.lineWidth = 7;
        ctx.strokeStyle = '#D3C704';
        ctx.lineCap = 'round';
        ctx.rotate(Math.PI*0.5);
        ctx.translate(40,0);
        ctx.moveTo(0,0)

        let x = 0;
        let y=0;
        for (let i=0; i<49; i++) {
          x += 10;
          y -= fluc_dec[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(490, 218.91)
          ctx.lineTo(500, 241.8)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -241.8,
      "condition": "decrease",
    }
  ]