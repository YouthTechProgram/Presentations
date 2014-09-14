# Linux Administration

## Setup

[Install Putty](http://the.earth.li/~sgtatham/putty/latest/x86/putty-0.63-installer.exe)

## SSH

Connect to your VPS via SSH, use your VPS' IP address and use port 22 when connecting.

### Commands

`adduser` - Create a new user with access to the server

`apt-get` - Installer.

`cd` - Change directory. Use this to move around the file structure.

`nano` - File editor. Use this to edit files.

`mkdir` - Make directory. Create a new folder.

`sudo` - Super User Do. It will allow you to run admin commands as a non-admin.

### User Management

Original and master user: `root`

Feel free to add other accounts to your server, they will not be an administrator.

#### Sudo Users

Allow a user to run sudo.

	adduser <username> sudo

### Apache Setup

	sudo apt-get install apache2
	sudo mkdir -p /var/www/example.com/public_html
	sudo chown -R www-data:www-data /var/www/example.com/public_html
	sudo chmod -R 755 /var/www
	sudo nano /var/www/example.com/public_html/index.html
	sudo cp /etc/apache2/sites-available/default /etc/apache2/sites-available/example.com
	sudo nano /etc/apache2/sites-available/example.com
	sudo a2ensite example.com
	sudo service apache2 restart

### Sample Site Available

	<virtualhost *:80>
	
	  # Admin email, Server Name (domain name) and any aliases
	  ServerAdmin !webmaster!
	  ServerName  !full_domain!
	  ServerAlias www.!full_domain!
	
	
	  # Index file and Document Root (where the public files are located)
	  DirectoryIndex index.html index.htm default.htm index.php index.pl
	  DocumentRoot /var/www/!domain!/public_html
	
	</virtualhost>
