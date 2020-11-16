# SmartHub

This project was created to discover new techniques around Smart-Home services.
The original plan was to create a "Hub" running on a [Raspberry Pi 3b+](https://www.raspberrypi.org/products/raspberry-pi-3-model-b-plus/?resellerType=home) based on nodejs as the server-framework.

At the moment I'm using a free version of the [Datta Able](https://codedthemes.com/item/datta-able-bootstrap-lite/) bootstrap theme.

![alt text](https://raw.githubusercontent.com/HenriqueSantosAzevedo/smartHomeHub/master/dev/Screenshot%202020-11-16%20at%2000.39.41.png)




### Why am I using a Raspberry Pi?
As I don't want the SmartHome devices to connect via my actual wifi, I am using the Raspi to create a separate Hotspot without ip-forwarding, so none of the devices can connect to the outside without permission. More Later!

The Raspberry Pi also offers an onboard wifi & ethernet chip. I'm using these two as actual network connection opportunities. Furthermore, I'm using a second wireless card, so I can create the Hotspot, where all kinds of devices will be able to connect.

Another reason is the costs of this project. As I'm still a student, I'll have to maintain this project on a low-budget level! The decision was also simplified by the term, that I already owned a Raspberry Pi!
