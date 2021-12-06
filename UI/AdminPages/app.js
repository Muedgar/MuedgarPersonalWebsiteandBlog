/*
the ui to view

<article class="article-container">
                <a class="article-link" href="#">
                    <img class="article-img" src="./linkComponent/img1.jpeg" alt="" srcset="">
                    <h4 class="article-author">Authored by Mutangana Edgar</h4>
                    <p class="article-summary">The Surface Pro shares a lot of its design traits with its lower cost counterpart, However, the resolution on the Surface Pro is higher and is 1920x1080, and the screen</p>
                </a>
 </article>
*/
/*
<div class="questionViewAll">
    <p>Question 1: What is the use of building application softwares</p>
</div>

<div class="queryArticle">
    <form for="submit">
        <label for="inputImage"/>
        <input type="image" name="inputImage"/>
        <label for="inputAuthor"/>
        <input type="text" name="inputAuthor"/>
        <label for="articleContent"/>
        <textarea name="articleContent" col="100" row="30"/>
        <input class="submitButton" value="Create Article" type="button" />
    </form>
</div>
*/
let osDev = {
    article1: {
        imagePreviewLink: "./os1.png",
        image1Link: "./os2.jpeg",
        image2Link: "./os3.jpeg",
        authorName: "Computer World",
        articlePreview: "Research and development work on operating systems, broadly defined, is going on in many quarters. Here are some projects:Researchers at the University of Virginia are developing Legion, a highly flexible, wide-area operating system designed to build a virtual computer from millions of distributed hosts and trillions of objects while presenting to the user the image of a single computer.",
        articleContent: "Legion applies many of the object-based interoperability principles in the Common Object Request Broker Architecture. It finds and schedules resources and handles security issues among disparate operating systems and objects written in different languages, freeing users from the need to negotiate with outside systems and administrators.This is a university/government research and development project focused on applying grid concepts to scientific and engineering computing. The grid refers to an infrastructure that enables the integrated, collaborative use of high-end computers, networks, databases and scientific instruments owned and managed by multiple organizations. Grid applications often involve large amounts of data and/or computing and often require secure resource sharing across organizational boundaries.Globus research areas include resource management, data management and access, application development environments, information services and security. The project has developed the Globus Toolkit, a set of services and software libraries to support Grids and Grid applications. The Globus Toolkit includes software for security, information infrastructure, resource management, data management, communication, fault detection and portability.Researchers involved in the Endeavour project at the University of California, Berkeley, envision an 'information utility' that adapts on the fly to the supply and demand for computing resources anywhere in the world. 'Fluid software' will choose where to execute and where to access storage. It will requisition resources as needed and negotiate interoperation agreements, ensuring always-available processing. Endeavour is a collection of projects. One, called OceanStore, will provide 'nomadic data access -- serverless, homeless and freely flowing through the network' -- that will make the storage available to a user essentially infinite, according to researchers.The goal of this research effort at Duke University in Durham, N.C., is to provide a common set of operating system services to wide-area applications, including mechanisms for resource discovery, a global name space, remote process execution, resource management, authentication and security. WebOS provides basic operating system services needed to build applications that are geographically distributed, highly available, incrementally scalable and dynamically reconfiguring."
    },
    article2: {
        imagePreviewLink: "./platform1.png",
        image1Link: "./platform2.jpeg",
        image2Link: "./platform3.png",
        authorName: "SearchSoftwareQuality",
        articlePreview: "An application platform is a framework of services that application programs rely on for standard operations. An application platform operates across five principal areas: development tools, execution services, data services, operating systems (OSes) and cloud services.",
        articleContent: "Development tools: There are several kinds of development tools -- each cater to the specific needs of developers. As examples, Appian offers low-code development combined with strong process management. Microsoft PowerApps shares similar features and ties together major services, such as Office 365, SQL Server, Dropbox. Other application platforms such as Mendix and OutSystems provide enterprise-class end-to-end software development and testing with visual application creation and comprehensive user interfaces.Execution services:  Execution services are important for everyday application functions. Execution services are often related to application deployment options, such as cloud providers (including Microsoft Azure), which can host applications in virtual machines (VMs) or containers. Containers are increasingly important for execution because developers can package and implement complete application components in the form of images. Containers in application platform software enable faster-paced development cycles, such as Agile and DevOps. Tools such as PowerShell can be classified as an execution service that provides administrators with the means to configure and manage underlying systems.Data services: Data services help applications to process and store information. Data services work alongside execution services and interpret information with data provided by development tools or from the cloud. Microsoft's Storage Spaces is one example of a data service. For example, Microsoft PowerApps can work with Microsoft's Common Data Service to offer a common platform for enterprise data instances.Operating systems: An OS, such as Linux, Windows 10 and Windows Server 2016, provides the various resources to run applications, including file systems, memory management, user interface (to launch and manage applications), multitasking support, and the ability to interact with the underlying hardware.Cloud computing services: Cloud services provide remotely accessed functions. Applications can deploy to cloud instances such as VMs and containers, but the cloud also offers many services to support application function. Apple's iCloud Drive is an example of cloud storage that stores and processes photos, videos, applications and other documents for users. Microsoft's OneDrive is another example of cloud storage as a service. Cloud services have become a trend for application platforms, mobile enterprise application platforms, and platforms as a service due to increases in mobile users. With the cloud developers can create applications so they can be accessed on multiple devices with the same functions and data involved."
    },
    article3: {
        imagePreviewLink: "./osconcepts.jpeg",
        image1Link: "./osconcepts2.jpeg",
        image2Link: "./osconcepts3.png",
        authorName: "TutorialsPoint",
        articlePreview: "An Operating System (OS) is an interface between a computer user and computer hardware. An operating system is a software which performs all the basic tasks like file management, memory management, process management, handling input and output, and controlling peripheral devices such as disk drives and printers.",
        articleContent: "Before you start proceeding with this tutorial, we are making an assumption that you are already aware of basic computer concepts like what is keyboard, mouse, monitor, input, output, primary memory and secondary memory etc. If you are not well aware of these concepts, then we will suggest to go through our short tutorial on Computer Fundamentals.An Operating System (OS) is an interface between a computer user and computer hardware. An operating system is a software which performs all the basic tasks like file management, memory management, process management, handling input and output, and controlling peripheral devices such as disk drives and printers.Some popular Operating Systems include Linux Operating System, Windows Operating System, VMS, OS/400, AIX, z/OS, etc.An operating system is a program that acts as an interface between the user and the computer hardware and controls the execution of all kinds of programs.Memory management refers to management of Primary Memory or Main Memory. Main memory is a large array of words or bytes where each word or byte has its own address.Main memory provides a fast storage that can be accessed directly by the CPU. For a program to be executed, it must in the main memory. An Operating System does the following activities for memory managementIn multiprogramming environment, the OS decides which process gets the processor when and for how much time. This function is called process scheduling. An Operating System does the following activities for processor managementAn Operating System manages device communication via their respective drivers. It does the following activities for device managementA file system is normally organized into directories for easy navigation and usage. These directories may contain files and other directions."
    },
    article4: {
        imagePreviewLink: "./projectoberon.png",
        image1Link: "./projectoberon2.png",
        image2Link: "./projectoberon3.jpeg",
        authorName: "WikiPedia",
        articlePreview: "The Oberon System[3] is a modular, single-user, single-process, multitasking operating system written in the programming language Oberon.[4] It was originally developed in the late 1980s at ETH Zurich. The Oberon System has an unconventional visual text user interface (TUI) instead of a conventional command-line interface (CLI) or graphical user interface (GUI). This TUI was very innovative in its time and influenced the design of the Acme text editor for the Plan 9 from Bell Labs operating system.",
        articleContent: "The latest version of the Oberon System, Project Oberon 2013, is still maintained by Niklaus Wirth and several collaborators, but older ETH versions of the system have been orphaned. The system also evolved into the multi-process, symmetric multiprocessing (SMP) capable A2 (formerly Active Object System (AOS),[5] then Bluebottle), with a zooming user interface (ZUI).The Oberon operating system was originally developed as part of the NS32032-based Ceres workstation project. It was written almost entirely (and since the 2013 version, is described entirely) in the Oberon programming language.[6] The basic system was designed and implemented by Niklaus Wirth and Jürg Gutknecht and its design and implementation is fully documented in their book 'Project Oberon'.[7] The user Interface and programmers reference is found in Martin Reiser's book 'The Oberon System'.[8] It was later extended and ported to other hardware[9][10][11][12][13] by a team at ETH Zurich and there was recognition in popular magazines.[14] [15][16][17][18][19] Wirth and Gutknecht (although being active computer science professors) refer to themselves as 'part-time programmers' in the book Project Oberon.[7] In late 2013, a few months before his 80th birthday, Wirth published a second edition of Project Oberon.[20] It details implementing the Oberon System using a reduced instruction set computer (RISC) CPU of his own design realized on a Xilinx field-programmable gate array (FPGA) board. It was presented at the symposium[21] organized for his 80th birthday at ETH Zurich. In the meantime, several emulators for this version were implemented.Oberon has a text user interface (TUI), which is very different from a terminal user interface. It combines the point and click convenience of a graphical user interface (GUI) with the linguistic strength of a command-line interface (CLI) and is closely tied to the naming conventions of the Oberon language. Text appearing almost anywhere on a screen can be edited and used as command input. Commands are activated by a middle-mouse click[29] on a text fragment of the form Module.Command (optionally followed by parameters, which are terminated by ~). A command is defined by any procedure which is exported and has an empty argument list. Parameters to the command must be defined before executing the middle click, and must be explicitly scanned and retrieved by the procedure. No checks or questions occur during command execution. This is sometimes called a non-modal user interface (UI). Nothing like a command prompt is needed.Although very different from a command line, the TUI is very efficient and powerful.[30] A steep ascent in the early learning curve makes it a bit difficult at first. No questions are asked: this is a deliberate design decision, which needs getting used to. Most editors ask the user when closing a modified text: this is not the case in the Oberon System. The use of the TUI and programming interface is fully documented in Martin Reiser's book 'The Oberon System'.[8] A short introduction to the user interface can be found on Niklaus Wirth's home page.[31] The later Versions of System Oberon, Oberon V4 (V4, sometimes also named Linz-Oberon) and Oberon System 3 (or S3, sometimes also named ETH-Oberon or Spirit of Oberon), enhanced the basic interface with different but incompatible implementations for buttons, drop down menus, and other active elements. V4 used for that purpose a dedicated control character embedded in normal text in contrast to System 3, which extended the kernel by introducing persistent objects. Both extensions include a large set of user interface elements.Mastering the Oberon user interface, both the purely textual and the so-called Gadgets System (under S3), is non-trivial. Thus, after successfully installing Oberon System 3, it is recommended to study André Fischers Oberon System 3 Tutorial. An expanded version of this tutorial was published as a book,[32] which it is out of print now. The whole book is available in electronic form under a one user license in every installed version of System 3 (Windows, Linux, or Native, i.e., also with the Gadgets toolkit of OLR[33]). More information how to get your own copy of the Oberon Companion may be found in the Getting Started section of the Oberon Wikibook.Similar user Interfaces have yet to appear in more commonplace operating systems. Rob Pike's Acme system for Plan 9 from Bell Labs was strongly inspired by the Oberon TUI. Whether the worksheet interface of the Macintosh Programmer's Workshop influenced Oberon's TUI or vice versa is difficult to decide: the Oberon System was based on Wirth's prior computer design the Lilith, and both the Apple Macintosh (and its precursor Lisa) and the Oberon System (on Ceres and its precursor Lilith) have the same roots: they were all inspired by the Alto developed at Xerox PARC."
    },
    article5: {
        imagePreviewLink: "./osadvice.png",
        image1Link: "./osadvice2.jpeg",
        image2Link: "./osadvice3.png",
        authorName: "Digital",
        articlePreview: "Every program that ran on these early systems had to include all of the code necessary to run the computer, communicate with connected hardware, and perform the computation the program was actually intended to perform. This situation meant that even simple programs were complex.As computer systems diversified and became more complex and powerful, it became increasingly impractical to write programs that functioned as both an operating system and a useful applicationIn response, individual mainframe",
        articleContent: "computer owners began to develop system software that made it easier to write and run programs and operating systems were born.An operating system (OS) is software that manages computer hardware and system resources and provides the tools that applications need to operate. The birth of operating systems meant that programs no longer had to be written to control the entire scope of computer operation.Instead, computer applications could be written to be run by the operating system while the operating system worried about computer resources and connected peripheral equipment such as printers and punched paper card readers.The first operating system was created by General Motors in 1956 to run a single IBM mainframe computer. Other IBM mainframe owners followed suit and created their own operating systems.As you can imagine, the earliest operating systems varied wildly from one computer to the next, and while they did make it easier to write programs, they did not allow programs to be used on more than one mainframe without a complete rewrite.In the 1960s, IBM was the first computer manufacturer to take on the task of operating system development and began distributing operating systems with their computers.However, IBM wasn’t the only vendor creating operating systems during this time. Control Data Corporation, Computer Sciences Corporation, Burroughs Corporation, GE, Digital Equipment Corporation, and Xerox all released mainframe operating systems in the 1960s as well.In the late 1960s, the first version of the Unix operating system was developed. Written in C, and freely available during it’s earliest years, Unix was easily ported to new systems and rapidly achieved broad acceptance.Apple OS X, Microsoft Windows, and the various forms of Linux (including Android) now command the vast majority of the modern operating system market."
    },
    article6: {
        imagePreviewLink: "./linus1.jpeg",
        image1Link: "./linus2.jpeg",
        image2Link: "./linus3.jpeg",
        authorName: "WikiPedia",
        articlePreview: "Linus Benedict Torvalds (/ˈliːnəs ˈtɔːrvɔːldz/ LEE-nəs TOR-vawldz,[3] Finland Swedish: [ˈliːnʉs ˈtuːrvɑlds] (About this soundlisten); born 28 December 1969) is a Finnish-American software engineer who is the creator and, historically, the main developer of the Linux kernel, used by Linux distributions and other operating systems such as Android. He also created the distributed version control system Git and the scuba dive logging and planning software Subsurface.",
        articleContent: "He was honored, along with Shinya Yamanaka, with the 2012 Millennium Technology Prize by the Technology Academy Finland 'in recognition of his creation of a new open source operating system for computers leading to the widely used Linux kernel.'[4] He is also the recipient of the 2014 IEEE Computer Society Computer Pioneer Award[5] and the 2018 IEEE Masaru Ibuka Consumer Electronics Award.[6]Torvalds was born in Helsinki, Finland, on 28 December 1969. He is the son of journalists Anna and Nils Torvalds,[7] the grandson of statistician Leo Törnqvist and of poet Ole Torvalds and the great-grandson of journalist and soldier Toivo Karanko. His parents were campus radicals at the University of Helsinki in the 1960s. His family belongs to the Swedish-speaking minority in Finland. Torvalds was named after Linus Pauling, the Nobel Prize-winning American chemist, although in the book Rebel Code: Linux and the Open Source Revolution, Torvalds is quoted as saying, 'I think I was named equally for Linus the Peanuts cartoon character', noting that this makes him half 'Nobel Prize-winning chemist' and half 'blanket-carrying cartoon character'.[8]Torvalds attended the University of Helsinki between 1988 and 1996,[9] graduating with a master's degree in computer science from the NODES research group.[10] His academic career was interrupted after his first year of study when he joined the Finnish Navy Nyland Brigade in the summer of 1989, selecting the 11-month officer training program to fulfill the mandatory military service of Finland. He gained the rank of second lieutenant, with the role of an artillery observer.[11] Torvalds bought computer science professor Andrew Tanenbaum's book Operating Systems: Design and Implementation, in which Tanenbaum describes MINIX, an educational stripped-down version of Unix. In 1990, he resumed his university studies, and was exposed to Unix for the first time, in the form of a DEC MicroVAX running ULTRIX.[12] His MSc thesis was titled Linux: A Portable Operating System.[13]His interest in computers began with a Commodore VIC-20,[14] at the age of 11 in 1981, initially programming in BASIC, but later by directly accessing the 6502 CPU in machine code. He did not make use of assembly language.[15] After the VIC-20 he purchased a Sinclair QL, which he modified extensively, especially its operating system. 'Because it was so hard to get software for it in Finland, Linus wrote his own assembler and editor (in addition to Pac-Man graphics libraries)'[16] for the QL, as well as a few games.[17][18] He wrote a Pac-Man clone named Cool Man. On 5 January 1991[19] he purchased an Intel 80386-based clone of IBM PC[20] before receiving his MINIX copy, which in turn enabled him to begin work on Linux.Linus Torvalds is known for vocally disagreeing with other developers on the Linux kernel mailing list.[35] Calling himself a 'really unpleasant person', he later explained 'I'd like to be a nice person and curse less and encourage people to grow rather than telling them they are idiots. I'm sorry – I tried, it's just not in me.'[36][37] His attitude, which Torvalds considers necessary for making his point clear, has drawn criticism from Intel programmer Sage Sharp and systemd developer Lennart Poettering, among others.[38][39]On Sunday, 16 September 2018 the Linux Kernel Code of Conflict was suddenly replaced by a new Code of Conduct based on the Contributor Covenant. Shortly thereafter, in the release notes for Linux 4.19-rc4, Torvalds apologized for his behavior, calling the personal attacks of the past 'unprofessional and uncalled for' and announced a period of 'time off' to 'get some assistance on how to understand people's emotions and respond appropriately'. It soon transpired that these events followed The New Yorker approaching Torvalds with a series of questions critical of his conduct.[40][41][42] Following the release of Linux 4.19 on 22 October 2018, Linus went back to maintaining the kernel.[43]Linus Torvalds is married to Tove Torvalds (née Monni)—a six-time Finnish national karate champion—whom he first met in late 1993. Linus was running introductory computer laboratory exercises for students and instructed the course attendees to send him an e-mail as a test, to which Tove responded with an e-mail asking for a date.[8] Tove and Linus were later married and have three daughters, two of whom were born in the United States.[51] The Linux kernel's reboot system call accepts their dates of birth (written in hexadecimal) as magic values.[52][53]"
    }
}

/*
the ui to view

<article class="article-container">
                <a class="article-link" href="#">
                    <img class="article-img" src="./linkComponent/img1.jpeg" alt="" srcset="">
                    <h4 class="article-author">Authored by Mutangana Edgar</h4>
                    <p class="article-summary">The Surface Pro shares a lot of its design traits with its lower cost counterpart, However, the resolution on the Surface Pro is higher and is 1920x1080, and the screen</p>
                </a>
 </article>
*/

let applicationDev = {
    article1: {
        imagePreviewLink: "./appdev1.png",
        image1Link: "./appdev2.png",
        image2Link: "./appdev.jpeg",
        authorName: "Atlasian Agile Coach",
        articlePreview: "Agile development refers to any development process that is aligned with the concepts of the Agile Manifesto. The Manifesto was developed by a group of fourteen leading figures in the software industry, and reflects their experience of what approaches do and do not work for software development.",
        articleContent: "What is agile project management?Agile project management is an iterative approach to managing software development projects that focuses on continuous releases and incorporating customer feedback with every iteration.Software teams that embrace agile project management methodologies increase their development speed, expand collaboration, and foster the ability to better respond to market trends.Here is everything you need to know to get started or refine your agile project management practices. HistoryStemming from Toyota's lean manufacturing concept of the 1940s, software development teams have embraced agile methodologies to reduce waste and increase transparency, while quickly addressing their customers' ever-changing needs. A stark change from waterfall project management that focuses on 'big bang' launches, agile helps software teams collaborate better and innovate faster than ever before. Traditional agile project management can be categorized into two frameworks: scrum and kanban. While scrum is focused on fixed-length project iterations, kanban is focused on continuous releases. Upon completion, the team immediately moves on to the next. How scrum worksScrum is a framework for agile project management that uses fixed-length iterations of work, called sprints. There are four ceremonies that bring structure to each sprint.It all starts with the backlog, or body of work that needs to be done. In scrum, there are two backlogs: one is the product backlog (owned by the product owner) which is a prioritized list of features, and the other is the sprint backlog which is filled by taking issues from the top of the product backlog until the capacity for the next sprint is reached. Scrum teams have unique roles specific to their stake in the process. Typically there's a scrum master, or champion of the scrum method for the team; the product owner, who's the voice of the product; and the scrum team, who are often cross-functional team members in charge of getting s@#$ done."
    },
    article2: {
        imagePreviewLink: "./fronend1.png",
        image1Link: "./frontend2.jpeg",
        image2Link: "./frontend3.png",
        authorName: "Css Tricks",
        articlePreview: "The topical idea of “how to think like a front-end developer” began for me as a series of podcast interviews on ShopTalk Show. That was in preparation for a talk I was preparing (and gave) of the same name. That talk evolved into my essay The Great Divide, which evolved into the essay The Widening Responsibility for Front-End Developers.",
        articleContent: "But also, this entire site is loosely themed “how to think like a front-end developer”. My goal for this site is helping us all do that better.This post is a collection of articles that hone in on that idea. Some are very specific technical posts that I think embody front-end development. Some are more lofty philosophical musings. Some are links to other people’s articles.Part of the job of being a front-end developer is applying different techniques and technologies to pull off the desired UI and UX. Perhaps you work with a design team and implement their designs. I know when I look at a design (heck, even if I know I’m not going to be building it), my front-end brain starts triggering all sorts of things I know will be related to the task.We’re going to mostly be talking about design pattern choices and HTML/CSS tech choices. There is much more to the job of front-end development. Accessibility! Performance! Semantics! Design systems! All important stuff as well."
    },
    article3: {
        imagePreviewLink: "./backend1.png",
        image1Link: "./backend2.jpeg",
        image2Link: "./backend3.jpeg",
        authorName: "Upwork",
        articlePreview: "Backend Development is also known as server-side development. It is everything that the users don't see and contains behind-the-scenes activities that occur when performing any action on a website. It focuses primarily on databases, backend logic, APIs, and Servers. ... Thus, it is known as the backend.",
        articleContent: "If you’re not a developer or engineer, concepts like front-end vs. back-end development can be challenging to wrap your head around. Pile on all of the frameworks, programming languages, APIs, and libraries that developers use to build apps, and things can get pretty confusing.The good news? You don’t have to write code to understand the basics of back-end development and the various components of a typical “software stack.” In fact, knowing your way around it is helpful whether you’re a CEO, a hiring manager, a salesperson for a tech-based startup, or a product manager.To help you become a pro in all things back-end development, we’ve gathered up a series of articles that cover some key things to know—in a way non-developers can understand. You’ll not only know what server-side scripting is and what back-end engineers do, you’ll learn the pros of the different programming languages, how the cloud is changing things up, why APIs are so important, and how to make decisions about what frameworks are best for your app.What is Back-End development?Back-end development refers to the development of server-side logic that powers websites and apps from behind the scenes. It includes all the code needed to build out the database, server, and application. From database migrations to API integrations to setting up the server-side technologies that make a website tick, a back-end web developer may be the talent you need to get your next web project off the ground.Front-end vs back-end developmentTo understand the back end, or the “server side,” you also have to know the front end and how the two interact. The front end, also called “client-side” programming, is what happens in the browser—everything the end users see and interact with. The back end, on the other hand, happens on the server (on site, or in the cloud) and databases. It’s the machinery that works behind the scenes—everything the end user doesn’t see or directly interact with, but that powers what’s happening."
    },
    article4: {
        imagePreviewLink: "./dba1.jpeg",
        image1Link: "./dba2.png",
        image2Link: "./dba3.jpeg",
        authorName: "Science Direct",
        articlePreview: "This paper identifies and defines the facilities needed to enable a database administrator to organise and control the development and operational running of a database system. The data needed to support these facilities, termed control data is discussed, and a conceptual data model for a control database is presented. This control database forms the core of a database administration support environment.",
        articleContent: "The paper examines the facilities required from a database administration support environment for the effective specification and implementation of access control. A role-based model for access control is proposed, and is used to critically examine the current CODASYL approach to access control.This paper is based on the work of the BCS/CODASYL DDLC Database Administration Working Group, of which the authors are members. However, the opinions expressed in the paper are those of the authors.Database management systemdatabase administratoraccess controlstorage allocationThis paper develops the idea of a databaseadministr ation support environment (or DBASE)to assist a database administrator (DBA) inthe analysis, design, implementation, andoperational running of a database system.Specifically, it concentrates on the DBASEaspects required for implementation andoperational running. In addition, it examinesone issue, that of the specification andimplementation of access control, in detail.This paper has the following structure. Thenext section establishes the general scope andpurpose of a DBASE. The third sectionconsists of a definition of the facilitiesrequired in one general aspect of a DBASE,namely that concerned with the implementationand operational running of a database system.The following section presents the dataneeded to support these facilities, developinga conceptual data model of the required controldatabase. The final section examines theDBASE requirements for the specification andimplementation of access control. These areused to critically examine the current CODASYLapproach to access control.Most of the facilities discussed would beneeded for any type of database system, butthroughout this paper a CODASYL databasesystem is assumed and the terminology isconsistent with that of (CODASYL 81) unlessotherwise stated.THE NOTION OF A DBASEIt is now generally accepted that thedevelopment of a database system involvesa number of stages. Following (Robinson 81)and (OU 80), these stages may be summarisedas follows.1. Conceptual definition, consisting ofdata analysis and functional analysis, toyield a conceptual data model and thecorresponding conceptual process model forthe organisation in question. Typically theconceptual data model is defined using somevariant on the construc ts proposed in(Chen 76).2. Logical schema definition consisting ofa translation of the objects in theconceptual data model into objects in theschema of the chosen database approach.3. Storage schema definition consisting ofa translation of the objects in the schemainto objects in the storage schema.4. Storage media definition, being thedefinition of the storage media required tosupport the stored representation of thedatabase.5. Operational definition, being thedefinition of the required parameters forconcurrency, recovery, etc. that allow theoperational running"
    },
    article5: {
        imagePreviewLink: "./testing1.png",
        image1Link: "./testing2.jpeg",
        image2Link: "./testing3.jpeg",
        authorName: "InfoQ",
        articlePreview: "Canary releases got their name from the use of canaries—tiny birds—in coal mines to detect toxic gases before they hurt humans. Workers would carry a canary bird in a birdcage as they walked into a mine and worked inside it. If they noticed that the bird had stopped chirping, they would realize that there was probably toxic gas and would flee to safety. ",
        articleContent: "In the present era, we can roll out features to just certain users. For example, the canary testing customers could have opted in for a Beta testing program or they could have been selected by setting some flags to allow only certain types of users to see the new version. A Product Owner decides to make a canary release to assess how customers respond to the new features of the software. They make the canary release available to a small number of users first and then, depending on the response, the release is made available to a gradually expanding group of users. For example, the build could first be released to internal users, then to some specific profiles, and so on. A well-designed canary test suite can help discover what users think about the new feature. Some questions that we expect responses to include “Is it worth rolling out to the larger audience?” and “Are users even noticing the new feature?”The good part about canary releases is that there is always an option to roll back if we see problems in the live environment without having impacted the entire customer base. In the mining example, miners would carry caged canary birds in the mine and if a bird became ill or died, the mine workers would evacuate immediately. In software terms, this is a rollback!There is a difference between what a canary release is vs. what people interpret it to be. As with many terms and concepts, the understanding of a canary release varies across organizations and teams. It has naturally followed that teams and initiatives end up interpreting canary releases to meet their pressing needs. In some cases, teams and initiatives also design processes based on what they can manage socially, politically, and in terms of capability and budget.A tester would discover issues that users wouldn’t know to test for, and which could cause them to walk away from the app if they encounter those issues even once. As anyone from marketing can confirm, customer acquisition is expensive, but retaining a dissatisfied user is even more so. "
    },
    article6: {
        imagePreviewLink: "./production1.png",
        image1Link: "./production2.png",
        image2Link: "./production3.png",
        authorName: "Wikipedia",
        articlePreview: "The general deployment process consists of several interrelated activities with possible transitions between them. These activities can occur at the producer side or at the consumer side or both. Because every software system is unique, the precise processes or procedures within each activity can hardly be defined. ",
        articleContent: "When computers were extremely large, expensive, and bulky (mainframes and minicomputers), the software was often bundled together with the hardware by manufacturers. If business software needed to be installed on an existing computer, this might require an expensive, time-consuming visit by a systems architect or a consultant. For complex, on-premises installation of enterprise software today, this can still sometimes be the case.However, with the development of mass market software for the new age of microcomputers in the 1980s came new forms of software distribution – first cartridges, then Compact Cassettes, then floppy disks, then (in the 1990s and later) optical media, the internet and flash drives. This meant that software deployment could be left to the customer. However, it was also increasingly recognized over time that configuration of the software by the customer was important and that this should ideally have a user-friendly interface (rather than, for example, requiring the customer to edit registry entries on Windows).In pre-internet software deployments, deployments (and their closely related cousin, new software releases) were of necessity expensive, infrequent, bulky affairs. It is arguable therefore that the spread of the internet made end-to-end agile software development possible. Indeed, the advent of cloud computing and software as a service meant that software could be deployed to a large number of customers in minutes, over the internet. This also meant that typically, deployment schedules were now determined by the software supplier, not by the customers. Such flexibility led to the rise of continuous delivery as a viable option, especially for less risky web applications.The release activity follows from the completed development process and is sometimes classified as part of the development process rather than deployment process. It includes all the operations to prepare a system for assembly and transfer to the computer system(s) on which it will be run in production. Therefore, it sometimes involves determining the resources required for the system to operate with tolerable performance and planning and/or documenting subsequent activities of the deployment process.For simple systems, installation involves establishing some form of command, shortcut, script or service for executing the software (manually or automatically). For complex systems it may involve configuration of the system – possibly by asking the end user questions about its intended use, or directly asking them how they would like it to be configured – and/or making all the required subsystems ready to use. Activation is the activity of starting up the executable component of software for the first time (not to be confused with the common use of the term activation concerning a software license, which is a function of Digital Rights Management systems.)In larger software deployments on servers, the main copy of the software to be used by users - 'production' - might be installed on a production server in a production environment. Other versions of the deployed software may be installed in a test environment, development environment and disaster recovery environment.In complex continuous delivery environments and/or software as a service systems, differently-configured versions of the system might even exist simultaneously in the production environment for different internal or external customers (this is known as a multi-tenant architecture), or even be gradually rolled out in parallel to different groups of customers, with the possibility of canceling one or more of the parallel deployments. For example, Twitter is known to use the latter approach for A/B testing of new features and user interface changes. A 'hidden live' group can also be created within a production environment, consisting of servers that are not yet connected to the production load balancer, for the purposes of blue-green deployment."
    }
}


/*
components to design: 
1.navbar finished
2.apps showcase and github tracking
3.article showcase card 
3.article and comments component 

*/
let lines = "crossed";
document.getElementById("nav-toggle-button").addEventListener("click",() => {
    console.log(document.getElementById("nav-toggle-link").classList);
    document.getElementById("nav-toggle-link").classList.toggle("noLinks");
    if (lines == "notcrossed") {
        document.getElementById("todeleteButton").style.display = "none";
        lines = "crossed"
        document.getElementById("torotatebutton1").classList.add("x1");
        document.getElementById("torotatebutton2").classList.add("x2");
    }else {
        document.getElementById("todeleteButton").style.display = "block";
        document.getElementById("torotatebutton1").classList.remove("x1");
        document.getElementById("torotatebutton2").classList.remove("x2");
        lines = "notcrossed";
    }
    
});
window.onload = () => {
    document.getElementById("todeleteButton").style.display = "none";
        lines = "crossed"
        document.getElementById("torotatebutton1").classList.add("x1");
        document.getElementById("torotatebutton2").classList.add("x2");
    viewAllArticles();
    }

// scrolling fixing
window.onscroll = function() {scrollFunction()};


const navbar = document.getElementById("navbar");
function scrollFunction() {
    if(window.pageYOffset >= 200) {
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky");
    }
}

function viewAllArticles() {
    document.getElementById("articleDashboardCurrentContent").classList.add("noFlex");
    document.getElementById("articleDashboardCurrentContent").classList.remove("changeFlex");
    document.getElementById("articleDashboardCurrentContent").innerHTML = "";
    for(let i=0;i<Object.keys(applicationDev).length;i++) {
        let element = `<article class="article-container">
        <button onclick="makeDispear()" id="${Object.keys(applicationDev)[i]}" class="article-link" href="#">
            <img class="article-img" src="${applicationDev[Object.keys(applicationDev)[i]].imagePreviewLink}" alt="" srcset="">
            <h4 class="article-author">Authored by: ${applicationDev[Object.keys(applicationDev)[i]].authorName}</h4>
            <p class="article-summary">${applicationDev[Object.keys(applicationDev)[i]].articlePreview}</p>
        </button>
</article>`;
document.getElementById("articleDashboardCurrentContent").innerHTML += element;
    }
    for(let i=0;i<Object.keys(osDev).length;i++) {
        let element = `<article class="article-container">
        <button onclick="makeDispear2()" id="${Object.keys(osDev)[i]}" class="article-link" href="#">
            <img class="article-img" src="${osDev[Object.keys(osDev)[i]].imagePreviewLink}" alt="" srcset="">
            <h4 class="article-author">Authored by: ${osDev[Object.keys(osDev)[i]].authorName}</h4>
            <p class="article-summary">${osDev[Object.keys(osDev)[i]].articlePreview}</p>
        </button>
</article>`;
document.getElementById("articleDashboardCurrentContent").innerHTML += element;
}
}

document.getElementById("viewAllArticles").addEventListener("click",() => {
    viewAllArticles();
});

document.getElementById("viewAllQuestions").addEventListener("click",() => {
    viewAllQuestions();
});
document.getElementById("createArticle").addEventListener("click",() => {
    createArticle();
});
document.getElementById("updateArticle").addEventListener("click",() => {
    updateArticle();
});
document.getElementById("deleteArticle").addEventListener("click",() => {
    deleteArticle();
});
document.getElementById("updateProfile").addEventListener("click",() => {
    updateProfile();
});

function viewAllQuestions() {
document.getElementById("articleDashboardCurrentContent").innerHTML = "";
document.getElementById("articleDashboardCurrentContent").classList.remove("noFlex");
document.getElementById("articleDashboardCurrentContent").classList.add("changeFlex");
for(let i=0;i<20;i++) {
let element = `
                <div class="questionViewAll">
                    <p>Question 1: What is the use of building application softwares</p>
                </div>
                `;
                document.getElementById("articleDashboardCurrentContent").innerHTML += element;
}
}

function createArticle() {
document.getElementById("articleDashboardCurrentContent").innerHTML = "";
document.getElementById("articleDashboardCurrentContent").classList.remove("noFlex");
document.getElementById("articleDashboardCurrentContent").classList.add("changeFlex");
let element = `<div class="queryArticle">
<form for="">
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    
    <label for="inputAuthor">Enter name of article author: </label>
    <input style="width: 50vw" class="inputAuthorClass" type="text" name="inputAuthor"/>
    <label for="articleContent">Enter article content: </label>
    <textarea style="width: 70vw; height: 300px; margin: 30px" name="articleContent" col="100" row="30"></textarea>
    <input class="submitButton" value="Create Article" type="button" />
</form>
</div>`;
document.getElementById("articleDashboardCurrentContent").innerHTML += element;

}

function updateArticle() {
document.getElementById("articleDashboardCurrentContent").innerHTML = "";
document.getElementById("articleDashboardCurrentContent").classList.remove("noFlex");
document.getElementById("articleDashboardCurrentContent").classList.add("changeFlex");
let element = `<div class="queryArticle">
<form for="">
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    
    <label for="inputAuthor">Enter name of article author: </label>
    <input style="width: 50vw" class="inputAuthorClass" type="text" name="inputAuthor"/>
    <label for="articleContent">Enter article content: </label>
    <textarea style="width: 70vw; height: 300px; margin: 30px" name="articleContent" col="100" row="30"></textarea>
    <input class="submitButton" value="Update Article" type="button" />
</form>
</div>`;
document.getElementById("articleDashboardCurrentContent").innerHTML += element;

}

function deleteArticle() {
document.getElementById("articleDashboardCurrentContent").innerHTML = "";
document.getElementById("articleDashboardCurrentContent").classList.remove("noFlex");
document.getElementById("articleDashboardCurrentContent").classList.add("changeFlex");
let element = `<div class="queryArticle">
<form for="">
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    <label for="inputImage">Upload Image of article</label>
    <input class="inputClass" type="file" name="inputImage"/>
    
    <label for="inputAuthor">Enter name of article author: </label>
    <input style="width: 50vw" class="inputAuthorClass" type="text" name="inputAuthor"/>
    <label for="articleContent">Enter article content: </label>
    <textarea style="width: 70vw; height: 300px; margin: 30px" name="articleContent" col="100" row="30"></textarea>
    <input class="submitButton" value="Delete Article" type="button" />
</form>
</div>`;
document.getElementById("articleDashboardCurrentContent").innerHTML += element;

}

function updateProfile() {
    document.getElementById("articleDashboardCurrentContent").innerHTML = "";
document.getElementById("articleDashboardCurrentContent").classList.remove("noFlex");
document.getElementById("articleDashboardCurrentContent").classList.add("changeFlex");
let element = `<div class="queryArticle">
<form for="">
<label for="inputAuthor">Enter Url of Github Profile: </label>
<input style="width: 50vw" class="inputAuthorClass" type="text" name="inputAuthor"/>
<label for="inputAuthor">Enter Url of Linkedin Profile: </label>
    <input style="width: 50vw" class="inputAuthorClass" type="text" name="inputAuthor"/>
    <label for="inputAuthor">Enter Url of Facebook Profile: </label>
    <input style="width: 50vw" class="inputAuthorClass" type="text" name="inputAuthor"/>
    <input class="submitButton" value="Update Profile" type="button" />
</form>
</div>`;
document.getElementById("articleDashboardCurrentContent").innerHTML += element;

}