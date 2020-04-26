class Shape {
constructor(tempcx, tempcy, tempr){
  this.cx = tempcx;
  this.cy = tempcy;



}

display(r_,count, xoffset_, yoffset_){
  this.count = count;
  this.r = r_;
  this.xoffset = xoffset_;
  this.yoffset = yoffset_;
  push();
  translate(this.cx+this.xoffset, this.cy+this.yoffset);
  beginShape();
  for (var i = 0; i < this.count; i++) {
    var unit = 360/this.count;
    var mr = this.r + map(sin(radians((millis()+387*i)/(10.0-shape001_slider_speed.value()))),-1,1,shape001_slider_MaxAmplitude.value(),shape001_slider_MinAmplitude.value());
    var x = mr*sin(radians(unit*i));
    var y = mr*cos(radians(unit*i));
    vertex(x,y);
  }

  endShape(CLOSE);
  pop();
}


}
