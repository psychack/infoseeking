library(simr)
library(pwr)

# linear regression
pwr.f2.test(u=6, v=343, f2=2.831826e-04) #P
pwr.f2.test(u=6, v=343, f2=8.237983e-03) #N
pwr.f2.test(u=6, v=343, f2=3.122253e-04) #D
pwr.f2.test(u=6, v=343, f2=1.065451e-03) #STAI
pwr.f2.test(u=6, v=343, f2=1.420215e-06) #bade_condition
pwr.f2.test(u=6, v=343, f2=1.604770e-05) #stai:bade_condition

# mixed model
model = lmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
               stai_score + P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +
               stai_score:bade_condition + stai_score:scenario_trial +(1|subject), bade_diff)

powerSim(model, fixed('P','t'), nsim=500)
powerSim(model, fixed('N','t'), nsim=500)
powerSim(model, fixed('D','t'), nsim=500)
powerSim(model, fixed('scenario_trial','t'), nsim=500)
powerSim(model, fixed('stai_score','t'), nsim=500)
powerSim(model, fixed('freq','t'), nsim=500)
powerSim(model, fixed('bade_conditionpositive','t'), nsim=500)
powerSim(model, fixed('P:scenario_trial','t'), nsim=500)
powerSim(model, fixed('N:scenario_trial','t'), nsim=500)
powerSim(model, fixed('D:scenario_trial','t'), nsim=500)
powerSim(model, fixed('scenario_trial:bade_conditionpositive','t'), nsim=500)
powerSim(model, fixed('bade_conditionpositive:stai_score','t'),nsim=500)
powerSim(model, fixed('scenario_trial:stai_score','t'), nsim=500)

