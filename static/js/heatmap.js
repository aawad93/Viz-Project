// creating a class to wrap the heatmap cycling logic
function AnimationPlayer(options) {
    this.heatmap = options.heatmap;
    this.data = options.data;
    this.interval = null;
    this.animationSpeed = options.animationSpeed || 300;
    this.wrapperEl = options.wrapperEl;
    this.isPlaying = false;
    this.init();
  };
  // define the prototype functions
  AnimationPlayer.prototype = {
    init: function() {
      var dataLen = this.data.length;
      this.wrapperEl.innerHTML = '';
      var playButton = this.playButton = document.createElement('button');
      playButton.onclick = function() {
        if (this.isPlaying) {
          this.stop();
        } else {
          this.play();
        }
        this.isPlaying = !this.isPlaying;
      }.bind(this);
      playButton.innerText = 'play';
  
      this.wrapperEl.appendChild(playButton);
  
      var events = document.createElement('div');
      events.className = 'heatmap-timeline';
      events.innerHTML = '';
  
      for (var i = 0; i < dataLen; i++) {
  
        var xOffset = 100/(dataLen - 1) * i;
  
        var ev = document.createElement('div');
        ev.className = 'time-point';
        ev.style.left = xOffset+'%';
  
        ev.onclick = (function(i) {
          return function() {
            this.isPlaying = false;
            this.stop();
            this.setFrame(i);
          }.bind(this);
        }.bind(this))(i);
  
        events.appendChild(ev);
  
      }
      this.wrapperEl.appendChild(events);
      this.setFrame(0);
    },
    play: function() {
      var dataLen = this.data.length;
      this.playButton.innerText = 'pause';
      this.interval = setInterval(function() {
        this.setFrame(++this.currentFrame%dataLen);
      }.bind(this), this.animationSpeed)
    },
    stop: function() {
      clearInterval(this.interval);
      this.playButton.innerText = 'play';
    },
    setFrame: function(frame) {
      this.currentFrame = frame;
      var snapshot = this.data[frame];
      this.heatmap.setData(snapshot);
      var timePoints = $('.heatmap-timeline .time-point');
      for (var i = 0; i < timePoints.length; i++) {
        timePoints[i].classList.remove('active');
      }
      timePoints[frame].classList.add('active');
    },
    setAnimationData: function(data) {
      this.isPlaying = false;
      this.stop();
      this.data = data;
      this.init();
    },
    setAnimationSpeed: function(speed) {
      this.isPlaying = false;
      this.stop();
      this.animationSpeed = speed;
    }
  };
  
  var heatmapInstance = h337.create({
    container: document.querySelector('.heatmap')
  });
  
  // animationData contains an array of heatmap data objects
  var animationData = [];
  
  // generate some heatmap data objects
  for (var i = 0; i < 20; i++) {
    animationData.push(generateRandomData(300));
  }
  
  var player = new AnimationPlayer({
    heatmap: heatmapInstance,
    wrapperEl: document.querySelector('.timeline-wrapper'),
    data: animationData,
    animationSpeed: 100
  });