# gpiod
📘 Introduction
This project is written in JavaScript (Node.js) and uses the node-libgpiod library to control GPIO pins on a single-board computer — specifically the Raspberry Pi 3B.

You can learn more about the library here: 
🔗 https://www.npmjs.com/package/node-libgpiod

🛠️ Getting Started
Install Node.js
You must install Node.js on your Raspberry Pi before running this script.
Download it from the official website:  🔗 https://nodejs.org/en

You can also install it via terminal:
    sudo apt update
    sudo apt install nodejs npm

To verify the installation:
    node -v
    npm -v
    
-------

🔌 Blink LED with node-libgpiod
This is a simple Node.js script for blinking an LED connected to a GPIO pin on a Linux system (e.g., Raspberry Pi) using the node-libgpiod library.

📦 Requirements
* Linux system with libgpiod installed (e.g., Raspberry Pi OS)
* Node.js
* node-libgpiod Node.js binding
* LED connected to a GPIO pin (e.g., GPIO 23 with appropriate resistor)

📁 Installation
    npm install node-libgpiod

Make sure you have libgpiod installed on your system:
    sudo apt install gpiod

🖊️ Writing the Code with GNU nano
This code was written using GNU nano on a Linux terminal for simplicity.
The file blink.js was written using GNU nano, a simple terminal-based text editor.
To create and edit the file, use the following command:
    nano blink.js


Run the Script
    node blink.js

To save and exit in nano:
* Press Ctrl + O to write the file
* Press Enter to confirm
* Press Ctrl + X to exit

📌 Notes
* The line is automatically released when the script exits.
* You can customize the pin number or blink count as needed.
* For clean shutdown, consider handling SIGINT (Ctrl+C).

--------

🌐 GPIO Web Control with Node.js
Control GPIO pins (e.g., turn an LED on/off) via a simple web API using Node.js and node-libgpiod.

📖 Description
This project provides a minimal web server using Express.js that allows you to control a GPIO pin on a Linux system (such as a Raspberry Pi) through HTTP GET requests.

It uses the node-libgpiod package, a Node.js wrapper for libgpiod, which interfaces with Linux GPIO via the character device interface.

This project was written using the nano text editor directly on a Linux terminal. If you'd like to create or edit the file the same way, follow these steps:
Create the main file using nano
    nano gpio-server.js

Paste the code, then:
* Press CTRL + O to save
* Press Enter to confirm the file name
* Press CTRL + X to exit


Run the server
    node gpio-server.js

Available HTTP Endpoints
* GET /on – Turn GPIO pin ON (set to HIGH)
* GET /off – Turn GPIO pin OFF (set to LOW)

You can test it via browser, curl, or Postman:
    curl http://localhost:3000/on
    curl http://localhost:3000/off

How It Works
The server:
* Initializes GPIO chip 0
* Accesses GPIO line 23 (can be changed)
* Sets it to output mode
* Listens on port 3000
* Responds to HTTP requests by setting the GPIO line high or low
  
-------

🔁 LED Pair Blinker with node-libgpiod
This project uses Node.js and the node-libgpiod library to control 4 GPIO pins on a Linux-based system (like Raspberry Pi, BeagleBone, or any board with GPIO support). It turns on two LEDs at a time in alternating pairs.

💡 How It Works
The script does the following:
1. Initializes GPIO pins 23–26 as outputs.
2. Defines two LED pairs.
3. In a loop, it turns off all LEDs, turns on one pair, then switches to the other after 300ms.
This creates a clean "alternating blink" effect between the two pairs.

🧾 Overview
The script does the following:
* Controls 4 GPIO pins: 23, 24, 25, 26
* Alternates blinking between two pairs:
    * Pair 1: Pin 23 & 24
    * Pair 2: Pin 25 & 26
* The active pair switches every 300 milliseconds
This creates a simple alternating LED blinking pattern.

📝 How to Run (on nano)
1. Open terminal
2. Create file using GNU nano:

    nano blink-led-pairs.js 
3. Paste the code above into the file
4. Save and exit (Ctrl + O, Enter, then Ctrl + X)
5. Run the script:

    node blink-led-pairs.js
