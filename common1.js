var Both = {
	informer: {											// Object for add in monitor status pets event
        selector: document.getElementById('info'),
        setText: function(text) {
            this.selector.innerText = text;
        }
    }, 
	
	timer1: {											// Create object for bars
		selector: document.getElementById('HungerBar'),
		isOrange: false,
		isRed: false,
		interval: null,
		width: 100
	},
	timer2: {
		selector: document.getElementById('ThirstBar'),
		isOrange: false,
		isRed: false,
		interval: null,
		width: 100
	}, 
	timer3: {
		selector: document.getElementById('HelthBar'),
		isOrange: false,
		isRed: false,
		interval: null,
		width: 100
	},
	timer4: {
		selector: document.getElementById('BoredomBar'),
		isOrange: false,
		isRed: false,
		interval: null,
		width: 100
	},
	timer5: {
		selector: document.getElementById('PurityBar'),
		isOrange: false,
		isRed: false,
		interval: null,
		width: 100
	},
	buttons: document.getElementsByClassName('monitor-btn'),

	addButtonsEvent: function(){
		var context = this;
		for(i = 0; i < this.buttons.length; i++){
			this.buttons[i].addEventListener('click', function() {
				var action = this.getAttribute('data-state');
				if(action == 'Eat'){
					context.refreshProgressBar(context.timer1);
				}
				if(action == 'Drink'){
					context.refreshProgressBar(context.timer2);
				}
				if(action == 'FirsAid'){
					context.refreshProgressBar(context.timer3);
				}
				if(action == 'Play'){
					context.refreshProgressBar(context.timer4);
				}
				if(action == 'Clean'){
					context.refreshProgressBar(context.timer5);
				}
				
			});
		}
	},

	runProgressBar: function(timer, seconds){			//create method for counter bars
		context = this;
		var milliseconds = seconds*1000;
		timer.interval = setInterval(function(){
			if (timer.width!=0){
				timer.width--;
				timer.selector.style.width = timer.width + "%";
				if(timer.isOrange == false && timer.width <= 50){
					timer.isOrange = true;
					timer.selector.setAttribute('class', 'monitor-bar-progress attention');
				}
				if(timer.isRed == false && timer.width <= 25){
					timer.isRed = true;
					timer.selector.setAttribute('class', 'monitor-bar-progress alarm');
				}
			}else{
				clearInterval(context.timer1.interval);
				clearInterval(context.timer2.interval);
				clearInterval(context.timer3.interval);
				clearInterval(context.timer4.interval);
				clearInterval(context.timer5.interval);
				alert('Yuor pet is die');
			}
		}, milliseconds)
	},

	refreshProgressBar: function(timer){
		timer.width = 100;
		timer.selector.setAttribute('class', 'monitor-bar-progress');
	},

	startTimers: function(){
		this.runProgressBar(this.timer1, 0.3);
		this.runProgressBar(this.timer2, 0.7);
		this.runProgressBar(this.timer3, 0.2);
		this.runProgressBar(this.timer4, 0.5);
		this.runProgressBar(this.timer5, 0.8);
	},

	startGame: function() {
		this.addButtonsEvent();
		this.startTimers();
	}

}

Both.startGame();