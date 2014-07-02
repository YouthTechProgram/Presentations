Lesson Q
===

## Stuff to Cover...

- JSON
- VPS
- DNS
- Linux Administration
- Apache

## JSON

	{
	  "array": [
	    1,
	    2,
	    3
	  ],
	  "boolean": true,
	  "null": null,
	  "number": 123,
	  "object": {
	    "a": "b",
	    "c": "d",
	    "e": "f"
	  },
	  "string": "Hello World"
	}

### Acceptable Values

- Array
- Boolean
- Null
- Integers
- Objects
- String

### GeoJSON

- Nothing more than JSON but with globally accepted fields
- No need for application

      {
          "type": "Feature",
          "geometry": {
              "type": "Point",
              "coordinates": [125.6, 10.1]
          },
          "properties": {
              "name": "Dinagat Islands"
		  }
      }

Visit the GeoJSON website for more information: [http://geojson.org/](http://geojson.org/)

### Example

	{
		"popular": [
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			},
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			}
		],
		"featured": [
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			},
			{
			    "type": "Feature",
			    "geometry": {
			        "type": "Point",
			        "coordinates": [125.6, 10.1]
			    },
			    "properties": {
			        "name": "Dinagat Islands"
			    }
			}
		]
	}

## VPS

- Shared hosting is fine
- If you have access to a dedicated server that's fine too
- If you want to share a VPS with another group, go for it

A VPS is a Virtual Private Server which is needed to be able to host websites. All images, fonts, style sheets, JavaScript files, etc. must be uploaded to the server in order to be accessible to everyone. Simply because the files exist on your computer, they won't exist on everyone else's computer.

### Digital Ocean

A VPS provider with a plan of $5/mo.

[https://www.digitalocean.com/pricing/](https://www.digitalocean.com/pricing/)

#### Questions

##### Can I use something else?

Yes.

##### Why Digital Ocean?

Cheapest and most reliable provider I've used.

##### Why VPS over Shared Hosting? (e.g. GoDaddy, GreenGeeks)

A VPS is month to month. You don't need to have a contract for a year or two; it's cheaper if you choose not to continue after the program.

##### Why is there no interface?

Because the command line is the best way to manage servers.

##### What if I absolutely want an admin interface?

[Follow this tutorial](http://www.ubuntugeek.com/how-to-install-webmin-on-ubuntu-12-04-precise-server.html)

##### What OS are we going to be using?

Ubuntu 12.04 LTS

##### Why not a Windows Server?

It sucks.

## DNS

Domain Name Server - it converts a URL (e.g. google.com) into an IP address (74.125.225.201).

### How to Setup It

#### NameCheap

1. Login
2. Dashboard
3. Manage Domains
4. Select Domain
5. "All Host Records"
6. Set your VPS IP

#### GoDaddy

My condolences, [go here](http://support.godaddy.com/help/article/5289/updating-your-domain-names-ip-address-for-forwarding).

## Linux Administration

### Setup

[Install Putty](http://the.earth.li/~sgtatham/putty/latest/x86/putty-0.63-installer.exe)

### SSH

Connect to your VPS via SSH, use your VPS' IP address and use port 22 when connecting.

#### Commands

`adduser` - Create a new user with access to the server

`apt-get` - Installer.

`cd` - Change directory. Use this to move around the file structure.

`nano` - File editor. Use this to edit files.

`mkdir` - Make directory. Create a new folder.

`sudo` - Super User Do. It will allow you to run admin commands as a non-admin.

#### User Management

Original and master user: `root`

Feel free to add other accounts to your server, they will not be an administrator.

##### Sudo Users

Allow a user to run sudo.

	adduser <username> sudo

#### Apache Setup

	sudo apt-get install apache2
	sudo mkdir -p /var/www/example.com/public_html
	sudo chown -R www-data:www-data /var/www/example.com/public_html
	sudo chmod -R 755 /var/www
	sudo nano /var/www/example.com/public_html/index.html
	sudo cp /etc/apache2/sites-available/default /etc/apache2/sites-available/example.com
	sudo nano /etc/apache2/sites-available/example.com
	sudo a2ensite example.com
	sudo service apache2 restart

#### Sample Site Available

	<virtualhost *:80>
	
	  # Admin email, Server Name (domain name) and any aliases
	  ServerAdmin !webmaster!
	  ServerName  !full_domain!
	  ServerAlias www.!full_domain!
	
	
	  # Index file and Document Root (where the public files are located)
	  DirectoryIndex index.html index.htm default.htm index.php index.pl
	  DocumentRoot /var/www/!domain!/public_html
	
	</virtualhost>
