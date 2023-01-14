const fluc_inc = [6.81, -17.87, 23.15, -8.40, -12.28, -2.09, 4.96, 21.17, -11.94, 19.73,
    28.78, 13.93, -20.88, 11.22, 28.64, 8.29, -29.26, -11.55, 26.72, 28.64, -6.71,
    24.24, -18.06, 15.68, -20.42, -25.18, 2.46, 19.43, -6.08, -6.32, 18.81, -5.19,
    -11.86, -14.79, 24.90, 19.96, 4.99, 25.02, 28.86, -11.48, 7.31, 1.97, 2.55,
    8.06, 24.73, 26.96, -21.55, -8.63, 7.77, -7.60]

var stock_increase = [
    {
      "trial": 1,
      "fluctuation": 6.81,
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
          ctx.lineTo(10, -6.81)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 6.81,
      "condition": "increase",
    },
    {
      "trial": 2,
      "fluctuation": -17.87,
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
        ctx.lineTo(10,-6.81);
        ctx.stroke()
        
        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(10, -6.81)
          ctx.lineTo(20, 11.06)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -11.06,
      "condition": "increase",
    },
    {
      "trial": 3,
      "fluctuation": 23.15,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(20, 11.06)
          ctx.lineTo(30, -12.09)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 12.09,
      "condition": "increase",
    },
    {
      "trial": 4,
      "fluctuation": -8.40,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(30, -12.09)
          ctx.lineTo(40, -3.69)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 3.69,
      "condition": "increase",
    },
    {
      "trial": 5,
      "fluctuation": -12.28,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(40, -3.69)
          ctx.lineTo(50, 8.59)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -8.59,
      "condition": "increase",
    },
    {
      "trial": 6,
      "fluctuation": -2.09,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(50, 8.59)
          ctx.lineTo(60, 10.68)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -10.68,
      "condition": "increase",
    },
    {
      "trial": 7,
      "fluctuation": 4.96,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(60, 10.68)
          ctx.lineTo(70, 5.72)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -5.72,
      "condition": "increase",
    },
    {
      "trial": 8,
      "fluctuation": 21.17,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(70, 5.72)
          ctx.lineTo(80, -15.45)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 15.45,
      "condition": "increase",
    },
    {
      "trial": 9,
      "fluctuation": -11.94,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(80, -15.45)
          ctx.lineTo(90, -3.51)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 3.51,
      "condition": "increase",
    },
    {
      "trial": 10,
      "fluctuation": 19.73,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(90, -3.51)
          ctx.lineTo(100, -23.23)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 23.23,
      "condition": "increase",
    },
    {
      "trial": 11,
      "fluctuation": 28.78,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(100, -23.23)
          ctx.lineTo(110, -52.02)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 52.02,
      "condition": "increase",
    },
    {
      "trial": 12,
      "fluctuation": 13.93,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(110, -52.02)
          ctx.lineTo(120, -65.95)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 65.95,
      "condition": "increase",
    },
    {
      "trial": 13,
      "fluctuation": -20.88,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(120, -65.95)
          ctx.lineTo(130, -45.07)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 45.07,
      "condition": "increase",
    },
    {
      "trial": 14,
      "fluctuation": 11.22,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(130, -45.07)
          ctx.lineTo(140, -56.29)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 56.29,
      "condition": "increase",
    },
    {
      "trial": 15,
      "fluctuation": 28.64,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(140, -56.29)
          ctx.lineTo(150, -84.93)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 84.93,
      "condition": "increase",
    },
    {
      "trial": 16,
      "fluctuation": 8.29,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(150, -84.93)
          ctx.lineTo(160, -93.22)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 93.22,
      "condition": "increase",
    },
    {
      "trial": 17,
      "fluctuation": -29.26,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(160, -93.22)
          ctx.lineTo(170, -63.97)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 63.97,
      "condition": "increase",
    },
    {
      "trial": 18,
      "fluctuation": -11.55,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(170, -63.97)
          ctx.lineTo(180, -52.42)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 52.42,
      "condition": "increase",
    },
    {
      "trial": 19,
      "fluctuation": 26.72,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(180, -52.42)
          ctx.lineTo(190, -79.13)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 79.13,
      "condition": "increase",
    },
    {
      "trial": 20,
      "fluctuation": 28.64,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(190, -79.13)
          ctx.lineTo(200, -107.78)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 107.78,
      "condition": "increase",
    },
    {
      "trial": 21,
      "fluctuation": -6.71,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(200, -107.78)
          ctx.lineTo(210, -101.06)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 101.06,
      "condition": "increase",
    },
    {
      "trial": 22,
      "fluctuation": 24.24,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(210, -101.06)
          ctx.lineTo(220, -125.30)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 125.30,
      "condition": "increase",
    },
    {
      "trial": 23,
      "fluctuation": -18.06,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(220, -125.3)
          ctx.lineTo(230, -107.24)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 107.24,
      "condition": "increase",
    },
    {
      "trial": 24,
      "fluctuation": 15.68,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(230, -107.24)
          ctx.lineTo(240, -122.91)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 122.91,
      "condition": "increase",
    },
    {
      "trial": 25,
      "fluctuation": -20.42,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(240, -122.91)
          ctx.lineTo(250, -102.50)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 102.50,
      "condition": "increase",
    },
    {
      "trial": 26,
      "fluctuation": -25.18,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(250, -102.50)
          ctx.lineTo(260, -77.32)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 77.32,
      "condition": "increase",
    },
    {
      "trial": 27,
      "fluctuation": 2.46,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(260, -77.32)
          ctx.lineTo(270, -79.78)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 79.78,
      "condition": "increase",
    },
    {
      "trial": 28,
      "fluctuation": 19.43,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(270, -79.78)
          ctx.lineTo(280, -99.21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 99.21,
      "condition": "increase",
    },
    {
      "trial": 29,
      "fluctuation": -6.08,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(280, -99.21)
          ctx.lineTo(290, -93.13)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 93.13,
      "condition": "increase",
    },
    {
      "trial": 30,
      "fluctuation": -6.32,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(290, -93.13)
          ctx.lineTo(300, -86.81)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 86.81,
      "condition": "increase",
    },
    {
      "trial": 31,
      "fluctuation": 18.81,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(300, -86.81)
          ctx.lineTo(310, -105.62)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 105.62,
      "condition": "increase",
    },
    {
      "trial": 32,
      "fluctuation": -5.19,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(310, -105.62)
          ctx.lineTo(320, -100.43)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 100.43,
      "condition": "increase",
    },
    {
      "trial": 33,
      "fluctuation": -11.86,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(320, -100.43)
          ctx.lineTo(330, -88.57)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 88.57,
      "condition": "increase",
    },
    {
      "trial": 34,
      "fluctuation": -14.79,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(330, -88.57)
          ctx.lineTo(340, -73.78)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 73.78,
      "condition": "increase",
    },
    {
      "trial": 35,
      "fluctuation": 24.90,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(340, -73.78)
          ctx.lineTo(350, -98.68)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 98.68,
      "condition": "increase",
    },
    {
      "trial": 36,
      "fluctuation": 19.96,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(350, -98.68)
          ctx.lineTo(360, -118.63)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 118.63,
      "condition": "increase",
    },
    {
      "trial": 37,
      "fluctuation": 4.99,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(360, -118.63)
          ctx.lineTo(370, -123.63)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 123.63,
      "condition": "increase",
    },
    {
      "trial": 38,
      "fluctuation": 25.02,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(370, -123.63)
          ctx.lineTo(380, -148.64)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 148.64,
      "condition": "increase",
    },
    {
      "trial": 39,
      "fluctuation": 28.86,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(380, -148.64)
          ctx.lineTo(390, -177.50)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 177.50,
      "condition": "increase",
    },
    {
      "trial": 40,
      "fluctuation": -11.48,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(390, -177.50)
          ctx.lineTo(400, -166.03)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 166.03,
      "condition": "increase",
    },
    {
      "trial": 41,
      "fluctuation": 7.31,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(400, -166.03)
          ctx.lineTo(410, -173.33)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 173.33,
      "condition": "increase",
    },
    {
      "trial": 42,
      "fluctuation": 1.97,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(410, -173.33)
          ctx.lineTo(420, -175.30)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 175.30,
      "condition": "increase",
    },
    {
      "trial": 43,
      "fluctuation": 2.55,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(420, -175.30)
          ctx.lineTo(430, -177.86)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 177.86,
      "condition": "increase",
    },
    {
      "trial": 44,
      "fluctuation": 8.06,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(430, -177.86)
          ctx.lineTo(440, -185.91)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 185.91,
      "condition": "increase",
    },
    {
      "trial": 45,
      "fluctuation": 24.73,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(440, -185.91)
          ctx.lineTo(450, -210.64)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 210.64,
      "condition": "increase",
    },
    {
      "trial": 46,
      "fluctuation": 26.96,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(450, -210.64)
          ctx.lineTo(460, -237.60)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 237.60,
      "condition": "increase",
    },
    {
      "trial": 47,
      "fluctuation": -21.55,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(460, -237.60)
          ctx.lineTo(470, -216.05)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 216.05,
      "condition": "increase",
    },
    {
      "trial": 48,
      "fluctuation": -8.63,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(470, -216.05)
          ctx.lineTo(480, -207.42)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 207.42,
      "condition": "increase",
    },
    {
      "trial": 49,
      "fluctuation": 7.77,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(480, -207.42)
          ctx.lineTo(490, -215.19)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 215.19,
      "condition": "increase",
    },
    {
      "trial": 50,
      "fluctuation": -7.60,
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
          y -= fluc_inc[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(490, -215.19)
          ctx.lineTo(500, -207.60)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 207.60,
      "condition": "increase",
    }
  ]