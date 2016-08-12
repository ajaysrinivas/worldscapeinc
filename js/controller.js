var app = angular.module('dewsoftware', ["ui.router","ui.bootstrap"]);






app.directive("dewHeader", function(){
 return {
   restrict: "E",
    controller: "headerController",
   templateUrl: "template/header.html"
 
 };
});
app.directive("dewFooter", function(){
 return {
   restrict: "E",
    controller: "",
   templateUrl: "template/footer.html"
 
 };
});
 app.filter('to_trusted', ['$sce', function($sce){
        return function(text) {
            return $sce.trustAsHtml(text);
        };
    }]);
	
app.controller('headerController',['$scope','$http','$location', function($scope, $http, $location) {
 $scope.isActive = function(route) {
        return route === $location.path();
    };
  $scope.isActivenew = function(route) {
        return route === $location.path();
    };
	
}]).run([ '$rootScope', '$state', '$stateParams',
function ($rootScope, $state, $stateParams) {
  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
}])

.run(function($rootScope){
    $rootScope
        .$on('$stateChangeStart', 
            function(event, toState, toParams, fromState, fromParams){ 
						    $("html, body").animate({scrollTop:0}, "slow");             
        });
})

.config(function($stateProvider, $urlRouterProvider) {
$urlRouterProvider.otherwise('/home');
    $stateProvider  
		.state('home', {
            url: '/home',
            templateUrl: "view/home.html",
			controller: "homepagecontroller",
			 pageTitle : 'Home',
			 description:'Dew Software provides comprehensive IT services, including web application development, testing of large-scale enterprise applications, and mobility services.',
             keyword:'Dew Software, IT Services, Enterprise Application, Web Application Development, Mobility Services',
             author:'Dew Software' 
			 

			 
        })  
	.state('contact', {
            url: '/contact',
            templateUrl: "view/contact.html",    
			 controller: "serviceController",
			pageTitle : 'Contact',
			description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software'  
			
        })
		  
		
			.state('services', {
            url: '/services',
            templateUrl: "view/service.html",
			 controller: "serviceController",
			pageTitle : 'Services',
			description:'Dew Software offers robust IT services from automation and performance testing services to web application development and DevOPs support. Read more…',
             keyword:'Dew Software, IT Services, Performance Testing, Web Application Development, DevOPs Support',
             author:'Dew Software' 
			 
        })  
		
		
		.state('app-software-development', {
            url: '/app-software-development',
            templateUrl: "view/app-software-development.html",
			 controller: "app-software-developmentController",
			pageTitle : 'app-software-development',
			description:'Dew Software offers application and software development, testing services, software maintenance, mobility services, and more.',
             keyword:'Application and Software Development, testing services, mobility services, software maintenance',
             author:'Dew Software' 	 
        })
		
		
		.state('support-operation', {
            url: '/support-operation',
            templateUrl: "view/support-operation.html",
			 controller: "support-operationController",
			pageTitle : 'support-operation',
			description:'DevOPs Support and Operations from Dew Software streamline your entire service lifecycle from the development process to production support, and helps with Project Management, DevOPs support and SysOPs support',
             keyword:'Dew Software, Project Management, SysOPs support, DevOPs support, development process, service lifecycle, production support',
             author:'Dew Software' 
			 
        })
		
		.state('mobility', {
            url: '/mobility',
            templateUrl: "view/mobility.html",
			 controller: "mobilityController",
			pageTitle : 'mobility',
			description:'Dew Software’s Mobility Services for iOS and Android expand your UC capabilities—including mobile testing and end-to-end deployment.',
             keyword:'Dew Software, Mobility Services for iOS and Android, UC Capabilities, Mobile Testing, and End-to-End Deployment',
             author:'Dew Software' 		 
        })
		
		
		.state('testing-services', {
            url: '/testing-services',
            templateUrl: "view/testing-services.html",
			 controller: "testing-servicesController",
			pageTitle : 'testing-services',
			description:'Dew Software offers testing services for automation. Automation and performance testing services cover everything from API tests to managing your development environment.',
             keyword:'Dew Software, API Tests, Managing Development Environment, Testing Services for Automation.',
             author:'Dew Software' 		 
        })
		
		
			.state('data-analytics', {
            url: '/data-analytics',
            templateUrl: "view/data-analytics.html",
			 controller: "data-analyticssController",
			pageTitle : 'data-analytics',
			description:'Dew Software harvests big data analytics and provides information management services that shed light on the most profitable opportunities.',
             keyword:'Dew Software, Big Data Analytics, Information Management Services',
             author:'Dew Software'  
        })
		
		.state('web-application', {
            url: '/web-application',
            templateUrl: "view/web-application.html",
			 controller: "web-applicationController",
			pageTitle : 'web-application',
			 description:'Dew Software creates a flawless user experience with web application development that involves CMS, eCommerce, widgets, custom coding, and APIs',
             keyword:'Dew Software, User Experience, web application development,custom coding',
             author:'Dew Software' 	 
        })
		
		
		
			.state('consulting-services', {
            url: '/consulting-services',
            templateUrl: "view/consulting-services.html",   
			 controller: "consulting-servicesController",
			pageTitle : 'consulting-services',
			 description:'Project management or sourcing models, Dew Software provides consulting services in web development, business and systems analysis, software development and engineering, and more.',
             keyword:'Project management, sourcing models, dew software, web development, systems analysis, software development',
             author:'Dew Software' 		 
        })
		    
			
			 
			
		
		.state('customers', {
            url: '/customers',
            templateUrl: "view/customers.html",
			 controller: "customersController",
			pageTitle : 'customers',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		.state('leadership', {
            url: '/leadership',
            templateUrl: "view/leadership.html",
			 controller: "leadershipController",
			pageTitle : 'leadership',
				 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 		 
        })
		
		
		
		.state('about', {
            url: '/about',
            templateUrl: "view/about.html",
			 controller: "aboutController",
			pageTitle : 'about',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		
		
		
			.state('iot', {
            url: '/iot',
            templateUrl: "view/iot.html",
			 controller: "iotController",
			pageTitle : 'iot',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		
		
		
		
			.state('responsive', {
            url: '/responsive',
            templateUrl: "view/responsive.html",
			 controller: "responsiveController",
			pageTitle : 'responsive',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		
			
			.state('e-commerce', {
            url: '/e-commerce',
            templateUrl: "view/e-commerce.html",
			 controller: "e-commerceController",
			pageTitle : 'e-commerce',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		
		
				.state('digital-marketing', {
            url: '/digital-marketing',
            templateUrl: "view/digital-marketing.html",
			 controller: "digital-marketingController",
			pageTitle : 'digital-marketing',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		 
		
			.state('seo', {
            url: '/seo',
            templateUrl: "view/seo.html",
			 controller: "seoController",
			pageTitle : 'seo',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		
		
		
		.state('strategic', {
            url: '/strategic',
            templateUrl: "view/strategic.html",
			 controller: "strategicController",
			pageTitle : 'strategic',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
		
		.state('company', {
            url: '/company',
            templateUrl: "view/company.html",
			 controller: "companyController",
			pageTitle : 'company',
			description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 		 
        })
				.state('our-services', {
            url: '/our-services',
            templateUrl: "view/our-services.html",
			 controller: "our-servicesController",
			pageTitle : 'our-services',
			description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 			 
        })
			.state('career', {
            url: '/career',
            templateUrl: "view/career.html",
			 controller: "careerController",
			pageTitle : 'career',
			 description:'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
             keyword:'Dew Software, Mobility Services, Web Application Development, IT Solutions',
             author:'Dew Software' 		 
        })	

	});
	app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function (scope) {
            scope.initCarousel = function(element) {
              // provide any default options you want
                var defaultOptions = {
                };
                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for(var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }
                // init carousel
                $(element).owlCarousel(defaultOptions);
            };
        }
    };
});
app.directive('owlCarouselItem', [function() {
    return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
          // wait for the last item in the ng-repeat then call init
            if(scope.$last) {
                scope.initCarousel(element.parent());
            }
        }
    };
}]);
app.controller('customersController',['$scope','$http','$location', function($scope, $http, $location) {
$scope.cases = [
 {image:'images/clickability.png',tm:'300ms'},
  {image:'images/paypal.png',tm:'600ms'},
  {image:'images/ebay.png',tm:'900ms'},
  {image:'images/visa.png',tm:'1200ms'},
  {image:'images/sony.png',tm:'1200ms'},
 {image:'images/verifone.png',tm:'600ms'},
  {image:'images/tesla.png',tm:'900ms'},
<!--  {image:'images/viva.png',tm:'1200ms'},-->
  {image:'images/lumentumn.png',tm:'1200ms'},
  {image:'images/blackhawk networks.png',tm:'600ms'},
  {image:'images/sephora.png',tm:'900ms'},
  {image:'images/bloomenergy.png',tm:'1200ms'},
  {image:'images/lendings.png',tm:'1200ms'},
    {image:'images/rivermedaow.png',tm:'1200ms'},
		   {image:'images/cisco.png',tm:'1200ms'},
  
  
  
  

  ];
}]);

app.controller('mobilityController',['$scope','$http','$location', function($scope, $http, $location) {
$scope.cases = [
 {image:'images/clickability.png',tm:'300ms'},
  {image:'images/paypal.png',tm:'600ms'},
  {image:'images/ebay.png',tm:'900ms'},
  {image:'images/visa.png',tm:'1200ms'},
  {image:'images/sony.png',tm:'1200ms'},
  {image:'images/verifone.png',tm:'600ms'},
  {image:'images/tesla.png',tm:'900ms'},
  <!--{image:'images/viva.png',tm:'1200ms'},-->
  {image:'images/lumentumn.png',tm:'1200ms'},
  {image:'images/blackhawk networks.png',tm:'600ms'},
  {image:'images/sephora.png',tm:'900ms'},
  {image:'images/bloomenergy.png',tm:'1200ms'},
  {image:'images/lendings.png',tm:'1200ms'},
    {image:'images/rivermedaow.png',tm:'1200ms'},
		   {image:'images/cisco.png',tm:'1200ms'},

  ];
}]);


app.controller('app-software-developmentController',['$scope','$http','$location', function($scope, $http, $location) {
$scope.cases = [
 {image:'images/clickability.png',tm:'300ms'},
  {image:'images/paypal.png',tm:'600ms'},
  {image:'images/ebay.png',tm:'900ms'},
  {image:'images/visa.png',tm:'1200ms'},
  {image:'images/sony.png',tm:'1200ms'},
  {image:'images/verifone.png',tm:'600ms'},
  {image:'images/tesla.png',tm:'900ms'},
<!--  {image:'images/viva.png',tm:'1200ms'},-->
  {image:'images/lumentumn.png',tm:'1200ms'},
  {image:'images/blackhawk networks.png',tm:'600ms'},
  {image:'images/sephora.png',tm:'900ms'},
  {image:'images/bloomenergy.png',tm:'1200ms'},
  {image:'images/lendings.png',tm:'1200ms'},
    {image:'images/rivermedaow.png',tm:'1200ms'},
		   {image:'images/cisco.png',tm:'1200ms'},

  ];
}]);


app.controller('support-operationController',['$scope','$http','$location', function($scope, $http, $location) {
$scope.cases = [
 {image:'images/clickability.png',tm:'300ms'},
  {image:'images/paypal.png',tm:'600ms'},
  {image:'images/ebay.png',tm:'900ms'},
  {image:'images/visa.png',tm:'1200ms'},
  {image:'images/sony.png',tm:'1200ms'},
  {image:'images/verifone.png',tm:'600ms'},
  {image:'images/tesla.png',tm:'900ms'},
<!--  {image:'images/viva.png',tm:'1200ms'},-->
  {image:'images/lumentumn.png',tm:'1200ms'},
  {image:'images/blackhawk networks.png',tm:'600ms'},
  {image:'images/sephora.png',tm:'900ms'},
  {image:'images/bloomenergy.png',tm:'1200ms'},
  {image:'images/lendings.png',tm:'1200ms'},
    {image:'images/rivermedaow.png',tm:'1200ms'},
		   {image:'images/cisco.png',tm:'1200ms'},

  ];
}]);

app.controller('web-applicationController',['$scope','$http','$location', function($scope, $http, $location) {
$scope.cases = [
 {image:'images/clickability.png',tm:'300ms'},
  {image:'images/paypal.png',tm:'600ms'},
  {image:'images/ebay.png',tm:'900ms'},
  {image:'images/visa.png',tm:'1200ms'},
  {image:'images/sony.png',tm:'1200ms'},
  {image:'images/verifone.png',tm:'600ms'},
  {image:'images/tesla.png',tm:'900ms'},
<!--  {image:'images/viva.png',tm:'1200ms'},-->
  {image:'images/lumentumn.png',tm:'1200ms'},
  {image:'images/blackhawk networks.png',tm:'600ms'},
  {image:'images/sephora.png',tm:'900ms'},
  {image:'images/bloomenergy.png',tm:'1200ms'},
  {image:'images/lendings.png',tm:'1200ms'},
    {image:'images/rivermedaow.png',tm:'1200ms'},
			   {image:'images/cisco.png',tm:'1200ms'},

  ];
}]);



  



app.controller('careerController',['$scope','$http','$location','$sce', function($scope, $http, $location,$sce) {
		  $scope.to_trusted = function(html_code)
    {
    console.log(html_code);
    return $sce.trustAsHtml(html_code); 
    }
$scope.careers = [






 {jobid:'QA',location:' Fremont, CA',Title:'Sr. QA Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Sr. QA Engineer (multiple openings)</p><p><strong>DUTIES:</strong>Develop &amp; execute software test plans. Specific duties include: Define the application performance engineering and testing for all Front-end and back-end application in both Linux and Unix environments. Assist with synergy across development, production support group (PSG), Enterprise Database Management (EDM), infrastructure and business for seamless and on time performance testing for different projects. Create and authenticate valid input data for performance testing using programming skills C/C++, JAVA, shell, Perl. Responsible for end-to-end application performance tuning and optimization for different projects and ensure quality code released to production. Work with infrastructure architect to design and document end-to-end solution Unix and Linux platforms. Drive key performance metrics and bottlenecks. Obtain the buy in from key business partners. Drive performance analytics capability using Splunk or any another tools to realize effectiveness and efficiency across Application platform. Work with Eclipse, Web Logic, SVN, GIT, Perforce, CVS,Maven, ANT, Openshift, Struts, Wireshark, Apache Tomcat and WebSphere.</p><p><strong>REQUIREMENTS:</strong>Master’s degree in Computer Science, Engineering or a related field plus 2 years of experience. In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience. Foreign degree equivalent is acceptable. We will also accept any suitable combination of education, training or experience. Experience include working with Eclipse, Web Logic, SVN, GIT, Perforce, CVS, Maven, ANT, Openshift, Struts, Wireshark, Apache Tomcat and WebSphere.</p><p><strong>HOURS:</strong>9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California, 94539. Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #QA to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},





  



/*************/

 {jobid:'QA',location:' Fremont, CA',Title:'Sr. QA Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Sr. QA Engineer (multiple openings)</p><p><strong>DUTIES:</strong>Develop & execute software test plans.  Specific duties include:  Develop, Java automation frameworks. Work with engineers, team leads, managers to develop testing solutions, using problem solving skills with programmatic solutions, that meet market needs with respect to functionality, performance, scalability, reliability, realistic implementation schedules, and adherence to testing goals and principles. Develop and execute software test plans to identify software problems and their causes. Debug and install programs in conjunction with documenting defects for each release and prepare management reports as directed. Develop test tools and interfaces for white-box testing. Design test plan, create test cases, execute and document defect. Work with Java, Selenium WebDriver, TestNG, Jenkins, Git, SoapUI, Rest API, SQL, Python, Perl, Android, iOS, Linux and Windows.</p><p><strong>REQUIREMENTS:</strong>Master’s degree in Computer Science, Engineering or a related field plus 2 years of experience.  In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience.  Foreign degree equivalent is acceptable.  We will also accept any suitable combination of education, training or experience.  Experience include working with Java, Selenium WebDriver, TestNG, Jenkins, Git, SoapUI, Rest API, SQL, Python, Perl, Android, iOS, Linux and Windows.</p><p><strong>HOURS:</strong>9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California, 94539.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #QA to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},



/********/
 
 {jobid:'SE',location:' Fremont, CA',Title:'Sr. Software Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Sr. Software Engineer (multiple openings)</p><p><strong>DUTIES:</strong>Requirement gathering, analysis, design and development of enterprise applications.  Specific duties include: Conceptualize proof of concept/proof of technologies in medical devices field in the shape of Mobile Apps. Develop, test, deploy and manage next generation medical devices apps pertaining to interactive patient and healthcare provider solutions, drug adherence, analytics etc. Responsible for the quality and delivery of the digital accelerator program projects. Interpret business issues and recommends best practices/solutions. Develop applications/medical devices and ensure they meet quality standards, compliance and deliverable requirements. Work with product management and UX designers to implement the best in class user experience. Work with global development team to implement the solutions. Perform validation and unit testing prior to deployment across environments. Assist team members in code review. Troubleshoot reported issues/problems. Produce detailed functional technical requirements documents. Produce error free programming logic to meet the functional and technical requirements of the system. Provide key input in technology stack evaluation and recommend technology options. Work with Objective-C, iOS Platform, X-Code IDE, Git, Github, Eclipse, Jenkins, JIRA, Stash, SourceTree and ServiceNow.</p><p><strong>REQUIREMENTS:</strong>Master’s degree in Computer Science, Engineering or a related field plus 2 years of experience.  In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience. Foreign degree equivalent is acceptable.  We will also accept any suitable combination of education, training or experience.  Experience to include working with Objective-C, iOS Platform, X-Code IDE, Git, Github, Eclipse, Jenkins, JIRA, Stash, SourceTree and ServiceNow.</p><p><strong>HOURS:</strong>40 hours per week, M-F, 9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California, 94539.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #SE to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},


{jobid:'BSA',location:' Fremont, CA',Title:'Business Systems Analyst (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Business Systems Analyst (multiple openings)</p><p><strong>DUTIES:</strong>Review, analyze and create detailed documentation of business systems and user needs. Specific duties include: Participate in requirement elicitation. Create functional requirement specification and translate functional designs to technical specifications. Create Use Cases and technical specifications that helps the developers to code the application. Create test cases and perform functional testing of the application. Collaborate with business analysts to clarify application requirements. Prepare test plans and test data for assigned work. Perform and fix unit and program tests. Participate in functional testing.  Identify the technical cause and potential impacts of errors. Implement coding or configuration changes. Update documentation for applications as code changes are applied. Work with Florensoft diffenginex, AQT tools, BMC Remedy, HPSM tools and IBM Mainframe.</p><p><strong>REQUIREMENTS:</strong>Bachelor’s degree in Business Administration, Computer Science, Engineering or a related field plus 2 years of experience in Florensoft diffenginex, AQT tools, BMC Remedy, HPSM tools and IBM Mainframe.  In lieu of the above, we will also accept a Master’s degree in Business Administration, Computer Science, Engineering or a related field with demonstrated ability to perform job duties through knowledge (course work/project) in Florensoft diffenginex, AQT tools, BMC Remedy, HPSM tools and IBM Mainframe.  Foreign degree equivalent is acceptable. We will accept any suitable combination of education, training or experience.</p><p><strong>HOURS:</strong>9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California 94539.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #BSA to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},


 
{jobid:'BSA',location:' Fremont, CA',Title:'Business Systems Analyst (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Business Systems Analyst (multiple openings)</p><p><strong>DUTIES:</strong>Review, analyze and create detailed documentation of business systems and user needs. Specific duties include: Analyze and review project requirement documents with Business Analysts. Create functional requirement documents based on the business requirement. Discuss systems requirements. Create modeling design document with development team. Discuss project task and HLEs with project manager. Participate in UI Walkthrough meetings with business users and Business Analysts. Create and modify Model Groups, Models, Option Class, Option Items, Rules, Properties and Lists for development. Perform unit test for functionality before submitting code to test. Perform import and export of models from development environment and integration environment when needed. Participate in system and integration testing with various teams. Work closely with System Testers & UAT Testers on new UI changes. Use SOAP UI to perform integration testing and identify critical issues for Aggregator and Dotcom sales channels. Use Modeling Rule Debug Trace to analyze defects and issues. Investigate complex data and pricing related issues in Database using SQL Developer. Work on production issues and update them using Remedy software. Work with data team to get SKUs and build them in models using Visual Modeler. Work with IBM Sterling, Tomcat, Quality Center, SOAP UI, Oracle, Linux and TOAD.</p><p><strong>REQUIREMENTS:</strong>Bachelor’s degree in Business Administration, Computer Science, Engineering or a related field plus 2 years of experience in IBM Sterling, Tomcat, Quality Center, SOAP UI, Oracle, Linux and TOAD.  In lieu of the above, we will also accept a Master’s degree in Business Administration, Computer Science, Engineering or a related field with demonstrated ability to perform job duties through knowledge (course work/project) in IBM Sterling, Tomcat, Quality Center, SOAP UI, Oracle, Linux and TOAD.  Foreign degree equivalent is acceptable. We will accept any suitable combination of education, training or experience.</p><p><strong>HOURS:</strong>9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California 9439.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #BSA to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},



{jobid:'SE',location:' Fremont, CA',Title:'Sr. Software Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Sr. Software Engineer (multiple openings)</p><p><strong>DUTIES:</strong>Requirement gathering, analysis, design and development of enterprise applications. Specific duties include: Document and demonstrate solutions by developing documentation, flowcharts, layouts, diagrams, charts, code comments and clear code. Prepare and install solutions by determining and designing system specifications, standards, and programming. Interact with software systems engineer or other technical leader to understand subsystem and component specifications and recommend changes to facilitate efficient and effective development. Determine and communicate the implications of system-level decisions on subsystems and components, and help determine how best to mitigate or take advantage of these implications. Determine and communicate the requirements and capabilities of components within the context of the larger system, project, and team. Provide information by collecting, analyzing, and summarizing development and service issues. Interface with clients and gather business requirements and objectives. Translate clients’ business requirements and objectives into technical applications and solutions. Analyze problems, resolve and implement web-based applications. Develop web applications using Java/J2EE, JSP, JSTL, JQuery, JavaScript. Work with backend objects such as stored procedure, packages, scheduler and trigger (PL/SQL). Deploy applications in different server like IBM WebSphere, Web logic, Tomcat, ANT, MAVEN, Jenkins and Artifactory. Develop applications using IDE like Eclipse, LDE, SVN, GIT, VSS, CVS and PVCS.</p><p><strong>REQUIREMENTS:</strong>Master’s degree in Computer Science, Engineering or a related field plus 2 years of experience.  In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience. Foreign degree equivalent is acceptable.  We will also accept any suitable combination of education, training or experience.  Experience to include working with Eclipse, Java, SVN, GIT, PVCS, Maven, Ant, Jenkins, Artifactory, Tomcat and WebSphere.</p><p><strong>HOURS:</strong>40 hours per week, M-F, 9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California, 94539.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #SE to: President, Dew Software,Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},



{jobid:'SE',location:' Fremont, CA',Title:'Sr. Software Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Sr. Software Engineer (multiple openings)</p><p><strong>DUTIES:</strong>Requirement gathering, analysis, design and development of enterprise applications. Specific duties include: Understand functional and business requirements. Design and develop high-performance and scalable systems using Java, J2EE and related technologies. Collaborate with cross-functional teams to analyze requirements, define APIs, design and implement well-designed and flexible solutions. Develop technical design, system design and product documentation. Design, develop, integrate and support software and system applications. Develop applications using Java, J2EE, Spring, Quartz, Webservices, RESTFul Webservices, SOAP Webservices, XML, JSON, JUnit, Hibernate, JPA, JMS, Ajax, JavaScript, JQuery, Maven, SQL, MySQL, DB2, Oracle, GIT, SVN, Amazon Cloud and AWS. Work with application servers such as WebSphere, WebLogic, JBoss and web servers Tomcat. Develop and consume APIs. Perform code reviews to ensure quality standards. Support, maintain and enhance products. Assist junior members of the team. Maintain code quality through best practices and unit testing. Resolve complex issues in a timely manner. Build scalable and highly available distributed systems. Break down problems and estimate time for development tasks. Resolve technical issues through debugging, research, and investigation. Collaborate with other engineers to select appropriate design solutions and ensure the compatibility, scalability, failover handling and high throughput. Perform and coordinate performance analysis and troubleshoot performance bottlenecks to ensure scalable and stable systems.</p><p><strong>REQUIREMENTS:</strong>Master’s degree in Computer Science, Engineering or a related field plus 2 years of experience.  In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience. Foreign degree equivalent is acceptable.  We will also accept any suitable combination of education, training or experience.  Experience to include working with Java, J2EE, Web Services, XML, Ajax, Spring, Hibernate, Quartz, JQuery, Junit and Websphere.</p><p><strong>HOURS:</strong>40 hours per week, M-F, 9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California, 94539.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong> Mail resume referencing job code #SE to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},


{jobid:'SE',location:' Fremont, CA',Title:'Sr. Software Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong>Sr. Software Engineer (multiple openings)</p><p><strong>DUTIES:</strong>Requirement gathering, analysis, design and development of enterprise applications.  Specific duties include: Design and develop computer software systems in conjunction with hardware product development.  Analyze software requirements to determine feasibility of design within time and cost constraints.  Consult with hardware engineers and other engineering staff to evaluate interface between hardware, software, operational and performance requirements of the overall system. Formulate and design software system using scientific analysis and mathematical models to predict and measure the outcome and consequences of design.  Develop and direct software system testing procedures, programming and documentation.  Consult with customer concerning maintenance of software system.  May coordinate installation of software system.  Work with JAVA, J2EE, XML, Open Stack, REST, Web Services, Junit, and Oracle.</p><p><strong>REQUIREMENTS:</strong>Master’s degree in Computer Science, Engineering or a related field plus 2 years of experience.  In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience. Foreign degree equivalent is acceptable.  We will also accept any suitable combination of education, training or experience.  Experience to include JAVA, J2EE, XML, Open Stack, REST, Web Services, Junit and Oracle.</p><p><strong>HOURS:</strong>9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong>983 Corporate Way, Fremont, California, 94539.  Travel not required but must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong>Mail resume referencing job code #SE to: President, Dew Software,Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},

  

{jobid:'SE',location:' Fremont, CA',Title:' Software Engineer (multiple openings)',description:'<div class="job_description"><p><strong>TITLE:</strong> Sr. Software Engineer (multiple openings)</p><p><strong>DUTIES:</strong> Requirement gathering, analysis, design and development of enterprise applications.  Specific duties include: Lead and participate in architectural technology designs considering usability, scalability, security and ongoing supportability of software components. Code Java Enterprise software. Work with business and systems analysts to help ensure projects are correctly defined and technical designs fulfill the desired functional requirements. Develop business and user requirements, technical architecture, functional specifications, design documents and testing requirements for projects. Deliver formal presentation of findings, recommendations, and specifications. Collaborate with required departments regarding infrastructure, program management and quality assurance. Develop distributed systems, including client/server and web based distributed systems environments and GUI design. Develop, create, and modify existing applications software or specialized utility programs. Contribute to all aspects of web-based enterprise application development, including server-side business logic, client-side scripting, web page layout, and database design. Develop technical proofs of concept as necessary, to validate proposed solutions designs, reduce technical risk and minimize level of effort uncertainty. Responsible for the delivering of technical solution architecture to address client functional and technical requirements. Architect complex, enterprise solutions that meet business and customer needs. Create and support web applications using RESTful APIs. Work with JAVA, J2EE, EJB, Hibernate, Spring, HTML, CSS, Java Script, SOAP and Web Services.</p><p><strong>REQUIREMENTS:</strong> Master’s degree in Computer Science, Engineering or a related fieldplus 2 years of experience.  In lieu of the above, we will also accept a Bachelor’s degree plus 5 years of progressively responsible post-baccalaureate experience. Foreign degree equivalent is acceptable.  We will also accept any suitable combination of education, training or experience.  Experience to include working with JAVA, J2EE, EJB, Hibernate, Spring, HTML, CSS, Java Script, SOAP and Web Services.</p><p><strong>HOURS:</strong> 40 hours per week, M-F, 9:00 a.m. – 6:00 p.m.</p><p><strong>JOB LOCATION:</strong> 983 Corporate Way, Fremont, California, 94539.  Travel not requiredbut must be willing to relocate to unanticipated cities across the country per contract demand.</p><p><strong>CONTACT PERSON:</strong> Mail resume referencing job code #SE to: President, Dew Software, Inc., 983 Corporate Way, Fremont, CA 94539.</p><p><strong>Note:</strong>This position is eligible for the company’s referral incentive program. Please refer to the posted policy for details.</p></div>'},


  
      

{jobid:'US ',location:'Bay Area, CA',Title:'ERP Support Analyst with Qlikview',description:'<div class="job_description"><ul><li>Bachelor’s or Master’s degree in relevant field of work.</li><li>8+ years of overall technical/functional experience in system design, development and production support of Finance functions using a major ERP system.</li><li>5+ years of experience in AS 400 development and support.</li><li>2+ years of Qlikview experience.</li><li>Able to demonstrate an understanding of SOX compliance and applicability to technical practices and implementations.</li></ul></li><span style="float:left;  margin-top: 9px;"> To apply for this job <strong>email your details with Job Code in the subject line to </strong><a class="job_application_email" style="background:#fff;" href="#">resume@dewsoftware.com</a> </span><div style="clear:both"></div></div>'},


{jobid:'US',location:'Bay Area, CA',Title:'NetSuite Developer',description:'<div class="job_description"><ul><li>We are looking for Consultants with experience in NetSuite Development/Integration/Implementation.</li><li>Scripting experience is a must.</li><li>Experience of working within the NetSuite development environment.</li><li>Proficient in NetSuite Scripting for the NetSuite ERP Platform.</li><li>Bachelor’s degree, preferably in Business, Engineering, Management Information Systems, or Accounting.</li><li>Bachelor’s or Master’s degree in relevant field of work.</li><li>8+ years of overall technical/functional experience in system design, development and production support of Finance functions using a major ERP system.</li><li>5+ years of experience in AS 400 development and support.</li><li>2+ years of Qlikview experience.</li><li>Able to demonstrate an understanding of SOX compliance and applicability to technical practices and implementations.</li></ul><span style="float:left;  margin-top: 9px;"> To apply for this job <strong>email your details with Job Code in the subject line to </strong><a class="job_application_email" style="background:#fff;" href="#">resume@dewsoftware.com</a> </span><div style="clear:both"></div></div>'},



{jobid:'US',location:'Bay Area, CA',Title:'  Front end UI Developer',description:'<div class="job_description"><ul><li>&nbsp;Minimum of 5 – 7 years of experience developing web-based, database-centric software applications.</li><li>Extensive experience with UI/UX and Front end design</li><li>Solid experience with HTML5, CSS 3, JavaScript and jQuery.</li><li>BS degree from an accredited university in computer science, or related field</li></ul><span style="float:left;  margin-top: 9px;"> To apply for this job <strong>email your details with Job Code in the subject line to </strong><a class="job_application_email" style="background:#fff;" href="#">resume@dewsoftware.com</a> </span><div style="clear:both"></div></div>'},

 
   
 
  ];
}]);











	app.controller('homepagecontroller',['$scope','$http','$location', function($scope, $http, $location) {
		//$scope.items1 = [1,2,3,4,5];
  $scope.services = [
  {image:'images/web-app.png',title:'Web application <br> development ( UI/UX)',description:'Enhance your user experience that influences purchasing decisions. ',readlink:'#web-application'},
				  
  {image:'images/support operation.png',title:'DevOPs Support <br> and Operations',description:'Increase your efficiency with DevOPs support that manages your service lifecycle in its entirety.',readlink:'#support-operation'},
 
   {image:'images/mobility.png',title:'Mobility <br> Services',description:'Expand your UC capabilities and implement responsive design with mobility services for iOS and Android.',readlink:'#mobility'},
   
   
    {image:'images/testing-service.png',title:'Performance <br> Testing Services',description:'Use performance testing services that ensure your automation is running flawlessly.',readlink:'#testing-services'},
	
	 {image:'images/data-analytics.png',title:'Big Data/<br> Analytics',description:'Make informed decisions with smart data analysis that informs you of the strategies that create positive impacts.',readlink:'#data-analytics'},
	 
	  {image:'images/app-software-development.png',title:'Software <br> Development',description:'Streamline your organization with web development, systems analysis, and more.',readlink:'#app-software-development'},
	  
	   {image:'images/consulting.png',title:'Consulting <br> Services',description:'Transform your organization’s operations and its future with solutions, from strategy and marketing to staffing and technology.',readlink:'#consulting-services'}
   
  ];
  
  

    $scope.industories = [
  {image:'images/financial.png',title:'Financial',description:'Profitable decisions occur with global financial data at your fingertips.'},
				  
  {image:'images/hi-tech.png',title:'Hi-Tech',description:'Stay a step ahead of technology with advanced tools and solutions.'},
 
   {image:'images/health-care.png',title:'Healthcare',description:'Experience a predictable and reliable IT service that facilitates patient care.'},
   
   
    {image:'images/retail.png',title:'Retail',description:'Go beyond brick-and-mortar with digital marketing that increases sales.'},
	
	 {image:'images/space.png',title:'Logistics Space',description:'Leverage app-based services that streamline storage and delivery objectives.'},

    
  ];
  
  
  
  
    $scope.cases = [
 {image:'images/clickability.png',tm:'300ms'},
  {image:'images/paypal.png',tm:'600ms'},
  {image:'images/ebay.png',tm:'900ms'},
  {image:'images/visa.png',tm:'1200ms'},
  {image:'images/sony.png',tm:'1200ms'},
  {image:'images/verifone.png',tm:'600ms'},
  {image:'images/tesla.png',tm:'900ms'},
<!--  {image:'images/viva.png',tm:'1200ms'},-->
  {image:'images/lumentumn.png',tm:'1200ms'},
  {image:'images/blackhawk networks.png',tm:'600ms'},
  {image:'images/sephora.png',tm:'900ms'},
  {image:'images/bloomenergy.png',tm:'1200ms'},
  {image:'images/lendings.png',tm:'1200ms'},
    {image:'images/rivermedaow.png',tm:'1200ms'},
		   {image:'images/cisco.png',tm:'1200ms'},
  ];
 $scope.myInterval = 1000;
    $scope.slides = [
        { active:'active',bg:'images/bg1.jpg',h1text:'Transformational IT Services',h2text:'Optimize your technological infrastructure with the most cutting-edge IT solutions.',text:'See Our Solutions',readmore:'#our-services' },
       	 { bg:'images/Partner.jpg',h1text:'Partner with Dew Software',h2text:'Stay at the top of your industry and work with hundreds of technology experts who are available 24/7.', text:'Contact Us',readmore:'#contact' },
		  { bg:'images/solution.jpg',h1text:'Multiple Tech Solutions under One Roof',h2text:'Discover the most comprehensive IT services—from enhanced mobility to improved user experience.',text:'See How We Work',readmore:'#about' },
		   { bg:'images/leaders.jpg',h1text:'Our Clients Are Industry Leaders',h2text:'We leverage the latest technological trends to create cutting-edge business solutions.', text:'Who We Serve',readmore:'#customers' },
		 
    ];	
	new WOW().init();
	
	   $('#main-slider').carousel({
			interval:5000,
			autoplay: true
		});
	  
$('#search').on('click',function(){
		$(this).parent().addClass('active');
		 $("#input").animate({width: "180px"}, 10);
		 $("#input").css("border","2px solid #ccc");
   });
	 var mouse_is_inside_apptpnv;
        $('#input').unbind();
        $('#input').hover(function ()
        {
            mouse_is_inside_apptpnv = true;
        }, function ()
        {
            mouse_is_inside_apptpnv = false;
        });
        $("body").on('mouseup',function ()
        {
            if (!mouse_is_inside_apptpnv)
            { $("#input").val('');
				$('#search').parent().removeClass('active');
                $("#input").animate({width: "35px"}, 10);
				 $("#input").css("border","none");
				
            }
        });

}]);
app.directive('myMap', function() {
    // directive link function
    var link = function(scope, element, attrs) {
        var map, infoWindow;
        var markers = [];
        
        // map config
        var mapOptions = {
            center: new google.maps.LatLng(33.0255503, -16.1244047),
            zoom: 3,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: false
        };
        
        // init the map
        function initMap() {
            if (map === void 0) {
                map = new google.maps.Map(element[0], mapOptions);
            }
        }    
        
        // place a marker
        function setMarker(map, position, title, content) {
            var marker;
            var markerOptions = {
                position: position,
                map: map,
                title: title,
               
            };

            marker = new google.maps.Marker(markerOptions);
            markers.push(marker); // add marker to array
            
            google.maps.event.addListener(marker, 'click', function () {
                // close window if not undefined
                if (infoWindow !== void 0) {
                    infoWindow.close();
                }
                // create new window
                var infoWindowOptions = {
                    content: content
                };
                infoWindow = new google.maps.InfoWindow(infoWindowOptions);
                infoWindow.open(map, marker);
            });
        }
        
        // show the map and place some markers
        initMap();
        
        setMarker(map, new google.maps.LatLng(37.4994526,-121.9315802), 'USA', '<strong>Head Quarters</strong> <br/>983 Corporate Way Fremont, CA 94539');
        setMarker(map, new google.maps.LatLng(9.9342793, 78.0830523), 'Madurai', '<strong>Zone #: 1</strong> <br/>36/2, Doak Nagar Main road,Madurai, Tamil Nadu -625016');
        setMarker(map, new google.maps.LatLng(22.3000687, 73.1960338),'Vadodara', '<strong>Zone #: 2</strong> <br/>SF-7. Abhilasha Square, Abhilasha Char Rasta, New Sama Road, Vadodara – 390008');
		setMarker(map, new google.maps.LatLng(13.0346601, 80.2754033), 'Chennai','<strong>Zone #: 3</strong> <br/>1, Ananthu Street, Santhome High Road, Santhome, Chennai 600 004');
    };
    
    return {
        restrict: 'A',
        template: '<div id="gmaps"></div>',
        replace: true,
        link: link
    };
}); 
	app.controller('serviceController',['$scope','$timeout', function($scope, $timeout) {
	 
	
	}]);



 



  
