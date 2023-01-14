const fluc_stable = [24.13, 16.12, 9.1, 17.75, -7.43, -27.23, -28.97, 2.79, 12.74, 0.3,
    2.89, 21.11, 11.59, -7.66, 9.92, 24.35, -9.45, -20.46, -26.74, 19.77, -26.74, 
    -22.28, 3.76, 20.56, -1.4, 2.47, 29.15, 1.4, -24.72, 21.73, 3.65, 15.76, -27.76, 
    -7.69, -7.55, 14.98, -17.54, -2.69, 0.49, -10.29, -0.38, -6.86, 19.47, 3.43, 12.96,
    2.28, 20.47, 19.51, 1.8, -16.28];

var stock_stable = [
    {
      "trial": 1,
      "fluctuation": 24.13,
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
          ctx.lineTo(10, -24.13)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 24.13,
      "condition": "stable"
    },
    {
      "trial": 2,
      "fluctuation": 16.12,
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
        ctx.lineTo(10,-24.13);
        ctx.stroke()
        
        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(10, -24.13)
          ctx.lineTo(20, -40.24)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 40.24,
      "condition": "stable"
    },
    {
      "trial": 3,
      "fluctuation": 9.1,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(20, -40.24)
          ctx.lineTo(30, -49.34)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 49.34,
      "condition": "stable"
    },
    {
      "trial": 4,
      "fluctuation": 17.75,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(30, -49.34)
          ctx.lineTo(40, -67.09)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 67.09,
      "condition": "stable"
    },
    {
      "trial": 5,
      "fluctuation": -7.43,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(40, -67.09)
          ctx.lineTo(50, -59.66)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 59.66,
      "condition": "stable"
    },
    {
      "trial": 6,
      "fluctuation": -27.23,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(50, -59.66)
          ctx.lineTo(60, -32.44)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 32.44,
      "condition": "stable"
    },
    {
      "trial": 7,
      "fluctuation": -28.97,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(60, -32.44)
          ctx.lineTo(70, -3.47)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 3.47,
      "condition": "stable"
    },
    {
      "trial": 8,
      "fluctuation": 2.79,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(70, -3.47)
          ctx.lineTo(80, -6.26)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 6.26,
      "condition": "stable"
    },
    {
      "trial": 9,
      "fluctuation": 12.74,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(80, -6.26)
          ctx.lineTo(90, -19.01)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 19.01,
      "condition": "stable"
    },
    {
      "trial": 10,
      "fluctuation": 0.3,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(90, -19.01)
          ctx.lineTo(100, -19.31)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 19.31,
      "condition": "stable"
    },
    {
      "trial": 11,
      "fluctuation": 2.89,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(100, -19.31)
          ctx.lineTo(110, -22.19)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 22.19,
      "condition": "stable"
    },
    {
      "trial": 12,
      "fluctuation": 21.11,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(110, -22.19)
          ctx.lineTo(120, -43.30)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 43.3,
      "condition": "stable"
    },
    {
      "trial": 13,
      "fluctuation": 11.59,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(120, -43.30)
          ctx.lineTo(130, -54.89)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 54.89,
      "condition": "stable"
    },
    {
      "trial": 14,
      "fluctuation": -7.66,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(130, -54.89)
          ctx.lineTo(140, -47.23)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 47.23,
      "condition": "stable"
    },
    {
      "trial": 15,
      "fluctuation": 9.92,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(140, -47.23)
          ctx.lineTo(150, -57.16)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 57.16,
      "condition": "stable"
    },
    {
      "trial": 16,
      "fluctuation": 24.35,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(150, -57.16)
          ctx.lineTo(160, -81.51)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 81.51,
      "condition": "stable"
    },
    {
      "trial": 17,
      "fluctuation": -9.45,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(160, -81.51)
          ctx.lineTo(170, -72.06)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 72.06,
      "condition": "stable"
    },
    {
      "trial": 18,
      "fluctuation": -20.46,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(170, -72.06)
          ctx.lineTo(180, -51.60)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 51.6,
      "condition": "stable"
    },
    {
      "trial": 19,
      "fluctuation": -26.74,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(180, -51.60)
          ctx.lineTo(190, -24.86)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 24.86,
      "condition": "stable"
    },
    {
      "trial": 20,
      "fluctuation": 19.77,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(190, -24.86)
          ctx.lineTo(200, -44.63)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 44.63,
      "condition": "stable"
    },
    {
      "trial": 21,
      "fluctuation": -26.74,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(200, -44.63)
          ctx.lineTo(210, -17.89)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 17.89,
      "condition": "stable"
    },
    {
      "trial": 22,
      "fluctuation": -22.28,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(210, -17.89)
          ctx.lineTo(220, 4.39)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -4.39,
      "condition": "stable"
    },
    {
      "trial": 23,
      "fluctuation": 3.76,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(220, 4.39)
          ctx.lineTo(230, 0.63)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -0.63,
      "condition": "stable"
    },
    {
      "trial": 24,
      "fluctuation": 20.56,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(230, 0.63)
          ctx.lineTo(240, -19.93)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 19.93,
      "condition": "stable"
    },
    {
      "trial": 25,
      "fluctuation": -1.4,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(240, -19.93)
          ctx.lineTo(250, -18.53)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 18.53,
      "condition": "stable"
    },
    {
      "trial": 26,
      "fluctuation": 2.47,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(250, -18.53)
          ctx.lineTo(260, -21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 21,
      "condition": "stable"
    },
    {
      "trial": 27,
      "fluctuation": 29.15,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(260, -21)
          ctx.lineTo(270, -50.15)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 50.15,
      "condition": "stable"
    },
    {
      "trial": 28,
      "fluctuation": 1.4,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(270, -50.15)
          ctx.lineTo(280, -51.55)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 51.55,
      "condition": "stable"
    },
    {
      "trial": 29,
      "fluctuation": -24.72,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(280, -51.55)
          ctx.lineTo(290, -26.83)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 26.83,
      "condition": "stable"
    },
    {
      "trial": 30,
      "fluctuation": 21.73,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(290, -26.83)
          ctx.lineTo(300, -48.56)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 48.56,
      "condition": "stable"
    },
    {
      "trial": 31,
      "fluctuation": 3.65,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(300, -48.56)
          ctx.lineTo(310, -52.21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 52.21,
      "condition": "stable"
    },
    {
      "trial": 32,
      "fluctuation": 15.76,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(310, -52.21)
          ctx.lineTo(320, -67.97)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 67.97,
      "condition": "stable"
    },
    {
      "trial": 33,
      "fluctuation": -27.76,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(320, -67.97)
          ctx.lineTo(330, -40.21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 40.21,
      "condition": "stable"
    },
    {
      "trial": 34,
      "fluctuation": -7.69,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(330, -40.21)
          ctx.lineTo(340, -32.53)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 32.53,
      "condition": "stable"
    },
    {
      "trial": 35,
      "fluctuation": -7.55,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(340, -32.53)
          ctx.lineTo(350, -24.97)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 24.97,
      "condition": "stable"
    },
    {
      "trial": 36,
      "fluctuation": 14.98,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(350, -24.97)
          ctx.lineTo(360, -39.95)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 39.95,
      "condition": "stable"
    },
    {
      "trial": 37,
      "fluctuation": -17.54,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(360, -39.95)
          ctx.lineTo(370, -22.41)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 22.41,
      "condition": "stable"
    },
    {
      "trial": 38,
      "fluctuation": -2.69,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(370, -22.41)
          ctx.lineTo(380, -19.72)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 19.72,
      "condition": "stable"
    },
    {
      "trial": 39,
      "fluctuation": 0.49,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(380, -19.72)
          ctx.lineTo(390, -20.21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 20.21,
      "condition": "stable"
    },
    {
      "trial": 40,
      "fluctuation": -10.29,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(390, -20.21)
          ctx.lineTo(400, -9.92)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 9.92,
      "condition": "stable"
    },
    {
      "trial": 41,
      "fluctuation": -0.38,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(400, -9.92)
          ctx.lineTo(410, -9.53)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 9.53,
      "condition": "stable"
    },
    {
      "trial": 42,
      "fluctuation": -6.86,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(410, -9.53)
          ctx.lineTo(420, -2.67)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 2.67,
      "condition": "stable"
    },
    {
      "trial": 43,
      "fluctuation": 19.47,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(420, -2.67)
          ctx.lineTo(430, -22.14)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 22.14,
      "condition": "stable"
    },
    {
      "trial": 44,
      "fluctuation": 3.43,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(430, -22.14)
          ctx.lineTo(440, -25.58)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 25.58,
      "condition": "stable"
    },
    {
      "trial": 45,
      "fluctuation": 12.96,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(440, -25.58)
          ctx.lineTo(450, -38.54)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 38.54,
      "condition": "stable"
    },
    {
      "trial": 46,
      "fluctuation": 2.28,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(450, -38.54)
          ctx.lineTo(460, -40.82)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 40.82,
      "condition": "stable"
    },
    {
      "trial": 47,
      "fluctuation": 20.47,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(460, -40.82)
          ctx.lineTo(470, -61.29)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 61.29,
      "condition": "stable"
    },
    {
      "trial": 48,
      "fluctuation": 19.51,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(470, -61.29)
          ctx.lineTo(480, -80.8)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 80.8,
      "condition": "stable"
    },
    {
      "trial": 49,
      "fluctuation": 1.8,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(480, -80.8)
          ctx.lineTo(490, -82.59)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 82.59,
      "condition": "stable"
    },
    {
      "trial": 50,
      "fluctuation": -16.28,
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
          y -= fluc_stable[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(490, -82.59)
          ctx.lineTo(500, -66.31)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 66.31,
      "condition": "stable"
    }
  ]