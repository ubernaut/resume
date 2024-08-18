---
fontfamily: bookman
geometry: margin=1cm
---

# Project History

## FAA

#### AWS Federal Cloud Services migration and refactor

- **_Architect, Project Manager, Administrator_**  
  Leading a large team from Amazon and multiple contractors tasked with migrating the Weather Camera Program's IT infrastructure (50 services and 4 environments) into FCS and the Mission Support network. The project involves decoupling the existing apps from cloud vendor specific services like App Engine and migrating them into portable containers managed by kubernetes. Many challenges exist in terms of authorization from various groups around the FAA, meeting the enhanced security controls required of the Mission Support network, and ramping the existing team up on the technology required to ensure a successful migration and refactor.

## FAA & Leidos

#### 360 Camera Implementation (FAA and Leidos)

- **_Team Lead, Sr. Software Engineer, Network Engineer, Software Architect_**  
  Lead a small team and implemented a new 360 degree camera system for the FAA Weather Camera Program. This project required a broad range of skills: researching and testing new cameras, design of ground up camera systems, integration of those systems into FAA control electronics, low latency video encoding, data transmission over cellular networks, browser based WebGL reprojection of live video feeds to improve image quality, and developing a new web based interface.

##### AvCams Plus (FAA and Leidos)

- **_Sr. Software Engineer, Project Manager, Software Architect_**  
  Lead the team charged with building AvCamsPlus https://weathercams.faa.gov the successor to https://avcams.faa.gov (now redirected). AvCamsPlus is a Progressive Web Application running on Google Cloud Platform and built with Postgres, Node.js, and React. The goal of this project was to use modern technologies and web based standards to create a cutting edge, responsive website to keep pilots informed in order for them to make the safest decisions possible. AvCamsPlus imports and displays large amounts of data from external sources including the NWS, FAA, and Google Maps. This project required extensive knowledge of GIS, emerging web standards, as well as long term project planning and execution experience.

#### Google Cloud Serverless Migration (FAA and Leidos)

- **_Sr. Software Engineer, Network Engineer, Software Architect_**  
  Led the team which converted AvCams Plus to a serverless architecture, eliminating a significant amount of maintenance overhead by using the Google App Engine instead of virtual machines. The serverless migration also enabled automatic scaling of the infrastructure.

#### Maintenance Console (FAA and Leidos)

- **_Sr. Software Engineer, Software Architect_**  
  Leading the team tasked with marshaling the existing Weather Camera Program digital infrastructure, performing integrations between disparate apps and establishing a Continuous Integration pipeline to prevent interruption of services and enable continuous operation of the software through the development process. This project is ongoing and requires experience maintaining and extending legacy applications, as well as working closely with all stakeholders to ensure nothing is overlooked.

#### PIREPS (FAA and Leidos)

- **_Sr. Software Engineer, Team Lead_**  
  Lead a small team of developers who created two new interfaces for submitting Pilot Reports. These interfaces solved multiple issues related to data quality and input validation. One version is a desktop focused interface aimed at providing the full extent of PIREP input options. The second version is a mobile focused app with many innovations aimed at simplifying the process of creating a PIREP and inventing many new custom user interface controls to enable completion of a PIREP using only one hand.

### Pennsylvania Turnpike Commission

#### Advanced ArcGIS Search Functionality

- **_Sr. Software Engineer_**  
  Designed and implemented a Python library to provide robust search functionality across the Pennsylvania Turnpike Commision’s extensive GIS library.

## GeoNorth

### Internal

#### GeoServer WMS Server for a Web Based Map with Mobile Support

- **_Administrator / Architect (Duration 1 year)_**  
  Used GeoServer to support rapid delivery of imagery via the WMS protocol as the backend of a web based satellite mapping application supporting mobile devices. This mobile site for MapOptix (http://www.geonorth.com/products/mapoptix) provided rapid access to large imagery data-sets minutes after collection by satellite. WMS is also compatible with popular apps like Google Earth and ArcMap. Geoserver was Installed on a Linux VM. This role requires skills in image processing, mobile data optimization, performance tuning, network administration, Python and Bash scripting. The host machine receives imagery directly from the Satellite at our Digital Receiver Station. Python scripts running on the host machine are used to archive data and send out alerts when new imagery arrives. A script and Samba shared drive is used to transfer imagery between the host and VM. The raw imagery is then processed into image pyramids using the GDAL toolkit and imported into our GeoServer instance.

### Confidential Client

#### Mobile Application Under NDA

- **_Lead Programmer (Duration 6 months)_**  
  Worked as the lead on a team of three developers in building a mobile IOS application. The application consisted of a Drupal back end, which interfaced an IOS app via web services. The IOS portion of the application consisted of a UIWebView displaying mobile optimized HTML and advanced JavaScript effects interfacing a highly customizable and flexible Drupal backend which could be managed by nontechnical employees.

### Internal

#### Administration/DevOps/Scripting

- **_Linux Administrator (Duration 3 years)_**  
  Worked as the lead Linux administrator for GeoNorth maintaining servers which hosted mobile and web applications including our Redmine ticketing system and Git repositories. My duties included SSL certificates, troubleshooting, virtualization, hot cloning, backups, migrations, and deployments. The apps were mostly written in PHP, Drupal, and Ruby, using MySQL and Postgres databases.

### Alaska Native Tribal Health Consortium

#### Cognito

- **_Sr. Maintenance Programmer (Duration 8 months)_**  
  Worked as a Sr. Maintenance Programmer performing user interface improvements and bug fixes to maintain the Cognito ColdFusion application. Cognito provides DEHE project teams with a consolidated point of access to track and report project status and financials. Reporting templates for the financials to provide easy access to the data uploaded daily from ForeFront financial system reducing the workload and specialized reporting demands on the ForeFront team. Consolidated project status and financials allows automated earnings and projections reporting reducing days of manual calculations to minutes. GeoNorth developed an ad-hoc ColdFusion based query tool is integrated into Cognito furthering the project team’s ability to access and manipulate project information to their needs.

### Alaska Native Tribal Health Consortium

#### Revenue Reporting Information Tracking System

- **_Sr. Maintenance Programmer (Duration 8 months)_**  
  Worked as a Sr. Maintenance Programmer performing user interface improvements, feature implementations, and bug fixes to maintain a ColdFusion application for managing the lifecycle from pre-applications, and applications through funding sources and mapping.these funding sources to rural projects.

### Alaska Native Tribal Health Consortium

#### Project Information Center

- **_Sr. Programmer (Duration 1 month)_**  
  Worked as the lead on a team of three programmers developing an estimate for migrating a ColdFusion application to .Net MVC. The application is a database driven web application used for storing information relating to projects managed by ANTHC.

### Alaska Department of Administration

#### Online Position Description System

- **_Sr. Maintenance Programmer (Duration 2 months)_**  
  Worked as a Sr. Maintenance Programmer troubleshooting fixes to maintain a ColdFusion application used to submit, approve, track, view, and report on submissions for classified and partially-exempt positions. An OPD submission is a position description, position control change, or nonpermanent position request that requires department and Division of Personnel approval.

### Indian Health Service

#### Healthcare Facility Data System (HFDS)

- **_Lead Programmer/Maintenance Programmer (Duration 6 years)_**
  Worked on a team of six developers involved porting a complex legacy MS Access 2000 application to a modern rich Internet application using ColdFusion 9 and jQuery. Application dealt with various aspects of health care facility management, to be used internally by IHS staff and external users. Sophisticated forms and reports used to deliver full range of desktop-like features. Currently the sole maintenance programmer providing rapid response to time sensitive bugs as they arise. Currently obtaining a federal clearance level for administrative access to IHS systems with strict HIPPA requirements.

### UAA

#### Arctic Domain Awareness Center Proof of Concept

- **_Lead Programmer (Duration 4 months)_**  
  Worked on a team of two programmers to develop a website that can be used to forecast oil spills in real time. This simulation will accept a coordinate from the user then collect ocean current and weather forecasting data around that coordinate from NOAA. It takes the forecast data and feeds it into the pyGNOME oil spill simulation, georeferences the output and overlays it a map and animates the simulation in under 30 seconds. This application included mobile device support.

### Chugach Electric, Alaska

#### Member Self Serve

- **_Lead Programmer (Duration 1.5 years)_**  
  Worked as a developer designing and implementing an interface between Oracle, .Net and ColdFusion to enable customers to update various aspects of their account information directly. Member Self Serve needs to account for numerous edge cases involving adapting legacy technology to recently acquired COTS software, complex database schemas, data access protocols with strict logging requirements, and elegantly handle potentially inconsistent data across multiple types of systems and had to work on mobile devices.

### Indian Health Service

#### Webcident

- **_Programmer_**  
  Worked on a team of developers translating a large ColdFusion application with over 900 CFML pages to a more modern framework called CF Wheels. A requirement of this project is that the front end remain identical so the functionality can be automatically tested and verified.

### Indian Health Service

#### Patient Satisfaction Survey

- **_Lead Programmer_**  
  Worked with a Designer on a project to create an online survey application using ColdFusion, IHS Box and SQL Server 2008. The project involved building a survey management system for creating, editing, issuing and reviewing online surveys for patients.

### Indian Health Service

#### Central User Authentication System

- **_Programmer_**  
  Worked on a team creating a unified authentication system intended to be used across various IHS web applications. It was written using ColdFusion, CF Wheels and SQL Server 2008.

### Yukon-Kuskokwim Health Corporation, Alaska

#### Letter Generator

- **_Programmer_**
  Worked as the Lead Programmer writing a .Net application to connect to connect to a database and generate PDFs based on MS Word templates. Letter Generator can be configured to build letters for any template by simply adding a text file containing query for the data required to populate the template.

### South-Central Foundation, Alaska

#### Health Education Tracking

- **_Programmer_**  
  Worked as a Programmer on a team creating reports, adding UI features and a tablet based interface for the Health Education Tracking web application. The work was done using ColdFusion and SQL Server 2008. This application included mobile device support.

### State of Alaska

#### Village Safe Water

- **_Programmer_**  
  Implemented changes to a web application used to manage the Design Review Process. Changes included adding JavaScript features and modifying the state and phase transitions of the application. It was written using ColdFusion and SQL Server 2008.

### Case Management System

- **_Programmer_**  
  Worked on a team tasked with creating a web application to help manage all data, documents and workflow for the Court of Appeals and the Alaska Supreme Court. The application is written in ASP.Net, and SQL Server 2008.

### Alyeska Pipeline Services Company

#### Engineering Data Management

- **_Programmer_**  
  Worked on a team porting an existing ASP web application to ASP.Net and SQL Server 2008. The application helps keep track of engineering data relevant to the Alyeska Pipeline collected by Pipeline Inspection Gauges (PIGs) and then imported into EDM.

### The Tatitlek Corporation

#### Minimo

- **_Programmer_**  
  Implementing various changes and features to a management application for inventory, item repair, and shipping. The application was written in ColdFusion and SQL Server 2008

### The Tatitlek Corporation

#### Mojave Viper

- **_Programmer_**
  Worked as a Developer and implemented features and changes to a ColdFusion/SQL Server application built to help manage employees and scenario training for the US Military.

### The Alaska Aces

#### Salary Cap Compliance

- **_Programmer_**
  Implemented additional features and changes to their Salary Cap Compliance application built to help ensure the team’s roster complies with league rules. The application was written in ColdFusion and SQL Server 2008.

## Wostmann & Associates Inc.

### Internal

### Source Control

- **_Administrator_**  
  Worked with a counterpart in Juneau, administered Wostmann’s virtual machine servers used for source control, SharePoint, and Database development.

### Internal

#### Job Management System

- **_Programmer_**  
  Worked in a small team, helped develop and integrate new reports into the Job Management System, Wostmann’s internal account web application.

### State of Alaska Department of Environmental Conservation

#### State to Federal Data Exporter

- **_Consultant_**  
  Worked with the existing web application development team and produced an application design to be used for data migrations between multiple source and destination databases. Outlined the tools and procedures for handling changes to the database schema and adding new sources and destinations. Included was a design for a web interface to migrate and validate data that didn’t require schema manipulation.

### State of Alaska Department of Public Safety

#### ARMS Inventory

- **_Programmer_**
  With State of Alaska, Department of Public Safety, worked in a two person development team to design and build a web-application used by warehouse employees and state troopers to request supplies, keep inventory, and order products from vendors. Using the Model View Controller design pattern, built a web application from the ground up, designing a unique database to suit their needs. Using Microsoft’s Linq technology we were able to accelerate our work by automatically generating the Model later. Notable UI enhancements include responsive AJAX panels and controls which are displayed and hidden when needed. Other AJAX tools were used to accelerate end-user data entry and improve responsiveness.

### State of Alaska Department of Environmental Conservation

#### SWIM

- **_Jr. Programmer_**
  Designed and built the Solid Waste Information Management System. A web-based landfill data aggregator. Using the Model View Controller design pattern we designed and implemented the database, created a model layer which mirrored the entities found in the database, a data manager layer which saved the model layer’s entities to the database, a controller layer which held any business ruled and logic that couldn’t be encapsulated in the database or model layer, and many user interface pages. Notable UI features included the ability for any user to build custom queries which could be saved and optionally displayed on their customized homepage. We also used AJAX to shape data into proper formats to speed up data entry. Notable architectural enhancements include a control binding class which enabled us to easily bind data to and from UI controls simply by looping through a list of the control binding class. For each control binding, our app would recursively search the page for the right control and bind it to the data depending on the type of control.

### State of Alaska Department of Environmental Conservation

#### Landfill Liability Risk Calculator

- **_Jr. Programmer_**
  Working with guidance, tasked with designing and building a web-based administrative interface to the Landfill Liability Risk Calculator (a public landfill survey for determining likelihood of contamination). Using the ‘Model View Control’ design pattern, wrote the SQL statements to insert, update, and delete database entities. Also wrote The control, model and UI layer. The UI layer consisted of a search page used to locate surveys and a detail page used to review and approve or reject the submission. Also wrote the end-user operational instructions manual.

## CH2M Hill/Veco Inc.

#### BoM Exporter

- **_Programmer_**  
  Designed and implemented a Visual Basic tool to extract relevant data from any AutoCAD Bill of Materials generated by Bentley AutoPlant, and then transpose everything into a specific Excel deliverable format used by Conoco Phillips.

#### Server Patcher

- **_Programmer_**  
  Developed a batch script to automate patch deployment for AutoPlant users on the CH2M Hill network. The script iterated through a file containing a list of computers which needed the update, checked to see if the update has been applied already, and backed up old files before replacing them.

#### Data Fixer

- **_Programmer_**  
  Wrote queries designed to find and repair missing database fields by cross referencing recording and inserting data between databases.

#### Sharepoint Administrator

- **_Programmer_**  
  Posted training videos on the Design Technology Department’s SharePoint website at CH2M Hill by converting the videos to supported formats and writing the code on the aspx pages to embed the controls.

#### CH2M Course Complete App

- **_Programmer_**
  Designed, and implemented a database with a web front end used for keeping track of students and the courses they have taken in the training program at CH2M Hill.

#### Aux Scripts

- **_Programmer_**  
  Wrote auxiliary scripts to streamline the drafting of commonly used objects and entities where context specific requirements prevented the use of ‘Blocks’.

#### AutoCAD ExRef Preserver

- **_Programmer_**  
  Designed and implemented a tool to aid in the transfer of complex 3D models with hundreds of components from one project to another. A project generally contains numerous drawings which reference other drawings in the project. When copying the data from one project to another, many of the references break. Wrote a program to scan each file for broken references. ‘Re-Path’ would then recursively search the project directory tree for the location of each reference and re-establish the reference with the correct path.

#### AutoCAD Russian Translator

- **_Programmer_**  
  Assisted in the development, debugging and implementation of an ‘English to Russian’ translation tool for AutoCAD drawings. VTS (Veco Translation Software) pulled all text contained in a drawing file and placed them in an excel workbook column. Once in the workbook @prompt would make an attempt at translating everything and placing the translated text into an adjacent column. At this point translators had the opportunity to add dictionary words or correct mistakes made by @prompt before VTS recaptured the translated text back into the drawing.

#### AutoPlant Documentation

- **_Analyst_**  
  Wrote end-user software documentation and training manuals for cutting edge engineering design technology tools from Bentley Systems lacking documentation. Wrote software for design automation in Visual Basic and AutoLisp. Taught entry level courses in engineering design applications. Provided AutoCAD Support. Imported specs from parts suppliers in the SQL database used by AutoPlant to generate 3D models of each part.

## UAA

#### Data Manager

- **_Programmer_**  
  At the University of Alaska Anchorage, created a database and web application to manage entities and users for a gravity simulation called ‘StableOrbit’.

#### Client Server System

- **_Programmer_**  
  At the University of Alaska Anchorage, built on the existing StableOrbit Genetic Algorithm described later, added Client and Server functionality using XML RPC (Remote Procedure Calls) and rewrote the math intensive physics portions in C. The Genetic Algorithm is now hosted on a server which deals out the heavy lifting work physics work to clients. When the client is finished computing the system it is returned to the server for storage in a database. These changes are the first steps towards creating a high performance distributed computing network for physics computation. Afterward was invited to Weber State University in the fall semester to give a presentation on the algorithms and artificial intelligence used therein.

#### Stable Orbit

- **_Programmer_**  
  At the University of Alaska Anchorage, Artificial Intelligence Project, worked with a physics student from Weber State University, designed and implemented a Genetic Algorithm tasked with finding stable solar system configurations. Also built a viewing application which was used to view the solar system simulation rendered in 3D.

#### Connect Four AI

- **_Programmer_**  
  At the University of Alaska Anchorage, worked in a team of two designing and implementing an AI in Java to play “Connect Four.” The algorithm used was an adversarial search called ‘Alpha Beta Pruning.’ It speeds up the search of the state space by eliminating the traversal of branches when better known alternative branches exist.

#### Dedupester

- **_Programmer_**  
  At the University of Alaska Anchorage, worked in a team of four developing and testing a Java application to search a directory tree and locate and quarantine duplicate versions of the same file. Using the built in ‘Set’ data structure in java, the files were sorted by name and size. When a name and size collision occurred the path to the file was recorded in a text file for review by the user. Each duplicate was optionally moved to a common folder for the user to delete.
