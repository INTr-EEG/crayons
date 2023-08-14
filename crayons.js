/**************** 
 * Crayons Test *
 ****************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'crayons';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'School': '', 'Audio': ['Yes', 'No'], 'Debug': ['No', 'Yes']};

// Start code blocks for 'Before Experiment'

function make_button(name, text, pos, size) {
    return new visual.ButtonStim({"win": psychoJS.window, "text": text, "pos": pos, "letterHeight": 0.05, "size": size, "borderWidth": 0.005, "fillColor": "lightgrey", "borderColor": "darkgrey", "color": "black", "colorSpace": "rgb", "opacity": null, "bold": true, "italic": false, "padding": null, "anchor": "center", "name": name});
}

function make_sound(name, filepath) {
    return new sound.Sound({"win": psychoJS.window, "value": filepath, "secs": (- 1), "stereo": true, "hamming": true, "name": name});
}

function make_img(name, file_name, pos, size, opacity) {
    return new visual.ImageStim({"win": psychoJS.window, "name": name, "image": file_name, "pos": pos, "size": size, "opacity": opacity});
}

function make_slide(name, pos = [0, 0], size = SLIDE_SIZE) {
    return make_img(name, `${SLIDES_DIR}/${name}.png`, pos, size, 1);
}

function within_box(obj, box) {
    /*
    Determine if object is within box
    - Squared difference in x (and y) coordinates
    should be less than the square of half the
    box width (and height)
    - That would mean the center of the object is
    within the box boundaries
    */
    var box_h, box_w, box_x, box_y, dx, dy, hh, hw, obj_x, obj_y;
    [obj_x, obj_y] = obj.pos;
    [box_x, box_y] = box.pos;
    [box_w, box_h] = box.size;
    [dx, dy] = [(obj_x - box_x), (obj_y - box_y)];
    [hw, hh] = [(box_w / 2), (box_h / 2)];
    return (((dx * dx) < (hw * hw)) && ((dy * dy) < (hh * hh)));
}

function snapped(obj1, obj2, func = within_box) {
    /*
    Determine if obj1 snapped to center of obj2
    - Check if obj1 is 'near' obj2, based on func
    - If yes, set the obj1's position to be
    equal to obj2's position and return True
    - Otherwise, do nothing and return False
    */
    if (func(obj1, obj2)) {
        obj1.pos = obj2.pos;
        return true;
    }
    return false;
}

function dist_sq(x1, y1, x2, y2) {
    var dx, dy;
    [dx, dy] = [(x2 - x1), (y2 - y1)];
    return ((dx * dx) + (dy * dy));
}

function round_dp(x, dp = 5) {
    var num;
    [num] = [Math.pow(10, dp)];
    return (Math.round((x * num)) / num);
}


var boxes;
var objs;
var dests;
var times;
var xy0s;
var xy1s;
var dxdys;
function anim_r1() {
    var boxes, dests, dxdys, objs, times, xy0s, xy1s;
    boxes = [OBJS["long-red-crayon-box"], OBJS["short-red-crayon-box"]];
    objs = [OBJS["long-red-crayon"], OBJS["short-red-crayon"]];
    dests = [boxes[0], boxes[1]];
    times = [[0, 10.5, 12.5], [15.4, 17.5, 20.5]];
    xy0s = [];
    xy1s = [];
    dxdys = [];
    for (var i, _pj_c = 0, _pj_a = util.range(objs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xy0s.push(objs[i].pos);
        xy1s.push(dests[i].pos);
        dxdys.push(get_dxdy(xy0s[i], xy1s[i], times[i][1], times[i][2]));
    }
    return [boxes, objs, times, xy0s, dxdys];
}

function anim_r2() {
    var boxes, dests, dxdys, objs, times, xy0s, xy1s;
    boxes = [OBJS["long-red-crayon-box"], OBJS["short-red-crayon-box"]];
    objs = [OBJS["long-red-crayon"], OBJS["short-red-crayon"]];
    dests = [boxes[1], boxes[0]];
    times = [[5, 7, 10], [12.5, 14.5, 17.5]];
    xy0s = [];
    xy1s = [];
    dxdys = [];
    for (var i, _pj_c = 0, _pj_a = util.range(objs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        xy0s.push(objs[i].pos);
        xy1s.push(dests[i].pos);
        dxdys.push(get_dxdy(xy0s[i], xy1s[i], times[i][1], times[i][2]));
    }
    return [boxes, objs, times, xy0s, dxdys];
}

function anim_r3() {
    var boxes, dxdys, objs, times, xy0s, xy1s;
    boxes = [OBJS["long-outline-crayon-box"], OBJS["short-outline-crayon-box"]];
    objs = [OBJS["long-red-crayon"], OBJS["short-red-crayon"], OBJS["long-yellow-crayon"], OBJS["short-yellow-crayon"], OBJS["long-red-crayon"], OBJS["short-red-crayon"], OBJS["long-yellow-crayon"], OBJS["short-yellow-crayon"]];
    xy0s = [[(- 0.25), (- 0.25)], [0.25, (- 0.25)], [(- 0.25), (- 0.25)], [0.25, (- 0.25)], CARD_POS0, CARD_POS0, CARD_POS0, CARD_POS0];
    xy1s = [xy0s[0], xy0s[1], xy0s[2], xy0s[3], boxes[0].pos, boxes[1].pos, boxes[1].pos, boxes[0].pos];
    times = [[5.5, 11, 11], [5.5, 11, 11], [12, 18, 18], [12, 18, 18], [21, 24, 26], [29, 31, 33.5], [37, 39, 42], [45, 47, 50]];
    dxdys = [];
    for (var i, _pj_c = 0, _pj_a = util.range(objs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        dxdys.push(get_dxdy(xy0s[i], xy1s[i], times[i][1], times[i][2]));
    }
    return [boxes, objs, times, xy0s, dxdys];
}

var dt;
var dx;
var dy;
function get_dxdy(xy0, xy1, t0, t1) {
    var dt, dx, dy, x0, x1, y0, y1;
    [x0, y0] = xy0;
    [x1, y1] = xy1;
    dt = (t1 - t0);
    dx = ((x1 - x0) / dt);
    dy = ((y1 - y0) / dt);
    return [dx, dy];
}

var x;
var y;
function get_xy(t, t0, xy0, dxdy) {
    var dt, dx, dy, x, x0, y, y0;
    [x0, y0] = xy0;
    [dx, dy] = dxdy;
    dt = (t - t0);
    x = (x0 + (dx * dt));
    y = (y0 + (dy * dt));
    return [x, y];
}

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color('#D8E6E4'),
  units: 'height',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(beginRoutineBegin());
flowScheduler.add(beginRoutineEachFrame());
flowScheduler.add(beginRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'resources/aud/trials-practice-again.m4a', 'path': 'resources/aud/trials-practice-again.m4a'},
    {'name': 'resources/aud/rule-3-practice.m4a', 'path': 'resources/aud/rule-3-practice.m4a'},
    {'name': 'resources/imgs/slides/slide-10.png', 'path': 'resources/imgs/slides/slide-10.png'},
    {'name': 'resources/aud/rule-3-teaching-part-1.m4a', 'path': 'resources/aud/rule-3-teaching-part-1.m4a'},
    {'name': 'resources/aud/rule-2-practice.m4a', 'path': 'resources/aud/rule-2-practice.m4a'},
    {'name': 'resources/aud/rule-1-teaching.m4a', 'path': 'resources/aud/rule-1-teaching.m4a'},
    {'name': 'resources/imgs/slides/slide-09.png', 'path': 'resources/imgs/slides/slide-09.png'},
    {'name': 'resources/imgs/crayons/shortred_whbg_transp.png', 'path': 'resources/imgs/crayons/shortred_whbg_transp.png'},
    {'name': 'resources/imgs/crayons/shortyellow_whbg_transp.png', 'path': 'resources/imgs/crayons/shortyellow_whbg_transp.png'},
    {'name': 'resources/aud/rule-1-practice.m4a', 'path': 'resources/aud/rule-1-practice.m4a'},
    {'name': 'resources/imgs/slides/slide-03.png', 'path': 'resources/imgs/slides/slide-03.png'},
    {'name': 'resources/imgs/slides/slide-06.png', 'path': 'resources/imgs/slides/slide-06.png'},
    {'name': 'resources/aud/task-introduction.m4a', 'path': 'resources/aud/task-introduction.m4a'},
    {'name': 'resources/aud/rule-2-teaching.m4a', 'path': 'resources/aud/rule-2-teaching.m4a'},
    {'name': 'resources/seqs/crayons-2yo.csv', 'path': 'resources/seqs/crayons-2yo.csv'},
    {'name': 'resources/imgs/crayons/boxlongred_whbg.png', 'path': 'resources/imgs/crayons/boxlongred_whbg.png'},
    {'name': 'resources/aud/rule-3-teaching-part-3.m4a', 'path': 'resources/aud/rule-3-teaching-part-3.m4a'},
    {'name': 'resources/imgs/crayons/longyellow_whbg_transp.png', 'path': 'resources/imgs/crayons/longyellow_whbg_transp.png'},
    {'name': 'resources/imgs/continue.png', 'path': 'resources/imgs/continue.png'},
    {'name': 'resources/aud/rule-3-teaching-part-2.m4a', 'path': 'resources/aud/rule-3-teaching-part-2.m4a'},
    {'name': 'resources/imgs/crayons/boxshortoutline_whbg.png', 'path': 'resources/imgs/crayons/boxshortoutline_whbg.png'},
    {'name': 'resources/aud/trials-go.m4a', 'path': 'resources/aud/trials-go.m4a'},
    {'name': 'resources/imgs/crayons/longred_whbg_transp.png', 'path': 'resources/imgs/crayons/longred_whbg_transp.png'},
    {'name': 'resources/imgs/crayons/boxshortred_whbg.png', 'path': 'resources/imgs/crayons/boxshortred_whbg.png'},
    {'name': 'resources/imgs/slides/slide-07.png', 'path': 'resources/imgs/slides/slide-07.png'},
    {'name': 'resources/imgs/crayons/boxlongoutline_whbg.png', 'path': 'resources/imgs/crayons/boxlongoutline_whbg.png'},
    {'name': 'resources/imgs/slides/slide-04.png', 'path': 'resources/imgs/slides/slide-04.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var beginClock;
var expVersion;
var AUD_DIR;
var IMGS_DIR;
var OBJS_DIR;
var SLIDES_DIR;
var SEQ_FILE;
var SHOW_DEBUG;
var USE_AUDIO;
var PICTURE_DELAY;
var MIN_DIST_SQ;
var SLIDE_W;
var SLIDE_SIZE;
var BOX_W;
var BOX_SIZE;
var CARD_W;
var CARD_SIZE;
var BOX1_POS;
var BOX2_POS;
var CARD_POS0;
var NEXT_POS;
var NEXT_SIZE;
var NEXT;
var SKIP;
var MOUSE;
var MOUSE_L;
var MOUSE_L_prev;
var SOUND;
var OBJS;
var HEADERS;
var begin_text;
var gateClock;
var all_anims;
var gate_header;
var gate_text;
var slideClock;
var slide_text;
var trialClock;
var score;
var scores;
var cumulative_time;
var trial_header;
var trial_feedback;
var trial_text;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "begin"
  beginClock = new util.Clock();
  expVersion = "2022.09.25";
  AUD_DIR = "resources/aud";
  IMGS_DIR = "resources/imgs";
  OBJS_DIR = `${IMGS_DIR}/crayons`;
  SLIDES_DIR = `${IMGS_DIR}/slides`;
  SEQ_FILE = "resources/seqs/crayons-2yo.csv";
  SHOW_DEBUG = (expInfo["Debug"] === "Yes");
  USE_AUDIO = (expInfo["Audio"] === "Yes");
  PICTURE_DELAY = 0.1;
  MIN_DIST_SQ = (0.005 * 0.005);
  SLIDE_W = 1.0;
  SLIDE_SIZE = [SLIDE_W, ((SLIDE_W / 1001) * 563)];
  BOX_W = 0.6;
  BOX_SIZE = [BOX_W, ((BOX_W / 600) * 360)];
  CARD_W = 0.45;
  CARD_SIZE = [CARD_W, ((CARD_W / 600) * 360)];
  BOX1_POS = [(- 0.4), 0.15];
  BOX2_POS = [0.4, 0.15];
  CARD_POS0 = [0, (- 0.3)];
  NEXT_POS = [0, (- 0.39)];
  NEXT_SIZE = [((0.1 / 104) * 254), 0.1];
  NEXT = make_img("continue", `${IMGS_DIR}/continue.png`, NEXT_POS, NEXT_SIZE);
  SKIP = make_button("skip", "Skip", [0.6, (- 0.3)], [0.21, 0.1]);
  MOUSE = new core.Mouse({"win": psychoJS.window});
  MOUSE_L = 0;
  MOUSE_L_prev = 0;
  SOUND = null;
  OBJS = {};
  OBJS["long-red-crayon-box"] = make_img("long-red-crayon-box", `${OBJS_DIR}/boxlongred_whbg.png`, BOX1_POS, BOX_SIZE);
  OBJS["short-red-crayon-box"] = make_img("short-red-crayon-box", `${OBJS_DIR}/boxshortred_whbg.png`, BOX2_POS, BOX_SIZE);
  OBJS["long-outline-crayon-box"] = make_img("long-outline-crayon-box", `${OBJS_DIR}/boxlongoutline_whbg.png`, BOX1_POS, BOX_SIZE);
  OBJS["short-outline-crayon-box"] = make_img("short-outline-crayon-box", `${OBJS_DIR}/boxshortoutline_whbg.png`, BOX2_POS, BOX_SIZE);
  OBJS["long-red-crayon"] = make_img("long-red-crayon", `${OBJS_DIR}/longred_whbg_transp.png`, CARD_POS0, CARD_SIZE);
  OBJS["short-red-crayon"] = make_img("short-red-crayon", `${OBJS_DIR}/shortred_whbg_transp.png`, CARD_POS0, CARD_SIZE);
  OBJS["long-yellow-crayon"] = make_img("long-yellow-crayon", `${OBJS_DIR}/longyellow_whbg_transp.png`, CARD_POS0, CARD_SIZE);
  OBJS["short-yellow-crayon"] = make_img("short-yellow-crayon", `${OBJS_DIR}/shortyellow_whbg_transp.png`, CARD_POS0, CARD_SIZE);
  HEADERS = [null, "Rule 1 Teaching", "Rule 2 Teaching", "Rule 3 Teaching"];
  
  begin_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'begin_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  // Initialize components for Routine "gate"
  gateClock = new util.Clock();
  all_anims = [null];
  all_anims.push(anim_r1);
  all_anims.push(anim_r2);
  all_anims.push(anim_r3);
  
  gate_header = new visual.TextStim({
    win: psychoJS.window,
    name: 'gate_header',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  gate_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'gate_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Initialize components for Routine "slide"
  slideClock = new util.Clock();
  slide_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'slide_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  score = 0;
  scores = [];
  cumulative_time = 0.0;
  
  trial_header = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_header',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -1.0 
  });
  
  trial_feedback = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_feedback',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, (- 0.05)], height: 0.1,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -2.0 
  });
  
  trial_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'trial_text',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0.6, 0], height: 0.02,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('black'),  opacity: undefined,
    depth: -3.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var aud_file;
var SOUND_DUR;
var SOUND_T;
var beginComponents;
function beginRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'begin'-------
    t = 0;
    beginClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (USE_AUDIO) {
        aud_file = `${AUD_DIR}/task-introduction.m4a`;
        SOUND = make_sound("intro", aud_file);
        SOUND_DUR = SOUND.getDuration();
        SOUND_T = 0;
        SOUND.play();
    }
    OBJS["long-red-crayon"].pos = [0, 0];
    OBJS["long-red-crayon"].autoDraw = true;
    if (SHOW_DEBUG) {
        SKIP.autoDraw = true;
    }
    
    // keep track of which components have finished
    beginComponents = [];
    beginComponents.push(begin_text);
    
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function beginRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'begin'-------
    // get current time
    t = beginClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((t > SOUND_DUR)) {
        continueRoutine = false;
    } else {
        if ((t > 8.8)) {
            OBJS["long-red-crayon"].autoDraw = false;
            OBJS["short-red-crayon"].pos = [0, 0];
            OBJS["short-red-crayon"].autoDraw = true;
        }
    }
    if (SHOW_DEBUG) {
        begin_text.text = `
    aud_file = ${aud_file}
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}`
    ;
        MOUSE_L = MOUSE.getPressed()[0];
        if ((MOUSE_L_prev !== MOUSE_L)) {
            MOUSE_L_prev = MOUSE_L;
            if ((MOUSE_L && SKIP.contains(MOUSE))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *begin_text* updates
    if (t >= 0.0 && begin_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      begin_text.tStart = t;  // (not accounting for frame time here)
      begin_text.frameNStart = frameN;  // exact frame index
      
      begin_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of beginComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function beginRoutineEnd() {
  return async function () {
    //------Ending Routine 'begin'-------
    for (const thisComponent of beginComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    OBJS["long-red-crayon"].autoDraw = false;
    OBJS["long-red-crayon"].pos = CARD_POS0;
    OBJS["short-red-crayon"].autoDraw = false;
    OBJS["short-red-crayon"].pos = CARD_POS0;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    if (SHOW_DEBUG) {
        SKIP.autoDraw = false;
    }
    
    // the Routine "begin" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: TrialHandler.importConditions(psychoJS.serverManager, SEQ_FILE, '0:'),
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(gateRoutineBegin(snapshot));
      trialsLoopScheduler.add(gateRoutineEachFrame());
      trialsLoopScheduler.add(gateRoutineEnd());
      trialsLoopScheduler.add(slideRoutineBegin(snapshot));
      trialsLoopScheduler.add(slideRoutineEachFrame());
      trialsLoopScheduler.add(slideRoutineEnd());
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var is_practice;
var is_first_practice;
var skip_practice;
var aud_files;
var aud_idx;
var hide_next;
var hide_objs;
var gateComponents;
function gateRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'gate'-------
    t = 0;
    gateClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    psychoJS.experiment.addData("expVersion", expVersion);
    is_practice = (tryNum !== "NA");
    is_first_practice = (tryNum === 1);
    skip_practice = false;
    if (((is_practice && (! is_first_practice)) && (scores.slice((- 1))[0] >= 4))) {
        skip_practice = true;
    }
    if ((((Number.parseInt(trialNum) !== 1) || (! is_first_practice)) || skip_practice)) {
        continueRoutine = false;
    }
    if (USE_AUDIO) {
        if ((ruleNum !== 3)) {
            aud_files = [`${AUD_DIR}/rule-${ruleNum}-teaching.m4a`];
        } else {
            aud_files = [];
            for (var i, _pj_c = 0, _pj_a = util.range(1, 4), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
                i = _pj_a[_pj_c];
                aud_files.push(`${AUD_DIR}/rule-3-teaching-part-${i}.m4a`);
            }
        }
        aud_idx = 0;
        SOUND = make_sound("teaching", aud_files[aud_idx]);
        SOUND_DUR = SOUND.getDuration();
        SOUND_T = 0;
        SOUND.play();
    }
    gate_header.text = HEADERS[ruleNum];
    [boxes, objs, times, xy0s, dxdys] = all_anims[ruleNum]();
    for (var box, _pj_c = 0, _pj_a = boxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        box.autoDraw = true;
    }
    hide_next = true;
    hide_objs = [];
    for (var i, _pj_c = 0, _pj_a = util.range(objs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        hide_objs.push(true);
    }
    if (SHOW_DEBUG) {
        SKIP.autoDraw = true;
    }
    
    // keep track of which components have finished
    gateComponents = [];
    gateComponents.push(gate_header);
    gateComponents.push(gate_text);
    
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function gateRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'gate'-------
    // get current time
    t = gateClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((ruleNum === 3)) {
        if (((t - SOUND_T) > SOUND_DUR)) {
            if ((aud_idx < 2)) {
                aud_idx += 1;
                SOUND = make_sound("teaching", aud_files[aud_idx]);
                SOUND_DUR = SOUND.getDuration();
                SOUND_T = t;
                SOUND.play();
            } else {
                hide_next = false;
                NEXT.autoDraw = true;
            }
        }
    } else {
        if ((hide_next && ((t - SOUND_T) > SOUND_DUR))) {
            hide_next = false;
            NEXT.autoDraw = true;
        }
    }
    for (var i, _pj_c = 0, _pj_a = util.range(objs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        if (((hide_objs[i] && (t > times[i][0])) && (t <= times[i][2]))) {
            hide_objs[i] = false;
            objs[i].pos = xy0s[i];
            objs[i].autoDraw = true;
        }
        if (((! hide_objs[i]) && (t > times[i][2]))) {
            hide_objs[i] = true;
            objs[i].autoDraw = false;
        }
        if (((t > times[i][1]) && (t <= times[i][2]))) {
            objs[i].pos = get_xy(t, times[i][1], xy0s[i], dxdys[i]);
        }
    }
    MOUSE_L = MOUSE.getPressed()[0];
    if ((MOUSE_L_prev !== MOUSE_L)) {
        MOUSE_L_prev = MOUSE_L;
        if (MOUSE_L) {
            if ((((t - SOUND_T) > SOUND_DUR) && NEXT.contains(MOUSE))) {
                if ((ruleNum !== 3)) {
                    continueRoutine = false;
                } else {
                    if ((aud_idx >= 2)) {
                        continueRoutine = false;
                    }
                }
            } else {
                if ((SHOW_DEBUG && SKIP.contains(MOUSE))) {
                    continueRoutine = false;
                }
            }
        }
    }
    if (SHOW_DEBUG) {
        gate_text.text = `
    aud_files[${aud_idx}] = ${aud_files[aud_idx]}
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}`
    ;
    }
    
    
    // *gate_header* updates
    if (t >= 0.0 && gate_header.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gate_header.tStart = t;  // (not accounting for frame time here)
      gate_header.frameNStart = frameN;  // exact frame index
      
      gate_header.setAutoDraw(true);
    }

    
    // *gate_text* updates
    if (t >= 0.0 && gate_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      gate_text.tStart = t;  // (not accounting for frame time here)
      gate_text.frameNStart = frameN;  // exact frame index
      
      gate_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of gateComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function gateRoutineEnd() {
  return async function () {
    //------Ending Routine 'gate'-------
    for (const thisComponent of gateComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    gate_header.text = "";
    for (var box, _pj_c = 0, _pj_a = boxes, _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        box = _pj_a[_pj_c];
        box.autoDraw = false;
    }
    for (var i, _pj_c = 0, _pj_a = util.range(objs.length), _pj_b = _pj_a.length; (_pj_c < _pj_b); _pj_c += 1) {
        i = _pj_a[_pj_c];
        objs[i].pos = CARD_POS0;
        objs[i].autoDraw = false;
    }
    NEXT.autoDraw = false;
    if (USE_AUDIO) {
        SOUND.stop();
    }
    if (SHOW_DEBUG) {
        SKIP.autoDraw = false;
    }
    
    // the Routine "gate" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var slide;
var slideComponents;
function slideRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'slide'-------
    t = 0;
    slideClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (((slideNum !== "NA") && (! skip_practice))) {
        slide = make_slide(slideNum);
        slide.autoDraw = true;
        if (USE_AUDIO) {
            if ((tryNum === 1)) {
                aud_file = `${AUD_DIR}/rule-${ruleNum}-practice.m4a`;
            } else {
                if ((tryNum === "NA")) {
                    aud_file = `${AUD_DIR}/trials-go.m4a`;
                } else {
                    aud_file = `${AUD_DIR}/trials-practice-again.m4a`;
                }
            }
            SOUND = make_sound("practice", aud_file);
            SOUND_DUR = SOUND.getDuration();
            SOUND_T = 0;
            SOUND.play();
        }
    } else {
        continueRoutine = false;
    }
    if (SHOW_DEBUG) {
        SKIP.autoDraw = true;
    }
    
    // keep track of which components have finished
    slideComponents = [];
    slideComponents.push(slide_text);
    
    for (const thisComponent of slideComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function slideRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'slide'-------
    // get current time
    t = slideClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((((slideNum !== "NA") && (! skip_practice)) && (t > SOUND_DUR))) {
        continueRoutine = false;
    }
    if (SHOW_DEBUG) {
        slide_text.text = `
    aud_file = ${aud_file}
    SOUND_DUR = ${round(SOUND_DUR, 3)}
    t = ${round(t, 3)}`
    ;
        MOUSE_L = MOUSE.getPressed()[0];
        if ((MOUSE_L_prev !== MOUSE_L)) {
            MOUSE_L_prev = MOUSE_L;
            if ((MOUSE_L && SKIP.contains(MOUSE))) {
                continueRoutine = false;
            }
        }
    }
    
    
    // *slide_text* updates
    if (t >= 0.0 && slide_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      slide_text.tStart = t;  // (not accounting for frame time here)
      slide_text.frameNStart = frameN;  // exact frame index
      
      slide_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of slideComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function slideRoutineEnd() {
  return async function () {
    //------Ending Routine 'slide'-------
    for (const thisComponent of slideComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if (((slideNum !== "NA") && (! skip_practice))) {
        slide.autoDraw = false;
        if (USE_AUDIO) {
            SOUND.stop();
        }
    }
    if (SHOW_DEBUG) {
        SKIP.autoDraw = false;
    }
    
    // the Routine "slide" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var box1;
var box2;
var CARD;
var dormant_card;
var active_card;
var moving_card;
var drag_in_process;
var DRAGGING;
var feedback_delay_start;
var picture_delay_start;
var choice;
var correct;
var trial_time;
var coords_x;
var coords_y;
var coords_t;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    if (skip_practice) {
        continueRoutine = false;
    }
    if ((trialNum === 1)) {
        if ((ruleNum !== 3)) {
            box1 = OBJS["long-red-crayon-box"];
            box2 = OBJS["short-red-crayon-box"];
        } else {
            box1 = OBJS["long-outline-crayon-box"];
            box2 = OBJS["short-outline-crayon-box"];
        }
    }
    box1.autoDraw = true;
    box2.autoDraw = true;
    CARD = OBJS[stimulus];
    CARD.pos = CARD_POS0;
    CARD.autoDraw = true;
    dormant_card = CARD;
    active_card = null;
    moving_card = null;
    drag_in_process = false;
    DRAGGING = false;
    feedback_delay_start = null;
    picture_delay_start = 0.0;
    choice = null;
    correct = null;
    trial_time = null;
    x = 0;
    y = 0;
    coords_x = [];
    coords_y = [];
    coords_t = [];
    
    trial_header.setText(blockName);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trial_header);
    trialComponents.push(trial_feedback);
    trialComponents.push(trial_text);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var feedback_delay;
function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    if ((feedback_delay_start !== null)) {
        if (is_practice) {
            feedback_delay = 0.5;
            if ((is_practice && (correct === 0))) {
                feedback_delay = 1.0;
            }
            if (((t - feedback_delay_start) > feedback_delay)) {
                continueRoutine = false;
            }
        } else {
            continueRoutine = false;
        }
    } else {
        if (((active_card === null) && (t > 0.05))) {
            active_card = dormant_card;
        } else {
            if (((! drag_in_process) && (t > 0.1))) {
                MOUSE_L = MOUSE.getPressed()[0];
                if ((MOUSE_L_prev !== MOUSE_L)) {
                    MOUSE_L_prev = MOUSE_L;
                    if ((MOUSE_L === 1)) {
                        if (MOUSE.isPressedIn(active_card)) {
                            moving_card = active_card;
                            drag_in_process = true;
                        }
                    }
                }
            }
        }
    }
    if ((MOUSE.getPressed()[0] === 1)) {
        if (drag_in_process) {
            moving_card.pos = MOUSE.getPos();
            [x, y] = moving_card.pos;
            if (((coords_x.length === 0) || (dist_sq(coords_x.slice((- 1))[0], coords_y.slice((- 1))[0], x, y) > MIN_DIST_SQ))) {
                coords_x.push(round_dp(x));
                coords_y.push(round_dp(y));
                coords_t.push(round_dp(t));
            }
        }
    } else {
        drag_in_process = false;
        if ((moving_card !== null)) {
            if (snapped(moving_card, box1)) {
                choice = box1.name;
                moving_card.autoDraw = false;
                moving_card.pos = CARD_POS0;
            } else {
                if (snapped(moving_card, box2)) {
                    choice = box2.name;
                    moving_card.autoDraw = false;
                    moving_card.pos = CARD_POS0;
                }
            }
            if ((choice !== null)) {
                trial_time = t;
                cumulative_time += t;
                feedback_delay_start = t;
                if ((choice === corrAns)) {
                    correct = 1;
                    if (is_practice) {
                        trial_feedback.text = "\u2705 Correct!";
                    }
                    score += 1;
                } else {
                    correct = 0;
                    if (is_practice) {
                        trial_feedback.text = "\u274e Let's think again";
                    }
                }
            }
            moving_card = null;
        }
    }
    if (SHOW_DEBUG) {
        trial_text.text = `
    tryNum = ${tryNum}
    trialNum = ${trialNum} (out of ${maxScore})
    score = ${score} (out of ${maxScore})
    globalClock = ${round(globalClock.getTime(), 3)}
    t = ${round(t, 3)}`
    ;
        if ((moving_card !== null)) {
            trial_text.text += `
    moving_card.name = ${moving_card.name}
    pos = (${round(x, 3)}, ${round(y, 3)})`
    ;
        }
    }
    
    
    // *trial_header* updates
    if (t >= 0.0 && trial_header.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_header.tStart = t;  // (not accounting for frame time here)
      trial_header.frameNStart = frameN;  // exact frame index
      
      trial_header.setAutoDraw(true);
    }

    
    // *trial_feedback* updates
    if (t >= 0.0 && trial_feedback.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_feedback.tStart = t;  // (not accounting for frame time here)
      trial_feedback.frameNStart = frameN;  // exact frame index
      
      trial_feedback.setAutoDraw(true);
    }

    
    // *trial_text* updates
    if (t >= 0.0 && trial_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trial_text.tStart = t;  // (not accounting for frame time here)
      trial_text.frameNStart = frameN;  // exact frame index
      
      trial_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    box1.autoDraw = false;
    box2.autoDraw = false;
    if ((trialNum === maxScore)) {
        scores.push(score);
        score = 0;
    }
    trial_feedback.text = "";
    psychoJS.experiment.addData("choice", choice);
    psychoJS.experiment.addData("correct", correct);
    psychoJS.experiment.addData("trial_time", trial_time);
    psychoJS.experiment.addData("cumulative_time", cumulative_time);
    psychoJS.experiment.addData("coords_x", coords_x);
    psychoJS.experiment.addData("coords_y", coords_y);
    psychoJS.experiment.addData("coords_t", coords_t);
    psychoJS.experiment.addData("end_timestamp", util.MonotonicClock.getDateStr());
    psychoJS.experiment.addData("total_seconds", globalClock.getTime());
    
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
