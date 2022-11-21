# crayons

Link to current version: [crayons](https://intr-eeg.github.io/crayons/)

### Data Dictionary

Variable         | Description
:--------------- | :-----------------------------------------------------------
expVersion       | experiment version (date last modified)
choice           | choice made for current trial
correct          | correct (1) or incorrect (0)
trial\_time      | time taken for current trial (seconds)
cumulative\_time | total time taken during trials so far up to current trial (seconds); does not include time for instructions or demos
coords\_x        | list of x coordinates
coords\_y        | list of y coordinates
coords\_t        | list of times when respective x and y coordinates were taken (seconds)
end\_timestamp   | timestamp at the end of current trial
total\_seconds   | global time taken at the end of current trial (seconds)
blockNum         | block number (not contiguous for legacy reasons)
blockName        | block name
ruleNum          | rule number
tryNum           | try number (up to 2 tries, `NA` for test blocks)
maxScore         | maximum possible score for that block (also number of trials in block)
trialNum         | trial number within block
stimulus         | name of the stimulus
corrAns          | name of the correct choice
slideNum         | slide number (not contiguous for legacy reasons)
participant      | participant ID
Audio            | activate audio
Debug            | activate debug mode

