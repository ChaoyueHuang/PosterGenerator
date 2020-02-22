

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
var saveImageText;

//Shape Options
var shape001_button;
var shape002_button;

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


function preload() {
  logo = loadImage('data/tandon_logo_white.png');
}

var setup = function() {

  //dat.GUI.toggleHide();
  //createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(539, 696);
  //smooth();
  //var cnv = createCanvas(539, 696, SVG);


  cnv.position(100,150);

  colorMode(HSB, 360, 100, 100, 100);

  s1 = new Shape(width/2, height/2, 100);
  //shape001[0] = new Shape(width/2, height/2, 100);
  //gui.add(s1, 'num', 1, 20);

  //initialize shape002
  shape002_lineWeight = 10;
  shape002_flag = false;

  //Text Input GUI
  textControlxOffset = 50;
  bgColor = color(0);

  input_title = createInput('EVAN ABEL');
  input_title.position(800+textControlxOffset,130);
  input_title.addClass('textInput');
  input_title_text = createElement('h2','Title');
  input_title_text.position(740+textControlxOffset,140);

  input_subtitle1 = createInput('IDM Speaker Series 2020');
  input_subtitle1.position(800+textControlxOffset,190);
  input_subtitle1.addClass('textInput');
  input_subtitle1_text = createElement('h2','Subtitle 1');
  input_subtitle1_text.position(700+textControlxOffset,200);

  input_subtitle2 = createInput('DOCUMENTARY PRODUCTION');
  input_subtitle2.position(800+textControlxOffset,250);
  input_subtitle2.addClass('textInput');
  input_subtitle2_text = createElement('h2','Subtitle 2');
  input_subtitle2_text.position(700+textControlxOffset,260);

  input_subtitle3 = createInput('STUDIO & CREATIVE THINK TANK');
  input_subtitle3.position(800+textControlxOffset,310);
  input_subtitle3.addClass('textInput');
  input_subtitle3_text = createElement('h2','Subtitle 3');
  input_subtitle3_text.position(700+textControlxOffset,320);

  textarea = createElement('textarea','6:00-7:00PM');
  textarea.position(800+textControlxOffset,400);
  textarea.addClass('textArea');
  textarea_text = createElement('h2','Time&Location');
  textarea_text.position(650+textControlxOffset,380);

  //Image Input GUI
  input_image = createFileInput(handleFile);
  input_image.position(800+textControlxOffset, 600);
  input_image_text = createElement('h2','Upload image');
  input_image_text.position(660+textControlxOffset,580);

  imageSize_slider = createSlider(1,10,5);
  imageSize_slider.position(800+textControlxOffset,640);
  imageSize_slider.addClass('slider');

  image_size_text = createElement('h3','Size');
  image_size_text.position(750+textControlxOffset,620);

  imageLocX_slider = createSlider(-windowWidth,windowWidth,290);
  imageLocX_slider.position(800+textControlxOffset,670);
  imageLocX_slider.addClass('slider');
  imageLocY_slider = createSlider(-windowHeight,windowHeight,640);
  imageLocY_slider.position(800+textControlxOffset,700);
  imageLocY_slider.addClass('slider');

  imageLocX_text = createElement('h3','X Location');
  imageLocX_text.position(710+textControlxOffset,650);
  imageLocY_text = createElement('h3','Y Location');
  imageLocY_text.position(710+textControlxOffset,680);

  //Save GUI
  // saveCanvasButton = createButton('Save Image');
  // saveCanvasButton.mousePressed(saveCanvas);
  // saveCanvasButton.position(800,900);

  saveImageText = createElement('h3',"Press 's' to Save the design.");
  saveImageText.position(750,800);
  saveImageText.addClass('Alert');

  //Shape option GUI
  shape001_button = createButton("Shape001");
  shape001_button.position(1100,100);
  shape001_button.mousePressed(shape001display);

  shape002_button = createButton("Shape002");
  shape002_button.position(1180,100);
  shape002_button.mousePressed(shape002display);

  //THINGs001 GUI
  shape001_randomButton = createButton("Random");
  shape001_randomButton.mousePressed(shape001_random);
  shape001_randomButton.position(1100,800);
  shape001_randomButton.addClass('shape001')

  var shape001x = 1100;
  shape001_slider_number = createSlider(1,60,25);
  shape001_slider_number.position(1200,165);
  shape001_slider_number.addClass('slider, shape001');
  shape001_slider_number_text = createElement('h3', 'Number');
  shape001_slider_number_text.position(shape001x,150);
  shape001_slider_number_text.addClass('shape001');

  shape001_slider_vertex = createSlider(1,100,3.2);
  shape001_slider_vertex.position(1200,195);
  shape001_slider_vertex.addClass('slider, shape001');
  shape001_slider_vertex_text = createElement('h3', 'Vertex');
  shape001_slider_vertex_text.position(shape001x,180);
  shape001_slider_vertex_text.addClass('shape001');

  shape001_slider_radius = createSlider(-500,500,85);
  shape001_slider_radius.position(1200,225);
  shape001_slider_radius.addClass('slider, shape001');
  shape001_slider_radius_text = createElement('h3', 'Radius');
  shape001_slider_radius_text.position(shape001x,210);
  shape001_slider_radius_text.addClass('shape001');

  shape001_slider_step = createSlider(1,10,1);
  shape001_slider_step.position(1200,255);
  shape001_slider_step.addClass('slider, shape001');
  shape001_slider_step_text = createElement('h3', 'Step');
  shape001_slider_step_text.position(shape001x,240);
  shape001_slider_step_text.addClass('shape001');

  shape001_slider_maxStrokeWeight = createSlider(0,20,6);
  shape001_slider_maxStrokeWeight.position(1200,285);
  shape001_slider_maxStrokeWeight.addClass('slider, shape001');
  shape001_slider_maxStrokeWeight_text = createElement('h4', 'MaxStrokeWight');
  shape001_slider_maxStrokeWeight_text.position(shape001x,270);
  shape001_slider_maxStrokeWeight_text.addClass('shape001');

  shape001_slider_minStrokeWeight = createSlider(0,20,1);
  shape001_slider_minStrokeWeight.position(1200,315);
  shape001_slider_minStrokeWeight.addClass('slider, shape001');
  shape001_slider_minStrokeWeight_text = createElement('h4', 'MinStrokeWight');
  shape001_slider_minStrokeWeight_text.position(shape001x,300);
  shape001_slider_minStrokeWeight_text.addClass('shape001');

  shape001_slider_scale = createSlider(0,100,7);
  shape001_slider_scale.position(1200,345);
  shape001_slider_scale.addClass('slider, shape001');
  shape001_slider_scale_text = createElement('h3', 'Scale');
  shape001_slider_scale_text.position(shape001x,330);
  shape001_slider_scale_text.addClass('shape001');

  shape001_radio_fillMode = createSelect();
  shape001_radio_fillMode.option('Gradient');
  shape001_radio_fillMode.option('Solid');
  shape001_radio_fillMode.addClass('select, shape001');
  shape001_radio_fillMode.position(1100,400);

  shape001_slider_startColor = createSlider(-360,0,0);
  shape001_slider_startColor.position(1200,450);
  shape001_slider_startColor.addClass('slider, shape001');
  shape001_slider_startColor_text = createElement('h3', 'StartColor');
  shape001_slider_startColor_text.position(shape001x,435);
  shape001_slider_startColor_text.addClass('shape001');

  shape001_slider_endColor = createSlider(0,360,280);
  shape001_slider_endColor.position(1200,480);
  shape001_slider_endColor.addClass('slider, shape001');
  shape001_slider_endColor_text = createElement('h3', 'EndColor');
  shape001_slider_endColor_text.position(shape001x,465);
  shape001_slider_endColor_text.addClass('shape001');

  shape001_colorPicker = createColorPicker('#ff0000');
  shape001_colorPicker.addClass('colorPicker, shape001');
  shape001_colorPicker.position(1200,400);

  shape001_slider_colorOffset = createSlider(0,10,0.7);
  shape001_slider_colorOffset.position(1200,510);
  shape001_slider_colorOffset.addClass('slider, shape001');
  shape001_slider_colorOffset_text = createElement('h3', 'ColorOffset');
  shape001_slider_colorOffset_text.position(shape001x,495);
  shape001_slider_colorOffset_text.addClass('shape001');

  shape001_slider_flash = createSlider(0.1,10.0,7.0);
  shape001_slider_flash.position(1200,600);
  shape001_slider_flash.addClass('slider, shape001');
  shape001_slider_flash_text = createElement('h3', 'Flash');
  shape001_slider_flash_text.position(shape001x,585);
  shape001_slider_flash_text.addClass('shape001');

  shape001_slider_speed = createSlider(3.0,10.0,4.29);
  shape001_slider_speed.position(1200,630);
  shape001_slider_speed.addClass('slider, shape001');
  shape001_slider_speed_text = createElement('h3', 'Speed');
  shape001_slider_speed_text.position(shape001x,615);
  shape001_slider_speed_text.addClass('shape001');

  shape001_slider_MaxAmplitude = createSlider(0,250,135);
  shape001_slider_MaxAmplitude.position(1200,660);
  shape001_slider_MaxAmplitude.addClass('slider, shape001');
  shape001_slider_MaxAmplitude_text = createElement('h4', 'MaxAmplitude');
  shape001_slider_MaxAmplitude_text.position(shape001x,645);
  shape001_slider_MaxAmplitude_text.addClass('shape001');

  shape001_slider_MinAmplitude = createSlider(-250,0,-250);
  shape001_slider_MinAmplitude.position(1200,690);
  shape001_slider_MinAmplitude.addClass('slider, shape001');
  shape001_slider_MinAmplitude_text = createElement('h4', 'MinAmplitude');
  shape001_slider_MinAmplitude_text.position(shape001x,675);
  shape001_slider_MinAmplitude_text.addClass('shape001');

  shape001_control = selectAll('.shape001');

  //shape002 GUI
  shape002_slider_lineWeight = createSlider(1,60,25);
  shape002_slider_lineWeight.position(1200,165);
  shape002_slider_lineWeight.addClass('slider, shape002');
  shape001_slider_lineWeight_text = createElement('h3', 'LineWeight');
  shape001_slider_lineWeight_text.position(shape001x,150);
  shape001_slider_lineWeight_text.addClass('shape002');

  shape002_control = selectAll('.shape002');
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].hide();
  }
};

var toggle_01 = true;
var toggle_02 = false;

function shape001display() {
  for (var i = 0; i < shape001_control.length; i++) {
    shape001_control[i].show();
  }
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].hide();
  }
  toggle_01 = true;
  toggle_02 = false;

}
function shape002display() {
  for (var i = 0; i < shape001_control.length; i++) {
    shape001_control[i].hide();
  }
  for (var j = 0; j < shape002_control.length; j++) {
    shape002_control[j].show();
  }
  toggle_01 = false;
  toggle_02 = true;

}



var draw = function() {

    // background(bgColor);
    //background(slider.value());
    noFill();
    stroke(255,65);

    if (toggle_01) {
      drawshape001();
    }

    if (toggle_02) {
      drawshape002();
      //toggle_02 = !toggle_02;
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

};

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
   if (fillMode == 'Gradient') {
    colorMode(HSB);
    stroke(map(i,0,shape001_slider_number.value()/shape001_slider_colorOffset.value(),shape001_slider_startColor.value(),shape001_slider_endColor.value()),100,100,map(i,0,shape001_slider_number.value()/0.9,0,100));

  }
  else if (fillMode == 'Solid'){
    colorMode(RGB);
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

function saveCanvas() {
  //save(cnv, "myPoster.svg");
  //save("myPoster.png");
  //save("myPoster.svg");
}

function keyPressed() {
  if (key == 's'){
  // save("myPoster.svg");
  save("myPoster.png");
  }
}
