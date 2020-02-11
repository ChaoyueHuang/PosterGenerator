

var s1, gui, NumberControl,
VertexControl,
RadiusControl,
StepControl,
MaxStrokeWeightControl,
MinStrokeWeightControl,
ScaleControl,
FillModeControl,
ColorControl,
StartColorControl,
EndColorControl,
OffsetControl,
FlashControl,
SpeedControl,
MaxAmplitudeControl,
MinAmplitudeControl,
RandomControl, gui2;

// window.onload = function() {
//   gui = new dat.GUI();
//
//   var f1 = gui.addFolder('Control');
//   var f2 = gui.addFolder('Color');
//   var f3 = gui.addFolder('Motion');
//
//   f1.open();
//   f2.open();
//   f3.open();
//
//   NumberControl = f1.add(params, 'Number', 1, 60);
//   NumberControl.onChange(draw);
//
//   VertexControl = f1.add(params, 'Vertex', 1, 100);
//   VertexControl.onChange(draw);
//
//   RadiusControl = f1.add(params, 'Radius', -500, 500);
//   RadiusControl.onChange(draw);
//
//   StepControl = f1.add(params, 'Step', 1, 10);
//   StepControl.onChange(draw);
//
//   MaxStrokeWeightControl = f1.add(params, 'MaxStrokeWeight', 0, 20);
//   MaxStrokeWeightControl.onChange(draw);
//
//   MinStrokeWeightControl = f1.add(params, 'MinStrokeWeight', 0, 20);
//   MinStrokeWeightControl.onChange(draw);
//
//   ScaleControl = f1.add(params, 'Scale', 0, 100);
//   ScaleControl.onChange(draw);
//
//   FillModeControl = f2.add(params, 'FillMode', (['Gradient','SolidColor']));
//   FillModeControl.onChange(function() {
//     if (params.FillMode == 'SolidColor') {
//       type = 'SolidColor';
//       draw();
//     }
//     else if (params.FillMode == 'Gradient') {
//       type = 'Gradient';
//       draw();
//     }
//   })
//
//   ColorControl = f2.addColor(params, 'Color');
//   ColorControl.onChange(draw);
//
//   StartColorControl = f2.add(params, 'StartColor', -360, 0);
//   StartColorControl.onChange(draw);
//
//   EndColorControl = f2.add(params, 'EndColor', 0, 360);
//   EndColorControl.onChange(draw);
//
//   OffsetControl = f2.add(params, 'Offset', 0, 10);
//   OffsetControl.onChange(draw);
//
//   FlashControl = f3.add(params, 'Flash', 0.1, 10.0);
//   FlashControl.onChange(draw);
//
//   SpeedControl = f3.add(params, 'Speed', 3.0, 10.0);
//   SpeedControl.onChange(draw);
//
//   MaxAmplitudeControl = f3.add(params, 'MaxAmplitude', 0, 250);
//   MaxAmplitudeControl.onChange(draw);
//
//   MinAmplitudeControl = f3.add(params, 'MinAmplitude', -250, 0);
//   MinAmplitudeControl.onChange(draw);
//
//   RandomControl = gui.add(params, 'Random');
//   //RandomControl.onChange(draw);
//
// };

var logo;
var bgColor;
var saveCanvasButton;
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

//Save Variables
var saveImageText;

//THINGS001 Variables
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

function preload() {
  logo = loadImage('data/tandon_logo_white.png');
}

var setup = function() {

  //dat.GUI.toggleHide();
  //createCanvas(windowWidth, windowHeight);
  var cnv = createCanvas(539, 696, SVG);
  //var cnv = createCanvas(200, 300);
  cnv.position(100,150);

  colorMode(HSB, 360, 100, 100, 100);

  s1 = new Shape(width/2, height/2, 100);
  //gui.add(s1, 'num', 1, 20);

  //Text Input GUI
  textControlxOffset = 50;
  bgColor = color(0);
  shape001_randomButton = createButton("Random");
  shape001_randomButton.mousePressed(shape001_random);
  shape001_randomButton.position(1100,800);

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

  //Save GUI
  // saveCanvasButton = createButton('Save Image');
  // saveCanvasButton.mousePressed(saveCanvas);
  // saveCanvasButton.position(800,800);

  saveImageText = createElement('h3','Press any key to Save the design.');
  saveImageText.position(750,700);
  saveImageText.addClass('Alert');

  //THINGs001 GUI
  var shape001x = 1100;
  shape001_slider_number = createSlider(1,60,25);
  shape001_slider_number.position(1200,165);
  shape001_slider_number.addClass('slider');
  shape001_slider_number_text = createElement('h3', 'Number');
  shape001_slider_number_text.position(shape001x,150);

  shape001_slider_vertex = createSlider(1,100,3.2);
  shape001_slider_vertex.position(1200,195);
  shape001_slider_vertex.addClass('slider');
  shape001_slider_vertex_text = createElement('h3', 'Vertex');
  shape001_slider_vertex_text.position(shape001x,180);

  shape001_slider_radius = createSlider(-500,500,85);
  shape001_slider_radius.position(1200,225);
  shape001_slider_radius.addClass('slider');
  shape001_slider_radius_text = createElement('h3', 'Radius');
  shape001_slider_radius_text.position(shape001x,210);

  shape001_slider_step = createSlider(1,10,1);
  shape001_slider_step.position(1200,255);
  shape001_slider_step.addClass('slider');
  shape001_slider_step_text = createElement('h3', 'Step');
  shape001_slider_step_text.position(shape001x,240);

  shape001_slider_maxStrokeWeight = createSlider(0,20,6);
  shape001_slider_maxStrokeWeight.position(1200,285);
  shape001_slider_maxStrokeWeight.addClass('slider');
  shape001_slider_maxStrokeWeight_text = createElement('h4', 'MaxStrokeWight');
  shape001_slider_maxStrokeWeight_text.position(shape001x,270);

  shape001_slider_minStrokeWeight = createSlider(0,20,1);
  shape001_slider_minStrokeWeight.position(1200,315);
  shape001_slider_minStrokeWeight.addClass('slider');
  shape001_slider_minStrokeWeight_text = createElement('h4', 'MinStrokeWight');
  shape001_slider_minStrokeWeight_text.position(shape001x,300);

  shape001_slider_scale = createSlider(0,100,7);
  shape001_slider_scale.position(1200,345);
  shape001_slider_scale.addClass('slider');
  shape001_slider_scale_text = createElement('h3', 'Scale');
  shape001_slider_scale_text.position(shape001x,330);

  shape001_radio_fillMode = createSelect();
  shape001_radio_fillMode.option('Gradient');
  shape001_radio_fillMode.option('Solid');
  shape001_radio_fillMode.addClass('select');
  shape001_radio_fillMode.position(1100,400);

  shape001_slider_startColor = createSlider(-360,0,0);
  shape001_slider_startColor.position(1200,450);
  shape001_slider_startColor.addClass('slider');
  shape001_slider_startColor_text = createElement('h3', 'StartColor');
  shape001_slider_startColor_text.position(shape001x,435);

  shape001_slider_endColor = createSlider(0,360,280);
  shape001_slider_endColor.position(1200,480);
  shape001_slider_endColor.addClass('slider');
  shape001_slider_endColor_text = createElement('h3', 'EndColor');
  shape001_slider_endColor_text.position(shape001x,465);

  shape001_colorPicker = createColorPicker('#ff0000');
  shape001_colorPicker.addClass('colorPicker');
  shape001_colorPicker.position(1200,400);

  shape001_slider_colorOffset = createSlider(0,10,0.7);
  shape001_slider_colorOffset.position(1200,510);
  shape001_slider_colorOffset.addClass('slider');
  shape001_slider_colorOffset_text = createElement('h3', 'ColorOffset');
  shape001_slider_colorOffset_text.position(shape001x,495);

  shape001_slider_flash = createSlider(0.1,10.0,7.0);
  shape001_slider_flash.position(1200,600);
  shape001_slider_flash.addClass('slider');
  shape001_slider_flash_text = createElement('h3', 'Flash');
  shape001_slider_flash_text.position(shape001x,585);

  shape001_slider_speed = createSlider(3.0,10.0,4.29);
  shape001_slider_speed.position(1200,630);
  shape001_slider_speed.addClass('slider');
  shape001_slider_speed_text = createElement('h3', 'Speed');
  shape001_slider_speed_text.position(shape001x,615);

  shape001_slider_MaxAmplitude = createSlider(0,250,135);
  shape001_slider_MaxAmplitude.position(1200,660);
  shape001_slider_MaxAmplitude.addClass('slider');
  shape001_slider_MaxAmplitude_text = createElement('h4', 'MaxAmplitude');
  shape001_slider_MaxAmplitude_text.position(shape001x,645);

  shape001_slider_MinAmplitude = createSlider(-250,0,-250);
  shape001_slider_MinAmplitude.position(1200,690);
  shape001_slider_MinAmplitude.addClass('slider');
  shape001_slider_MinAmplitude_text = createElement('h4', 'MinAmplitude');
  shape001_slider_MinAmplitude_text.position(shape001x,675);

};

// plays or pauses the video depending on current state

var draw = function() {


    background(bgColor);
    //background(slider.value());
    noFill();
    stroke(255,65);



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
    image(logo, 290, 640, 205, 32);

    if (keyIsPressed === true) {
    save("myPoster.svg");
  }

};

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
  //save(cnv, "myPoster.png");
}

// function keyisPressed() {
//   //if (keyCode === 0){
//   save("myPoster.svg");
// //}
// }


var params = {
  Number : 25,
  Vertex : 3.2,
  Radius : 85,
  Step : 1,
  MaxStrokeWeight : 6,
  MinStrokeWeight : 1,
  Scale : 7,
  FillMode: 'Gradient',
  Color : "#ffae23",
  StartColor : 0,
  EndColor : 360,
  Offset : 0.7,
  Flash : 7.0,
  Speed : 4.39,
  MaxAmplitude : 135,
  MinAmplitude : -250,


  Random : function() {
    var rNumber = random(1,60);
    NumberControl.setValue(rNumber);

    var rVertex = random(1,100);
    VertexControl.setValue(rVertex);

    var rRadius = random(-500,500);
    RadiusControl.setValue(rRadius);

    var rStep = random(1,10);
    StepControl.setValue(rStep);

    var rMaxStrokeWeight = random(0,20);
    MaxStrokeWeightControl.setValue(rMaxStrokeWeight);

    var rMinStrokeWeight = random(0,20);
    MinStrokeWeightControl.setValue(rMinStrokeWeight);

    var rScale = random(0,100);
    ScaleControl.setValue(rScale);

    var rFillMode = random(['Gradient','SolidColor']);
    FillModeControl.setValue(rFillMode);

    var rColor = [ random(255), random(255), random(255) ];
    ColorControl.setValue(rColor);

    var rStartColor = random(-360,0);
    StartColorControl.setValue(rStartColor);

    var rEndColor = random(0,360);
    EndColorControl.setValue(rEndColor);

    var rOffset = random(0,10);
    OffsetControl.setValue(rOffset);

    var rFlash = random(0.1, 10);
    FlashControl.setValue(rFlash);

    var rSpeed = random(3,10);
    SpeedControl.setValue(rSpeed);

    var rMaxAmplitude = random(0,250);
    MaxAmplitudeControl.setValue(rMaxAmplitude);

    var rMinAmplitude = random(-250,0);
    MinAmplitudeControl.setValue(rMinAmplitude);


}

};
