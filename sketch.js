
var s1, gui;


var logo;
var bgColor;
var pdf;

//Text Input Variables
var input_title;
var input_title_text;
var input_subtitle1;
var input_subtitle1_text;
var input_subtitle2;
var input_subtitle2_text;
var input_subtitle3;
var input_subtitle3_text;
var textarea;
var textarea_text;
var textControlxOffset;
var textControlyOffset;

//Image input Variables
var input_image;
var input_image_text;
var img;
var imageSize_slider;
var image_size_text;
var imageLocX_slider;
var imageLocY_slider;
var imageLocX_text;
var imageLocY_text;

//Save Variables
var saveImage_button;
var saveImageText;
var play_button;
var pause_button;
var pauseToggle = true;


//Save gif Variables
var gifLength = 180;
var canvas;
var recordingStrat;
var recordingStop;
var recordingToggle_start = false;
var recordingToggle_stop = false;
var gif_title_text;
var animationLength_text;
var gif_select_animationLength;
var gif_s_text;
var startFrame = 0;
var endFrame;

//Shape Options
var shape001_button;
var shape002_button;
var shape003_button;

//basic and advanced Options
var shape001_option;
var shape001_option_advanced;
var shape001_option_basic;
var shape002_option;
var shape002_option_control;

//shape001 Variables
var shape001_slider_number;
var shape001_slider_number_text;
var shape001_slider_vertex;
var shape001_slider_vertex_text;
var shape001_slider_radius;
var shape001_slider_radius_text;
var shape001_slider_step;
var shape001_slider_step_text;
var shape001_slider_maxStrokeWeight;
var shape001_slider_maxStrokeWeight_text;
var shape001_slider_minStrokeWeight;
var shape001_slider_minStrokeWeight_text;
var shape001_slider_scale;
var shape001_slider_scale_text;
var shape001_radio_fillMode;
var shape001_slider_startColor;
var shape001_slider_startColor_text;
var shape001_slider_endColor;
var shape001_slider_endColor_text;
var shape001_colorPicker;
var shape001_slider_colorOffset;
var shape001_slider_colorOffset_text;
var shape001_slider_flash;
var shape001_slider_flash_text;
var shape001_slider_speed;
var shape001_slider_speed_text;
var shape001_slider_MaxAmplitude;
var shape001_slider_MaxAmplitude_text;
var shape001_slider_MinAmplitude;
var shape001_slider_MinAmplitude_text;
var shape001_randomButton;

var shape001_control;

//shape002 Variables
var shape002_b;
var shape002_step;
var shape002_lineWeight;
var shape002_flag;

var shape002_slider_lineWeight;
var shape002_slider_lineWeight_text;
var shape002_control;

//shape003 Variables
var shape003_particles_a = [];
var shape003_particles_b = [];
var shape003_particles_c = [];
var shape003_nums =200;
var shape003_noiseScale = 800;


function preload() {
  logo = loadImage('data/tandon_logo_white.png');
}

var setup = function() {

  //dat.GUI.toggleHide();
  //createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(539, 696);
  cnv.addClass('canvas');
  cnv.parent('canvas');
  cnv.style('z-index','1');
  canvas = cnv.canvas;

  bgColor = color(0);
  background(bgColor);
  //smooth();
  //var cnv = createCanvas(539, 696, SVG);

  //gif Start
  // if (recordingToggle_stop){
  //   capturer.start();
  // }



  //cnv.position(window.screen.availWidth - 539/2,150);

  colorMode(HSB, 360, 100, 100, 100);

  s1 = new Shape(width/2, height/2, 100);
  //shape001[0] = new Shape(width/2, height/2, 100);
  //gui.add(s1, 'num', 1, 20);

  //initialize shape002
  shape002_lineWeight = 10;
  shape002_flag = false;

  //initialize shape003
  for(var i = 0; i < shape003_nums; i++){
		shape003_particles_a[i] = new shape003_Particle(random(0, width),random(0,height));
		shape003_particles_b[i] = new shape003_Particle(random(0, width),random(0,height));
		shape003_particles_c[i] = new shape003_Particle(random(0, width),random(0,height));
	}

  //Text Input GUI
  textControlxOffset = -500;

  input_title_text = createElement('h2','Title');
  //input_title_text.position(740+textControlxOffset,140);
  input_title_text.parent('c1-line-1');
  input_title_text.addClass('column-1');
  input_title = createInput('EVAN ABEL');
  //input_title.position(800+textControlxOffset,130);
  input_title.addClass('textInput','column-1');
  input_title.parent('c1-line-1');

  input_subtitle1_text = createElement('h2','Subtitle 1');
  //input_subtitle1_text.position(700+textControlxOffset,200);
  input_subtitle1_text.parent('c1-line-2');
  input_subtitle1_text.addClass('column-1');
  input_subtitle1 = createInput('IDM Speaker Series 2020');
  //input_subtitle1.position(800+textControlxOffset,190);
  input_subtitle1.addClass('textInput','column-1');
  input_subtitle1.parent('c1-line-2');

  input_subtitle2_text = createElement('h2','Subtitle 2');
  //input_subtitle2_text.position(700+textControlxOffset,260);
  input_subtitle2_text.parent('c1-line-3');
  input_subtitle2_text.addClass('column-1');
  input_subtitle2 = createInput('DOCUMENTARY PRODUCTION');
  //input_subtitle2.position(800+textControlxOffset,250);
  input_subtitle2.addClass('textInput','column-1');
  input_subtitle2.parent('c1-line-3');

  input_subtitle3_text = createElement('h2','Subtitle 3');
  //input_subtitle3_text.position(700+textControlxOffset,320);
  input_subtitle3_text.parent('c1-line-4');
  input_subtitle3_text.addClass('column-1');
  input_subtitle3 = createInput('STUDIO & CREATIVE THINK TANK');
  //input_subtitle3.position(800+textControlxOffset,310);
  input_subtitle3.addClass('textInput','column-1');
  input_subtitle3.parent('c1-line-4');

  textarea_text = createElement('h2','Time&Location');
  //textarea_text.position(650+textControlxOffset,380);
  textarea_text.addClass('column-1','center');
  textarea_text.parent('c1-line-5');
  textarea = createElement('textarea','6:00-7:00PM');
  //textarea.position(800+textControlxOffset,400);
  textarea.addClass('textArea','column-1');
  textarea.parent('c1-line-5');


  //Image Input GUI
  input_image_text = createElement('h2','Upload image');
  //input_image_text.position(660+textControlxOffset,580);
  input_image_text.addClass('column-1');
  input_image_text.parent('c1-line-6');
  input_image = createFileInput(handleFile);
  //input_image.position(800+textControlxOffset, 600);
  input_image.addClass('column-1');
  input_image.parent('c1-line-6');

  image_size_text = createElement('h3','Size');
  //image_size_text.position(750+textControlxOffset,620);
  image_size_text.addClass('column-1');
  image_size_text.parent('c1-line-7');
  imageSize_slider = createSlider(1,10,5);
  //imageSize_slider.position(800+textControlxOffset,640);
  imageSize_slider.addClass('slider','column-1');
  imageSize_slider.parent('c1-line-7');

  imageLocX_text = createElement('h3','X Location');
  //imageLocX_text.position(710+textControlxOffset,650);
  imageLocX_text.addClass('column-1');
  imageLocX_text.parent('c1-line-8');
  imageLocX_slider = createSlider(-windowWidth,windowWidth,290);
  //imageLocX_slider.position(800+textControlxOffset,670);
  imageLocX_slider.addClass('slider','column-1');
  imageLocX_slider.parent('c1-line-8');

  imageLocY_text = createElement('h3','Y Location');
  //imageLocY_text.position(710+textControlxOffset,680);
  imageLocY_text.addClass('column-1');
  imageLocY_text.parent('c1-line-9');
  imageLocY_slider = createSlider(-windowHeight,windowHeight,640);
  //imageLocY_slider.position(800+textControlxOffset,700);
  imageLocY_slider.addClass('slider','column-1');
  imageLocY_slider.parent('c1-line-9');

  //Save GUI
  saveImageText = createElement('h2',"Save design as an Image");
  //saveImageText.position(720,800);
  saveImageText.addClass('column-2');
  saveImageText.parent('imageArea-line1');

  saveImage_button = createButton('Save Image');
  saveImage_button.mousePressed(saveImage);
  //saveImage_button.position(780,920);
  saveImage_button.addClass('column-2');
  saveImage_button.parent('imageArea-line3');


  play_button = createButton('Play');
  //play_button.position(720,860);
  play_button.mousePressed(playCanvas);
  play_button.addClass('column-2');
  play_button.parent('imageArea-line2');

  pause_button = createButton('Pause');
  //pause_button.position(800,860);
  pause_button.mousePressed(pauseCanvas);
  pause_button.addClass('column-2');
  pause_button.parent('imageArea-line2');

  gif_title_text = createElement('h2', 'Save design as a GIF');
  //gif_title_text.position(1050,800);
  gif_title_text.addClass('column-2');
  gif_title_text.parent('gifArea-line1');

  recordingStop = createButton("Start Recording");
  //recordingStop.position(1100,920);
  recordingStop.mousePressed(stopRecording);
  recordingStop.addClass('column-2');
  recordingStop.parent('gifArea-line3');


  animationLength_text = createElement('h3', 'Animation Length:');
  //animationLength_text.position(1050,840);
  animationLength_text.addClass('column-2');
  animationLength_text.parent('gifArea-line2');

  gif_select_animationLength = createSelect();
  //gif_select_animationLength.position(1190,854);
  gif_select_animationLength.option(3);
  gif_select_animationLength.option(5);
  gif_select_animationLength.option(7);
  gif_select_animationLength.addClass('column-2');
  gif_select_animationLength.parent('gifArea-line2');

  gif_s_text = createElement('h3', 's');
  //gif_s_text.position(1230,840);
  gif_s_text.addClass('column-2');
  gif_s_text.parent('gifArea-line2');




  //Shape option GUI
  shape001_button = createButton("Vertex");
  //shape001_button.position(50,100);
  shape001_button.mousePressed(shape001display);
  shape001_button.parent('c3-line1');
  shape001_button.attribute('title','This algorithm generates vertex based shape.');

  shape002_button = createButton("Maze");
  //shape002_button.position(150,100);
  shape002_button.mousePressed(shape002display);
  shape002_button.parent('c3-line1');
  shape002_button.attribute('title','This algorithm generates maze-like pattern.');

  shape003_button = createButton("Noise");
  //shape002_button.position(150,100);
  shape003_button.mousePressed(shape003display);
  shape003_button.parent('c3-line1');
  shape003_button.attribute('title','This algorithm generates maze-like pattern.');

  //basic and advanced panel GUI
  shape001_option = createRadio();
  shape001_option.addClass('option, shape001');
  shape001_option.parent('c3-line2');
  shape001_option.option('basic');
  shape001_option.option('advanced');
  shape001_option.value('basic');
  shape001_option.changed(shape001Option);

  // shape002_option = createRadio();
  // shape002_option.addClass('option, shape002');
  // shape002_option.parent('c3-line2');
  // shape002_option.option('basic');
  // shape002_option.option('advanced');
  // shape002_option.value('basic');



  //THINGs001 GUI
  var shape001x = 1350;

  shape001_slider_number_text = createElement('h3', 'Number');
  //shape001_slider_number_text.position(shape001x,150);
  shape001_slider_number_text.addClass('shape001, shape001_basic');
  shape001_slider_number_text.parent('c3-line2');
  shape001_slider_number_text.attribute('title',"adjust the line's number");
  shape001_slider_number = createSlider(1,60,25);
  //shape001_slider_number.position(shape001x+100,165);
  shape001_slider_number.addClass('slider, shape001, shape001_basic');
  shape001_slider_number.parent('c3-line2');
  shape001_slider_number.attribute('title',"adjust the line's number");

  shape001_slider_vertex_text = createElement('h3', 'Vertex');
  //shape001_slider_vertex_text.position(shape001x,180);
  shape001_slider_vertex_text.addClass('shape001, shape001_basic');
  shape001_slider_vertex_text.parent('c3-line3');
  shape001_slider_vertex_text.attribute('title',"adjust the vertex's number");
  shape001_slider_vertex = createSlider(1,100,3.2);
  //shape001_slider_vertex.position(shape001x+100,195);
  shape001_slider_vertex.addClass('slider, shape001, shape001_basic');
  shape001_slider_vertex.parent('c3-line3');
  shape001_slider_vertex.attribute('title',"adjust the line's number");

  shape001_slider_radius_text = createElement('h3', 'Radius');
  //shape001_slider_radius_text.position(shape001x,210);
  shape001_slider_radius_text.addClass('shape001, shape001_basic');
  shape001_slider_radius_text.parent('c3-line4');
  shape001_slider_radius_text.attribute('title',"adjust the pattern's radius");
  shape001_slider_radius = createSlider(-500,500,85);
  //shape001_slider_radius.position(shape001x+100,225);
  shape001_slider_radius.addClass('slider, shape001, shape001_basic');
  shape001_slider_radius.parent('c3-line4');
  shape001_slider_radius.attribute('title',"adjust the line's number");

  shape001_slider_step_text = createElement('h3', 'Step');
  //shape001_slider_step_text.position(shape001x,240);
  shape001_slider_step_text.addClass('shape001, shape001_basic');
  shape001_slider_step_text.parent('c3-line5');
  shape001_slider_step_text.attribute('title',"adjust the space between lines");
  shape001_slider_step = createSlider(1,10,1);
  //shape001_slider_step.position(shape001x+100,255);
  shape001_slider_step.addClass('slider, shape001, shape001_basic');
  shape001_slider_step.parent('c3-line5');
  shape001_slider_step.attribute('title',"adjust the space between lines");


  shape001_slider_maxStrokeWeight_text = createElement('h4', 'MaxStrokeWight');
  //shape001_slider_maxStrokeWeight_text.position(shape001x,270);
  shape001_slider_maxStrokeWeight_text.parent('c3-line6');
  shape001_slider_maxStrokeWeight_text.addClass('shape001, shape001_advanced');
  shape001_slider_maxStrokeWeight_text.attribute('title',"Maximum thickness of the line");
  shape001_slider_maxStrokeWeight = createSlider(0,20,6);
  shape001_slider_maxStrokeWeight.addClass('slider, shape001, shape001_advanced');
  //shape001_slider_maxStrokeWeight.position(shape001x+100,285);
  shape001_slider_maxStrokeWeight.parent('c3-line6');
  shape001_slider_maxStrokeWeight.attribute('title',"Maximum thickness of the line");

  shape001_slider_minStrokeWeight_text = createElement('h4', 'MinStrokeWight');
  //shape001_slider_minStrokeWeight_text.position(shape001x,300);
  shape001_slider_minStrokeWeight_text.addClass('shape001, shape001_advanced');
  shape001_slider_minStrokeWeight_text.parent('c3-line7');
  shape001_slider_minStrokeWeight_text.attribute('title',"Minimum thickness of the line");
  shape001_slider_minStrokeWeight = createSlider(0,20,1);
  //shape001_slider_minStrokeWeight.position(shape001x+100,315);
  shape001_slider_minStrokeWeight.addClass('slider, shape001, shape001_advanced');
  shape001_slider_minStrokeWeight.parent('c3-line7');
  shape001_slider_minStrokeWeight.attribute('title',"Minimum thickness of the line");

  shape001_slider_scale_text = createElement('h3', 'Scale');
  //shape001_slider_scale_text.position(shape001x,330);
  shape001_slider_scale_text.addClass('shape001, shape001_basic');
  shape001_slider_scale_text.parent('c3-line8');
  shape001_slider_scale_text.attribute('title',"Scale of the pattern");
  shape001_slider_scale = createSlider(0,100,7);
  //shape001_slider_scale.position(shape001x+100,345);
  shape001_slider_scale.addClass('slider, shape001, shape001_basic');
  shape001_slider_scale.parent('c3-line8');
  shape001_slider_scale.attribute('title',"Scale of the pattern");


  shape001_radio_fillMode = createSelect();
  shape001_radio_fillMode.option('Gradient');
  shape001_radio_fillMode.option('Solid');
  shape001_radio_fillMode.addClass('select, shape001, shape001_basic');
  //shape001_radio_fillMode.position(shape001x,400);
  shape001_radio_fillMode.parent('c3-line9');

  shape001_colorPicker = createColorPicker('#ff0000');
  shape001_colorPicker.addClass('colorPicker, shape001, shape001_basic');
  //shape001_colorPicker.position(shape001x+100,400);
  shape001_colorPicker.parent('c3-line9');

  shape001_slider_startColor_text = createElement('h3', 'StartColor');
  //shape001_slider_startColor_text.position(shape001x,435);
  shape001_slider_startColor_text.addClass('shape001, shape001_advanced');
  shape001_slider_startColor_text.parent('c3-line10');
  shape001_slider_startColor_text.attribute('title',"Inner gradient color");
  shape001_slider_startColor = createSlider(-360,0,0);
  //shape001_slider_startColor.position(shape001x+100,450);
  shape001_slider_startColor.addClass('slider, shape001, shape001_advanced');
  shape001_slider_startColor.parent('c3-line10');
  shape001_slider_startColor.attribute('title',"Inner gradient color");

  shape001_slider_endColor_text = createElement('h3', 'EndColor');
  //shape001_slider_endColor_text.position(shape001x,465);
  shape001_slider_endColor_text.addClass('shape001, shape001_advanced');
  shape001_slider_endColor_text.parent('c3-line11');
  shape001_slider_endColor_text.attribute('title',"Outer gradient color");
  shape001_slider_endColor = createSlider(0,360,280);
  //shape001_slider_endColor.position(shape001x+100,480);
  shape001_slider_endColor.addClass('slider, shape001, shape001_advanced');
  shape001_slider_endColor.parent('c3-line11');
  shape001_slider_endColor.attribute('title',"Outer gradient color");

  shape001_slider_colorOffset_text = createElement('h3', 'ColorOffset');
  //shape001_slider_colorOffset_text.position(shape001x,495);
  shape001_slider_colorOffset_text.addClass('shape001, shape001_advanced');
  shape001_slider_colorOffset_text.parent('c3-line12');
  shape001_slider_colorOffset_text.attribute('title',"set gradient color's position");
  shape001_slider_colorOffset = createSlider(0,10,0.7);
  //shape001_slider_colorOffset.position(shape001x+100,510);
  shape001_slider_colorOffset.addClass('slider, shape001, shape001_advanced');
  shape001_slider_colorOffset.parent('c3-line12');
  shape001_slider_colorOffset.attribute('title',"set gradient color's position");

  shape001_slider_flash_text = createElement('h3', 'Flash');
  //shape001_slider_flash_text.position(shape001x,585);
  shape001_slider_flash_text.addClass('shape001, shape001_advanced');
  shape001_slider_flash_text.parent('c3-line13');
  shape001_slider_flash_text.attribute('title',"flicker frequency");
  shape001_slider_flash = createSlider(0.1,10.0,7.0);
  //shape001_slider_flash.position(shape001x+100,600);
  shape001_slider_flash.addClass('slider, shape001, shape001_advanced');
  shape001_slider_flash.parent('c3-line13');
  shape001_slider_flash.attribute('title',"flicker frequency");

  shape001_slider_speed_text = createElement('h3', 'Speed');
  //shape001_slider_speed_text.position(shape001x,615);
  shape001_slider_speed_text.addClass('shape001, shape001_basic');
  shape001_slider_speed_text.parent('c3-line14');
  shape001_slider_speed_text.attribute('title',"adjust pattern's motion speed");
  shape001_slider_speed = createSlider(3.0,10.0,4.29);
  //shape001_slider_speed.position(shape001x+100,630);
  shape001_slider_speed.addClass('slider, shape001, shape001_basic');
  shape001_slider_speed.parent('c3-line14');
  shape001_slider_speed.attribute('title',"adjust pattern's motion speed");

  shape001_slider_MaxAmplitude_text = createElement('h4', 'MaxAmplitude');
  //shape001_slider_MaxAmplitude_text.position(shape001x,645);
  shape001_slider_MaxAmplitude_text.addClass('shape001, shape001_advanced');
  shape001_slider_MaxAmplitude_text.parent('c3-line15');
  shape001_slider_MaxAmplitude_text.attribute('title',"Maximum speed");
  shape001_slider_MaxAmplitude = createSlider(0,250,135);
  //shape001_slider_MaxAmplitude.position(shape001x+100,660);
  shape001_slider_MaxAmplitude.addClass('slider, shape001, shape001_advanced');
  shape001_slider_MaxAmplitude.parent('c3-line15');
  shape001_slider_MaxAmplitude.attribute('title',"Maximum speed");

  shape001_slider_MinAmplitude_text = createElement('h4', 'MinAmplitude');
  //shape001_slider_MinAmplitude_text.position(shape001x,675);
  shape001_slider_MinAmplitude_text.addClass('shape001, shape001_advanced');
  shape001_slider_MinAmplitude_text.parent('c3-line16');
  shape001_slider_MinAmplitude_text.attribute('title',"Minimum speed");
  shape001_slider_MinAmplitude = createSlider(-250,0,-250);
  //shape001_slider_MinAmplitude.position(shape001x+100,690);
  shape001_slider_MinAmplitude.addClass('slider, shape001, shape001_advanced');
  shape001_slider_MinAmplitude.parent('c3-line16');
  shape001_slider_MinAmplitude.attribute('title',"Minimum speed");

  shape001_randomButton = createButton("Random");
  shape001_randomButton.mousePressed(shape001_random);
  //shape001_randomButton.position(shape001x,800);
  shape001_randomButton.addClass('shape001_randomButton, shape001');
  shape001_randomButton.parent('c3-line17');
  shape001_randomButton.attribute('title',"Random all variables");

  shape001_control = selectAll('.shape001');

  //shape002 GUI
  shape002_slider_lineWeight_text = createElement('h3', 'LineWeight');
  //shape001_slider_lineWeight_text.position(shape001x,150);
  shape002_slider_lineWeight_text.addClass('shape002');
  shape002_slider_lineWeight_text.parent('c3-line2');
  shape002_slider_lineWeight_text.attribute('title',"adjust line weight");
  shape002_slider_lineWeight = createSlider(1,60,25);
  //shape002_slider_lineWeight.position(shape001x+100,165);
  shape002_slider_lineWeight.addClass('slider, shape002');
  shape002_slider_lineWeight.parent('c3-line2');
  shape002_slider_lineWeight.attribute('title',"adjust line weight");


  shape002_control = selectAll('.shape002');
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].hide();
  }

  //option selector
  shape001_option_advanced = selectAll('.shape001_advanced');
  for (var i = 0; i < shape001_option_advanced.length; i++) {
    shape001_option_advanced[i].hide();
  }

  shape001_option_basic = selectAll('.shape001_basic');
  for (var i = 0; i < shape001_option_basic.length; i++) {
    shape001_option_basic[i].show();
  }

};
var currentFrame;
function startRecording() {

  recordingToggle_start = true;
  recordingToggle_stop = false;

}

var capturer;
function stopRecording() {
   capturer = new CCapture( {
        framerate: 60,
        verbose: true,
        format: 'gif',
        workersPath: './js/',
      } );
      capturer.start();
  recordingToggle_stop = true;
  // recordingToggle_start = true;
   //if (recordingToggle_start){


  //}


}

function shape001Option() {
  if (shape001_option.value() == 'basic') {
    for (var i = 0; i < shape001_option_advanced.length; i++) {
      shape001_option_advanced[i].hide();
    }
    for (var i = 0; i < shape001_option_basic.length; i++) {
      shape001_option_basic[i].show();
    }
  }

  if (shape001_option.value() == 'advanced') {
    for (var i = 0; i < shape001_option_advanced.length; i++) {
      shape001_option_advanced[i].show();
    }
    for (var i = 0; i < shape001_option_basic.length; i++) {
      shape001_option_basic[i].hide();
    }
  }
}

var toggle_01 = true;
var toggle_02 = false;
var toggle_03 = false;

function shape001display() {
  for (var i = 0; i < shape001_option_basic.length; i++) {
    shape001_option_basic[i].show();
  }
  for (var j = 0; j < shape001_control.length; j++) {
    shape001_control[j].show();
  }
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].hide();
  }

  toggle_01 = true;
  toggle_02 = false;
  toggle_03 = false;

}
function shape002display() {
  for (var i = 0; i < shape001_option_advanced.length; i++) {
    shape001_option_advanced[i].hide();
  }
  for (var i = 0; i < shape001_option_basic.length; i++) {
    shape001_option_basic[i].hide();
  }
  for (var j = 0; j < shape001_control.length; j++) {
    shape001_control[j].hide();
  }
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].show();
  }
  toggle_01 = false;
  toggle_02 = true;
  toggle_03 = false;

}

function shape003display() {
  for (var i = 0; i < shape001_option_advanced.length; i++) {
    shape001_option_advanced[i].hide();
  }
  for (var i = 0; i < shape001_option_basic.length; i++) {
    shape001_option_basic[i].hide();
  }
  for (var j = 0; j < shape001_control.length; j++) {
    shape001_control[j].hide();
  }
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].hide();
  }
  background(bgColor);
  toggle_01 = false;
  toggle_02 = false;
  toggle_03 = true;
}




var draw = function() {

    // background(bgColor);
    //background(slider.value());
    noFill();
    stroke(255,65);

    if (toggle_01) {
      drawshape001();
      //basic and advanced control

    }

    if (toggle_02) {
      drawshape002();
      //toggle_02 = !toggle_02;
    }

    if (toggle_03) {
      noStroke();
      drawshape003();
    }



    //Text part
    textSize(34);
    colorMode(RGB);
    fill(255);
    noStroke();
    textStyle(BOLD);
    text(input_title.value(), 20, 53);

    textSize(18);
    textStyle(NORMAL);
    text(input_subtitle1.value(), 300, 53);

    textSize(14);
    textStyle(NORMAL);
    text(input_subtitle2.value(), 20, 90);

    textSize(14);
    textStyle(NORMAL);
    text(input_subtitle3.value(), 20, 110);

    textSize(18);
    textStyle(NORMAL);
    text(textarea.value(), 20, 600);

    //diaplay the logo
    //image(logo, 290, 640, 205, 32);

    // if (keyIsPressed === true) {
    // save("myPoster.svg");
  //}

      //Image part
      if (img) {
        image(img, imageLocX_slider.value(), imageLocY_slider.value(), img.width*imageSize_slider.value()/10, img.height*imageSize_slider.value()/10);
      }

    //gif part
    if (recordingToggle_stop) {
    recordCanvas(gif_select_animationLength.value()*60);
  }

};

function recordCanvas(endFrame) {

    startFrame++;
    if (startFrame < endFrame) {
      capturer.capture(canvas);
    } else {
      capturer.stop();
      capturer.save();
      recordingToggle_stop = false;
      startFrame = 0;
    }

}

function drawshape001() {

  frameRate(60);
  background(bgColor);
  //Mian graphic part
  var fillMode = shape001_radio_fillMode.value();
  for (var i = 0; i < shape001_slider_number.value(); i = i + shape001_slider_step.value()) {
   var deg = millis()/shape001_slider_flash.value() + i * 28 ;
   var rad = radians(deg);
   var len = sin(rad);
   var weight = map(len, -1.0, 1.0, shape001_slider_maxStrokeWeight.value(), shape001_slider_minStrokeWeight.value());
   strokeWeight(weight);
   //stroke(params.Color, map(i,0,params.Number/0.9,0,100));

   //stroke(map(i,0,params.Number/0.7,0,360),100,100,50);

   if (shape001_option.value() == 'advanced') {
    shape001_radio_fillMode.value('Gradient');
    colorMode(HSB);
    stroke(map(i,0,shape001_slider_number.value()/shape001_slider_colorOffset.value(),shape001_slider_startColor.value(),shape001_slider_endColor.value()),100,100,map(i,0,shape001_slider_number.value()/0.9,0,100));

  }
  else if (shape001_option.value() == 'basic'){
    colorMode(RGB);
    shape001_radio_fillMode.value('Solid');
    stroke(shape001_colorPicker.color());

  }
   //ellipse(width/2,height/2,i*25,i*25);
   //drawPolygon(width/2,height/2,i*7,4);
   s1.display(shape001_slider_radius.value() + i*shape001_slider_scale.value(), shape001_slider_vertex.value());
  }
}

function drawshape002() {

  frameRate(3);
  //if (shape002_flag) {
    background(bgColor);
    for (var i = 0; i < width; i += shape002_step) {
      for (var j = 0; j < height; j += shape002_step) {
          shape002_drawLine(i,j,shape002_step,shape002_step);
      }

    }
    //shape002_flag = !shape002_flag;
    //}

}

function drawshape003() {
  frameRate(60);
  // background(bgColor);
  for(var i = 0; i < shape003_nums; i++){
		var radius = map(i,0,shape003_nums,1,2);
		// var alpha = map(i,0,shape003_nums,0,150);
    var alpha = 225;

		fill(69,33,124,alpha);
		shape003_particles_a[i].move();
		shape003_particles_a[i].display(radius);
		shape003_particles_a[i].checkEdge();

		fill(7,153,242,alpha);
		shape003_particles_b[i].move();
		shape003_particles_b[i].display(radius);
		shape003_particles_b[i].checkEdge();

		fill(7,153,242,alpha);
		shape003_particles_c[i].move();
		shape003_particles_c[i].display(radius);
		shape003_particles_c[i].checkEdge();
	}
}

function shape002_drawLine(x,y,width,height){

  shape002_step = random(40,80);
  stroke(random(50,255),random(50,255));
  strokeWeight(shape002_slider_lineWeight.value());
  b = random(0.0,1.0);
  if (b > 0.5) {
    line(x,y,x+width,y+height);
  } else {
    line(x+width,y,x,y+height);
  }

}

function shape003_Particle(x, y){
	this.dir = createVector(0, 0);
	this.vel = createVector(0, 0);
	this.pos = createVector(x, y);
	this.speed = 0.4;

	this.move = function(){
		var angle = noise(this.pos.x/shape003_noiseScale, this.pos.y/shape003_noiseScale)*TWO_PI*shape003_noiseScale;
		this.dir.x = cos(angle);
		this.dir.y = sin(angle);
		this.vel = this.dir.copy();
		this.vel.mult(this.speed);
		this.pos.add(this.vel);
	}

	this.checkEdge = function(){
		if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
			this.pos.x = random(50, width);
			this.pos.y = random(50, height);
		}
	}

	this.display = function(r){
		ellipse(this.pos.x, this.pos.y, r, r);
	}
}

function handleFile(file) {
  if (file.type === 'image') {
    img = createImg(file.data);
    img.hide();
  } else {
    img = null;
  }
}

function shape001_random(){

  randomColor = color(random(255), random(255), random(255));

  var rNumber = random(1,60);
  shape001_slider_number.value(rNumber);

  var rVertex = random(1,100);
  shape001_slider_vertex.value(rVertex);

  var rRadius = random(-500,500);
  shape001_slider_radius.value(rRadius);

  var rStep = random(1,10);
  shape001_slider_step.value(rStep);

  var rMaxStrokeWeight = random(0,20);
  shape001_slider_maxStrokeWeight.value(rMaxStrokeWeight);

  var rMinStrokeWeight = random(0,20);
  shape001_slider_minStrokeWeight.value(rMinStrokeWeight);

  var rScale = random(0,100);
  shape001_slider_scale.value(rScale);

  var rFillMode = random(['Gradient','Solid']);
  shape001_radio_fillMode.value(rFillMode);

  var rColor = color(random(255), random(255), random(255));
  var r = random(255);
  var g = random(255);
  var b = random(255);
  shape001_colorPicker.color(rColor);

  var rStartColor = random(-360,0);
  shape001_slider_startColor.value(rStartColor);

  var rEndColor = random(0,360);
  shape001_slider_endColor.value(rEndColor);

  var rOffset = random(0,10);
  shape001_slider_colorOffset.value(rOffset);

  var rFlash = random(0.1, 10);
  shape001_slider_flash.value(rFlash);

  var rSpeed = random(3,10);
  shape001_slider_speed.value(rSpeed);

  var rMaxAmplitude = random(0,250);
  shape001_slider_MaxAmplitude.value(rMaxAmplitude);

  var rMinAmplitude = random(-250,0);
  shape001_slider_MinAmplitude.value(rMinAmplitude);

}

function saveImage() {
  //save(cnv, "myPoster.svg");
  //save("myPoster.png");
  //save("myPoster.svg");
  save("myPoster.png");
}

function playCanvas() {
  frameRate(60);
}

function pauseCanvas() {
  if (pauseToggle) {
    frameRate(0);
  }

}
