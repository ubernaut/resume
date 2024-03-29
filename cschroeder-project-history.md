---
fontfamily: bookman
geometry: margin=1cm
---

# Project History

# Federal Aviation Administration  
### May 2020 - Present
Worked as the IT lead managing simultaneous software projects and operations of the camera network, websites, and infrastructure required to support them.

#### AWS Federal Cloud Services migration and refactor (ongoing)   
- ***Architect, Project Manager, Administrator***   
Leading a large team from Amazon and multiple contractors tasked with migrating the Weather Camera Program's IT infrastructure (50 services and 4 environments) into FCS and the Mission Support network. The project involves decoupling the existing apps from cloud vendor specific services like App Engine and migrating them into portable containers managed by kubernetes. Many challenges exist in terms of authorization from various groups around the FAA, meeting the enhanced security controls required of the Mission Support network, and ramping the existing team up on the technology required to ensure a successful migration and refactor.

#### 360 Camera Implementation  
- ***Team Lead, Sr. Software Engineer, Network Engineer, Software Architect***  
Lead a small team and implemented a new 360 degree camera system for the FAA Weather Camera Program. This project required a broad range of skills: researching and testing new cameras, design of ground up camera systems,  integration of those systems into FAA control electronics, low latency video encoding, data transmission over cellular networks,  browser based WebGL reprojection of live video feeds to improve image quality, and developing a new web based interface.

##### AvCams Plus  
- ***Sr. Software Engineer, Project Manager, Software Architect***  
Lead the team charged with building AvCamsPlus https://weathercams.faa.gov the successor to https://avcams.faa.gov (now redirected).  AvCamsPlus is a Progressive Web Application running on Google Cloud Platform and built with Postgres, Node.js, and React. The goal of this project was to use modern technologies and web based standards to create a cutting edge, responsive website to keep pilots informed in order for them to make the safest decisions possible. AvCamsPlus imports and displays large amounts of data from external sources including the NWS, FAA, and Google Maps.  This project required extensive knowledge of GIS, emerging web standards, as well as long term project planning and execution experience.  

#### Google Cloud Serverless Migration  
- ***Sr. Software Engineer, Network Engineer, Software Architect***  
Led the team which converted AvCams Plus to a serverless architecture, eliminating a significant amount of maintenance overhead by using the Google App Engine instead of virtual machines. The serverless migration also enabled automatic scaling of the infrastructure.

#### Maintenance Console  
- ***Sr. Software Engineer, Software Architect***  
Leading the team tasked with marshaling the existing Weather Camera Program digital infrastructure, performing integrations between disparate apps and establishing a Continuous Integration pipeline to prevent interruption of services and enable continuous operation of the software through the development process. This project is ongoing and requires experience maintaining and extending legacy applications, as well as working closely with all stakeholders to ensure nothing is overlooked.

#### PIREPS
- ***Sr. Software Engineer, Team Lead***  
Lead a small team of developers who created two new interfaces for submitting Pilot Reports. These interfaces solved multiple issues related to data quality and input validation. One version is a desktop focused interface aimed at providing the full extent of PIREP input options. The second version is a mobile focused app with many innovations aimed at simplifying the process of creating a PIREP and inventing many new custom user interface controls to enable completion of a PIREP using only one hand.

 ---

# Leidos  
### March 2016 - May 2020
Worked as a consultant for the F.A.A. Weather Camera Program Office. Most recently as the IT Lead. Project roles include:  Software Architect, Sr. Software Engineer, Team Lead, Network Engineer, System Administrator, Development Operations, Project Manager.   
(All projects from the FAA section above were also worked on during my time at Leidos except for the AWS migration but I have opted to only include them once.)

### Pennsylvania Turnpike Commission
#### Advanced ArcGIS Search Functionality
- ***Sr. Software Engineer***  
Designed and implemented a Python library to provide robust search functionality across the Pennsylvania Turnpike Commision’s extensive GIS library.

---

# GeoNorth  
### October  2010 –March 2016  
Served a number of roles over the years including a Sr. Consultant, Sr. Software Engineer, Team Lead, Network Engineer, System Administrator. Clients included State and Federal organizations as well as private entities.  

### Internal
#### GeoServer WMS Server for a Web Based Map with Mobile Support  
- ***Administrator / Architect (Duration 1 year)***  
Used GeoServer to support rapid delivery of imagery via the WMS protocol as the backend of a web based satellite mapping application supporting  mobile devices. This mobile site for MapOptix (http://www.geonorth.com/products/mapoptix) provided rapid access to large imagery data-sets minutes after collection by satellite. WMS is also compatible with popular apps like Google Earth and ArcMap. Geoserver was  Installed on a Linux VM.  This role requires skills in image processing, mobile data optimization,  performance tuning, network administration, Python and Bash scripting. The host machine receives imagery directly from the Satellite at our Digital Receiver Station. Python scripts running on the host machine are used to archive data and send out alerts when new imagery arrives.  A script and Samba shared drive is used to transfer imagery between the host and VM. The raw imagery is then processed into image pyramids using the GDAL toolkit  and imported into our GeoServer instance.

### Confidential Client  
#### Mobile Application Under NDA
- ***Lead Programmer (Duration 6 months)***  
Worked as the lead on a team of three developers in building a mobile IOS application. The application consisted of a Drupal back end, which interfaced an IOS app via web services.  The IOS portion of the application consisted of a UIWebView displaying mobile optimized HTML and advanced JavaScript effects interfacing a highly customizable and flexible Drupal backend which could be managed by nontechnical employees.

### Internal
#### Administration/DevOps/Scripting
- ***Linux Administrator  (Duration 3 years)***  
Worked as the lead Linux administrator for GeoNorth maintaining servers which hosted mobile and web applications including our Redmine ticketing system and Git repositories.  My duties included SSL certificates, troubleshooting, virtualization, hot cloning, backups, migrations, and deployments. The apps were mostly written in PHP, Drupal, and Ruby, using  MySQL and Postgres databases.

### Alaska Native Tribal Health Consortium
#### Cognito
- ***Sr. Maintenance Programmer (Duration 8 months)***  
Worked as a Sr. Maintenance Programmer performing user interface improvements and bug fixes to maintain the Cognito ColdFusion application. Cognito provides DEHE project teams with a consolidated point of access to track and report project status and financials. Reporting templates for the financials to provide easy access to the data uploaded daily from ForeFront financial system reducing the workload and specialized reporting demands on the ForeFront team. Consolidated project status and financials allows automated earnings and projections reporting reducing days of manual calculations to minutes. GeoNorth developed an ad-hoc ColdFusion based query tool is integrated into Cognito furthering the project team’s ability to access and manipulate project information to their needs.

### Alaska Native Tribal Health Consortium
#### Revenue Reporting Information Tracking System
- ***Sr. Maintenance Programmer (Duration 8 months)***  
Worked as a Sr. Maintenance Programmer performing user interface improvements, feature implementations,  and bug fixes to maintain a ColdFusion application for managing the lifecycle from  pre-applications, and applications through funding sources and mapping.these funding sources to rural projects.

### Alaska Native Tribal Health Consortium
#### Project Information Center
- ***Sr. Programmer (Duration 1 month)***  
Worked as the lead on a team of three programmers developing an estimate for migrating a ColdFusion application to .Net MVC.   The application is a database driven web application used for storing information relating to projects managed by ANTHC.

### Alaska Department of Administration
#### Online Position Description System
- ***Sr. Maintenance Programmer (Duration 2 months)***  
Worked as a Sr. Maintenance Programmer troubleshooting fixes to maintain a ColdFusion application used to submit, approve, track, view, and report on submissions for classified and partially-exempt positions. An OPD submission is a position description, position control change, or nonpermanent position request that requires department and Division of Personnel approval.

### Indian Health Service
#### Healthcare Facility Data System (HFDS)
- ***Lead Programmer/Maintenance Programmer (Duration 6 years)***
Worked on a team of six developers involved porting a complex legacy MS Access 2000 application to a modern rich Internet application using ColdFusion 9 and jQuery.  Application dealt with various aspects of health care facility management, to be used internally by IHS staff and external users.  Sophisticated forms and reports used to deliver full range of desktop-like features.   Currently the sole maintenance programmer providing rapid response to time sensitive bugs as they arise. Currently obtaining a federal clearance level for administrative access to IHS systems with strict HIPPA requirements.

### UAA
#### Arctic Domain Awareness Center  Proof of Concept
- ***Lead Programmer (Duration 4 months)***  
Worked on a team of two programmers to develop a website that can be used to forecast oil spills in real time.  This simulation will accept a coordinate from the user then collect ocean current and weather forecasting data around that coordinate from NOAA. It takes the forecast data and feeds it into the pyGNOME oil spill simulation, georeferences the output and overlays it a map and animates the simulation in under 30 seconds. This application included mobile device support.

### Chugach Electric, Alaska
#### Member Self Serve
- ***Lead Programmer (Duration 1.5 years)***  
Worked as a developer designing and implementing an interface between Oracle, .Net and ColdFusion to enable customers to update various aspects of their account information directly.  Member Self Serve needs to account for numerous edge cases involving adapting legacy technology to recently acquired COTS software, complex database schemas, data access protocols with strict logging requirements, and elegantly handle potentially inconsistent data across multiple types of systems and had to work on mobile devices.

### Indian Health Service
#### Webcident
- ***Programmer***  
Worked on a team of developers translating a large ColdFusion application with over 900 CFML pages to a more modern framework called CF Wheels. A requirement of this project is that the front end remain identical so the functionality can be automatically tested and verified.

### Indian Health Service
#### Patient Satisfaction Survey
- ***Lead Programmer***  
Worked with a Designer on a project to create an online survey application using ColdFusion, IHS Box and SQL Server 2008. The project involved building a survey management system for creating, editing, issuing and reviewing online surveys for patients.

### Indian Health Service
#### Central User Authentication System
- ***Programmer***  
Worked on a team creating a unified authentication system intended to be used across various IHS web applications. It was written using ColdFusion, CF Wheels and SQL Server 2008.

### Yukon-Kuskokwim Health Corporation, Alaska
#### Letter Generator  
- ***Programmer***
Worked as the Lead Programmer writing a .Net application to connect to connect to a database and generate PDFs based on MS Word templates. Letter Generator can be configured to build letters for any template by simply adding a text file containing query for the data required to populate the template.

### South-Central Foundation, Alaska
#### Health Education Tracking  
- ***Programmer***  
Worked as a Programmer on a team creating reports, adding UI features and a tablet based interface for the Health Education Tracking web application. The work was done using ColdFusion and SQL Server 2008.  This application included mobile device support.

### State of Alaska
#### Village Safe Water
- ***Programmer***  
Implemented changes to a web application used to manage the Design Review Process. Changes included adding JavaScript features and modifying the state and phase transitions of the application. It was written using ColdFusion and SQL Server 2008.

### Case Management System
- ***Programmer***  
Worked on a team tasked with creating a web application to help manage all data, documents and workflow for the Court of Appeals and the Alaska Supreme Court. The application is written in ASP.Net, and SQL Server 2008.

### Alyeska Pipeline Services Company
#### Engineering Data Management
- ***Programmer***  
Worked on a team porting an existing ASP web application to ASP.Net and SQL Server 2008. The application helps keep track of engineering data relevant to the Alyeska Pipeline collected by Pipeline Inspection Gauges (PIGs) and then imported into EDM.


### The Tatitlek Corporation
#### Minimo  
- ***Programmer***  
Implementing various changes and features to a management application for inventory, item repair, and shipping. The application was written in ColdFusion and SQL Server 2008

### The Tatitlek Corporation
#### Mojave Viper
- ***Programmer***
Worked as a Developer and implemented features and changes to a ColdFusion/SQL Server application built to help manage employees and scenario training for the US Military.

### The Alaska Aces
#### Salary Cap Compliance
- ***Programmer***
Implemented additional features and changes to their Salary Cap Compliance application built to help ensure the team’s roster complies with league rules. The application was written in ColdFusion and SQL Server 2008.

---

## Wostmann & Associates Inc.
### Feb 2008 - January 2010
As a Consultant, used primarily C# and ASP.NET, worked in teams in Anchorage and Juneau to develop, implement, and debug database driven web applications for the State of Alaska Department of Environmental Conservation, the Department of Public Safety and the Department of Commerce Community and Economic Development. Also was responsible for the Anchorage network and server administration.

#### Internal   
#### Source Control
- ***Administrator***  
Worked with a counterpart in Juneau, administered Wostmann’s virtual machine servers used for source control, SharePoint, and Database development.

### Internal
#### Job Management System
- ***Programmer***  
Worked in a small team, helped develop and integrate new reports into the Job Management System, Wostmann’s internal account web application.

### State of Alaska Department of Environmental Conservation
#### State to Federal Data Exporter
- ***Consultant***  
Worked with the existing web application development team and produced an application design to be used for data migrations between multiple source and destination databases. Outlined the tools and procedures for handling changes to the database schema and adding new sources and destinations. Included was a design for a web interface to migrate and validate data that didn’t require schema manipulation.

### State of Alaska Department of Public Safety
#### ARMS Inventory
- ***Programmer***
With State of Alaska, Department of Public Safety, worked in a two person development team to design and build a web-application used by warehouse employees and state troopers to request supplies, keep inventory, and order products from vendors. Using the Model View Controller design pattern, built a web application from the ground up, designing a unique database to suit their needs. Using Microsoft’s Linq technology we were able to accelerate our work by automatically generating the Model later. Notable UI enhancements include responsive AJAX panels and controls which are displayed and hidden when needed. Other AJAX tools were used to accelerate end-user data entry and improve responsiveness.

### State of Alaska Department of Environmental Conservation
#### SWIM
- ***Jr. Programmer***
 Designed and built the Solid Waste Information Management System. A web-based landfill data aggregator. Using the Model View Controller design pattern we designed and implemented the database, created a model layer which mirrored the entities found in the database, a data manager layer which saved the model layer’s entities to the database, a controller layer which held any business ruled and logic that couldn’t be encapsulated in the database or model layer, and many user interface pages. Notable UI features included the ability for any user to build custom queries which could be saved and optionally displayed on their customized homepage. We also used AJAX to shape data into proper formats to speed up data entry. Notable architectural enhancements include a control binding class which enabled us to easily bind data to and from UI controls simply by looping through a list of the control binding class. For each control binding, our app would recursively search the page for the right control and bind it to the data depending on the type of control.

### State of Alaska  Department of Environmental Conservation
#### Landfill Liability Risk Calculator
- ***Jr. Programmer***
 Working with guidance, tasked with designing and building a web-based administrative interface to the Landfill Liability Risk Calculator (a public landfill survey for determining likelihood of contamination). Using the ‘Model View Control’ design pattern, wrote the SQL statements to insert, update, and delete database entities. Also wrote The control, model and UI layer. The UI layer consisted of a search page used to locate surveys and a detail page used to review and approve or reject the submission. Also wrote the end-user operational instructions manual.
