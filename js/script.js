class Component
{
    notify() {
        this.callback();
    }

    register(callback) {
        this.callback = callback;
    }

    render() {}
}
class Renderer
{
    constructor(component, destination) {
        this.render = component.render.bind(component);
        this.destination = destination;

        component.register(() => {
            return this.listen();
        });

        this.listen();
    }

    listen () {
        this.destination.innerHTML = '';
        this.destination.appendChild(this.render());
    }
}
class Stopwatch extends Component{
  constructor(){
super();
this.time = "00:00:00:00",
this.milliseconds = 0,
this.seconds = 0,
this.minutes = 0,
this.hours = 0,
this.t;

this.add = function () {
  this.milliseconds++;
  if (this.milliseconds >= 60) {
    this.milliseconds = 0;
      this.seconds++;
  if (this.seconds >= 60) {
    this.seconds = 0;
      this.milliseconds = 0;
      this.minutes++;
      if (this.minutes >= 60) {
        this.minutes = 0;
          this.seconds = 0;
          this.milliseconds = 0;
          this.hours++;
  if (this.hours >= 60) {
    this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      this.milliseconds = 0;
      }
  }
  }
}
// this.time = (this.hours < 10 ? "0" + this.hours.toString(): this.hours) + ":" + (this.minutes < 10 ? "0" + this.minutes.toString(): this.minutes) + ":" + (this.seconds < 10 ? "0" + this.seconds.toString(): this.seconds) + ":" + (this.milliseconds < 10 ? "0" + this.milliseconds.toString(): this.milliseconds);
this.time = (this.hours ? (this.hours > 9 ? this.hours : "0" + this.hours) : "00") + ":" + (this.minutes ? (this.minutes > 9 ? this.minutes : "0" + this.minutes) : "00") + ":" + (this.seconds > 9 ? this.seconds : "0" + this.seconds) + ":" + (this.milliseconds > 9 ? this.milliseconds : "0" + this.milliseconds);

this.timer();
}

this.timer = function() {
  this.t = setInterval(this.add(), 10);
}

  }
  
render(){
 return $('<div>')
 .append($('<p>')
 .html (`${this.time}`)
).append([
 $('<button>').html('Start').on('click', () => {
  clearTimeout(this.t);
this.timer;
 this.notify();
 }),
 $('<button>').html('Pause').on('click', () => {
  clearTimeout(this.t);
this.notify();
}),
 $('<button>').html('Reset').on('click', () => {
  this.time = "00:00:00:00";
  this.milliseconds = 0,
  this.seconds = 0;
  this.minutes = 0;
  this.hours = 0;
  notify();
  })
  ])[0];

  
}

}