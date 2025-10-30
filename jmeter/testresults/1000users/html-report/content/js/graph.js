/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 6.0, "minX": 0.0, "maxY": 7473.0, "series": [{"data": [[0.0, 6.0], [0.1, 9.0], [0.2, 10.0], [0.3, 11.0], [0.4, 13.0], [0.5, 14.0], [0.6, 14.0], [0.7, 15.0], [0.8, 16.0], [0.9, 17.0], [1.0, 19.0], [1.1, 19.0], [1.2, 21.0], [1.3, 22.0], [1.4, 23.0], [1.5, 23.0], [1.6, 25.0], [1.7, 26.0], [1.8, 28.0], [1.9, 28.0], [2.0, 30.0], [2.1, 31.0], [2.2, 32.0], [2.3, 33.0], [2.4, 34.0], [2.5, 35.0], [2.6, 35.0], [2.7, 36.0], [2.8, 37.0], [2.9, 38.0], [3.0, 38.0], [3.1, 38.0], [3.2, 39.0], [3.3, 39.0], [3.4, 41.0], [3.5, 42.0], [3.6, 43.0], [3.7, 43.0], [3.8, 44.0], [3.9, 44.0], [4.0, 44.0], [4.1, 45.0], [4.2, 45.0], [4.3, 46.0], [4.4, 46.0], [4.5, 46.0], [4.6, 46.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 48.0], [5.1, 48.0], [5.2, 48.0], [5.3, 48.0], [5.4, 49.0], [5.5, 49.0], [5.6, 49.0], [5.7, 50.0], [5.8, 50.0], [5.9, 50.0], [6.0, 50.0], [6.1, 50.0], [6.2, 51.0], [6.3, 51.0], [6.4, 52.0], [6.5, 52.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 54.0], [7.0, 54.0], [7.1, 55.0], [7.2, 55.0], [7.3, 56.0], [7.4, 56.0], [7.5, 56.0], [7.6, 57.0], [7.7, 57.0], [7.8, 57.0], [7.9, 58.0], [8.0, 58.0], [8.1, 59.0], [8.2, 59.0], [8.3, 59.0], [8.4, 60.0], [8.5, 60.0], [8.6, 60.0], [8.7, 61.0], [8.8, 62.0], [8.9, 62.0], [9.0, 62.0], [9.1, 63.0], [9.2, 63.0], [9.3, 63.0], [9.4, 63.0], [9.5, 64.0], [9.6, 64.0], [9.7, 64.0], [9.8, 65.0], [9.9, 65.0], [10.0, 66.0], [10.1, 66.0], [10.2, 66.0], [10.3, 66.0], [10.4, 67.0], [10.5, 67.0], [10.6, 67.0], [10.7, 67.0], [10.8, 68.0], [10.9, 69.0], [11.0, 69.0], [11.1, 70.0], [11.2, 70.0], [11.3, 70.0], [11.4, 70.0], [11.5, 71.0], [11.6, 71.0], [11.7, 72.0], [11.8, 73.0], [11.9, 73.0], [12.0, 74.0], [12.1, 74.0], [12.2, 75.0], [12.3, 76.0], [12.4, 76.0], [12.5, 77.0], [12.6, 77.0], [12.7, 77.0], [12.8, 78.0], [12.9, 78.0], [13.0, 79.0], [13.1, 79.0], [13.2, 80.0], [13.3, 81.0], [13.4, 82.0], [13.5, 83.0], [13.6, 83.0], [13.7, 84.0], [13.8, 85.0], [13.9, 86.0], [14.0, 87.0], [14.1, 87.0], [14.2, 87.0], [14.3, 88.0], [14.4, 88.0], [14.5, 90.0], [14.6, 90.0], [14.7, 91.0], [14.8, 91.0], [14.9, 92.0], [15.0, 92.0], [15.1, 93.0], [15.2, 94.0], [15.3, 96.0], [15.4, 96.0], [15.5, 99.0], [15.6, 100.0], [15.7, 101.0], [15.8, 103.0], [15.9, 103.0], [16.0, 103.0], [16.1, 104.0], [16.2, 104.0], [16.3, 104.0], [16.4, 104.0], [16.5, 106.0], [16.6, 107.0], [16.7, 108.0], [16.8, 108.0], [16.9, 109.0], [17.0, 110.0], [17.1, 111.0], [17.2, 112.0], [17.3, 113.0], [17.4, 113.0], [17.5, 113.0], [17.6, 114.0], [17.7, 115.0], [17.8, 117.0], [17.9, 118.0], [18.0, 118.0], [18.1, 119.0], [18.2, 119.0], [18.3, 122.0], [18.4, 122.0], [18.5, 123.0], [18.6, 124.0], [18.7, 125.0], [18.8, 126.0], [18.9, 129.0], [19.0, 129.0], [19.1, 130.0], [19.2, 131.0], [19.3, 132.0], [19.4, 133.0], [19.5, 134.0], [19.6, 135.0], [19.7, 136.0], [19.8, 136.0], [19.9, 137.0], [20.0, 137.0], [20.1, 138.0], [20.2, 139.0], [20.3, 140.0], [20.4, 140.0], [20.5, 141.0], [20.6, 141.0], [20.7, 142.0], [20.8, 143.0], [20.9, 144.0], [21.0, 144.0], [21.1, 145.0], [21.2, 145.0], [21.3, 147.0], [21.4, 148.0], [21.5, 149.0], [21.6, 150.0], [21.7, 151.0], [21.8, 153.0], [21.9, 153.0], [22.0, 154.0], [22.1, 154.0], [22.2, 155.0], [22.3, 155.0], [22.4, 155.0], [22.5, 156.0], [22.6, 159.0], [22.7, 159.0], [22.8, 161.0], [22.9, 161.0], [23.0, 162.0], [23.1, 163.0], [23.2, 163.0], [23.3, 164.0], [23.4, 164.0], [23.5, 165.0], [23.6, 166.0], [23.7, 167.0], [23.8, 167.0], [23.9, 168.0], [24.0, 168.0], [24.1, 168.0], [24.2, 169.0], [24.3, 170.0], [24.4, 170.0], [24.5, 171.0], [24.6, 172.0], [24.7, 172.0], [24.8, 173.0], [24.9, 174.0], [25.0, 176.0], [25.1, 177.0], [25.2, 177.0], [25.3, 178.0], [25.4, 179.0], [25.5, 179.0], [25.6, 179.0], [25.7, 179.0], [25.8, 180.0], [25.9, 180.0], [26.0, 182.0], [26.1, 183.0], [26.2, 183.0], [26.3, 184.0], [26.4, 184.0], [26.5, 185.0], [26.6, 185.0], [26.7, 185.0], [26.8, 187.0], [26.9, 187.0], [27.0, 188.0], [27.1, 188.0], [27.2, 189.0], [27.3, 189.0], [27.4, 190.0], [27.5, 192.0], [27.6, 192.0], [27.7, 192.0], [27.8, 194.0], [27.9, 194.0], [28.0, 194.0], [28.1, 195.0], [28.2, 196.0], [28.3, 196.0], [28.4, 196.0], [28.5, 197.0], [28.6, 198.0], [28.7, 198.0], [28.8, 199.0], [28.9, 199.0], [29.0, 199.0], [29.1, 200.0], [29.2, 200.0], [29.3, 201.0], [29.4, 201.0], [29.5, 202.0], [29.6, 203.0], [29.7, 204.0], [29.8, 205.0], [29.9, 205.0], [30.0, 206.0], [30.1, 206.0], [30.2, 207.0], [30.3, 208.0], [30.4, 208.0], [30.5, 209.0], [30.6, 209.0], [30.7, 211.0], [30.8, 212.0], [30.9, 212.0], [31.0, 213.0], [31.1, 213.0], [31.2, 214.0], [31.3, 214.0], [31.4, 214.0], [31.5, 214.0], [31.6, 215.0], [31.7, 216.0], [31.8, 217.0], [31.9, 217.0], [32.0, 218.0], [32.1, 219.0], [32.2, 221.0], [32.3, 221.0], [32.4, 222.0], [32.5, 225.0], [32.6, 227.0], [32.7, 227.0], [32.8, 229.0], [32.9, 230.0], [33.0, 230.0], [33.1, 230.0], [33.2, 232.0], [33.3, 233.0], [33.4, 233.0], [33.5, 234.0], [33.6, 234.0], [33.7, 235.0], [33.8, 235.0], [33.9, 236.0], [34.0, 237.0], [34.1, 238.0], [34.2, 240.0], [34.3, 240.0], [34.4, 241.0], [34.5, 241.0], [34.6, 242.0], [34.7, 243.0], [34.8, 244.0], [34.9, 244.0], [35.0, 244.0], [35.1, 245.0], [35.2, 245.0], [35.3, 246.0], [35.4, 246.0], [35.5, 246.0], [35.6, 246.0], [35.7, 247.0], [35.8, 247.0], [35.9, 248.0], [36.0, 248.0], [36.1, 248.0], [36.2, 249.0], [36.3, 250.0], [36.4, 251.0], [36.5, 251.0], [36.6, 253.0], [36.7, 253.0], [36.8, 254.0], [36.9, 255.0], [37.0, 255.0], [37.1, 255.0], [37.2, 256.0], [37.3, 258.0], [37.4, 259.0], [37.5, 260.0], [37.6, 260.0], [37.7, 265.0], [37.8, 266.0], [37.9, 267.0], [38.0, 268.0], [38.1, 269.0], [38.2, 270.0], [38.3, 271.0], [38.4, 273.0], [38.5, 274.0], [38.6, 276.0], [38.7, 277.0], [38.8, 278.0], [38.9, 280.0], [39.0, 281.0], [39.1, 282.0], [39.2, 282.0], [39.3, 283.0], [39.4, 284.0], [39.5, 286.0], [39.6, 288.0], [39.7, 290.0], [39.8, 292.0], [39.9, 293.0], [40.0, 294.0], [40.1, 298.0], [40.2, 301.0], [40.3, 303.0], [40.4, 304.0], [40.5, 305.0], [40.6, 307.0], [40.7, 308.0], [40.8, 310.0], [40.9, 311.0], [41.0, 312.0], [41.1, 313.0], [41.2, 313.0], [41.3, 314.0], [41.4, 316.0], [41.5, 317.0], [41.6, 318.0], [41.7, 319.0], [41.8, 321.0], [41.9, 322.0], [42.0, 323.0], [42.1, 325.0], [42.2, 327.0], [42.3, 330.0], [42.4, 331.0], [42.5, 333.0], [42.6, 334.0], [42.7, 336.0], [42.8, 337.0], [42.9, 338.0], [43.0, 338.0], [43.1, 339.0], [43.2, 340.0], [43.3, 341.0], [43.4, 343.0], [43.5, 346.0], [43.6, 351.0], [43.7, 352.0], [43.8, 355.0], [43.9, 356.0], [44.0, 359.0], [44.1, 361.0], [44.2, 363.0], [44.3, 365.0], [44.4, 365.0], [44.5, 370.0], [44.6, 372.0], [44.7, 372.0], [44.8, 379.0], [44.9, 381.0], [45.0, 382.0], [45.1, 384.0], [45.2, 385.0], [45.3, 387.0], [45.4, 391.0], [45.5, 392.0], [45.6, 394.0], [45.7, 396.0], [45.8, 396.0], [45.9, 397.0], [46.0, 398.0], [46.1, 399.0], [46.2, 401.0], [46.3, 402.0], [46.4, 405.0], [46.5, 406.0], [46.6, 408.0], [46.7, 409.0], [46.8, 410.0], [46.9, 411.0], [47.0, 412.0], [47.1, 412.0], [47.2, 413.0], [47.3, 416.0], [47.4, 416.0], [47.5, 417.0], [47.6, 418.0], [47.7, 420.0], [47.8, 421.0], [47.9, 423.0], [48.0, 423.0], [48.1, 424.0], [48.2, 425.0], [48.3, 426.0], [48.4, 426.0], [48.5, 427.0], [48.6, 430.0], [48.7, 430.0], [48.8, 433.0], [48.9, 434.0], [49.0, 436.0], [49.1, 438.0], [49.2, 439.0], [49.3, 440.0], [49.4, 441.0], [49.5, 441.0], [49.6, 442.0], [49.7, 442.0], [49.8, 443.0], [49.9, 443.0], [50.0, 445.0], [50.1, 446.0], [50.2, 449.0], [50.3, 453.0], [50.4, 457.0], [50.5, 458.0], [50.6, 465.0], [50.7, 466.0], [50.8, 468.0], [50.9, 469.0], [51.0, 471.0], [51.1, 472.0], [51.2, 473.0], [51.3, 474.0], [51.4, 476.0], [51.5, 477.0], [51.6, 482.0], [51.7, 484.0], [51.8, 490.0], [51.9, 492.0], [52.0, 498.0], [52.1, 498.0], [52.2, 501.0], [52.3, 502.0], [52.4, 505.0], [52.5, 508.0], [52.6, 510.0], [52.7, 521.0], [52.8, 526.0], [52.9, 527.0], [53.0, 528.0], [53.1, 530.0], [53.2, 531.0], [53.3, 532.0], [53.4, 533.0], [53.5, 536.0], [53.6, 536.0], [53.7, 538.0], [53.8, 541.0], [53.9, 542.0], [54.0, 546.0], [54.1, 550.0], [54.2, 552.0], [54.3, 553.0], [54.4, 558.0], [54.5, 560.0], [54.6, 564.0], [54.7, 564.0], [54.8, 566.0], [54.9, 569.0], [55.0, 570.0], [55.1, 574.0], [55.2, 574.0], [55.3, 576.0], [55.4, 578.0], [55.5, 579.0], [55.6, 583.0], [55.7, 589.0], [55.8, 594.0], [55.9, 594.0], [56.0, 596.0], [56.1, 596.0], [56.2, 601.0], [56.3, 603.0], [56.4, 615.0], [56.5, 619.0], [56.6, 620.0], [56.7, 623.0], [56.8, 625.0], [56.9, 626.0], [57.0, 627.0], [57.1, 631.0], [57.2, 643.0], [57.3, 652.0], [57.4, 656.0], [57.5, 670.0], [57.6, 675.0], [57.7, 676.0], [57.8, 678.0], [57.9, 679.0], [58.0, 681.0], [58.1, 682.0], [58.2, 685.0], [58.3, 687.0], [58.4, 689.0], [58.5, 703.0], [58.6, 706.0], [58.7, 711.0], [58.8, 712.0], [58.9, 723.0], [59.0, 740.0], [59.1, 747.0], [59.2, 749.0], [59.3, 754.0], [59.4, 759.0], [59.5, 772.0], [59.6, 775.0], [59.7, 795.0], [59.8, 809.0], [59.9, 849.0], [60.0, 854.0], [60.1, 859.0], [60.2, 865.0], [60.3, 868.0], [60.4, 877.0], [60.5, 885.0], [60.6, 890.0], [60.7, 897.0], [60.8, 899.0], [60.9, 902.0], [61.0, 910.0], [61.1, 918.0], [61.2, 932.0], [61.3, 944.0], [61.4, 946.0], [61.5, 947.0], [61.6, 950.0], [61.7, 961.0], [61.8, 966.0], [61.9, 966.0], [62.0, 972.0], [62.1, 973.0], [62.2, 974.0], [62.3, 978.0], [62.4, 989.0], [62.5, 992.0], [62.6, 995.0], [62.7, 1003.0], [62.8, 1006.0], [62.9, 1008.0], [63.0, 1011.0], [63.1, 1013.0], [63.2, 1015.0], [63.3, 1019.0], [63.4, 1022.0], [63.5, 1026.0], [63.6, 1027.0], [63.7, 1031.0], [63.8, 1033.0], [63.9, 1036.0], [64.0, 1039.0], [64.1, 1044.0], [64.2, 1047.0], [64.3, 1049.0], [64.4, 1050.0], [64.5, 1052.0], [64.6, 1056.0], [64.7, 1059.0], [64.8, 1062.0], [64.9, 1078.0], [65.0, 1087.0], [65.1, 1099.0], [65.2, 1107.0], [65.3, 1140.0], [65.4, 1156.0], [65.5, 1223.0], [65.6, 1261.0], [65.7, 1264.0], [65.8, 1279.0], [65.9, 1293.0], [66.0, 1302.0], [66.1, 1309.0], [66.2, 1312.0], [66.3, 1314.0], [66.4, 1316.0], [66.5, 1320.0], [66.6, 1324.0], [66.7, 1332.0], [66.8, 1341.0], [66.9, 1345.0], [67.0, 1355.0], [67.1, 1362.0], [67.2, 1370.0], [67.3, 1378.0], [67.4, 1392.0], [67.5, 1406.0], [67.6, 1412.0], [67.7, 1416.0], [67.8, 1420.0], [67.9, 1429.0], [68.0, 1431.0], [68.1, 1436.0], [68.2, 1447.0], [68.3, 1449.0], [68.4, 1451.0], [68.5, 1455.0], [68.6, 1457.0], [68.7, 1463.0], [68.8, 1464.0], [68.9, 1470.0], [69.0, 1472.0], [69.1, 1475.0], [69.2, 1479.0], [69.3, 1482.0], [69.4, 1491.0], [69.5, 1506.0], [69.6, 1513.0], [69.7, 1514.0], [69.8, 1520.0], [69.9, 1533.0], [70.0, 1540.0], [70.1, 1547.0], [70.2, 1548.0], [70.3, 1554.0], [70.4, 1574.0], [70.5, 1585.0], [70.6, 1588.0], [70.7, 1592.0], [70.8, 1594.0], [70.9, 1597.0], [71.0, 1604.0], [71.1, 1617.0], [71.2, 1656.0], [71.3, 1670.0], [71.4, 1692.0], [71.5, 1700.0], [71.6, 1704.0], [71.7, 1712.0], [71.8, 1719.0], [71.9, 1723.0], [72.0, 1752.0], [72.1, 1765.0], [72.2, 1769.0], [72.3, 1782.0], [72.4, 1788.0], [72.5, 1792.0], [72.6, 1794.0], [72.7, 1809.0], [72.8, 1833.0], [72.9, 1836.0], [73.0, 1848.0], [73.1, 1852.0], [73.2, 1890.0], [73.3, 1907.0], [73.4, 1916.0], [73.5, 1920.0], [73.6, 1924.0], [73.7, 1926.0], [73.8, 1932.0], [73.9, 1935.0], [74.0, 1943.0], [74.1, 1948.0], [74.2, 1953.0], [74.3, 1957.0], [74.4, 1981.0], [74.5, 1984.0], [74.6, 1984.0], [74.7, 1988.0], [74.8, 1998.0], [74.9, 2002.0], [75.0, 2012.0], [75.1, 2023.0], [75.2, 2023.0], [75.3, 2025.0], [75.4, 2027.0], [75.5, 2035.0], [75.6, 2046.0], [75.7, 2063.0], [75.8, 2075.0], [75.9, 2089.0], [76.0, 2094.0], [76.1, 2108.0], [76.2, 2122.0], [76.3, 2134.0], [76.4, 2147.0], [76.5, 2155.0], [76.6, 2173.0], [76.7, 2176.0], [76.8, 2184.0], [76.9, 2232.0], [77.0, 2281.0], [77.1, 2322.0], [77.2, 2345.0], [77.3, 2364.0], [77.4, 2371.0], [77.5, 2392.0], [77.6, 2408.0], [77.7, 2414.0], [77.8, 2432.0], [77.9, 2462.0], [78.0, 2476.0], [78.1, 2484.0], [78.2, 2504.0], [78.3, 2566.0], [78.4, 2598.0], [78.5, 2687.0], [78.6, 2699.0], [78.7, 2707.0], [78.8, 2721.0], [78.9, 2775.0], [79.0, 2794.0], [79.1, 2825.0], [79.2, 2850.0], [79.3, 2872.0], [79.4, 2885.0], [79.5, 2921.0], [79.6, 2935.0], [79.7, 2966.0], [79.8, 3008.0], [79.9, 3075.0], [80.0, 3106.0], [80.1, 3161.0], [80.2, 3205.0], [80.3, 3317.0], [80.4, 3409.0], [80.5, 3436.0], [80.6, 3447.0], [80.7, 3507.0], [80.8, 3526.0], [80.9, 3576.0], [81.0, 3591.0], [81.1, 3597.0], [81.2, 3613.0], [81.3, 3617.0], [81.4, 3640.0], [81.5, 3668.0], [81.6, 3698.0], [81.7, 3703.0], [81.8, 3753.0], [81.9, 3774.0], [82.0, 3779.0], [82.1, 3789.0], [82.2, 3817.0], [82.3, 3839.0], [82.4, 3847.0], [82.5, 3873.0], [82.6, 3893.0], [82.7, 3911.0], [82.8, 3942.0], [82.9, 3977.0], [83.0, 3995.0], [83.1, 4008.0], [83.2, 4014.0], [83.3, 4067.0], [83.4, 4072.0], [83.5, 4078.0], [83.6, 4089.0], [83.7, 4120.0], [83.8, 4140.0], [83.9, 4171.0], [84.0, 4192.0], [84.1, 4210.0], [84.2, 4283.0], [84.3, 4304.0], [84.4, 4315.0], [84.5, 4320.0], [84.6, 4338.0], [84.7, 4340.0], [84.8, 4362.0], [84.9, 4375.0], [85.0, 4397.0], [85.1, 4399.0], [85.2, 4401.0], [85.3, 4418.0], [85.4, 4431.0], [85.5, 4469.0], [85.6, 4525.0], [85.7, 4552.0], [85.8, 4571.0], [85.9, 4639.0], [86.0, 4664.0], [86.1, 4684.0], [86.2, 4706.0], [86.3, 4723.0], [86.4, 4741.0], [86.5, 4780.0], [86.6, 4781.0], [86.7, 4783.0], [86.8, 4798.0], [86.9, 4807.0], [87.0, 4815.0], [87.1, 4828.0], [87.2, 4856.0], [87.3, 4858.0], [87.4, 4869.0], [87.5, 4877.0], [87.6, 4888.0], [87.7, 4904.0], [87.8, 4945.0], [87.9, 4953.0], [88.0, 4989.0], [88.1, 4992.0], [88.2, 4999.0], [88.3, 5001.0], [88.4, 5006.0], [88.5, 5008.0], [88.6, 5010.0], [88.7, 5012.0], [88.8, 5019.0], [88.9, 5022.0], [89.0, 5025.0], [89.1, 5029.0], [89.2, 5038.0], [89.3, 5048.0], [89.4, 5050.0], [89.5, 5074.0], [89.6, 5088.0], [89.7, 5092.0], [89.8, 5103.0], [89.9, 5112.0], [90.0, 5118.0], [90.1, 5136.0], [90.2, 5171.0], [90.3, 5330.0], [90.4, 5336.0], [90.5, 5430.0], [90.6, 5437.0], [90.7, 5464.0], [90.8, 5499.0], [90.9, 5546.0], [91.0, 5650.0], [91.1, 5741.0], [91.2, 5820.0], [91.3, 5892.0], [91.4, 6071.0], [91.5, 6127.0], [91.6, 6137.0], [91.7, 6147.0], [91.8, 6148.0], [91.9, 6156.0], [92.0, 6160.0], [92.1, 6164.0], [92.2, 6166.0], [92.3, 6169.0], [92.4, 6179.0], [92.5, 6195.0], [92.6, 6197.0], [92.7, 6198.0], [92.8, 6200.0], [92.9, 6202.0], [93.0, 6206.0], [93.1, 6213.0], [93.2, 6219.0], [93.3, 6232.0], [93.4, 6247.0], [93.5, 6256.0], [93.6, 6257.0], [93.7, 6260.0], [93.8, 6261.0], [93.9, 6266.0], [94.0, 6275.0], [94.1, 6283.0], [94.2, 6286.0], [94.3, 6293.0], [94.4, 6304.0], [94.5, 6338.0], [94.6, 6348.0], [94.7, 6362.0], [94.8, 6367.0], [94.9, 6377.0], [95.0, 6379.0], [95.1, 6381.0], [95.2, 6393.0], [95.3, 6411.0], [95.4, 6427.0], [95.5, 6453.0], [95.6, 6458.0], [95.7, 6465.0], [95.8, 6473.0], [95.9, 6482.0], [96.0, 6489.0], [96.1, 6494.0], [96.2, 6502.0], [96.3, 6514.0], [96.4, 6561.0], [96.5, 6569.0], [96.6, 6573.0], [96.7, 6596.0], [96.8, 6608.0], [96.9, 6611.0], [97.0, 6622.0], [97.1, 6641.0], [97.2, 6659.0], [97.3, 6661.0], [97.4, 6663.0], [97.5, 6664.0], [97.6, 6681.0], [97.7, 6684.0], [97.8, 6716.0], [97.9, 6733.0], [98.0, 6734.0], [98.1, 6759.0], [98.2, 6763.0], [98.3, 6771.0], [98.4, 6776.0], [98.5, 6791.0], [98.6, 6792.0], [98.7, 6795.0], [98.8, 6816.0], [98.9, 6820.0], [99.0, 6825.0], [99.1, 6830.0], [99.2, 6833.0], [99.3, 6852.0], [99.4, 6857.0], [99.5, 6889.0], [99.6, 7054.0], [99.7, 7315.0], [99.8, 7433.0], [99.9, 7461.0]], "isOverall": false, "label": "Submit Form", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 311.0, "series": [{"data": [[0.0, 311.0], [600.0, 46.0], [700.0, 25.0], [800.0, 22.0], [900.0, 36.0], [1000.0, 50.0], [1100.0, 6.0], [1200.0, 11.0], [1300.0, 29.0], [1400.0, 41.0], [1500.0, 30.0], [1600.0, 9.0], [1700.0, 25.0], [1800.0, 12.0], [1900.0, 32.0], [2000.0, 23.0], [2100.0, 16.0], [2300.0, 9.0], [2200.0, 5.0], [2400.0, 13.0], [2500.0, 5.0], [2600.0, 4.0], [2700.0, 8.0], [2800.0, 8.0], [2900.0, 7.0], [3000.0, 4.0], [3100.0, 4.0], [3200.0, 2.0], [3300.0, 1.0], [3400.0, 7.0], [3500.0, 9.0], [3600.0, 10.0], [3700.0, 11.0], [3800.0, 9.0], [3900.0, 9.0], [4000.0, 12.0], [4100.0, 8.0], [4300.0, 17.0], [4200.0, 4.0], [4400.0, 9.0], [4600.0, 6.0], [4500.0, 5.0], [4700.0, 14.0], [4800.0, 16.0], [4900.0, 12.0], [5000.0, 30.0], [5100.0, 10.0], [5300.0, 3.0], [5200.0, 1.0], [5400.0, 8.0], [5600.0, 3.0], [5500.0, 2.0], [5700.0, 2.0], [5800.0, 3.0], [6000.0, 2.0], [6100.0, 26.0], [5900.0, 1.0], [6300.0, 18.0], [6200.0, 31.0], [6400.0, 19.0], [6500.0, 12.0], [6600.0, 19.0], [6800.0, 16.0], [6700.0, 20.0], [7000.0, 2.0], [7100.0, 1.0], [7400.0, 4.0], [7300.0, 2.0], [100.0, 270.0], [200.0, 223.0], [300.0, 119.0], [400.0, 120.0], [500.0, 81.0]], "isOverall": false, "label": "Submit Form", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 7400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 347.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1043.0, "series": [{"data": [[0.0, 1043.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 347.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 610.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 66.93309859154925, "minX": 1.76053098E12, "maxY": 71.42527932960891, "series": [{"data": [[1.76053104E12, 66.93309859154925], [1.76053098E12, 71.42527932960891]], "isOverall": false, "label": "Users", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76053104E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 20.4, "minX": 1.0, "maxY": 7459.0, "series": [{"data": [[2.0, 1456.0], [3.0, 1617.0], [4.0, 1464.0], [7.0, 33.5], [8.0, 20.4], [9.0, 35.2], [10.0, 38.27272727272727], [11.0, 46.0], [12.0, 141.93333333333334], [13.0, 296.0], [14.0, 62.88235294117648], [15.0, 136.875], [16.0, 109.35714285714285], [17.0, 77.85714285714286], [18.0, 70.57142857142857], [19.0, 65.31818181818181], [20.0, 84.7], [21.0, 286.0], [22.0, 264.05555555555554], [23.0, 260.11111111111114], [24.0, 190.70967741935485], [25.0, 193.5434782608695], [26.0, 261.8571428571429], [27.0, 255.5238095238095], [28.0, 745.7250000000001], [29.0, 401.235294117647], [30.0, 533.5], [31.0, 383.3124999999999], [33.0, 351.49999999999994], [32.0, 573.8333333333334], [35.0, 223.33333333333334], [34.0, 602.1538461538463], [37.0, 392.1111111111111], [36.0, 330.0], [39.0, 170.52631578947367], [38.0, 174.5], [41.0, 475.79999999999995], [40.0, 713.48], [43.0, 1063.2666666666667], [42.0, 348.85714285714283], [45.0, 345.2], [44.0, 284.69230769230774], [47.0, 635.1538461538462], [46.0, 306.125], [49.0, 533.0], [48.0, 508.35], [51.0, 515.1666666666667], [50.0, 398.25], [53.0, 513.5897435897436], [52.0, 429.9285714285714], [55.0, 839.2857142857141], [54.0, 732.578947368421], [57.0, 875.9722222222221], [56.0, 947.3076923076923], [59.0, 979.1000000000001], [58.0, 626.7142857142856], [61.0, 724.0740740740741], [60.0, 709.5], [63.0, 2012.5909090909092], [62.0, 1687.607142857143], [67.0, 1792.3469387755101], [66.0, 2045.0512820512822], [65.0, 1741.0000000000002], [64.0, 1442.107142857143], [71.0, 814.375], [70.0, 1016.6086956521739], [69.0, 1903.7999999999997], [68.0, 661.311475409836], [75.0, 1751.0], [74.0, 2358.8], [73.0, 1505.5], [72.0, 1460.2857142857142], [79.0, 2809.0], [78.0, 1810.3333333333335], [77.0, 2533.0], [76.0, 1039.5555555555557], [83.0, 2386.181818181818], [82.0, 1097.6875], [81.0, 2862.3333333333335], [80.0, 1537.6666666666665], [86.0, 2117.083333333333], [85.0, 1221.6666666666665], [84.0, 3888.6923076923076], [87.0, 2087.8571428571427], [91.0, 1216.4], [90.0, 1240.6], [89.0, 2685.6666666666665], [88.0, 3690.571428571429], [95.0, 2342.3333333333335], [94.0, 6828.0], [93.0, 2775.5], [92.0, 5367.333333333333], [99.0, 2058.0000000000005], [98.0, 2463.875], [97.0, 3583.5], [96.0, 5038.0], [103.0, 1266.0000000000002], [102.0, 1432.3333333333333], [101.0, 2298.2], [100.0, 3400.5], [107.0, 2415.75], [106.0, 2671.3333333333335], [104.0, 2754.3333333333335], [105.0, 1232.25], [111.0, 4571.333333333333], [110.0, 2926.6666666666665], [109.0, 1736.2580645161288], [108.0, 1426.4], [115.0, 3749.5], [114.0, 4542.0], [113.0, 4921.25], [112.0, 4988.625], [118.0, 885.0], [117.0, 977.25], [116.0, 1135.2], [123.0, 6200.0], [121.0, 6232.0], [126.0, 6166.0], [125.0, 6219.0], [135.0, 7459.0], [134.0, 6860.5], [133.0, 6256.0], [132.0, 6852.0], [131.0, 6276.0], [130.0, 6255.3], [129.0, 6293.0], [128.0, 6201.0], [143.0, 6642.0], [142.0, 6559.0], [141.0, 6253.25], [139.0, 6301.0], [140.0, 6284.0], [136.0, 6326.0], [150.0, 2055.3], [151.0, 2630.0], [149.0, 6494.0], [148.0, 6465.0], [147.0, 6318.0], [146.0, 6425.166666666667], [145.0, 6164.0], [155.0, 2937.4], [156.0, 3014.666666666667], [157.0, 3110.5], [158.0, 3016.272727272727], [153.0, 2682.3333333333335], [154.0, 4174.0], [159.0, 3414.1739130434785], [152.0, 6453.0], [160.0, 4059.0], [161.0, 3409.0], [162.0, 4266.35294117647], [164.0, 4924.5], [165.0, 4638.599999999999], [166.0, 4983.818181818182], [167.0, 4595.8], [163.0, 6857.0], [175.0, 6762.0], [173.0, 6497.0], [171.0, 7315.0], [170.0, 6817.0], [169.0, 6824.0], [168.0, 6816.0], [178.0, 5422.0], [179.0, 6222.3], [181.0, 4902.421052631579], [182.0, 5332.0], [183.0, 4933.5], [176.0, 6470.0], [191.0, 4391.8], [190.0, 5137.444444444445], [189.0, 4453.0], [188.0, 5054.5], [187.0, 4801.0], [186.0, 4780.0], [185.0, 4856.0], [184.0, 4819.5], [194.0, 4163.75], [193.0, 4120.75], [192.0, 4443.5], [1.0, 907.0]], "isOverall": false, "label": "Submit Form", "isController": false}, {"data": [[70.06700000000004, 1551.5905000000027]], "isOverall": false, "label": "Submit Form-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 194.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 2650.6666666666665, "minX": 1.76053098E12, "maxY": 7064.533333333334, "series": [{"data": [[1.76053104E12, 2650.6666666666665], [1.76053098E12, 6682.666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.76053104E12, 2802.133333333333], [1.76053098E12, 7064.533333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76053104E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1434.0264084507035, "minX": 1.76053098E12, "maxY": 1598.2220670391068, "series": [{"data": [[1.76053104E12, 1434.0264084507035], [1.76053098E12, 1598.2220670391068]], "isOverall": false, "label": "Submit Form", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76053104E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1430.6549295774644, "minX": 1.76053098E12, "maxY": 1594.26675977654, "series": [{"data": [[1.76053104E12, 1430.6549295774644], [1.76053098E12, 1594.26675977654]], "isOverall": false, "label": "Submit Form", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76053104E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 15.88380281690143, "minX": 1.76053098E12, "maxY": 58.54120111731851, "series": [{"data": [[1.76053104E12, 15.88380281690143], [1.76053098E12, 58.54120111731851]], "isOverall": false, "label": "Submit Form", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76053104E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 6.0, "minX": 1.76053098E12, "maxY": 7473.0, "series": [{"data": [[1.76053104E12, 7322.0], [1.76053098E12, 7473.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.76053104E12, 4352.7000000000035], [1.76053098E12, 5217.900000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.76053104E12, 6833.0], [1.76053098E12, 6822.68]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.76053104E12, 6664.55], [1.76053098E12, 6288.099999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.76053104E12, 23.0], [1.76053098E12, 6.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.76053104E12, 679.0], [1.76053098E12, 366.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76053104E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 60.5, "minX": 1.0, "maxY": 6574.0, "series": [{"data": [[39.0, 6574.0], [43.0, 4864.0], [46.0, 1418.5], [48.0, 2074.5], [76.0, 2221.0], [82.0, 1015.0], [90.0, 6206.0], [100.0, 157.0], [107.0, 501.0], [121.0, 214.0], [135.0, 626.0], [131.0, 583.0], [136.0, 196.0], [10.0, 3543.0], [168.0, 193.0], [177.0, 153.0], [12.0, 2934.5], [13.0, 3873.0], [14.0, 2642.5], [232.0, 60.5], [1.0, 5499.0], [17.0, 6569.0], [18.0, 4857.0], [25.0, 4340.0], [26.0, 1848.0], [28.0, 1309.0], [29.0, 4320.0], [31.0, 2775.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 232.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 60.5, "minX": 1.0, "maxY": 6574.0, "series": [{"data": [[39.0, 6574.0], [43.0, 4864.0], [46.0, 1418.5], [48.0, 2074.5], [76.0, 2221.0], [82.0, 1013.0], [90.0, 6206.0], [100.0, 157.0], [107.0, 477.0], [121.0, 214.0], [135.0, 626.0], [131.0, 583.0], [136.0, 196.0], [10.0, 3543.0], [168.0, 193.0], [177.0, 153.0], [12.0, 2915.5], [13.0, 3873.0], [14.0, 2642.5], [232.0, 60.5], [1.0, 5036.0], [17.0, 6569.0], [18.0, 4856.5], [25.0, 4340.0], [26.0, 1848.0], [28.0, 1309.0], [29.0, 4320.0], [31.0, 2775.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 232.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 8.033333333333333, "minX": 1.76053098E12, "maxY": 25.3, "series": [{"data": [[1.76053104E12, 8.033333333333333], [1.76053098E12, 25.3]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76053104E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 9.466666666666667, "minX": 1.76053098E12, "maxY": 23.866666666666667, "series": [{"data": [[1.76053104E12, 9.466666666666667], [1.76053098E12, 23.866666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.76053104E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 9.466666666666667, "minX": 1.76053098E12, "maxY": 23.866666666666667, "series": [{"data": [[1.76053104E12, 9.466666666666667], [1.76053098E12, 23.866666666666667]], "isOverall": false, "label": "Submit Form-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76053104E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 9.466666666666667, "minX": 1.76053098E12, "maxY": 23.866666666666667, "series": [{"data": [[1.76053104E12, 9.466666666666667], [1.76053098E12, 23.866666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.76053104E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

