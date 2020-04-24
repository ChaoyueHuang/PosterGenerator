
var s1, gui;


var logo;
var bgColor;
var pdf;

//font
var fontGeorgia, fontTimesnewroman, fontArial, fontArialblack;
var title_select;
var subtitle1_select;
var subtitle2_select;
var subtitle3_select;
var textarea_select;

//font size
var title_slider_size;
var title_slider_size_text;
var subtitle1_slider_size;
var subtitle1_slider_size_text;
var subtitle2_slider_size;
var subtitle2_slider_size_text;
var subtitle3_slider_size;
var subtitle3_slider_size_text;
var textarea_slider_size;
var textarea_slider_size_text;

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

var title_slider_x;
var title_slider_x_text;
var title_slider_y;
var title_slider_y_text;
var subtitle1_slider_x;
var subtitle1_slider_X_text;
var subtitle1_slider_y;
var subtitle1_slider_y_text;
var subtitle2_slider_x;
var subtitle2_slider_X_text;
var subtitle2_slider_y;
var subtitle2_slider_y_text;
var subtitle3_slider_x;
var subtitle3_slider_X_text;
var subtitle3_slider_y;
var subtitle3_slider_y_text;
var textarea_slider_x;
var textarea_slider_x_text;
var textarea_slider_y;
var textarea_slider_y_text;

//Text options
var typographic1_button;
var typographic2_button;
var typographic3_button;
var typographic4_button;

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

//Background color Variables
var bgcolor_text;
var bgcolor_colorPicker;

//text color Variables
var textcolor_text;
var textcolor_colorPicker;

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
var shape002_slider_lineSpace;
var shape002_slider_lineSpace_text;
var shape002_color_text;
var shape002_colorPicker;
var shape002_slider_xoffset;
var shape002_slider_xoffset_text;
var shape002_slider_yoffset;
var shape002_slider_yoffset_text;
var shape002_control;

//shape003 Variables
var shape003_particles_a = [];
var shape003_particles_b = [];
var shape003_particles_c = [];
var shape003_slider_number;
var shape003_slider_number_text;
var shape003_slider_noiseScale;
var shape003_slider_noiseScale_text;
var color_a_num = 0;
var color_b_num = 0;
var color_c_num = 0;
var color_a;
var color_b;
var color_c;
var shape003_randomButton;
var shape003_control;


function preload() {
  logo = loadImage('data/tandon_logo_white.png');
  fontGeorgia = loadFont('fonts/Georgia.ttf');
  fontTimesnewroman = loadFont('fonts/times new roman.ttf');
  fontArial = loadFont('fonts/Arial.ttf');
  fontArialblack = loadFont('fonts/Arial Black.ttf');
}

var setup = function() {
  color_a = color(69, 33, 124);
  color_b = color(69, 33, 124);
  color_c = color(69, 33, 124);
  //dat.GUI.toggleHide();
  //createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(539, 696);
  cnv.addClass('canvas');
  cnv.parent('canvas');
  cnv.style('z-index','1');
  canvas = cnv.canvas;

  bgColor = color(0);
  background(bgColor);
  smooth();
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

  //Text typographic GUI
  typographic1_button = createButton("Style a");
  typographic1_button.mousePressed(typographic1display);
  typographic1_button.parent('c1-line-1');
  typographic1_button.addClass('typographic_button');
  // typographic1_button.attribute('title','This algorithm generates vertex based shape.');

  typographic2_button = createButton("Style b");
  typographic2_button.mousePressed(typographic2display);
  typographic2_button.parent('c1-line-1');
  // typographic2_button.attribute('title','This algorithm generates vertex based shape.');

  typographic3_button = createButton("Style c");
  typographic3_button.mousePressed(typographic3display);
  typographic3_button.parent('c1-line-1');
  // typographic3_button.attribute('title','This algorithm generates vertex based shape.');

  typographic4_button = createButton("Style d");
  typographic4_button.mousePressed(typographic4display);
  typographic4_button.parent('c1-line-1');
  // typographic4_button.attribute('title','This algorithm generates vertex based shape.');

  //Text Input GUI
  textControlxOffset = -500;

  input_title_text = createElement('h2','Title');
  input_title_text.parent('c1-line-3');
  input_title_text.addClass('column-1');
  input_title = createInput('EVAN ABEL');
  input_title.addClass('textInput','column-1');
  input_title.parent('c1-line-3');

  title_select = createSelect();
  title_select.option('Arial');
  title_select.option('ArialBlack');
  title_select.option('Georgia');
  title_select.option('TimesNewRoman');
  title_select.parent('c1-line-3');
  title_select.addClass('column-1');
  title_select.changed(titleChangeFont);

  title_slider_size_text = createElement('h3','size');
  title_slider_size_text.parent('c1-line-3');
  title_slider_size_text.addClass('column-1');
  title_slider_size = createSlider(0,120,34);
  title_slider_size.parent('c1-line-3');
  title_slider_size.addClass('column-1');

  title_slider_x_text = createElement('h3','x');
  title_slider_x_text.parent('c1-line-4');
  title_slider_x_text.addClass('column-1');
  title_slider_x = createSlider(0,width,20);
  title_slider_x.parent('c1-line-4');
  title_slider_x.addClass('column-1');

  title_slider_y_text = createElement('h3','y');
  title_slider_y_text.parent('c1-line-4');
  title_slider_y_text.addClass('column-1');
  title_slider_y = createSlider(0,height,53);
  title_slider_y.parent('c1-line-4');
  title_slider_y.addClass('column-1');

  input_subtitle1_text = createElement('h2','Subtitle 1');
  input_subtitle1_text.parent('c1-line-5');
  input_subtitle1_text.addClass('column-1');
  input_subtitle1 = createInput('IDM Speaker Series 2020');
  input_subtitle1.addClass('textInput','column-1');
  input_subtitle1.parent('c1-line-5');

  subtitle1_select = createSelect();
  subtitle1_select.option('Arial');
  subtitle1_select.option('ArialBlack');
  subtitle1_select.option('Georgia');
  subtitle1_select.option('TimesNewRoman');
  subtitle1_select.parent('c1-line-5');
  subtitle1_select.addClass('column-1');
  subtitle1_select.changed(subtitle1ChangeFont);

  subtitle1_slider_size_text = createElement('h3','size');
  subtitle1_slider_size_text.parent('c1-line-5');
  subtitle1_slider_size_text.addClass('column-1');
  subtitle1_slider_size = createSlider(0,100,18);
  subtitle1_slider_size.parent('c1-line-5');
  subtitle1_slider_size.addClass('column-1');

  subtitle1_slider_x_text = createElement('h3','x');
  subtitle1_slider_x_text.parent('c1-line-6');
  subtitle1_slider_x_text.addClass('column-1');
  subtitle1_slider_x = createSlider(0,width,300);
  subtitle1_slider_x.parent('c1-line-6');
  subtitle1_slider_x.addClass('column-1');

  subtitle1_slider_y_text = createElement('h3','y');
  subtitle1_slider_y_text.parent('c1-line-6');
  subtitle1_slider_y_text.addClass('column-1');
  subtitle1_slider_y = createSlider(0,height,53);
  subtitle1_slider_y.parent('c1-line-6');
  subtitle1_slider_y.addClass('column-1');

  input_subtitle2_text = createElement('h2','Subtitle 2');
  input_subtitle2_text.parent('c1-line-7');
  input_subtitle2_text.addClass('column-1');
  input_subtitle2 = createInput('DOCUMENTARY PRODUCTION');
  input_subtitle2.addClass('textInput','column-1');
  input_subtitle2.parent('c1-line-7');

  subtitle2_select = createSelect();
  subtitle2_select.option('Arial');
  subtitle2_select.option('ArialBlack');
  subtitle2_select.option('Georgia');
  subtitle2_select.option('TimesNewRoman');
  subtitle2_select.parent('c1-line-7');
  subtitle2_select.addClass('column-1');
  subtitle2_select.changed(subtitle2ChangeFont);

  subtitle2_slider_size_text = createElement('h3','size');
  subtitle2_slider_size_text.parent('c1-line-7');
  subtitle2_slider_size_text.addClass('column-1');
  subtitle2_slider_size = createSlider(0,100,14);
  subtitle2_slider_size.parent('c1-line-7');
  subtitle2_slider_size.addClass('column-1');

  subtitle2_slider_x_text = createElement('h3','x');
  subtitle2_slider_x_text.parent('c1-line-8');
  subtitle2_slider_x_text.addClass('column-1');
  subtitle2_slider_x = createSlider(0,width,20);
  subtitle2_slider_x.parent('c1-line-8');
  subtitle2_slider_x.addClass('column-1');

  subtitle2_slider_y_text = createElement('h3','y');
  subtitle2_slider_y_text.parent('c1-line-8');
  subtitle2_slider_y_text.addClass('column-1');
  subtitle2_slider_y = createSlider(0,height,90);
  subtitle2_slider_y.parent('c1-line-8');
  subtitle2_slider_y.addClass('column-1');

  input_subtitle3_text = createElement('h2','Subtitle 3');
  input_subtitle3_text.parent('c1-line-9');
  input_subtitle3_text.addClass('column-1');
  input_subtitle3 = createInput('STUDIO & CREATIVE THINK TANK');
  input_subtitle3.addClass('textInput','column-1');
  input_subtitle3.parent('c1-line-9');

  subtitle3_select = createSelect();
  subtitle3_select.option('Arial');
  subtitle3_select.option('ArialBlack');
  subtitle3_select.option('Georgia');
  subtitle3_select.option('TimesNewRoman');
  subtitle3_select.parent('c1-line-9');
  subtitle3_select.addClass('column-1');
  subtitle3_select.changed(subtitle3ChangeFont);

  subtitle3_slider_size_text = createElement('h3','size');
  subtitle3_slider_size_text.parent('c1-line-9');
  subtitle3_slider_size_text.addClass('column-1');
  subtitle3_slider_size = createSlider(0,100,14);
  subtitle3_slider_size.parent('c1-line-9');
  subtitle3_slider_size.addClass('column-1');

  subtitle3_slider_x_text = createElement('h3','x');
  subtitle3_slider_x_text.parent('c1-line-10');
  subtitle3_slider_x_text.addClass('column-1');
  subtitle3_slider_x = createSlider(0,width,20);
  subtitle3_slider_x.parent('c1-line-10');
  subtitle3_slider_x.addClass('column-1');

  subtitle3_slider_y_text = createElement('h3','y');
  subtitle3_slider_y_text.parent('c1-line-10');
  subtitle3_slider_y_text.addClass('column-1');
  subtitle3_slider_y = createSlider(0,height,110);
  subtitle3_slider_y.parent('c1-line-10');
  subtitle3_slider_y.addClass('column-1');

  textarea_text = createElement('h2','Text area');
  textarea_text.addClass('column-1','center');
  textarea_text.parent('c1-line-11');
  textarea = createElement('textarea','6:00-7:00PM');
  textarea.addClass('textArea','column-1');
  textarea.parent('c1-line-11');

  textarea_select = createSelect();
  textarea_select.option('Arial');
  textarea_select.option('ArialBlack');
  textarea_select.option('Georgia');
  textarea_select.option('TimesNewRoman');
  textarea_select.parent('c1-line-11');
  textarea_select.addClass('column-1');
  textarea_select.changed(textareaChangeFont);

  textarea_slider_size_text = createElement('h3','size');
  textarea_slider_size_text.parent('c1-line-11');
  textarea_slider_size_text.addClass('column-1');
  textarea_slider_size = createSlider(0,100,18);
  textarea_slider_size.parent('c1-line-11');
  textarea_slider_size.addClass('column-1');

  textarea_slider_x_text = createElement('h3','x');
  textarea_slider_x_text.parent('c1-line-12');
  textarea_slider_x_text.addClass('column-1');
  textarea_slider_x = createSlider(0,width,20);
  textarea_slider_x.parent('c1-line-12');
  textarea_slider_x.addClass('column-1');

  textarea_slider_y_text = createElement('h3','y');
  textarea_slider_y_text.parent('c1-line-12');
  textarea_slider_y_text.addClass('column-1');
  textarea_slider_y = createSlider(0,height,600);
  textarea_slider_y.parent('c1-line-12');
  textarea_slider_y.addClass('column-1');


  //Image Input GUI
  input_image_text = createElement('h2','Upload image');
  //input_image_text.position(660+textControlxOffset,580);
  input_image_text.addClass('column-1');
  input_image_text.parent('c1-line-13');
  input_image = createFileInput(handleFile);
  //input_image.position(800+textControlxOffset, 600);
  input_image.addClass('column-1');
  input_image.parent('c1-line-13');

  image_size_text = createElement('h3','Size');
  //image_size_text.position(750+textControlxOffset,620);
  image_size_text.addClass('column-1');
  image_size_text.parent('c1-line-14');
  imageSize_slider = createSlider(1,10,5);
  //imageSize_slider.position(800+textControlxOffset,640);
  imageSize_slider.addClass('slider','column-1');
  imageSize_slider.parent('c1-line-14');

  imageLocX_text = createElement('h3','X Location');
  //imageLocX_text.position(710+textControlxOffset,650);
  imageLocX_text.addClass('column-1');
  imageLocX_text.parent('c1-line-15');
  imageLocX_slider = createSlider(-windowWidth,windowWidth,290);
  //imageLocX_slider.position(800+textControlxOffset,670);
  imageLocX_slider.addClass('slider','column-1');
  imageLocX_slider.parent('c1-line-15');

  imageLocY_text = createElement('h3','Y Location');
  //imageLocY_text.position(710+textControlxOffset,680);
  imageLocY_text.addClass('column-1');
  imageLocY_text.parent('c1-line-16');
  imageLocY_slider = createSlider(-windowHeight,windowHeight,640);
  //imageLocY_slider.position(800+textControlxOffset,700);
  imageLocY_slider.addClass('slider','column-1');
  imageLocY_slider.parent('c1-line-16');

  //bgcolor GUI
  bgcolor_text = createElement('h2','Background Color');
  bgcolor_text.addClass('column-1');
  bgcolor_text.parent('c1-line-17');

  bgcolor_colorPicker = createColorPicker('#000000');
  bgcolor_colorPicker.addClass('colorPicker, column-1');
  bgcolor_colorPicker.parent('c1-line-17');

  //textcolor GUI
  textcolor_text = createElement('h2','Text Color');
  textcolor_text.addClass('column-1');
  textcolor_text.parent('c1-line-2');

  textcolor_colorPicker = createColorPicker('#ffffff');
  textcolor_colorPicker.addClass('colorPicker, column-1');
  textcolor_colorPicker.parent('c1-line-2');

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
  shape001_randomButton.addClass('shape001_randomButton');
  shape001_randomButton.addClass('shape001');
  shape001_randomButton.parent('c3-line17');
  shape001_randomButton.attribute('title',"Random all variables");

  shape001_control = selectAll('.shape001');

  //shape002 GUI
  shape002_slider_lineWeight_text = createElement('h3', 'LineWeight');
  shape002_slider_lineWeight_text.addClass('shape002');
  shape002_slider_lineWeight_text.parent('c3-line2');
  shape002_slider_lineWeight_text.attribute('title',"adjust line weight");
  shape002_slider_lineWeight = createSlider(1,60,25);
  shape002_slider_lineWeight.addClass('slider, shape002');
  shape002_slider_lineWeight.parent('c3-line2');
  shape002_slider_lineWeight.attribute('title',"adjust line weight");

  shape002_slider_lineSpace_text = createElement('h3', 'LineSpace');
  shape002_slider_lineSpace_text.addClass('shape002');
  shape002_slider_lineSpace_text.parent('c3-line3');
  shape002_slider_lineSpace_text.attribute('title',"adjust line space");
  shape002_slider_lineSpace = createSlider(-30,30,0);
  shape002_slider_lineSpace.addClass('slider, shape002');
  shape002_slider_lineSpace.parent('c3-line3');
  shape002_slider_lineSpace.attribute('title',"adjust line space");

  shape002_color_text = createElement('h3', 'Color');
  shape002_color_text.addClass('shape002');
  shape002_color_text.parent('c3-line4');

  shape002_colorPicker = createColorPicker('#9370DB');
  shape002_colorPicker.addClass('colorPicker, shape002');
  shape002_colorPicker.parent('c3-line4');

  shape002_slider_xoffset_text = createElement('h3', 'xOffset');
  shape002_slider_xoffset_text.addClass('shape002');
  shape002_slider_xoffset_text.parent('c3-line5');
  shape002_slider_xoffset_text.attribute('title', "adjust horizontal starting position");
  shape002_slider_xoffset = createSlider(-width, width, 0);
  shape002_slider_xoffset.addClass('slider, shape002');
  shape002_slider_xoffset.parent('c3-line5');
  shape002_slider_xoffset.attribute('title', "adjust horizontal starting position");

  shape002_slider_yoffset_text = createElement('h3', 'yOffset');
  shape002_slider_yoffset_text.addClass('shape002');
  shape002_slider_yoffset_text.parent('c3-line6');
  shape002_slider_yoffset_text.attribute('title', "adjust horizontal starting position");
  shape002_slider_yoffset = createSlider(-height, height, 0);
  shape002_slider_yoffset.addClass('slider, shape002');
  shape002_slider_yoffset.parent('c3-line6');
  shape002_slider_yoffset.attribute('title', "adjust vertical starting position");

  //shape003 GUI
  shape003_slider_number_text = createElement('h4', 'ParticleNumber');
  shape003_slider_number_text.addClass('shape003');
  shape003_slider_number_text.parent('c3-line2');
  shape003_slider_number_text.attribute('title',"adjust particle number");
  shape003_slider_number = createSlider(1,200,200);
  shape003_slider_number.addClass('slider, shape003');
  shape003_slider_number.parent('c3-line2');
  shape003_slider_number.attribute('title',"adjust particle number");

  shape003_slider_noiseScale_text = createElement('h3', 'NoiseScale');
  shape003_slider_noiseScale_text.addClass('shape003');
  shape003_slider_noiseScale_text.parent('c3-line3');
  shape003_slider_noiseScale_text.attribute('title',"adjust noise scale");
  shape003_slider_noiseScale = createSlider(200,800,400);
  shape003_slider_noiseScale.addClass('slider, shape003');
  shape003_slider_noiseScale.parent('c3-line3');
  shape003_slider_noiseScale.attribute('title',"adjust noise scale");

  shape003_randomButton = createButton("Random");
  shape003_randomButton.mousePressed(colorRandom);
  shape003_randomButton.addClass('shape003_randomButton, shape003');
  shape003_randomButton.parent('c3-line4');
  shape003_randomButton.attribute('title',"Random color");

  //initialize shape003
  for(var i = 0; i < shape003_slider_number.value(); i++){
    shape003_particles_a[i] = new shape003_Particle(random(0, width),random(0,height));
    shape003_particles_b[i] = new shape003_Particle(random(0, width),random(0,height));
    shape003_particles_c[i] = new shape003_Particle(random(0, width),random(0,height));
  }

  shape003_control = selectAll('.shape003');
  for (var j = 0; j < shape003_control.length; j++) {
    shape003_control[j].hide();
  }

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
  for (var k = 0; k < shape002_control.length; k++) {
    shape002_control[k].hide();
  }
  for (var l = 0; l < shape003_control.length; l++) {
    shape003_control[l].hide();
  }

  toggle_01 = true;
  toggle_02 = false;
  toggle_03 = false;

}
function shape002display() {
  for (var i = 0; i < shape001_option_advanced.length; i++) {
    shape001_option_advanced[i].hide();
  }
  for (var j = 0; j < shape001_option_basic.length; j++) {
    shape001_option_basic[j].hide();
  }
  for (var k = 0; k < shape001_control.length; k++) {
    shape001_control[k].hide();
  }
  for (var l = 0; l < shape002_control.length; l++) {
    shape002_control[l].show();
  }
  for (var m = 0; m < shape003_control.length; m++) {
    shape003_control[m].hide();
  }
  toggle_01 = false;
  toggle_02 = true;
  toggle_03 = false;

}

function shape003display() {
  for (var i = 0; i < shape001_option_advanced.length; i++) {
    shape001_option_advanced[i].hide();
  }
  for (var j = 0; j < shape001_option_basic.length; j++) {
    shape001_option_basic[j].hide();
  }
  for (var k = 0; k < shape001_control.length; k++) {
    shape001_control[k].hide();
  }
  for (var l = 0; l < shape002_control.length; l++) {
    shape002_control[l].hide();
  }
  for (var m = 0; m < shape003_control.length; m++) {
    shape003_control[m].show();
  }
  background(bgColor);
  toggle_01 = false;
  toggle_02 = false;
  toggle_03 = true;

  for(var k = 0; k < shape003_slider_number.value(); k++){
    shape003_particles_a[i] = new shape003_Particle(random(0, width),random(0,height));
    shape003_particles_b[i] = new shape003_Particle(random(0, width),random(0,height));
    shape003_particles_c[i] = new shape003_Particle(random(0, width),random(0,height));
  }

}




var draw = function() {

    // background(bgColor);
    //background(slider.value());
    // smooth();
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
    titleChangeFont();
    textSize(title_slider_size.value());
    colorMode(RGB);
    fill(textcolor_colorPicker.value());
    noStroke();
    textStyle(BOLD);
    text(input_title.value(), title_slider_x.value(), title_slider_y.value());

    subtitle1ChangeFont();
    textSize(subtitle1_slider_size.value());
    textStyle(NORMAL);
    text(input_subtitle1.value(), subtitle1_slider_x.value(), subtitle1_slider_y.value());

    subtitle2ChangeFont();
    textSize(subtitle2_slider_size.value());
    textStyle(NORMAL);
    text(input_subtitle2.value(), subtitle2_slider_x.value(), subtitle2_slider_y.value());

    subtitle3ChangeFont();
    textSize(subtitle3_slider_size.value());
    textStyle(NORMAL);
    text(input_subtitle3.value(), subtitle3_slider_x.value(), subtitle3_slider_y.value());

    textareaChangeFont();
    textSize(textarea_slider_size.value());
    textStyle(NORMAL);
    text(textarea.value(), textarea_slider_x.value(), textarea_slider_y.value());

    //diaplay the logo
    //image(logo, 290, 640, 205, 32);

    // if (keyIsPressed === true) {
    // save("myPoster.svg");
  //}

      // Image part
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
  background(bgcolor_colorPicker.value());
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
    background(bgcolor_colorPicker.value());
    for (var i = 0+shape002_slider_xoffset.value(); i < width+shape002_slider_xoffset.value(); i += shape002_step) {
      for (var j = 0+shape002_slider_yoffset.value(); j < height+shape002_slider_yoffset.value(); j += shape002_step) {
          shape002_drawLine(i,j,shape002_step,shape002_step);
      }

    }
    //shape002_flag = !shape002_flag;
    //}

}

function drawshape003() {
  frameRate(60);
  // background(bgColor);

  for(var i = 0; i < shape003_slider_number.value(); i++){
		var radius = map(i,0,shape003_slider_number.value(),1,2);
		// var alpha = map(i,0,shape003_nums,0,150);
    var alpha = 225;
    var c = color(65);
		// fill(69,33,124,alpha);
    // fill(100,211,23,alpha);
    fill(color_a);
		shape003_particles_a[i].move();
		shape003_particles_a[i].display(radius);
		shape003_particles_a[i].checkEdge();

		// fill(7,153,242,alpha);
    // fill(255,214,0,alpha);
    fill(color_b);
		shape003_particles_b[i].move();
		shape003_particles_b[i].display(radius);
		shape003_particles_b[i].checkEdge();

		// fill(107,153,242,alpha);
    // fill(255,145,0,alpha);
    fill(color_c);
		shape003_particles_c[i].move();
		shape003_particles_c[i].display(radius);
		shape003_particles_c[i].checkEdge();
	}
}

function shape002_drawLine(x,y,width,height){

  shape002_step = random(40+shape002_slider_lineSpace.value(),80+shape002_slider_lineSpace.value());
  // stroke(random(50,255),random(50,255));
  stroke(shape002_colorPicker.value());
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
		var angle = noise(this.pos.x/shape003_slider_noiseScale.value(), this.pos.y/shape003_slider_noiseScale.value())*TWO_PI*shape003_slider_noiseScale.value();
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

function colorRandom() {
  clear();
  background(bgColor);
  color_a_num = floor(random(0,15));
  if (color_a_num == 0) {
    color_a = color(229,57,53);
  }
  else if (color_a_num == 1) {
    color_a = color(245,0,87);
  }
  else if (color_a_num == 2) {
    color_a = color(142,36,170);
  }
  else if (color_a_num == 3) {
    color_a = color(69,33,124);
  }
  else if (color_a_num == 4) {
    color_a = color(7,153,242);
  }
  else if (color_a_num == 5) {
    color_a = color(107,153,242);
  }
  else if (color_a_num == 6) {
    color_a = color(129,212,250);
  }
  else if (color_a_num == 7) {
    color_a = color(24,255,255);
  }
  else if (color_a_num == 8) {
    color_a = color(100,255,218);
  }
  else if (color_a_num == 9) {
    color_a = color(100,211,23);
  }
  else if (color_a_num == 10) {
    color_a = color(178,255,89);
  }
  else if (color_a_num == 11) {
    color_a = color(212,255,87);
  }
  else if (color_a_num == 12) {
    color_a = color(255,214,0);
  }
  else if (color_a_num == 13) {
    color_a = color(255,196,0);
  }
  else if (color_a_num == 14) {
    color_a = color(255,145,0);
  }
  else if (color_a_num == 15) {
    color_a = color(255,61,0);
  }

  color_b_num = floor(random(0,15));
  if (color_b_num == 0) {
    color_b = color(229,57,53);
  }
  else if (color_b_num == 1) {
    color_b = color(245,0,87);
  }
  else if (color_b_num == 2) {
    color_b = color(142,36,170);
  }
  else if (color_b_num == 3) {
    color_b = color(69,33,124);
  }
  else if (color_b_num == 4) {
    color_b = color(7,153,242);
  }
  else if (color_b_num == 5) {
    color_b = color(107,153,242);
  }
  else if (color_b_num == 6) {
    color_b = color(129,212,250);
  }
  else if (color_b_num == 7) {
    color_b = color(24,255,255);
  }
  else if (color_b_num == 8) {
    color_b = color(100,255,218);
  }
  else if (color_b_num == 9) {
    color_b = color(100,211,23);
  }
  else if (color_b_num == 10) {
    color_b = color(178,255,89);
  }
  else if (color_b_num == 11) {
    color_b = color(212,255,87);
  }
  else if (color_b_num == 12) {
    color_b = color(255,214,0);
  }
  else if (color_b_num == 13) {
    color_b = color(255,196,0);
  }
  else if (color_b_num == 14) {
    color_b = color(255,145,0);
  }
  else if (color_b_num == 15) {
    color_b = color(255,61,0);
  }

  color_c_num = floor(random(0,15));
  if (color_c_num == 0) {
    color_c = color(229,57,53);
  }
  else if (color_c_num == 1) {
    color_c = color(245,0,87);
  }
  else if (color_c_num == 2) {
    color_c = color(142,36,170);
  }
  else if (color_c_num == 3) {
    color_c = color(69,33,124);
  }
  else if (color_c_num == 4) {
    color_c = color(7,153,242);
  }
  else if (color_c_num == 5) {
    color_c = color(107,153,242);
  }
  else if (color_c_num == 6) {
    color_c = color(129,212,250);
  }
  else if (color_c_num == 7) {
    color_c = color(24,255,255);
  }
  else if (color_c_num == 8) {
    color_c = color(100,255,218);
  }
  else if (color_c_num == 9) {
    color_c = color(100,211,23);
  }
  else if (color_c_num == 10) {
    color_c = color(178,255,89);
  }
  else if (color_c_num == 11) {
    color_c = color(212,255,87);
  }
  else if (color_c_num == 12) {
    color_c = color(255,214,0);
  }
  else if (color_c_num == 13) {
    color_c = color(255,196,0);
  }
  else if (color_c_num == 14) {
    color_c = color(255,145,0);
  }
  else if (color_c_num == 15) {
    color_c = color(255,61,0);
  }
}

function typographic1display() {
  textAlign(LEFT);
  title_slider_x.value(20);
  title_slider_y.value(53);
  subtitle1_slider_x.value(300);
  subtitle1_slider_y.value(53);
  subtitle2_slider_x.value(20);
  subtitle2_slider_y.value(90);
  subtitle3_slider_x.value(20);
  subtitle3_slider_y.value(110);
  textarea_slider_x.value(20);
  textarea_slider_y.value(600);
}

function typographic2display() {
  textAlign(LEFT);
  title_slider_x.value(20);
  title_slider_y.value(height/2);
  subtitle1_slider_x.value(20);
  subtitle1_slider_y.value(height/2+30);
  subtitle2_slider_x.value(20);
  subtitle2_slider_y.value(90);
  subtitle3_slider_x.value(20);
  subtitle3_slider_y.value(110);
  textarea_slider_x.value(20);
  textarea_slider_y.value(600);
}

function typographic3display() {
  textAlign(LEFT);
  title_slider_x.value(20);
  title_slider_y.value(53);
  subtitle1_slider_x.value(20);
  subtitle1_slider_y.value(80);
  subtitle2_slider_x.value(20);
  subtitle2_slider_y.value(120);
  subtitle3_slider_x.value(20);
  subtitle3_slider_y.value(140);
  textarea_slider_x.value(width-200);
  textarea_slider_y.value(600);
}

function typographic4display() {
  textAlign(CENTER);
  title_slider_x.value(width/2);
  title_slider_y.value(180);
  subtitle1_slider_x.value(width/2);
  subtitle1_slider_y.value(210);
  subtitle2_slider_x.value(width/2);
  subtitle2_slider_y.value(280);
  subtitle3_slider_x.value(width/2);
  subtitle3_slider_y.value(300);
  textarea_slider_x.value(width/2);
  textarea_slider_y.value(400);
}

function titleChangeFont() {
  if (title_select.value() == 'Arial') {
    textFont(fontArial);
  }
  if (title_select.value() == 'ArialBlack') {
    textFont(fontArialblack);
  }
  if (title_select.value() == 'Georgia') {
    textFont(fontGeorgia);
  }
  if (title_select.value() == 'TimesNewRoman') {
    textFont(fontTimesnewroman);
  }
}

function subtitle1ChangeFont() {
  if (subtitle1_select.value() == 'Arial') {
    textFont(fontArial);
  }
  if (subtitle1_select.value() == 'ArialBlack') {
    textFont(fontArialblack);
  }
  if (subtitle1_select.value() == 'Georgia') {
    textFont(fontGeorgia);
  }
  if (subtitle1_select.value() == 'TimesNewRoman') {
    textFont(fontTimesnewroman);
  }
}

function subtitle2ChangeFont() {
  if (subtitle2_select.value() == 'Arial') {
    textFont(fontArial);
  }
  if (subtitle2_select.value() == 'ArialBlack') {
    textFont(fontArialblack);
  }
  if (subtitle2_select.value() == 'Georgia') {
    textFont(fontGeorgia);
  }
  if (subtitle2_select.value() == 'TimesNewRoman') {
    textFont(fontTimesnewroman);
  }
}

function subtitle3ChangeFont() {
  if (subtitle3_select.value() == 'Arial') {
    textFont(fontArial);
  }
  if (subtitle3_select.value() == 'ArialBlack') {
    textFont(fontArialblack);
  }
  if (subtitle3_select.value() == 'Georgia') {
    textFont(fontGeorgia);
  }
  if (subtitle3_select.value() == 'TimesNewRoman') {
    textFont(fontTimesnewroman);
  }
}

function textareaChangeFont() {
  if (textarea_select.value() == 'Arial') {
    textFont(fontArial);
  }
  if (textarea_select.value() == 'ArialBlack') {
    textFont(fontArialblack);
  }
  if (textarea_select.value() == 'Georgia') {
    textFont(fontGeorgia);
  }
  if (textarea_select.value() == 'TimesNewRoman') {
    textFont(fontTimesnewroman);
  }
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
