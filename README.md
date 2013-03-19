shtml-flat-framework
====================

Simple scalable foundation for flat websites to get started quickly


Foundation Theory
-------------------

Build your website like a house on-top of this very simple & sturdy foundation, apply templates to skin your house and use shtml includes to prevent duplicating changes if something does change. 



Templating
-----------

CSS/IMAGES/TEMPLATES 

These folders, use a simple templating structure, allowing different skins to be applied if needed, follow the example of 'default' to create your own, or just edit the defaults.

Think of templating as the ability to repaint your house at will



Structure
-----------

Structure does not change, if you were to repaint your house you would not move an entire roow to do so, that way when your house is repainted everyone who visited still knows where things are.


Content
-----------

Content is similar to structure, if you were to repaint your house you would not throw all the furniture out. 


Apache
------------

<VirtualHost *:80>
    Options +Includes
    DirectoryIndex index.shtml
    ServerName local.yoursitepath.com
    DocumentRoot "c:/wamp/www/yoursitepath/public"
</VirtualHost>


Hosts file
------------

127.0.0.1 				local.yoursitepath.com