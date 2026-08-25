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
<td valign="bottom"><img width=350px alt="image" src="https://github.com/user-attachments/assets/5c545863-3e82-4745-886e-65c562d16691" />
</td>
<td valign="bottom"><img width=350px alt="Image" src="https://github.com/user-attachments/assets/bcd88ff0-dfd4-484a-b8b7-ced2a131613b" />
</table>
</div>

## BOM

## Bill of Materials

Source: `BOM/BOM.csv`

|Quantity|Comment                  |Designator                        |Footprint                                 |Price in USD|link                                                                                                                     |
|--------|-------------------------|----------------------------------|------------------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------|
|4       |0.1uf                    |C8,C1,C5,C7                       |C0805                                     |$0.44       |https://www.lcsc.com/product-detail/C1711.html                                                                            |
|1       |10nF                     |C2                                |C0805                                     |$1.04       |https://www.lcsc.com/product-detail/C1710.html                                                                           |
|1       |CH340C                   |U10                               |SOP-16_L10.0-W3.9-P1.27-LS6.0-BL          |$ 0.59      |https://www.lcsc.com/product-detail/C84681.html                                                                          |
|1       |DHT11                    |H1                                |HDR-TH_4P-P2.54-V-M_146458-4              |$0.8        |https://robu.in/product/dht-11-digital-temperature-and-humidity-sensor-normal-quality                                    |
|1       |ESP32-WROOM-32D          |U12                               |WIFIM-SMD_ESP32-WROOM-32D                 |$ 3.92      |https://www.lcsc.com/product-detail/C473012.html                                                                         |
|1       |HT7833                   |U11                               |SOT-89_L4.5-W2.5-P1.50-LS4.2-BR           |$ 0.61      |https://www.lcsc.com/product-detail/C3011187.html                                                                        |
|1       |MX128-5.0-06P-GN01-Cu-Y-A|U13                               |CONN-TH_6P-P5.00_MX128-5.0-06P-GN01-CU-Y-A|$ 0.36      |https://www.lcsc.com/product-detail/C5290371.html                                                                        |
|1       |S6B-XH-A-GU              |CN1                               |CONN-TH_S6B-XH-A                          |$ 1.04      |https://www.lcsc.com/product-detail/C495565.html                                                                         |
|1       |TSOP1738_TSOP1738        |U9                                |TSOP1738:TSOP17XX                         |$ 0.43      |https://robocraze.com/products/tsop-1738                                                                                 |
|1       |TYPE-C-31-M-12           |USBC1                             |USB-C_SMD-TYPE-C-31-M-12_1                |$ 0.86      |https://www.lcsc.com/product-detail/C165948.html                                                                         |
|1       |ULN2003LVDR              |U1                                |SOIC-16_L9.9-W3.9-P1.27-LS6.0-BL          |$ 0.88      |https://www.lcsc.com/product-detail/C19723745.html                                                                       |
|2       |2.2Ω                     |R22,R23                           |RES-TH_BD2.2-L6.5-P10.50-D0.6             |$0.01       |https://kitsguru.com/products/2-2ω-resistance-1-4-watt-5-tolerance                                                       |
|2       |220kΩ                    |R14,R15                           |RES-TH_BD4.5-L11.0-P15.00-D0.7            |$ 0.02      |https://robu.in/product/mf25-220k-multicomp-pro-through-hole-resistor-220-kohm-mf25-series-250-mw-±-1-axial-leaded-250-v/|
|2       |BC846B                   |Q5,Q6                             |SOT-23-3_L2.9-W1.3-P1.90-LS2.4-BR         |$ 0.76      |https://www.lcsc.com/product-detail/C181138.html                                                                         |
|1       |2.2uf                    |C10                               |CAP-TH_L12.0-W5.5-P10.00-D1.2             |$ 0.44      |https://www.lcsc.com/product-detail/Polypropylene-Film-Capacitors--CBB-_KNSCHA-MPP334J2G10AJ22610_C506821.html           |
|1       |3.3uf                    |C9                                |CAP-TH_L11.5-W6.3-P10.00-D0.6             |$ 0.44      |https://www.lcsc.com/product-detail/C22466724.html?                                                                      |
|2       |TSA010A2518A             |SW1,SW2                           |SW-SMD_L4.0-W3.0-LS5.0                    |$ 0.59      |https://www.lcsc.com/product-detail/C2888945.html                                                                        |
|3       |5.1k                     |R8,R9,R19                         |R0805_NEW                                 |$ 1.13      |https://www.lcsc.com/product-detail/C27834.html                                                                          |
|3       |10uF                     |C3,C4,C6                          |C0805                                     |$ 0.52      |https://www.lcsc.com/product-detail/C27834.html                                                                          |
|4       |10K                      |R7,R13,R20,R21                    |R0805_NEW                                 |$ 0.36      |https://www.lcsc.com/product-detail/C2907219.html                                                                        |
|4       |LED                      |LED2,LED3,LED4,LED6               |LED0805-RD_RED_C0805YGC                   |$ 0.94      |https://www.lcsc.com/product-detail/C264434.html                                                                         |
|6       |330Ω                     |R5,R6,R10,R11,R12,R25             |R0805_NEW                                 |$ 0.56      |https://www.lcsc.com/product-detail/C19701189.html                                                                       |
|7       |1k                       |R1,R2,R3,R4,R16,R17,R18           |R0805_NEW                                 |$ 1.2       |https://www.lcsc.com/product-detail/C19699631.html                                                                       |
|7       |1N4007W                  |D1,D2,D3,D4,D5,D6,D7              |SOD-123_L2.8-W1.8-LS3.7-RD                |$ 0.72      |https://www.lcsc.com/product-detail/C2857183.html                                                                        |
|7       |2N3904(SOT-23)           |Q1,Q2,Q3,Q4,Q7,Q8,Q9              |SOT-23-3_L2.9-W1.3-P1.90-LS2.4-TR         |$ 0.47      |https://www.lcsc.com/product-detail/C50176433.html                                                                       |
|7       |IR333-A                  |U2,U3,U4,U5,U6,U7,U8              |LED-TH_BD6.2-P2.54-FD                     |$ 0.68      |https://www.lcsc.com/product-detail/C50176433.html                                                                      |
|7       |SRD-05VDC-SL-C           |RLY1,RLY2,RLY3,RLY4,RLY5,RLY6,RLY7|RELAY-TH_SRD-XXVDC-XL-C                   |$ 0.44      |https://www.lcsc.com/product-detail/C35449.html                                                                          |


> [!NOTE]
> Price As of August 25, 2026v 
> & It not Include the Shipping fee <br/>v

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
