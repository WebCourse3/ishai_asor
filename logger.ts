import {colorsTypes } from './colors.js';
class logger {

	private name: string;
	private configuration: Configuration;

	constructor(name: string, configuration: Configuration) {
		this.name = name;
		this.configuration = configuration;
	}

	public log(level: any, strings: any[]): void {
		let options = {
			'debug'   : this.debug.bind(this),
			'info'    : this.info.bind(this),
			'warning' : this.warning.bind(this),
			'error'   : this.error.bind(this)
		};
		let lvl = level || this.configuration.logLevel;
		options[lvl](strings);
	}

	public info(strings: string[]): void {
		this.consolePrinter(colorsTypes.green,strings);
	}

	public warning(strings: string[]): void {
		this.consolePrinter(colorsTypes.yellow,strings);
	}

	public debug(strings: any[]): void {
		this.consolePrinter(colorsTypes.white,strings);
	}

	public error(strings: string[]): void {
		this.consolePrinter(colorsTypes.red,strings);
	}

	private consolePrinter(colorType:colorsTypes,strings:any[]):void{
		if(this.configuration.console)
		{
			strings.forEach(x=>
			{
					if(this.configuration.colors)
					{
						console.log(colorType,x);
					}
					else
					{
						console.log(x);
					}
			});


		}
		if(this.configuration.file)
		{
			strings.forEach(str=>
			{
				this.printToFile(str);
			});
		}
	}

	private printToFile(log: string) {
	    let fs  = require('fs');
		fs.appendFile('log.txt', log + '\r\n', (err) => {
			if (err) throw err;
		});
	}
}

 let x:logger = new logger('test',{console: true, file: true, colors: true, logLevel: 'debug'});
 x.log('debug',['log test 1','log test 2']);
 x.info(['info 1','info 2']);
x.debug(['debug 1','debug 2']);
 x.warning(['warning 1','warning 2']);
 x.error(['error 1','error 2']);




