var jsPsychStockMarket = (function (jspsych) {
    "use strict";
  
    const info = {
      name: "stock-market",
      parameters: {
        starting_lines: {
          type: jsPsych.ParameterType.FLOAT,
          pretty_name: "Starting Lines",
          default: [0,350],
        },
        fluctuation: {
          type: jsPsych.ParameterType.FLOAT,
          pretty_name: "Fluctuation",
          default: undefined,
        },
        trial_duration: {
          type: jsPsych.ParameterType.INT,
          pretty_name: "Trial Duration",
          default: 1000,
        },
      },
    };
  
    /**
     * **STOCK**
     *
     * Animation sotck market change
     */
    class StockMarketPlugin {
      constructor(jsPsych) {
        this.jsPsych = jsPsych;
      }
      trial(display_element, trial) {
        const width = window.innerWidth;
        const height = window.innerHeight-100;
        const graphWidth = 700;
        const graphHeight = 600;
        
        const canvas = SVG()
            .addTo('body')
            .size(width, height)
            .viewbox(-25, -25, graphWidth+50, graphHeight+50)

        const yBar = canvas.line(0, -50, 0, graphHeight)
          .stroke({color: 'black', width:2, opacity: 1})
          .move(0, 50)

        const xBar = canvas.line(0, 0, graphWidth, 0)
            .stroke({color: 'black', width:2, opacity: 1})
            .move(0, 350)

        const yLabel = canvas.text('Global market value')
            .rotate(-90)
            .move(-350, -100)
            .font({
                family: 'sans-serif',
                size: 25
              })

        const upperTick = canvas.line(-10, -100, 10, -70)
            .stroke({color: 'black', width: 2, opacity:1})
            .move(0, 50)

        const lowerTick = canvas.line(10, -10, -10, 20)
            .stroke({color: 'black', width: 2, opacity:1})
            .move(0, 595)

        display_element.y = y;
        display_element.x = x;
        display_element.yBar = yBar;
        display_element.xBar = xBar;
        display_element.yLabel = yLabel;
        display_element.upperTick = upperTick;
        display_element.lowerTick = lowerTick;
        display_element.starting_lines = trial.starting_lines;
        display_element.fluctuation = trial.fluctuation;
        
        function show_stim () {
          var dataPoint = [x,y];
          trace.push(dataPoint);
          let poly_start = canvas.polyline(display_element.starting_lines).fill('none').stroke({
            color: 'EFE933',
            opacity: 1,
            width: 8,
          })

          jsPsych.pluginAPI.setTimeout(() => {
            let poly_fluc = canvas.polyline(display_element.fluctuation).fill('none').stroke({
                color: '#EFE933',
                opacity: 1,
                width: 8
            })
        }, trial.trial_duration);
        }
        console.log(trace)

        show_stim();

        // end trial
        const end_trial = () => {
          //this.jsPsych.pluginAPI.clearAllTimeouts();
          var trial_data = {
            fluctuation: trial.fluctuation,
          }; 
          this.jsPsych.finishTrial(trial_data);
        }

        if (trial.stimulus_duration !== null) {
          this.jsPsych.pluginAPI.setTimeout(() => {
              canvas.hide();
          }, trial.trial_duration+1300);
      }

      if (trial.trial_duration !== null) {
        this.jsPsych.pluginAPI.setTimeout(end_trial, trial.trial_duration+1300);
    }
  }
    }
    StockMarketPlugin.info = info;
  
    return StockMarketPlugin;
  })(jsPsychModule);