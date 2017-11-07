class logger{
	private name:string;
	private configuration:Configuration;

	  constructor(name:string,  configuration:Configuration)
	 {
          this.name = name;
          this.configuration = configuration;
	 }

	public log(level:any, strings:string[]):void{
          strings.forEach(function (str) {
	          console.log("\x1b[36m%s\x1b[0m",str) ;
          })
	}

	public info(strings:string[]):void{
		strings.forEach(function (str) {
			console.log("\x1b[32m%s\x1b[0m",str) ;
		})
	}

	public warning(strings:string[]):void{
		strings.forEach(function (str) {
			console.log("\x1b[33m%s\x1b[0m",str) ;
		})
	}

	public debug(strings:string[]):void{
		strings.forEach(function (str) {
			console.log(str);
		})
	}

	public error(strings:string[]):void{
		strings.forEach(function (str) {
			console.log("\x1b[31m%s\x1b[0m",str) ;
		})
	}
}

 let x:logger = new logger('test',{console: true, file: true, colors: true, logLevel: true});
 x.log(1,['log test 1','log test 2']);
 x.info(['info 1','info 2']);
x.debug(['debug 1','debug 2']);
 x.warning(['warning 1','warning 2']);
 x.error(['error 1','error 2']);