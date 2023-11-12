library(tidyverse)
library(effectsize)
library(lme4)
library(lmerTest)
library(sensemakr)

bade_diff = read.csv('bade_diff.csv')
bade_sum = read.csv('bade_sum.csv')
dataSum=read.csv('surveys.csv')
exclude=read.csv('exclude_list.csv')

exclude=select(exclude, -acc_rate.x, -acc_rate.y) %>% 
  filter(is.na(completion_time.x)==FALSE | is.na(completion_time.y)==FALSE |
           is.na(avg)==FALSE | is.na(sd)==FALSE)
e=exclude$subject
`%notin%` = Negate(`%in%`)

bade_diff = filter(bade_diff, subject %notin% e)
bade_sum = filter(bade_sum, subject %notin% e)
dataSum = filter(dataSum, subject %notin% e)

bade_skip= distinct(bade_sum, subject, .keep_all = TRUE)
bade_skip$zP = (bade_skip$P-mean(bade_skip$P))/sd(bade_skip$P)
bade_skip$zN = (bade_skip$N-mean(bade_skip$N))/sd(bade_skip$N)
bade_skip$zD = (bade_skip$D-mean(bade_skip$D))/sd(bade_skip$D)
bade_skip$zStai = (bade_skip$stai_score-mean(bade_skip$stai_score))/sd(bade_skip$stai_score)
bade_skip$zSkip = (bade_skip$skipped-mean(bade_skip$skipped))/sd(bade_skip$skipped)
z=select(bade_skip, subject, zP, zN, zD, zStai)

bade_diff_whole=filter(bade_diff, freq==12) #n=154 for trial 1, n=93 for trial 2, n=39 for trial 3
bade_sum$anx_level=ifelse(bade_sum$stai_score>43, "High", 'Low')
bade_diff = merge(bade_diff, z, by='subject',all=TRUE)
bade_diff$P_level = ifelse(bade_diff$P> 4.25, 'High', 'Low')
bade_diff$N_level = ifelse(bade_diff$N>4.19, 'High','Low')

bade_skip_2 = group_by(bade_sum, subject, bade_condition) %>% 
  summarize(P=mean(P, na.rm=TRUE), skipped=mean(skipped), stai=mean(stai_score),
            N=mean(N, na.rm=TRUE), D=mean(D, na.rm=TRUE))
bade_skip_2 = merge(bade_skip_2, z, by='subject', all=TRUE)
bade_skip_2$zSkip = (bade_skip_2$skipped-mean(bade_skip_2$skipped))/sd(bade_skip_2$skipped)
bade_skip_2$P_level = ifelse(bade_skip_2$P> 4.25, 'High','Low')
bade_skip_2$N_level = ifelse(bade_skip_2$N> 4.19, 'High', 'Low')
bade_skip_2$MSS = bade_skip_2$N + bade_skip_2$P + bade_skip_2$D

# Analysis
#bade_diff$scenario_trial=as.numeric(bade_diff$scenario_trial)
lm(skipped ~ P + N + D +stai+ bade_condition + bade_condition:stai, bade_skip_2) %>% 
  summary()
lm(skipped ~ P + N + D +stai+ bade_condition + stai:bade_condition, bade_skip_2) %>% effectsize()
lm(skipped ~ P + N + D +stai+ bade_condition + stai:bade_condition, bade_skip_2) %>% partial_f2()

lmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
       stai_score + P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +
       stai_score:bade_condition + stai_score:scenario_trial +(1|subject), bade_diff) %>% summary()

lmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
       stai_score + P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +
       stai_score:bade_condition + stai_score:scenario_trial +(1|subject), bade_diff) %>% effectsize()

# figures
bade_diff$scenario_trial=as.character(bade_diff$scenario_trial)
ggplot(bade_diff, aes(x=P, y=diff, color=scenario_trial)) + geom_smooth(method = 'lm') +
  xlab('Positive schizotypy') + ylab('Difference in rating (True - Lure)') + 
  scale_color_manual(values=c("#117A65","#2980B9","#A93226"), name="Picture \nstage") +
  theme(axis.title = element_text(size=15), legend.title = element_text(size=13), 
        legend.text = element_text(size=11))
ggsave('fig2.png')

diff_table = group_by(bade_diff, bade_condition, scenario_trial) %>%
  summarize(diff_m=mean(diff, na.rm=TRUE), diff_sd=sd(diff, na.rm=TRUE),
            diff_se=sd(diff, na.rm=TRUE)/sqrt(175))

ggplot(diff_table, aes(x=bade_condition, y=diff_m, fill=scenario_trial)) + 
  geom_bar(stat = 'identity', position = 'dodge') +
  guides(fill=guide_legend(title = 'Picture \nstage'))+
  geom_errorbar(aes(ymin=diff_m-diff_se, ymax=diff_m+diff_se), 
                position =position_dodge(0.9), width=0.2, linewidth=0.3) +
  xlab('Condition') + ylab('Difference in rating (True - Lures)') +
  scale_fill_manual(values=c('#85C1E9', '#3498DB','#2471A3')) +
  theme(axis.title = element_text(size=13), axis.text = element_text(size=10),
        legend.title = element_text(size=12), legend.text = element_text(size=11))
ggsave('fig3.png')
