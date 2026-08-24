| Ordering Detail | Cart |
| :---: | :---: |
| <img width="400px" alt="ordering-detail" src="https://github.com/user-attachments/assets/29232761-fed6-48c6-941b-8319f04c29fa" /> | <img width="400px" alt="cart" src="https://github.com/user-attachments/assets/616e777d-bfe4-438f-853b-5db896d9b107" /> |



~ Source [JLCPCB Docs](https://jlcpcb.com/help/article/how-to-design-multi-color-silkscreen-using-easyeda)
<details>
  <summary> Click to see "How to Design Multi-Color Silkscreen Using EasyEDA"</summary>


## Table of Contents
1. [Introduction](#introduction)
2. [Enabling Color Silkscreen Printing](#enabling-color-silkscreen-printing)
3. [Importing Color Images](#importing-color-images)
4. [Setting Component Silkscreen Colors](#setting-component-silkscreen-colors)
5. [Setting Board Silkscreen Colors](#setting-board-silkscreen-colors)
6. [Previewing Color Silkscreen](#previewing-color-silkscreen)
7. [Exporting Manufacturing Files](#exporting-manufacturing-files)
8. [Ordering Multi-Color Circuit Board](#ordering-multi-color-circuit-board)
9. [Important Notes for Multi-Color Silkscreen PCBs](#important-notes-for-multi-color-silkscreen-pcbs)

---

## Introduction

JLCPCB is one of the few PCB manufacturers capable of offering multi-color silkscreen services. To produce a multi-color circuit board, a design incorporating multi-color silkscreens is essential. At present, our production process exclusively supports Gerber files featuring colored silkscreen layers that have been exported from **EasyEDA Pro**. 

In the following guide, we will walk you through the process of designing multi-color silkscreens using EasyEDA Pro, including importing color images, setting character colors, and exporting manufacturing files for orders through JLCPCB.

---

## Enabling Color Silkscreen Printing

To begin, activate the "Use JLCPCB Color Silkscreen Process" option in the PCB settings:
* **Path:** Settings icon – PCB / Footprint – General – Using JLC color silkscreen technology

---

## Importing Color Images

1. EasyEDA supports importing color images via the **Top Menu – Place – Image**. 
2. Both **PNG** and **SVG** vector image files are supported. 
3. In the import dialog, tick the option to place the image in original quality. If this option is not available, try uploading the image in another file format.
4. The image will automatically be placed on the top silkscreen layer, but you can move it to the document layer or the bottom silkscreen layer if needed.

---

## Setting Component Silkscreen Colors

* After selecting a component, you can set its silkscreen color in the **right-side properties panel**.
* All lines, text, reference designators, and other silkscreen features belonging to the component will be printed in this color.

---

## Setting Board Silkscreen Colors

Click on a blank space on the canvas to access the color silkscreen settings in the right-side properties panel:
* **Top/Side Board Colors:** Default is white. Since the board requires color printing, a base color layer must be printed first, and this setting determines that base color.
* **Top/Bottom Side Silkscreen Colors:** The default silkscreen colors, like reference designators and component outline silkscreens. If a component has an individually set silkscreen color, it will take precedence over this default.

---

## Previewing Color Silkscreen

1. Go to **Top Menu – View – 2D/3D Preview**.
2. You must set **Silkscreen Technology** to **Colorful Silkscreen** in the right-side properties panel to see the effect of color printing.

---

## Exporting Manufacturing Files

1. After completing the settings and editing the color silkscreen, export the color silkscreen production file. 
2. Open **Top Menu – Export – PCB Fabrication File (Gerber)**.
3. Tick the **Silkscreen** option to export color silkscreen along with the Gerber files.

### Important SMT / Panelization Notes:
* **Edge Rails Requirement:** If your color silkscreen board requires JLCPCB SMT service, ensure that the "Panelize" function has been set with edge rails. Otherwise, the color silkscreen will not be printed when you select SMT service.
* Click "Set Technology Side", or access the Panelize menu from **Top Menu – Tools – Panelize**. Choose the panelization method ("Stamp Hole" / "V-CUT"), then enable process edges ("Create Technology Side"). The panel format can be 1×1 or larger.
* **EasyEDA Pro Version Support:** In EasyEDA Pro version 2.2 and above, color silkscreen panelization is supported when selecting **"All Objects"** as the panelization method within the Panelize tool. Currently, the "Board Outline Only" panelization method does not support color silkscreen.
* **Single-Layer Boards Caution:** Please exercise caution when designing single-layer boards with color silkscreen. If your single-layer routing is placed on the bottom layer, JLCPCB will mirror the bottom layer data to the top layer during manufacturing to optimize production efficiency and reduce costs. However, the color silkscreen data will not be mirrored synchronously, resulting in the color silkscreen being mistakenly printed over top layer pads. **Recommendation:** Place all routing on the top layer when designing single-layer boards, or design the project as a double-layer board by applying a copper pour to the unrouted layer.

---

## Ordering Multi-Color Circuit Board

You can place an order directly at EasyEDA, or upload Gerber files generated from EasyEDA on the JLCPCB quote page, where you need to select multi-color silkscreen specifications.

### Multi-Color Silkscreen PCB Specifications:

| Specification | Supported Option |
| :--- | :--- |
| **Layers** | 2 layers, 4 layers |
| **PCB Color** | White |
| **Outer Copper Weight** | 1oz |
| **Surface Finish** | ENIG |
| **Gold Thickness** | 1u |
| **Via Covering** | Tented, Untented, Plugged |
| **Delivery Format** | Single PCB, Panel by Customer |

* In the **"Advanced Options"**, select **"EasyEDA multi-color silkscreen"** under Silkscreen Technology.

---

## Important Notes for Multi-Color Silkscreen PCBs

1. **Gerber Adjustments Error Tolerance:** EasyEDA color silkscreen production files are separate from Gerber. JLCPCB adjusts customer's Gerber files to ensure compatibility with process conditions, but these adjustments do not carry over to color silkscreen files. If Gerber adjustments exceed the set error tolerance of **2 mm**, your color silkscreen will not be included in the production files.
2. **Panel Size for V-Cut:** Please ensure that the PCB panel size is **≥ 70×70 mm** if there is a V-Cut. For sizes smaller than this, please panel with mouse bites.
3. **Edge Rails for SMT Assembly:** When the size is less than 70×70 mm, the system will automatically add edge rails to enlarge the size, and engineers will align the multi-color silkscreen on the board. Edge rails are added with V-Cut for regular shapes and mouse bites for irregular shapes.
4. **EasyEDA Pro Panelize Limitation:** Currently, multi-color silkscreen is not fully supported by EasyEDA Pro's automatic Panelize feature, as automatic panelization does not duplicate multi-color silkscreen content. The exported multi-color silkscreen Gerber will only have data on the master board, and other boards will not contain multi-color silkscreen files.


</details>
