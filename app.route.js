app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: "view/home.html",
            controller: "homepagecontroller",
            pageTitle: 'Home',
            description: 'Dew Software provides comprehensive IT services, including web application development, testing of large-scale enterprise applications, and mobility services.',
            keyword: 'Dew Software, IT Services, Enterprise Application, Web Application Development, Mobility Services',
            author: 'Dew Software'



        })
        .state('contact', {
            url: '/contact',
            templateUrl: "view/contact.html",
            controller: "serviceController",
            pageTitle: 'Contact',
            description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
            keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
            author: 'Dew Software'

        })


    .state('services', {
        url: '/services',
        templateUrl: "view/service.html",
        controller: "serviceController",
        pageTitle: 'Services',
        description: 'Dew Software offers robust IT services from automation and performance testing services to web application development and DevOPs support. Read more…',
        keyword: 'Dew Software, IT Services, Performance Testing, Web Application Development, DevOPs Support',
        author: 'Dew Software'

    })


    .state('app-software-development', {
        url: '/app-software-development',
        templateUrl: "view/app-software-development.html",
        controller: "app-software-developmentController",
        pageTitle: 'app-software-development',
        description: 'Dew Software offers application and software development, testing services, software maintenance, mobility services, and more.',
        keyword: 'Application and Software Development, testing services, mobility services, software maintenance',
        author: 'Dew Software'
    })


    .state('support-operation', {
        url: '/support-operation',
        templateUrl: "view/support-operation.html",
        controller: "support-operationController",
        pageTitle: 'support-operation',
        description: 'DevOPs Support and Operations from Dew Software streamline your entire service lifecycle from the development process to production support, and helps with Project Management, DevOPs support and SysOPs support',
        keyword: 'Dew Software, Project Management, SysOPs support, DevOPs support, development process, service lifecycle, production support',
        author: 'Dew Software'

    })

    .state('mobility', {
        url: '/mobility',
        templateUrl: "view/mobility.html",
        controller: "mobilityController",
        pageTitle: 'mobility',
        description: 'Dew Software’s Mobility Services for iOS and Android expand your UC capabilities—including mobile testing and end-to-end deployment.',
        keyword: 'Dew Software, Mobility Services for iOS and Android, UC Capabilities, Mobile Testing, and End-to-End Deployment',
        author: 'Dew Software'
    })


    .state('testing-services', {
        url: '/testing-services',
        templateUrl: "view/testing-services.html",
        controller: "testing-servicesController",
        pageTitle: 'testing-services',
        description: 'Dew Software offers testing services for automation. Automation and performance testing services cover everything from API tests to managing your development environment.',
        keyword: 'Dew Software, API Tests, Managing Development Environment, Testing Services for Automation.',
        author: 'Dew Software'
    })


    .state('data-analytics', {
        url: '/data-analytics',
        templateUrl: "view/data-analytics.html",
        controller: "data-analyticssController",
        pageTitle: 'data-analytics',
        description: 'Dew Software harvests big data analytics and provides information management services that shed light on the most profitable opportunities.',
        keyword: 'Dew Software, Big Data Analytics, Information Management Services',
        author: 'Dew Software'
    })

    .state('web-application', {
        url: '/web-application',
        templateUrl: "view/web-application.html",
        controller: "web-applicationController",
        pageTitle: 'web-application',
        description: 'Dew Software creates a flawless user experience with web application development that involves CMS, eCommerce, widgets, custom coding, and APIs',
        keyword: 'Dew Software, User Experience, web application development,custom coding',
        author: 'Dew Software'
    })



    .state('consulting-services', {
        url: '/consulting-services',
        templateUrl: "view/consulting-services.html",
        controller: "consulting-servicesController",
        pageTitle: 'consulting-services',
        description: 'Project management or sourcing models, Dew Software provides consulting services in web development, business and systems analysis, software development and engineering, and more.',
        keyword: 'Project management, sourcing models, dew software, web development, systems analysis, software development',
        author: 'Dew Software'
    })





    .state('customers', {
        url: '/customers',
        templateUrl: "view/customers.html",
        controller: "customersController",
        pageTitle: 'customers',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })


    .state('leadership', {
        url: '/leadership',
        templateUrl: "view/leadership.html",
        controller: "leadershipController",
        pageTitle: 'leadership',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })



    .state('about', {
        url: '/about',
        templateUrl: "view/about.html",
        controller: "aboutController",
        pageTitle: 'about',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })





    .state('iot', {
        url: '/iot',
        templateUrl: "view/iot.html",
        controller: "iotController",
        pageTitle: 'iot',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })






    .state('responsive', {
        url: '/responsive',
        templateUrl: "view/responsive.html",
        controller: "responsiveController",
        pageTitle: 'responsive',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })




    .state('e-commerce', {
        url: '/e-commerce',
        templateUrl: "view/e-commerce.html",
        controller: "e-commerceController",
        pageTitle: 'e-commerce',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })




    .state('digital-marketing', {
        url: '/digital-marketing',
        templateUrl: "view/digital-marketing.html",
        controller: "digital-marketingController",
        pageTitle: 'digital-marketing',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })




    .state('seo', {
        url: '/seo',
        templateUrl: "view/seo.html",
        controller: "seoController",
        pageTitle: 'seo',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })




    .state('strategic', {
        url: '/strategic',
        templateUrl: "view/strategic.html",
        controller: "strategicController",
        pageTitle: 'strategic',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })

    .state('company', {
        url: '/company',
        templateUrl: "view/company.html",
        controller: "companyController",
        pageTitle: 'company',
        description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
        keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
        author: 'Dew Software'
    })
        .state('our-services', {
            url: '/our-services',
            templateUrl: "view/our-services.html",
            controller: "our-servicesController",
            pageTitle: 'our-services',
            description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
            keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
            author: 'Dew Software'
        })
        .state('career', {
            url: '/career',
            templateUrl: "view/career.html",
            controller: "careerController",
            pageTitle: 'career',
            description: 'Dew Software is a premier IT Solutions and Services partner who leverages the latest industry trends—from software and web application development to mobility services.',
            keyword: 'Dew Software, Mobility Services, Web Application Development, IT Solutions',
            author: 'Dew Software'
        })

});