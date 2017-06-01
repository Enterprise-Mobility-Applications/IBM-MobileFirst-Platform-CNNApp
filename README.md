"# IBM-MobileFirst-Platform-CNNApp"

Since do not have a lot of time to supply detailed info, hence supplying here what I did on my CMD prompt. Hope this helps you in setting up your first Ionic IBM MobileFirst Project.



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
