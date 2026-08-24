<h1 align="center">
<br> <img width=20% alt="banner" src="https://github.com/user-attachments/assets/778ec22b-0275-400e-8fe7-37aeb6d882b7" />
</h1>
<div align="center">   
  
[![Hack Club macondo](https://img.shields.io/badge/Hack%20Club-🦋Macondo-FFC800?style=for-the-badge&logo=hack-club&logoColor=red.svg)](https://macondo.hackclub.com)
</div>

 <div align="center">   
  
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![Project](https://img.shields.io/badge/Project-Hardware-yellow.svg)
![Series](https://img.shields.io/badge/Series-Ruby-red.svg)

</div>

<p align="center">
  <a href="#about-the-project">About</a> •
  <a href="#repository-structure">Structure</a> •
  <a href="#schematic">Schematic</a> •
  <a href="#pcb">PCB</a> •
  <a href="#cad">CAD</a> •
  <a href="#Render">Render</a> •
  <a href="#bill-of-materials">BOM</a> •
  <a href="#license">License</a> •
  <a href="#credits">Credits</a>
</p>  



https://github.com/user-attachments/assets/42d68add-5cff-4576-99cb-57eee04979b4



### About the Project

**Ruby-Home-Automation** It is a aesthetic Home Automation Device With Multi color silkscreen, It connect with home Appliances and Make it control them using your phone From any corner of the world. And Also connect with Home assistant like Alexa & Google Assistant And control them using Voice command.
### Features

- **Wifi + ble**
- **Easy to configure with any firmware**
- **Controls 4 Lights, 1 fan With the 4 step Speed control, All the home appliances which uses IR Remote.**
- **IR receiver/IR Blaster**
- **Multicolor silkscreen**

## Repository Structure

- `src/PCB/` — EasyEDA project sources
- `src/cad/` — mechanical CAD sources
- `production/pcb/` — PCB fabrication files (Gerbers, BOM, Pick & Place)
- `production/cad/` — 3D-printing files (.stl + .3mf)
- `GETTING_STARTED/` — Setup guides, firmware installation, and board bring-up documentation
- `Journal/` — DevLogs With Timestamp
- `Firmware/` — Demo firmware


## Schematic
[![EasyEDA](https://img.shields.io/badge/Designed%20in-EasyEDA-00578F?style=for-the-badge&logo=easyeda&logoColor=white)](https://easyeda.com)

Source : `src/PCB/Sch`
<img width=90% alt="Schematic" src="https://github.com/user-attachments/assets/732854a6-d7e9-48a1-a527-555bbf7143f1" />

## PCB 
Source : `src/PCB/Pcb`
~ 
<div align="center">

| Front PCB | Back PCB |
|-----------|----------|
| <img src="https://github.com/user-attachments/assets/7cf87ea0-7706-4529-b3a3-4b1a44b75b26" width="400"> | <img src="https://github.com/user-attachments/assets/780bb78a-4a56-4b27-bba2-74885cf0a5a6" width="400"> |
| <img src="https://github.com/user-attachments/assets/81945be9-c91a-4dfd-9d80-698e1cf4034b" width="400"> | <img src="https://github.com/user-attachments/assets/b615ebf8-3a36-41cb-899c-019191ae6f0a" width="400"> |

</div>

## CAD
[![Fusion 360](https://img.shields.io/badge/CAD%20in-Fusion%20360-orange?style=for-the-badge&logo=autodesk&logoColor=white)](https://www.autodesk.com/products/fusion-360)


A Encloser Case for Ruby home automation. The top part and bottom part are Friction fit , allowing the enclosure to be assembled without screws or Glue makes it easy assembly. And looks good.

- source: `src/cad/`
<div align="center">
<table>
<tr>
<td valign="bottom"><img width=100% alt="image" src="https://github.com/user-attachments/assets/9554d367-be0c-4d6a-aae7-ba0f4147df9f" />
</td>
<td valign="bottom"><img width=100% alt="image" src="https://github.com/user-attachments/assets/c5741965-1fcc-4bd1-9aae-6c200d872b05" />
</table>
</div>
]


### 3D-printable Production files are available in:
- source: `production/cad/`


## Render 
[![Blender](https://img.shields.io/badge/Rendered%20in-Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white)](https://www.blender.org)

<div align="center">
<table>
<tr>
<td valign="bottom"><img width=350px alt="image" src="Render/Ruby-animation.mp4" />
</td>
<td valign="bottom"><img width=350px alt="Image" src="https://github.com/user-attachments/assets/bcd88ff0-dfd4-484a-b8b7-ced2a131613b" />
</table>
</div>

## License

Licensed under MIT — you can use this commercially, modify, and distribute 
with proper attribution. See [LICENSE](LICENSE) file.

## Contributing

Contributions, improvements, and remixes are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) guide to get started.


## Credits
<div align="center">
  
[![Hack Club macondo](https://img.shields.io/badge/Hack%20Club-🦋Macondo-FFC800?style=for-the-badge&logo=hack-club&logoColor=red)](https://macondo.hackclub.com)
[![EasyEDA](https://img.shields.io/badge/Designed%20in-EasyEDA-00578F?style=for-the-badge&logo=easyeda&logoColor=white)](https://easyeda.com)
[![Fusion 360](https://img.shields.io/badge/CAD%20in-Fusion%20360-orange?style=for-the-badge&logo=autodesk&logoColor=white)](https://www.autodesk.com/products/fusion-360)
[![Blender](https://img.shields.io/badge/Rendered%20in-Blender-F5792A?style=for-the-badge&logo=blender&logoColor=white)](https://www.blender.org) 
</div>

This project was created during a [Hack Club](https://hackclub.com) event [Macondo](https://macondo.hackclub.com).
- **[EasyEDA](https://easyeda.com)** - PCB design and schematic capture
- **[Fusion 360](https://www.autodesk.com/products/fusion-360)** - Cad Designing
- **[Blender](https://www.blender.org)** - Render
- **[@NotARoomba](https://github.com/notaroomba) & [@Gabouin](https://github.com/Gabouin)** - Readme template
