class SoulVG {

	#tools = {
		select: {
			selector: '.tool[data-soulvg-tool="select"]',
			active: true
		},
		hand: {
			selector: '.tool[data-soulvg-tool="hand"]',
			active: false
		},
		insert: {
			selector: '.tool[data-soulvg-tool="insert"]',
			active: false
		},
		save: {
			selector: '.tool[data-soulvg-tool="save"]',
			active: false
		}
	};
	
	constructor() {
		console.log('constructor');
		this.buildUI();
		this.buildScene();
	}

	#buildUI() {
		var template = `
		<div class="panel-aside panel-aside--left">
			<div class="layers">
				<div class="layers-header">
					<i class="fa-solid fa-layer-group"></i>
					<h4>Layers</h4>
				</div>			
				<div class="layers-body">
					<div class="soulvg-layer" data-soulvg-layer="123"></div>
				</div>
			</div>
			<div class="tools">
				<button class="tool tool--select active" data-soulvg-tool="select" type="button" title="Select tool"><i class="fa-solid fa-arrow-pointer"></i></button>
				<button class="tool tool--hand" data-soulvg-tool="hand" type="button" title="Hand tool"><i class="fa-solid fa-hand"></i></button>
				<button class="tool tool--insert" data-soulvg-tool="insert" type="button" title="Add object"><i class="fa-solid fa-plus"></i></button>
				<button class="tool tool--save" data-soulvg-tool="save" type="button" title="Save project"><i class="fa-solid fa-floppy-disk"></i></button>
				<button class="insert-object control" data-object-type="shape" data-object-name="circle" type="button">Insert Circle</button>
				<button class="insert-object control" data-object-type="line" data-object-name="arc" type="button">Insert Arc</button>
				<button class="insert-object control" data-object-type="line" data-object-name="arc" type="button">Insert Major Arc</button>
				<button class="insert-object control" data-object-type="line" data-object-name="arc" type="button">Insert Minor Arc</button> 
			</div>
		</div>
		<div class="scene"></div>
		`;
		
		var templateDiv = document.createElement('div');
			templateDiv.classList.add('soulvg-app');
			templateDiv.innerHTML = template;

		document.body.innerHTML = '';
		document.body.appendChild(templateDiv);
	}
	#buildScene() {
		var scene = {};
			scene.element = document.querySelector('.scene');
			scene.width = scene.element.offsetWidth;
			scene.height = scene.element.offsetHeight;
			scene.unit = 20;
			scene.px = scene.width / scene.unit;
			scene.viewBox = { x: 0, y: 0, width: scene.unit, height: scene.height / scene.px };
		this.scene = scene;
	}
  
}

new SoulVG();
