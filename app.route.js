app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "view/home.html",
            controller: "homepagecontroller",
            pageTitle: 'Home',
            description: 'WorldScape Inc. provides comprehensive IT services, including web application development, testing of large-scale enterprise applications, and mobility services.',
            keyword: 'WorldScape Inc., IT Services, Enterprise Application, Web Application Development, Mobility Services',
            author: 'WorldScape Inc.'



        })
        .state('contact', {
            url: '/contact',
            templateUrl: "view/contact.html",
            controller: "serviceController",
            pageTitle: 'Contact',
            description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
            keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
            author: 'WorldScape Inc.'

        })


    .state('services', {
        url: '/services',
        templateUrl: "view/service.html",
        controller: "serviceController",
        pageTitle: 'Services',
        description: 'WorldScape Inc. offers robust IT services from automation and performance testing services to web application development and DevOPs support. Read more…',
        keyword: 'WorldScape Inc., IT Services, Performance Testing, Web Application Development, DevOPs Support',
        author: 'WorldScape Inc.'

    })


    .state('app-software-development', {
        url: '/app-software-development',
        templateUrl: "view/app-software-development.html",
        controller: "app-software-developmentController",
        pageTitle: 'app-software-development',
        description: 'WorldScape Inc. offers application and software development, testing services, software maintenance, mobility services, and more.',
        keyword: 'Application and Software Development, testing services, mobility services, software maintenance',
        author: 'WorldScape Inc.'
    })


    .state('support-operation', {
        url: '/support-operation',
        templateUrl: "view/support-operation.html",
        controller: "support-operationController",
        pageTitle: 'support-operation',
        description: 'DevOPs Support and Operations from WorldScape Inc. streamline your entire service lifecycle from the development process to production support, and helps with Project Management, DevOPs support and SysOPs support',
        keyword: 'WorldScape Inc., Project Management, SysOPs support, DevOPs support, development process, service lifecycle, production support',
        author: 'WorldScape Inc.'

    })

    .state('mobility', {
        url: '/mobility',
        templateUrl: "view/mobility.html",
        controller: "mobilityController",
        pageTitle: 'mobility',
        description: 'WorldScape Inc.’s Mobility Services for iOS and Android expand your UC capabilities—including mobile testing and end-to-end deployment.',
        keyword: 'WorldScape Inc., Mobility Services for iOS and Android, UC Capabilities, Mobile Testing, and End-to-End Deployment',
        author: 'WorldScape Inc.'
    })


    .state('testing-services', {
        url: '/testing-services',
        templateUrl: "view/testing-services.html",
        controller: "testing-servicesController",
        pageTitle: 'testing-services',
        description: 'WorldScape Inc. offers testing services for automation. Automation and performance testing services cover everything from API tests to managing your development environment.',
        keyword: 'WorldScape Inc., API Tests, Managing Development Environment, Testing Services for Automation.',
        author: 'WorldScape Inc.'
    })


    .state('data-analytics', {
        url: '/data-analytics',
        templateUrl: "view/data-analytics.html",
        controller: "data-analyticssController",
        pageTitle: 'data-analytics',
        description: 'WorldScape Inc. harvests big data analytics and provides information management services that shed light on the most profitable opportunities.',
        keyword: 'WorldScape Inc., Big Data Analytics, Information Management Services',
        author: 'WorldScape Inc.'
    })

    .state('web-application', {
        url: '/web-application',
        templateUrl: "view/web-application.html",
        controller: "web-applicationController",
        pageTitle: 'web-application',
        description: 'WorldScape Inc. creates a flawless user experience with web application development that involves CMS, eCommerce, widgets, custom coding, and APIs',
        keyword: 'WorldScape Inc., User Experience, web application development,custom coding',
        author: 'WorldScape Inc.'
    })



    .state('consulting-services', {
        url: '/consulting-services',
        templateUrl: "view/consulting-services.html",
        controller: "consulting-servicesController",
        pageTitle: 'consulting-services',
        description: 'Project management or sourcing models, WorldScape Inc. provides consulting services in web development, business and systems analysis, software development and engineering, and more.',
        keyword: 'Project management, sourcing models, WorldScape Inc., web development, systems analysis, software development',
        author: 'WorldScape Inc.'
    })





    .state('customers', {
        url: '/customers',
        templateUrl: "view/customers.html",
        controller: "customersController",
        pageTitle: 'customers',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })


    .state('leadership', {
        url: '/leadership',
        templateUrl: "view/leadership.html",
        controller: "leadershipController",
        pageTitle: 'leadership',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })



    .state('about', {
        url: '/about',
        templateUrl: "view/about.html",
        controller: "aboutController",
        pageTitle: 'about',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })





    .state('iot', {
        url: '/iot',
        templateUrl: "view/iot.html",
        controller: "iotController",
        pageTitle: 'iot',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })






    .state('responsive', {
        url: '/responsive',
        templateUrl: "view/responsive.html",
        controller: "responsiveController",
        pageTitle: 'responsive',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })




    .state('e-commerce', {
        url: '/e-commerce',
        templateUrl: "view/e-commerce.html",
        controller: "e-commerceController",
        pageTitle: 'e-commerce',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })




    .state('digital-marketing', {
        url: '/digital-marketing',
        templateUrl: "view/digital-marketing.html",
        controller: "digital-marketingController",
        pageTitle: 'digital-marketing',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })




    .state('seo', {
        url: '/seo',
        templateUrl: "view/seo.html",
        controller: "seoController",
        pageTitle: 'seo',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })




    .state('strategic', {
        url: '/strategic',
        templateUrl: "view/strategic.html",
        controller: "strategicController",
        pageTitle: 'strategic',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })

    .state('company', {
        url: '/company',
        templateUrl: "view/company.html",
        controller: "companyController",
        pageTitle: 'company',
        description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
        author: 'WorldScape Inc.'
    })
        .state('our-services', {
            url: '/our-services',
            templateUrl: "view/our-services.html",
            controller: "our-servicesController",
            pageTitle: 'our-services',
            description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
            keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
            author: 'WorldScape Inc.'
        })
        .state('career', {
            url: '/career',
            templateUrl: "view/career.html",
            controller: "careerController",
            pageTitle: 'career',
            description: 'WorldScape Inc. is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
            keyword: 'WorldScape Inc., Mobility Services, Web Application Development, IT Solutions',
            author: 'WorldScape Inc.'
        })

});