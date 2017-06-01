"# IBM-MobileFirst-Platform-CNNApp"

<B>Since do not have a lot of time to supply detailed info, hence supplying here what I did on my CMD prompt. Hope this helps you in setting up your first Ionic IBM MobileFirst Project.
</B>

===================================================================================
D:\IBM_MF_8_Workspace>mfp create cnnMFP

A MobileFirst Project was successfully created at D:\IBM_MF_8_Workspace\cnnMFP

D:\IBM_MF_8_Workspace>cd cnnMFP

D:\IBM_MF_8_Workspace\cnnMFP>ls

adapters  apps  bin  components  externalServerLibraries  server  services

D:\IBM_MF_8_Workspace\cnnMFP>mfp add hybrid cnnRSSHybrid

A new Hybrid App was added at D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid

D:\IBM_MF_8_Workspace\cnnMFP>cd apps\cnnRSSHybrid

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid>ls

application-descriptor.xml  build-settings.xml  certificates  common  legal

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid>cd common

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>ls

css  images  index.html  js

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>mfp bd

The 'mfp bd' command is deprecated. Use 'mfp push' instead.

App 'cnnRSSHybrid' was successfully built in 'D:\IBM_MF_8_Workspace\cnnMFP' folder.

Initializing MobileFirst Console.

Starting server worklight.

Server worklight started.

The server is listening on port 10080.

Server Directory: C:/Users/nirreddy/.ibm/mobilefirst/7.1.0.00.20170330-0917/server/

URL: http://localhost:10080/

All apps were successfully deployed to runtime 'cnnMFP' on local server.



D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>mfp console

Opening console for runtime 'cnnMFP'


NOW COPY THE IONIC PROJECT FILES INTO YOUR COMMON FOLDER:
==========================================================

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common> copy d:\IBM_MF_8_Workspace\cnnIO\www\*.* .\
d:\IBM_MF_8_Workspace\cnnIO\www\.gitkeep
d:\IBM_MF_8_Workspace\cnnIO\www\index.html
Overwrite .\index.html? (Yes/No/All): all
d:\IBM_MF_8_Workspace\cnnIO\www\manifest.json
d:\IBM_MF_8_Workspace\cnnIO\www\service-worker.js
        4 file(s) copied.

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>ls

assets  css     index.html  manifest.json
build   images  js          service-worker.js


NOW BUILD YOUR IBM MF PROJECT AND DEPLOY ON IBM MF SERVER:
================================================================
D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>mfp bd

The 'mfp bd' command is deprecated. Use 'mfp push' instead.
App 'cnnRSSHybrid' was successfully built in 'D:\IBM_MF_8_Workspace\cnnMFP' folder.
App cnnRSSHybrid was successfully deployed to runtime 'cnnMFP' on local server.

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>mfp bd

The 'mfp bd' command is deprecated. Use 'mfp push' instead.
App 'cnnRSSHybrid' was successfully built in 'D:\IBM_MF_8_Workspace\cnnMFP' folder.
App cnnRSSHybrid was successfully deployed to runtime 'cnnMFP' on local server.

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>mfp bd

The 'mfp bd' command is deprecated. Use 'mfp push' instead.
App 'cnnRSSHybrid' was successfully built in 'D:\IBM_MF_8_Workspace\cnnMFP' folder.
App cnnRSSHybrid was successfully deployed to runtime 'cnnMFP' on local server.

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\common>

================================================================================================================


D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid>mfp add environment

? What environments you want to add to the hybrid app? Android phone and tablets

A new Android phone and tablets Environment was added at D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android



D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid>ls

android                     build-settings.xml  common
application-descriptor.xml  certificates        legal

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid>cd android

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>ls

css  images  js  nativeResources

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>mfp bd

The 'mfp bd' command is deprecated. Use 'mfp push' instead.
App 'cnnRSSHybrid' was successfully built in 'D:\IBM_MF_8_Workspace\cnnMFP' folder.
App cnnRSSHybrid was successfully deployed to runtime 'cnnMFP' on local server.



D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>ls
css  images  js  native  nativeResources


D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>ls native
AndroidManifest.xml  gen                   project.properties
assets               libs                  res
cnnRSSHybrid.iml     proguard-project.txt  src

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>ls native\assets\www
default  skinLoader.html

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>ls native\assets\www\default
assets  css       images      js             service-worker.js
build   filelist  index.html  manifest.json  worklight

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android>cd native

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android\native>android list target
**************************************************************************
The "android" command is deprecated.
For manual SDK, AVD, and project management, please use Android Studio.
For command-line tools, use tools\bin\sdkmanager.bat
and tools\bin\avdmanager.bat
**************************************************************************

Invoking "C:\Users\nirreddy\AppData\Local\Android\sdk\tools\bin\avdmanager" list target

Available Android targets:

id: 1 or "android-16"
     Name: Android API 16
     Type: Platform
     API level: 16
     Revision: 5

id: 2 or "android-23"
     Name: Android API 23
     Type: Platform
     API level: 23
     Revision: 3

id: 3 or "android-25"
     Name: Android API 25
     Type: Platform
     API level: 25
     Revision: 3

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android\native>android update project -p . -t 3

**************************************************************************
The "android" command is deprecated.
For manual SDK, AVD, and project management, please use Android Studio.
For command-line tools, use tools\bin\sdkmanager.bat
and tools\bin\avdmanager.bat
**************************************************************************

Invalid or unsupported command "update project -p . -t 3"

Supported commands are:
android list target
android list avd
android list device
android create avd
android move avd
android delete avd
android list sdk
android update sdk

D:\IBM_MF_8_Workspace\cnnMFP\apps\cnnRSSHybrid\android\native>


===============================================================

INSTALLING AND TESTING YOUR MOBILE App
=======================================
Now use Android Studio to generate your APK or use command prompt and pass the following command:

      ant debug

          This should generate a debug APK.



    Launch Android Emulator:
    		Find available AVDs:	android list avd
    		Launch one of them:		emulator -avd Nexus5XAPI25

Now Install the APK on Emulator or Physical Device by using the following command:

    ADB Install <b>APK FILE with absolute path</b>
