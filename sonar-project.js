const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://54.238.155.227:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'Node JS Application - node',
	    'sonar.projectKey':'NodeJsMithunTechnologies',
	    'sonar.login': 'squ_b47b73ef03c2051f1a9d3d3928c1c7a076e29f7b',
	    //'sonar.login': 'admin',
	    //'sonar.password': 'sonar',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
