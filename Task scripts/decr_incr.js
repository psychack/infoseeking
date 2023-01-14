const fluc_decr_incr = [-24.77, -8.32, -6.42, 14.06, -9.09, -23.32, -11.44, -5.94, 
    -2.18, 9.73, 8.28, 23.42, -9.11, 10.25, -2.82, 24.58, 26.85, -5.77, 21.94, 29.83, 
    17.69, -8.08, 8.25, 16.89, 4.65, 9.54, 23.03, -12.92, 27.12, 25.98, 0.28, 17.99,
    -12.46, 0.01, -5.49, 13.27, 3.91, -20.80, 8.98, -15.51, -25.39, 11.80, -21.04,
    27.62, 12.12, 4.87, -2.69, -14.82, -3.72, -10.84];

var stock_decr_incr = [
    {
      "trial": 1,
      "fluctuation": -24.77,
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
          ctx.lineTo(10, 24.77)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -24.77,
      "condition": "decr_incr"
    },
    {
      "trial": 2,
      "fluctuation": -8.32,
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
        ctx.lineTo(10,24.77);
        ctx.stroke()
        
        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(10, 24.77)
          ctx.lineTo(20,33.09)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -33.09,
      "condition": "decr_incr"
    },
    {
      "trial": 3,
      "fluctuation": -6.42,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(20, 33.09)
          ctx.lineTo(30, 39.52)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -39.52,
      "condition": "decr_incr"
    },
    {
      "trial": 4,
      "fluctuation": 14.06,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(30, 39.52)
          ctx.lineTo(40, 25.46)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -25.46,
      "condition": "decr_incr"
    },
    {
      "trial": 5,
      "fluctuation": -9.09,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(40, 25.46)
          ctx.lineTo(50, 34.55)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -34.55,
      "condition": "decr_incr"
    },
    {
      "trial": 6,
      "fluctuation": -23.32,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(50, 34.55)
          ctx.lineTo(60, 57.87)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -57.87,
      "condition": "decr_incr"
    },
    {
      "trial": 7,
      "fluctuation": -11.44,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(60, 57.87)
          ctx.lineTo(70, 69.30)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -69.30,
      "condition": "decr_incr"
    },
    {
      "trial": 8,
      "fluctuation": -5.94,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(70, 69.30)
          ctx.lineTo(80, 75.24)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -75.24,
      "condition": "decr_incr"
    },
    {
      "trial": 9,
      "fluctuation": -2.18,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(80, 75.24)
          ctx.lineTo(90, 77.42)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -77.42,
      "condition": "decr_incr"
    },
    {
      "trial": 10,
      "fluctuation": 9.73,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(90, 77.42)
          ctx.lineTo(100, 67.69)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -67.69,
      "condition": "decr_incr"
    },
    {
      "trial": 11,
      "fluctuation": 8.28,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(100, 67.69)
          ctx.lineTo(110, 59.42)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -59.42,
      "condition": "decr_incr"
    },
    {
      "trial": 12,
      "fluctuation": 23.42,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(110, 59.42)
          ctx.lineTo(120, 35.99)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -35.99,
      "condition": "decr_incr"
    },
    {
      "trial": 13,
      "fluctuation": -9.11,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(120, 35.99)
          ctx.lineTo(130, 45.10)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -45.10,
      "condition": "decr_incr"
    },
    {
      "trial": 14,
      "fluctuation": 10.25,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(130, 45.10)
          ctx.lineTo(140, 34.85)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -34.85,
      "condition": "decr_incr"
    },
    {
      "trial": 15,
      "fluctuation": -2.82,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(140, 34.85)
          ctx.lineTo(150, 37.67)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -37.67,
      "condition": "decr_incr"
    },
    {
      "trial": 16,
      "fluctuation": 24.58,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(150, 37.67)
          ctx.lineTo(160, 13.09)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": -13.09,
      "condition": "decr_incr"
    },
    {
      "trial": 17,
      "fluctuation": 26.85,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(160, 13.09)
          ctx.lineTo(170, -13.76)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 13.76,
      "condition": "decr_incr"
    },
    {
      "trial": 18,
      "fluctuation": -5.77,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(170, -13.76)
          ctx.lineTo(180, -7.99)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 7.99,
      "condition": "decr_incr"
    },
    {
      "trial": 19,
      "fluctuation": 21.94,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(180, -7.99)
          ctx.lineTo(190, -29.93)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 29.93,
      "condition": "decr_incr"
    },
    {
      "trial": 20,
      "fluctuation": 29.83,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(190, -29.93)
          ctx.lineTo(200, -59.77)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 59.77,
      "condition": "decr_incr"
    },
    {
      "trial": 21,
      "fluctuation": 17.69,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(200, -59.77)
          ctx.lineTo(210, -77.46)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 77.46,
      "condition": "decr_incr"
    },
    {
      "trial": 22,
      "fluctuation": -8.08,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(210, -77.46)
          ctx.lineTo(220, -69.38)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 69.38,
      "condition": "decr_incr"
    },
    {
      "trial": 23,
      "fluctuation": 8.25,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(220, -69.38)
          ctx.lineTo(230, -77.63)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 77.63,
      "condition": "decr_incr"
    },
    {
      "trial": 24,
      "fluctuation": 16.89,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(230, -77.63)
          ctx.lineTo(240, -94.52)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 94.52,
      "condition": "decr_incr"
    },
    {
      "trial": 25,
      "fluctuation": 4.65,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(240, -94.52)
          ctx.lineTo(250, -99.17)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 99.17,
      "condition": "decr_incr"
    },
    {
      "trial": 26,
      "fluctuation": 9.54,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(250, -99.17)
          ctx.lineTo(260, -108.71)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 108.71,
      "condition": "decr_incr"
    },
    {
      "trial": 27,
      "fluctuation": 23.03,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(260, -108.71)
          ctx.lineTo(270, -131.74)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 131.74,
      "condition": "decr_incr"
    },
    {
      "trial": 28,
      "fluctuation": -12.92,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(270, -131.74)
          ctx.lineTo(280, -118.83)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 118.83,
      "condition": "decr_incr"
    },
    {
      "trial": 29,
      "fluctuation": 27.12,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(280, -118.83)
          ctx.lineTo(290, -145.95)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 145.95,
      "condition": "decr_incr"
    },
    {
      "trial": 30,
      "fluctuation": 25.98,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(290, -145.95)
          ctx.lineTo(300, -171.93)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 171.93,
      "condition": "decr_incr"
    },
    {
      "trial": 31,
      "fluctuation": 0.28,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(300, -171.93)
          ctx.lineTo(310, -172.21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 172.21,
      "condition": "decr_incr"
    },
    {
      "trial": 32,
      "fluctuation": 17.99,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(310, -172.21)
          ctx.lineTo(320, -190.20)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 190.20,
      "condition": "decr_incr"
    },
    {
      "trial": 33,
      "fluctuation": -12.46,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(320, -190.20)
          ctx.lineTo(330, -177.74)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 177.74,
      "condition": "decr_incr"
    },
    {
      "trial": 34,
      "fluctuation": 0.01,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(330, -177.74)
          ctx.lineTo(340, -177.75)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 177.75,
      "condition": "decr_incr"
    },
    {
      "trial": 35,
      "fluctuation": -5.49,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(340, -177.75)
          ctx.lineTo(350, -172.26)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 172.26,
      "condition": "decr_incr"
    },
    {
      "trial": 36,
      "fluctuation": 13.27,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(350, -172.26)
          ctx.lineTo(360, -185.52)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 185.52,
      "condition": "decr_incr"
    },
    {
      "trial": 37,
      "fluctuation": 3.91,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(360, -185.52)
          ctx.lineTo(370, -189.44)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 189.44,
      "condition": "decr_incr"
    },
    {
      "trial": 38,
      "fluctuation": -20.80,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(370, -189.44)
          ctx.lineTo(380, -168.63)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 168.63,
      "condition": "decr_incr"
    },
    {
      "trial": 39,
      "fluctuation": 8.98,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(380, -168.63)
          ctx.lineTo(390, -177.61)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 177.61,
      "condition": "decr_incr"
    },
    {
      "trial": 40,
      "fluctuation": -15.52,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(390, -177.61)
          ctx.lineTo(400, -162.10)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 162.10,
      "condition": "decr_incr"
    },
    {
      "trial": 41,
      "fluctuation": -25.39,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(400, -162.10)
          ctx.lineTo(410, -136.71)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 136.71,
      "condition": "decr_incr"
    },
    {
      "trial": 42,
      "fluctuation": 11.80,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(410, -136.71)
          ctx.lineTo(420, -148.51)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 148.51,
      "condition": "decr_incr"
    },
    {
      "trial": 43,
      "fluctuation": -21.03,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(420, -148.51)
          ctx.lineTo(430, -127.48)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 127.48,
      "condition": "decr_incr"
    },
    {
      "trial": 44,
      "fluctuation": 27.62,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(430, -127.48)
          ctx.lineTo(440, -155.10)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 155.10,
      "condition": "decr_incr"
    },
    {
      "trial": 45,
      "fluctuation": 12.12,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(440, -155.10)
          ctx.lineTo(450, -167.21)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 167.21,
      "condition": "decr_incr"
    },
    {
      "trial": 46,
      "fluctuation": 4.87,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(450, -167.21)
          ctx.lineTo(460, -172.08)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 172.08,
      "condition": "decr_incr"
    },
    {
      "trial": 47,
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
        for (let i=0; i<46; i++) {
          x += 10;
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(460, -172.08)
          ctx.lineTo(470, -169.39)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 169.39,
      "condition": "decr_incr"
    },
    {
      "trial": 48,
      "fluctuation": -14.82,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(470, -169.39)
          ctx.lineTo(480, -154.58)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 154.58,
      "condition": "decr_incr"
    },
    {
      "trial": 49,
      "fluctuation": -3.72,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(480, -154.58)
          ctx.lineTo(490, -150.85)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 150.85,
      "condition": "decr_incr"
    },
    {
      "trial": 50,
      "fluctuation": -10.84,
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
          y -= fluc_decr_incr[i]
          ctx.lineTo(x, y)
        }
        ctx.stroke();

        jsPsych.pluginAPI.setTimeout(() => {
          ctx.beginPath();
          ctx.moveTo(490, -150.85)
          ctx.lineTo(500, -140.01)
          ctx.stroke();
        }, 1000); 
      },
      "stock_value": 140.01,
      "condition": "decr_incr"
    }
  ]