library(tidyverse)
library(effectsize)
library(lme4)
library(lmerTest)
library(sensemakr)
library(robustlmm)
library(robustbase)
#library(caTools)
#library(corrplot)
#library(quantmod)
#library(MASS)
#library(car)

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

bade_skip = group_by(bade_sum, subject, bade_condition) %>% 
  summarize(P=mean(P, na.rm=TRUE), skipped=mean(skipped), stai=mean(stai_score),
            N=mean(N, na.rm=TRUE), D=mean(D, na.rm=TRUE))

# Analysis
# DV=skipped trials
#bade_diff$scenario_trial=as.numeric(bade_diff$scenario_trial)
lmrob(skipped ~ P + N + D +stai+ bade_condition + bade_condition:stai, bade_skip) %>% 
  summary()
lmrob(skipped ~ P + N + D +stai+ bade_condition + stai:bade_condition, bade_skip) %>% effectsize()

# DV=rating differences
bade_diff$scenario_trial=as.numeric(bade_diff$scenario_trial)
model = lmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
       stai_score + P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +
       stai_score:scenario_trial + stai_score:bade_condition + (1|subject), bade_diff)
summary(model)

model_rlme = rlmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
       stai_score + P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +
       stai_score:scenario_trial + stai_score:bade_condition +(1|subject), bade_diff)
coefs <- data.frame(coef(summary(model)))
coefs_rlme = coef(summary(model_rlme))
pval <- 2*pt(abs(coefs_rlme[,3]), coefs$df, lower=FALSE)
eff_rlme = effectsize(model_rlme)

#sink('rlme.txt')
data.frame(pval) %>% round(3)
summary(model_rlme)
eff_rlme
#sink()

# model without anxiety
no_anx = lmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
                P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +(1|subject), bade_diff)
no_anx_rlme = rlmer(diff ~ P + N + D + scenario_trial + bade_condition + bade_condition:scenario_trial + 
                      P:scenario_trial + D:scenario_trial + N:scenario_trial + freq +(1|subject), bade_diff)
coefs_na = data.frame(coef(summary(no_anx)))
coefs_na_rob = coef(summary(no_anx_rlme))
pval_no_anx = 2*pt(abs(coefs_na_rob[,3]), coefs_na$df, lower=FALSE)
data.frame(pval_no_anx) %>% round(3)
summary(no_anx_rlme)
effectsize(no_anx_rlme)

# figures
bade_diff$scenario_trial=as.character(bade_diff$scenario_trial)
ggplot(bade_diff, aes(x=P, y=diff, color=scenario_trial)) + geom_smooth(method = 'lm') +
  xlab('Positive schizotypy') + ylab('Difference in rating (True - Lure)') + 
  scale_color_manual(values=c("#117A65","#2980B9","#A93226"), name="Picture \nstage") +
  theme(axis.title = element_text(size=12), legend.title = element_text(size=12), 
        legend.text = element_text(size=11))+geom_point()

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
  theme(axis.title = element_text(size=12), axis.text = element_text(size=10),
        legend.title = element_text(size=12), legend.text = element_text(size=11))

# descriptive
# MSS-B
distinct(bade_diff, subject, .keep_all = TRUE) %>%
  summarize(N_mean=mean(N), P_mean=mean(P), D_mean=mean(D), 
          N_SD=sd(N), P_SD=sd(P), D_SD=mean(D), 
          N_min=min(N), P_min=min(P), D_min=min(D), 
          N_max=max(N), P_max=max(P), D_max=max(D),
          N_m=median(N), P_m=median(P), D_m=median(D)) %>% round(2)

rt = group_by(bade_sum, subject) %>% summarize(rt=sum(rt_mean, na.rm=TRUE))
mean(rt$rt, na.rm=TRUE)/60
mean(bade_sum$rt_mean, na.rm=TRUE)*24*4*3/60
mean(bade_sum$rt_mean, na.rm=TRUE)*24*4/60

median(bade_sum$rt_mean, na.rm=TRUE)*24*4*3/60
median(bade_sum$rt_mean, na.rm=TRUE)*24*4/60

group_by(bade_sum, scenario_trial, bade_condition, prompt_type) %>% 
  summarize(m=mean(response_mean, na.rm=TRUE))

# STAI
distinct(bade_diff, subject, .keep_all = TRUE) %>%
  summarize(stai_mean=mean(stai_score), stai_sd=sd(stai_score), stai_min=min(stai_score),
            stai_max=max(stai_score), stai_m=median(stai_score)) %>% round(2)

# BADE
group_by(bade_skip, bade_condition) %>% summarize(skip = mean(skipped))
group_by(bade_diff, bade_condition, scenario_trial) %>% summarize(freq = mean(freq))
group_by(bade_diff, bade_condition, scenario_trial) %>% summarize(diff=mean(diff))

bade = read.csv('bade.csv')
mean(bade$rt)/1000
sd(bade$rt)/1000
median(bade$rt)/1000
min(bade$rt)/1000
max(bade$rt)/1000

bade = read.csv('bade.csv')
bade = filter(bade, subject %notin% e)
bade_rate=group_by(bade, bade_condition, prompt_type, scenario_trial) %>%
  summarize(rating=mean(response), rating_sd=sd(response))
n=table(bade$scenario_trial, bade$prompt_type, bade$bade_condition) %>% data.frame()
colnames(n) = c('scenario_trial','prompt_type','bade_condition','N')
bade_rate = merge(bade_rate, n, by=c('scenario_trial','prompt_type','bade_condition'))
bade_rate$se=bade_rate$rating_sd/sqrt(bade_rate$N)
bade_rate

ggplot(bade_rate, aes(x=scenario_trial, y=rating, fill=prompt_type)) + facet_wrap(~bade_condition)+
  geom_bar(stat='identity', position='dodge') + 
  scale_fill_manual(values = c('#999999', '#4E84C4','#CC79A7'), name='Prompt type', 
                    labels=c('absurd','lure','true'))+
  geom_errorbar(aes(ymin=rating-se, ymax=rating+se), 
                position = position_dodge(0.9), width=0.2, linewidth=0.3) +
  xlab('Picture stage') + ylab('Rating')
#ggsave('bade_descr.tiff')

# Additional analysis on belief flexibility

# cleaning
bade1 = filter(bade, scenario_trial==1)
bade2 = filter(bade, scenario_trial==2)
bade3=filter(bade, scenario_trial==3)

bade1 = merge(bade1, dataSum, by='subject')
bade2 = merge(bade2, dataSum, by='subject')
bade3 = merge(bade3, dataSum, by='subject')

bade$prompt_type = as.factor(bade$prompt_type)
bade = within(bade, {prompt_type=relevel(bade$prompt_type, ref='true_')})
bade = merge(bade, dataSum, by='subject')

bade1$prompt_type = as.factor(bade1$prompt_type)
bade1 = within(bade1, {prompt_type=relevel(bade1$prompt_type, ref='true_')})

bade2$prompt_type = as.factor(bade2$prompt_type)
bade2 = within(bade2, {prompt_type=relevel(bade2$prompt_type, ref='true_')})

bade3$prompt_type = as.factor(bade3$prompt_type)
bade3 = within(bade3, {prompt_type=relevel(bade3$prompt_type, ref='true_')})

# analysis
lmrob(response ~ prompt_type + prompt_type:scenario_trial + P + P:prompt_type + 
        P:prompt_type:scenario_trial, bade) %>% summary()

lmrob(response ~ prompt_type + prompt_type:scenario_trial + P + P:prompt_type + 
        P:prompt_type:scenario_trial, bade) %>% effectsize()

#TABLE
bade$rt = bade$rt/1000
med= median(bade$P)
bade$Psych_prone = ifelse(bade$P>med, 'High', 'Low')
table_des = group_by(bade, Psych_prone, bade_condition, scenario_trial, prompt_type) %>% 
  summarize(mean=mean(response, na.rm=TRUE), sd=sd(response, na.rm=TRUE))

table_rt = group_by(bade, Psych_prone, bade_condition, scenario_trial, prompt_type) %>% 
  summarize(mean=mean(rt, na.rm=TRUE), sd=sd(rt, na.rm=TRUE))

hi = filter(bade, Psych_prone=='High')
lo = filter(bade, Psych_prone=='Low')
length(unique(hi$subject))
length(unique(lo$subject))

table_rt
table_des

#FIGURE
stage=c('Stage 1', 'Stage 2', 'Stage 3')
bade_cond = c('Negative','Positive')
names(stage) = c(1, 2, 3)
names(bade_cond) = c('negative','positive')

ggplot(bade, aes(x=P, y=response, color=prompt_type)) + geom_point() +
  facet_wrap(~scenario_trial, labeller = labeller(scenario_trial=stage, bade_condition=bade_cond)) + 
  geom_smooth(method = 'lm') + xlab('Positive schizotypy') + ylab('Rating') +
  scale_color_discrete(name='Prompt type', labels=c('True','Absurd','Lures'))
#ggsave('prompt_ratings.tiff')

ggplot(bade, aes(x=stai_score, y=response, color=prompt_type)) + 
  facet_grid(bade_condition~scenario_trial, labeller = labeller(scenario_trial=stage, bade_condition=bade_cond)) + 
  geom_smooth(method = 'lm') + xlab('Trait anxiety') + ylab('Rating') +
  scale_color_discrete(name='Prompt type', labels=c('True','Absurd','Lures'))

ggplot(bade, aes(x=D, y=response, color=prompt_type)) + facet_grid(bade_condition~scenario_trial) + 
  geom_smooth(method = 'lm') + xlab('Disorganized schizotypy')

ggplot(bade, aes(x=N, y=response, color=prompt_type)) + facet_grid(bade_condition~scenario_trial) + 
  geom_smooth(method = 'lm') + xlab('Negative schizotypy')

ggplot(bade, aes(x=P, y=rt, color=prompt_type)) + facet_grid(~scenario_trial)+
  geom_smooth(method='lm')


# Inflexibility index
bade_flex = read.csv('bade_flex.csv')
bade_flex = drop_na(bade_flex)

lmrob(flexi ~ P + N + D + bade_condition + stai_score + stai_score:bade_condition + P:bade_condition +
        N:bade_condition + D:bade_condition, bade_flex) %>% 
  summary()

lmrob(flexi ~ P + N + D + bade_condition + stai_score + stai_score:bade_condition + P:bade_condition +
        N:bade_condition + D:bade_condition, bade_flex) %>% 
  effectsize()

