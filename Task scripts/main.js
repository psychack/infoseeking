
const jsPsych = initJsPsych({
    use_webaudio: false,
    show_progress_bar: true,
    on_finish: function() {
        jsPsych.data.displayData();
    }
})

var subjectID = jsPsych.randomization.randomID(7);

jsPsych.data.addProperties({
    subject: subjectID,
});

var randInt = function (num){
    Math.floor(Math.random() *num+1)
}

var cons;

var timeline = [];

var consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: `<div style="text-align: center;"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:12pt"><b><span style="font-size:20.0pt">Yale University </span></b></span></span></div>
        <div style="text-align: center;"><span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Online Consent for Participation in a Research Project</b></span></span></span></span></div>
        <span style="font-family:Arial,Helvetica,sans-serif;"><span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">Title: On-line Study of Reaction to Changes</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">Principal Investigator (Person Responsible for the Research):&nbsp; Tyrone Cannon, PhD, Wanchen Zhao, BA</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">Contact Information:&nbsp; Prof. Tyrone Cannon (<a style="color:#0563c1; text-decoration:underline" href="mailto:tyrone.cannon@yale.edu">tyrone.cannon@yale.edu</a>; 203-436-1545)</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Purpose</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">You are invited to participate in a research study to examine how people perceive and react to changes. </span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Procedures</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">Participation in this study will involve completing a behavioral task of observing changes in a fictitious <br>stock market and surveys asking about some of your experiences and beliefs.<br><br></span></span></span></span><ul>
        </ul>
        <span style="font-family:Arial,Helvetica,sans-serif;"> <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Duration</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">We anticipate that your involvement will require under 75 minutes of your time. <br>You will be paid at your usual level of compensation for completing surveys.</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Risks and Benefits</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">There are no physical risks associated with this study. However, you may experience boredom <br>at some points during the study, and<i>&nbsp;</i>there is the possible risk of loss of confidentiality. <br>Every effort will be made to keep your information confidential; however, this cannot be guaranteed.</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">Participating in this study will not benefit you personally. We hope that the results will add to knowledge <br>about how people make perceive and react to changes. The knowledge generated in this study may help to inform <br>the scientific understanding of decision making under changing circumstances.</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Confidentiality</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">All of your responses will be held in confidence. Only the researchers involved in this study and those <br>responsible for research oversight<i>&nbsp;</i>(such as representatives of the Yale University Human Research <br>Protection Program, and the Yale University Human Subjects Committee)<i>&nbsp;</i>will have access to any <br>information that could identify you. When we publish any results from this study, we will do so in a way <br>that does not identify you. We may also share the data with other researchers so that they can check <br>the accuracy of our conclusions but will only do so if we are confident that your confidentiality is protected.</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Voluntary Participation:</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">Your participation in this study is&nbsp;voluntary.&nbsp;You are free to decline to participate, to end your <br>participation at any time for any reason, or to refuse to answer any individual question.&nbsp;Refusing to <br>participate will involve no penalty or loss of benefits to which you are otherwise entitled. <b>&nbsp;</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">&nbsp;</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Questions:</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">If you have any questions about this study, you may contact the investigators, Wanchen Zhao or <br>Tyrone Cannon, who must answer your questions. You may contact Wanchen at <a style="color:#0563c1; text-decoration:underline" href="mailto:wanchen.zhao@yale.edu">wanchen.zhao@yale.edu</a> <br>or Tyrone at <a style="color:#0563c1; text-decoration:underline" href="mailto:tyrone.cannon@yale.edu">tyrone.cannon@yale.edu</a>.</span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><i>&nbsp;</i></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">If you would like to talk with someone other than the researchers to discuss problems or concerns, <br>to discuss situations in the event that a member of the research team is not available, or to discuss your rights <br>as a research participant, you may contact the Yale University Human Subjects Committee, 203-785-4688, <br>human.subjects@yale.edu. Additional information is available at http://www.yale.edu/hrpp/participants/index.html</span></span></span><br>
        <br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid"><b>Agreement to Participate:</b></span></span></span><br>
        <span style="font-size:12pt"><span style="line-height:115%"><span style="page-break-after:avoid">If you select the option below indicating your consent to participate, you are certifying that you are&nbsp;<br><b>currently over 18 years of age.&nbsp;</b>You are also certifying that you have read and understand the above information, <br>have had the opportunity to have any questions about this study answered, and agree to participate in this study.</span></span></span></span><br>
        &nbsp;`,
    choices: ['I consent to participate'],
}
timeline.push(consent);

var fullscreen = {
    type: jsPsychFullscreen,
    fullscreen_mode: true,
}
timeline.push(fullscreen);

var instr_1 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Welcome! In this experiment, you will complete a Stock Market Task and a series of surveys.</p>
    <p>In the <strong>Stock Market Task</strong>, you will observe changes in the global market that consists of 5 stocks, <br>2 of which you are invested in.</p>
    <p>In the beginning of the task, you are endowed with 100 points. Your total points are called "portfolio value", 
    <br>based on the loss and profits of the 2 stocks you are invested in.</p>
    <p>Your task is to estimate <em>whether</em> your porfolio value from the 2 stocks increased or decreased, 
    <br><em>how much</em> it has increased or decreased, how confident you felt about this estimation, <br>and how much you would like to receive information on your porfolio value.</p>
    <p><strong>Press any key to see an example.</strong></p>`,
    choices: "ALL_KEYS",
}
timeline.push(instr_1);

var example_stock = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
    stimulus: (c) => {
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
        ctx.lineTo(10, -70)
        ctx.stroke();
        }, 1000); 
    },
    choices: "NO_KEYS",
    trial_duration: 2000,
    prompt: 'Day 1'
}
timeline.push(example_stock);

var example_biChoice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Do you think your portfolio value increased or decreased?</p><p>Press 1 for INCREASE, 0 for DECREASE.</p>`,
    choices: ["1","0"],
    trial_duration: 3000,
};
timeline.push(example_biChoice);

var example_stockRating = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width: 500px">
        <p>How do you think your portfolio changed?</p>
        <div style ="width: 240px; float: left;">
            <p>Decreased a lot</p>
        </div>
        <div style="width:240px; float:right;">
            <p>Increased a lot</p>
        </div>
        </div>`,
    require_movement: true,
    min: 1,
    max: 9,
    step: 1,
    slider_start: 5,
    labels: [1,2,3,4,5,6,7,8,9],
    trial_duration: 8000,
};
timeline.push(example_stockRating);

var example_confRating = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width: 500px">
        <p>How confident are you in your rating?</p>
        <div style ="width: 240px; float: left;">
            <p>Not confident at all</p>
        </div>
        <div style="width:240px; float:right;">
            <p>Extremely confident</p>
        </div>
        </div>`,
    require_movement: true,
    min: 1,
    max: 9,
    step: 1,
    labels: [1,2,3,4,5,6,7,8,9],
    slider_start: 5,
    trial_duration: 8000,
};
timeline.push(example_confRating);

var example_infoSeek = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width: 500px">
        <p>Would you like to know your portfolio value now?</p>
        <div style ="width: 240px; float: left;">
            <p>No</p>
        </div>
        <div style="width:240px; float:right;">
            <p>Yes</p>
        </div>
        </div>`,
    require_movement: true,
    min: 1,
    max: 9,
    step: 1,
    slider_start: 5,
    labels: [1,2,3,4,5,6,7,8,9],
    trial_duration: 8000,
};
timeline.push(example_infoSeek);

var example_feedback = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 'Your current porfolio value: 150 points',
    trial_duration: 1000,
}
timeline.push(example_feedback);

var instr_2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>You just finished the practice example.</p>
    <p>In the real task, you will repeatedly see changes to the global market and estimate your portfolio value, 
    <br>for a total of 5 blocks.</p>
    <p>Each block represents a new round of investment, and each trial in the block represents a new day in the market.</p>
    <p>After completing one block, you will be given an optional break. 
    <br>When you enter a new block, your porfolio value will be reset to 100 points, as the initial endowment.</p>
    <p>Press any key to continue</p>`,
    choices: "ALL_KEYS",
}
timeline.push(instr_2);

var instr_3 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>You may have noticed in the example trials that information on your porfolio is provided. 
        <br>In the real task, this information will be probablistically displayed.</p>
        <p>On the rating scale from 1 - 9, a rating of 1 indicates not hoping to receive porfolio value, 
        <br>9 indicates strong wish to receive this information, and 5 indicates no preference.</p>
        <p>Similar rule applies for the estimation of porfolio value and confidence ratings.
        <br>Higher ratings (above 5) for porfolio value change suggest more estimated increase 
        <br>and lower ratings (below 5) suggest estimated decrease in porfolio value.</p>
        <p>A confidence rating of 9 means extremely confident and 1 means not confident at all.</p>
        <p><strong>Press any key to start the Stock Market Task</strong></p>`,
    choices: "ALL_KEYS",
}
timeline.push(instr_3);

var stock = {
    type: jsPsychCanvasKeyboardResponse,
    canvas_size: [600, 600],
    stimulus: jsPsych.timelineVariable("graph"),
    choices: "NO_KEYS",
    trial_duration: 2000,
    prompt: () => {
        var html = `<p>Day ${jsPsych.timelineVariable("trial")}</p>`;
        return html;
    }
}

var stockVal = {
    type: jsPsychCallFunction,
    func: () => {
        var currentStock = jsPsych.timelineVariable("stock_value");
        var fluc = jsPsych.timelineVariable("fluctuation");
        var val;
        if (Math.random() < 0.65) {
            val = 100 + Math.round(currentStock*0.8) + Math.round(fluc);
            cons = 1;
            return [val, cons] // consistent with market trend
        } else {
            cons = 0;
            val = 100+Math.round(currentStock*0.8) - Math.round(fluc)
            return [val, cons] //inconsistent with market trend
        }
    },
    data: {
        task: 'stock_values',
        condition: jsPsych.timelineVariable("condition"),
        stock_change: jsPsych.timelineVariable("fluctuation"),
        market_value: jsPsych.timelineVariable("stock_value")
    }
}

var consistency = {
    type: jsPsychCallFunction, 
    func: () => {
        var cons = jsPsych.data.get().last(1).values()[0].value[1];
        return cons;
    },
    data: {
        task: 'consistent'
    }
}

var portfolioVal = {
    type: jsPsychCallFunction,
    func: () => {
        var portfolio = jsPsych.data.get().last(2).values()[0].value[0];
        return portfolio;
    },
    data: {
        task: 'portfolio_value'
    }
}

var binaryChoice = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>Do you think your portfolio value increased or decreased?</p><p>Press 1 for INCREASE, 0 for DECREASE.</p>`,
    choices: ["1","0"],
    trial_duration: 3000,
    data: {
        task: 'binary_choice',
    }
}

var stockRating = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width: 500px">
        <p>How do you think your portfolio changed?</p>
        <div style ="width: 240px; float: left;">
            <p>Decreased a lot</p>
        </div>
        <div style="width:240px; float:right;">
            <p>Increased a lot</p>
        </div>
        </div>`,
    require_movement: true,
    min: 1,
    max: 9,
    step: 1,
    slider_start: 5,
    labels: [1,2,3,4,5,6,7,8,9],
    trial_duration: 8000,
    data: {
        task: 'stock_rating'
    }
}

var confRating = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width: 500px">
        <p>How confident are you in your rating?</p>
        <div style ="width: 240px; float: left;">
            <p>Not confident at all</p>
        </div>
        <div style="width:240px; float:right;">
            <p>Extremely confident</p>
        </div>
        </div>`,
    require_movement: true,
    min: 1,
    max: 9,
    step: 1,
    labels: [1,2,3,4,5,6,7,8,9],
    slider_start: 5,
    trial_duration: 8000,
    data: {
        task: 'conf_rating'
    }
}

var infoSeek = {
    type: jsPsychHtmlSliderResponse,
    stimulus: `<div style="width: 500px">
        <p>Would you like to know your portfolio value now?</p>
        <div style ="width: 240px; float: left;">
            <p>No</p>
        </div>
        <div style="width:240px; float:right;">
            <p>Yes</p>
        </div>
        </div>`,
    require_movement: true,
    min: 1,
    max: 9,
    step: 1,
    slider_start: 5,
    labels: [1,2,3,4,5,6,7,8,9],
    trial_duration: 8000,
    data: {
        task: 'info_seeking'
    }
}

var feedback = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: () => {
        var last_trial = jsPsych.data.get().last(1).values()[0].response;
        var portfolio = jsPsych.data.get().last(5).values()[0].value;
        var prob = Math.random();
        if (last_trial == 1 && prob < 0.05){
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 1 && prob >= 0.05) {
            return "No information for now"
        } else if (last_trial == 2 && prob < 0.15) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 2 && prob >= 0.15) {
            return "No information for now"
        } else if (last_trial == 3 && prob < 0.25) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 3 && prob >= 0.25) {
            return "No information for now"
        } else if (last_trial == 4 && prob < 0.35) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 4 && prob >= 0.35){
            return "No information for now"
        } else if (last_trial == 5 && prob < 0.5) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 5 && prob >= 0.5) {
            return "No information for now"
        } else if (last_trial == 6 && prob < 0.65) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 6 && prob >= 0.65) {
            return "No information for now"
        } else if (last_trial == 7 && prob < 0.75) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 7 && prob >= 0.75) {
            return "No information for now"
        } else if (last_trial == 8 && prob < 0.85) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 8 && prob >= 0.85) {
            return "No information for now"
        } else if (last_trial == 9 && prob < 0.95) {
            return `Your current portfolio value: ${portfolio} points`
        } else if (last_trial == 9 && prob >= 0.95) {
            return "No information for now"
        } else if (last_trial == undefined) {
            return "Please select a preference next time!"
        }
    },
    trial_duration: 1000,
}

var optBreak = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>You are done with this round of the task. Take a break if you need!</p>
    <p>Press any key to continue</p>`,
    choices: "ALL_KEYS",
}

var incr = {
    timeline: [stock, portfolioVal, consistency, binaryChoice, stockRating, confRating, infoSeek, feedback],
    timeline_variables: stock_increase,
}

var decr = {
    timeline: [stock, portfolioVal, consistency, binaryChoice, stockRating, confRating, infoSeek, feedback],
    timeline_variables: stock_decrease,
}

var decr_incr = {
    timeline: [stock, portfolioVal, consistency, binaryChoice, stockRating, confRating, infoSeek, feedback],
    timeline_variables: stock_decr_incr,
}

var stable = {
    timeline: [stock, portfolioVal, consistency, binaryChoice, stockRating, confRating, infoSeek, feedback],
    timeline_variables: stock_stable,
}

var block_incr = {
    timeline: [incr, optBreak]
}

var block_decr = {
    timeline: [decr, optBreak]
}

var block_decr_incr = {
    timeline: [decr_incr, optBreak]
}

var block_stable = {
    timeline: [stable, optBreak]
}

var IST = {
    timeline: jsPsych.randomization.repeat([block_stable],1)
}

timeline.push(IST)

var instr_mss = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>The following items inquire about a broad range of attitudes, experiences, and beliefs that people have.
    <br>Please answer each item in the way that best describes you. Please note that there are no right or wrong
    <br>answers – just answer in the way that is most like you. </p>`,
}
//timeline.push(instr_mss);

var mss_survey = {
    type: jsPsychSurveyMultiChoice,
    questions: mss,
}
//timeline.push(mss_survey)

var instr_stai_state = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>A number of statements which people have used to describe themselves are given below
        <br>Read each statement and then select the appropriate one to indicate how feel <em>right now</em>,
        <br>that is, <em>at this moment</em>. There are no right or wrong answers.
        <br>Do not spend too much time on any one statement but give the answer which seems to describe your present feelings best.</p>
        <p><strong>Press any key to continue</strong></p>`,
    choices: "ALL_KEYS",
}
//timeline.push(instr_stai_state);

var anxiety_state = {
    type: jsPsychSurveyLikert,
    questions: stai_state,
    scale_width: 600,
}
//timeline.push(anxiety_state)

var instr_stai_trait = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `<p>In the next survey, please select the statement that indicates how you <em><strong>generally</strong></em> feel.
    <br>There are no right or wrong answers. Do not spend too much time on any one statement but give the anser which seems to describe how you generally feel.</p>
    <p><strong>Press any key to continue</strong></p>`,
    choices: "ALL_KEYS",
}
//timeline.push(instr_stai_trait);

var anxiety_trait = {
    type: jsPsychSurveyLikert,
    questions: stai_trait,
    scale_width: 600,
}
//timeline.push(anxiety_trait)

var end = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: `Thanks for participating! You have completed the study. 
    <br>Here is your completion code to enter on Amazon Mechanical Turk:
    <br>INF${randInt(1000)+3000}SK
    <p><strong>Press any key to end the experiment</strong></p>`,
    choices: "ALL_KEYS",
}
timeline.push(end);

jsPsych.run(timeline)